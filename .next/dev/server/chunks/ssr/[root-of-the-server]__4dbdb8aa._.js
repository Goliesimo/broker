module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/lib/data.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─── CryptoVault Pro — Shared Data & Constants ───────────────────────────────
__turbopack_context__.s([
    "ADMIN_STATS",
    ()=>ADMIN_STATS,
    "CRYPTO_PRICES",
    ()=>CRYPTO_PRICES,
    "MOCK_TRANSACTIONS",
    ()=>MOCK_TRANSACTIONS,
    "MOCK_USERS",
    ()=>MOCK_USERS,
    "PLANS",
    ()=>PLANS
]);
const PLANS = [
    {
        id: "starter",
        name: "Starter",
        price: 250,
        roi: 5,
        duration: "monthly",
        minDeposit: 250,
        maxDeposit: 999,
        color: "#4A9EFF",
        badge: null,
        features: [
            "5% Monthly ROI",
            "Basic market signals",
            "Email support",
            "Weekly performance report",
            "Access to 3 coin pairs",
            "Manual withdrawal"
        ],
        notIncluded: [
            "AI-powered analysis",
            "Dedicated account manager",
            "Priority withdrawal",
            "Custom strategy"
        ]
    },
    {
        id: "growth",
        name: "Growth",
        price: 1000,
        roi: 8,
        duration: "monthly",
        minDeposit: 1000,
        maxDeposit: 4999,
        color: "#00D4AA",
        badge: null,
        features: [
            "8% Monthly ROI",
            "Advanced trading signals",
            "Priority email & chat support",
            "Daily performance report",
            "Access to 10 coin pairs",
            "Automated reinvestment",
            "Portfolio tracker"
        ],
        notIncluded: [
            "AI-powered analysis",
            "Dedicated account manager",
            "Custom strategy"
        ]
    },
    {
        id: "pro",
        name: "Pro Trader",
        price: 5000,
        roi: 12,
        duration: "monthly",
        minDeposit: 5000,
        maxDeposit: 14999,
        color: "#7B61FF",
        badge: "Most Popular",
        features: [
            "12% Monthly ROI",
            "Premium trading signals",
            "24/7 live support",
            "Real-time performance dashboard",
            "Access to all coin pairs",
            "Automated reinvestment",
            "AI-powered market analysis",
            "Priority withdrawal (24h)",
            "Risk management tools"
        ],
        notIncluded: [
            "Dedicated account manager",
            "Custom strategy"
        ]
    },
    {
        id: "elite",
        name: "Elite",
        price: 15000,
        roi: 18,
        duration: "monthly",
        minDeposit: 15000,
        maxDeposit: 49999,
        color: "#FFB800",
        badge: "Best Value",
        features: [
            "18% Monthly ROI",
            "Exclusive VIP signals",
            "Dedicated account manager",
            "Real-time dashboard & alerts",
            "All coin pairs + futures",
            "Automated compound interest",
            "Advanced AI analysis suite",
            "Priority withdrawal (12h)",
            "Hedging & risk management",
            "Monthly strategy review"
        ],
        notIncluded: [
            "Custom trading strategy"
        ]
    },
    {
        id: "titan",
        name: "Titan",
        price: 50000,
        roi: 25,
        duration: "monthly",
        minDeposit: 50000,
        maxDeposit: null,
        color: "#FF6B35",
        badge: "Exclusive",
        features: [
            "25% Monthly ROI",
            "Institutional-grade signals",
            "Personal senior broker",
            "White-glove 24/7 support",
            "All assets + derivatives",
            "Full compound automation",
            "Custom AI trading strategy",
            "Instant withdrawal",
            "Quarterly portfolio audit",
            "OTC trading access",
            "Tax optimization guidance"
        ],
        notIncluded: []
    }
];
const MOCK_USERS = [
    {
        id: "u001",
        name: "Alex Morgan",
        email: "alex@email.com",
        plan: "pro",
        status: "active",
        balance: 18450,
        invested: 15000,
        profit: 3450,
        joinedAt: "2024-08-14",
        lastActive: "2026-02-22"
    },
    {
        id: "u002",
        name: "Sarah Okafor",
        email: "sarah@email.com",
        plan: "elite",
        status: "active",
        balance: 52800,
        invested: 45000,
        profit: 7800,
        joinedAt: "2024-06-02",
        lastActive: "2026-02-21"
    },
    {
        id: "u003",
        name: "James Chen",
        email: "james@email.com",
        plan: "starter",
        status: "active",
        balance: 290,
        invested: 250,
        profit: 40,
        joinedAt: "2025-01-18",
        lastActive: "2026-02-20"
    },
    {
        id: "u004",
        name: "Priya Sharma",
        email: "priya@email.com",
        plan: "growth",
        status: "suspended",
        balance: 1180,
        invested: 1000,
        profit: 180,
        joinedAt: "2024-11-05",
        lastActive: "2026-01-30"
    },
    {
        id: "u005",
        name: "Marcus Webb",
        email: "marcus@email.com",
        plan: "titan",
        status: "active",
        balance: 78500,
        invested: 50000,
        profit: 28500,
        joinedAt: "2024-03-22",
        lastActive: "2026-02-22"
    },
    {
        id: "u006",
        name: "Yuki Tanaka",
        email: "yuki@email.com",
        plan: "pro",
        status: "active",
        balance: 6200,
        invested: 5000,
        profit: 1200,
        joinedAt: "2025-05-10",
        lastActive: "2026-02-19"
    },
    {
        id: "u007",
        name: "Linda Diallo",
        email: "linda@email.com",
        plan: "growth",
        status: "pending",
        balance: 0,
        invested: 0,
        profit: 0,
        joinedAt: "2026-02-20",
        lastActive: "2026-02-20"
    },
    {
        id: "u008",
        name: "David Kim",
        email: "david@email.com",
        plan: "elite",
        status: "active",
        balance: 21000,
        invested: 15000,
        profit: 6000,
        joinedAt: "2024-09-01",
        lastActive: "2026-02-22"
    }
];
const MOCK_TRANSACTIONS = [
    {
        id: "tx001",
        userId: "u001",
        user: "Alex Morgan",
        type: "deposit",
        amount: 15000,
        status: "completed",
        date: "2026-02-01",
        method: "USDT",
        plan: "pro"
    },
    {
        id: "tx002",
        userId: "u002",
        user: "Sarah Okafor",
        type: "profit",
        amount: 7800,
        status: "completed",
        date: "2026-02-15",
        method: "System",
        plan: "elite"
    },
    {
        id: "tx003",
        userId: "u003",
        user: "James Chen",
        type: "deposit",
        amount: 250,
        status: "completed",
        date: "2026-01-18",
        method: "Bitcoin",
        plan: "starter"
    },
    {
        id: "tx004",
        userId: "u005",
        user: "Marcus Webb",
        type: "withdrawal",
        amount: 10000,
        status: "pending",
        date: "2026-02-22",
        method: "USDT",
        plan: "titan"
    },
    {
        id: "tx005",
        userId: "u006",
        user: "Yuki Tanaka",
        type: "profit",
        amount: 1200,
        status: "completed",
        date: "2026-02-10",
        method: "System",
        plan: "pro"
    },
    {
        id: "tx006",
        userId: "u001",
        user: "Alex Morgan",
        type: "withdrawal",
        amount: 2000,
        status: "completed",
        date: "2026-02-18",
        method: "Ethereum",
        plan: "pro"
    },
    {
        id: "tx007",
        userId: "u008",
        user: "David Kim",
        type: "deposit",
        amount: 15000,
        status: "completed",
        date: "2025-09-01",
        method: "Bitcoin",
        plan: "elite"
    },
    {
        id: "tx008",
        userId: "u004",
        user: "Priya Sharma",
        type: "withdrawal",
        amount: 500,
        status: "rejected",
        date: "2026-01-28",
        method: "USDT",
        plan: "growth"
    },
    {
        id: "tx009",
        userId: "u007",
        user: "Linda Diallo",
        type: "deposit",
        amount: 1000,
        status: "pending",
        date: "2026-02-20",
        method: "Bitcoin",
        plan: "growth"
    },
    {
        id: "tx010",
        userId: "u002",
        user: "Sarah Okafor",
        type: "withdrawal",
        amount: 5000,
        status: "pending",
        date: "2026-02-22",
        method: "USDT",
        plan: "elite"
    }
];
const CRYPTO_PRICES = [
    {
        symbol: "BTC",
        name: "Bitcoin",
        price: 98420.50,
        change: 2.34,
        color: "#FFB800"
    },
    {
        symbol: "ETH",
        name: "Ethereum",
        price: 3241.80,
        change: -1.12,
        color: "#7B61FF"
    },
    {
        symbol: "BNB",
        name: "BNB",
        price: 412.30,
        change: 0.87,
        color: "#FFD700"
    },
    {
        symbol: "SOL",
        name: "Solana",
        price: 187.40,
        change: 5.21,
        color: "#00D4AA"
    },
    {
        symbol: "XRP",
        name: "Ripple",
        price: 0.8420,
        change: -0.45,
        color: "#4A9EFF"
    },
    {
        symbol: "ADA",
        name: "Cardano",
        price: 0.6180,
        change: 1.93,
        color: "#4A9EFF"
    },
    {
        symbol: "DOGE",
        name: "Dogecoin",
        price: 0.1842,
        change: 3.67,
        color: "#FFB800"
    },
    {
        symbol: "DOT",
        name: "Polkadot",
        price: 9.420,
        change: -2.18,
        color: "#FF6B35"
    }
];
const ADMIN_STATS = {
    totalUsers: 248,
    activeUsers: 201,
    totalDeposited: 1284500,
    totalProfitPaid: 312800,
    pendingWithdrawals: 12,
    monthlyRevenue: 89400,
    planDistribution: {
        starter: 82,
        growth: 74,
        pro: 52,
        elite: 28,
        titan: 12
    }
};
}),
"[project]/app/register/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function RegisterPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        plan: "growth",
        terms: false
    });
    const [showPw, setShowPw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleChange = (e)=>{
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        if (!form.terms) {
            setError("You must accept the terms to continue.");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...form,
                    name: `${form.firstName} ${form.lastName}`.trim()
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Registration failed.");
                setLoading(false);
                return;
            }
            router.push("/dashboard");
        } catch  {
            setError("Network error. Please try again.");
            setLoading(false);
        }
    };
    const selectedPlan = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLANS"].find((p)=>p.id === form.plan);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "register-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "register-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "register-left-bg"
                    }, void 0, false, {
                        fileName: "[project]/app/register/page.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "register-logo",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "register-logo-icon",
                                children: "₿"
                            }, void 0, false, {
                                fileName: "[project]/app/register/page.js",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            "CryptoVault ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "gradient-text",
                                style: {
                                    marginLeft: 4
                                },
                                children: "Pro"
                            }, void 0, false, {
                                fileName: "[project]/app/register/page.js",
                                lineNumber: 44,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/register/page.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "register-plan-preview",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "register-plan-title",
                                children: "Select your plan"
                            }, void 0, false, {
                                fileName: "[project]/app/register/page.js",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "register-plan-cards",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLANS"].map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `register-plan-item${form.plan === plan.id ? " selected" : ""}`,
                                        onClick: ()=>setForm({
                                                ...form,
                                                plan: plan.id
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "register-plan-item-name",
                                                        children: plan.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/register/page.js",
                                                        lineNumber: 52,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "register-plan-item-price",
                                                        children: [
                                                            "From $",
                                                            plan.price.toLocaleString(),
                                                            "/mo"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/register/page.js",
                                                        lineNumber: 53,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/register/page.js",
                                                lineNumber: 51,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "register-plan-item-roi",
                                                style: {
                                                    color: plan.color
                                                },
                                                children: [
                                                    plan.roi,
                                                    "% ROI"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/register/page.js",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, plan.id, true, {
                                        fileName: "[project]/app/register/page.js",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/register/page.js",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            selectedPlan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 20,
                                    padding: "14px 16px",
                                    background: "rgba(0,212,170,0.05)",
                                    border: "1px solid rgba(0,212,170,0.15)",
                                    borderRadius: "var(--radius)",
                                    fontSize: 13
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: "var(--text-dim)",
                                            marginBottom: 4
                                        },
                                        children: [
                                            "Selected: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                style: {
                                                    color: "var(--text)"
                                                },
                                                children: selectedPlan.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/register/page.js",
                                                lineNumber: 61,
                                                columnNumber: 79
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/register/page.js",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: "var(--teal)",
                                            fontWeight: 600
                                        },
                                        children: [
                                            selectedPlan.roi,
                                            "% Monthly ROI"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/register/page.js",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/register/page.js",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/register/page.js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 12,
                            color: "var(--text-muted)",
                            position: "relative",
                            zIndex: 1
                        },
                        children: "🔒 256-bit SSL Encrypted"
                    }, void 0, false, {
                        fileName: "[project]/app/register/page.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/register/page.js",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "register-right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "register-right-title",
                        children: "Create Your Account"
                    }, void 0, false, {
                        fileName: "[project]/app/register/page.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "register-right-sub",
                        children: "Join thousands of investors earning consistent crypto returns."
                    }, void 0, false, {
                        fileName: "[project]/app/register/page.js",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "auth-error",
                        style: {
                            marginBottom: 20
                        },
                        children: [
                            "⚠ ",
                            error
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/register/page.js",
                        lineNumber: 73,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "register-form",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "register-form-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "input-label",
                                                children: "First Name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/register/page.js",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "input",
                                                name: "firstName",
                                                placeholder: "John",
                                                value: form.firstName,
                                                onChange: handleChange,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/register/page.js",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/register/page.js",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "input-label",
                                                children: "Last Name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/register/page.js",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "input",
                                                name: "lastName",
                                                placeholder: "Doe",
                                                value: form.lastName,
                                                onChange: handleChange,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/register/page.js",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/register/page.js",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/register/page.js",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "input-label",
                                        children: "Email Address"
                                    }, void 0, false, {
                                        fileName: "[project]/app/register/page.js",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "input",
                                        name: "email",
                                        type: "email",
                                        placeholder: "you@example.com",
                                        value: form.email,
                                        onChange: handleChange,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/register/page.js",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/register/page.js",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "register-form-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "input-label",
                                                children: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/app/register/page.js",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "input",
                                                name: "password",
                                                type: showPw ? "text" : "password",
                                                placeholder: "Min 8 characters",
                                                value: form.password,
                                                onChange: handleChange,
                                                required: true,
                                                minLength: 8
                                            }, void 0, false, {
                                                fileName: "[project]/app/register/page.js",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/register/page.js",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "input-label",
                                                children: "Confirm Password"
                                            }, void 0, false, {
                                                fileName: "[project]/app/register/page.js",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "input",
                                                name: "confirmPassword",
                                                type: showPw ? "text" : "password",
                                                placeholder: "Repeat password",
                                                value: form.confirmPassword,
                                                onChange: handleChange,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/register/page.js",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/register/page.js",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/register/page.js",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "flex-end"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setShowPw(!showPw),
                                    className: "btn btn-ghost btn-sm",
                                    children: [
                                        showPw ? "Hide" : "Show",
                                        " Passwords"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/register/page.js",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/register/page.js",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "input-label",
                                        children: "Investment Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/app/register/page.js",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "plan-selector-grid",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLANS"].map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `plan-selector-item${form.plan === plan.id ? " active" : ""}`,
                                                onClick: ()=>setForm({
                                                        ...form,
                                                        plan: plan.id
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "plan-selector-name",
                                                        children: plan.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/register/page.js",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "plan-selector-roi",
                                                        style: {
                                                            color: plan.color
                                                        },
                                                        children: [
                                                            plan.roi,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/register/page.js",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "plan-selector-price",
                                                        children: [
                                                            "$",
                                                            plan.price >= 1000 ? `${plan.price / 1000}k` : plan.price,
                                                            "/mo"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/register/page.js",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, plan.id, true, {
                                                fileName: "[project]/app/register/page.js",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/register/page.js",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/register/page.js",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "terms-check",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        name: "terms",
                                        checked: form.terms,
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/app/register/page.js",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    "I agree to the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        children: "Terms of Service"
                                    }, void 0, false, {
                                        fileName: "[project]/app/register/page.js",
                                        lineNumber: 116,
                                        columnNumber: 28
                                    }, this),
                                    " and ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/app/register/page.js",
                                        lineNumber: 116,
                                        columnNumber: 65
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/register/page.js",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn btn-primary",
                                disabled: loading,
                                style: {
                                    width: "100%",
                                    padding: 14,
                                    fontSize: 15
                                },
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "spinner spin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/register/page.js",
                                            lineNumber: 119,
                                            columnNumber: 26
                                        }, this),
                                        " Creating Account…"
                                    ]
                                }, void 0, true) : "Create Account & Start Earning →"
                            }, void 0, false, {
                                fileName: "[project]/app/register/page.js",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/register/page.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "auth-footer-text",
                        style: {
                            marginTop: 24
                        },
                        children: [
                            "Already have an account? ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                children: "Log in here"
                            }, void 0, false, {
                                fileName: "[project]/app/register/page.js",
                                lineNumber: 123,
                                columnNumber: 36
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/register/page.js",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/register/page.js",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/register/page.js",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4dbdb8aa._.js.map