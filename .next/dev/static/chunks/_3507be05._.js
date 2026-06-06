(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminLayout",
    ()=>AdminLayout,
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
const PLAN_TOTAL = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_STATS"].planDistribution).reduce(_c = (a, b)=>a + b, 0);
_c1 = PLAN_TOTAL;
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
function AdminLayout(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "fd19235dcd752047e60d15f5620a7393038edc94c4cd8c4a89a732de832bb0e4") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fd19235dcd752047e60d15f5620a7393038edc94c4cd8c4a89a732de832bb0e4";
    }
    const { children } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t1;
    if ($[1] !== router) {
        t1 = ({
            "AdminLayout[handleLogout]": async ()=>{
                try {
                    await fetch("/api/auth/logout", {
                        method: "POST"
                    });
                } catch  {}
                document.cookie = "cv_session=; Max-Age=0; path=/";
                router.push("/login");
            }
        })["AdminLayout[handleLogout]"];
        $[1] = router;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleLogout = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            {
                href: "/admin",
                icon: "\uD83D\uDCCA",
                label: "Dashboard"
            },
            {
                href: "/admin/users",
                icon: "\uD83D\uDC65",
                label: "Users",
                badge: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_STATS"].activeUsers
            },
            {
                href: "/admin/transactions",
                icon: "\uD83D\uDD04",
                label: "Transactions",
                badge: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_STATS"].pendingWithdrawals
            },
            {
                href: "/admin/subscriptions",
                icon: "\uD83D\uDCB3",
                label: "Subscriptions",
                badge: null
            },
            {
                href: "/admin/plans",
                icon: "\uD83D\uDC8E",
                label: "Manage Plans"
            },
            {
                href: "/admin/admins",
                icon: "\uD83D\uDEE1\uFE0F",
                label: "Admins"
            }
        ];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const NAV = t2;
    let t3;
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-sidebar-logo",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "admin-sidebar-logo-icon",
                    children: "₿"
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 121,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        background: "linear-gradient(135deg,var(--red),var(--gold))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    },
                    children: "CryptoVault"
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 121,
                    columnNumber: 94
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-badge",
            children: "Admin Panel"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-nav-section",
            children: "Navigation"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] !== pathname) {
        t6 = NAV.map({
            "AdminLayout[NAV.map()]": (n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: n.href,
                    className: `admin-nav-item${pathname === n.href ? " active" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "nav-icon",
                            children: n.icon
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 139,
                            columnNumber: 139
                        }, this),
                        n.label,
                        n.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "admin-nav-badge",
                            children: n.badge
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 139,
                            columnNumber: 202
                        }, this)
                    ]
                }, n.href, true, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 139,
                    columnNumber: 38
                }, this)
        }["AdminLayout[NAV.map()]"]);
        $[7] = pathname;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-nav-section",
            style: {
                marginTop: 16
            },
            children: "System"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 148,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "admin-nav-item",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "nav-icon",
                    children: "🌐"
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 158,
                    columnNumber: 52
                }, this),
                "View Website"
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        t9 = {
            marginTop: "auto"
        };
        $[10] = t8;
        $[11] = t9;
    } else {
        t8 = $[10];
        t9 = $[11];
    }
    let t10;
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            color: "var(--red)",
            width: "100%",
            marginTop: 8
        };
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "nav-icon",
            children: "🚪"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[12] = t10;
        $[13] = t11;
    } else {
        t10 = $[12];
        t11 = $[13];
    }
    let t12;
    if ($[14] !== handleLogout) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t9,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "admin-nav-item",
                onClick: handleLogout,
                style: t10,
                children: [
                    t11,
                    "Log Out"
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 185,
                columnNumber: 27
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[14] = handleLogout;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] !== t12 || $[17] !== t6) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "admin-sidebar",
            children: [
                t3,
                t4,
                t5,
                t6,
                t7,
                t8,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[16] = t12;
        $[17] = t6;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== children) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "admin-main",
            children: children
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[19] = children;
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== t13 || $[22] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-layout",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[21] = t13;
        $[22] = t14;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    return t15;
}
_s(AdminLayout, "gA9e4WsoP6a20xDgQgrFkfMP8lc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c2 = AdminLayout;
function AdminDashboard() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "fd19235dcd752047e60d15f5620a7393038edc94c4cd8c4a89a732de832bb0e4") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fd19235dcd752047e60d15f5620a7393038edc94c4cd8c4a89a732de832bb0e4";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
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
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [pendingTxns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-topbar-title",
            children: "Admin Dashboard"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 260,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-topbar fade-in",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t1,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            lineNumber: 267,
                            columnNumber: 57
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 267,
                    columnNumber: 48
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 10
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin/transactions",
                            className: "btn btn-danger btn-sm",
                            children: [
                                "⚠ ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_STATS"].pendingWithdrawals,
                                " Pending"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 274,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin/users",
                            className: "btn btn-primary btn-sm",
                            children: "View All Users"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 274,
                            columnNumber: 126
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 271,
                    columnNumber: 26
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 267,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            label: "Total Users",
            value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_STATS"].totalUsers,
            sub: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_STATS"].activeUsers} active`,
            trend: "\u25B2 +12 this week",
            type: "up"
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            label: "Total Invested",
            value: `$${(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_STATS"].totalDeposited / 1000).toFixed(0)}k`,
            sub: "All deposits",
            trend: "\u25B2 +$48k this month",
            type: "up"
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-stats-grid fade-up",
            children: [
                t3,
                t4,
                {
                    label: "Profits Paid",
                    value: `$${(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_STATS"].totalProfitPaid / 1000).toFixed(0)}k`,
                    sub: "All time",
                    trend: "\u25B2 +$18k this month",
                    type: "up"
                },
                {
                    label: "Pending Withdrawals",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_STATS"].pendingWithdrawals,
                    sub: "Awaiting approval",
                    trend: "\u26A0 Action required",
                    type: "warn"
                }
            ].map(_AdminDashboardAnonymous)
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 307,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t10;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "plan-dist-title",
            children: "Plan Distribution"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 330,
            columnNumber: 10
        }, this);
        t7 = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_STATS"].planDistribution).map(_AdminDashboardAnonymous2);
        t8 = {
            marginTop: 20,
            padding: 14,
            background: "var(--surface-2)",
            borderRadius: "var(--radius)",
            fontSize: 13,
            display: "flex",
            justifyContent: "space-between"
        };
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                color: "var(--text-dim)"
            },
            children: "Monthly Revenue"
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 341,
            columnNumber: 10
        }, this);
        t10 = {
            color: "var(--teal)",
            fontWeight: 700
        };
        $[7] = t10;
        $[8] = t6;
        $[9] = t7;
        $[10] = t8;
        $[11] = t9;
    } else {
        t10 = $[7];
        t6 = $[8];
        t7 = $[9];
        t8 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "plan-dist-card",
            children: [
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t8,
                    children: [
                        t9,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: t10,
                            children: [
                                "$",
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_STATS"].monthlyRevenue.toLocaleString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 362,
                            columnNumber: 71
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 362,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-two-col fade-up-2",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "activity-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "activity-title",
                            children: "Recent Activity"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 369,
                            columnNumber: 88
                        }, this),
                        ACTIVITY.map(_AdminDashboardACTIVITYMap)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 369,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 369,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pending-header",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pending-title",
                    children: "⚠ Pending Withdrawals"
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 376,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/admin/transactions",
                    className: "btn btn-sm btn-outline",
                    children: "View All →"
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 376,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 376,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    "User",
                    "Plan",
                    "Amount",
                    "Method",
                    "Date",
                    "Action"
                ].map(_AdminDashboardAnonymous3)
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 383,
                columnNumber: 18
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] !== pendingTxns) {
        t15 = pendingTxns.map(_AdminDashboardPendingTxnsMap);
        $[16] = pendingTxns;
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    let t16;
    if ($[18] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminLayout, {
            children: [
                t2,
                t5,
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pending-card fade-up-3",
                    children: [
                        t13,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "table",
                            children: [
                                t14,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: t15
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.js",
                                    lineNumber: 398,
                                    columnNumber: 112
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 398,
                            columnNumber: 82
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 398,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.js",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[18] = t15;
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    return t16;
}
_s1(AdminDashboard, "63zgcauovUFhadhXiNHgYp7ujes=");
_c3 = AdminDashboard;
function _AdminDashboardPendingTxnsMap(tx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                style: {
                    fontWeight: 500
                },
                children: tx.user
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 407,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        textTransform: "capitalize",
                        color: PLAN_COLORS[tx.plan],
                        fontWeight: 600
                    },
                    children: tx.plan
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 409,
                    columnNumber: 26
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 409,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                lineNumber: 413,
                columnNumber: 31
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                style: {
                    color: "var(--text-dim)"
                },
                children: tx.method
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 416,
                columnNumber: 43
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                style: {
                    color: "var(--text-dim)",
                    fontSize: 12
                },
                children: tx.date
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 418,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 6
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "approve-btn",
                            children: "✓ Approve"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 424,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "reject-btn",
                            children: "✗ Reject"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 424,
                            columnNumber: 60
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 421,
                    columnNumber: 26
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 421,
                columnNumber: 22
            }, this)
        ]
    }, tx.id, true, {
        fileName: "[project]/app/admin/page.js",
        lineNumber: 407,
        columnNumber: 10
    }, this);
}
function _AdminDashboardAnonymous3(h) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        children: h
    }, h, false, {
        fileName: "[project]/app/admin/page.js",
        lineNumber: 427,
        columnNumber: 10
    }, this);
}
function _AdminDashboardACTIVITYMap(a, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "activity-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "activity-icon",
                children: a.icon
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 430,
                columnNumber: 51
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "activity-user",
                        children: a.user
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 432,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "activity-meta",
                        children: a.meta
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 432,
                        columnNumber: 53
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 430,
                columnNumber: 96
            }, this),
            a.amount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "activity-amount",
                style: {
                    color: a.color
                },
                children: a.amount
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 432,
                columnNumber: 117
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/app/admin/page.js",
        lineNumber: 430,
        columnNumber: 10
    }, this);
}
function _AdminDashboardAnonymous2(t0) {
    const [planId, count] = t0;
    const plan = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLANS"].find({
        "AdminDashboard[(anonymous)() > PLANS.find()]": (p)=>p.id === planId
    }["AdminDashboard[(anonymous)() > PLANS.find()]"]);
    const pct = Math.round(count / PLAN_TOTAL * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plan-dist-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plan-dist-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontWeight: 500
                        },
                        children: plan?.name
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 442,
                        columnNumber: 86
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-dim)"
                        },
                        children: [
                            count,
                            " users ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 446,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 444,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 442,
                columnNumber: 55
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plan-dist-bar-bg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "plan-dist-bar",
                    style: {
                        width: `${pct}%`,
                        background: PLAN_COLORS[planId]
                    }
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.js",
                    lineNumber: 448,
                    columnNumber: 74
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 448,
                columnNumber: 40
            }, this)
        ]
    }, planId, true, {
        fileName: "[project]/app/admin/page.js",
        lineNumber: 442,
        columnNumber: 10
    }, this);
}
function _AdminDashboardAnonymous(s, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "admin-stat-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-stat-label",
                children: s.label
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 454,
                columnNumber: 51
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-stat-value",
                children: s.value
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 454,
                columnNumber: 100
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-stat-sub",
                children: s.sub
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 454,
                columnNumber: 149
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `admin-stat-trend ${s.type}`,
                children: s.trend
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 454,
                columnNumber: 194
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/app/admin/page.js",
        lineNumber: 454,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "PLAN_TOTAL$Object.values(ADMIN_STATS.planDistribution).reduce");
__turbopack_context__.k.register(_c1, "PLAN_TOTAL");
__turbopack_context__.k.register(_c2, "AdminLayout");
__turbopack_context__.k.register(_c3, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/plans/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPlans
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/page.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
// ── Wallet config stored in localStorage as fallback ─────────
const DEFAULT_WALLETS = {
    "USDT (TRC20)": {
        address: "TYourTRC20WalletAddressHere",
        network: "TRON Network (TRC20)",
        symbol: "USDT"
    },
    "USDT (ERC20)": {
        address: "0xYourERC20WalletAddressHere",
        network: "Ethereum Network (ERC20)",
        symbol: "USDT"
    },
    "Bitcoin (BTC)": {
        address: "bc1YourBitcoinWalletAddressHere",
        network: "Bitcoin Network",
        symbol: "BTC"
    },
    "Ethereum (ETH)": {
        address: "0xYourEthereumWalletAddressHere",
        network: "Ethereum Network (ETH)",
        symbol: "ETH"
    }
};
function loadWallets() {
    try {
        return JSON.parse(localStorage.getItem("cv_wallets")) || DEFAULT_WALLETS;
    } catch  {
        return DEFAULT_WALLETS;
    }
}
function saveWallets(w) {
    try {
        localStorage.setItem("cv_wallets", JSON.stringify(w));
    } catch  {}
}
function AdminPlans() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(73);
    if ($[0] !== "3d3dcf244883c61f351202c5565080fedda8ea17292b580790e591825459f899") {
        for(let $i = 0; $i < 73; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3d3dcf244883c61f351202c5565080fedda8ea17292b580790e591825459f899";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [plans, setPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("plans");
    const [wallets, setWallets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_WALLETS);
    const [editWallet, setEditWallet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            key: "",
            address: "",
            network: "",
            symbol: ""
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [walletForm, setWalletForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [walletSaving, setWalletSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "AdminPlans[showToast]": (msg)=>{
                setToast(msg);
                setTimeout({
                    "AdminPlans[showToast > setTimeout()]": ()=>setToast("")
                }["AdminPlans[showToast > setTimeout()]"], 3000);
            }
        })["AdminPlans[showToast]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const showToast = t2;
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "AdminPlans[useEffect()]": ()=>{
                fetch("/api/plans").then(_AdminPlansUseEffectAnonymous).then({
                    "AdminPlans[useEffect() > (anonymous)()]": (d)=>{
                        setPlans(d.plans || []);
                        setLoading(false);
                    }
                }["AdminPlans[useEffect() > (anonymous)()]"]).catch({
                    "AdminPlans[useEffect() > (anonymous)()]": ()=>setLoading(false)
                }["AdminPlans[useEffect() > (anonymous)()]"]);
                setWallets(loadWallets());
            }
        })["AdminPlans[useEffect()]"];
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] !== editing) {
        t5 = ({
            "AdminPlans[handleSave]": async (e)=>{
                e.preventDefault();
                try {
                    const res = await fetch("/api/plans", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(editing)
                    });
                    if (res.ok) {
                        setPlans({
                            "AdminPlans[handleSave > setPlans()]": (prev)=>prev.map({
                                    "AdminPlans[handleSave > setPlans() > prev.map()]": (p)=>p.id === editing.id ? {
                                            ...editing
                                        } : p
                                }["AdminPlans[handleSave > setPlans() > prev.map()]"])
                        }["AdminPlans[handleSave > setPlans()]"]);
                        setSaved(true);
                        setTimeout({
                            "AdminPlans[handleSave > setTimeout()]": ()=>{
                                setEditing(null);
                                setSaved(false);
                            }
                        }["AdminPlans[handleSave > setTimeout()]"], 1400);
                    } else {
                        showToast("\u274C Failed to save plan.");
                    }
                } catch  {
                    showToast("\u274C Network error.");
                }
            }
        })["AdminPlans[handleSave]"];
        $[6] = editing;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const handleSave = t5;
    let t6;
    if ($[8] !== editing) {
        t6 = ({
            "AdminPlans[updateFeature]": (idx, val)=>{
                const updated = [
                    ...editing.features || []
                ];
                updated[idx] = val;
                setEditing({
                    ...editing,
                    features: updated
                });
            }
        })["AdminPlans[updateFeature]"];
        $[8] = editing;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const updateFeature = t6;
    let t7;
    if ($[10] !== editing) {
        t7 = ({
            "AdminPlans[addFeature]": ()=>setEditing({
                    ...editing,
                    features: [
                        ...editing.features || [],
                        ""
                    ]
                })
        })["AdminPlans[addFeature]"];
        $[10] = editing;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const addFeature = t7;
    let t8;
    if ($[12] !== editing) {
        t8 = ({
            "AdminPlans[removeFeature]": (idx_0)=>setEditing({
                    ...editing,
                    features: (editing.features || []).filter({
                        "AdminPlans[removeFeature > (anonymous)()]": (_, i)=>i !== idx_0
                    }["AdminPlans[removeFeature > (anonymous)()]"])
                })
        })["AdminPlans[removeFeature]"];
        $[12] = editing;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const removeFeature = t8;
    let t9;
    if ($[14] !== editing) {
        t9 = ({
            "AdminPlans[updateNotIncluded]": (idx_1, val_0)=>{
                const updated_0 = [
                    ...editing.notIncluded || []
                ];
                updated_0[idx_1] = val_0;
                setEditing({
                    ...editing,
                    notIncluded: updated_0
                });
            }
        })["AdminPlans[updateNotIncluded]"];
        $[14] = editing;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    const updateNotIncluded = t9;
    let t10;
    if ($[16] !== editing) {
        t10 = ({
            "AdminPlans[addNotIncluded]": ()=>setEditing({
                    ...editing,
                    notIncluded: [
                        ...editing.notIncluded || [],
                        ""
                    ]
                })
        })["AdminPlans[addNotIncluded]"];
        $[16] = editing;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    const addNotIncluded = t10;
    let t11;
    if ($[18] !== editing) {
        t11 = ({
            "AdminPlans[removeNotIncluded]": (idx_2)=>setEditing({
                    ...editing,
                    notIncluded: (editing.notIncluded || []).filter({
                        "AdminPlans[removeNotIncluded > (anonymous)()]": (__0, i_0)=>i_0 !== idx_2
                    }["AdminPlans[removeNotIncluded > (anonymous)()]"])
                })
        })["AdminPlans[removeNotIncluded]"];
        $[18] = editing;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    const removeNotIncluded = t11;
    let t12;
    if ($[20] !== wallets) {
        t12 = ({
            "AdminPlans[openEditWallet]": (key)=>{
                setEditWallet(key);
                setWalletForm({
                    key,
                    ...wallets[key]
                });
            }
        })["AdminPlans[openEditWallet]"];
        $[20] = wallets;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    const openEditWallet = t12;
    let t13;
    if ($[22] !== editWallet || $[23] !== walletForm.address || $[24] !== walletForm.network || $[25] !== walletForm.symbol || $[26] !== wallets) {
        t13 = ({
            "AdminPlans[handleWalletSave]": (e_0)=>{
                e_0.preventDefault();
                setWalletSaving(true);
                const updated_1 = {
                    ...wallets,
                    [editWallet]: {
                        address: walletForm.address,
                        network: walletForm.network,
                        symbol: walletForm.symbol
                    }
                };
                setWallets(updated_1);
                saveWallets(updated_1);
                setTimeout({
                    "AdminPlans[handleWalletSave > setTimeout()]": ()=>{
                        setWalletSaving(false);
                        setEditWallet(null);
                        showToast("\u2705 Wallet address updated!");
                    }
                }["AdminPlans[handleWalletSave > setTimeout()]"], 600);
            }
        })["AdminPlans[handleWalletSave]"];
        $[22] = editWallet;
        $[23] = walletForm.address;
        $[24] = walletForm.network;
        $[25] = walletForm.symbol;
        $[26] = wallets;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    const handleWalletSave = t13;
    let t14;
    let t15;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "admin-topbar-title",
                    children: "Plans & Checkout"
                }, void 0, false, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 319,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "admin-topbar-sub",
                    children: "Edit pricing, ROI, features and wallet addresses"
                }, void 0, false, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 319,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        t15 = {
            display: "flex",
            gap: 8
        };
        $[28] = t14;
        $[29] = t15;
    } else {
        t14 = $[28];
        t15 = $[29];
    }
    const t16 = `btn ${tab === "plans" ? "btn-primary" : "btn-ghost"}`;
    let t17;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "AdminPlans[<button>.onClick]": ()=>setTab("plans")
        })["AdminPlans[<button>.onClick]"];
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t16,
            onClick: t17,
            children: "📊 Plans"
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[31] = t16;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    const t19 = `btn ${tab === "checkout" ? "btn-primary" : "btn-ghost"}`;
    let t20;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "AdminPlans[<button>.onClick]": ()=>setTab("checkout")
        })["AdminPlans[<button>.onClick]"];
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t19,
            onClick: t20,
            children: "💳 Checkout Page"
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 360,
            columnNumber: 11
        }, this);
        $[34] = t19;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    if ($[36] !== t18 || $[37] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-topbar fade-in",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t15,
                    children: [
                        t18,
                        t21
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 368,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 368,
            columnNumber: 11
        }, this);
        $[36] = t18;
        $[37] = t21;
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] !== loading || $[40] !== plans || $[41] !== tab) {
        t23 = tab === "plans" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 40,
                    textAlign: "center",
                    color: "var(--text-dim)"
                },
                children: "Loading plans…"
            }, void 0, false, {
                fileName: "[project]/app/admin/plans/page.js",
                lineNumber: 377,
                columnNumber: 43
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plans-admin-grid fade-up",
                children: plans.map({
                    "AdminPlans[plans.map()]": (plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "admin-plan-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "admin-plan-card-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "admin-plan-card-name",
                                            children: plan.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 382,
                                            columnNumber: 131
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "admin-plan-card-roi",
                                            style: {
                                                color: PLAN_COLORS[plan.id] || plan.color
                                            },
                                            children: [
                                                plan.roi,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 382,
                                            columnNumber: 186
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 13,
                                                color: "var(--text-dim)",
                                                marginTop: 4
                                            },
                                            children: "Monthly ROI"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 384,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 382,
                                    columnNumber: 93
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "admin-plan-card-body",
                                    children: [
                                        {
                                            label: "Monthly Price",
                                            value: `$${(plan.price || 0).toLocaleString()}`
                                        },
                                        {
                                            label: "Min Deposit",
                                            value: `$${(plan.minDeposit || 0).toLocaleString()}`
                                        },
                                        {
                                            label: "Features",
                                            value: `${(plan.features || []).length} included`
                                        }
                                    ].map(_AdminPlansPlansMapAnonymous)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 388,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "admin-plan-card-foot",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-outline btn-sm",
                                        style: {
                                            flex: 1
                                        },
                                        onClick: {
                                            "AdminPlans[plans.map() > <button>.onClick]": ()=>setEditing({
                                                    ...plan
                                                })
                                        }["AdminPlans[plans.map() > <button>.onClick]"],
                                        children: "✏ Edit Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 397,
                                        columnNumber: 96
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 397,
                                    columnNumber: 58
                                }, this)
                            ]
                        }, plan.id, true, {
                            fileName: "[project]/app/admin/plans/page.js",
                            lineNumber: 382,
                            columnNumber: 46
                        }, this)
                }["AdminPlans[plans.map()]"])
            }, void 0, false, {
                fileName: "[project]/app/admin/plans/page.js",
                lineNumber: 381,
                columnNumber: 33
            }, this)
        }, void 0, false);
        $[39] = loading;
        $[40] = plans;
        $[41] = tab;
        $[42] = t23;
    } else {
        t23 = $[42];
    }
    let t24;
    if ($[43] !== openEditWallet || $[44] !== tab || $[45] !== wallets) {
        t24 = tab === "checkout" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fade-up",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "users-table-card",
                    style: {
                        marginBottom: 24
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "users-table-header",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "users-table-title",
                                        children: "💳 Wallet Addresses"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 416,
                                        columnNumber: 51
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 13,
                                            color: "var(--text-dim)",
                                            marginTop: 4
                                        },
                                        children: "These are the addresses users send payment to on the checkout page"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 416,
                                        columnNumber: 111
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 416,
                                columnNumber: 46
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/plans/page.js",
                            lineNumber: 416,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            "Cryptocurrency",
                                            "Network",
                                            "Wallet Address",
                                            "Actions"
                                        ].map(_AdminPlansAnonymous)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 420,
                                        columnNumber: 132
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 420,
                                    columnNumber: 125
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: Object.entries(wallets).map({
                                        "AdminPlans[(anonymous)()]": (t25)=>{
                                            const [key_0, w] = t25;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            fontWeight: 600
                                                        },
                                                        children: key_0
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/plans/page.js",
                                                        lineNumber: 423,
                                                        columnNumber: 40
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            color: "var(--text-dim)",
                                                            fontSize: 13
                                                        },
                                                        children: w.network
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/plans/page.js",
                                                        lineNumber: 425,
                                                        columnNumber: 34
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: "var(--font-mono)",
                                                                fontSize: 11,
                                                                color: "var(--teal)",
                                                                wordBreak: "break-all"
                                                            },
                                                            children: w.address
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/plans/page.js",
                                                            lineNumber: 428,
                                                            columnNumber: 42
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/plans/page.js",
                                                        lineNumber: 428,
                                                        columnNumber: 38
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "icon-btn",
                                                            title: "Edit",
                                                            onClick: {
                                                                "AdminPlans[(anonymous)() > <button>.onClick]": ()=>openEditWallet(key_0)
                                                            }["AdminPlans[(anonymous)() > <button>.onClick]"],
                                                            children: "✏️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/plans/page.js",
                                                            lineNumber: 433,
                                                            columnNumber: 51
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/plans/page.js",
                                                        lineNumber: 433,
                                                        columnNumber: 47
                                                    }, this)
                                                ]
                                            }, key_0, true, {
                                                fileName: "[project]/app/admin/plans/page.js",
                                                lineNumber: 423,
                                                columnNumber: 24
                                            }, this);
                                        }
                                    }["AdminPlans[(anonymous)()]"])
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 420,
                                    columnNumber: 235
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/plans/page.js",
                            lineNumber: 420,
                            columnNumber: 100
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 414,
                    columnNumber: 58
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: "rgba(255,183,0,0.08)",
                        border: "1px solid rgba(255,183,0,0.2)",
                        borderRadius: "var(--radius)",
                        padding: 16,
                        fontSize: 13,
                        color: "var(--text-dim)"
                    },
                    children: [
                        "⚠️ ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: "var(--gold)"
                            },
                            children: "Important:"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/plans/page.js",
                            lineNumber: 444,
                            columnNumber: 13
                        }, this),
                        " Wallet address changes take effect immediately on the checkout page for all users. Double-check addresses before saving to avoid losing payments."
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 437,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 414,
            columnNumber: 33
        }, this);
        $[43] = openEditWallet;
        $[44] = tab;
        $[45] = wallets;
        $[46] = t24;
    } else {
        t24 = $[46];
    }
    let t25;
    if ($[47] !== addFeature || $[48] !== addNotIncluded || $[49] !== editing || $[50] !== handleSave || $[51] !== removeFeature || $[52] !== removeNotIncluded || $[53] !== saved || $[54] !== updateFeature || $[55] !== updateNotIncluded) {
        t25 = editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-overlay",
            onClick: {
                "AdminPlans[<div>.onClick]": ()=>setEditing(null)
            }["AdminPlans[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plan-edit-modal",
                style: {
                    maxWidth: 540,
                    maxHeight: "90vh",
                    overflowY: "auto"
                },
                onClick: _AdminPlansDivOnClick,
                children: saved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        padding: "32px 0"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 48,
                                marginBottom: 12
                            },
                            children: "✅"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/plans/page.js",
                            lineNumber: 465,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 20,
                                fontWeight: 700
                            },
                            children: "Plan Updated!"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/plans/page.js",
                            lineNumber: 468,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: "var(--text-dim)",
                                marginTop: 8
                            },
                            children: "Changes are now live for all users."
                        }, void 0, false, {
                            fileName: "[project]/app/admin/plans/page.js",
                            lineNumber: 471,
                            columnNumber: 33
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 462,
                    columnNumber: 51
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "plan-edit-title",
                            style: {
                                color: PLAN_COLORS[editing.id] || editing.color
                            },
                            children: [
                                "Edit ",
                                editing.name,
                                " Plan"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/plans/page.js",
                            lineNumber: 474,
                            columnNumber: 66
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "plan-edit-sub",
                            children: "Changes apply immediately to the plans page and checkout."
                        }, void 0, false, {
                            fileName: "[project]/app/admin/plans/page.js",
                            lineNumber: 476,
                            columnNumber: 44
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "plan-edit-form",
                            onSubmit: handleSave,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plan-edit-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "input-label",
                                                    children: "Plan Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 476,
                                                    columnNumber: 252
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "input",
                                                    value: editing.name,
                                                    onChange: {
                                                        "AdminPlans[<input>.onChange]": (e_2)=>setEditing({
                                                                ...editing,
                                                                name: e_2.target.value
                                                            })
                                                    }["AdminPlans[<input>.onChange]"],
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 476,
                                                    columnNumber: 300
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 476,
                                            columnNumber: 224
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "input-label",
                                                    children: "Badge Label"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 481,
                                                    columnNumber: 104
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "input",
                                                    placeholder: "e.g. Most Popular",
                                                    value: editing.badge || "",
                                                    onChange: {
                                                        "AdminPlans[<input>.onChange]": (e_3)=>setEditing({
                                                                ...editing,
                                                                badge: e_3.target.value
                                                            })
                                                    }["AdminPlans[<input>.onChange]"]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 481,
                                                    columnNumber: 154
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 481,
                                            columnNumber: 76
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 476,
                                    columnNumber: 193
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plan-edit-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "input-label",
                                                    children: "Monthly ROI (%)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 486,
                                                    columnNumber: 125
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "input",
                                                    type: "number",
                                                    min: "1",
                                                    max: "100",
                                                    value: editing.roi,
                                                    onChange: {
                                                        "AdminPlans[<input>.onChange]": (e_4)=>setEditing({
                                                                ...editing,
                                                                roi: Number(e_4.target.value)
                                                            })
                                                    }["AdminPlans[<input>.onChange]"],
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 486,
                                                    columnNumber: 179
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 486,
                                            columnNumber: 97
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "input-label",
                                                    children: "Monthly Price ($)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 491,
                                                    columnNumber: 104
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "input",
                                                    type: "number",
                                                    min: "1",
                                                    value: editing.price,
                                                    onChange: {
                                                        "AdminPlans[<input>.onChange]": (e_5)=>setEditing({
                                                                ...editing,
                                                                price: Number(e_5.target.value)
                                                            })
                                                    }["AdminPlans[<input>.onChange]"],
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 491,
                                                    columnNumber: 160
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 491,
                                            columnNumber: 76
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 486,
                                    columnNumber: 66
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "plan-edit-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "input-label",
                                                    children: "Min Deposit ($)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 496,
                                                    columnNumber: 141
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "input",
                                                    type: "number",
                                                    min: "1",
                                                    value: editing.minDeposit || 0,
                                                    onChange: {
                                                        "AdminPlans[<input>.onChange]": (e_6)=>setEditing({
                                                                ...editing,
                                                                minDeposit: Number(e_6.target.value)
                                                            })
                                                    }["AdminPlans[<input>.onChange]"],
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 496,
                                                    columnNumber: 195
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 496,
                                            columnNumber: 113
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "input-label",
                                                    children: "Color (hex)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 501,
                                                    columnNumber: 104
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: 8,
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "input",
                                                            placeholder: "#00D4AA",
                                                            value: editing.color || "",
                                                            onChange: {
                                                                "AdminPlans[<input>.onChange]": (e_7)=>setEditing({
                                                                        ...editing,
                                                                        color: e_7.target.value
                                                                    })
                                                            }["AdminPlans[<input>.onChange]"]
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/plans/page.js",
                                                            lineNumber: 505,
                                                            columnNumber: 20
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "color",
                                                            value: editing.color || "#00D4AA",
                                                            onChange: {
                                                                "AdminPlans[<input>.onChange]": (e_8)=>setEditing({
                                                                        ...editing,
                                                                        color: e_8.target.value
                                                                    })
                                                            }["AdminPlans[<input>.onChange]"],
                                                            style: {
                                                                width: 40,
                                                                height: 40,
                                                                border: "none",
                                                                borderRadius: 8,
                                                                cursor: "pointer",
                                                                background: "none"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/plans/page.js",
                                                            lineNumber: 510,
                                                            columnNumber: 56
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 501,
                                                    columnNumber: 154
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 501,
                                            columnNumber: 76
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 496,
                                    columnNumber: 82
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "input-label",
                                            children: "✅ Included Features"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 522,
                                            columnNumber: 70
                                        }, this),
                                        (editing.features || []).map({
                                            "AdminPlans[(anonymous)()]": (f, i_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: 8,
                                                        marginBottom: 8
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "input",
                                                            value: f,
                                                            onChange: {
                                                                "AdminPlans[(anonymous)() > <input>.onChange]": (e_9)=>updateFeature(i_2, e_9.target.value)
                                                            }["AdminPlans[(anonymous)() > <input>.onChange]"],
                                                            placeholder: "Feature description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/plans/page.js",
                                                            lineNumber: 527,
                                                            columnNumber: 20
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: {
                                                                "AdminPlans[(anonymous)() > <button>.onClick]": ()=>removeFeature(i_2)
                                                            }["AdminPlans[(anonymous)() > <button>.onClick]"],
                                                            style: {
                                                                background: "var(--red)",
                                                                border: "none",
                                                                color: "#fff",
                                                                borderRadius: 8,
                                                                padding: "0 12px",
                                                                cursor: "pointer"
                                                            },
                                                            children: "✕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/plans/page.js",
                                                            lineNumber: 529,
                                                            columnNumber: 106
                                                        }, this)
                                                    ]
                                                }, i_2, true, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 523,
                                                    columnNumber: 58
                                                }, this)
                                        }["AdminPlans[(anonymous)()]"]),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "btn btn-ghost btn-sm",
                                            onClick: addFeature,
                                            children: "+ Add Feature"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 539,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 522,
                                    columnNumber: 42
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "input-label",
                                            children: "✗ Not Included"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 539,
                                            columnNumber: 179
                                        }, this),
                                        (editing.notIncluded || []).map({
                                            "AdminPlans[(anonymous)()]": (f_0, i_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: 8,
                                                        marginBottom: 8
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "input",
                                                            value: f_0,
                                                            onChange: {
                                                                "AdminPlans[(anonymous)() > <input>.onChange]": (e_10)=>updateNotIncluded(i_3, e_10.target.value)
                                                            }["AdminPlans[(anonymous)() > <input>.onChange]"],
                                                            placeholder: "Not included item"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/plans/page.js",
                                                            lineNumber: 544,
                                                            columnNumber: 20
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: {
                                                                "AdminPlans[(anonymous)() > <button>.onClick]": ()=>removeNotIncluded(i_3)
                                                            }["AdminPlans[(anonymous)() > <button>.onClick]"],
                                                            style: {
                                                                background: "var(--red)",
                                                                border: "none",
                                                                color: "#fff",
                                                                borderRadius: 8,
                                                                padding: "0 12px",
                                                                cursor: "pointer"
                                                            },
                                                            children: "✕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/plans/page.js",
                                                            lineNumber: 546,
                                                            columnNumber: 104
                                                        }, this)
                                                    ]
                                                }, i_3, true, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 540,
                                                    columnNumber: 60
                                                }, this)
                                        }["AdminPlans[(anonymous)()]"]),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "btn btn-ghost btn-sm",
                                            onClick: addNotIncluded,
                                            children: "+ Add Item"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 556,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 539,
                                    columnNumber: 151
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 12,
                                        marginTop: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "btn btn-ghost",
                                            style: {
                                                flex: 1
                                            },
                                            onClick: {
                                                "AdminPlans[<button>.onClick]": ()=>setEditing(null)
                                            }["AdminPlans[<button>.onClick]"],
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 560,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "btn btn-primary",
                                            style: {
                                                flex: 2
                                            },
                                            children: "💾 Save Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 564,
                                            columnNumber: 65
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 556,
                                    columnNumber: 152
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/plans/page.js",
                            lineNumber: 476,
                            columnNumber: 138
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/app/admin/plans/page.js",
                lineNumber: 458,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 456,
            columnNumber: 22
        }, this);
        $[47] = addFeature;
        $[48] = addNotIncluded;
        $[49] = editing;
        $[50] = handleSave;
        $[51] = removeFeature;
        $[52] = removeNotIncluded;
        $[53] = saved;
        $[54] = updateFeature;
        $[55] = updateNotIncluded;
        $[56] = t25;
    } else {
        t25 = $[56];
    }
    let t26;
    if ($[57] !== editWallet || $[58] !== handleWalletSave || $[59] !== walletForm.address || $[60] !== walletForm.key || $[61] !== walletForm.network || $[62] !== walletSaving) {
        t26 = editWallet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-overlay",
            onClick: {
                "AdminPlans[<div>.onClick]": ()=>setEditWallet(null)
            }["AdminPlans[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plan-edit-modal",
                style: {
                    maxWidth: 480
                },
                onClick: _AdminPlansDivOnClick2,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plan-edit-title",
                        children: "✏️ Edit Wallet Address"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/plans/page.js",
                        lineNumber: 586,
                        columnNumber: 43
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plan-edit-sub",
                        style: {
                            color: "var(--gold)"
                        },
                        children: "⚠️ Make sure the address is correct before saving."
                    }, void 0, false, {
                        fileName: "[project]/app/admin/plans/page.js",
                        lineNumber: 586,
                        columnNumber: 104
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "plan-edit-form",
                        onSubmit: handleWalletSave,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "input-label",
                                        children: "Cryptocurrency"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 588,
                                        columnNumber: 157
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "input",
                                        value: walletForm.key,
                                        disabled: true,
                                        style: {
                                            opacity: 0.6
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 588,
                                        columnNumber: 210
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 588,
                                columnNumber: 129
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "input-label",
                                        children: "Network Label"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 590,
                                        columnNumber: 52
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "input",
                                        value: walletForm.network,
                                        onChange: {
                                            "AdminPlans[<input>.onChange]": (e_12)=>setWalletForm({
                                                    "AdminPlans[<input>.onChange > setWalletForm()]": (f_1)=>({
                                                            ...f_1,
                                                            network: e_12.target.value
                                                        })
                                                }["AdminPlans[<input>.onChange > setWalletForm()]"])
                                        }["AdminPlans[<input>.onChange]"],
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 590,
                                        columnNumber: 104
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 590,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "input-label",
                                        children: "Wallet Address"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 597,
                                        columnNumber: 100
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "input",
                                        value: walletForm.address,
                                        onChange: {
                                            "AdminPlans[<input>.onChange]": (e_13)=>setWalletForm({
                                                    "AdminPlans[<input>.onChange > setWalletForm()]": (f_2)=>({
                                                            ...f_2,
                                                            address: e_13.target.value
                                                        })
                                                }["AdminPlans[<input>.onChange > setWalletForm()]"])
                                        }["AdminPlans[<input>.onChange]"],
                                        required: true,
                                        style: {
                                            fontFamily: "var(--font-mono)",
                                            fontSize: 12
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 597,
                                        columnNumber: 153
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 597,
                                columnNumber: 72
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 12,
                                    marginTop: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "btn btn-ghost",
                                        style: {
                                            flex: 1
                                        },
                                        onClick: {
                                            "AdminPlans[<button>.onClick]": ()=>setEditWallet(null)
                                        }["AdminPlans[<button>.onClick]"],
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 611,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "btn btn-primary",
                                        style: {
                                            flex: 2
                                        },
                                        disabled: walletSaving,
                                        children: walletSaving ? "Saving\u2026" : "\uD83D\uDCBE Save Address"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 615,
                                        columnNumber: 63
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 607,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/plans/page.js",
                        lineNumber: 588,
                        columnNumber: 68
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/plans/page.js",
                lineNumber: 584,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 582,
            columnNumber: 25
        }, this);
        $[57] = editWallet;
        $[58] = handleWalletSave;
        $[59] = walletForm.address;
        $[60] = walletForm.key;
        $[61] = walletForm.network;
        $[62] = walletSaving;
        $[63] = t26;
    } else {
        t26 = $[63];
    }
    let t27;
    if ($[64] !== toast) {
        t27 = toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-toast",
            children: toast
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 630,
            columnNumber: 20
        }, this);
        $[64] = toast;
        $[65] = t27;
    } else {
        t27 = $[65];
    }
    let t28;
    if ($[66] !== t22 || $[67] !== t23 || $[68] !== t24 || $[69] !== t25 || $[70] !== t26 || $[71] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminLayout"], {
            children: [
                t22,
                t23,
                t24,
                t25,
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 638,
            columnNumber: 11
        }, this);
        $[66] = t22;
        $[67] = t23;
        $[68] = t24;
        $[69] = t25;
        $[70] = t26;
        $[71] = t27;
        $[72] = t28;
    } else {
        t28 = $[72];
    }
    return t28;
}
_s(AdminPlans, "melxFPxiI+cLDkQskDMktgoFdpE=");
_c = AdminPlans;
function _AdminPlansDivOnClick2(e_11) {
    return e_11.stopPropagation();
}
function _AdminPlansDivOnClick(e_1) {
    return e_1.stopPropagation();
}
function _AdminPlansAnonymous(h) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        children: h
    }, h, false, {
        fileName: "[project]/app/admin/plans/page.js",
        lineNumber: 658,
        columnNumber: 10
    }, this);
}
function _AdminPlansPlansMapAnonymous(row, i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "admin-plan-stat-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "admin-plan-stat-label",
                children: row.label
            }, void 0, false, {
                fileName: "[project]/app/admin/plans/page.js",
                lineNumber: 661,
                columnNumber: 57
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "admin-plan-stat-value",
                children: row.value
            }, void 0, false, {
                fileName: "[project]/app/admin/plans/page.js",
                lineNumber: 661,
                columnNumber: 115
            }, this)
        ]
    }, i_1, true, {
        fileName: "[project]/app/admin/plans/page.js",
        lineNumber: 661,
        columnNumber: 10
    }, this);
}
function _AdminPlansUseEffectAnonymous(r) {
    return r.json();
}
var _c;
__turbopack_context__.k.register(_c, "AdminPlans");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3507be05._.js.map