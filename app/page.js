"use client";
import Link from "next/link";
import { PLANS, CRYPTO_PRICES } from "../lib/data";
import "./styles/home.css";
import Navbar from "./components/Navbar";

const FEATURES = [
  { icon:"🤖", title:"AI-Powered Trading",     desc:"Algorithms analyze thousands of market signals in real-time to execute optimal trades 24/7." },
  { icon:"🔒", title:"Military-Grade Security", desc:"256-bit encryption, 2FA, and cold storage protect 95% of all platform assets." },
  { icon:"📈", title:"Consistent Returns",       desc:"Managed plans deliver monthly ROI from 5% to 25% regardless of market conditions." },
  { icon:"⚡", title:"Instant Execution",        desc:"Lightning-fast order execution across 50+ exchanges ensures no profitable opportunity is missed." },
  { icon:"📊", title:"Live Dashboard",           desc:"Track portfolio performance, profits, and trade history in real-time from anywhere." },
  { icon:"🌍", title:"Global Access",            desc:"Available in 150+ countries with support for BTC, ETH, USDT and all major cryptocurrencies." },
];

const STEPS = [
  { icon:"📝", title:"Create Account", desc:"Sign up in under 2 minutes. Verify and you're ready to go." },
  { icon:"💎", title:"Choose a Plan",  desc:"Select the investment plan that matches your goals and budget." },
  { icon:"💰", title:"Fund Account",   desc:"Deposit using Bitcoin, Ethereum, USDT or other supported crypto." },
  { icon:"📈", title:"Earn Returns",   desc:"Sit back while our system trades for you. Withdraw profits anytime." },
];


export default function HomePage() {
  const tickers = [...CRYPTO_PRICES, ...CRYPTO_PRICES];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-badge fade-in">
          <span className="hero-badge-dot" />
          Live Trading — 248 Active Investors
        </div>
        <h1 className="hero-title fade-up">
          The Smartest Way to<br />
          <span className="gradient-text">Trade Crypto</span>
        </h1>
        <p className="hero-subtitle fade-up-2">
          Earn consistent returns of 5-25% monthly through our AI-powered trading platform.
          No experience needed — we handle everything for you.
        </p>
        <div className="hero-cta fade-up-3">
          <Link href="/register" className="btn btn-primary btn-lg">Start Investing Today</Link>
          <Link href="/plans"    className="btn btn-outline btn-lg">View Plans</Link>
        </div>
        <div className="hero-stats fade-up-4">
          {[{value:"$128M+",label:"Total Invested"},{value:"248+",label:"Active Investors"},{value:"$31M+",label:"Profits Paid"},{value:"99.9%",label:"Uptime"}].map(s=>(
            <div key={s.label} style={{textAlign:"center"}}>
              <div className="hero-stat-value gradient-text">{s.value}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {tickers.map((c,i)=>(
            <div key={i} className="ticker-item">
              <span className="ticker-symbol">{c.symbol}/USDT</span>
              <span className="ticker-price">${c.price.toLocaleString()}</span>
              <span className={c.change>=0?"ticker-pos":"ticker-neg"}>{c.change>=0?"up":"down"} {Math.abs(c.change)}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="features" id="features">
        <div className="section-label">Why CryptoVault Pro</div>
        <h2 style={{fontSize:"clamp(28px,4vw,44px)",marginBottom:16}}>Built for Serious <span className="gradient-text">Investors</span></h2>
        <p style={{fontSize:16,color:"var(--text-dim)",maxWidth:500,lineHeight:1.7,marginBottom:60}}>Everything you need to grow your crypto portfolio.</p>
        <div className="features-grid">
          {FEATURES.map((f,i)=>(
            <div key={i} className="feature-card fade-up" style={{animationDelay:`${i*0.08}s`}}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Plans Preview */}
      <section className="plans-preview">
        <div className="section-label">Investment Plans</div>
        <h2 style={{fontSize:"clamp(28px,4vw,44px)",marginBottom:16}}>Choose Your <span className="gradient-text">Growth Path</span></h2>
        <p style={{fontSize:16,color:"var(--text-dim)",maxWidth:500,lineHeight:1.7,marginBottom:60}}>Five plans designed for every investor level.</p>
        <div className="plans-grid-home">
          {PLANS.map((plan,i)=>(
            <div key={plan.id} className={`plan-card-home fade-up${plan.badge?" featured":""}`} style={{animationDelay:`${i*0.08}s`}}>
              {plan.badge && <div className="plan-badge-home">{plan.badge}</div>}
              <div className="plan-name-home">{plan.name}</div>
              <div className="plan-roi-home" style={{color:plan.color}}>{plan.roi}%</div>
              <div className="plan-roi-label">Monthly ROI</div>
              <div className="plan-price-home">From <strong style={{color:plan.color}}>${plan.price.toLocaleString()}</strong></div>
              <Link href="/plans" className="btn btn-outline btn-sm" style={{width:"100%"}}>Learn More</Link>
            </div>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:36}}>
          <Link href="/plans" className="btn btn-primary">Compare All Plans</Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section" id="how-it-works">
        <div className="section-label">How It Works</div>
        <h2 style={{fontSize:"clamp(28px,4vw,44px)",marginBottom:16}}>Up and Running in <span className="gradient-text">4 Simple Steps</span></h2>
        <p style={{fontSize:16,color:"var(--text-dim)",maxWidth:500,lineHeight:1.7,marginBottom:60}}>No trading experience required.</p>
        <div className="steps-grid">
          {STEPS.map((s,i)=>(
            <div key={i} className="step-card fade-up" style={{animationDelay:`${i*0.1}s`}}>
              <div className="step-number">0{i+1}</div>
              <div className="step-icon">{s.icon}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <h2>Ready to <span className="gradient-text">Start Earning?</span></h2>
        <p>Join thousands of investors already growing their wealth with CryptoVault Pro.</p>
        <Link href="/register" className="btn btn-primary btn-lg">Create Free Account</Link>
      </section>

      <footer className="footer">
        <div className="footer-logo">CryptoVault <span className="gradient-text">Pro</span></div>
        <div className="footer-links">
          <Link href="/plans">Plans</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
        <div className="footer-copy">2026 CryptoVault Pro. All rights reserved.</div>
      </footer>
    </>
  );
}
