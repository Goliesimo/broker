module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/lib/db.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "plansDb",
    ()=>plansDb,
    "settingsDb",
    ()=>settingsDb,
    "subscriptionsDb",
    ()=>subscriptionsDb,
    "transactionsDb",
    ()=>transactionsDb,
    "usersDb",
    ()=>usersDb
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
// ── JSON fallback helpers ─────────────────────────────────────
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
const MONGODB_URI = process.env.MONGODB_URI;
let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g._mongoose || {
    conn: null,
    promise: null
};
/*TURBOPACK member replacement*/ __turbopack_context__.g._mongoose = cached;
async function connectDB() {
    if (cached.conn) return cached.conn;
    if (!MONGODB_URI) throw new Error("NO_MONGO");
    if (!cached.promise) {
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 5000
        }).then((m)=>m);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
// ── Schemas ──────────────────────────────────────────────────
const UserSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    id: {
        type: String,
        unique: true
    },
    name: String,
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String,
    role: {
        type: String,
        default: "user"
    },
    plan: {
        type: String,
        default: "starter"
    },
    balance: {
        type: Number,
        default: 0
    },
    invested: {
        type: Number,
        default: 0
    },
    profit: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: "active"
    },
    avatar: {
        type: String,
        default: ""
    },
    createdAt: {
        type: String,
        default: ()=>new Date().toISOString()
    },
    lastActive: {
        type: String,
        default: ()=>new Date().toISOString()
    }
}, {
    collection: "users"
});
const TransactionSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    id: {
        type: String,
        unique: true
    },
    userId: String,
    user: String,
    type: String,
    amount: Number,
    status: {
        type: String,
        default: "pending"
    },
    date: String,
    method: String,
    plan: String
}, {
    collection: "transactions"
});
const SubscriptionSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    id: {
        type: String,
        unique: true
    },
    userId: String,
    userName: String,
    userEmail: String,
    planId: String,
    planName: String,
    planPrice: Number,
    crypto: String,
    walletAddress: String,
    txid: String,
    senderWallet: String,
    screenshotBase64: String,
    status: {
        type: String,
        default: "pending"
    },
    note: String,
    submittedAt: {
        type: String,
        default: ()=>new Date().toISOString()
    },
    reviewedAt: String
}, {
    collection: "subscriptions"
});
const PlanSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    id: {
        type: String,
        unique: true
    },
    name: String,
    roi: Number,
    price: Number,
    minDeposit: Number,
    badge: String,
    color: String,
    features: [
        String
    ],
    notIncluded: [
        String
    ]
}, {
    collection: "plans"
});
const SettingsSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    key: {
        type: String,
        unique: true
    },
    value: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.Mixed
}, {
    collection: "settings"
});
const User = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("User", UserSchema);
const Transaction = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Transaction || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Transaction", TransactionSchema);
const Subscription = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Subscription || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Subscription", SubscriptionSchema);
const Plan = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Plan || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Plan", PlanSchema);
const Settings = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Settings || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Settings", SettingsSchema);
;
;
function readJSON(file) {
    try {
        const p = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), "data", file);
        if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"])(p)) return [];
        const raw = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readFileSync"])(p, "utf8").trim();
        return raw ? JSON.parse(raw) : [];
    } catch  {
        return [];
    }
}
function writeJSON(file, data) {
    try {
        const p = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), "data", file);
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["writeFileSync"])(p, JSON.stringify(data, null, 2));
    } catch  {}
}
const usersDb = {
    async getAll () {
        try {
            await connectDB();
            return User.find().lean();
        } catch  {
            return readJSON("users.json");
        }
    },
    async findById (id) {
        try {
            await connectDB();
            return User.findOne({
                id
            }).lean();
        } catch  {
            return readJSON("users.json").find((u)=>u.id === id) || null;
        }
    },
    async findByEmail (email) {
        try {
            await connectDB();
            return User.findOne({
                email: email.toLowerCase()
            }).lean();
        } catch  {
            return readJSON("users.json").find((u)=>u.email?.toLowerCase() === email.toLowerCase()) || null;
        }
    },
    async create (data) {
        try {
            await connectDB();
            const u = new User(data);
            await u.save();
            return u.toObject();
        } catch  {
            const users = readJSON("users.json");
            users.push(data);
            writeJSON("users.json", users);
            return data;
        }
    },
    async update (id, updates) {
        try {
            await connectDB();
            return User.findOneAndUpdate({
                id
            }, updates, {
                new: true
            }).lean();
        } catch  {
            const users = readJSON("users.json");
            const idx = users.findIndex((u)=>u.id === id);
            if (idx === -1) return null;
            users[idx] = {
                ...users[idx],
                ...updates
            };
            writeJSON("users.json", users);
            return users[idx];
        }
    },
    async delete (id) {
        try {
            await connectDB();
            return User.deleteOne({
                id
            });
        } catch  {
            const users = readJSON("users.json").filter((u)=>u.id !== id);
            writeJSON("users.json", users);
        }
    }
};
const transactionsDb = {
    async getAll () {
        try {
            await connectDB();
            return Transaction.find().lean();
        } catch  {
            return readJSON("transactions.json");
        }
    },
    async filter ({ userId, status, type } = {}) {
        try {
            await connectDB();
            const q = {};
            if (userId) q.userId = userId;
            if (status) q.status = status;
            if (type) q.type = type;
            return Transaction.find(q).lean();
        } catch  {
            let data = readJSON("transactions.json");
            if (userId) data = data.filter((t)=>t.userId === userId);
            if (status) data = data.filter((t)=>t.status === status);
            if (type) data = data.filter((t)=>t.type === type);
            return data;
        }
    },
    async create (data) {
        try {
            await connectDB();
            const t = new Transaction(data);
            await t.save();
            return t.toObject();
        } catch  {
            const txns = readJSON("transactions.json");
            txns.push(data);
            writeJSON("transactions.json", txns);
            return data;
        }
    },
    async update (id, updates) {
        try {
            await connectDB();
            return Transaction.findOneAndUpdate({
                id
            }, updates, {
                new: true
            }).lean();
        } catch  {
            const txns = readJSON("transactions.json");
            const idx = txns.findIndex((t)=>t.id === id);
            if (idx === -1) return null;
            txns[idx] = {
                ...txns[idx],
                ...updates
            };
            writeJSON("transactions.json", txns);
            return txns[idx];
        }
    }
};
const subscriptionsDb = {
    async getAll () {
        try {
            await connectDB();
            return Subscription.find().lean();
        } catch  {
            return readJSON("subscriptions.json");
        }
    },
    async filter ({ status, userId } = {}) {
        try {
            await connectDB();
            const q = {};
            if (status) q.status = status;
            if (userId) q.userId = userId;
            return Subscription.find(q).lean();
        } catch  {
            let data = readJSON("subscriptions.json");
            if (status) data = data.filter((s)=>s.status === status);
            if (userId) data = data.filter((s)=>s.userId === userId);
            return data;
        }
    },
    async create (data) {
        try {
            await connectDB();
            const s = new Subscription(data);
            await s.save();
            return s.toObject();
        } catch  {
            const subs = readJSON("subscriptions.json");
            subs.push(data);
            writeJSON("subscriptions.json", subs);
            return data;
        }
    },
    async updateStatus (id, status, note = "") {
        try {
            await connectDB();
            const s = await Subscription.findOneAndUpdate({
                id
            }, {
                status,
                note,
                reviewedAt: new Date().toISOString()
            }, {
                new: true
            }).lean();
            if (!s) throw new Error("SUB_NOT_FOUND");
            return s;
        } catch (e) {
            if (e.message === "SUB_NOT_FOUND") throw e;
            const subs = readJSON("subscriptions.json");
            const idx = subs.findIndex((s)=>s.id === id);
            if (idx === -1) throw new Error("SUB_NOT_FOUND");
            subs[idx] = {
                ...subs[idx],
                status,
                note,
                reviewedAt: new Date().toISOString()
            };
            writeJSON("subscriptions.json", subs);
            return subs[idx];
        }
    }
};
const plansDb = {
    async getAll () {
        try {
            await connectDB();
            return Plan.find().lean();
        } catch  {
            return readJSON("plans.json");
        }
    },
    async upsert (data) {
        try {
            await connectDB();
            return Plan.findOneAndUpdate({
                id: data.id
            }, data, {
                upsert: true,
                new: true
            }).lean();
        } catch  {
            const plans = readJSON("plans.json");
            const idx = plans.findIndex((p)=>p.id === data.id);
            if (idx === -1) plans.push(data);
            else plans[idx] = {
                ...plans[idx],
                ...data
            };
            writeJSON("plans.json", plans);
            return data;
        }
    },
    async update (id, updates) {
        try {
            await connectDB();
            return Plan.findOneAndUpdate({
                id
            }, updates, {
                new: true
            }).lean();
        } catch  {
            const plans = readJSON("plans.json");
            const idx = plans.findIndex((p)=>p.id === id);
            if (idx === -1) return null;
            plans[idx] = {
                ...plans[idx],
                ...updates
            };
            writeJSON("plans.json", plans);
            return plans[idx];
        }
    }
};
const settingsDb = {
    async get (key) {
        try {
            await connectDB();
            const d = await Settings.findOne({
                key
            }).lean();
            return d ? d.value : null;
        } catch  {
            const all = readJSON("settings.json");
            const found = all.find((s)=>s.key === key);
            return found ? found.value : null;
        }
    },
    async set (key, value) {
        try {
            await connectDB();
            return Settings.findOneAndUpdate({
                key
            }, {
                key,
                value
            }, {
                upsert: true,
                new: true
            }).lean();
        } catch  {
            const all = readJSON("settings.json");
            const idx = all.findIndex((s)=>s.key === key);
            if (idx === -1) all.push({
                key,
                value
            });
            else all[idx] = {
                key,
                value
            };
            writeJSON("settings.json", all);
            return {
                key,
                value
            };
        }
    }
};
}),
"[project]/app/api/settings/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [app-route] (ecmascript)");
;
;
const DEFAULT_CHECKOUT = {
    wallets: {
        "USDT (TRC20)": {
            address: "TYourTRC20WalletAddressHere",
            network: "TRON Network (TRC20)",
            icon: "💵",
            symbol: "USDT",
            enabled: true
        },
        "USDT (ERC20)": {
            address: "0xYourERC20WalletAddressHere",
            network: "Ethereum Network (ERC20)",
            icon: "💵",
            symbol: "USDT",
            enabled: true
        },
        "Bitcoin (BTC)": {
            address: "bc1YourBitcoinWalletAddressHere",
            network: "Bitcoin Network",
            icon: "₿",
            symbol: "BTC",
            enabled: true
        },
        "Ethereum (ETH)": {
            address: "0xYourEthereumWalletAddressHere",
            network: "Ethereum Network (ETH)",
            icon: "Ξ",
            symbol: "ETH",
            enabled: true
        }
    },
    instructions: "Send the exact amount to the wallet address below. Your plan will be activated within 24 hours of payment verification.",
    activationTime: "24 hours",
    warningText: "Only send via the correct network. Sending on the wrong network will result in permanent loss of funds.",
    screenshotRequired: false,
    txidRequired: true
};
async function GET() {
    try {
        const checkout = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["settingsDb"].get("checkout") || DEFAULT_CHECKOUT;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            checkout
        });
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            checkout: DEFAULT_CHECKOUT
        });
    }
}
async function PUT(request) {
    try {
        const { checkout } = await request.json();
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["settingsDb"].set("checkout", checkout);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            checkout
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8930968a._.js.map