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
"[project]/app/admin/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminLayout",
    ()=>AdminLayout,
    "default",
    ()=>AdminDashboard
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
const PLAN_COLORS = {
    starter: "#4A9EFF",
    growth: "#00D4AA",
    pro: "#7B61FF",
    elite: "#FFB800",
    titan: "#FF6B35"
};
const PLAN_TOTAL = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADMIN_STATS"].planDistribution).reduce((a, b)=>a + b, 0);
const ACTIVITY = [
    {
        icon: "💰",
        user: "Marcus Webb",
        meta: "Withdrawal request · $10,000",
        amount: "+$10,000",
        color: "var(--gold)"
    },
    {
        icon: "⬇",
        user: "Linda Diallo",
        meta: "New deposit · Growth Plan",
        amount: "+$1,000",
        color: "var(--teal)"
    },
    {
        icon: "📈",
        user: "Sarah Okafor",
        meta: "Profit credited · Elite Plan",
        amount: "+$7,800",
        color: "var(--teal)"
    },
    {
        icon: "👤",
        user: "New User",
        meta: "Registered · Starter Plan",
        amount: "",
        color: "var(--blue)"
    },
    {
        icon: "⬆",
        user: "James Chen",
        meta: "Withdrawal approved · $400",
        amount: "-$400",
        color: "var(--red)"
    }
];
function AdminLayout({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const handleLogout = async ()=>{
        try {
            await fetch("/api/auth/logout", {
                method: "POST"
            });
        } catch  {}
        document.cookie = "cv_session=; Max-Age=0; path=/";
        router.push("/login");
    };
    const NAV = [
        {
            href: "/admin",
            icon: "📊",
            label: "Dashboard"
        },
        {
            href: "/admin/users",
            icon: "👥",
            label: "Users",
            badge: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADMIN_STATS"].activeUsers
        },
        {
            href: "/admin/transactions",
            icon: "🔄",
            label: "Transactions",
            badge: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADMIN_STATS"].pendingWithdrawals
        },
        {
            href: "/admin/subscriptions",
            icon: "💳",
            label: "Subscriptions",
            badge: null
        },
        {
            href: "/admin/plans",
            icon: "💎",
            label: "Manage Plans"
        },
        {
            href: "/admin/admins",
            icon: "🛡️",
            label: "Admins"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "admin-layout",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "admin-sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "admin-sidebar-logo",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "admin-sidebar-logo-icon",
                                children: "₿"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    background: "linear-gradient(135deg,var(--red),var(--gold))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                },
                                children: "CryptoVault"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "admin-badge",
                        children: "Admin Panel"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "admin-nav-section",
                        children: "Navigation"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    NAV.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: n.href,
                            className: `admin-nav-item${pathname === n.href ? " active" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "nav-icon",
                                    children: n.icon
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.js",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                n.label,
                                n.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "admin-nav-badge",
                                    children: n.badge
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.js",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, n.href, true, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "admin-nav-section",
                        style: {
                            marginTop: 16
                        },
                        children: "System"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "admin-nav-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nav-icon",
                                children: "🌐"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 60,
                                columnNumber: 51
                            }, this),
                            "View Website"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "auto"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "admin-nav-item",
                            onClick: handleLogout,
                            style: {
                                color: "var(--red)",
                                width: "100%",
                                marginTop: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "nav-icon",
                                    children: "🚪"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.js",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                "Log Out"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "admin-main",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/page.js",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function AdminDashboard() {
    const [pendingTxns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "tx-004",
            user: "Marcus Webb",
            plan: "titan",
            amount: 10000,
            method: "USDT",
            date: "2026-02-22"
        },
        {
            id: "tx-009",
            user: "Linda Diallo",
            plan: "growth",
            amount: 1000,
            method: "Bitcoin",
            date: "2026-02-20"
        },
        {
            id: "tx-010",
            user: "Sarah Okafor",
            plan: "elite",
            amount: 5000,
            method: "USDT",
            date: "2026-02-22"
        }
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminLayout, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-topbar fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "admin-topbar-title",
                                children: "Admin Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "admin-topbar-sub",
                                children: [
                                    "Platform overview — ",
                                    new Date().toLocaleDateString("en-US", {
                                        weekday: "long",
                                        month: "long",
                                        day: "numeric"
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin/transactions",
                                className: "btn btn-danger btn-sm",
                                children: [
                                    "⚠ ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADMIN_STATS"].pendingWithdrawals,
                                    " Pending"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin/users",
                                className: "btn btn-primary btn-sm",
                                children: "View All Users"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-stats-grid fade-up",
                children: [
                    {
                        label: "Total Users",
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADMIN_STATS"].totalUsers,
                        sub: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADMIN_STATS"].activeUsers} active`,
                        trend: "▲ +12 this week",
                        type: "up"
                    },
                    {
                        label: "Total Invested",
                        value: `$${(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADMIN_STATS"].totalDeposited / 1000).toFixed(0)}k`,
                        sub: "All deposits",
                        trend: "▲ +$48k this month",
                        type: "up"
                    },
                    {
                        label: "Profits Paid",
                        value: `$${(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADMIN_STATS"].totalProfitPaid / 1000).toFixed(0)}k`,
                        sub: "All time",
                        trend: "▲ +$18k this month",
                        type: "up"
                    },
                    {
                        label: "Pending Withdrawals",
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADMIN_STATS"].pendingWithdrawals,
                        sub: "Awaiting approval",
                        trend: "⚠ Action required",
                        type: "warn"
                    }
                ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "admin-stat-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "admin-stat-label",
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "admin-stat-value",
                                children: s.value
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "admin-stat-sub",
                                children: s.sub
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `admin-stat-trend ${s.type}`,
                                children: s.trend
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-two-col fade-up-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plan-dist-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "plan-dist-title",
                                children: "Plan Distribution"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADMIN_STATS"].planDistribution).map(([planId, count])=>{
                                const plan = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLANS"].find((p)=>p.id === planId);
                                const pct = Math.round(count / PLAN_TOTAL * 100);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plan-dist-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plan-dist-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 500
                                                    },
                                                    children: plan?.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.js",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "var(--text-dim)"
                                                    },
                                                    children: [
                                                        count,
                                                        " users ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: PLAN_COLORS[planId]
                                                            },
                                                            children: [
                                                                "(",
                                                                pct,
                                                                "%)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/page.js",
                                                            lineNumber: 125,
                                                            columnNumber: 73
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/page.js",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/page.js",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "plan-dist-bar-bg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "plan-dist-bar",
                                                style: {
                                                    width: `${pct}%`,
                                                    background: PLAN_COLORS[planId]
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.js",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.js",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, planId, true, {
                                    fileName: "[project]/app/admin/page.js",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 20,
                                    padding: 14,
                                    background: "var(--surface-2)",
                                    borderRadius: "var(--radius)",
                                    fontSize: 13,
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "var(--text-dim)"
                                        },
                                        children: "Monthly Revenue"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.js",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "var(--teal)",
                                            fontWeight: 700
                                        },
                                        children: [
                                            "$",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADMIN_STATS"].monthlyRevenue.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.js",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "activity-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "activity-title",
                                children: "Recent Activity"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            ACTIVITY.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "activity-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "activity-icon",
                                            children: a.icon
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.js",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "activity-user",
                                                    children: a.user
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.js",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "activity-meta",
                                                    children: a.meta
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.js",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/page.js",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        a.amount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "activity-amount",
                                            style: {
                                                color: a.color
                                            },
                                            children: a.amount
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.js",
                                            lineNumber: 147,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/admin/page.js",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pending-card fade-up-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pending-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pending-title",
                                children: "⚠ Pending Withdrawals"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin/transactions",
                                className: "btn btn-sm btn-outline",
                                children: "View All →"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "table",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        "User",
                                        "Plan",
                                        "Amount",
                                        "Method",
                                        "Date",
                                        "Action"
                                    ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: h
                                        }, h, false, {
                                            fileName: "[project]/app/admin/page.js",
                                            lineNumber: 160,
                                            columnNumber: 80
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.js",
                                    lineNumber: 160,
                                    columnNumber: 18
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: pendingTxns.map((tx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    fontWeight: 500
                                                },
                                                children: tx.user
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.js",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        textTransform: "capitalize",
                                                        color: PLAN_COLORS[tx.plan],
                                                        fontWeight: 600
                                                    },
                                                    children: tx.plan
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.js",
                                                    lineNumber: 165,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.js",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    fontWeight: 700,
                                                    color: "var(--red)"
                                                },
                                                children: [
                                                    "-$",
                                                    tx.amount.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.js",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    color: "var(--text-dim)"
                                                },
                                                children: tx.method
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.js",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    color: "var(--text-dim)",
                                                    fontSize: 12
                                                },
                                                children: tx.date
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.js",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: 6
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "approve-btn",
                                                            children: "✓ Approve"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.js",
                                                            lineNumber: 171,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "reject-btn",
                                                            children: "✗ Reject"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.js",
                                                            lineNumber: 172,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/page.js",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.js",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, tx.id, true, {
                                        fileName: "[project]/app/admin/page.js",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.js",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/page.js",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/admin/users/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/page.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const PLAN_COLORS = {
    starter: "#4A9EFF",
    growth: "#00D4AA",
    pro: "#7B61FF",
    elite: "#FFB800",
    titan: "#FF6B35"
};
function AdminUsers() {
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Balance adjustment state
    const [balModal, setBalModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // user object
    const [balType, setBalType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("add"); // "add" | "subtract"
    const [balField, setBalField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("balance"); // "balance" | "invested" | "profit"
    const [balAmount, setBalAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [balRemark, setBalRemark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [balLoading, setBalLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("/api/users").then((r)=>r.json()).then((d)=>{
            setUsers(d.users || []);
            setLoading(false);
        }).catch(()=>setLoading(false));
    }, []);
    const showToast = (msg)=>{
        setToast(msg);
        setTimeout(()=>setToast(""), 3500);
    };
    const filtered = users.filter((u)=>{
        const matchSearch = u.name?.toLowerCase().includes(search.toLowerCase()) || u.email?.toLowerCase().includes(search.toLowerCase());
        const matchFilter = filter === "all" || u.status === filter || u.plan === filter;
        return matchSearch && matchFilter;
    });
    const handleStatus = async (userId, status)=>{
        await fetch("/api/users", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId,
                status
            })
        });
        setUsers((prev)=>prev.map((u)=>u.id === userId ? {
                    ...u,
                    status
                } : u));
        if (selected?.id === userId) setSelected((prev)=>({
                ...prev,
                status
            }));
    };
    const handleDelete = async (userId)=>{
        if (!confirm("Delete this user permanently?")) return;
        await fetch(`/api/users?id=${userId}`, {
            method: "DELETE"
        });
        setUsers((prev)=>prev.filter((u)=>u.id !== userId));
        setSelected(null);
    };
    const handleBalanceSubmit = async (e)=>{
        e.preventDefault();
        const amount = parseFloat(balAmount);
        if (!amount || amount <= 0) return;
        setBalLoading(true);
        const user = balModal;
        const current = parseFloat(user[balField]) || 0;
        const updated = balType === "add" ? current + amount : Math.max(0, current - amount);
        const res = await fetch("/api/users", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: user.id,
                [balField]: updated
            })
        });
        if (res.ok) {
            setUsers((prev)=>prev.map((u)=>u.id === user.id ? {
                        ...u,
                        [balField]: updated
                    } : u));
            if (selected?.id === user.id) setSelected((prev)=>({
                    ...prev,
                    [balField]: updated
                }));
            showToast(`✅ ${balType === "add" ? "Added" : "Subtracted"} $${amount.toLocaleString()} ${balType === "add" ? "to" : "from"} ${user.name}'s ${balField}.${balRemark ? ` Remark: "${balRemark}"` : ""}`);
            setBalModal(null);
            setBalAmount("");
            setBalRemark("");
        } else {
            showToast("❌ Failed to update balance.");
        }
        setBalLoading(false);
    };
    const initials = (name)=>name ? name.split(" ").map((n)=>n[0]).join("").toUpperCase().slice(0, 2) : "U";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminLayout"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-topbar fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "admin-topbar-title",
                            children: "User Management"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/users/page.js",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "admin-topbar-sub",
                            children: [
                                users.length,
                                " total users registered"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/users/page.js",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/users/page.js",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "users-filters fade-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "search-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "search-icon",
                                children: "🔍"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "input search-input",
                                placeholder: "Search by name or email…",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/users/page.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    [
                        "all",
                        "active",
                        "suspended",
                        "starter",
                        "growth",
                        "pro",
                        "elite",
                        "titan"
                    ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `filter-btn${filter === f ? " active" : ""}`,
                            onClick: ()=>setFilter(f),
                            style: {
                                textTransform: "capitalize"
                            },
                            children: f
                        }, f, false, {
                            fileName: "[project]/app/admin/users/page.js",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "users-table-card fade-up-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "users-table-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "users-table-title",
                                children: "All Users"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "users-count",
                                children: [
                                    filtered.length,
                                    " results"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/users/page.js",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: 40,
                            textAlign: "center",
                            color: "var(--text-dim)"
                        },
                        children: "Loading users…"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/users/page.js",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "table",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        "User",
                                        "Plan",
                                        "Balance",
                                        "Invested",
                                        "Status",
                                        "Joined",
                                        "Actions"
                                    ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: h
                                        }, h, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 111,
                                            columnNumber: 97
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 111,
                                    columnNumber: 20
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: [
                                    filtered.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 10
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "user-avatar",
                                                                children: initials(u.name)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 117,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "user-name",
                                                                        children: u.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/users/page.js",
                                                                        lineNumber: 119,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "user-email",
                                                                        children: u.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/users/page.js",
                                                                        lineNumber: 120,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 118,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "plan-chip",
                                                        style: {
                                                            color: PLAN_COLORS[u.plan] || "var(--text-dim)",
                                                            borderColor: PLAN_COLORS[u.plan] || "var(--border)"
                                                        },
                                                        children: u.plan
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 124,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        fontWeight: 600,
                                                        color: "var(--teal)"
                                                    },
                                                    children: [
                                                        "$",
                                                        (u.balance || 0).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        color: "var(--text-dim)"
                                                    },
                                                    children: [
                                                        "$",
                                                        (u.invested || 0).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `badge badge-${u.status}`,
                                                        children: u.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 127,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        color: "var(--text-dim)",
                                                        fontSize: 12
                                                    },
                                                    children: u.createdAt?.split("T")[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "actions-cell",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "icon-btn",
                                                                title: "View",
                                                                onClick: ()=>setSelected(u),
                                                                children: "👁"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 131,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "icon-btn",
                                                                title: "Adjust Balance",
                                                                onClick: ()=>{
                                                                    setBalModal(u);
                                                                    setBalType("add");
                                                                    setBalField("balance");
                                                                    setBalAmount("");
                                                                    setBalRemark("");
                                                                },
                                                                style: {
                                                                    color: "var(--teal)"
                                                                },
                                                                children: "💰"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 132,
                                                                columnNumber: 23
                                                            }, this),
                                                            u.status === "active" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "icon-btn",
                                                                title: "Suspend",
                                                                onClick: ()=>handleStatus(u.id, "suspended"),
                                                                children: "🚫"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 134,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "icon-btn",
                                                                title: "Activate",
                                                                onClick: ()=>handleStatus(u.id, "active"),
                                                                children: "✅"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 135,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "icon-btn danger",
                                                                title: "Delete",
                                                                onClick: ()=>handleDelete(u.id),
                                                                children: "🗑"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 137,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, u.id, true, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this)),
                                    filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 7,
                                            style: {
                                                textAlign: "center",
                                                padding: 40,
                                                color: "var(--text-dim)"
                                            },
                                            children: "No users match your search."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 143,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/users/page.js",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            balModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                onClick: ()=>setBalModal(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "user-modal",
                    onClick: (e)=>e.stopPropagation(),
                    style: {
                        maxWidth: 460
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "user-modal-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "user-modal-avatar",
                                            children: initials(balModal.name)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "user-modal-name",
                                            children: balModal.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "user-modal-email",
                                            children: balModal.email
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setBalModal(null),
                                    style: {
                                        background: "none",
                                        border: "none",
                                        color: "var(--text-dim)",
                                        fontSize: 20,
                                        cursor: "pointer"
                                    },
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/users/page.js",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "user-modal-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        gap: 10,
                                        marginBottom: 20
                                    },
                                    children: [
                                        {
                                            label: "Balance",
                                            key: "balance",
                                            color: "var(--teal)"
                                        },
                                        {
                                            label: "Invested",
                                            key: "invested",
                                            color: "var(--blue)"
                                        },
                                        {
                                            label: "Profit",
                                            key: "profit",
                                            color: "var(--gold)"
                                        }
                                    ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "var(--surface-2)",
                                                border: `1px solid ${balField === f.key ? "var(--teal)" : "var(--border)"}`,
                                                borderRadius: "var(--radius)",
                                                padding: "12px",
                                                textAlign: "center",
                                                cursor: "pointer",
                                                transition: "var(--transition)"
                                            },
                                            onClick: ()=>setBalField(f.key),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 10,
                                                        color: "var(--text-muted)",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.8px",
                                                        marginBottom: 4
                                                    },
                                                    children: f.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: 700,
                                                        color: f.color,
                                                        fontSize: 15
                                                    },
                                                    children: [
                                                        "$",
                                                        (balModal[f.key] || 0).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 173,
                                                    columnNumber: 21
                                                }, this),
                                                balField === f.key && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 9,
                                                        color: "var(--teal)",
                                                        marginTop: 4
                                                    },
                                                    children: "● Selected"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 174,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, f.key, true, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleBalanceSubmit,
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 14
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "input-label",
                                                    style: {
                                                        marginBottom: 8
                                                    },
                                                    children: "Action"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "grid",
                                                        gridTemplateColumns: "1fr 1fr",
                                                        gap: 8
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setBalType("add"),
                                                            style: {
                                                                padding: "10px",
                                                                borderRadius: "var(--radius)",
                                                                border: `1px solid ${balType === "add" ? "var(--teal)" : "var(--border)"}`,
                                                                background: balType === "add" ? "rgba(0,212,170,0.1)" : "var(--surface-2)",
                                                                color: balType === "add" ? "var(--teal)" : "var(--text-dim)",
                                                                fontWeight: 600,
                                                                cursor: "pointer",
                                                                fontSize: 14,
                                                                transition: "var(--transition)"
                                                            },
                                                            children: "➕ Add Funds"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 185,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setBalType("subtract"),
                                                            style: {
                                                                padding: "10px",
                                                                borderRadius: "var(--radius)",
                                                                border: `1px solid ${balType === "subtract" ? "var(--red)" : "var(--border)"}`,
                                                                background: balType === "subtract" ? "rgba(255,77,106,0.1)" : "var(--surface-2)",
                                                                color: balType === "subtract" ? "var(--red)" : "var(--text-dim)",
                                                                fontWeight: 600,
                                                                cursor: "pointer",
                                                                fontSize: 14,
                                                                transition: "var(--transition)"
                                                            },
                                                            children: "➖ Subtract Funds"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 184,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "input-label",
                                                    children: [
                                                        "Amount (USD) — adjusting ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            style: {
                                                                color: "var(--teal)",
                                                                textTransform: "capitalize"
                                                            },
                                                            children: balField
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 201,
                                                            columnNumber: 46
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "input",
                                                    type: "number",
                                                    min: "1",
                                                    step: "0.01",
                                                    placeholder: "Enter amount e.g. 500",
                                                    value: balAmount,
                                                    onChange: (e)=>setBalAmount(e.target.value),
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this),
                                                balAmount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 12,
                                                        marginTop: 6,
                                                        color: balType === "add" ? "var(--teal)" : "var(--red)"
                                                    },
                                                    children: [
                                                        "New ",
                                                        balField,
                                                        ": ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                "$",
                                                                Math.max(0, (parseFloat(balModal[balField]) || 0) + (balType === "add" ? 1 : -1) * parseFloat(balAmount || 0)).toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/users/page.js",
                                                            lineNumber: 215,
                                                            columnNumber: 39
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 214,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "input-label",
                                                    children: "Remark / Reason"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "input",
                                                    placeholder: "e.g. Monthly profit credit, Bonus, Correction…",
                                                    value: balRemark,
                                                    onChange: (e)=>setBalRemark(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 223,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: 10
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "btn btn-ghost",
                                                    style: {
                                                        flex: 1
                                                    },
                                                    onClick: ()=>setBalModal(null),
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "btn",
                                                    disabled: balLoading,
                                                    style: {
                                                        flex: 2,
                                                        background: balType === "add" ? "var(--teal)" : "var(--red)",
                                                        color: balType === "add" ? "#050B18" : "#fff",
                                                        border: "none"
                                                    },
                                                    children: balLoading ? "Updating…" : balType === "add" ? `➕ Add $${balAmount || "0"}` : `➖ Subtract $${balAmount || "0"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/users/page.js",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/users/page.js",
                    lineNumber: 153,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 152,
                columnNumber: 9
            }, this),
            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                onClick: ()=>setSelected(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "user-modal",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "user-modal-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "user-modal-avatar",
                                            children: initials(selected.name)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "user-modal-name",
                                            children: selected.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "user-modal-email",
                                            children: selected.email
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelected(null),
                                    style: {
                                        background: "none",
                                        border: "none",
                                        color: "var(--text-dim)",
                                        fontSize: 20,
                                        cursor: "pointer"
                                    },
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/users/page.js",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "user-modal-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "user-info-grid",
                                    children: [
                                        {
                                            label: "Plan",
                                            value: selected.plan
                                        },
                                        {
                                            label: "Status",
                                            value: selected.status
                                        },
                                        {
                                            label: "Balance",
                                            value: `$${(selected.balance || 0).toLocaleString()}`
                                        },
                                        {
                                            label: "Invested",
                                            value: `$${(selected.invested || 0).toLocaleString()}`
                                        },
                                        {
                                            label: "Total Profit",
                                            value: `$${(selected.profit || 0).toLocaleString()}`
                                        },
                                        {
                                            label: "User ID",
                                            value: selected.id
                                        },
                                        {
                                            label: "Joined",
                                            value: selected.createdAt?.split("T")[0]
                                        },
                                        {
                                            label: "Last Active",
                                            value: selected.lastActive?.split("T")[0]
                                        }
                                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "user-info-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "user-info-label",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 273,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "user-info-value",
                                                    style: {
                                                        textTransform: "capitalize"
                                                    },
                                                    children: item.value
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 274,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 272,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "user-modal-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-outline",
                                            onClick: ()=>{
                                                setSelected(null);
                                                setBalModal(selected);
                                                setBalType("add");
                                                setBalField("balance");
                                                setBalAmount("");
                                                setBalRemark("");
                                            },
                                            children: "💰 Adjust Balance"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 279,
                                            columnNumber: 17
                                        }, this),
                                        selected.status === "active" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-danger",
                                            onClick: ()=>handleStatus(selected.id, "suspended"),
                                            children: "🚫 Suspend"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 281,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-outline",
                                            onClick: ()=>handleStatus(selected.id, "active"),
                                            children: "✅ Activate"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 282,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-danger",
                                            onClick: ()=>handleDelete(selected.id),
                                            children: "🗑 Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/users/page.js",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/users/page.js",
                    lineNumber: 251,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 250,
                columnNumber: 9
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-toast",
                children: toast
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 291,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/users/page.js",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8db9f1f8._.js.map