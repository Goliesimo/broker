import { NextResponse }    from "next/server";
import { subscriptionsDb } from "../../../lib/db";
import { usersDb }         from "../../../lib/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const subs = await subscriptionsDb.filter({
      status: searchParams.get("status") || undefined,
      userId: searchParams.get("userId") || undefined,
    });
    return NextResponse.json({ success:true, subscriptions:subs, total:subs.length });
  } catch (err) {
    return NextResponse.json({ error:err.message }, { status:500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { userId, userName, userEmail, planId, planName, planPrice, crypto, walletAddress, txid, senderWallet, screenshotBase64 } = body;
    if (!userId || !planId || !txid || !senderWallet) {
      return NextResponse.json({ error:"Missing required fields." }, { status:400 });
    }
    const sub = await subscriptionsDb.create({
      id: `sub-${Date.now()}`,
      userId, userName, userEmail,
      planId, planName, planPrice,
      crypto, walletAddress, txid,
      senderWallet, screenshotBase64: screenshotBase64 || null,
    });
    return NextResponse.json({ success:true, subscription:sub }, { status:201 });
  } catch (err) {
    return NextResponse.json({ error:err.message }, { status:500 });
  }
}

export async function PATCH(request) {
  try {
    const { subId, status, note, userId, planId } = await request.json();
    if (!subId || !status) return NextResponse.json({ error:"subId and status required." }, { status:400 });
    const updated = await subscriptionsDb.updateStatus(subId, status, note);
    if (status === "approved" && userId && planId) {
      await usersDb.update(userId, { plan:planId }).catch(() => {});
    }
    return NextResponse.json({ success:true, subscription:updated });
  } catch (err) {
    if (err.message === "SUB_NOT_FOUND") return NextResponse.json({ error:"Subscription not found." }, { status:404 });
    return NextResponse.json({ error:err.message }, { status:500 });
  }
}
