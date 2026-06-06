"use client";
import { useState, useEffect } from "react";
import { AdminLayout } from "../page";
import "../../styles/admin-plans.css";

const PLAN_COLORS = { starter:"#4A9EFF", growth:"#00D4AA", pro:"#7B61FF", elite:"#FFB800", titan:"#FF6B35" };
const CRYPTO_ICONS = { USDT:"💵", BTC:"₿", ETH:"Ξ", BNB:"🔶", SOL:"◎", LTC:"Ł", XRP:"✕" };

const DEFAULT_CHECKOUT = {
  wallets: {
    "USDT (TRC20)":  { address:"", network:"TRON Network (TRC20)",    icon:"💵", symbol:"USDT", enabled:true },
    "USDT (ERC20)":  { address:"", network:"Ethereum Network (ERC20)", icon:"💵", symbol:"USDT", enabled:true },
    "Bitcoin (BTC)": { address:"", network:"Bitcoin Network",          icon:"₿",  symbol:"BTC",  enabled:true },
    "Ethereum (ETH)":{ address:"", network:"Ethereum Network (ETH)",   icon:"Ξ",  symbol:"ETH",  enabled:true },
  },
  instructions:"Send the exact amount to the wallet address below. Your plan will be activated within 24 hours of payment verification.",
  activationTime:"24 hours",
  warningText:"Only send via the correct network. Sending on the wrong network will result in permanent loss of funds.",
  screenshotRequired:false,
  txidRequired:true,
};

// ── Checkout Editor Component (defined outside to avoid focus loss) ──
function CheckoutEditor({ checkout, setCheckout, onSave, saving, toast }) {
  const [editWallet,  setEditWallet]  = useState(null);
  const [walletForm,  setWalletForm]  = useState({});
  const [addingNew,   setAddingNew]   = useState(false);
  const [newWallet,   setNewWallet]   = useState({ key:"", address:"", network:"", icon:"💵", symbol:"", enabled:true });

  const updateWallet = (key, field, val) => {
    setCheckout(c => ({
      ...c,
      wallets: { ...c.wallets, [key]: { ...c.wallets[key], [field]:val } }
    }));
  };

  const toggleWallet = (key) => {
    updateWallet(key, "enabled", !checkout.wallets[key].enabled);
  };

  const deleteWallet = (key) => {
    if (!confirm(`Remove "${key}" payment option?`)) return;
    const updated = { ...checkout.wallets };
    delete updated[key];
    setCheckout(c => ({ ...c, wallets: updated }));
  };

  const openEditWallet = (key) => {
    setEditWallet(key);
    setWalletForm({ ...checkout.wallets[key] });
  };

  const saveWalletEdit = (e) => {
    e.preventDefault();
    setCheckout(c => ({ ...c, wallets: { ...c.wallets, [editWallet]: { ...c.wallets[editWallet], ...walletForm } } }));
    setEditWallet(null);
  };

  const addNewWallet = (e) => {
    e.preventDefault();
    if (!newWallet.key || !newWallet.address || !newWallet.symbol) return;
    setCheckout(c => ({ ...c, wallets: { ...c.wallets, [newWallet.key]: { address:newWallet.address, network:newWallet.network, icon:newWallet.icon, symbol:newWallet.symbol, enabled:true } } }));
    setAddingNew(false);
    setNewWallet({ key:"", address:"", network:"", icon:"💵", symbol:"", enabled:true });
  };

  return (
    <div className="fade-up" style={{display:"flex",flexDirection:"column",gap:24}}>

      {/* Wallet Addresses */}
      <div className="users-table-card">
        <div className="users-table-header">
          <div>
            <div className="users-table-title">💳 Payment Methods & Wallet Addresses</div>
            <div style={{fontSize:13,color:"var(--text-dim)",marginTop:4}}>Manage which crypto options users see on the checkout page</div>
          </div>
          <button className="btn btn-primary btn-sm" onClick={()=>setAddingNew(true)}>➕ Add Payment Method</button>
        </div>
        <table className="table">
          <thead><tr>{["Method","Symbol","Network","Wallet Address","Status","Actions"].map(h=><th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {Object.entries(checkout.wallets||{}).map(([key, w]) => (
              <tr key={key} style={{opacity:w.enabled===false?0.5:1}}>
                <td style={{fontWeight:600}}>{w.icon} {key}</td>
                <td><span style={{fontFamily:"var(--font-mono)",fontSize:12,color:"var(--teal)"}}>{w.symbol}</span></td>
                <td style={{fontSize:12,color:"var(--text-dim)"}}>{w.network}</td>
                <td>
                  <span style={{fontFamily:"var(--font-mono)",fontSize:11,color:w.address&&!w.address.includes("YourWallet")?"var(--text)":"var(--red)",wordBreak:"break-all"}}>
                    {w.address || "⚠ Not set"}
                  </span>
                </td>
                <td>
                  <button
                    onClick={()=>toggleWallet(key)}
                    style={{background:w.enabled!==false?"rgba(0,212,170,0.15)":"rgba(255,77,106,0.15)",color:w.enabled!==false?"var(--teal)":"var(--red)",border:"none",borderRadius:20,padding:"4px 12px",fontSize:12,fontWeight:600,cursor:"pointer"}}
                  >
                    {w.enabled!==false ? "● Enabled" : "○ Disabled"}
                  </button>
                </td>
                <td>
                  <div className="actions-cell">
                    <button className="icon-btn" title="Edit" onClick={()=>openEditWallet(key)}>✏️</button>
                    <button className="icon-btn danger" title="Delete" onClick={()=>deleteWallet(key)}>🗑</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Page Text Settings */}
      <div className="users-table-card">
        <div className="users-table-header">
          <div className="users-table-title">📝 Checkout Page Text</div>
        </div>
        <div style={{padding:"0 24px 24px",display:"flex",flexDirection:"column",gap:16}}>
          <div className="form-group">
            <label className="input-label">Instructions / Subtitle Text</label>
            <textarea
              className="input"
              rows={3}
              style={{resize:"vertical"}}
              value={checkout.instructions||""}
              onChange={e=>setCheckout(c=>({...c,instructions:e.target.value}))}
            />
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            <div className="form-group">
              <label className="input-label">Activation Time</label>
              <input className="input" placeholder="e.g. 24 hours" value={checkout.activationTime||""} onChange={e=>setCheckout(c=>({...c,activationTime:e.target.value}))} />
            </div>
            <div className="form-group" style={{display:"flex",flexDirection:"column",gap:8}}>
              <label className="input-label">Submission Requirements</label>
              <div style={{display:"flex",gap:16,alignItems:"center",marginTop:4}}>
                <label style={{display:"flex",alignItems:"center",gap:8,cursor:"pointer",fontSize:13}}>
                  <input type="checkbox" checked={checkout.txidRequired!==false} onChange={e=>setCheckout(c=>({...c,txidRequired:e.target.checked}))} />
                  TXID Required
                </label>
                <label style={{display:"flex",alignItems:"center",gap:8,cursor:"pointer",fontSize:13}}>
                  <input type="checkbox" checked={checkout.screenshotRequired===true} onChange={e=>setCheckout(c=>({...c,screenshotRequired:e.target.checked}))} />
                  Screenshot Required
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="input-label">Warning Text</label>
            <textarea
              className="input"
              rows={2}
              style={{resize:"vertical"}}
              value={checkout.warningText||""}
              onChange={e=>setCheckout(c=>({...c,warningText:e.target.value}))}
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div style={{display:"flex",justifyContent:"flex-end",gap:12}}>
        {toast && <div style={{color:toast.includes("❌")?"var(--red)":"var(--teal)",fontWeight:600,display:"flex",alignItems:"center"}}>{toast}</div>}
        <button className="btn btn-primary" onClick={onSave} disabled={saving} style={{minWidth:160}}>
          {saving ? "Saving…" : "💾 Save All Changes"}
        </button>
      </div>

      {/* Edit Wallet Modal */}
      {editWallet && (
        <div className="modal-overlay" onClick={()=>setEditWallet(null)}>
          <div className="plan-edit-modal" style={{maxWidth:500}} onClick={e=>e.stopPropagation()}>
            <div className="plan-edit-title">✏️ Edit {editWallet}</div>
            <div className="plan-edit-sub" style={{color:"var(--gold)"}}>⚠️ Double-check the address before saving — errors cause lost payments.</div>
            <form className="plan-edit-form" onSubmit={saveWalletEdit}>
              <div className="form-group">
                <label className="input-label">Display Name</label>
                <input className="input" value={editWallet} disabled style={{opacity:0.5}} />
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                <div className="form-group">
                  <label className="input-label">Symbol (e.g. USDT)</label>
                  <input className="input" value={walletForm.symbol||""} onChange={e=>setWalletForm(f=>({...f,symbol:e.target.value}))} required />
                </div>
                <div className="form-group">
                  <label className="input-label">Icon (emoji)</label>
                  <input className="input" value={walletForm.icon||""} onChange={e=>setWalletForm(f=>({...f,icon:e.target.value}))} maxLength={4} />
                </div>
              </div>
              <div className="form-group">
                <label className="input-label">Network Label</label>
                <input className="input" placeholder="e.g. TRON Network (TRC20)" value={walletForm.network||""} onChange={e=>setWalletForm(f=>({...f,network:e.target.value}))} required />
              </div>
              <div className="form-group">
                <label className="input-label">Wallet Address</label>
                <input className="input" value={walletForm.address||""} onChange={e=>setWalletForm(f=>({...f,address:e.target.value}))} required style={{fontFamily:"var(--font-mono)",fontSize:12}} />
              </div>
              <div style={{display:"flex",gap:12,marginTop:8}}>
                <button type="button" className="btn btn-ghost" style={{flex:1}} onClick={()=>setEditWallet(null)}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{flex:2}}>💾 Save Address</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add New Wallet Modal */}
      {addingNew && (
        <div className="modal-overlay" onClick={()=>setAddingNew(false)}>
          <div className="plan-edit-modal" style={{maxWidth:500}} onClick={e=>e.stopPropagation()}>
            <div className="plan-edit-title">➕ Add Payment Method</div>
            <div className="plan-edit-sub">Add a new cryptocurrency payment option to the checkout page.</div>
            <form className="plan-edit-form" onSubmit={addNewWallet}>
              <div className="form-group">
                <label className="input-label">Display Name (unique key)</label>
                <input className="input" placeholder="e.g. Tether (BEP20)" value={newWallet.key} onChange={e=>setNewWallet(f=>({...f,key:e.target.value}))} required />
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                <div className="form-group">
                  <label className="input-label">Symbol</label>
                  <input className="input" placeholder="e.g. USDT" value={newWallet.symbol} onChange={e=>setNewWallet(f=>({...f,symbol:e.target.value}))} required />
                </div>
                <div className="form-group">
                  <label className="input-label">Icon (emoji)</label>
                  <input className="input" placeholder="💵" value={newWallet.icon} onChange={e=>setNewWallet(f=>({...f,icon:e.target.value}))} maxLength={4} />
                </div>
              </div>
              <div className="form-group">
                <label className="input-label">Network</label>
                <input className="input" placeholder="e.g. BNB Smart Chain (BEP20)" value={newWallet.network} onChange={e=>setNewWallet(f=>({...f,network:e.target.value}))} required />
              </div>
              <div className="form-group">
                <label className="input-label">Wallet Address</label>
                <input className="input" placeholder="Your wallet address" value={newWallet.address} onChange={e=>setNewWallet(f=>({...f,address:e.target.value}))} required style={{fontFamily:"var(--font-mono)",fontSize:12}} />
              </div>
              <div style={{display:"flex",gap:12,marginTop:8}}>
                <button type="button" className="btn btn-ghost" style={{flex:1}} onClick={()=>setAddingNew(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{flex:2}}>➕ Add Method</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────
export default function AdminPlans() {
  const [plans,    setPlans]   = useState([]);
  const [loading,  setLoading] = useState(true);
  const [editing,  setEditing] = useState(null);
  const [saved,    setSaved]   = useState(false);
  const [toast,    setToast]   = useState("");
  const [tab,      setTab]     = useState("plans");
  const [checkout, setCheckout]= useState(DEFAULT_CHECKOUT);
  const [coSaving, setCoSaving]= useState(false);

  const showToast = (msg) => { setToast(msg); setTimeout(()=>setToast(""), 3000); };

  useEffect(() => {
    fetch("/api/plans").then(r=>r.json()).then(d=>{ setPlans(d.plans||[]); setLoading(false); }).catch(()=>setLoading(false));
    fetch("/api/settings").then(r=>r.json()).then(d=>{ if (d.checkout) setCheckout(d.checkout); }).catch(()=>{});
  }, []);

  const handlePlanSave = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/plans", { method:"PUT", headers:{"Content-Type":"application/json"}, body:JSON.stringify(editing) });
    if (res.ok) {
      setPlans(prev => prev.map(p => p.id===editing.id ? {...editing} : p));
      setSaved(true);
      setTimeout(()=>{ setEditing(null); setSaved(false); }, 1400);
    } else { showToast("❌ Failed to save plan."); }
  };

  const handleCheckoutSave = async () => {
    setCoSaving(true);
    const res = await fetch("/api/settings", { method:"PUT", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ checkout }) });
    if (res.ok) { showToast("✅ Checkout settings saved!"); }
    else { showToast("❌ Failed to save settings."); }
    setCoSaving(false);
  };

  const updateFeature = (idx,val) => { const f=[...(editing.features||[])]; f[idx]=val; setEditing({...editing,features:f}); };
  const addFeature    = () => setEditing({...editing,features:[...(editing.features||[]),""]});
  const removeFeature = (idx) => setEditing({...editing,features:(editing.features||[]).filter((_,i)=>i!==idx)});
  const updateNI      = (idx,val) => { const f=[...(editing.notIncluded||[])]; f[idx]=val; setEditing({...editing,notIncluded:f}); };
  const addNI         = () => setEditing({...editing,notIncluded:[...(editing.notIncluded||[]),""]});
  const removeNI      = (idx) => setEditing({...editing,notIncluded:(editing.notIncluded||[]).filter((_,i)=>i!==idx)});

  return (
    <AdminLayout>
      <div className="admin-topbar fade-in">
        <div>
          <div className="admin-topbar-title">Plans & Checkout</div>
          <div className="admin-topbar-sub">Edit pricing, ROI, features and checkout page settings</div>
        </div>
        <div style={{display:"flex",gap:8}}>
          <button className={`btn ${tab==="plans"?"btn-primary":"btn-ghost"}`} onClick={()=>setTab("plans")}>📊 Plans</button>
          <button className={`btn ${tab==="checkout"?"btn-primary":"btn-ghost"}`} onClick={()=>setTab("checkout")}>💳 Checkout Page</button>
        </div>
      </div>

      {/* Plans Tab */}
      {tab==="plans" && (
        loading ? <div style={{padding:40,textAlign:"center",color:"var(--text-dim)"}}>Loading…</div> :
        <div className="plans-admin-grid fade-up">
          {plans.map(plan => (
            <div key={plan.id} className="admin-plan-card">
              <div className="admin-plan-card-head">
                <div className="admin-plan-card-name">{plan.name}</div>
                <div className="admin-plan-card-roi" style={{color:PLAN_COLORS[plan.id]||plan.color}}>{plan.roi}%</div>
                <div style={{fontSize:13,color:"var(--text-dim)",marginTop:4}}>Monthly ROI</div>
              </div>
              <div className="admin-plan-card-body">
                {[
                  { label:"Price",       value:`$${(plan.price||0).toLocaleString()}/mo` },
                  { label:"Min Deposit", value:`$${(plan.minDeposit||0).toLocaleString()}` },
                  { label:"Features",   value:`${(plan.features||[]).length} included` },
                ].map((r,i)=>(
                  <div key={i} className="admin-plan-stat-row">
                    <span className="admin-plan-stat-label">{r.label}</span>
                    <span className="admin-plan-stat-value">{r.value}</span>
                  </div>
                ))}
              </div>
              <div className="admin-plan-card-foot">
                <button className="btn btn-outline btn-sm" style={{flex:1}} onClick={()=>setEditing({...plan})}>✏ Edit Plan</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Checkout Tab */}
      {tab==="checkout" && (
        <CheckoutEditor
          checkout={checkout}
          setCheckout={setCheckout}
          onSave={handleCheckoutSave}
          saving={coSaving}
          toast={toast}
        />
      )}

      {/* Plan Edit Modal */}
      {editing && (
        <div className="modal-overlay" onClick={()=>setEditing(null)}>
          <div className="plan-edit-modal" style={{maxWidth:560,maxHeight:"90vh",overflowY:"auto"}} onClick={e=>e.stopPropagation()}>
            {saved ? (
              <div style={{textAlign:"center",padding:"32px 0"}}>
                <div style={{fontSize:48,marginBottom:12}}>✅</div>
                <div style={{fontSize:20,fontWeight:700}}>Plan Updated!</div>
                <div style={{color:"var(--text-dim)",marginTop:8}}>Changes are now live for all users.</div>
              </div>
            ) : (
              <>
                <div className="plan-edit-title" style={{color:PLAN_COLORS[editing.id]||editing.color}}>Edit {editing.name} Plan</div>
                <div className="plan-edit-sub">Changes apply immediately to the plans page and checkout.</div>
                <form className="plan-edit-form" onSubmit={handlePlanSave}>
                  <div className="plan-edit-row">
                    <div className="form-group">
                      <label className="input-label">Plan Name</label>
                      <input className="input" value={editing.name} onChange={e=>setEditing({...editing,name:e.target.value})} required />
                    </div>
                    <div className="form-group">
                      <label className="input-label">Badge Label</label>
                      <input className="input" placeholder="e.g. Most Popular" value={editing.badge||""} onChange={e=>setEditing({...editing,badge:e.target.value})} />
                    </div>
                  </div>
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
                      <input className="input" type="number" min="1" value={editing.minDeposit||0} onChange={e=>setEditing({...editing,minDeposit:Number(e.target.value)})} />
                    </div>
                    <div className="form-group">
                      <label className="input-label">Color</label>
                      <div style={{display:"flex",gap:8,alignItems:"center"}}>
                        <input className="input" value={editing.color||""} onChange={e=>setEditing({...editing,color:e.target.value})} />
                        <input type="color" value={editing.color||"#00D4AA"} onChange={e=>setEditing({...editing,color:e.target.value})} style={{width:40,height:40,border:"none",borderRadius:8,cursor:"pointer"}} />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="input-label">✅ Included Features</label>
                    {(editing.features||[]).map((f,i)=>(
                      <div key={i} style={{display:"flex",gap:8,marginBottom:8}}>
                        <input className="input" value={f} onChange={e=>updateFeature(i,e.target.value)} placeholder="Feature description" />
                        <button type="button" onClick={()=>removeFeature(i)} style={{background:"var(--red)",border:"none",color:"#fff",borderRadius:8,padding:"0 12px",cursor:"pointer"}}>✕</button>
                      </div>
                    ))}
                    <button type="button" className="btn btn-ghost btn-sm" onClick={addFeature}>+ Add Feature</button>
                  </div>
                  <div className="form-group">
                    <label className="input-label">✗ Not Included</label>
                    {(editing.notIncluded||[]).map((f,i)=>(
                      <div key={i} style={{display:"flex",gap:8,marginBottom:8}}>
                        <input className="input" value={f} onChange={e=>updateNI(i,e.target.value)} placeholder="Not included item" />
                        <button type="button" onClick={()=>removeNI(i)} style={{background:"var(--red)",border:"none",color:"#fff",borderRadius:8,padding:"0 12px",cursor:"pointer"}}>✕</button>
                      </div>
                    ))}
                    <button type="button" className="btn btn-ghost btn-sm" onClick={addNI}>+ Add Item</button>
                  </div>
                  <div style={{display:"flex",gap:12,marginTop:16}}>
                    <button type="button" className="btn btn-ghost" style={{flex:1}} onClick={()=>setEditing(null)}>Cancel</button>
                    <button type="submit" className="btn btn-primary" style={{flex:2}}>💾 Save Changes</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {toast && tab==="plans" && <div className="admin-toast">{toast}</div>}
    </AdminLayout>
  );
}
