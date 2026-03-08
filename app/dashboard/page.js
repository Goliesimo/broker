"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CRYPTO_PRICES, PLANS } from "../../lib/data";
import "../styles/dashboard.css";

const MONTHS   = ["Aug","Sep","Oct","Nov","Dec","Jan","Feb"];
const EARNINGS = [320,480,600,580,840,960,1080];
const NAV = [
  { id:"overview",     icon:"📊", label:"Overview" },
  { id:"transactions", icon:"🔄", label:"Transactions" },
  { id:"markets",      icon:"📈", label:"Markets" },
  { id:"settings",     icon:"⚙️",  label:"Settings" },
];
const MOCK_TXN = [
  { id:"tx-001", type:"deposit",    amount:5000, status:"completed", date:"2026-02-01", method:"USDT"   },
  { id:"tx-002", type:"profit",     amount:600,  status:"completed", date:"2026-02-10", method:"System" },
  { id:"tx-003", type:"withdrawal", amount:400,  status:"completed", date:"2026-01-20", method:"USDT"   },
  { id:"tx-004", type:"withdrawal", amount:800,  status:"pending",   date:"2026-02-22", method:"BTC"    },
];

// Read session cookie directly
function readSession() {
  if (typeof document === "undefined") return null;
  try {
    const all = document.cookie.split("; ");
    const match = all.find(c => c.startsWith("cv_session="));
    if (!match) return null;
    const val = match.substring("cv_session=".length);
    return JSON.parse(decodeURIComponent(val));
  } catch {
    return null;
  }
}

export default function DashboardPage() {
  const router = useRouter();
  const [user,     setUser]     = useState(null);
  const [ready,    setReady]    = useState(false);
  const [tab,      setTab]      = useState("overview");
  const [chartTab, setChartTab] = useState("7d");
  const [modal,    setModal]    = useState(null);
  const [txForm,   setTxForm]   = useState({ amount:"", crypto:"USDT" });
  const [txDone,   setTxDone]   = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const session = readSession();
      if (session) {
        // Fetch real user data from MongoDB
        try {
          const res = await fetch(`/api/users?id=${session.id}`);
          if (res.ok) {
            const data = await res.json();
            setUser(data.user);
          } else {
            setUser({ id:session.id, name:session.name, email:session.email, role:session.role, plan:session.plan, balance:0, invested:0, profit:0 });
          }
        } catch {
          setUser({ id:session.id, name:session.name, email:session.email, role:session.role, plan:session.plan, balance:0, invested:0, profit:0 });
        }
        // Fetch real transactions
        try {
          const res = await fetch(`/api/transactions?userId=${session.id}`);
          if (res.ok) {
            const data = await res.json();
            setTransactions(data.transactions || []);
          }
        } catch { setTransactions(MOCK_TXN); }
      } else {
        setUser({ id:"u-demo", name:"Demo User", email:"user@demo.com", role:"user", plan:"pro", balance:6200, invested:5000, profit:1200 });
        setTransactions(MOCK_TXN);
      }
      setReady(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = async () => {
    try { await fetch("/api/auth/logout", { method:"POST" }); } catch {}
    document.cookie = "cv_session=; Max-Age=0; path=/";
    router.push("/login");
  };

  if (!ready) return (
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg)"}}>
      <div style={{textAlign:"center"}}>
        <div style={{width:40,height:40,border:"3px solid var(--surface-3)",borderTopColor:"var(--teal)",borderRadius:"50%",animation:"spin 0.8s linear infinite",margin:"0 auto 16px"}} />
        <div style={{color:"var(--text-dim)",fontSize:14}}>Loading dashboard…</div>
      </div>
    </div>
  );

  const plan     = PLANS.find(p => p.id === user.plan) || PLANS[2];
  const balance  = user.balance  || 6200;
  const invested = user.invested || 5000;
  const profit   = user.profit   || 1200;
  const initials = user.name ? user.name.split(" ").map(n=>n[0]).join("").toUpperCase() : "U";

  const handleTxSubmit = (e) => {
    e.preventDefault(); setTxDone(true);
    setTimeout(() => { setModal(null); setTxDone(false); setTxForm({amount:"",crypto:"USDT"}); }, 2200);
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">₿</div>
          <span>CryptoVault <span className="gradient-text">Pro</span></span>
        </div>
        <div className="sidebar-section-label">Main Menu</div>
        {NAV.map(n => (
          <button key={n.id} className={`sidebar-nav-item${tab===n.id?" active":""}`} onClick={()=>setTab(n.id)}>
            <span className="sidebar-nav-icon">{n.icon}</span>{n.label}
          </button>
        ))}
        <div className="sidebar-section-label">Account</div>
        <Link href="/plans" className="sidebar-nav-item"><span className="sidebar-nav-icon">💎</span>Upgrade Plan</Link>
        <div className="sidebar-bottom">
          <div className="sidebar-user">
            <div className="sidebar-avatar">{initials}</div>
            <div>
              <div className="sidebar-user-name">{user.name}</div>
              <div className="sidebar-user-plan">{plan.name} Plan</div>
            </div>
          </div>
          <button className="sidebar-nav-item" onClick={handleLogout} style={{color:"var(--red)",marginTop:8}}>
            <span className="sidebar-nav-icon">🚪</span>Log Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="dashboard-main">
        <div className="dashboard-topbar fade-in">
          <div>
            <div className="dashboard-title">
              {tab==="overview"     && <>Good morning, <span className="gradient-text">{user.name?.split(" ")[0] || "Investor"}</span> 👋</>}
              {tab==="transactions" && "Transactions"}
              {tab==="markets"      && "Live Markets"}
              {tab==="settings"     && "Account Settings"}
            </div>
            <div className="dashboard-date">{new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}</div>
          </div>
          <div style={{display:"flex",gap:10}}>
            <button className="btn btn-outline btn-sm" onClick={()=>setModal("withdraw")}>Withdraw</button>
            <button className="btn btn-primary btn-sm" onClick={()=>setModal("deposit")}>+ Deposit</button>
          </div>
        </div>

        {/* Overview */}
        {tab==="overview" && (
          <>
            <div className="stats-grid fade-up">
              {[
                { label:"Total Balance",  value:`$${balance.toLocaleString()}`,  color:"var(--teal)", badge:"▲ +12%" },
                { label:"Total Invested", value:`$${invested.toLocaleString()}`, color:"var(--text)" },
                { label:"Total Profit",   value:`$${profit.toLocaleString()}`,   color:"var(--teal)", badge:`▲ +${plan.roi}%/mo` },
                { label:"Next Payout",    value:"Mar 10",                         color:"var(--gold)", badge:"In 16 days" },
              ].map((s,i) => (
                <div key={i} className="stat-card">
                  <div className="stat-label">{s.label}</div>
                  <div className="stat-value" style={{color:s.color}}>{s.value}</div>
                  {s.badge && <div className="stat-badge up">{s.badge}</div>}
                </div>
              ))}
            </div>

            <div className="active-plan-card fade-up-2">
              <div className="active-plan-info">
                <div className="active-plan-label">Your Active Plan</div>
                <div className="active-plan-title">{plan.name} Plan</div>
                <div className="active-plan-desc">{plan.features[0]} · {plan.features[1]}</div>
                <div style={{marginTop:16}}><Link href="/plans" className="btn btn-outline btn-sm">Upgrade Plan →</Link></div>
              </div>
              <div className="active-plan-stats">
                {[
                  { val:`${plan.roi}%`,                                           lbl:"Monthly ROI" },
                  { val:`$${Math.floor(invested*plan.roi/100).toLocaleString()}`, lbl:"Monthly Earn" },
                  { val:`$${plan.price.toLocaleString()}`,                         lbl:"Plan Cost" },
                ].map((s,i) => (
                  <div key={i} className="active-plan-stat">
                    <div className="active-plan-stat-val" style={{color:plan.color}}>{s.val}</div>
                    <div className="active-plan-stat-lbl">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dashboard-two-col fade-up-3">
              <div className="chart-card">
                <div className="chart-card-header">
                  <div className="chart-card-title">Earnings History</div>
                  <div className="chart-tabs">
                    {["7d","30d","90d"].map(t => (
                      <button key={t} className={`chart-tab${chartTab===t?" active":""}`} onClick={()=>setChartTab(t)}>{t}</button>
                    ))}
                  </div>
                </div>
                <div className="bar-chart">
                  {MONTHS.map((m,i) => (
                    <div key={m} className="bar-item">
                      <div className="bar" style={{height:`${(EARNINGS[i]/1080)*100}%`,background:i===6?"var(--teal)":"var(--surface-3)",minHeight:8}} />
                      <div className="bar-label">{m}</div>
                    </div>
                  ))}
                </div>
                <div style={{marginTop:16,display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--text-dim)"}}>
                  <span>Total earned: <strong style={{color:"var(--teal)"}}>$4,860</strong></span>
                  <span>Best month: <strong style={{color:"var(--teal)"}}>$1,080</strong></span>
                </div>
              </div>
              <div className="market-card">
                <div className="market-card-title">Live Prices</div>
                {CRYPTO_PRICES.slice(0,6).map(c => (
                  <div key={c.symbol} className="market-item">
                    <div className="market-dot" style={{background:c.color}} />
                    <div className="market-sym">{c.symbol}</div>
                    <div className="market-price">${c.price.toLocaleString()}</div>
                    <div className={`market-change ${c.change>=0?"up":"down"}`}>{c.change>=0?"+":""}{c.change}%</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Transactions */}
        {tab==="transactions" && (
          <div className="txn-card fade-up">
            <div className="txn-card-header">
              <div className="txn-card-title">Transaction History</div>
              <button className="btn btn-primary btn-sm" onClick={()=>setModal("deposit")}>+ New Deposit</button>
            </div>
            <table className="table">
              <thead><tr>{["Type","Amount","Method","Status","Date"].map(h=><th key={h}>{h}</th>)}</tr></thead>
              <tbody>
                {(transactions.length > 0 ? transactions : MOCK_TXN).map(tx => (
                  <tr key={tx.id}>
                    <td><div style={{display:"flex",alignItems:"center",gap:8}}><span>{tx.type==="deposit"?"⬇":tx.type==="withdrawal"?"⬆":"💰"}</span><span style={{textTransform:"capitalize",fontWeight:500}}>{tx.type}</span></div></td>
                    <td style={{fontWeight:600,color:tx.type==="withdrawal"?"var(--red)":"var(--teal)"}}>{tx.type==="withdrawal"?"-":"+"}${tx.amount.toLocaleString()}</td>
                    <td style={{color:"var(--text-dim)"}}>{tx.method}</td>
                    <td><span className={`badge badge-${tx.status}`}>{tx.status}</span></td>
                    <td style={{color:"var(--text-dim)"}}>{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Markets */}
        {tab==="markets" && (
          <div className="fade-up" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {CRYPTO_PRICES.map(c => (
              <div key={c.symbol} className="stat-card">
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:12}}>
                  <div style={{width:10,height:10,borderRadius:"50%",background:c.color,marginTop:2}} />
                  <span className={`stat-badge ${c.change>=0?"up":""}`} style={c.change<0?{background:"rgba(255,77,106,0.12)",color:"var(--red)"}:{}}>
                    {c.change>=0?"▲":"▼"} {Math.abs(c.change)}%
                  </span>
                </div>
                <div style={{fontFamily:"var(--font-mono)",fontSize:12,color:"var(--text-dim)",marginBottom:4}}>{c.symbol}/USDT</div>
                <div className="stat-value" style={{fontSize:22}}>${c.price.toLocaleString()}</div>
                <div style={{fontSize:12,color:"var(--text-dim)",marginTop:4}}>{c.name}</div>
              </div>
            ))}
          </div>
        )}

        {/* Settings */}
        {tab==="settings" && (
          <div className="fade-up" style={{maxWidth:540}}>
            <div className="card" style={{marginBottom:20}}>
              <div style={{fontSize:16,fontWeight:700,marginBottom:20}}>Profile Information</div>
              <div style={{display:"flex",flexDirection:"column",gap:16}}>
                <div className="form-group"><label className="input-label">Full Name</label><input className="input" defaultValue={user.name} /></div>
                <div className="form-group"><label className="input-label">Email Address</label><input className="input" type="email" defaultValue={user.email} /></div>
                <button className="btn btn-primary" style={{alignSelf:"flex-start"}}>Save Changes</button>
              </div>
            </div>
            <div className="card">
              <div style={{fontSize:16,fontWeight:700,marginBottom:20}}>Security</div>
              <div style={{display:"flex",flexDirection:"column",gap:16}}>
                <div className="form-group"><label className="input-label">Current Password</label><input className="input" type="password" placeholder="••••••••" /></div>
                <div className="form-group"><label className="input-label">New Password</label><input className="input" type="password" placeholder="••••••••" /></div>
                <button className="btn btn-outline" style={{alignSelf:"flex-start"}}>Update Password</button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Deposit / Withdraw Modal */}
      {modal && (
        <div className="modal-overlay" onClick={()=>setModal(null)}>
          <div className="modal-box" onClick={e=>e.stopPropagation()}>
            {txDone ? (
              <div style={{textAlign:"center",padding:"20px 0"}}>
                <div style={{fontSize:48,marginBottom:16}}>✅</div>
                <div className="modal-title">{modal==="deposit"?"Deposit Submitted!":"Withdrawal Requested!"}</div>
                <div className="modal-sub">{modal==="deposit"?"Your deposit is being confirmed.":"Your withdrawal will be processed shortly."}</div>
              </div>
            ) : (
              <>
                <div className="modal-title">{modal==="deposit"?"💰 Make a Deposit":"⬆ Request Withdrawal"}</div>
                <div className="modal-sub">{modal==="deposit"?"Add funds to your account.":"Withdraw to your crypto wallet."}</div>
                <form className="modal-form" onSubmit={handleTxSubmit}>
                  <div className="form-group">
                    <label className="input-label">Amount (USD)</label>
                    <input className="input" type="number" min="10" placeholder="Enter amount" value={txForm.amount} onChange={e=>setTxForm({...txForm,amount:e.target.value})} required />
                  </div>
                  <div className="form-group">
                    <label className="input-label">Cryptocurrency</label>
                    <div className="crypto-options">
                      {["USDT","BTC","ETH"].map(c => (
                        <div key={c} className={`crypto-opt${txForm.crypto===c?" selected":""}`} onClick={()=>setTxForm({...txForm,crypto:c})}>{c}</div>
                      ))}
                    </div>
                  </div>
                  {modal==="deposit" && <div className="deposit-info">Send <strong style={{color:"var(--teal)"}}>{txForm.crypto}</strong> to your assigned wallet address.</div>}
                  <div className="modal-actions">
                    <button type="button" className="btn btn-ghost" style={{flex:1}} onClick={()=>setModal(null)}>Cancel</button>
                    <button type="submit" className="btn btn-primary" style={{flex:2}}>{modal==="deposit"?"Submit Deposit":"Request Withdrawal"}</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
