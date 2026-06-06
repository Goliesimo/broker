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
    try { return JSON.parse(decodeURIComponent(val)); }
    catch { return JSON.parse(decodeURIComponent(decodeURIComponent(val))); }
  } catch { return null; }
}

export default function Navbar() {
  const router = useRouter();
  const [session,   setSession]   = useState(null);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    setTimeout(() => setSession(getSession()), 300);
  }, []);

  // Close menu on route change
  const close = () => setMenuOpen(false);

  const handleLogout = async () => {
    try { await fetch("/api/auth/logout", { method:"POST" }); } catch {}
    document.cookie = "cv_session=; Max-Age=0; path=/";
    setSession(null);
    close();
    router.push("/");
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <Link href="/" style={{display:"flex",alignItems:"center",gap:10,fontFamily:"var(--font-display)",fontSize:20,fontWeight:800,flexShrink:0}}>
          <div style={{width:36,height:36,background:"linear-gradient(135deg,var(--teal),var(--blue))",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center"}}>B</div>
          <span>CryptoVault <span className="gradient-text">Pro</span></span>
        </Link>

        {/* Desktop links */}
        <div className="navbar-links">
          <Link href="/#features"     style={{fontSize:14,fontWeight:500,color:"var(--text-dim)"}}>Features</Link>
          <Link href="/plans"         style={{fontSize:14,fontWeight:500,color:"var(--text-dim)"}}>Plans</Link>
          <Link href="/#how-it-works" style={{fontSize:14,fontWeight:500,color:"var(--text-dim)"}}>How It Works</Link>
        </div>

        {/* Desktop actions */}
        <div className="navbar-actions navbar-desktop-actions">
          {session ? (
            <>
              <Link href={session.role==="admin"?"/admin":"/dashboard"} className="btn btn-ghost btn-sm">
                {session.role==="admin"?"Admin Panel":"Dashboard"}
              </Link>
              <button className="btn btn-primary btn-sm" onClick={handleLogout}>Log Out</button>
            </>
          ) : (
            <>
              <Link href="/login"    className="btn btn-ghost btn-sm">Log In</Link>
              <Link href="/register" className="btn btn-primary btn-sm">Get Started</Link>
            </>
          )}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span style={{display:"block",width:22,height:2,background:"var(--text)",borderRadius:2,transition:"all 0.3s",transform:menuOpen?"rotate(45deg) translate(5px,5px)":"none"}} />
          <span style={{display:"block",width:22,height:2,background:"var(--text)",borderRadius:2,marginTop:5,transition:"all 0.3s",opacity:menuOpen?0:1}} />
          <span style={{display:"block",width:22,height:2,background:"var(--text)",borderRadius:2,marginTop:5,transition:"all 0.3s",transform:menuOpen?"rotate(-45deg) translate(5px,-5px)":"none"}} />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          position:"fixed",top:60,left:0,right:0,zIndex:99,
          background:"var(--surface)",borderBottom:"1px solid var(--border)",
          display:"flex",flexDirection:"column",padding:"16px 20px",gap:4,
          animation:"fadeDown 0.2s ease"
        }}>
          <Link href="/#features"     onClick={close} style={{padding:"12px 0",borderBottom:"1px solid var(--border)",color:"var(--text-dim)",fontSize:15}}>Features</Link>
          <Link href="/plans"         onClick={close} style={{padding:"12px 0",borderBottom:"1px solid var(--border)",color:"var(--text-dim)",fontSize:15}}>Plans</Link>
          <Link href="/#how-it-works" onClick={close} style={{padding:"12px 0",borderBottom:"1px solid var(--border)",color:"var(--text-dim)",fontSize:15}}>How It Works</Link>
          <div style={{paddingTop:12,display:"flex",flexDirection:"column",gap:10}}>
            {session ? (
              <>
                <Link href={session.role==="admin"?"/admin":"/dashboard"} onClick={close} className="btn btn-ghost" style={{width:"100%",textAlign:"center"}}>
                  {session.role==="admin"?"Admin Panel":"Dashboard"}
                </Link>
                <button className="btn btn-primary" onClick={handleLogout} style={{width:"100%"}}>Log Out</button>
              </>
            ) : (
              <>
                <Link href="/login"    onClick={close} className="btn btn-ghost"   style={{width:"100%",textAlign:"center"}}>Log In</Link>
                <Link href="/register" onClick={close} className="btn btn-primary" style={{width:"100%",textAlign:"center"}}>Get Started</Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
