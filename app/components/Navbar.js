// app/components/Navbar.js — shared navbar used across all public pages
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function getSession() {
  if (typeof document === "undefined") return null;
  try {
    const match = document.cookie.split("; ").find(c => c.startsWith("cv_session="));
    if (!match) return null;
    const val = match.substring("cv_session=".length);
    // Try single decode first, then double decode for older sessions
    try {
      const single = decodeURIComponent(val);
      return JSON.parse(single);
    } catch {
      const double = decodeURIComponent(decodeURIComponent(val));
      return JSON.parse(double);
    }
  } catch { return null; }
}

export default function Navbar() {
  const router  = useRouter();
  const [session, setSession] = useState(null);

  useEffect(() => {
    setTimeout(() => setSession(getSession()), 300);
  }, []);

  const handleLogout = async () => {
    try { await fetch("/api/auth/logout", { method:"POST" }); } catch {}
    document.cookie = "cv_session=; Max-Age=0; path=/";
    setSession(null);
    router.push("/");
  };

  return (
    <nav className="navbar">
      <Link href="/" style={{display:"flex",alignItems:"center",gap:10,fontFamily:"var(--font-display)",fontSize:20,fontWeight:800}}>
        <div style={{width:36,height:36,background:"linear-gradient(135deg,var(--teal),var(--blue))",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center"}}>B</div>
        CryptoVault <span className="gradient-text" style={{marginLeft:4}}>Pro</span>
      </Link>
      <div style={{display:"flex",alignItems:"center",gap:32}}>
        <Link href="/#features"     style={{fontSize:14,fontWeight:500,color:"var(--text-dim)"}}>Features</Link>
        <Link href="/plans"         style={{fontSize:14,fontWeight:500,color:"var(--text-dim)"}}>Plans</Link>
        <Link href="/#how-it-works" style={{fontSize:14,fontWeight:500,color:"var(--text-dim)"}}>How It Works</Link>
      </div>
      <div style={{display:"flex",gap:12}}>
        {session ? (
          <>
            <Link
              href={session.role === "admin" ? "/admin" : "/dashboard"}
              className="btn btn-ghost btn-sm"
            >
              {session.role === "admin" ? "Admin Panel" : "Dashboard"}
            </Link>
            <button className="btn btn-primary btn-sm" onClick={handleLogout}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link href="/login"    className="btn btn-ghost btn-sm">Log In</Link>
            <Link href="/register" className="btn btn-primary btn-sm">Get Started</Link>
          </>
        )}
      </div>
    </nav>
  );
}
