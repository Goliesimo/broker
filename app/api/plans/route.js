import { NextResponse } from "next/server";
import { plansDb }      from "../../../lib/db";
import { PLANS }        from "../../../lib/data";

// Seed MongoDB with default plans if empty
async function seedIfEmpty() {
  const existing = await plansDb.getAll();
  if (existing.length === 0) {
    for (const plan of PLANS) {
      await plansDb.upsert(plan);
    }
  }
}

export async function GET() {
  try {
    await seedIfEmpty();
    const plans = await plansDb.getAll();
    // Sort by price ascending
    plans.sort((a,b) => a.price - b.price);
    return NextResponse.json({ success:true, plans });
  } catch (err) {
    // Fallback to static plans if DB fails
    return NextResponse.json({ success:true, plans:PLANS });
  }
}

export async function PUT(request) {
  try {
    const updated = await request.json();
    if (!updated.id) return NextResponse.json({ error:"Plan id required." }, { status:400 });
    const plan = await plansDb.update(updated.id, updated);
    return NextResponse.json({ success:true, plan });
  } catch (err) {
    return NextResponse.json({ error:err.message }, { status:500 });
  }
}
