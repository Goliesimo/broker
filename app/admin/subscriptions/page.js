"use client";
import { useState, useEffect } from "react";
import { AdminLayout } from "../page";
import "../../styles/admin-subscriptions.css";

const PLAN_COLORS = { starter:"#4A9EFF", growth:"#00D4AA", pro:"#7B61FF", elite:"#FFB800", titan:"#FF6B35" };

export default function AdminSubscriptions() {
  const [subs,    setSubs]    = useState([]);
  const [filter,  setFilter]  = useState("pending");
  const [loading, setLoading] = useState(true);
  const [notes,   setNotes]   = useState({});
  const [toast,   setToast]   = useState("");
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fetch("/api/subscriptions")
      .then(r => r.json())
      .then(d => { setSubs(d.subscriptions || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(""), 3500); };

  const handleAction = async (sub, status) => {
    const note = notes[sub.id] || "";
    const res  = await fetch("/api/subscriptions", {
      method:"PATCH",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ subId:sub.id, status, note, userId:sub.userId, planId:sub.planId }),
    });
    const data = await res.json();
    if (res.ok) {
      setSubs(prev => prev.map(s => s.id === sub.id ? { ...s, status, note } : s));
      showToast(status === "approved"
        ? `✅ ${sub.userName}'s ${sub.planName} plan approved!`
        : `❌ ${sub.userName}'s submission rejected.`
      );
    } else {
      showToast("Error: " + data.error);
    }
  };

  const filtered = filter === "all" ? subs : subs.filter(s => s.status === filter);
  const pending  = subs.filter(s => s.status === "pending").length;
  const approved = subs.filter(s => s.status === "approved").length;
  const rejected = subs.filter(s => s.status === "rejected").length;

  return (
    <AdminLayout>
      <div className="admin-topbar fade-in">
        <div>
          <div className="admin-topbar-title">Plan Subscriptions</div>
          <div className="admin-topbar-sub">Review and approve payment submissions</div>
        </div>
        {pending > 0 && (
          <div style={{background:"rgba(255,184,0,0.1)",border:"1px solid rgba(255,184,0,0.3)",borderRadius:"var(--radius)",padding:"10px 16px",fontSize:13,color:"var(--gold)",fontWeight:600}}>
            ⚠ {pending} pending review
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="sub-stats-grid fade-up">
        {[
          { label:"Total Submissions", value:subs.length,  color:"var(--text)" },
          { label:"Pending Review",    value:pending,       color:"var(--gold)" },
          { label:"Approved",          value:approved,      color:"var(--teal)" },
          { label:"Rejected",          value:rejected,      color:"var(--red)"  },
        ].map((s,i) => (
          <div key={i} className="admin-stat-card">
            <div className="admin-stat-label">{s.label}</div>
            <div className="admin-stat-value" style={{color:s.color}}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="sub-filters fade-up-2">
        {["all","pending","approved","rejected"].map(f => (
          <button
            key={f}
            className={`filter-btn${filter===f?" active":""}`}
            style={{textTransform:"capitalize"}}
            onClick={() => setFilter(f)}
          >
            {f} {f==="pending" && pending > 0 && <span style={{background:"var(--gold)",color:"#050B18",borderRadius:99,padding:"0 6px",fontSize:10,fontWeight:700,marginLeft:4}}>{pending}</span>}
          </button>
        ))}
        <div style={{marginLeft:"auto",fontSize:13,color:"var(--text-dim)"}}>{filtered.length} results</div>
      </div>

      {/* Subscription cards */}
      {loading ? (
        <div style={{padding:60,textAlign:"center",color:"var(--text-dim)"}}>Loading submissions…</div>
      ) : filtered.length === 0 ? (
        <div style={{padding:60,textAlign:"center",color:"var(--text-dim)"}}>
          <div style={{fontSize:40,marginBottom:12}}>📭</div>
          No {filter === "all" ? "" : filter} submissions yet.
        </div>
      ) : (
        filtered.map(sub => (
          <div key={sub.id} className="sub-card fade-up">
            {/* Card header */}
            <div className="sub-card-head">
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <div style={{width:40,height:40,borderRadius:"50%",background:"linear-gradient(135deg,var(--teal),var(--blue))",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,color:"#050B18",fontSize:14}}>
                  {sub.userName?.split(" ").map(n=>n[0]).join("").toUpperCase().slice(0,2)}
                </div>
                <div>
                  <div style={{fontWeight:600,fontSize:14}}>{sub.userName}</div>
                  <div style={{fontSize:12,color:"var(--text-dim)"}}>{sub.userEmail}</div>
                </div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <span style={{color:PLAN_COLORS[sub.planId],fontWeight:700,fontSize:14}}>{sub.planName} Plan</span>
                <span style={{fontFamily:"var(--font-mono)",fontWeight:700,color:"var(--teal)",fontSize:15}}>${sub.planPrice?.toLocaleString()}</span>
                <span className={`badge badge-${sub.status==="approved"?"active":sub.status==="rejected"?"rejected":"pending"}`}>
                  {sub.status}
                </span>
              </div>
            </div>

            {/* Card body */}
            <div className="sub-card-body">
              <div>
                <div className="sub-info-label">Transaction ID (TXID)</div>
                <div className="sub-info-value sub-info-mono">{sub.txid}</div>
                <div style={{marginTop:12}}>
                  <div className="sub-info-label">Crypto Used</div>
                  <div className="sub-info-value">{sub.crypto}</div>
                </div>
                <div style={{marginTop:12}}>
                  <div className="sub-info-label">Submitted</div>
                  <div className="sub-info-value">{new Date(sub.submittedAt).toLocaleString()}</div>
                </div>
              </div>
              <div>
                <div className="sub-info-label">Sender Wallet Address</div>
                <div className="sub-info-value sub-info-mono">{sub.senderWallet}</div>
                <div style={{marginTop:12}}>
                  <div className="sub-info-label">Destination Wallet</div>
                  <div className="sub-info-value sub-info-mono">{sub.walletAddress}</div>
                </div>
                {sub.note && (
                  <div style={{marginTop:12}}>
                    <div className="sub-info-label">Admin Note</div>
                    <div className="sub-info-value" style={{color:"var(--text-dim)"}}>{sub.note}</div>
                  </div>
                )}
              </div>
              <div>
                <div className="sub-info-label">Payment Screenshot</div>
                {sub.screenshotBase64 ? (
                  <img
                    src={sub.screenshotBase64}
                    alt="Payment proof"
                    className="sub-screenshot"
                    onClick={() => setPreview(sub.screenshotBase64)}
                  />
                ) : (
                  <div className="sub-screenshot-placeholder">No screenshot uploaded</div>
                )}
              </div>
            </div>

            {/* Card footer — actions */}
            {sub.status === "pending" && (
              <div className="sub-card-foot">
                <textarea
                  className="note-input"
                  rows={1}
                  placeholder="Optional note to user (e.g. reason for rejection)…"
                  value={notes[sub.id] || ""}
                  onChange={e => setNotes(prev => ({...prev, [sub.id]:e.target.value}))}
                  style={{flex:1}}
                />
                <div style={{display:"flex",gap:8,flexShrink:0}}>
                  <button className="reject-btn"  style={{padding:"8px 16px",fontSize:13}} onClick={() => handleAction(sub,"rejected")}>✗ Reject</button>
                  <button className="approve-btn" style={{padding:"8px 20px",fontSize:13}} onClick={() => handleAction(sub,"approved")}>✓ Approve & Activate</button>
                </div>
              </div>
            )}
            {sub.status !== "pending" && (
              <div className="sub-card-foot" style={{justifyContent:"flex-end"}}>
                <span style={{fontSize:12,color:"var(--text-muted)"}}>
                  Reviewed {sub.reviewedAt ? new Date(sub.reviewedAt).toLocaleString() : ""}
                </span>
              </div>
            )}
          </div>
        ))
      )}

      {/* Screenshot fullscreen preview */}
      {preview && (
        <div className="fullscreen-overlay" onClick={() => setPreview(null)}>
          <img src={preview} alt="Screenshot preview" />
        </div>
      )}

      {toast && <div className="admin-toast">{toast}</div>}
    </AdminLayout>
  );
}
