import { NextResponse } from "next/server";
import { transactionsDb } from "../../../lib/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const status = searchParams.get("status");
    const type   = searchParams.get("type");

    const transactions = await transactionsDb.filter({ userId, status, type });
    return NextResponse.json({ transactions, total: transactions.length });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { userId, user, type, amount, method, plan } = body;
    if (!userId || !type || !amount) {
      return NextResponse.json({ error: "userId, type and amount are required." }, { status: 400 });
    }
    const tx = await transactionsDb.create({
      id:     `tx-${Date.now()}`,
      userId, user, type, amount,
      status: "pending",
      date:   new Date().toISOString().split("T")[0],
      method: method || "USDT",
      plan:   plan || null,
    });
    return NextResponse.json({ success: true, transaction: tx }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const { id, ...updates } = await request.json();
    if (!id) return NextResponse.json({ error: "id required." }, { status: 400 });
    const tx = await transactionsDb.update(id, updates);
    return NextResponse.json({ success: true, transaction: tx });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
