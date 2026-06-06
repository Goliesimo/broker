"use client";
import { useState, useEffect } from "react";
import { AdminLayout } from "../page";
import "../../styles/admin-users.css";

const PLAN_COLORS = { starter:"#4A9EFF", growth:"#00D4AA", pro:"#7B61FF", elite:"#FFB800", titan:"#FF6B35" };

export default function AdminUsers() {
  const [users,    setUsers]    = useState([]);
  const [search,   setSearch]   = useState("");
  const [filter,   setFilter]   = useState("all");
  const [selected, setSelected] = useState(null);
  const [loading,  setLoading]  = useState(true);
  const [toast,    setToast]    = useState("");

  // Balance adjustment state
  const [balModal,  setBalModal]  = useState(null); // user object
  const [balType,   setBalType]   = useState("add"); // "add" | "subtract"
  const [balField,  setBalField]  = useState("balance"); // "balance" | "invested" | "profit"
  const [balAmount, setBalAmount] = useState("");
  const [balRemark, setBalRemark] = useState("");
  const [balLoading,setBalLoading]= useState(false);

  useEffect(() => {
    fetch("/api/users")
      .then(r => r.json())
      .then(d => { setUsers(d.users || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(""), 3500); };

  const filtered = users.filter(u => {
    const matchSearch = u.name?.toLowerCase().includes(search.toLowerCase()) || u.email?.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || u.status === filter || u.plan === filter;
    return matchSearch && matchFilter;
  });

  const handleStatus = async (userId, status) => {
    await fetch("/api/users", { method:"PATCH", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ userId, status }) });
    setUsers(prev => prev.map(u => u.id === userId ? { ...u, status } : u));
    if (selected?.id === userId) setSelected(prev => ({ ...prev, status }));
  };

  const handleDelete = async (userId) => {
    if (!confirm("Delete this user permanently?")) return;
    await fetch(`/api/users?id=${userId}`, { method:"DELETE" });
    setUsers(prev => prev.filter(u => u.id !== userId));
    setSelected(null);
  };

  const handleBalanceSubmit = async (e) => {
    e.preventDefault();
    const amount = parseFloat(balAmount);
    if (!amount || amount <= 0) return;
    setBalLoading(true);

    const user    = balModal;
    const current = parseFloat(user[balField]) || 0;
    const updated = balType === "add" ? current + amount : Math.max(0, current - amount);

    const res = await fetch("/api/users", {
      method:"PATCH",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ userId:user.id, [balField]: updated }),
    });

    if (res.ok) {
      setUsers(prev => prev.map(u => u.id === user.id ? { ...u, [balField]: updated } : u));
      if (selected?.id === user.id) setSelected(prev => ({ ...prev, [balField]: updated }));
      showToast(`✅ ${balType === "add" ? "Added" : "Subtracted"} $${amount.toLocaleString()} ${balType === "add" ? "to" : "from"} ${user.name}'s ${balField}.${balRemark ? ` Remark: "${balRemark}"` : ""}`);
      setBalModal(null);
      setBalAmount("");
      setBalRemark("");
    } else {
      showToast("❌ Failed to update balance.");
    }
    setBalLoading(false);
  };

  const initials = (name) => name ? name.split(" ").map(n=>n[0]).join("").toUpperCase().slice(0,2) : "U";

  return (
    <AdminLayout>
      <div className="admin-topbar fade-in">
        <div>
          <div className="admin-topbar-title">User Management</div>
          <div className="admin-topbar-sub">{users.length} total users registered</div>
        </div>
      </div>

      <div className="users-filters fade-up">
        <div className="search-wrap">
          <span className="search-icon">🔍</span>
          <input className="input search-input" placeholder="Search by name or email…" value={search} onChange={e=>setSearch(e.target.value)} />
        </div>
        {["all","active","suspended","starter","growth","pro","elite","titan"].map(f => (
          <button key={f} className={`filter-btn${filter===f?" active":""}`} onClick={()=>setFilter(f)} style={{textTransform:"capitalize"}}>{f}</button>
        ))}
      </div>

      <div className="users-table-card fade-up-2">
        <div className="users-table-header">
          <div className="users-table-title">All Users</div>
          <div className="users-count">{filtered.length} results</div>
        </div>
        {loading ? (
          <div style={{padding:40,textAlign:"center",color:"var(--text-dim)"}}>Loading users…</div>
        ) : (
          <table className="table">
            <thead><tr>{["User","Plan","Balance","Invested","Status","Joined","Actions"].map(h=><th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {filtered.map(u => (
                <tr key={u.id}>
                  <td>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <div className="user-avatar">{initials(u.name)}</div>
                      <div>
                        <div className="user-name">{u.name}</div>
                        <div className="user-email">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td><span className="plan-chip" style={{color:PLAN_COLORS[u.plan]||"var(--text-dim)",borderColor:PLAN_COLORS[u.plan]||"var(--border)"}}>{u.plan}</span></td>
                  <td style={{fontWeight:600,color:"var(--teal)"}}>${(u.balance||0).toLocaleString()}</td>
                  <td style={{color:"var(--text-dim)"}}>${(u.invested||0).toLocaleString()}</td>
                  <td><span className={`badge badge-${u.status}`}>{u.status}</span></td>
                  <td style={{color:"var(--text-dim)",fontSize:12}}>{u.createdAt?.split("T")[0]}</td>
                  <td>
                    <div className="actions-cell">
                      <button className="icon-btn" title="View" onClick={()=>setSelected(u)}>👁</button>
                      <button className="icon-btn" title="Adjust Balance" onClick={()=>{ setBalModal(u); setBalType("add"); setBalField("balance"); setBalAmount(""); setBalRemark(""); }} style={{color:"var(--teal)"}}>💰</button>
                      {u.status==="active"
                        ? <button className="icon-btn" title="Suspend" onClick={()=>handleStatus(u.id,"suspended")}>🚫</button>
                        : <button className="icon-btn" title="Activate" onClick={()=>handleStatus(u.id,"active")}>✅</button>
                      }
                      <button className="icon-btn danger" title="Delete" onClick={()=>handleDelete(u.id)}>🗑</button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} style={{textAlign:"center",padding:40,color:"var(--text-dim)"}}>No users match your search.</td></tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Balance Adjustment Modal ── */}
      {balModal && (
        <div className="modal-overlay" onClick={()=>setBalModal(null)}>
          <div className="user-modal" onClick={e=>e.stopPropagation()} style={{maxWidth:460}}>
            <div className="user-modal-head">
              <div>
                <div className="user-modal-avatar">{initials(balModal.name)}</div>
                <div className="user-modal-name">{balModal.name}</div>
                <div className="user-modal-email">{balModal.email}</div>
              </div>
              <button onClick={()=>setBalModal(null)} style={{background:"none",border:"none",color:"var(--text-dim)",fontSize:20,cursor:"pointer"}}>✕</button>
            </div>
            <div className="user-modal-body">

              {/* Current values */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:20}}>
                {[
                  { label:"Balance",  key:"balance",  color:"var(--teal)" },
                  { label:"Invested", key:"invested",  color:"var(--blue)" },
                  { label:"Profit",   key:"profit",    color:"var(--gold)" },
                ].map(f => (
                  <div key={f.key} style={{background:"var(--surface-2)",border:`1px solid ${balField===f.key?"var(--teal)":"var(--border)"}`,borderRadius:"var(--radius)",padding:"12px",textAlign:"center",cursor:"pointer",transition:"var(--transition)"}} onClick={()=>setBalField(f.key)}>
                    <div style={{fontSize:10,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.8px",marginBottom:4}}>{f.label}</div>
                    <div style={{fontWeight:700,color:f.color,fontSize:15}}>${(balModal[f.key]||0).toLocaleString()}</div>
                    {balField===f.key && <div style={{fontSize:9,color:"var(--teal)",marginTop:4}}>● Selected</div>}
                  </div>
                ))}
              </div>

              <form onSubmit={handleBalanceSubmit} style={{display:"flex",flexDirection:"column",gap:14}}>

                {/* Add or Subtract toggle */}
                <div>
                  <div className="input-label" style={{marginBottom:8}}>Action</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                    <button type="button"
                      onClick={()=>setBalType("add")}
                      style={{padding:"10px",borderRadius:"var(--radius)",border:`1px solid ${balType==="add"?"var(--teal)":"var(--border)"}`,background:balType==="add"?"rgba(0,212,170,0.1)":"var(--surface-2)",color:balType==="add"?"var(--teal)":"var(--text-dim)",fontWeight:600,cursor:"pointer",fontSize:14,transition:"var(--transition)"}}>
                      ➕ Add Funds
                    </button>
                    <button type="button"
                      onClick={()=>setBalType("subtract")}
                      style={{padding:"10px",borderRadius:"var(--radius)",border:`1px solid ${balType==="subtract"?"var(--red)":"var(--border)"}`,background:balType==="subtract"?"rgba(255,77,106,0.1)":"var(--surface-2)",color:balType==="subtract"?"var(--red)":"var(--text-dim)",fontWeight:600,cursor:"pointer",fontSize:14,transition:"var(--transition)"}}>
                      ➖ Subtract Funds
                    </button>
                  </div>
                </div>

                {/* Amount */}
                <div className="form-group">
                  <label className="input-label">
                    Amount (USD) — adjusting <strong style={{color:"var(--teal)",textTransform:"capitalize"}}>{balField}</strong>
                  </label>
                  <input
                    className="input"
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder="Enter amount e.g. 500"
                    value={balAmount}
                    onChange={e=>setBalAmount(e.target.value)}
                    required
                  />
                  {balAmount && (
                    <div style={{fontSize:12,marginTop:6,color:balType==="add"?"var(--teal)":"var(--red)"}}>
                      New {balField}: <strong>${(Math.max(0,(parseFloat(balModal[balField])||0) + (balType==="add"?1:-1)*parseFloat(balAmount||0))).toLocaleString()}</strong>
                    </div>
                  )}
                </div>

                {/* Remark */}
                <div className="form-group">
                  <label className="input-label">Remark / Reason</label>
                  <input
                    className="input"
                    placeholder="e.g. Monthly profit credit, Bonus, Correction…"
                    value={balRemark}
                    onChange={e=>setBalRemark(e.target.value)}
                  />
                </div>

                <div style={{display:"flex",gap:10}}>
                  <button type="button" className="btn btn-ghost" style={{flex:1}} onClick={()=>setBalModal(null)}>Cancel</button>
                  <button
                    type="submit"
                    className="btn"
                    disabled={balLoading}
                    style={{flex:2,background:balType==="add"?"var(--teal)":"var(--red)",color:balType==="add"?"#050B18":"#fff",border:"none"}}
                  >
                    {balLoading ? "Updating…" : balType==="add" ? `➕ Add $${balAmount||"0"}` : `➖ Subtract $${balAmount||"0"}`}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ── User Detail Modal ── */}
      {selected && (
        <div className="modal-overlay" onClick={()=>setSelected(null)}>
          <div className="user-modal" onClick={e=>e.stopPropagation()}>
            <div className="user-modal-head">
              <div>
                <div className="user-modal-avatar">{initials(selected.name)}</div>
                <div className="user-modal-name">{selected.name}</div>
                <div className="user-modal-email">{selected.email}</div>
              </div>
              <button onClick={()=>setSelected(null)} style={{background:"none",border:"none",color:"var(--text-dim)",fontSize:20,cursor:"pointer"}}>✕</button>
            </div>
            <div className="user-modal-body">
              <div className="user-info-grid">
                {[
                  { label:"Plan",        value: selected.plan },
                  { label:"Status",      value: selected.status },
                  { label:"Balance",     value: `$${(selected.balance||0).toLocaleString()}` },
                  { label:"Invested",    value: `$${(selected.invested||0).toLocaleString()}` },
                  { label:"Total Profit",value: `$${(selected.profit||0).toLocaleString()}` },
                  { label:"User ID",     value: selected.id },
                  { label:"Joined",      value: selected.createdAt?.split("T")[0] },
                  { label:"Last Active", value: selected.lastActive?.split("T")[0] },
                ].map((item,i) => (
                  <div key={i} className="user-info-item">
                    <div className="user-info-label">{item.label}</div>
                    <div className="user-info-value" style={{textTransform:"capitalize"}}>{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="user-modal-actions">
                <button className="btn btn-outline" onClick={()=>{ setSelected(null); setBalModal(selected); setBalType("add"); setBalField("balance"); setBalAmount(""); setBalRemark(""); }}>💰 Adjust Balance</button>
                {selected.status === "active"
                  ? <button className="btn btn-danger" onClick={()=>handleStatus(selected.id,"suspended")}>🚫 Suspend</button>
                  : <button className="btn btn-outline" onClick={()=>handleStatus(selected.id,"active")}>✅ Activate</button>
                }
                <button className="btn btn-danger" onClick={()=>handleDelete(selected.id)}>🗑 Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="admin-toast">{toast}</div>}
    </AdminLayout>
  );
}
