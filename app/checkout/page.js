"use client";
import { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { PLANS } from "../../lib/data";
import Navbar from "../components/Navbar";
import "../styles/checkout.css";

// ── Your wallet addresses — replace with your real ones ──────
const WALLETS = {
  "USDT (TRC20)": { address:"TYourTRC20WalletAddressHere",    network:"TRON Network (TRC20)",  icon:"💵", symbol:"USDT" },
  "USDT (ERC20)": { address:"0xYourERC20WalletAddressHere",   network:"Ethereum Network (ERC20)",icon:"💵", symbol:"USDT" },
  "Bitcoin (BTC)": { address:"bc1YourBitcoinWalletAddressHere", network:"Bitcoin Network",        icon:"₿",  symbol:"BTC"  },
  "Ethereum (ETH)":{ address:"0xYourEthereumWalletAddressHere", network:"Ethereum Network (ETH)", icon:"Ξ",  symbol:"ETH"  },
};

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

function CheckoutContent() {
  const router       = useRouter();
  const searchParams = useSearchParams();
  const planId       = searchParams.get("plan") || "pro";
  const plan         = PLANS.find(p => p.id === planId) || PLANS[2];
  const fileRef      = useRef();

  const [session,    setSession]    = useState(null);
  const [step,       setStep]       = useState(1); // 1=select crypto, 2=payment proof, 3=success
  const [crypto,     setCrypto]     = useState("USDT (TRC20)");
  const [copied,     setCopied]     = useState(false);
  const [txid,       setTxid]       = useState("");
  const [sender,     setSender]     = useState("");
  const [fileName,   setFileName]   = useState("");
  const [fileB64,    setFileB64]    = useState("");
  const [loading,    setLoading]    = useState(false);
  const [error,      setError]      = useState("");

  useEffect(() => {
    setTimeout(() => {
      const s = getSession();
      if (!s) { router.push("/login"); return; }
      setSession(s);
    }, 200);
  }, []);

  const wallet = WALLETS[crypto];

  const handleCopy = () => {
    navigator.clipboard.writeText(wallet.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (ev) => setFileB64(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!txid.trim())    { setError("Please enter your Transaction ID (TXID)."); return; }
    if (!sender.trim())  { setError("Please enter your sender wallet address."); return; }
    setLoading(true);
    try {
      const res  = await fetch("/api/subscriptions", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          userId:          session?.id    || "unknown",
          userName:        session?.name  || "Unknown",
          userEmail:       session?.email || "unknown",
          planId:          plan.id,
          planName:        plan.name,
          planPrice:       plan.price,
          crypto,
          walletAddress:   wallet.address,
          txid:            txid.trim(),
          senderWallet:    sender.trim(),
          screenshotBase64:fileB64 || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Submission failed."); setLoading(false); return; }
      setStep(3);
    } catch {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

  if (step === 3) return (
    <>
      <Navbar />
      <div className="checkout-page">
        <div style={{maxWidth:560,margin:"0 auto"}}>
          <div className="checkout-section">
            <div className="checkout-success">
              <div className="checkout-success-icon">✅</div>
              <div className="checkout-success-title">Payment Submitted!</div>
              <div className="checkout-success-sub">
                Your payment proof for the <strong>{plan.name} Plan</strong> has been submitted successfully.
                Our team will review and activate your plan within <strong>24 hours</strong>.
              </div>
              <div style={{background:"rgba(0,212,170,0.06)",border:"1px solid rgba(0,212,170,0.2)",borderRadius:"var(--radius)",padding:"16px 20px",marginBottom:28,textAlign:"left"}}>
                <div style={{fontSize:12,fontWeight:600,color:"var(--text-dim)",textTransform:"uppercase",letterSpacing:"0.8px",marginBottom:12}}>Submission Summary</div>
                {[
                  { label:"Plan",        value: plan.name },
                  { label:"Amount",      value: `$${plan.price.toLocaleString()}` },
                  { label:"Crypto",      value: crypto },
                  { label:"TXID",        value: txid },
                  { label:"Your Wallet", value: sender },
                ].map((r,i) => (
                  <div key={i} style={{display:"flex",justifyContent:"space-between",fontSize:13,padding:"6px 0",borderBottom:"1px solid var(--border)"}}>
                    <span style={{color:"var(--text-dim)"}}>{r.label}</span>
                    <span style={{fontWeight:600,fontFamily:r.label==="TXID"||r.label==="Your Wallet"?"var(--font-mono)":"inherit",fontSize:r.label==="TXID"||r.label==="Your Wallet"?11:13,wordBreak:"break-all",maxWidth:"60%",textAlign:"right"}}>{r.value}</span>
                  </div>
                ))}
              </div>
              <div style={{display:"flex",gap:12,justifyContent:"center"}}>
                <Link href="/dashboard" className="btn btn-primary">Go to Dashboard →</Link>
                <Link href="/plans"     className="btn btn-ghost">View Plans</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Navbar />
      <div className="checkout-page">
        <div style={{maxWidth:960,margin:"0 auto"}}>
          {/* Page header */}
          <div style={{marginBottom:32}}>
            <div className="section-label">Checkout</div>
            <h1 style={{fontSize:"clamp(24px,4vw,36px)",fontWeight:800,marginBottom:8}}>
              Subscribe to <span className="gradient-text">{plan.name} Plan</span>
            </h1>
            <p style={{fontSize:14,color:"var(--text-dim)"}}>
              Complete your payment below. Your plan will be activated within 24 hours of verification.
            </p>
          </div>

          <div className="checkout-wrap">
            {/* LEFT COLUMN */}
            <div className="checkout-left">

              {/* Step 1 — Select Crypto */}
              <div className="checkout-section">
                <div className="checkout-section-title">
                  <div className="checkout-section-num">1</div>
                  Select Payment Cryptocurrency
                </div>
                <div className="crypto-grid">
                  {Object.entries(WALLETS).map(([name, info]) => (
                    <div
                      key={name}
                      className={`crypto-card${crypto===name?" selected":""}`}
                      onClick={() => setCrypto(name)}
                    >
                      <div className="crypto-card-icon">{info.icon}</div>
                      <div className="crypto-card-name">{info.symbol}</div>
                      <div className="crypto-card-network">{info.network}</div>
                    </div>
                  ))}
                </div>

                {/* Wallet address */}
                <div className="wallet-box">
                  <div className="wallet-box-label">Send {wallet.symbol} to this address</div>
                  <div className="wallet-box-address">{wallet.address}</div>
                  <div className="wallet-box-footer">
                    <div className="wallet-box-network">{wallet.network}</div>
                    <button className={`copy-btn${copied?" copied":""}`} onClick={handleCopy}>
                      {copied ? "✓ Copied!" : "⎘ Copy Address"}
                    </button>
                  </div>
                </div>

                <div className="amount-due">
                  <span className="amount-due-label">Amount Due</span>
                  <span className="amount-due-value">${plan.price.toLocaleString()} USD worth of {wallet.symbol}</span>
                </div>

                <div className="checkout-warning" style={{marginTop:14}}>
                  ⚠ Send <strong>exactly ${plan.price.toLocaleString()} USD</strong> worth of {wallet.symbol}.
                  Only send via <strong>{wallet.network}</strong>. Sending on the wrong network will result in permanent loss of funds.
                </div>
              </div>

              {/* Step 2 — Payment Proof */}
              <div className="checkout-section">
                <div className="checkout-section-title">
                  <div className="checkout-section-num">2</div>
                  Submit Payment Proof
                </div>
                {error && (
                  <div style={{background:"rgba(255,77,106,0.1)",border:"1px solid rgba(255,77,106,0.3)",borderRadius:"var(--radius)",padding:"12px 16px",fontSize:13,color:"var(--red)",marginBottom:16}}>
                    ⚠ {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:18}}>
                  <div className="form-group">
                    <label className="input-label">Transaction ID (TXID) *</label>
                    <input
                      className="input"
                      placeholder="Enter the transaction hash from your wallet"
                      value={txid}
                      onChange={e => setTxid(e.target.value)}
                      required
                    />
                    <div style={{fontSize:11,color:"var(--text-muted)",marginTop:4}}>
                      Find this in your wallet's transaction history after sending payment.
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="input-label">Your Sender Wallet Address *</label>
                    <input
                      className="input"
                      placeholder="The wallet address you sent payment FROM"
                      value={sender}
                      onChange={e => setSender(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="input-label">Payment Screenshot (optional but recommended)</label>
                    <div
                      className={`upload-area${fileB64?" has-file":""}`}
                      onClick={() => fileRef.current?.click()}
                    >
                      <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFile}
                        style={{display:"none"}}
                      />
                      {fileB64 ? (
                        <div className="upload-preview">
                          <span style={{fontSize:24}}>✅</span>
                          <span className="upload-filename">{fileName}</span>
                        </div>
                      ) : (
                        <>
                          <div className="upload-icon">📸</div>
                          <div className="upload-text">Click to upload screenshot</div>
                          <div className="upload-hint">PNG, JPG or WEBP · Max 5MB</div>
                        </>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                    style={{width:"100%",padding:14,fontSize:15}}
                  >
                    {loading
                      ? <><span style={{width:16,height:16,border:"2px solid rgba(0,0,0,0.3)",borderTopColor:"#050B18",borderRadius:"50%",display:"inline-block",animation:"spin 0.8s linear infinite",marginRight:8}} />Submitting…</>
                      : "Submit Payment for Review →"
                    }
                  </button>
                </form>
              </div>

            </div>

            {/* RIGHT COLUMN — Order summary */}
            <div className="checkout-right">
              <div className="plan-summary">
                <div className="plan-summary-name">{plan.name} Plan</div>
                <div className="plan-summary-roi" style={{color:plan.color}}>{plan.roi}%</div>
                <div className="plan-summary-label">Monthly Return on Investment</div>
                <div className="plan-summary-price" style={{color:plan.color}}>
                  ${plan.price.toLocaleString()} <span style={{fontSize:14,fontWeight:400,color:"var(--text-dim)"}}>/ month</span>
                </div>
                <div className="plan-summary-features">
                  {plan.features.slice(0,5).map((f,i) => (
                    <div key={i} className="plan-summary-feature">
                      <span>✓</span><span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="checkout-section" style={{padding:20}}>
                <div style={{fontSize:14,fontWeight:700,marginBottom:14}}>Order Summary</div>
                <div className="order-row">
                  <span className="order-row-label">Plan</span>
                  <span className="order-row-value">{plan.name}</span>
                </div>
                <div className="order-row">
                  <span className="order-row-label">Monthly ROI</span>
                  <span className="order-row-value" style={{color:plan.color}}>{plan.roi}%</span>
                </div>
                <div className="order-row">
                  <span className="order-row-label">Min Deposit</span>
                  <span className="order-row-value">${plan.minDeposit.toLocaleString()}</span>
                </div>
                <div className="order-row">
                  <span className="order-row-label">Payment Method</span>
                  <span className="order-row-value">{WALLETS[crypto]?.symbol}</span>
                </div>
                <div className="order-total">
                  <span>Total Due</span>
                  <span className="order-total-value">${plan.price.toLocaleString()}</span>
                </div>
              </div>

              <div className="checkout-section" style={{padding:20}}>
                <div style={{fontSize:13,fontWeight:700,marginBottom:12,color:"var(--text-dim)"}}>📋 How It Works</div>
                {[
                  { step:"1", text:"Choose your crypto and copy the wallet address" },
                  { step:"2", text:"Send the exact amount from your wallet" },
                  { step:"3", text:"Copy your TXID and paste it above" },
                  { step:"4", text:"Submit — we verify and activate within 24hrs" },
                ].map(s => (
                  <div key={s.step} style={{display:"flex",gap:10,marginBottom:10,fontSize:13,color:"var(--text-dim)"}}>
                    <div style={{width:20,height:20,borderRadius:"50%",background:"var(--surface-3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,flexShrink:0}}>{s.step}</div>
                    <span>{s.text}</span>
                  </div>
                ))}
              </div>

              <div className="checkout-warning">
                🔒 Your payment is reviewed manually by our team. Plan activation typically takes 1–24 hours after verification.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg)"}}>
        <div style={{width:40,height:40,border:"3px solid var(--surface-3)",borderTopColor:"var(--teal)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}} />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
