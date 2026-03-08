// lib/db.js — MongoDB database layer
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("Please define MONGODB_URI in .env.local");

let cached = global._mongoose || { conn:null, promise:null };
global._mongoose = cached;

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then(m => m);
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
  createdAt:  { type:String, default:() => new Date().toISOString() },
  lastActive: { type:String, default:() => new Date().toISOString() },
  avatar:     { type:String, default:"" },
}, { collection:"users" });

const TransactionSchema = new mongoose.Schema({
  id:       { type:String, unique:true },
  userId:   String,
  user:     String,
  type:     String,
  amount:   Number,
  status:   { type:String, default:"pending" },
  date:     String,
  method:   String,
  plan:     String,
}, { collection:"transactions" });

const SubscriptionSchema = new mongoose.Schema({
  id:               { type:String, unique:true },
  userId:           String,
  userName:         String,
  userEmail:        String,
  planId:           String,
  planName:         String,
  planPrice:        Number,
  crypto:           String,
  walletAddress:    String,
  txid:             String,
  senderWallet:     String,
  screenshotBase64: String,
  status:           { type:String, default:"pending" },
  note:             String,
  submittedAt:      { type:String, default:() => new Date().toISOString() },
  reviewedAt:       String,
}, { collection:"subscriptions" });

// ── Models ───────────────────────────────────────────────────
const User         = mongoose.models.User         || mongoose.model("User",         UserSchema);
const Transaction  = mongoose.models.Transaction  || mongoose.model("Transaction",  TransactionSchema);
const Subscription = mongoose.models.Subscription || mongoose.model("Subscription", SubscriptionSchema);

// ── usersDb ──────────────────────────────────────────────────
export const usersDb = {
  async getAll() {
    await connectDB();
    return User.find().lean();
  },
  async findById(id) {
    await connectDB();
    return User.findOne({ id }).lean();
  },
  async findByEmail(email) {
    await connectDB();
    return User.findOne({ email: email.toLowerCase() }).lean();
  },
  async create(data) {
    await connectDB();
    const user = new User(data);
    await user.save();
    return user.toObject();
  },
  async update(id, updates) {
    await connectDB();
    return User.findOneAndUpdate({ id }, updates, { new:true }).lean();
  },
  async delete(id) {
    await connectDB();
    return User.deleteOne({ id });
  },
};

// ── transactionsDb ───────────────────────────────────────────
export const transactionsDb = {
  async getAll() {
    await connectDB();
    return Transaction.find().lean();
  },
  async filter({ userId, status, type } = {}) {
    await connectDB();
    const q = {};
    if (userId) q.userId = userId;
    if (status) q.status = status;
    if (type)   q.type   = type;
    return Transaction.find(q).lean();
  },
  async create(data) {
    await connectDB();
    const tx = new Transaction(data);
    await tx.save();
    return tx.toObject();
  },
  async update(id, updates) {
    await connectDB();
    return Transaction.findOneAndUpdate({ id }, updates, { new:true }).lean();
  },
};

// ── subscriptionsDb ──────────────────────────────────────────
export const subscriptionsDb = {
  async getAll() {
    await connectDB();
    return Subscription.find().lean();
  },
  async filter({ status, userId } = {}) {
    await connectDB();
    const q = {};
    if (status) q.status = status;
    if (userId) q.userId = userId;
    return Subscription.find(q).lean();
  },
  async create(data) {
    await connectDB();
    const sub = new Subscription(data);
    await sub.save();
    return sub.toObject();
  },
  async updateStatus(id, status, note = "") {
    await connectDB();
    const sub = await Subscription.findOneAndUpdate(
      { id },
      { status, note, reviewedAt: new Date().toISOString() },
      { new:true }
    ).lean();
    if (!sub) throw new Error("SUB_NOT_FOUND");
    return sub;
  },
};
