// app/api/transactions/route.js
// Full CRUD for transactions — reads/writes /data/transactions.json

import { NextResponse }   from "next/server";
import { transactionsDb } from "../../../lib/db";

// GET /api/transactions  →  list with optional filters
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type   = searchParams.get("type");
    const status = searchParams.get("status");
    const userId = searchParams.get("userId");

    const txns = transactionsDb.filter({ type, status, userId });
    return NextResponse.json({ success: true, transactions: txns, total: txns.length });

  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch transactions." }, { status: 500 });
  }
}

// POST /api/transactions  →  create a new deposit or withdrawal request
export async function POST(request) {
  try {
    const body = await request.json();
    const { userId, type, amount, method, userName, plan } = body;

    if (!userId || !type || !amount || !method) {
      return NextResponse.json(
        { error: "userId, type, amount and method are required." },
        { status: 400 }
      );
    }

    const newTxn = transactionsDb.create({
      userId,
      user:   userName || "Unknown",
      type,
      amount: Number(amount),
      method,
      plan:   plan || "starter",
    });

    return NextResponse.json({ success: true, transaction: newTxn }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to create transaction." }, { status: 500 });
  }
}

// PATCH /api/transactions  →  approve or reject a pending transaction
export async function PATCH(request) {
  try {
    const body = await request.json();
    const { txId, status } = body;

    if (!txId || !status) {
      return NextResponse.json(
        { error: "txId and status are required." },
        { status: 400 }
      );
    }

    const validStatuses = ["completed", "rejected", "pending"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: `Invalid status. Must be one of: ${validStatuses.join(", ")}` },
        { status: 400 }
      );
    }

    const updated = transactionsDb.updateStatus(txId, status);
    return NextResponse.json({ success: true, transaction: updated });

  } catch (error) {
    if (error.message === "TRANSACTION_NOT_FOUND") {
      return NextResponse.json({ error: "Transaction not found." }, { status: 404 });
    }
    return NextResponse.json({ error: "Failed to update transaction." }, { status: 500 });
  }
}
