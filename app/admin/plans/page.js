"use client";
import { useState } from "react";
import { AdminLayout } from "../page";
import { PLANS } from "../../../lib/data";
import "../../styles/admin-plans.css";

const PLAN_COLORS = { starter:"#4A9EFF", growth:"#00D4AA", pro:"#7B61FF", elite:"#FFB800", titan:"#FF6B35" };
const PLAN_USERS  = { starter:82, growth:74, pro:52, elite:28, titan:12 };

export default function AdminPlans() {
  const [plans,   setPlans]   = useState(PLANS.map(p=>({...p})));
  const [editing, setEditing] = useState(null);
  const [saved,   setSaved]   = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    await fetch("/api/plans", { method:"PUT", headers:{"Content-Type":"application/json"}, body:JSON.stringify(editing) });
    setPlans(prev => prev.map(p => p.id === editing.id ? { ...editing } : p));
    setSaved(true); setTimeout(()=>{ setEditing(null); setSaved(false); }, 1200);
  };

  return (
    <AdminLayout>
      <div className="admin-topbar fade-in">
        <div>
          <div className="admin-topbar-title">Manage Plans</div>
          <div className="admin-topbar-sub">Edit ROI, pricing, and plan features</div>
        </div>
      </div>

      <div className="plans-admin-grid fade-up">
        {plans.map(plan => {
          const users   = PLAN_USERS[plan.id] || 0;
          const revenue = users * plan.price;
          return (
            <div key={plan.id} className="admin-plan-card">
              <div className="admin-plan-card-head">
                <div className="admin-plan-card-name">{plan.name}</div>
                <div className="admin-plan-card-roi" style={{color:PLAN_COLORS[plan.id]}}>{plan.roi}%</div>
                <div style={{fontSize:13,color:"var(--text-dim)",marginTop:4}}>Monthly ROI</div>
              </div>
              <div className="admin-plan-card-body">
                {[
                  { label:"Active Users",   value: users },
                  { label:"Monthly Price",  value: `$${plan.price.toLocaleString()}` },
                  { label:"Monthly Revenue",value: `$${revenue.toLocaleString()}` },
                  { label:"Min Deposit",    value: `$${plan.minDeposit.toLocaleString()}` },
                ].map((row,i) => (
                  <div key={i} className="admin-plan-stat-row">
                    <span className="admin-plan-stat-label">{row.label}</span>
                    <span className="admin-plan-stat-value">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="admin-plan-card-foot">
                <button className="btn btn-outline btn-sm" style={{flex:1}} onClick={()=>setEditing({...plan})}>✏ Edit Plan</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary table */}
      <div className="card fade-up-2">
        <div style={{fontSize:16,fontWeight:700,marginBottom:20}}>Platform Revenue Summary</div>
        <table className="table">
          <thead><tr>{["Plan","ROI","Price","Users","Monthly Revenue","Total Invested"].map(h=><th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {plans.map(plan => {
              const users = PLAN_USERS[plan.id] || 0;
              return (
                <tr key={plan.id}>
                  <td style={{fontWeight:600,color:PLAN_COLORS[plan.id]}}>{plan.name}</td>
                  <td style={{color:PLAN_COLORS[plan.id],fontWeight:700}}>{plan.roi}%</td>
                  <td>${plan.price.toLocaleString()}/mo</td>
                  <td>{users}</td>
                  <td style={{color:"var(--teal)",fontWeight:600}}>${(users*plan.price).toLocaleString()}</td>
                  <td style={{color:"var(--text-dim)"}}>${(users*plan.minDeposit).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editing && (
        <div className="modal-overlay" onClick={()=>setEditing(null)}>
          <div className="plan-edit-modal" onClick={e=>e.stopPropagation()}>
            {saved ? (
              <div style={{textAlign:"center",padding:"20px 0"}}>
                <div style={{fontSize:48,marginBottom:12}}>✅</div>
                <div style={{fontSize:20,fontWeight:700}}>Plan Updated!</div>
              </div>
            ) : (
              <>
                <div className="plan-edit-title" style={{color:PLAN_COLORS[editing.id]}}>Edit {editing.name} Plan</div>
                <div className="plan-edit-sub">Changes apply immediately to new investors.</div>
                <form className="plan-edit-form" onSubmit={handleSave}>
                  <div className="plan-edit-row">
                    <div className="form-group">
                      <label className="input-label">Monthly ROI (%)</label>
                      <input className="input" type="number" min="1" max="100" value={editing.roi} onChange={e=>setEditing({...editing,roi:Number(e.target.value)})} required />
                    </div>
                    <div className="form-group">
                      <label className="input-label">Monthly Price ($)</label>
                      <input className="input" type="number" min="1" value={editing.price} onChange={e=>setEditing({...editing,price:Number(e.target.value)})} required />
                    </div>
                  </div>
                  <div className="plan-edit-row">
                    <div className="form-group">
                      <label className="input-label">Min Deposit ($)</label>
                      <input className="input" type="number" min="1" value={editing.minDeposit} onChange={e=>setEditing({...editing,minDeposit:Number(e.target.value)})} required />
                    </div>
                    <div className="form-group">
                      <label className="input-label">Badge Label</label>
                      <input className="input" placeholder="e.g. Most Popular" value={editing.badge||""} onChange={e=>setEditing({...editing,badge:e.target.value})} />
                    </div>
                  </div>
                  <div style={{display:"flex",gap:12,marginTop:8}}>
                    <button type="button" className="btn btn-ghost" style={{flex:1}} onClick={()=>setEditing(null)}>Cancel</button>
                    <button type="submit" className="btn btn-primary" style={{flex:2}}>Save Changes</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
