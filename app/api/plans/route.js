// app/api/plans/route.js
import { NextResponse } from "next/server";
import { PLANS } from "../../../lib/data";

export async function GET() {
  return NextResponse.json({ success: true, plans: PLANS });
}

export async function PUT(request) {
  try {
    const body = await request.json();
    // In production: update plan in database
    return NextResponse.json({ success: true, message: "Plan updated", plan: body });
  } catch {
    return NextResponse.json({ error: "Failed to update plan." }, { status: 500 });
  }
}
