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
// lib/db.js — MongoDB database layer
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error("Please define MONGODB_URI in .env.local");
let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g._mongoose || {
    conn: null,
    promise: null
};
/*TURBOPACK member replacement*/ __turbopack_context__.g._mongoose = cached;
async function connectDB() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI).then((m)=>m);
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
    createdAt: {
        type: String,
        default: ()=>new Date().toISOString()
    },
    lastActive: {
        type: String,
        default: ()=>new Date().toISOString()
    },
    avatar: {
        type: String,
        default: ""
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
// ── Models ───────────────────────────────────────────────────
const User = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("User", UserSchema);
const Transaction = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Transaction || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Transaction", TransactionSchema);
const Subscription = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Subscription || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Subscription", SubscriptionSchema);
const usersDb = {
    async getAll () {
        await connectDB();
        return User.find().lean();
    },
    async findById (id) {
        await connectDB();
        return User.findOne({
            id
        }).lean();
    },
    async findByEmail (email) {
        await connectDB();
        return User.findOne({
            email: email.toLowerCase()
        }).lean();
    },
    async create (data) {
        await connectDB();
        const user = new User(data);
        await user.save();
        return user.toObject();
    },
    async update (id, updates) {
        await connectDB();
        return User.findOneAndUpdate({
            id
        }, updates, {
            new: true
        }).lean();
    },
    async delete (id) {
        await connectDB();
        return User.deleteOne({
            id
        });
    }
};
const transactionsDb = {
    async getAll () {
        await connectDB();
        return Transaction.find().lean();
    },
    async filter ({ userId, status, type } = {}) {
        await connectDB();
        const q = {};
        if (userId) q.userId = userId;
        if (status) q.status = status;
        if (type) q.type = type;
        return Transaction.find(q).lean();
    },
    async create (data) {
        await connectDB();
        const tx = new Transaction(data);
        await tx.save();
        return tx.toObject();
    },
    async update (id, updates) {
        await connectDB();
        return Transaction.findOneAndUpdate({
            id
        }, updates, {
            new: true
        }).lean();
    }
};
const subscriptionsDb = {
    async getAll () {
        await connectDB();
        return Subscription.find().lean();
    },
    async filter ({ status, userId } = {}) {
        await connectDB();
        const q = {};
        if (status) q.status = status;
        if (userId) q.userId = userId;
        return Subscription.find(q).lean();
    },
    async create (data) {
        await connectDB();
        const sub = new Subscription(data);
        await sub.save();
        return sub.toObject();
    },
    async updateStatus (id, status, note = "") {
        await connectDB();
        const sub = await Subscription.findOneAndUpdate({
            id
        }, {
            status,
            note,
            reviewedAt: new Date().toISOString()
        }, {
            new: true
        }).lean();
        if (!sub) throw new Error("SUB_NOT_FOUND");
        return sub;
    }
};
// ── PlanSchema ───────────────────────────────────────────────
const PlanSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    id: {
        type: String,
        unique: true
    },
    name: String,
    roi: Number,
    price: Number,
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
const Plan = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Plan || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Plan", PlanSchema);
const plansDb = {
    async getAll () {
        await connectDB();
        return Plan.find().lean();
    },
    async upsert (data) {
        await connectDB();
        return Plan.findOneAndUpdate({
            id: data.id
        }, data, {
            upsert: true,
            new: true
        }).lean();
    },
    async update (id, updates) {
        await connectDB();
        return Plan.findOneAndUpdate({
            id
        }, updates, {
            new: true
        }).lean();
    }
};
// ── SettingsSchema ───────────────────────────────────────────
const SettingsSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    key: {
        type: String,
        unique: true
    },
    value: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.Mixed
}, {
    collection: "settings"
});
const Settings = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Settings || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Settings", SettingsSchema);
const settingsDb = {
    async get (key) {
        await connectDB();
        const doc = await Settings.findOne({
            key
        }).lean();
        return doc ? doc.value : null;
    },
    async set (key, value) {
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
    }
};
}),
"[project]/app/api/transactions/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [app-route] (ecmascript)");
;
;
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get("userId");
        const status = searchParams.get("status");
        const type = searchParams.get("type");
        const transactions = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transactionsDb"].filter({
            userId,
            status,
            type
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            transactions,
            total: transactions.length
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err.message
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        const { userId, user, type, amount, method, plan } = body;
        if (!userId || !type || !amount) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "userId, type and amount are required."
            }, {
                status: 400
            });
        }
        const tx = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transactionsDb"].create({
            id: `tx-${Date.now()}`,
            userId,
            user,
            type,
            amount,
            status: "pending",
            date: new Date().toISOString().split("T")[0],
            method: method || "USDT",
            plan: plan || null
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            transaction: tx
        }, {
            status: 201
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err.message
        }, {
            status: 500
        });
    }
}
async function PATCH(request) {
    try {
        const { id, ...updates } = await request.json();
        if (!id) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "id required."
        }, {
            status: 400
        });
        const tx = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transactionsDb"].update(id, updates);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            transaction: tx
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

//# sourceMappingURL=%5Broot-of-the-server%5D__97280e92._.js.map