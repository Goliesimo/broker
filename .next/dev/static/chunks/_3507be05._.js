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
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
const CRYPTO_ICONS = {
    USDT: "💵",
    BTC: "₿",
    ETH: "Ξ",
    BNB: "🔶",
    SOL: "◎",
    LTC: "Ł",
    XRP: "✕"
};
const DEFAULT_CHECKOUT = {
    wallets: {
        "USDT (TRC20)": {
            address: "",
            network: "TRON Network (TRC20)",
            icon: "💵",
            symbol: "USDT",
            enabled: true
        },
        "USDT (ERC20)": {
            address: "",
            network: "Ethereum Network (ERC20)",
            icon: "💵",
            symbol: "USDT",
            enabled: true
        },
        "Bitcoin (BTC)": {
            address: "",
            network: "Bitcoin Network",
            icon: "₿",
            symbol: "BTC",
            enabled: true
        },
        "Ethereum (ETH)": {
            address: "",
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
// ── Checkout Editor Component (defined outside to avoid focus loss) ──
function CheckoutEditor(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(110);
    if ($[0] !== "c8e6a64aec1ca921f1188ac5e574c180699b97620f80536dd785984099317b7a") {
        for(let $i = 0; $i < 110; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c8e6a64aec1ca921f1188ac5e574c180699b97620f80536dd785984099317b7a";
    }
    const { checkout, setCheckout, onSave, saving, toast } = t0;
    const [editWallet, setEditWallet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [walletForm, setWalletForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [addingNew, setAddingNew] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            key: "",
            address: "",
            network: "",
            icon: "\uD83D\uDCB5",
            symbol: "",
            enabled: true
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [newWallet, setNewWallet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[3] !== setCheckout) {
        t3 = ({
            "CheckoutEditor[updateWallet]": (key, field, val)=>{
                setCheckout({
                    "CheckoutEditor[updateWallet > setCheckout()]": (c)=>({
                            ...c,
                            wallets: {
                                ...c.wallets,
                                [key]: {
                                    ...c.wallets[key],
                                    [field]: val
                                }
                            }
                        })
                }["CheckoutEditor[updateWallet > setCheckout()]"]);
            }
        })["CheckoutEditor[updateWallet]"];
        $[3] = setCheckout;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const updateWallet = t3;
    let t4;
    if ($[5] !== checkout.wallets || $[6] !== updateWallet) {
        t4 = ({
            "CheckoutEditor[toggleWallet]": (key_0)=>{
                updateWallet(key_0, "enabled", !checkout.wallets[key_0].enabled);
            }
        })["CheckoutEditor[toggleWallet]"];
        $[5] = checkout.wallets;
        $[6] = updateWallet;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const toggleWallet = t4;
    let t5;
    if ($[8] !== checkout.wallets || $[9] !== setCheckout) {
        t5 = ({
            "CheckoutEditor[deleteWallet]": (key_1)=>{
                if (!confirm(`Remove "${key_1}" payment option?`)) {
                    return;
                }
                const updated = {
                    ...checkout.wallets
                };
                delete updated[key_1];
                setCheckout({
                    "CheckoutEditor[deleteWallet > setCheckout()]": (c_0)=>({
                            ...c_0,
                            wallets: updated
                        })
                }["CheckoutEditor[deleteWallet > setCheckout()]"]);
            }
        })["CheckoutEditor[deleteWallet]"];
        $[8] = checkout.wallets;
        $[9] = setCheckout;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const deleteWallet = t5;
    let t6;
    if ($[11] !== checkout.wallets) {
        t6 = ({
            "CheckoutEditor[openEditWallet]": (key_2)=>{
                setEditWallet(key_2);
                setWalletForm({
                    ...checkout.wallets[key_2]
                });
            }
        })["CheckoutEditor[openEditWallet]"];
        $[11] = checkout.wallets;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const openEditWallet = t6;
    let t7;
    if ($[13] !== editWallet || $[14] !== setCheckout || $[15] !== walletForm) {
        t7 = ({
            "CheckoutEditor[saveWalletEdit]": (e)=>{
                e.preventDefault();
                setCheckout({
                    "CheckoutEditor[saveWalletEdit > setCheckout()]": (c_1)=>({
                            ...c_1,
                            wallets: {
                                ...c_1.wallets,
                                [editWallet]: {
                                    ...c_1.wallets[editWallet],
                                    ...walletForm
                                }
                            }
                        })
                }["CheckoutEditor[saveWalletEdit > setCheckout()]"]);
                setEditWallet(null);
            }
        })["CheckoutEditor[saveWalletEdit]"];
        $[13] = editWallet;
        $[14] = setCheckout;
        $[15] = walletForm;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    const saveWalletEdit = t7;
    let t8;
    if ($[17] !== newWallet.address || $[18] !== newWallet.icon || $[19] !== newWallet.key || $[20] !== newWallet.network || $[21] !== newWallet.symbol || $[22] !== setCheckout) {
        t8 = ({
            "CheckoutEditor[addNewWallet]": (e_0)=>{
                e_0.preventDefault();
                if (!newWallet.key || !newWallet.address || !newWallet.symbol) {
                    return;
                }
                setCheckout({
                    "CheckoutEditor[addNewWallet > setCheckout()]": (c_2)=>({
                            ...c_2,
                            wallets: {
                                ...c_2.wallets,
                                [newWallet.key]: {
                                    address: newWallet.address,
                                    network: newWallet.network,
                                    icon: newWallet.icon,
                                    symbol: newWallet.symbol,
                                    enabled: true
                                }
                            }
                        })
                }["CheckoutEditor[addNewWallet > setCheckout()]"]);
                setAddingNew(false);
                setNewWallet({
                    key: "",
                    address: "",
                    network: "",
                    icon: "\uD83D\uDCB5",
                    symbol: "",
                    enabled: true
                });
            }
        })["CheckoutEditor[addNewWallet]"];
        $[17] = newWallet.address;
        $[18] = newWallet.icon;
        $[19] = newWallet.key;
        $[20] = newWallet.network;
        $[21] = newWallet.symbol;
        $[22] = setCheckout;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    const addNewWallet = t8;
    let t9;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            display: "flex",
            flexDirection: "column",
            gap: 24
        };
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "users-table-title",
                    children: "\uD83D\uDCB3 Payment Methods & Wallet Addresses"
                }, void 0, false, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 268,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: 13,
                        color: "var(--text-dim)",
                        marginTop: 4
                    },
                    children: "Manage which crypto options users see on the checkout page"
                }, void 0, false, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 268,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "users-table-header",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn btn-primary btn-sm",
                    onClick: {
                        "CheckoutEditor[<button>.onClick]": ()=>setAddingNew(true)
                    }["CheckoutEditor[<button>.onClick]"],
                    children: "➕ Add Payment Method"
                }, void 0, false, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 279,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    "Method",
                    "Symbol",
                    "Network",
                    "Wallet Address",
                    "Status",
                    "Actions"
                ].map(_CheckoutEditorAnonymous)
            }, void 0, false, {
                fileName: "[project]/app/admin/plans/page.js",
                lineNumber: 288,
                columnNumber: 18
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== checkout.wallets || $[29] !== deleteWallet || $[30] !== openEditWallet || $[31] !== toggleWallet) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "users-table-card",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "table",
                    children: [
                        t12,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: Object.entries(checkout.wallets || {}).map({
                                "CheckoutEditor[(anonymous)()]": (t14)=>{
                                    const [key_3, w] = t14;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            opacity: w.enabled === false ? 0.5 : 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    fontWeight: 600
                                                },
                                                children: [
                                                    w.icon,
                                                    " ",
                                                    key_3
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/plans/page.js",
                                                lineNumber: 300,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "var(--font-mono)",
                                                        fontSize: 12,
                                                        color: "var(--teal)"
                                                    },
                                                    children: w.symbol
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 302,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/plans/page.js",
                                                lineNumber: 302,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    fontSize: 12,
                                                    color: "var(--text-dim)"
                                                },
                                                children: w.network
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/plans/page.js",
                                                lineNumber: 306,
                                                columnNumber: 44
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "var(--font-mono)",
                                                        fontSize: 11,
                                                        color: w.address && !w.address.includes("YourWallet") ? "var(--text)" : "var(--red)",
                                                        wordBreak: "break-all"
                                                    },
                                                    children: w.address || "\u26A0 Not set"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 309,
                                                    columnNumber: 40
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/plans/page.js",
                                                lineNumber: 309,
                                                columnNumber: 36
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: {
                                                        "CheckoutEditor[(anonymous)() > <button>.onClick]": ()=>toggleWallet(key_3)
                                                    }["CheckoutEditor[(anonymous)() > <button>.onClick]"],
                                                    style: {
                                                        background: w.enabled !== false ? "rgba(0,212,170,0.15)" : "rgba(255,77,106,0.15)",
                                                        color: w.enabled !== false ? "var(--teal)" : "var(--red)",
                                                        border: "none",
                                                        borderRadius: 20,
                                                        padding: "4px 12px",
                                                        fontSize: 12,
                                                        fontWeight: 600,
                                                        cursor: "pointer"
                                                    },
                                                    children: w.enabled !== false ? "\u25CF Enabled" : "\u25CB Disabled"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 314,
                                                    columnNumber: 69
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/plans/page.js",
                                                lineNumber: 314,
                                                columnNumber: 65
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "actions-cell",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "icon-btn",
                                                            title: "Edit",
                                                            onClick: {
                                                                "CheckoutEditor[(anonymous)() > <button>.onClick]": ()=>openEditWallet(key_3)
                                                            }["CheckoutEditor[(anonymous)() > <button>.onClick]"],
                                                            children: "✏️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/plans/page.js",
                                                            lineNumber: 325,
                                                            columnNumber: 130
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "icon-btn danger",
                                                            title: "Delete",
                                                            onClick: {
                                                                "CheckoutEditor[(anonymous)() > <button>.onClick]": ()=>deleteWallet(key_3)
                                                            }["CheckoutEditor[(anonymous)() > <button>.onClick]"],
                                                            children: "🗑"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/plans/page.js",
                                                            lineNumber: 327,
                                                            columnNumber: 87
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 325,
                                                    columnNumber: 100
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/plans/page.js",
                                                lineNumber: 325,
                                                columnNumber: 96
                                            }, this)
                                        ]
                                    }, key_3, true, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 298,
                                        columnNumber: 22
                                    }, this);
                                }
                            }["CheckoutEditor[(anonymous)()]"])
                        }, void 0, false, {
                            fileName: "[project]/app/admin/plans/page.js",
                            lineNumber: 295,
                            columnNumber: 80
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 295,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[28] = checkout.wallets;
        $[29] = deleteWallet;
        $[30] = openEditWallet;
        $[31] = toggleWallet;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    let t15;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "users-table-header",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "users-table-title",
                children: "📝 Checkout Page Text"
            }, void 0, false, {
                fileName: "[project]/app/admin/plans/page.js",
                lineNumber: 343,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        t15 = {
            padding: "0 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16
        };
        $[33] = t14;
        $[34] = t15;
    } else {
        t14 = $[33];
        t15 = $[34];
    }
    let t16;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "input-label",
            children: "Instructions / Subtitle Text"
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            resize: "vertical"
        };
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    const t18 = checkout.instructions || "";
    let t19;
    if ($[37] !== setCheckout) {
        t19 = ({
            "CheckoutEditor[<textarea>.onChange]": (e_1)=>setCheckout({
                    "CheckoutEditor[<textarea>.onChange > setCheckout()]": (c_3)=>({
                            ...c_3,
                            instructions: e_1.target.value
                        })
                }["CheckoutEditor[<textarea>.onChange > setCheckout()]"])
        })["CheckoutEditor[<textarea>.onChange]"];
        $[37] = setCheckout;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] !== t18 || $[40] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-group",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    className: "input",
                    rows: 3,
                    style: t17,
                    value: t18,
                    onChange: t19
                }, void 0, false, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 390,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 390,
            columnNumber: 11
        }, this);
        $[39] = t18;
        $[40] = t19;
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16
        };
        $[42] = t21;
    } else {
        t21 = $[42];
    }
    let t22;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "input-label",
            children: "Activation Time"
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 410,
            columnNumber: 11
        }, this);
        $[43] = t22;
    } else {
        t22 = $[43];
    }
    const t23 = checkout.activationTime || "";
    let t24;
    if ($[44] !== setCheckout) {
        t24 = ({
            "CheckoutEditor[<input>.onChange]": (e_2)=>setCheckout({
                    "CheckoutEditor[<input>.onChange > setCheckout()]": (c_4)=>({
                            ...c_4,
                            activationTime: e_2.target.value
                        })
                }["CheckoutEditor[<input>.onChange > setCheckout()]"])
        })["CheckoutEditor[<input>.onChange]"];
        $[44] = setCheckout;
        $[45] = t24;
    } else {
        t24 = $[45];
    }
    let t25;
    if ($[46] !== t23 || $[47] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-group",
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "input",
                    placeholder: "e.g. 24 hours",
                    value: t23,
                    onChange: t24
                }, void 0, false, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 433,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 433,
            columnNumber: 11
        }, this);
        $[46] = t23;
        $[47] = t24;
        $[48] = t25;
    } else {
        t25 = $[48];
    }
    let t26;
    let t27;
    let t28;
    let t29;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = {
            display: "flex",
            flexDirection: "column",
            gap: 8
        };
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "input-label",
            children: "Submission Requirements"
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 450,
            columnNumber: 11
        }, this);
        t28 = {
            display: "flex",
            gap: 16,
            alignItems: "center",
            marginTop: 4
        };
        t29 = {
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            fontSize: 13
        };
        $[49] = t26;
        $[50] = t27;
        $[51] = t28;
        $[52] = t29;
    } else {
        t26 = $[49];
        t27 = $[50];
        t28 = $[51];
        t29 = $[52];
    }
    const t30 = checkout.txidRequired !== false;
    let t31;
    if ($[53] !== setCheckout) {
        t31 = ({
            "CheckoutEditor[<input>.onChange]": (e_3)=>setCheckout({
                    "CheckoutEditor[<input>.onChange > setCheckout()]": (c_5)=>({
                            ...c_5,
                            txidRequired: e_3.target.checked
                        })
                }["CheckoutEditor[<input>.onChange > setCheckout()]"])
        })["CheckoutEditor[<input>.onChange]"];
        $[53] = setCheckout;
        $[54] = t31;
    } else {
        t31 = $[54];
    }
    let t32;
    if ($[55] !== t30 || $[56] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            style: t29,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "checkbox",
                    checked: t30,
                    onChange: t31
                }, void 0, false, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 492,
                    columnNumber: 30
                }, this),
                "TXID Required"
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 492,
            columnNumber: 11
        }, this);
        $[55] = t30;
        $[56] = t31;
        $[57] = t32;
    } else {
        t32 = $[57];
    }
    let t33;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = {
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            fontSize: 13
        };
        $[58] = t33;
    } else {
        t33 = $[58];
    }
    const t34 = checkout.screenshotRequired === true;
    let t35;
    if ($[59] !== setCheckout) {
        t35 = ({
            "CheckoutEditor[<input>.onChange]": (e_4)=>setCheckout({
                    "CheckoutEditor[<input>.onChange > setCheckout()]": (c_6)=>({
                            ...c_6,
                            screenshotRequired: e_4.target.checked
                        })
                }["CheckoutEditor[<input>.onChange > setCheckout()]"])
        })["CheckoutEditor[<input>.onChange]"];
        $[59] = setCheckout;
        $[60] = t35;
    } else {
        t35 = $[60];
    }
    let t36;
    if ($[61] !== t34 || $[62] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            style: t33,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "checkbox",
                    checked: t34,
                    onChange: t35
                }, void 0, false, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 530,
                    columnNumber: 30
                }, this),
                "Screenshot Required"
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 530,
            columnNumber: 11
        }, this);
        $[61] = t34;
        $[62] = t35;
        $[63] = t36;
    } else {
        t36 = $[63];
    }
    let t37;
    if ($[64] !== t32 || $[65] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-group",
            style: t26,
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t28,
                    children: [
                        t32,
                        t36
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 539,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 539,
            columnNumber: 11
        }, this);
        $[64] = t32;
        $[65] = t36;
        $[66] = t37;
    } else {
        t37 = $[66];
    }
    let t38;
    if ($[67] !== t25 || $[68] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t21,
            children: [
                t25,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 548,
            columnNumber: 11
        }, this);
        $[67] = t25;
        $[68] = t37;
        $[69] = t38;
    } else {
        t38 = $[69];
    }
    let t39;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "input-label",
            children: "Warning Text"
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 557,
            columnNumber: 11
        }, this);
        $[70] = t39;
    } else {
        t39 = $[70];
    }
    let t40;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = {
            resize: "vertical"
        };
        $[71] = t40;
    } else {
        t40 = $[71];
    }
    const t41 = checkout.warningText || "";
    let t42;
    if ($[72] !== setCheckout) {
        t42 = ({
            "CheckoutEditor[<textarea>.onChange]": (e_5)=>setCheckout({
                    "CheckoutEditor[<textarea>.onChange > setCheckout()]": (c_7)=>({
                            ...c_7,
                            warningText: e_5.target.value
                        })
                }["CheckoutEditor[<textarea>.onChange > setCheckout()]"])
        })["CheckoutEditor[<textarea>.onChange]"];
        $[72] = setCheckout;
        $[73] = t42;
    } else {
        t42 = $[73];
    }
    let t43;
    if ($[74] !== t41 || $[75] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-group",
            children: [
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    className: "input",
                    rows: 2,
                    style: t40,
                    value: t41,
                    onChange: t42
                }, void 0, false, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 589,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 589,
            columnNumber: 11
        }, this);
        $[74] = t41;
        $[75] = t42;
        $[76] = t43;
    } else {
        t43 = $[76];
    }
    let t44;
    if ($[77] !== t20 || $[78] !== t38 || $[79] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "users-table-card",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t15,
                    children: [
                        t20,
                        t38,
                        t43
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 598,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 598,
            columnNumber: 11
        }, this);
        $[77] = t20;
        $[78] = t38;
        $[79] = t43;
        $[80] = t44;
    } else {
        t44 = $[80];
    }
    let t45;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = {
            display: "flex",
            justifyContent: "flex-end",
            gap: 12
        };
        $[81] = t45;
    } else {
        t45 = $[81];
    }
    let t46;
    if ($[82] !== toast) {
        t46 = toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                color: toast.includes("\u274C") ? "var(--red)" : "var(--teal)",
                fontWeight: 600,
                display: "flex",
                alignItems: "center"
            },
            children: toast
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 619,
            columnNumber: 20
        }, this);
        $[82] = toast;
        $[83] = t46;
    } else {
        t46 = $[83];
    }
    let t47;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = {
            minWidth: 160
        };
        $[84] = t47;
    } else {
        t47 = $[84];
    }
    const t48 = saving ? "Saving\u2026" : "\uD83D\uDCBE Save All Changes";
    let t49;
    if ($[85] !== onSave || $[86] !== saving || $[87] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn btn-primary",
            onClick: onSave,
            disabled: saving,
            style: t47,
            children: t48
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 642,
            columnNumber: 11
        }, this);
        $[85] = onSave;
        $[86] = saving;
        $[87] = t48;
        $[88] = t49;
    } else {
        t49 = $[88];
    }
    let t50;
    if ($[89] !== t46 || $[90] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t45,
            children: [
                t46,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 652,
            columnNumber: 11
        }, this);
        $[89] = t46;
        $[90] = t49;
        $[91] = t50;
    } else {
        t50 = $[91];
    }
    let t51;
    if ($[92] !== editWallet || $[93] !== saveWalletEdit || $[94] !== walletForm) {
        t51 = editWallet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-overlay",
            onClick: {
                "CheckoutEditor[<div>.onClick]": ()=>setEditWallet(null)
            }["CheckoutEditor[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plan-edit-modal",
                style: {
                    maxWidth: 500
                },
                onClick: _CheckoutEditorDivOnClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plan-edit-title",
                        children: [
                            "✏️ Edit ",
                            editWallet
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/plans/page.js",
                        lineNumber: 665,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plan-edit-sub",
                        style: {
                            color: "var(--gold)"
                        },
                        children: "⚠️ Double-check the address before saving — errors cause lost payments."
                    }, void 0, false, {
                        fileName: "[project]/app/admin/plans/page.js",
                        lineNumber: 665,
                        columnNumber: 105
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "plan-edit-form",
                        onSubmit: saveWalletEdit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "input-label",
                                        children: "Display Name"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 667,
                                        columnNumber: 176
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "input",
                                        value: editWallet,
                                        disabled: true,
                                        style: {
                                            opacity: 0.5
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 667,
                                        columnNumber: 227
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 667,
                                columnNumber: 148
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "input-label",
                                                children: "Symbol (e.g. USDT)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/plans/page.js",
                                                lineNumber: 673,
                                                columnNumber: 42
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "input",
                                                value: walletForm.symbol || "",
                                                onChange: {
                                                    "CheckoutEditor[<input>.onChange]": (e_7)=>setWalletForm({
                                                            "CheckoutEditor[<input>.onChange > setWalletForm()]": (f)=>({
                                                                    ...f,
                                                                    symbol: e_7.target.value
                                                                })
                                                        }["CheckoutEditor[<input>.onChange > setWalletForm()]"])
                                                }["CheckoutEditor[<input>.onChange]"],
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/plans/page.js",
                                                lineNumber: 673,
                                                columnNumber: 99
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 673,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "input-label",
                                                children: "Icon (emoji)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/plans/page.js",
                                                lineNumber: 680,
                                                columnNumber: 106
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "input",
                                                value: walletForm.icon || "",
                                                onChange: {
                                                    "CheckoutEditor[<input>.onChange]": (e_8)=>setWalletForm({
                                                            "CheckoutEditor[<input>.onChange > setWalletForm()]": (f_0)=>({
                                                                    ...f_0,
                                                                    icon: e_8.target.value
                                                                })
                                                        }["CheckoutEditor[<input>.onChange > setWalletForm()]"])
                                                }["CheckoutEditor[<input>.onChange]"],
                                                maxLength: 4
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/plans/page.js",
                                                lineNumber: 680,
                                                columnNumber: 157
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 680,
                                        columnNumber: 78
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 669,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "input-label",
                                        children: "Network Label"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 687,
                                        columnNumber: 110
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "input",
                                        placeholder: "e.g. TRON Network (TRC20)",
                                        value: walletForm.network || "",
                                        onChange: {
                                            "CheckoutEditor[<input>.onChange]": (e_9)=>setWalletForm({
                                                    "CheckoutEditor[<input>.onChange > setWalletForm()]": (f_1)=>({
                                                            ...f_1,
                                                            network: e_9.target.value
                                                        })
                                                }["CheckoutEditor[<input>.onChange > setWalletForm()]"])
                                        }["CheckoutEditor[<input>.onChange]"],
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 687,
                                        columnNumber: 162
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 687,
                                columnNumber: 82
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "input-label",
                                        children: "Wallet Address"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 694,
                                        columnNumber: 104
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "input",
                                        value: walletForm.address || "",
                                        onChange: {
                                            "CheckoutEditor[<input>.onChange]": (e_10)=>setWalletForm({
                                                    "CheckoutEditor[<input>.onChange > setWalletForm()]": (f_2)=>({
                                                            ...f_2,
                                                            address: e_10.target.value
                                                        })
                                                }["CheckoutEditor[<input>.onChange > setWalletForm()]"])
                                        }["CheckoutEditor[<input>.onChange]"],
                                        required: true,
                                        style: {
                                            fontFamily: "var(--font-mono)",
                                            fontSize: 12
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 694,
                                        columnNumber: 157
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 694,
                                columnNumber: 76
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
                                            "CheckoutEditor[<button>.onClick]": ()=>setEditWallet(null)
                                        }["CheckoutEditor[<button>.onClick]"],
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 708,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "btn btn-primary",
                                        style: {
                                            flex: 2
                                        },
                                        children: "💾 Save Address"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 712,
                                        columnNumber: 67
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 704,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/plans/page.js",
                        lineNumber: 667,
                        columnNumber: 89
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/plans/page.js",
                lineNumber: 663,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 661,
            columnNumber: 25
        }, this);
        $[92] = editWallet;
        $[93] = saveWalletEdit;
        $[94] = walletForm;
        $[95] = t51;
    } else {
        t51 = $[95];
    }
    let t52;
    if ($[96] !== addNewWallet || $[97] !== addingNew || $[98] !== newWallet.address || $[99] !== newWallet.icon || $[100] !== newWallet.key || $[101] !== newWallet.network || $[102] !== newWallet.symbol) {
        t52 = addingNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-overlay",
            onClick: {
                "CheckoutEditor[<div>.onClick]": ()=>setAddingNew(false)
            }["CheckoutEditor[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plan-edit-modal",
                style: {
                    maxWidth: 500
                },
                onClick: _CheckoutEditorDivOnClick2,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plan-edit-title",
                        children: "➕ Add Payment Method"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/plans/page.js",
                        lineNumber: 728,
                        columnNumber: 47
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plan-edit-sub",
                        children: "Add a new cryptocurrency payment option to the checkout page."
                    }, void 0, false, {
                        fileName: "[project]/app/admin/plans/page.js",
                        lineNumber: 728,
                        columnNumber: 106
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "plan-edit-form",
                        onSubmit: addNewWallet,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "input-label",
                                        children: "Display Name (unique key)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 728,
                                        columnNumber: 289
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "input",
                                        placeholder: "e.g. Tether (BEP20)",
                                        value: newWallet.key,
                                        onChange: {
                                            "CheckoutEditor[<input>.onChange]": (e_12)=>setNewWallet({
                                                    "CheckoutEditor[<input>.onChange > setNewWallet()]": (f_3)=>({
                                                            ...f_3,
                                                            key: e_12.target.value
                                                        })
                                                }["CheckoutEditor[<input>.onChange > setNewWallet()]"])
                                        }["CheckoutEditor[<input>.onChange]"],
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 728,
                                        columnNumber: 353
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 728,
                                columnNumber: 261
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "input-label",
                                                children: "Symbol"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/plans/page.js",
                                                lineNumber: 739,
                                                columnNumber: 42
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "input",
                                                placeholder: "e.g. USDT",
                                                value: newWallet.symbol,
                                                onChange: {
                                                    "CheckoutEditor[<input>.onChange]": (e_13)=>setNewWallet({
                                                            "CheckoutEditor[<input>.onChange > setNewWallet()]": (f_4)=>({
                                                                    ...f_4,
                                                                    symbol: e_13.target.value
                                                                })
                                                        }["CheckoutEditor[<input>.onChange > setNewWallet()]"])
                                                }["CheckoutEditor[<input>.onChange]"],
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/plans/page.js",
                                                lineNumber: 739,
                                                columnNumber: 87
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 739,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "input-label",
                                                children: "Icon (emoji)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/plans/page.js",
                                                lineNumber: 746,
                                                columnNumber: 106
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "input",
                                                placeholder: "\uD83D\uDCB5",
                                                value: newWallet.icon,
                                                onChange: {
                                                    "CheckoutEditor[<input>.onChange]": (e_14)=>setNewWallet({
                                                            "CheckoutEditor[<input>.onChange > setNewWallet()]": (f_5)=>({
                                                                    ...f_5,
                                                                    icon: e_14.target.value
                                                                })
                                                        }["CheckoutEditor[<input>.onChange > setNewWallet()]"])
                                                }["CheckoutEditor[<input>.onChange]"],
                                                maxLength: 4
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/plans/page.js",
                                                lineNumber: 746,
                                                columnNumber: 157
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 746,
                                        columnNumber: 78
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 735,
                                columnNumber: 76
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "input-label",
                                        children: "Network"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 753,
                                        columnNumber: 110
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "input",
                                        placeholder: "e.g. BNB Smart Chain (BEP20)",
                                        value: newWallet.network,
                                        onChange: {
                                            "CheckoutEditor[<input>.onChange]": (e_15)=>setNewWallet({
                                                    "CheckoutEditor[<input>.onChange > setNewWallet()]": (f_6)=>({
                                                            ...f_6,
                                                            network: e_15.target.value
                                                        })
                                                }["CheckoutEditor[<input>.onChange > setNewWallet()]"])
                                        }["CheckoutEditor[<input>.onChange]"],
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 753,
                                        columnNumber: 156
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 753,
                                columnNumber: 82
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "input-label",
                                        children: "Wallet Address"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 760,
                                        columnNumber: 104
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "input",
                                        placeholder: "Your wallet address",
                                        value: newWallet.address,
                                        onChange: {
                                            "CheckoutEditor[<input>.onChange]": (e_16)=>setNewWallet({
                                                    "CheckoutEditor[<input>.onChange > setNewWallet()]": (f_7)=>({
                                                            ...f_7,
                                                            address: e_16.target.value
                                                        })
                                                }["CheckoutEditor[<input>.onChange > setNewWallet()]"])
                                        }["CheckoutEditor[<input>.onChange]"],
                                        required: true,
                                        style: {
                                            fontFamily: "var(--font-mono)",
                                            fontSize: 12
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 760,
                                        columnNumber: 157
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 760,
                                columnNumber: 76
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
                                            "CheckoutEditor[<button>.onClick]": ()=>setAddingNew(false)
                                        }["CheckoutEditor[<button>.onClick]"],
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 774,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "btn btn-primary",
                                        style: {
                                            flex: 2
                                        },
                                        children: "➕ Add Method"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/plans/page.js",
                                        lineNumber: 778,
                                        columnNumber: 67
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 770,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/plans/page.js",
                        lineNumber: 728,
                        columnNumber: 204
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/plans/page.js",
                lineNumber: 726,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 724,
            columnNumber: 24
        }, this);
        $[96] = addNewWallet;
        $[97] = addingNew;
        $[98] = newWallet.address;
        $[99] = newWallet.icon;
        $[100] = newWallet.key;
        $[101] = newWallet.network;
        $[102] = newWallet.symbol;
        $[103] = t52;
    } else {
        t52 = $[103];
    }
    let t53;
    if ($[104] !== t13 || $[105] !== t44 || $[106] !== t50 || $[107] !== t51 || $[108] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fade-up",
            style: t9,
            children: [
                t13,
                t44,
                t50,
                t51,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 794,
            columnNumber: 11
        }, this);
        $[104] = t13;
        $[105] = t44;
        $[106] = t50;
        $[107] = t51;
        $[108] = t52;
        $[109] = t53;
    } else {
        t53 = $[109];
    }
    return t53;
}
_s(CheckoutEditor, "LdezQXryVFweNpIJVnSN7VdSe2U=");
_c = CheckoutEditor;
// ── Main Page ──────────────────────────────────────────────────
function _CheckoutEditorDivOnClick2(e_11) {
    return e_11.stopPropagation();
}
function _CheckoutEditorDivOnClick(e_6) {
    return e_6.stopPropagation();
}
function _CheckoutEditorAnonymous(h) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        children: h
    }, h, false, {
        fileName: "[project]/app/admin/plans/page.js",
        lineNumber: 815,
        columnNumber: 10
    }, this);
}
function AdminPlans() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(61);
    if ($[0] !== "c8e6a64aec1ca921f1188ac5e574c180699b97620f80536dd785984099317b7a") {
        for(let $i = 0; $i < 61; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c8e6a64aec1ca921f1188ac5e574c180699b97620f80536dd785984099317b7a";
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
    const [checkout, setCheckout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_CHECKOUT);
    const [coSaving, setCoSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "AdminPlans[showToast]": (msg)=>{
                setToast(msg);
                setTimeout({
                    "AdminPlans[showToast > setTimeout()]": ()=>setToast("")
                }["AdminPlans[showToast > setTimeout()]"], 3000);
            }
        })["AdminPlans[showToast]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const showToast = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "AdminPlans[useEffect()]": ()=>{
                fetch("/api/plans").then(_AdminPlansUseEffectAnonymous).then({
                    "AdminPlans[useEffect() > (anonymous)()]": (d)=>{
                        setPlans(d.plans || []);
                        setLoading(false);
                    }
                }["AdminPlans[useEffect() > (anonymous)()]"]).catch({
                    "AdminPlans[useEffect() > (anonymous)()]": ()=>setLoading(false)
                }["AdminPlans[useEffect() > (anonymous)()]"]);
                fetch("/api/settings").then(_AdminPlansUseEffectAnonymous2).then({
                    "AdminPlans[useEffect() > (anonymous)()]": (d_0)=>{
                        if (d_0.checkout) {
                            setCheckout(d_0.checkout);
                        }
                    }
                }["AdminPlans[useEffect() > (anonymous)()]"]).catch(_AdminPlansUseEffectAnonymous3);
            }
        })["AdminPlans[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] !== editing) {
        t4 = ({
            "AdminPlans[handlePlanSave]": async (e)=>{
                e.preventDefault();
                const res = await fetch("/api/plans", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(editing)
                });
                if (res.ok) {
                    setPlans({
                        "AdminPlans[handlePlanSave > setPlans()]": (prev)=>prev.map({
                                "AdminPlans[handlePlanSave > setPlans() > prev.map()]": (p)=>p.id === editing.id ? {
                                        ...editing
                                    } : p
                            }["AdminPlans[handlePlanSave > setPlans() > prev.map()]"])
                    }["AdminPlans[handlePlanSave > setPlans()]"]);
                    setSaved(true);
                    setTimeout({
                        "AdminPlans[handlePlanSave > setTimeout()]": ()=>{
                            setEditing(null);
                            setSaved(false);
                        }
                    }["AdminPlans[handlePlanSave > setTimeout()]"], 1400);
                } else {
                    showToast("\u274C Failed to save plan.");
                }
            }
        })["AdminPlans[handlePlanSave]"];
        $[5] = editing;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const handlePlanSave = t4;
    let t5;
    if ($[7] !== checkout) {
        t5 = ({
            "AdminPlans[handleCheckoutSave]": async ()=>{
                setCoSaving(true);
                const res_0 = await fetch("/api/settings", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        checkout
                    })
                });
                if (res_0.ok) {
                    showToast("\u2705 Checkout settings saved!");
                } else {
                    showToast("\u274C Failed to save settings.");
                }
                setCoSaving(false);
            }
        })["AdminPlans[handleCheckoutSave]"];
        $[7] = checkout;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const handleCheckoutSave = t5;
    let t6;
    if ($[9] !== editing) {
        t6 = ({
            "AdminPlans[updateFeature]": (idx, val)=>{
                const f = [
                    ...editing.features || []
                ];
                f[idx] = val;
                setEditing({
                    ...editing,
                    features: f
                });
            }
        })["AdminPlans[updateFeature]"];
        $[9] = editing;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const updateFeature = t6;
    let t7;
    if ($[11] !== editing) {
        t7 = ({
            "AdminPlans[addFeature]": ()=>setEditing({
                    ...editing,
                    features: [
                        ...editing.features || [],
                        ""
                    ]
                })
        })["AdminPlans[addFeature]"];
        $[11] = editing;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const addFeature = t7;
    let t8;
    if ($[13] !== editing) {
        t8 = ({
            "AdminPlans[removeFeature]": (idx_0)=>setEditing({
                    ...editing,
                    features: (editing.features || []).filter({
                        "AdminPlans[removeFeature > (anonymous)()]": (_, i)=>i !== idx_0
                    }["AdminPlans[removeFeature > (anonymous)()]"])
                })
        })["AdminPlans[removeFeature]"];
        $[13] = editing;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    const removeFeature = t8;
    let t9;
    if ($[15] !== editing) {
        t9 = ({
            "AdminPlans[updateNI]": (idx_1, val_0)=>{
                const f_0 = [
                    ...editing.notIncluded || []
                ];
                f_0[idx_1] = val_0;
                setEditing({
                    ...editing,
                    notIncluded: f_0
                });
            }
        })["AdminPlans[updateNI]"];
        $[15] = editing;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    const updateNI = t9;
    let t10;
    if ($[17] !== editing) {
        t10 = ({
            "AdminPlans[addNI]": ()=>setEditing({
                    ...editing,
                    notIncluded: [
                        ...editing.notIncluded || [],
                        ""
                    ]
                })
        })["AdminPlans[addNI]"];
        $[17] = editing;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    const addNI = t10;
    let t11;
    if ($[19] !== editing) {
        t11 = ({
            "AdminPlans[removeNI]": (idx_2)=>setEditing({
                    ...editing,
                    notIncluded: (editing.notIncluded || []).filter({
                        "AdminPlans[removeNI > (anonymous)()]": (__0, i_0)=>i_0 !== idx_2
                    }["AdminPlans[removeNI > (anonymous)()]"])
                })
        })["AdminPlans[removeNI]"];
        $[19] = editing;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    const removeNI = t11;
    let t12;
    let t13;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "admin-topbar-title",
                    children: "Plans & Checkout"
                }, void 0, false, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 1050,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "admin-topbar-sub",
                    children: "Edit pricing, ROI, features and checkout page settings"
                }, void 0, false, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 1050,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 1050,
            columnNumber: 11
        }, this);
        t13 = {
            display: "flex",
            gap: 8
        };
        $[21] = t12;
        $[22] = t13;
    } else {
        t12 = $[21];
        t13 = $[22];
    }
    const t14 = `btn ${tab === "plans" ? "btn-primary" : "btn-ghost"}`;
    let t15;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = ({
            "AdminPlans[<button>.onClick]": ()=>setTab("plans")
        })["AdminPlans[<button>.onClick]"];
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t14,
            onClick: t15,
            children: "📊 Plans"
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 1073,
            columnNumber: 11
        }, this);
        $[24] = t14;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    const t17 = `btn ${tab === "checkout" ? "btn-primary" : "btn-ghost"}`;
    let t18;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "AdminPlans[<button>.onClick]": ()=>setTab("checkout")
        })["AdminPlans[<button>.onClick]"];
        $[26] = t18;
    } else {
        t18 = $[26];
    }
    let t19;
    if ($[27] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t17,
            onClick: t18,
            children: "💳 Checkout Page"
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 1091,
            columnNumber: 11
        }, this);
        $[27] = t17;
        $[28] = t19;
    } else {
        t19 = $[28];
    }
    let t20;
    if ($[29] !== t16 || $[30] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-topbar fade-in",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t13,
                    children: [
                        t16,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 1099,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 1099,
            columnNumber: 11
        }, this);
        $[29] = t16;
        $[30] = t19;
        $[31] = t20;
    } else {
        t20 = $[31];
    }
    let t21;
    if ($[32] !== loading || $[33] !== plans || $[34] !== tab) {
        t21 = tab === "plans" && (loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: 40,
                textAlign: "center",
                color: "var(--text-dim)"
            },
            children: "Loading…"
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 1108,
            columnNumber: 41
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
                                        lineNumber: 1113,
                                        columnNumber: 129
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
                                        lineNumber: 1113,
                                        columnNumber: 184
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
                                        lineNumber: 1115,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 1113,
                                columnNumber: 91
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "admin-plan-card-body",
                                children: [
                                    {
                                        label: "Price",
                                        value: `$${(plan.price || 0).toLocaleString()}/mo`
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
                                lineNumber: 1119,
                                columnNumber: 39
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
                                    lineNumber: 1128,
                                    columnNumber: 94
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/plans/page.js",
                                lineNumber: 1128,
                                columnNumber: 56
                            }, this)
                        ]
                    }, plan.id, true, {
                        fileName: "[project]/app/admin/plans/page.js",
                        lineNumber: 1113,
                        columnNumber: 44
                    }, this)
            }["AdminPlans[plans.map()]"])
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 1112,
            columnNumber: 25
        }, this));
        $[32] = loading;
        $[33] = plans;
        $[34] = tab;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    if ($[36] !== checkout || $[37] !== coSaving || $[38] !== handleCheckoutSave || $[39] !== tab || $[40] !== toast) {
        t22 = tab === "checkout" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckoutEditor, {
            checkout: checkout,
            setCheckout: setCheckout,
            onSave: handleCheckoutSave,
            saving: coSaving,
            toast: toast
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 1145,
            columnNumber: 33
        }, this);
        $[36] = checkout;
        $[37] = coSaving;
        $[38] = handleCheckoutSave;
        $[39] = tab;
        $[40] = toast;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    let t23;
    if ($[42] !== addFeature || $[43] !== addNI || $[44] !== editing || $[45] !== handlePlanSave || $[46] !== removeFeature || $[47] !== removeNI || $[48] !== saved || $[49] !== updateFeature || $[50] !== updateNI) {
        t23 = editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-overlay",
            onClick: {
                "AdminPlans[<div>.onClick]": ()=>setEditing(null)
            }["AdminPlans[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "plan-edit-modal",
                style: {
                    maxWidth: 560,
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
                            lineNumber: 1166,
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
                            lineNumber: 1169,
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
                            lineNumber: 1172,
                            columnNumber: 33
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/plans/page.js",
                    lineNumber: 1163,
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
                            lineNumber: 1175,
                            columnNumber: 66
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "plan-edit-sub",
                            children: "Changes apply immediately to the plans page and checkout."
                        }, void 0, false, {
                            fileName: "[project]/app/admin/plans/page.js",
                            lineNumber: 1177,
                            columnNumber: 44
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "plan-edit-form",
                            onSubmit: handlePlanSave,
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
                                                    lineNumber: 1177,
                                                    columnNumber: 256
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "input",
                                                    value: editing.name,
                                                    onChange: {
                                                        "AdminPlans[<input>.onChange]": (e_1)=>setEditing({
                                                                ...editing,
                                                                name: e_1.target.value
                                                            })
                                                    }["AdminPlans[<input>.onChange]"],
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 1177,
                                                    columnNumber: 304
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 1177,
                                            columnNumber: 228
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "input-label",
                                                    children: "Badge Label"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 1182,
                                                    columnNumber: 104
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "input",
                                                    placeholder: "e.g. Most Popular",
                                                    value: editing.badge || "",
                                                    onChange: {
                                                        "AdminPlans[<input>.onChange]": (e_2)=>setEditing({
                                                                ...editing,
                                                                badge: e_2.target.value
                                                            })
                                                    }["AdminPlans[<input>.onChange]"]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 1182,
                                                    columnNumber: 154
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 1182,
                                            columnNumber: 76
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 1177,
                                    columnNumber: 197
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
                                                    lineNumber: 1187,
                                                    columnNumber: 125
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "input",
                                                    type: "number",
                                                    min: "1",
                                                    max: "100",
                                                    value: editing.roi,
                                                    onChange: {
                                                        "AdminPlans[<input>.onChange]": (e_3)=>setEditing({
                                                                ...editing,
                                                                roi: Number(e_3.target.value)
                                                            })
                                                    }["AdminPlans[<input>.onChange]"],
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 1187,
                                                    columnNumber: 179
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 1187,
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
                                                    lineNumber: 1192,
                                                    columnNumber: 104
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "input",
                                                    type: "number",
                                                    min: "1",
                                                    value: editing.price,
                                                    onChange: {
                                                        "AdminPlans[<input>.onChange]": (e_4)=>setEditing({
                                                                ...editing,
                                                                price: Number(e_4.target.value)
                                                            })
                                                    }["AdminPlans[<input>.onChange]"],
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 1192,
                                                    columnNumber: 160
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 1192,
                                            columnNumber: 76
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 1187,
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
                                                    lineNumber: 1197,
                                                    columnNumber: 141
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "input",
                                                    type: "number",
                                                    min: "1",
                                                    value: editing.minDeposit || 0,
                                                    onChange: {
                                                        "AdminPlans[<input>.onChange]": (e_5)=>setEditing({
                                                                ...editing,
                                                                minDeposit: Number(e_5.target.value)
                                                            })
                                                    }["AdminPlans[<input>.onChange]"]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 1197,
                                                    columnNumber: 195
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 1197,
                                            columnNumber: 113
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "input-label",
                                                    children: "Color"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 1202,
                                                    columnNumber: 88
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
                                                            value: editing.color || "",
                                                            onChange: {
                                                                "AdminPlans[<input>.onChange]": (e_6)=>setEditing({
                                                                        ...editing,
                                                                        color: e_6.target.value
                                                                    })
                                                            }["AdminPlans[<input>.onChange]"]
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/plans/page.js",
                                                            lineNumber: 1206,
                                                            columnNumber: 20
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "color",
                                                            value: editing.color || "#00D4AA",
                                                            onChange: {
                                                                "AdminPlans[<input>.onChange]": (e_7)=>setEditing({
                                                                        ...editing,
                                                                        color: e_7.target.value
                                                                    })
                                                            }["AdminPlans[<input>.onChange]"],
                                                            style: {
                                                                width: 40,
                                                                height: 40,
                                                                border: "none",
                                                                borderRadius: 8,
                                                                cursor: "pointer"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/plans/page.js",
                                                            lineNumber: 1211,
                                                            columnNumber: 56
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 1202,
                                                    columnNumber: 132
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 1202,
                                            columnNumber: 60
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 1197,
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
                                            lineNumber: 1222,
                                            columnNumber: 70
                                        }, this),
                                        (editing.features || []).map({
                                            "AdminPlans[(anonymous)()]": (f_1, i_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: 8,
                                                        marginBottom: 8
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "input",
                                                            value: f_1,
                                                            onChange: {
                                                                "AdminPlans[(anonymous)() > <input>.onChange]": (e_8)=>updateFeature(i_2, e_8.target.value)
                                                            }["AdminPlans[(anonymous)() > <input>.onChange]"],
                                                            placeholder: "Feature description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/plans/page.js",
                                                            lineNumber: 1227,
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
                                                            lineNumber: 1229,
                                                            columnNumber: 106
                                                        }, this)
                                                    ]
                                                }, i_2, true, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 1223,
                                                    columnNumber: 60
                                                }, this)
                                        }["AdminPlans[(anonymous)()]"]),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "btn btn-ghost btn-sm",
                                            onClick: addFeature,
                                            children: "+ Add Feature"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 1239,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 1222,
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
                                            lineNumber: 1239,
                                            columnNumber: 179
                                        }, this),
                                        (editing.notIncluded || []).map({
                                            "AdminPlans[(anonymous)()]": (f_2, i_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: 8,
                                                        marginBottom: 8
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "input",
                                                            value: f_2,
                                                            onChange: {
                                                                "AdminPlans[(anonymous)() > <input>.onChange]": (e_9)=>updateNI(i_3, e_9.target.value)
                                                            }["AdminPlans[(anonymous)() > <input>.onChange]"],
                                                            placeholder: "Not included item"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/plans/page.js",
                                                            lineNumber: 1244,
                                                            columnNumber: 20
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: {
                                                                "AdminPlans[(anonymous)() > <button>.onClick]": ()=>removeNI(i_3)
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
                                                            lineNumber: 1246,
                                                            columnNumber: 104
                                                        }, this)
                                                    ]
                                                }, i_3, true, {
                                                    fileName: "[project]/app/admin/plans/page.js",
                                                    lineNumber: 1240,
                                                    columnNumber: 60
                                                }, this)
                                        }["AdminPlans[(anonymous)()]"]),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "btn btn-ghost btn-sm",
                                            onClick: addNI,
                                            children: "+ Add Item"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/plans/page.js",
                                            lineNumber: 1256,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 1239,
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
                                            lineNumber: 1260,
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
                                            lineNumber: 1264,
                                            columnNumber: 65
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/plans/page.js",
                                    lineNumber: 1256,
                                    columnNumber: 143
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/plans/page.js",
                            lineNumber: 1177,
                            columnNumber: 138
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/app/admin/plans/page.js",
                lineNumber: 1159,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 1157,
            columnNumber: 22
        }, this);
        $[42] = addFeature;
        $[43] = addNI;
        $[44] = editing;
        $[45] = handlePlanSave;
        $[46] = removeFeature;
        $[47] = removeNI;
        $[48] = saved;
        $[49] = updateFeature;
        $[50] = updateNI;
        $[51] = t23;
    } else {
        t23 = $[51];
    }
    let t24;
    if ($[52] !== tab || $[53] !== toast) {
        t24 = toast && tab === "plans" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-toast",
            children: toast
        }, void 0, false, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 1282,
            columnNumber: 39
        }, this);
        $[52] = tab;
        $[53] = toast;
        $[54] = t24;
    } else {
        t24 = $[54];
    }
    let t25;
    if ($[55] !== t20 || $[56] !== t21 || $[57] !== t22 || $[58] !== t23 || $[59] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminLayout"], {
            children: [
                t20,
                t21,
                t22,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/plans/page.js",
            lineNumber: 1291,
            columnNumber: 11
        }, this);
        $[55] = t20;
        $[56] = t21;
        $[57] = t22;
        $[58] = t23;
        $[59] = t24;
        $[60] = t25;
    } else {
        t25 = $[60];
    }
    return t25;
}
_s1(AdminPlans, "Zuro1aiIV8lLzSPkD+0kcdaAgnI=");
_c1 = AdminPlans;
function _AdminPlansDivOnClick(e_0) {
    return e_0.stopPropagation();
}
function _AdminPlansPlansMapAnonymous(r_1, i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "admin-plan-stat-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "admin-plan-stat-label",
                children: r_1.label
            }, void 0, false, {
                fileName: "[project]/app/admin/plans/page.js",
                lineNumber: 1307,
                columnNumber: 57
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "admin-plan-stat-value",
                children: r_1.value
            }, void 0, false, {
                fileName: "[project]/app/admin/plans/page.js",
                lineNumber: 1307,
                columnNumber: 115
            }, this)
        ]
    }, i_1, true, {
        fileName: "[project]/app/admin/plans/page.js",
        lineNumber: 1307,
        columnNumber: 10
    }, this);
}
function _AdminPlansUseEffectAnonymous3() {}
function _AdminPlansUseEffectAnonymous2(r_0) {
    return r_0.json();
}
function _AdminPlansUseEffectAnonymous(r) {
    return r.json();
}
var _c, _c1;
__turbopack_context__.k.register(_c, "CheckoutEditor");
__turbopack_context__.k.register(_c1, "AdminPlans");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3507be05._.js.map