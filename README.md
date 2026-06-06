# CryptoVault Pro — Full Stack Crypto Trading Platform

A production-ready Next.js crypto trading platform with user dashboard, admin panel, and mock REST API.

---

## 📁 Project Structure

```
cryptovault/
├── app/
│   ├── globals.css                  ← Shared CSS variables & resets
│   ├── layout.js                    ← Root Next.js layout
│   ├── page.js                      ← Home / Landing page
│   ├── styles/
│   │   ├── home.css                 ← Landing page styles
│   │   ├── login.css                ← Login page styles
│   │   ├── register.css             ← Register page styles
│   │   ├── plans.css                ← Plans page styles
│   │   ├── dashboard.css            ← User dashboard styles
│   │   ├── admin-dashboard.css      ← Admin dashboard styles
│   │   ├── admin-users.css          ← Admin users page styles
│   │   ├── admin-plans.css          ← Admin plans page styles
│   │   └── admin-transactions.css   ← Admin transactions styles
│   ├── login/page.js                ← User login page
│   ├── register/page.js             ← User registration page
│   ├── plans/page.js                ← Investment plans comparison
│   ├── dashboard/page.js            ← User dashboard
│   ├── admin/
│   │   ├── page.js                  ← Admin dashboard + shared AdminLayout
│   │   ├── users/page.js            ← User management
│   │   ├── plans/page.js            ← Plans management
│   │   └── transactions/page.js     ← Transaction management
│   └── api/
│       ├── auth/login/route.js      ← POST /api/auth/login
│       ├── auth/register/route.js   ← POST /api/auth/register
│       ├── plans/route.js           ← GET/PUT /api/plans
│       ├── users/route.js           ← GET/PATCH/DELETE /api/users
│       ├── transactions/route.js    ← GET/POST/PATCH /api/transactions
│       └── portfolio/route.js       ← GET /api/portfolio
└── lib/
    └── data.js                      ← Shared mock data & constants
```

---

## 🚀 Setup Instructions

### 1. Create a new Next.js project
```bash
cd Desktop
npx create-next-app@latest cryptovault
cd cryptovault
```
Answer the prompts:
- TypeScript → **No**
- ESLint → **Yes**
- Tailwind → **No**
- src/ directory → **No**
- App Router → **Yes**
- Turbopack → **No**
- Customize alias → **No**

### 2. Replace the app/ folder
Delete everything inside the `app/` folder Next.js created, then copy all the files from this project into your `cryptovault/` directory, maintaining the folder structure shown above.

### 3. Create the lib/ folder
Create a `lib/` folder in your project root and add `data.js`.

### 4. Run the app
```bash
npm run dev
```

Open http://localhost:3000

---

## 🔑 Demo Credentials

| Role  | Email              | Password    | Redirects to    |
|-------|--------------------|-------------|-----------------|
| User  | user@demo.com      | password123 | /dashboard      |
| Admin | admin@demo.com     | password123 | /admin          |

---

## 📄 Pages

| URL                    | Description              |
|------------------------|--------------------------|
| /                      | Landing / Home page      |
| /plans                 | Investment plans compare |
| /login                 | User login               |
| /register              | New user registration    |
| /dashboard             | User dashboard           |
| /admin                 | Admin overview           |
| /admin/users           | Manage users             |
| /admin/plans           | Manage plan pricing/ROI  |
| /admin/transactions    | Approve/reject payouts   |

## 🔌 API Endpoints

| Method | Endpoint                | Description              |
|--------|-------------------------|--------------------------|
| POST   | /api/auth/login         | Authenticate user        |
| POST   | /api/auth/register      | Create new account       |
| GET    | /api/plans              | Get all plans            |
| PUT    | /api/plans              | Update a plan            |
| GET    | /api/users              | Get all users            |
| PATCH  | /api/users              | Update user status       |
| DELETE | /api/users?id=          | Delete a user            |
| GET    | /api/transactions       | Get transactions         |
| POST   | /api/transactions       | Create transaction       |
| PATCH  | /api/transactions       | Approve/reject           |
| GET    | /api/portfolio?userId=  | Get user portfolio data  |

---

## 🛠 Next Steps to Make It Production-Ready

1. **Database** — Replace `lib/data.js` mock data with a real database (Supabase, PostgreSQL, MongoDB)
2. **Authentication** — Replace `localStorage` with proper session management using **NextAuth.js**
3. **Payments** — Integrate crypto payment processing (CoinPayments, NowPayments API)
4. **Email** — Add transactional emails with **Resend** or **SendGrid**
5. **Security** — Add JWT tokens, rate limiting, and input sanitization
6. **Real prices** — Connect to **CoinGecko API** or **Binance WebSocket** for live crypto prices

---

## 💎 Investment Plans

| Plan       | Monthly ROI | Min Deposit  |
|------------|-------------|--------------|
| Starter    | 5%          | $250         |
| Growth     | 8%          | $1,000       |
| Pro Trader | 12%         | $5,000       |
| Elite      | 18%         | $15,000      |
| Titan      | 25%         | $50,000      |
# broker
