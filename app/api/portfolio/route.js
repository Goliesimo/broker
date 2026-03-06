// app/api/portfolio/route.js
import { NextResponse } from "next/server";
import { MOCK_USERS, PLANS, CRYPTO_PRICES } from "../../../lib/data";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "userId is required." }, { status: 400 });
  }

  const user = MOCK_USERS.find(u => u.id === userId);
  if (!user) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  const plan = PLANS.find(p => p.id === user.plan);
  const monthlyEarning = Math.floor(user.invested * (plan?.roi || 0) / 100);
  const nextPayoutDate = new Date();
  nextPayoutDate.setDate(nextPayoutDate.getDate() + 16);

  return NextResponse.json({
    success: true,
    portfolio: {
      userId:         user.id,
      balance:        user.balance,
      invested:       user.invested,
      profit:         user.profit,
      plan:           plan,
      monthlyEarning,
      nextPayout:     nextPayoutDate.toISOString().split("T")[0],
      roi:            plan?.roi || 0,
      marketPrices:   CRYPTO_PRICES,
    },
  });
}
