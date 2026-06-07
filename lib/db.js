import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
let cached = global._mongoose || { conn:null, promise:null };
global._mongoose = cached;

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!MONGODB_URI) throw new Error("NO_MONGO");
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS:5000 }).then(m=>m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// ── Schemas ──────────────────────────────────────────────────
const UserSchema = new mongoose.Schema({
  id:         { type:String, unique:true },
  name:       String,
  email:      { type:String, unique:true, lowercase:true },
  password:   String,
  role:       { type:String, default:"user" },
  plan:       { type:String, default:"starter" },
  balance:    { type:Number, default:0 },
  invested:   { type:Number, default:0 },
  profit:     { type:Number, default:0 },
  status:     { type:String, default:"active" },
  avatar:     { type:String, default:"" },
  createdAt:  { type:String, default:()=>new Date().toISOString() },
  lastActive: { type:String, default:()=>new Date().toISOString() },
}, { collection:"users" });

const TransactionSchema = new mongoose.Schema({
  id:     { type:String, unique:true },
  userId: String, user:String, type:String,
  amount: Number, status:{ type:String, default:"pending" },
  date:   String, method:String, plan:String,
}, { collection:"transactions" });

const SubscriptionSchema = new mongoose.Schema({
  id:               { type:String, unique:true },
  userId:String, userName:String, userEmail:String,
  planId:String, planName:String, planPrice:Number,
  crypto:String, walletAddress:String, txid:String,
  senderWallet:String, screenshotBase64:String,
  status:{ type:String, default:"pending" },
  note:String, submittedAt:{ type:String, default:()=>new Date().toISOString() },
  reviewedAt:String,
}, { collection:"subscriptions" });

const PlanSchema = new mongoose.Schema({
  id:{ type:String, unique:true }, name:String, roi:Number,
  price:Number, minDeposit:Number, badge:String, color:String,
  features:[String], notIncluded:[String],
}, { collection:"plans" });

const SettingsSchema = new mongoose.Schema({
  key:{ type:String, unique:true }, value:mongoose.Schema.Types.Mixed,
}, { collection:"settings" });

const User         = mongoose.models.User         || mongoose.model("User",         UserSchema);
const Transaction  = mongoose.models.Transaction  || mongoose.model("Transaction",  TransactionSchema);
const Subscription = mongoose.models.Subscription || mongoose.model("Subscription", SubscriptionSchema);
const Plan         = mongoose.models.Plan         || mongoose.model("Plan",         PlanSchema);
const Settings     = mongoose.models.Settings     || mongoose.model("Settings",     SettingsSchema);

// ── JSON fallback helpers ─────────────────────────────────────
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

function readJSON(file) {
  try {
    const p = join(process.cwd(), "data", file);
    if (!existsSync(p)) return [];
    const raw = readFileSync(p, "utf8").trim();
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function writeJSON(file, data) {
  try {
    const p = join(process.cwd(), "data", file);
    writeFileSync(p, JSON.stringify(data, null, 2));
  } catch {}
}

// ── usersDb ──────────────────────────────────────────────────
export const usersDb = {
  async getAll() {
    try {
      await connectDB();
      return User.find().lean();
    } catch { return readJSON("users.json"); }
  },
  async findById(id) {
    try {
      await connectDB();
      return User.findOne({ id }).lean();
    } catch { return readJSON("users.json").find(u=>u.id===id) || null; }
  },
  async findByEmail(email) {
    try {
      await connectDB();
      return User.findOne({ email:email.toLowerCase() }).lean();
    } catch { return readJSON("users.json").find(u=>u.email?.toLowerCase()===email.toLowerCase()) || null; }
  },
  async create(data) {
    try {
      await connectDB();
      const u = new User(data); await u.save(); return u.toObject();
    } catch {
      const users = readJSON("users.json");
      users.push(data); writeJSON("users.json", users); return data;
    }
  },
  async update(id, updates) {
    try {
      await connectDB();
      return User.findOneAndUpdate({ id }, updates, { new:true }).lean();
    } catch {
      const users = readJSON("users.json");
      const idx = users.findIndex(u=>u.id===id);
      if (idx===-1) return null;
      users[idx] = { ...users[idx], ...updates };
      writeJSON("users.json", users); return users[idx];
    }
  },
  async delete(id) {
    try {
      await connectDB();
      return User.deleteOne({ id });
    } catch {
      const users = readJSON("users.json").filter(u=>u.id!==id);
      writeJSON("users.json", users);
    }
  },
};

// ── transactionsDb ───────────────────────────────────────────
export const transactionsDb = {
  async getAll() {
    try { await connectDB(); return Transaction.find().lean(); }
    catch { return readJSON("transactions.json"); }
  },
  async filter({ userId, status, type }={}) {
    try {
      await connectDB();
      const q={};
      if(userId) q.userId=userId; if(status) q.status=status; if(type) q.type=type;
      return Transaction.find(q).lean();
    } catch {
      let data = readJSON("transactions.json");
      if(userId) data=data.filter(t=>t.userId===userId);
      if(status) data=data.filter(t=>t.status===status);
      if(type)   data=data.filter(t=>t.type===type);
      return data;
    }
  },
  async create(data) {
    try { await connectDB(); const t=new Transaction(data); await t.save(); return t.toObject(); }
    catch { const txns=readJSON("transactions.json"); txns.push(data); writeJSON("transactions.json",txns); return data; }
  },
  async update(id, updates) {
    try { await connectDB(); return Transaction.findOneAndUpdate({id},updates,{new:true}).lean(); }
    catch {
      const txns=readJSON("transactions.json");
      const idx=txns.findIndex(t=>t.id===id);
      if(idx===-1) return null;
      txns[idx]={...txns[idx],...updates}; writeJSON("transactions.json",txns); return txns[idx];
    }
  },
};

// ── subscriptionsDb ──────────────────────────────────────────
export const subscriptionsDb = {
  async getAll() {
    try { await connectDB(); return Subscription.find().lean(); }
    catch { return readJSON("subscriptions.json"); }
  },
  async filter({ status, userId }={}) {
    try {
      await connectDB();
      const q={}; if(status) q.status=status; if(userId) q.userId=userId;
      return Subscription.find(q).lean();
    } catch {
      let data=readJSON("subscriptions.json");
      if(status) data=data.filter(s=>s.status===status);
      if(userId) data=data.filter(s=>s.userId===userId);
      return data;
    }
  },
  async create(data) {
    try { await connectDB(); const s=new Subscription(data); await s.save(); return s.toObject(); }
    catch { const subs=readJSON("subscriptions.json"); subs.push(data); writeJSON("subscriptions.json",subs); return data; }
  },
  async updateStatus(id, status, note="") {
    try {
      await connectDB();
      const s=await Subscription.findOneAndUpdate({id},{status,note,reviewedAt:new Date().toISOString()},{new:true}).lean();
      if(!s) throw new Error("SUB_NOT_FOUND"); return s;
    } catch(e) {
      if(e.message==="SUB_NOT_FOUND") throw e;
      const subs=readJSON("subscriptions.json");
      const idx=subs.findIndex(s=>s.id===id);
      if(idx===-1) throw new Error("SUB_NOT_FOUND");
      subs[idx]={...subs[idx],status,note,reviewedAt:new Date().toISOString()};
      writeJSON("subscriptions.json",subs); return subs[idx];
    }
  },
};

// ── plansDb ──────────────────────────────────────────────────
export const plansDb = {
  async getAll() {
    try { await connectDB(); return Plan.find().lean(); }
    catch { return readJSON("plans.json"); }
  },
  async upsert(data) {
    try { await connectDB(); return Plan.findOneAndUpdate({id:data.id},data,{upsert:true,new:true}).lean(); }
    catch {
      const plans=readJSON("plans.json");
      const idx=plans.findIndex(p=>p.id===data.id);
      if(idx===-1) plans.push(data); else plans[idx]={...plans[idx],...data};
      writeJSON("plans.json",plans); return data;
    }
  },
  async update(id, updates) {
    try { await connectDB(); return Plan.findOneAndUpdate({id},updates,{new:true}).lean(); }
    catch {
      const plans=readJSON("plans.json");
      const idx=plans.findIndex(p=>p.id===id);
      if(idx===-1) return null;
      plans[idx]={...plans[idx],...updates}; writeJSON("plans.json",plans); return plans[idx];
    }
  },
};

// ── settingsDb ───────────────────────────────────────────────
export const settingsDb = {
  async get(key) {
    try { await connectDB(); const d=await Settings.findOne({key}).lean(); return d?d.value:null; }
    catch {
      const all=readJSON("settings.json");
      const found=all.find(s=>s.key===key); return found?found.value:null;
    }
  },
  async set(key, value) {
    try { await connectDB(); return Settings.findOneAndUpdate({key},{key,value},{upsert:true,new:true}).lean(); }
    catch {
      const all=readJSON("settings.json");
      const idx=all.findIndex(s=>s.key===key);
      if(idx===-1) all.push({key,value}); else all[idx]={key,value};
      writeJSON("settings.json",all); return {key,value};
    }
  },
};
