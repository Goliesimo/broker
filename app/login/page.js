"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../styles/login.css";

export default function LoginPage() {
  const router = useRouter();
  const [form,    setForm]    = useState({ email:"", password:"" });
  const [showPw,  setShowPw]  = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const res  = await fetch("/api/auth/login", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Login failed."); setLoading(false); return; }
      // Cookie is set by the API automatically — just redirect
      if (data.user.role === "admin") router.push("/admin");
      else router.push("/dashboard");
    } catch {
      setError("Network error. Please try again."); setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {/* Left panel */}
      <div className="auth-left">
        <div className="auth-left-bg" />
        <Link href="/" className="auth-left-logo">
          <div className="auth-left-logo-icon">₿</div>
          CryptoVault <span className="gradient-text" style={{marginLeft:4}}>Pro</span>
        </Link>
        <div className="auth-left-content">
          <h1 className="auth-left-title">Welcome<br /><span className="gradient-text">Back.</span></h1>
          <p className="auth-left-sub">Log in to monitor your portfolio, track profits, and manage your investments — all in one place.</p>
          <div className="auth-testimonial">
            <p className="auth-testimonial-text">"CryptoVault Pro changed my financial life. I made more in 3 months than I did in a whole year of manual trading."</p>
            <div className="auth-testimonial-author">
              <div className="auth-testimonial-avatar">AM</div>
              <div>
                <div className="auth-testimonial-name">Alex Morgan</div>
                <div className="auth-testimonial-meta">Pro Trader Plan · 12% Monthly ROI</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{fontSize:12,color:"var(--text-muted)",position:"relative",zIndex:1}}>© 2026 CryptoVault Pro · Secure · Encrypted</div>
      </div>

      {/* Right panel */}
      <div className="auth-right">
        <div className="auth-right-title">Log In to Your Account</div>
        <div className="auth-right-sub">Enter your credentials to access your dashboard.</div>
        <div className="demo-hint" style={{marginBottom:24}}>
          <strong>Demo Credentials</strong>
          User: user@demo.com · Admin: admin@demo.com · Password: password123
        </div>
        {error && <div className="auth-error" style={{marginBottom:16}}>⚠ {error}</div>}
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="input-label">Email Address</label>
            <div className="input-wrapper">
              <span className="input-icon">✉</span>
              <input className="input input-with-icon" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label className="input-label">Password</label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input className="input input-with-icon" name="password" type={showPw?"text":"password"} placeholder="••••••••" value={form.password} onChange={handleChange} required />
              <button type="button" className="input-action" onClick={()=>setShowPw(!showPw)}>{showPw?"Hide":"Show"}</button>
            </div>
          </div>
          <div className="form-footer">
            <label className="form-checkbox"><input type="checkbox" /> Remember me</label>
            <Link href="#">Forgot password?</Link>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading} style={{width:"100%",padding:14,fontSize:15}}>
            {loading ? <><span className="spinner spin" /> Logging in…</> : "Log In →"}
          </button>
        </form>
        <div className="auth-footer-text" style={{marginTop:24}}>
          Don&apos;t have an account? <Link href="/register">Create one free</Link>
        </div>
      </div>
    </div>
  );
}
