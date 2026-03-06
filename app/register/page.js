"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PLANS } from "../../lib/data";
import "../styles/register.css";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", password:"", confirmPassword:"", plan:"growth", terms:false });
  const [showPw,  setShowPw]  = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type==="checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); setError("");
    if (form.password !== form.confirmPassword) { setError("Passwords do not match."); return; }
    if (!form.terms) { setError("You must accept the terms to continue."); return; }
    setLoading(true);
    try {
      const res  = await fetch("/api/auth/register", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Registration failed."); setLoading(false); return; }
      router.push("/dashboard");
    } catch {
      setError("Network error. Please try again."); setLoading(false);
    }
  };

  const selectedPlan = PLANS.find(p => p.id === form.plan);

  return (
    <div className="register-page">
      {/* Left — plan picker */}
      <div className="register-left">
        <div className="register-left-bg" />
        <Link href="/" className="register-logo">
          <div className="register-logo-icon">₿</div>
          CryptoVault <span className="gradient-text" style={{marginLeft:4}}>Pro</span>
        </Link>
        <div className="register-plan-preview">
          <div className="register-plan-title">Select your plan</div>
          <div className="register-plan-cards">
            {PLANS.map(plan=>(
              <div key={plan.id} className={`register-plan-item${form.plan===plan.id?" selected":""}`} onClick={()=>setForm({...form,plan:plan.id})}>
                <div>
                  <div className="register-plan-item-name">{plan.name}</div>
                  <div className="register-plan-item-price">From ${plan.price.toLocaleString()}/mo</div>
                </div>
                <div className="register-plan-item-roi" style={{color:plan.color}}>{plan.roi}% ROI</div>
              </div>
            ))}
          </div>
          {selectedPlan && (
            <div style={{marginTop:20,padding:"14px 16px",background:"rgba(0,212,170,0.05)",border:"1px solid rgba(0,212,170,0.15)",borderRadius:"var(--radius)",fontSize:13}}>
              <div style={{color:"var(--text-dim)",marginBottom:4}}>Selected: <strong style={{color:"var(--text)"}}>{selectedPlan.name}</strong></div>
              <div style={{color:"var(--teal)",fontWeight:600}}>{selectedPlan.roi}% Monthly ROI</div>
            </div>
          )}
        </div>
        <div style={{fontSize:12,color:"var(--text-muted)",position:"relative",zIndex:1}}>🔒 256-bit SSL Encrypted</div>
      </div>

      {/* Right — form */}
      <div className="register-right">
        <div className="register-right-title">Create Your Account</div>
        <div className="register-right-sub">Join thousands of investors earning consistent crypto returns.</div>
        {error && <div className="auth-error" style={{marginBottom:20}}>⚠ {error}</div>}
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-form-row">
            <div className="form-group">
              <label className="input-label">First Name</label>
              <input className="input" name="firstName" placeholder="John" value={form.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="input-label">Last Name</label>
              <input className="input" name="lastName" placeholder="Doe" value={form.lastName} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label className="input-label">Email Address</label>
            <input className="input" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          </div>
          <div className="register-form-row">
            <div className="form-group">
              <label className="input-label">Password</label>
              <input className="input" name="password" type={showPw?"text":"password"} placeholder="Min 8 characters" value={form.password} onChange={handleChange} required minLength={8} />
            </div>
            <div className="form-group">
              <label className="input-label">Confirm Password</label>
              <input className="input" name="confirmPassword" type={showPw?"text":"password"} placeholder="Repeat password" value={form.confirmPassword} onChange={handleChange} required />
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"flex-end"}}>
            <button type="button" onClick={()=>setShowPw(!showPw)} className="btn btn-ghost btn-sm">{showPw?"Hide":"Show"} Passwords</button>
          </div>
          <div className="form-group">
            <label className="input-label">Investment Plan</label>
            <div className="plan-selector-grid">
              {PLANS.map(plan=>(
                <div key={plan.id} className={`plan-selector-item${form.plan===plan.id?" active":""}`} onClick={()=>setForm({...form,plan:plan.id})}>
                  <div className="plan-selector-name">{plan.name}</div>
                  <div className="plan-selector-roi" style={{color:plan.color}}>{plan.roi}%</div>
                  <div className="plan-selector-price">${plan.price>=1000?`${plan.price/1000}k`:plan.price}/mo</div>
                </div>
              ))}
            </div>
          </div>
          <label className="terms-check">
            <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} />
            I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
          </label>
          <button type="submit" className="btn btn-primary" disabled={loading} style={{width:"100%",padding:14,fontSize:15}}>
            {loading ? <><span className="spinner spin" /> Creating Account…</> : "Create Account & Start Earning →"}
          </button>
        </form>
        <div className="auth-footer-text" style={{marginTop:24}}>
          Already have an account? <Link href="/login">Log in here</Link>
        </div>
      </div>
    </div>
  );
}
