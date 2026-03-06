"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ADMIN_STATS, PLANS } from "../../lib/data";
import "../styles/admin-dashboard.css";

const PLAN_COLORS = { starter:"#4A9EFF", growth:"#00D4AA", pro:"#7B61FF", elite:"#FFB800", titan:"#FF6B35" };
const PLAN_TOTAL  = Object.values(ADMIN_STATS.planDistribution).reduce((a,b)=>a+b,0);

const ACTIVITY = [
  { icon:"💰", user:"Marcus Webb",  meta:"Withdrawal request · $10,000", amount:"+$10,000", color:"var(--gold)" },
  { icon:"⬇",  user:"Linda Diallo", meta:"New deposit · Growth Plan",    amount:"+$1,000",  color:"var(--teal)" },
  { icon:"📈", user:"Sarah Okafor", meta:"Profit credited · Elite Plan", amount:"+$7,800",  color:"var(--teal)" },
  { icon:"👤", user:"New User",     meta:"Registered · Starter Plan",    amount:"",         color:"var(--blue)" },
  { icon:"⬆",  user:"James Chen",   meta:"Withdrawal approved · $400",   amount:"-$400",    color:"var(--red)"  },
];

// ── Shared Admin Sidebar Layout ──────────────────────────────
export function AdminLayout({ children }) {
  const router   = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    try { await fetch("/api/auth/logout", { method:"POST" }); } catch {}
    document.cookie = "cv_session=; Max-Age=0; path=/";
    router.push("/login");
  };

  const NAV = [
    { href:"/admin",                  icon:"📊", label:"Dashboard" },
    { href:"/admin/users",            icon:"👥", label:"Users",         badge: ADMIN_STATS.activeUsers },
    { href:"/admin/transactions",     icon:"🔄", label:"Transactions",  badge: ADMIN_STATS.pendingWithdrawals },
    { href:"/admin/subscriptions",    icon:"💳", label:"Subscriptions", badge: null },
    { href:"/admin/plans",            icon:"💎", label:"Manage Plans" },
  ];

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <div className="admin-sidebar-logo-icon">₿</div>
          <span style={{background:"linear-gradient(135deg,var(--red),var(--gold))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>CryptoVault</span>
        </div>
        <div className="admin-badge">Admin Panel</div>
        <div className="admin-nav-section">Navigation</div>
        {NAV.map(n => (
          <Link
            key={n.href}
            href={n.href}
            className={`admin-nav-item${pathname===n.href?" active":""}`}
          >
            <span className="nav-icon">{n.icon}</span>
            {n.label}
            {n.badge && <span className="admin-nav-badge">{n.badge}</span>}
          </Link>
        ))}
        <div className="admin-nav-section" style={{marginTop:16}}>System</div>
        <Link href="/" className="admin-nav-item"><span className="nav-icon">🌐</span>View Website</Link>
        <div style={{marginTop:"auto"}}>
          <button
            className="admin-nav-item"
            onClick={handleLogout}
            style={{color:"var(--red)",width:"100%",marginTop:8}}
          >
            <span className="nav-icon">🚪</span>Log Out
          </button>
        </div>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}

// ── Admin Dashboard Page ─────────────────────────────────────
export default function AdminDashboard() {
  const [pendingTxns] = useState([
    { id:"tx-004", user:"Marcus Webb",  plan:"titan",  amount:10000, method:"USDT",    date:"2026-02-22" },
    { id:"tx-009", user:"Linda Diallo", plan:"growth", amount:1000,  method:"Bitcoin", date:"2026-02-20" },
    { id:"tx-010", user:"Sarah Okafor", plan:"elite",  amount:5000,  method:"USDT",    date:"2026-02-22" },
  ]);

  return (
    <AdminLayout>
      <div className="admin-topbar fade-in">
        <div>
          <div className="admin-topbar-title">Admin Dashboard</div>
          <div className="admin-topbar-sub">Platform overview — {new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})}</div>
        </div>
        <div style={{display:"flex",gap:10}}>
          <Link href="/admin/transactions" className="btn btn-danger btn-sm">⚠ {ADMIN_STATS.pendingWithdrawals} Pending</Link>
          <Link href="/admin/users"        className="btn btn-primary btn-sm">View All Users</Link>
        </div>
      </div>

      {/* Stats */}
      <div className="admin-stats-grid fade-up">
        {[
          { label:"Total Users",         value:ADMIN_STATS.totalUsers,                               sub:`${ADMIN_STATS.activeUsers} active`,   trend:"▲ +12 this week", type:"up"   },
          { label:"Total Invested",      value:`$${(ADMIN_STATS.totalDeposited/1000).toFixed(0)}k`,  sub:"All deposits",                        trend:"▲ +$48k this month", type:"up" },
          { label:"Profits Paid",        value:`$${(ADMIN_STATS.totalProfitPaid/1000).toFixed(0)}k`, sub:"All time",                            trend:"▲ +$18k this month", type:"up" },
          { label:"Pending Withdrawals", value:ADMIN_STATS.pendingWithdrawals,                        sub:"Awaiting approval",                   trend:"⚠ Action required", type:"warn" },
        ].map((s,i) => (
          <div key={i} className="admin-stat-card">
            <div className="admin-stat-label">{s.label}</div>
            <div className="admin-stat-value">{s.value}</div>
            <div className="admin-stat-sub">{s.sub}</div>
            <div className={`admin-stat-trend ${s.type}`}>{s.trend}</div>
          </div>
        ))}
      </div>

      {/* Two col */}
      <div className="admin-two-col fade-up-2">
        <div className="plan-dist-card">
          <div className="plan-dist-title">Plan Distribution</div>
          {Object.entries(ADMIN_STATS.planDistribution).map(([planId,count]) => {
            const plan = PLANS.find(p=>p.id===planId);
            const pct  = Math.round((count/PLAN_TOTAL)*100);
            return (
              <div key={planId} className="plan-dist-item">
                <div className="plan-dist-row">
                  <span style={{fontWeight:500}}>{plan?.name}</span>
                  <span style={{color:"var(--text-dim)"}}>{count} users <span style={{color:PLAN_COLORS[planId]}}>({pct}%)</span></span>
                </div>
                <div className="plan-dist-bar-bg">
                  <div className="plan-dist-bar" style={{width:`${pct}%`,background:PLAN_COLORS[planId]}} />
                </div>
              </div>
            );
          })}
          <div style={{marginTop:20,padding:14,background:"var(--surface-2)",borderRadius:"var(--radius)",fontSize:13,display:"flex",justifyContent:"space-between"}}>
            <span style={{color:"var(--text-dim)"}}>Monthly Revenue</span>
            <span style={{color:"var(--teal)",fontWeight:700}}>${ADMIN_STATS.monthlyRevenue.toLocaleString()}</span>
          </div>
        </div>
        <div className="activity-card">
          <div className="activity-title">Recent Activity</div>
          {ACTIVITY.map((a,i) => (
            <div key={i} className="activity-item">
              <div className="activity-icon">{a.icon}</div>
              <div style={{flex:1}}>
                <div className="activity-user">{a.user}</div>
                <div className="activity-meta">{a.meta}</div>
              </div>
              {a.amount && <div className="activity-amount" style={{color:a.color}}>{a.amount}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Pending Withdrawals */}
      <div className="pending-card fade-up-3">
        <div className="pending-header">
          <div className="pending-title">⚠ Pending Withdrawals</div>
          <Link href="/admin/transactions" className="btn btn-sm btn-outline">View All →</Link>
        </div>
        <table className="table">
          <thead><tr>{["User","Plan","Amount","Method","Date","Action"].map(h=><th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {pendingTxns.map(tx => (
              <tr key={tx.id}>
                <td style={{fontWeight:500}}>{tx.user}</td>
                <td><span style={{textTransform:"capitalize",color:PLAN_COLORS[tx.plan],fontWeight:600}}>{tx.plan}</span></td>
                <td style={{fontWeight:700,color:"var(--red)"}}>-${tx.amount.toLocaleString()}</td>
                <td style={{color:"var(--text-dim)"}}>{tx.method}</td>
                <td style={{color:"var(--text-dim)",fontSize:12}}>{tx.date}</td>
                <td>
                  <div style={{display:"flex",gap:6}}>
                    <button className="approve-btn">✓ Approve</button>
                    <button className="reject-btn">✗ Reject</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
