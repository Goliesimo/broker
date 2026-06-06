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
"[project]/app/admin/users/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminUsers
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
function AdminUsers() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(80);
    if ($[0] !== "75d6aa2b1064c7fec3d215218a322b801f6dc0a22559a956e2dcc56b069fcf36") {
        for(let $i = 0; $i < 80; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "75d6aa2b1064c7fec3d215218a322b801f6dc0a22559a956e2dcc56b069fcf36";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [balModal, setBalModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [balType, setBalType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("add");
    const [balField, setBalField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("balance");
    const [balAmount, setBalAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [balRemark, setBalRemark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [balLoading, setBalLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "AdminUsers[useEffect()]": ()=>{
                fetch("/api/users").then(_AdminUsersUseEffectAnonymous).then({
                    "AdminUsers[useEffect() > (anonymous)()]": (d)=>{
                        setUsers(d.users || []);
                        setLoading(false);
                    }
                }["AdminUsers[useEffect() > (anonymous)()]"]).catch({
                    "AdminUsers[useEffect() > (anonymous)()]": ()=>setLoading(false)
                }["AdminUsers[useEffect() > (anonymous)()]"]);
            }
        })["AdminUsers[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "AdminUsers[showToast]": (msg)=>{
                setToast(msg);
                setTimeout({
                    "AdminUsers[showToast > setTimeout()]": ()=>setToast("")
                }["AdminUsers[showToast > setTimeout()]"], 3500);
            }
        })["AdminUsers[showToast]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const showToast = t3;
    let T0;
    let handleBalanceSubmit;
    let handleDelete;
    let handleStatus;
    let initials;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[5] !== balAmount || $[6] !== balField || $[7] !== balModal || $[8] !== balRemark || $[9] !== balType || $[10] !== filter || $[11] !== loading || $[12] !== search || $[13] !== selected?.id || $[14] !== users) {
        let t9;
        if ($[25] !== filter || $[26] !== search) {
            t9 = ({
                "AdminUsers[users.filter()]": (u)=>{
                    const matchSearch = u.name?.toLowerCase().includes(search.toLowerCase()) || u.email?.toLowerCase().includes(search.toLowerCase());
                    const matchFilter = filter === "all" || u.status === filter || u.plan === filter;
                    return matchSearch && matchFilter;
                }
            })["AdminUsers[users.filter()]"];
            $[25] = filter;
            $[26] = search;
            $[27] = t9;
        } else {
            t9 = $[27];
        }
        const filtered = users.filter(t9);
        let t10;
        if ($[28] !== selected?.id) {
            t10 = ({
                "AdminUsers[handleStatus]": async (userId, status)=>{
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
                    setUsers({
                        "AdminUsers[handleStatus > setUsers()]": (prev)=>prev.map({
                                "AdminUsers[handleStatus > setUsers() > prev.map()]": (u_0)=>u_0.id === userId ? {
                                        ...u_0,
                                        status
                                    } : u_0
                            }["AdminUsers[handleStatus > setUsers() > prev.map()]"])
                    }["AdminUsers[handleStatus > setUsers()]"]);
                    if (selected?.id === userId) {
                        setSelected({
                            "AdminUsers[handleStatus > setSelected()]": (prev_0)=>({
                                    ...prev_0,
                                    status
                                })
                        }["AdminUsers[handleStatus > setSelected()]"]);
                    }
                }
            })["AdminUsers[handleStatus]"];
            $[28] = selected?.id;
            $[29] = t10;
        } else {
            t10 = $[29];
        }
        handleStatus = t10;
        let t11;
        if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = ({
                "AdminUsers[handleDelete]": async (userId_0)=>{
                    if (!confirm("Delete this user permanently?")) {
                        return;
                    }
                    await fetch(`/api/users?id=${userId_0}`, {
                        method: "DELETE"
                    });
                    setUsers({
                        "AdminUsers[handleDelete > setUsers()]": (prev_1)=>prev_1.filter({
                                "AdminUsers[handleDelete > setUsers() > prev_1.filter()]": (u_1)=>u_1.id !== userId_0
                            }["AdminUsers[handleDelete > setUsers() > prev_1.filter()]"])
                    }["AdminUsers[handleDelete > setUsers()]"]);
                    setSelected(null);
                }
            })["AdminUsers[handleDelete]"];
            $[30] = t11;
        } else {
            t11 = $[30];
        }
        handleDelete = t11;
        let t12;
        if ($[31] !== balAmount || $[32] !== balField || $[33] !== balModal || $[34] !== balRemark || $[35] !== balType || $[36] !== selected?.id) {
            t12 = ({
                "AdminUsers[handleBalanceSubmit]": async (e)=>{
                    e.preventDefault();
                    const amount = parseFloat(balAmount);
                    if (!amount || amount <= 0) {
                        return;
                    }
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
                        setUsers({
                            "AdminUsers[handleBalanceSubmit > setUsers()]": (prev_2)=>prev_2.map({
                                    "AdminUsers[handleBalanceSubmit > setUsers() > prev_2.map()]": (u_2)=>u_2.id === user.id ? {
                                            ...u_2,
                                            [balField]: updated
                                        } : u_2
                                }["AdminUsers[handleBalanceSubmit > setUsers() > prev_2.map()]"])
                        }["AdminUsers[handleBalanceSubmit > setUsers()]"]);
                        if (selected?.id === user.id) {
                            setSelected({
                                "AdminUsers[handleBalanceSubmit > setSelected()]": (prev_3)=>({
                                        ...prev_3,
                                        [balField]: updated
                                    })
                            }["AdminUsers[handleBalanceSubmit > setSelected()]"]);
                        }
                        showToast(`✅ ${balType === "add" ? "Added" : "Subtracted"} $${amount.toLocaleString()} ${balType === "add" ? "to" : "from"} ${user.name}'s ${balField}.${balRemark ? ` Remark: "${balRemark}"` : ""}`);
                        setBalModal(null);
                        setBalAmount("");
                        setBalRemark("");
                    } else {
                        showToast("\u274C Failed to update balance.");
                    }
                    setBalLoading(false);
                }
            })["AdminUsers[handleBalanceSubmit]"];
            $[31] = balAmount;
            $[32] = balField;
            $[33] = balModal;
            $[34] = balRemark;
            $[35] = balType;
            $[36] = selected?.id;
            $[37] = t12;
        } else {
            t12 = $[37];
        }
        handleBalanceSubmit = t12;
        initials = _AdminUsersInitials;
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminLayout"];
        let t13;
        if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-topbar-title",
                children: "User Management"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 232,
                columnNumber: 13
            }, this);
            $[38] = t13;
        } else {
            t13 = $[38];
        }
        if ($[39] !== users.length) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "admin-topbar fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t13,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "admin-topbar-sub",
                            children: [
                                users.length,
                                " total users registered"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/users/page.js",
                            lineNumber: 238,
                            columnNumber: 60
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/users/page.js",
                    lineNumber: 238,
                    columnNumber: 50
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 238,
                columnNumber: 12
            }, this);
            $[39] = users.length;
            $[40] = t7;
        } else {
            t7 = $[40];
        }
        let t14;
        if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "search-icon",
                children: "🔍"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 246,
                columnNumber: 13
            }, this);
            $[41] = t14;
        } else {
            t14 = $[41];
        }
        let t15;
        if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = ({
                "AdminUsers[<input>.onChange]": (e_0)=>setSearch(e_0.target.value)
            })["AdminUsers[<input>.onChange]"];
            $[42] = t15;
        } else {
            t15 = $[42];
        }
        let t16;
        if ($[43] !== search) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search-wrap",
                children: [
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "input search-input",
                        placeholder: "Search by name or email\u2026",
                        value: search,
                        onChange: t15
                    }, void 0, false, {
                        fileName: "[project]/app/admin/users/page.js",
                        lineNumber: 262,
                        columnNumber: 47
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 262,
                columnNumber: 13
            }, this);
            $[43] = search;
            $[44] = t16;
        } else {
            t16 = $[44];
        }
        let t17;
        if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = [
                "all",
                "active",
                "suspended",
                "starter",
                "growth",
                "pro",
                "elite",
                "titan"
            ];
            $[45] = t17;
        } else {
            t17 = $[45];
        }
        let t18;
        if ($[46] !== filter) {
            t18 = t17.map({
                "AdminUsers[(anonymous)()]": (f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `filter-btn${filter === f ? " active" : ""}`,
                        onClick: {
                            "AdminUsers[(anonymous)() > <button>.onClick]": ()=>setFilter(f)
                        }["AdminUsers[(anonymous)() > <button>.onClick]"],
                        style: {
                            textTransform: "capitalize"
                        },
                        children: f
                    }, f, false, {
                        fileName: "[project]/app/admin/users/page.js",
                        lineNumber: 278,
                        columnNumber: 43
                    }, this)
            }["AdminUsers[(anonymous)()]"]);
            $[46] = filter;
            $[47] = t18;
        } else {
            t18 = $[47];
        }
        if ($[48] !== t16 || $[49] !== t18) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "users-filters fade-up",
                children: [
                    t16,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 290,
                columnNumber: 12
            }, this);
            $[48] = t16;
            $[49] = t18;
            $[50] = t8;
        } else {
            t8 = $[50];
        }
        t4 = "users-table-card fade-up-2";
        let t19;
        if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "users-table-title",
                children: "All Users"
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 300,
                columnNumber: 13
            }, this);
            $[51] = t19;
        } else {
            t19 = $[51];
        }
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "users-table-header",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "users-count",
                    children: [
                        filtered.length,
                        " results"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/users/page.js",
                    lineNumber: 305,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/users/page.js",
            lineNumber: 305,
            columnNumber: 10
        }, this);
        t6 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: 40,
                textAlign: "center",
                color: "var(--text-dim)"
            },
            children: "Loading users…"
        }, void 0, false, {
            fileName: "[project]/app/admin/users/page.js",
            lineNumber: 306,
            columnNumber: 20
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "table",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            "User",
                            "Plan",
                            "Balance",
                            "Invested",
                            "Status",
                            "Joined",
                            "Actions"
                        ].map(_AdminUsersAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/users/page.js",
                        lineNumber: 310,
                        columnNumber: 63
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/users/page.js",
                    lineNumber: 310,
                    columnNumber: 56
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: [
                        filtered.map({
                            "AdminUsers[filtered.map()]": (u_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 10
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "user-avatar",
                                                        children: initials(u_3.name)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 315,
                                                        columnNumber: 18
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "user-name",
                                                                children: u_3.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 315,
                                                                columnNumber: 78
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "user-email",
                                                                children: u_3.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/users/page.js",
                                                                lineNumber: 315,
                                                                columnNumber: 121
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 315,
                                                        columnNumber: 73
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 311,
                                                columnNumber: 69
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 311,
                                            columnNumber: 65
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "plan-chip",
                                                style: {
                                                    color: PLAN_COLORS[u_3.plan] || "var(--text-dim)",
                                                    borderColor: PLAN_COLORS[u_3.plan] || "var(--border)"
                                                },
                                                children: u_3.plan
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 315,
                                                columnNumber: 187
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 315,
                                            columnNumber: 183
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                fontWeight: 600,
                                                color: "var(--teal)"
                                            },
                                            children: [
                                                "$",
                                                (u_3.balance || 0).toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 318,
                                            columnNumber: 40
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                color: "var(--text-dim)"
                                            },
                                            children: [
                                                "$",
                                                (u_3.invested || 0).toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 321,
                                            columnNumber: 59
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `badge badge-${u_3.status}`,
                                                children: u_3.status
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 323,
                                                columnNumber: 64
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 323,
                                            columnNumber: 60
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                color: "var(--text-dim)",
                                                fontSize: 12
                                            },
                                            children: u_3.createdAt?.split("T")[0]
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 323,
                                            columnNumber: 134
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "actions-cell",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "icon-btn",
                                                        title: "View",
                                                        onClick: {
                                                            "AdminUsers[filtered.map() > <button>.onClick]": ()=>setSelected(u_3)
                                                        }["AdminUsers[filtered.map() > <button>.onClick]"],
                                                        children: "👁"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 326,
                                                        columnNumber: 85
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "icon-btn",
                                                        title: "Adjust Balance",
                                                        onClick: {
                                                            "AdminUsers[filtered.map() > <button>.onClick]": ()=>{
                                                                setBalModal(u_3);
                                                                setBalType("add");
                                                                setBalField("balance");
                                                                setBalAmount("");
                                                                setBalRemark("");
                                                            }
                                                        }["AdminUsers[filtered.map() > <button>.onClick]"],
                                                        style: {
                                                            color: "var(--teal)"
                                                        },
                                                        children: "💰"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 328,
                                                        columnNumber: 80
                                                    }, this),
                                                    u_3.status === "active" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "icon-btn",
                                                        title: "Suspend",
                                                        onClick: {
                                                            "AdminUsers[filtered.map() > <button>.onClick]": ()=>handleStatus(u_3.id, "suspended")
                                                        }["AdminUsers[filtered.map() > <button>.onClick]"],
                                                        children: "🚫"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 338,
                                                        columnNumber: 58
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "icon-btn",
                                                        title: "Activate",
                                                        onClick: {
                                                            "AdminUsers[filtered.map() > <button>.onClick]": ()=>handleStatus(u_3.id, "active")
                                                        }["AdminUsers[filtered.map() > <button>.onClick]"],
                                                        children: "✅"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 340,
                                                        columnNumber: 83
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "icon-btn danger",
                                                        title: "Delete",
                                                        onClick: {
                                                            "AdminUsers[filtered.map() > <button>.onClick]": ()=>handleDelete(u_3.id)
                                                        }["AdminUsers[filtered.map() > <button>.onClick]"],
                                                        children: "🗑"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 342,
                                                        columnNumber: 80
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 326,
                                                columnNumber: 55
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 326,
                                            columnNumber: 51
                                        }, this)
                                    ]
                                }, u_3.id, true, {
                                    fileName: "[project]/app/admin/users/page.js",
                                    lineNumber: 311,
                                    columnNumber: 48
                                }, this)
                        }["AdminUsers[filtered.map()]"]),
                        filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: 7,
                                style: {
                                    textAlign: "center",
                                    padding: 40,
                                    color: "var(--text-dim)"
                                },
                                children: "No users match your search."
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 345,
                                columnNumber: 72
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/users/page.js",
                            lineNumber: 345,
                            columnNumber: 68
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/users/page.js",
                    lineNumber: 310,
                    columnNumber: 178
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/users/page.js",
            lineNumber: 310,
            columnNumber: 31
        }, this);
        $[5] = balAmount;
        $[6] = balField;
        $[7] = balModal;
        $[8] = balRemark;
        $[9] = balType;
        $[10] = filter;
        $[11] = loading;
        $[12] = search;
        $[13] = selected?.id;
        $[14] = users;
        $[15] = T0;
        $[16] = handleBalanceSubmit;
        $[17] = handleDelete;
        $[18] = handleStatus;
        $[19] = initials;
        $[20] = t4;
        $[21] = t5;
        $[22] = t6;
        $[23] = t7;
        $[24] = t8;
    } else {
        T0 = $[15];
        handleBalanceSubmit = $[16];
        handleDelete = $[17];
        handleStatus = $[18];
        initials = $[19];
        t4 = $[20];
        t5 = $[21];
        t6 = $[22];
        t7 = $[23];
        t8 = $[24];
    }
    let t9;
    if ($[52] !== t4 || $[53] !== t5 || $[54] !== t6) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/users/page.js",
            lineNumber: 384,
            columnNumber: 10
        }, this);
        $[52] = t4;
        $[53] = t5;
        $[54] = t6;
        $[55] = t9;
    } else {
        t9 = $[55];
    }
    let t10;
    if ($[56] !== balAmount || $[57] !== balField || $[58] !== balLoading || $[59] !== balModal || $[60] !== balRemark || $[61] !== balType || $[62] !== handleBalanceSubmit || $[63] !== initials) {
        t10 = balModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-overlay",
            onClick: {
                "AdminUsers[<div>.onClick]": ()=>setBalModal(null)
            }["AdminUsers[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "user-modal",
                onClick: _AdminUsersDivOnClick,
                style: {
                    maxWidth: 460
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "user-modal-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "user-modal-avatar",
                                        children: initials(balModal.name)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 398,
                                        columnNumber: 48
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "user-modal-name",
                                        children: balModal.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 398,
                                        columnNumber: 114
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "user-modal-email",
                                        children: balModal.email
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 398,
                                        columnNumber: 168
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 398,
                                columnNumber: 43
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "AdminUsers[<button>.onClick]": ()=>setBalModal(null)
                                }["AdminUsers[<button>.onClick]"],
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
                                lineNumber: 398,
                                columnNumber: 230
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/users/page.js",
                        lineNumber: 398,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "user-modal-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                ].map({
                                    "AdminUsers[(anonymous)()]": (f_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "var(--surface-2)",
                                                border: `1px solid ${balField === f_0.key ? "var(--teal)" : "var(--border)"}`,
                                                borderRadius: "var(--radius)",
                                                padding: "12px",
                                                textAlign: "center",
                                                cursor: "pointer",
                                                transition: "var(--transition)"
                                            },
                                            onClick: {
                                                "AdminUsers[(anonymous)() > <div>.onClick]": ()=>setBalField(f_0.key)
                                            }["AdminUsers[(anonymous)() > <div>.onClick]"],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 10,
                                                        color: "var(--text-muted)",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.8px",
                                                        marginBottom: 4
                                                    },
                                                    children: f_0.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 434,
                                                    columnNumber: 63
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: 700,
                                                        color: f_0.color,
                                                        fontSize: 15
                                                    },
                                                    children: [
                                                        "$",
                                                        (balModal[f_0.key] || 0).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 440,
                                                    columnNumber: 37
                                                }, this),
                                                balField === f_0.key && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 9,
                                                        color: "var(--teal)",
                                                        marginTop: 4
                                                    },
                                                    children: "● Selected"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/users/page.js",
                                                    lineNumber: 444,
                                                    columnNumber: 95
                                                }, this)
                                            ]
                                        }, f_0.key, true, {
                                            fileName: "[project]/app/admin/users/page.js",
                                            lineNumber: 424,
                                            columnNumber: 51
                                        }, this)
                                }["AdminUsers[(anonymous)()]"])
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 406,
                                columnNumber: 63
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleBalanceSubmit,
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 14
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "input-label",
                                                style: {
                                                    marginBottom: 8
                                                },
                                                children: "Action"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 453,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gap: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: {
                                                            "AdminUsers[<button>.onClick]": ()=>setBalType("add")
                                                        }["AdminUsers[<button>.onClick]"],
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
                                                        lineNumber: 459,
                                                        columnNumber: 18
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: {
                                                            "AdminUsers[<button>.onClick]": ()=>setBalType("subtract")
                                                        }["AdminUsers[<button>.onClick]"],
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
                                                        lineNumber: 471,
                                                        columnNumber: 40
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 455,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 453,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "input-label",
                                                children: [
                                                    "Amount (USD) — adjusting ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        style: {
                                                            color: "var(--teal)",
                                                            textTransform: "capitalize"
                                                        },
                                                        children: balField
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 483,
                                                        columnNumber: 141
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 483,
                                                columnNumber: 85
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "input",
                                                type: "number",
                                                min: "1",
                                                step: "0.01",
                                                placeholder: "Enter amount e.g. 500",
                                                value: balAmount,
                                                onChange: {
                                                    "AdminUsers[<input>.onChange]": (e_2)=>setBalAmount(e_2.target.value)
                                                }["AdminUsers[<input>.onChange]"],
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 486,
                                                columnNumber: 47
                                            }, this),
                                            balAmount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 12,
                                                    marginTop: 6,
                                                    color: balType === "add" ? "var(--teal)" : "var(--red)"
                                                },
                                                children: [
                                                    "New ",
                                                    balField,
                                                    ": ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: [
                                                            "$",
                                                            Math.max(0, (parseFloat(balModal[balField]) || 0) + (balType === "add" ? 1 : -1) * parseFloat(balAmount || 0)).toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/users/page.js",
                                                        lineNumber: 492,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 488,
                                                columnNumber: 82
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 483,
                                        columnNumber: 57
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "input-label",
                                                children: "Remark / Reason"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 492,
                                                columnNumber: 222
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "input",
                                                placeholder: "e.g. Monthly profit credit, Bonus, Correction\u2026",
                                                value: balRemark,
                                                onChange: {
                                                    "AdminUsers[<input>.onChange]": (e_3)=>setBalRemark(e_3.target.value)
                                                }["AdminUsers[<input>.onChange]"]
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 492,
                                                columnNumber: 276
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 492,
                                        columnNumber: 194
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "btn btn-ghost",
                                                style: {
                                                    flex: 1
                                                },
                                                onClick: {
                                                    "AdminUsers[<button>.onClick]": ()=>setBalModal(null)
                                                }["AdminUsers[<button>.onClick]"],
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 497,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "btn",
                                                disabled: balLoading,
                                                style: {
                                                    flex: 2,
                                                    background: balType === "add" ? "var(--teal)" : "var(--red)",
                                                    color: balType === "add" ? "#050B18" : "#fff",
                                                    border: "none"
                                                },
                                                children: balLoading ? "Updating\u2026" : balType === "add" ? `➕ Add $${balAmount || "0"}` : `➖ Subtract $${balAmount || "0"}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/users/page.js",
                                                lineNumber: 501,
                                                columnNumber: 65
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 494,
                                        columnNumber: 58
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 449,
                                columnNumber: 51
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/users/page.js",
                        lineNumber: 406,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 396,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/users/page.js",
            lineNumber: 394,
            columnNumber: 23
        }, this);
        $[56] = balAmount;
        $[57] = balField;
        $[58] = balLoading;
        $[59] = balModal;
        $[60] = balRemark;
        $[61] = balType;
        $[62] = handleBalanceSubmit;
        $[63] = initials;
        $[64] = t10;
    } else {
        t10 = $[64];
    }
    let t11;
    if ($[65] !== handleDelete || $[66] !== handleStatus || $[67] !== initials || $[68] !== selected) {
        t11 = selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-overlay",
            onClick: {
                "AdminUsers[<div>.onClick]": ()=>setSelected(null)
            }["AdminUsers[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "user-modal",
                onClick: _AdminUsersDivOnClick2,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "user-modal-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "user-modal-avatar",
                                        children: initials(selected.name)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 523,
                                        columnNumber: 136
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "user-modal-name",
                                        children: selected.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 523,
                                        columnNumber: 202
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "user-modal-email",
                                        children: selected.email
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 523,
                                        columnNumber: 256
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 523,
                                columnNumber: 131
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "AdminUsers[<button>.onClick]": ()=>setSelected(null)
                                }["AdminUsers[<button>.onClick]"],
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
                                lineNumber: 523,
                                columnNumber: 318
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/users/page.js",
                        lineNumber: 523,
                        columnNumber: 98
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "user-modal-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                ].map(_AdminUsersAnonymous2)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 531,
                                columnNumber: 63
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "user-modal-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-outline",
                                        onClick: {
                                            "AdminUsers[<button>.onClick]": ()=>{
                                                setSelected(null);
                                                setBalModal(selected);
                                                setBalType("add");
                                                setBalField("balance");
                                                setBalAmount("");
                                                setBalRemark("");
                                            }
                                        }["AdminUsers[<button>.onClick]"],
                                        children: "💰 Adjust Balance"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 555,
                                        columnNumber: 85
                                    }, this),
                                    selected.status === "active" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-danger",
                                        onClick: {
                                            "AdminUsers[<button>.onClick]": ()=>handleStatus(selected.id, "suspended")
                                        }["AdminUsers[<button>.onClick]"],
                                        children: "🚫 Suspend"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 564,
                                        columnNumber: 106
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-outline",
                                        onClick: {
                                            "AdminUsers[<button>.onClick]": ()=>handleStatus(selected.id, "active")
                                        }["AdminUsers[<button>.onClick]"],
                                        children: "✅ Activate"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 566,
                                        columnNumber: 70
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-danger",
                                        onClick: {
                                            "AdminUsers[<button>.onClick]": ()=>handleDelete(selected.id)
                                        }["AdminUsers[<button>.onClick]"],
                                        children: "🗑 Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/users/page.js",
                                        lineNumber: 568,
                                        columnNumber: 68
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/users/page.js",
                                lineNumber: 555,
                                columnNumber: 49
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/users/page.js",
                        lineNumber: 531,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 523,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/users/page.js",
            lineNumber: 521,
            columnNumber: 23
        }, this);
        $[65] = handleDelete;
        $[66] = handleStatus;
        $[67] = initials;
        $[68] = selected;
        $[69] = t11;
    } else {
        t11 = $[69];
    }
    let t12;
    if ($[70] !== toast) {
        t12 = toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "admin-toast",
            children: toast
        }, void 0, false, {
            fileName: "[project]/app/admin/users/page.js",
            lineNumber: 581,
            columnNumber: 20
        }, this);
        $[70] = toast;
        $[71] = t12;
    } else {
        t12 = $[71];
    }
    let t13;
    if ($[72] !== T0 || $[73] !== t10 || $[74] !== t11 || $[75] !== t12 || $[76] !== t7 || $[77] !== t8 || $[78] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            children: [
                t7,
                t8,
                t9,
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/users/page.js",
            lineNumber: 589,
            columnNumber: 11
        }, this);
        $[72] = T0;
        $[73] = t10;
        $[74] = t11;
        $[75] = t12;
        $[76] = t7;
        $[77] = t8;
        $[78] = t9;
        $[79] = t13;
    } else {
        t13 = $[79];
    }
    return t13;
}
_s(AdminUsers, "7DkqmqIwO1IEjBvMip7OZSBAHwA=");
_c = AdminUsers;
function _AdminUsersAnonymous2(item, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "user-info-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "user-info-label",
                children: item.label
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 604,
                columnNumber: 50
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "user-info-value",
                style: {
                    textTransform: "capitalize"
                },
                children: item.value
            }, void 0, false, {
                fileName: "[project]/app/admin/users/page.js",
                lineNumber: 604,
                columnNumber: 101
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/app/admin/users/page.js",
        lineNumber: 604,
        columnNumber: 10
    }, this);
}
function _AdminUsersDivOnClick2(e_4) {
    return e_4.stopPropagation();
}
function _AdminUsersDivOnClick(e_1) {
    return e_1.stopPropagation();
}
function _AdminUsersAnonymous(h) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        children: h
    }, h, false, {
        fileName: "[project]/app/admin/users/page.js",
        lineNumber: 615,
        columnNumber: 10
    }, this);
}
function _AdminUsersInitials(name) {
    return name ? name.split(" ").map(_AdminUsersInitialsAnonymous).join("").toUpperCase().slice(0, 2) : "U";
}
function _AdminUsersInitialsAnonymous(n) {
    return n[0];
}
function _AdminUsersUseEffectAnonymous(r) {
    return r.json();
}
var _c;
__turbopack_context__.k.register(_c, "AdminUsers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_884b6e68._.js.map