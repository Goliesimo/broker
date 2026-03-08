"use client";
import { useState } from "react";
import Link from "next/link";
import { PLANS } from "../../lib/data";
import Navbar from "../components/Navbar";
import "../styles/plans.css";

const ICONS = { starter:"🌱", growth:"📈", pro:"⚡", elite:"💎", titan:"🏆" };
const FAQ = [
  { q:"How are returns guaranteed?", a:"Our AI trading systems execute profitable micro-trades daily. Returns are backed by our trading reserve fund." },
  { q:"How do I withdraw my profits?", a:"Withdrawals are processed via USDT, Bitcoin, or Ethereum. Times vary by plan: Titan (instant), Elite (12h), Pro (24h), others (3–5 days)." },
  { q:"Can I upgrade my plan later?", a:"Yes, upgrade anytime from your dashboard. The price difference is prorated and new ROI applies immediately." },
  { q:"Is my investment safe?", a:"We use cold storage for 95% of assets, 256-bit encryption, and multi-sig wallets. We've never had a security incident." },
  { q:"What cryptocurrencies can I deposit?", a:"We accept Bitcoin (BTC), Ethereum (ETH), USDT (TRC20/ERC20), BNB, and Solana." },
];
const COMPARISON = [
  { feature:"Monthly ROI",       values:["5%","8%","12%","18%","25%"] },
  { feature:"Min Deposit",       values:["$250","$1,000","$5,000","$15,000","$50,000"] },
  { feature:"Trading Signals",   values:["Basic","Advanced","Premium","VIP","Institutional"] },
  { feature:"Support",           values:["Email","Chat+Email","24/7 Live","Dedicated Mgr","Personal Broker"] },
  { feature:"Withdrawal Speed",  values:["5 days","3 days","24h","12h","Instant"] },
  { feature:"AI Analysis",       values:["✗","✗","✓","✓","✓"] },
  { feature:"Auto Reinvestment", values:["✗","✓","✓","✓","✓"] },
  { feature:"Custom Strategy",   values:["✗","✗","✗","✗","✓"] },
];

export default function PlansPage() {
  const [billing, setBilling] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="plans-page">
      <Navbar />

      {/* Header */}
      <div className="plans-header">
        <div className="section-label fade-in">Investment Plans</div>
        <h1 className="fade-up">Choose Your <span className="gradient-text">Growth Plan</span></h1>
        <p className="fade-up-2">From beginner-friendly Starter to the institutional-grade Titan — there's a plan for every investor.</p>
        <div className="billing-toggle fade-up-3">
          <button className={`billing-option${billing==="monthly"?" active":""}`} onClick={()=>setBilling("monthly")}>Monthly</button>
          <button className={`billing-option${billing==="annual"?" active":""}`} onClick={()=>setBilling("annual")}>
            Annual <span className="billing-save">Save 8%</span>
          </button>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="plans-grid">
        {PLANS.map((plan,i) => (
          <div key={plan.id} className={`plan-card fade-up${plan.badge==="Most Popular"?" featured":""}`} style={{animationDelay:`${i*0.08}s`}}>
            <div className="plan-card-glow" style={{background:plan.color}} />
            {plan.badge==="Most Popular" && <div className="plan-featured-badge">{plan.badge}</div>}
            <div className="plan-icon">{ICONS[plan.id]}</div>
            <div className="plan-name">{plan.name}</div>
            <div className="plan-roi" style={{color:plan.color}}>{plan.roi}<span className="plan-roi-suffix">%</span></div>
            <div className="plan-roi-label">Monthly Return</div>
            <div className="plan-price" style={{color:plan.color}}>
              ${billing==="annual" ? Math.floor(plan.price*11).toLocaleString() : plan.price.toLocaleString()}
              <span className="plan-price-sub"> / {billing==="annual"?"year":"month"}</span>
            </div>
            <div className="plan-features">
              {plan.features.map((f,fi) => (
                <div key={fi} className="plan-feature included"><span className="plan-feature-check">✓</span>{f}</div>
              ))}
              {plan.notIncluded.map((f,fi) => (
                <div key={fi} className="plan-feature not-included"><span className="plan-feature-x">✗</span>{f}</div>
              ))}
            </div>
            <Link href={`/checkout?plan=${plan.id}`} className={`btn plan-cta ${plan.badge==="Most Popular"?"btn-primary":"btn-outline"}`}>
              Get Started →
            </Link>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="comparison-section">
        <h2>Full <span className="gradient-text">Comparison</span></h2>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th style={{textAlign:"left"}}>Feature</th>
                {PLANS.map(p => <th key={p.id} style={{color:p.color}}>{p.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row,i) => (
                <tr key={i}>
                  <td>{row.feature}</td>
                  {row.values.map((v,vi) => (
                    <td key={vi} style={{color:v==="✓"?"var(--teal)":v==="✗"?"var(--text-muted)":"var(--text)"}}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
        {FAQ.map((item,i) => (
          <div key={i} className="faq-item">
            <div className="faq-q" onClick={()=>setOpenFaq(openFaq===i?null:i)}>
              <span>{item.q}</span>
              <span style={{color:"var(--text-dim)",fontSize:18}}>{openFaq===i?"−":"+"}</span>
            </div>
            {openFaq===i && <div className="faq-a">{item.a}</div>}
          </div>
        ))}
      </div>

    </div>
  );
}
