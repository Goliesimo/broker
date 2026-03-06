"use client";
import { useState, useEffect } from "react";
import { AdminLayout } from "../page";
import "../../styles/admin-transactions.css";

export default function AdminTransactions() {
  const [txns,    setTxns]    = useState([]);
  const [filter,  setFilter]  = useState({ type:"all", status:"all" });
  const [loading, setLoading] = useState(true);
  const [toast,   setToast]   = useState("");

  useEffect(() => {
    fetch("/api/transactions")
      .then(r=>r.json())
      .then(d=>{ setTxns(d.transactions||[]); setLoading(false); })
      .catch(()=>setLoading(false));
  }, []);

  const showToast = (msg) => { setToast(msg); setTimeout(()=>setToast(""),3000); };

  const updateStatus = async (txId, status) => {
    const res  = await fetch("/api/transactions", { method:"PATCH", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ txId, status }) });
    const data = await res.json();
    if (res.ok) {
      setTxns(prev => prev.map(t => t.id === txId ? { ...t, status } : t));
      showToast(status==="completed" ? "✅ Withdrawal approved!" : "❌ Withdrawal rejected.");
    }
  };

  const filtered = txns.filter(t => {
    const matchType   = filter.type   === "all" || t.type   === filter.type;
    const matchStatus = filter.status === "all" || t.status === filter.status;
    return matchType && matchStatus;
  });

  const total     = txns.reduce((sum,t)=>t.type==="deposit"?sum+t.amount:sum, 0);
  const withdrawn = txns.reduce((sum,t)=>t.type==="withdrawal"&&t.status==="completed"?sum+t.amount:sum, 0);
  const pending   = txns.filter(t=>t.status==="pending").length;
  const profits   = txns.reduce((sum,t)=>t.type==="profit"?sum+t.amount:sum, 0);

  return (
    <AdminLayout>
      <div className="admin-topbar fade-in">
        <div>
          <div className="admin-topbar-title">Transactions</div>
          <div className="admin-topbar-sub">Approve or reject pending withdrawals</div>
        </div>
      </div>

      <div className="txn-summary-grid fade-up">
        {[
          { label:"Total Deposited",  value:`$${total.toLocaleString()}`,     sub:`${txns.filter(t=>t.type==="deposit").length} deposits` },
          { label:"Total Withdrawn",  value:`$${withdrawn.toLocaleString()}`, sub:"Completed only" },
          { label:"Profits Credited", value:`$${profits.toLocaleString()}`,   sub:"Auto payouts" },
          { label:"Pending",          value:pending,                           sub:"Awaiting action" },
        ].map((s,i)=>(
          <div key={i} className="txn-summary-card">
            <div className="txn-summary-label">{s.label}</div>
            <div className="txn-summary-value">{s.value}</div>
            <div className="txn-summary-sub">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="txn-toolbar fade-up-2">
        <div className="txn-filters">
          {["all","deposit","withdrawal","profit"].map(t=>(
            <button key={t} className={`filter-btn${filter.type===t?" active":""}`} style={{textTransform:"capitalize"}} onClick={()=>setFilter(p=>({...p,type:t}))}>{t}</button>
          ))}
          <div style={{width:1,height:24,background:"var(--border)",margin:"0 4px"}} />
          {["all","completed","pending","rejected"].map(s=>(
            <button key={s} className={`filter-btn${filter.status===s?" active":""}`} style={{textTransform:"capitalize"}} onClick={()=>setFilter(p=>({...p,status:s}))}>{s}</button>
          ))}
        </div>
        <div style={{fontSize:13,color:"var(--text-dim)"}}>{filtered.length} results</div>
      </div>

      <div className="card fade-up-3" style={{padding:0,overflow:"hidden"}}>
        {loading ? (
          <div style={{padding:40,textAlign:"center",color:"var(--text-dim)"}}>Loading transactions…</div>
        ) : (
          <table className="table">
            <thead><tr>{["ID","User","Type","Amount","Method","Plan","Status","Date","Actions"].map(h=><th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {filtered.map(tx=>(
                <tr key={tx.id}>
                  <td style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--text-dim)"}}>{tx.id}</td>
                  <td style={{fontWeight:500}}>{tx.user}</td>
                  <td><span className={`txn-type-badge txn-type-${tx.type}`}>{tx.type==="deposit"?"⬇":tx.type==="withdrawal"?"⬆":"💰"} {tx.type}</span></td>
                  <td style={{fontWeight:700,color:tx.type==="withdrawal"?"var(--red)":"var(--teal)"}}>{tx.type==="withdrawal"?"-":"+"}${tx.amount.toLocaleString()}</td>
                  <td style={{color:"var(--text-dim)"}}>{tx.method}</td>
                  <td style={{textTransform:"capitalize",color:"var(--text-dim)"}}>{tx.plan}</td>
                  <td><span className={`badge badge-${tx.status}`}>{tx.status}</span></td>
                  <td style={{color:"var(--text-dim)",fontSize:12}}>{tx.date}</td>
                  <td>
                    {tx.type==="withdrawal" && tx.status==="pending" ? (
                      <div className="txn-actions">
                        <button className="approve-btn" onClick={()=>updateStatus(tx.id,"completed")}>✓ Approve</button>
                        <button className="reject-btn"  onClick={()=>updateStatus(tx.id,"rejected")}>✗ Reject</button>
                      </div>
                    ) : (
                      <span style={{fontSize:12,color:"var(--text-muted)"}}>—</span>
                    )}
                  </td>
                </tr>
              ))}
              {filtered.length===0 && (
                <tr><td colSpan={9} style={{textAlign:"center",padding:40,color:"var(--text-dim)"}}>No transactions found.</td></tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {toast && <div className="admin-toast">{toast}</div>}
    </AdminLayout>
  );
}
