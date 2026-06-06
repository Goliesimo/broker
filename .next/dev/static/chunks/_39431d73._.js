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
"[project]/app/admin/subscriptions/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminSubscriptions
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
function AdminSubscriptions() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62);
    if ($[0] !== "86a7c8d78724be3b2b424604bb115840ec713508b665967afb58bce19330d674") {
        for(let $i = 0; $i < 62; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "86a7c8d78724be3b2b424604bb115840ec713508b665967afb58bce19330d674";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [subs, setSubs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pending");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "AdminSubscriptions[useEffect()]": ()=>{
                fetch("/api/subscriptions").then(_AdminSubscriptionsUseEffectAnonymous).then({
                    "AdminSubscriptions[useEffect() > (anonymous)()]": (d)=>{
                        setSubs(d.subscriptions || []);
                        setLoading(false);
                    }
                }["AdminSubscriptions[useEffect() > (anonymous)()]"]).catch({
                    "AdminSubscriptions[useEffect() > (anonymous)()]": ()=>setLoading(false)
                }["AdminSubscriptions[useEffect() > (anonymous)()]"]);
            }
        })["AdminSubscriptions[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "AdminSubscriptions[showToast]": (msg)=>{
                setToast(msg);
                setTimeout({
                    "AdminSubscriptions[showToast > setTimeout()]": ()=>setToast("")
                }["AdminSubscriptions[showToast > setTimeout()]"], 3500);
            }
        })["AdminSubscriptions[showToast]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const showToast = t4;
    let t5;
    if ($[6] !== notes) {
        t5 = ({
            "AdminSubscriptions[handleAction]": async (sub, status)=>{
                const note = notes[sub.id] || "";
                const res = await fetch("/api/subscriptions", {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        subId: sub.id,
                        status,
                        note,
                        userId: sub.userId,
                        planId: sub.planId
                    })
                });
                const data = await res.json();
                if (res.ok) {
                    setSubs({
                        "AdminSubscriptions[handleAction > setSubs()]": (prev)=>prev.map({
                                "AdminSubscriptions[handleAction > setSubs() > prev.map()]": (s)=>s.id === sub.id ? {
                                        ...s,
                                        status,
                                        note
                                    } : s
                            }["AdminSubscriptions[handleAction > setSubs() > prev.map()]"])
                    }["AdminSubscriptions[handleAction > setSubs()]"]);
                    showToast(status === "approved" ? `✅ ${sub.userName}'s ${sub.planName} plan approved!` : `❌ ${sub.userName}'s submission rejected.`);
                } else {
                    showToast("Error: " + data.error);
                }
            }
        })["AdminSubscriptions[handleAction]"];
        $[6] = notes;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const handleAction = t5;
    let t6;
    if ($[8] !== filter || $[9] !== subs) {
        t6 = filter === "all" ? subs : subs.filter({
            "AdminSubscriptions[subs.filter()]": (s_0)=>s_0.status === filter
        }["AdminSubscriptions[subs.filter()]"]);
        $[8] = filter;
        $[9] = subs;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const filtered = t6;
    let t7;
    if ($[11] !== subs) {
        t7 = subs.filter(_AdminSubscriptionsSubsFilter);
        $[11] = subs;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const pending = t7.length;
    let t8;
    if ($[13] !== subs) {
        t8 = subs.filter(_AdminSubscriptionsSubsFilter2);
        $[13] = subs;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    const approved = t8.length;
    let t9;
    if ($[15] !== subs) {
        t9 = subs.filter(_AdminSubscriptionsSubsFilter3);
        $[15] = subs;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    const rejected = t9.length;
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "admin-topbar-title",
                    children: "Plan Subscriptions"
                }, void 0, false, {
                    fileName: "[project]/app/admin/subscriptions/page.js",
                    lineNumber: 162,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "admin-topbar-sub",
                    children: "Review and approve payment submissions"
                }, void 0, false, {
                    fileName: "[project]/app/admin/subscriptions/page.js",
                    lineNumber: 162,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/subscriptions/page.js",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== pending) {
        t11 = pending > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: "rgba(255,184,0,0.1)",
                border: "1px solid rgba(255,184,0,0.3)",
                borderRadius: "var(--radius)",
                padding: "10px 16px",
                fontSize: 13,
                color: "var(--gold)",
                fontWeight: 600
            },
            children: [
                "⚠ ",
                pending,
                " pending review"
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/subscriptions/page.js",
            lineNumber: 169,
            columnNumber: 26
        }, this);
        $[18] = pending;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-topbar fade-in",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/subscriptions/page.js",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== subs.length) {
        t13 = {
            label: "Total Submissions",
            value: subs.length,
            color: "var(--text)"
        };
        $[22] = subs.length;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== pending) {
        t14 = {
            label: "Pending Review",
            value: pending,
            color: "var(--gold)"
        };
        $[24] = pending;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== approved) {
        t15 = {
            label: "Approved",
            value: approved,
            color: "var(--teal)"
        };
        $[26] = approved;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== rejected) {
        t16 = {
            label: "Rejected",
            value: rejected,
            color: "var(--red)"
        };
        $[28] = rejected;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== t13 || $[31] !== t14 || $[32] !== t15 || $[33] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sub-stats-grid fade-up",
            children: [
                t13,
                t14,
                t15,
                t16
            ].map(_AdminSubscriptionsAnonymous)
        }, void 0, false, {
            fileName: "[project]/app/admin/subscriptions/page.js",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[30] = t13;
        $[31] = t14;
        $[32] = t15;
        $[33] = t16;
        $[34] = t17;
    } else {
        t17 = $[34];
    }
    let t18;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = [
            "all",
            "pending",
            "approved",
            "rejected"
        ];
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== filter || $[37] !== pending) {
        t19 = t18.map({
            "AdminSubscriptions[(anonymous)()]": (f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `filter-btn${filter === f ? " active" : ""}`,
                    style: {
                        textTransform: "capitalize"
                    },
                    onClick: {
                        "AdminSubscriptions[(anonymous)() > <button>.onClick]": ()=>setFilter(f)
                    }["AdminSubscriptions[(anonymous)() > <button>.onClick]"],
                    children: [
                        f,
                        " ",
                        f === "pending" && pending > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                background: "var(--gold)",
                                color: "#050B18",
                                borderRadius: 99,
                                padding: "0 6px",
                                fontSize: 10,
                                fontWeight: 700,
                                marginLeft: 4
                            },
                            children: pending
                        }, void 0, false, {
                            fileName: "[project]/app/admin/subscriptions/page.js",
                            lineNumber: 264,
                            columnNumber: 105
                        }, this)
                    ]
                }, f, true, {
                    fileName: "[project]/app/admin/subscriptions/page.js",
                    lineNumber: 260,
                    columnNumber: 49
                }, this)
        }["AdminSubscriptions[(anonymous)()]"]);
        $[36] = filter;
        $[37] = pending;
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            marginLeft: "auto",
            fontSize: 13,
            color: "var(--text-dim)"
        };
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    let t21;
    if ($[40] !== filtered.length) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t20,
            children: [
                filtered.length,
                " results"
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/subscriptions/page.js",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[40] = filtered.length;
        $[41] = t21;
    } else {
        t21 = $[41];
    }
    let t22;
    if ($[42] !== t19 || $[43] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sub-filters fade-up-2",
            children: [
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/subscriptions/page.js",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[42] = t19;
        $[43] = t21;
        $[44] = t22;
    } else {
        t22 = $[44];
    }
    let t23;
    if ($[45] !== filter || $[46] !== filtered || $[47] !== handleAction || $[48] !== loading || $[49] !== notes) {
        t23 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: 60,
                textAlign: "center",
                color: "var(--text-dim)"
            },
            children: "Loading submissions…"
        }, void 0, false, {
            fileName: "[project]/app/admin/subscriptions/page.js",
            lineNumber: 310,
            columnNumber: 21
        }, this) : filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: 60,
                textAlign: "center",
                color: "var(--text-dim)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: 40,
                        marginBottom: 12
                    },
                    children: "📭"
                }, void 0, false, {
                    fileName: "[project]/app/admin/subscriptions/page.js",
                    lineNumber: 318,
                    columnNumber: 8
                }, this),
                "No ",
                filter === "all" ? "" : filter,
                " submissions yet."
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/subscriptions/page.js",
            lineNumber: 314,
            columnNumber: 61
        }, this) : filtered.map({
            "AdminSubscriptions[filtered.map()]": (sub_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sub-card fade-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sub-card-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 40,
                                                height: 40,
                                                borderRadius: "50%",
                                                background: "linear-gradient(135deg,var(--teal),var(--blue))",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: 700,
                                                color: "#050B18",
                                                fontSize: 14
                                            },
                                            children: sub_0.userName?.split(" ").map(_AdminSubscriptionsFilteredMapAnonymous).join("").toUpperCase().slice(0, 2)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 326,
                                            columnNumber: 14
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: 600,
                                                        fontSize: 14
                                                    },
                                                    children: sub_0.userName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                                    lineNumber: 337,
                                                    columnNumber: 135
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 12,
                                                        color: "var(--text-dim)"
                                                    },
                                                    children: sub_0.userEmail
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                                    lineNumber: 340,
                                                    columnNumber: 40
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 337,
                                            columnNumber: 130
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                    lineNumber: 322,
                                    columnNumber: 134
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: PLAN_COLORS[sub_0.planId],
                                                fontWeight: 700,
                                                fontSize: 14
                                            },
                                            children: [
                                                sub_0.planName,
                                                " Plan"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 347,
                                            columnNumber: 14
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-mono)",
                                                fontWeight: 700,
                                                color: "var(--teal)",
                                                fontSize: 15
                                            },
                                            children: [
                                                "$",
                                                sub_0.planPrice?.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 351,
                                            columnNumber: 44
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `badge badge-${sub_0.status === "approved" ? "active" : sub_0.status === "rejected" ? "rejected" : "pending"}`,
                                            children: sub_0.status
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 356,
                                            columnNumber: 59
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                    lineNumber: 343,
                                    columnNumber: 53
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/subscriptions/page.js",
                            lineNumber: 322,
                            columnNumber: 103
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sub-card-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sub-info-label",
                                            children: "Transaction ID (TXID)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 356,
                                            columnNumber: 257
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sub-info-value sub-info-mono",
                                            children: sub_0.txid
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 356,
                                            columnNumber: 316
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sub-info-label",
                                                    children: "Crypto Used"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                                    lineNumber: 358,
                                                    columnNumber: 16
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sub-info-value",
                                                    children: sub_0.crypto
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                                    lineNumber: 358,
                                                    columnNumber: 65
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 356,
                                            columnNumber: 380
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sub-info-label",
                                                    children: "Submitted"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                                    lineNumber: 360,
                                                    columnNumber: 16
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sub-info-value",
                                                    children: new Date(sub_0.submittedAt).toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                                    lineNumber: 360,
                                                    columnNumber: 63
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 358,
                                            columnNumber: 123
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                    lineNumber: 356,
                                    columnNumber: 252
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sub-info-label",
                                            children: "Sender Wallet Address"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 360,
                                            columnNumber: 164
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sub-info-value sub-info-mono",
                                            children: sub_0.senderWallet
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 360,
                                            columnNumber: 223
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sub-info-label",
                                                    children: "Destination Wallet"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                                    lineNumber: 362,
                                                    columnNumber: 16
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sub-info-value sub-info-mono",
                                                    children: sub_0.walletAddress
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                                    lineNumber: 362,
                                                    columnNumber: 72
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 360,
                                            columnNumber: 295
                                        }, this),
                                        sub_0.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sub-info-label",
                                                    children: "Admin Note"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                                    lineNumber: 364,
                                                    columnNumber: 16
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "sub-info-value",
                                                    style: {
                                                        color: "var(--text-dim)"
                                                    },
                                                    children: sub_0.note
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                                    lineNumber: 364,
                                                    columnNumber: 64
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 362,
                                            columnNumber: 166
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                    lineNumber: 360,
                                    columnNumber: 159
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sub-info-label",
                                            children: "Payment Screenshot"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 366,
                                            columnNumber: 54
                                        }, this),
                                        sub_0.screenshotBase64 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: sub_0.screenshotBase64,
                                            alt: "Payment proof",
                                            className: "sub-screenshot",
                                            onClick: {
                                                "AdminSubscriptions[filtered.map() > <img>.onClick]": ()=>setPreview(sub_0.screenshotBase64)
                                            }["AdminSubscriptions[filtered.map() > <img>.onClick]"]
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 366,
                                            columnNumber: 136
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sub-screenshot-placeholder",
                                            children: "No screenshot uploaded"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 368,
                                            columnNumber: 75
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                    lineNumber: 366,
                                    columnNumber: 49
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/subscriptions/page.js",
                            lineNumber: 356,
                            columnNumber: 221
                        }, this),
                        sub_0.status === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sub-card-foot",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "note-input",
                                    rows: 1,
                                    placeholder: "Optional note to user (e.g. reason for rejection)\u2026",
                                    value: notes[sub_0.id] || "",
                                    onChange: {
                                        "AdminSubscriptions[filtered.map() > <textarea>.onChange]": (e)=>setNotes({
                                                "AdminSubscriptions[filtered.map() > <textarea>.onChange > setNotes()]": (prev_0)=>({
                                                        ...prev_0,
                                                        [sub_0.id]: e.target.value
                                                    })
                                            }["AdminSubscriptions[filtered.map() > <textarea>.onChange > setNotes()]"])
                                    }["AdminSubscriptions[filtered.map() > <textarea>.onChange]"],
                                    style: {
                                        flex: 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                    lineNumber: 368,
                                    columnNumber: 222
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 8,
                                        flexShrink: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "reject-btn",
                                            style: {
                                                padding: "8px 16px",
                                                fontSize: 13
                                            },
                                            onClick: {
                                                "AdminSubscriptions[filtered.map() > <button>.onClick]": ()=>handleAction(sub_0, "rejected")
                                            }["AdminSubscriptions[filtered.map() > <button>.onClick]"],
                                            children: "✗ Reject"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 381,
                                            columnNumber: 14
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "approve-btn",
                                            style: {
                                                padding: "8px 20px",
                                                fontSize: 13
                                            },
                                            onClick: {
                                                "AdminSubscriptions[filtered.map() > <button>.onClick]": ()=>handleAction(sub_0, "approved")
                                            }["AdminSubscriptions[filtered.map() > <button>.onClick]"],
                                            children: "\u2713 Approve & Activate"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/subscriptions/page.js",
                                            lineNumber: 386,
                                            columnNumber: 90
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/subscriptions/page.js",
                                    lineNumber: 377,
                                    columnNumber: 16
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/subscriptions/page.js",
                            lineNumber: 368,
                            columnNumber: 191
                        }, this),
                        sub_0.status !== "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sub-card-foot",
                            style: {
                                justifyContent: "flex-end"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 12,
                                    color: "var(--text-muted)"
                                },
                                children: [
                                    "Reviewed ",
                                    sub_0.reviewedAt ? new Date(sub_0.reviewedAt).toLocaleString() : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/subscriptions/page.js",
                                lineNumber: 393,
                                columnNumber: 12
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/subscriptions/page.js",
                            lineNumber: 391,
                            columnNumber: 155
                        }, this)
                    ]
                }, sub_0.id, true, {
                    fileName: "[project]/app/admin/subscriptions/page.js",
                    lineNumber: 322,
                    columnNumber: 54
                }, this)
        }["AdminSubscriptions[filtered.map()]"]);
        $[45] = filter;
        $[46] = filtered;
        $[47] = handleAction;
        $[48] = loading;
        $[49] = notes;
        $[50] = t23;
    } else {
        t23 = $[50];
    }
    let t24;
    if ($[51] !== preview) {
        t24 = preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fullscreen-overlay",
            onClick: {
                "AdminSubscriptions[<div>.onClick]": ()=>setPreview(null)
            }["AdminSubscriptions[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: preview,
                alt: "Screenshot preview"
            }, void 0, false, {
                fileName: "[project]/app/admin/subscriptions/page.js",
                lineNumber: 411,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/subscriptions/page.js",
            lineNumber: 409,
            columnNumber: 22
        }, this);
        $[51] = preview;
        $[52] = t24;
    } else {
        t24 = $[52];
    }
    let t25;
    if ($[53] !== toast) {
        t25 = toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-toast",
            children: toast
        }, void 0, false, {
            fileName: "[project]/app/admin/subscriptions/page.js",
            lineNumber: 419,
            columnNumber: 20
        }, this);
        $[53] = toast;
        $[54] = t25;
    } else {
        t25 = $[54];
    }
    let t26;
    if ($[55] !== t12 || $[56] !== t17 || $[57] !== t22 || $[58] !== t23 || $[59] !== t24 || $[60] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminLayout"], {
            children: [
                t12,
                t17,
                t22,
                t23,
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/subscriptions/page.js",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        $[55] = t12;
        $[56] = t17;
        $[57] = t22;
        $[58] = t23;
        $[59] = t24;
        $[60] = t25;
        $[61] = t26;
    } else {
        t26 = $[61];
    }
    return t26;
}
_s(AdminSubscriptions, "6ffZxigf91wq8dwiLJmueOfqN+M=");
_c = AdminSubscriptions;
function _AdminSubscriptionsFilteredMapAnonymous(n) {
    return n[0];
}
function _AdminSubscriptionsAnonymous(s_4, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "admin-stat-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-stat-label",
                children: s_4.label
            }, void 0, false, {
                fileName: "[project]/app/admin/subscriptions/page.js",
                lineNumber: 444,
                columnNumber: 51
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-stat-value",
                style: {
                    color: s_4.color
                },
                children: s_4.value
            }, void 0, false, {
                fileName: "[project]/app/admin/subscriptions/page.js",
                lineNumber: 444,
                columnNumber: 102
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/app/admin/subscriptions/page.js",
        lineNumber: 444,
        columnNumber: 10
    }, this);
}
function _AdminSubscriptionsSubsFilter3(s_3) {
    return s_3.status === "rejected";
}
function _AdminSubscriptionsSubsFilter2(s_2) {
    return s_2.status === "approved";
}
function _AdminSubscriptionsSubsFilter(s_1) {
    return s_1.status === "pending";
}
function _AdminSubscriptionsUseEffectAnonymous(r) {
    return r.json();
}
var _c;
__turbopack_context__.k.register(_c, "AdminSubscriptions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_39431d73._.js.map