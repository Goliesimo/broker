import { NextResponse } from "next/server";
import { usersDb } from "../../../../lib/db";

export async function POST(request) {
  try {
    const { name, email, password, plan } = await request.json();
    if (!name || !email || !password) {
      return NextResponse.json({ error:"Name, email and password are required." }, { status:400 });
    }

    const existing = await usersDb.findByEmail(email);
    if (existing) {
      return NextResponse.json({ error:"An account with this email already exists." }, { status:409 });
    }

    const user = await usersDb.create({
      id:        `u-${Date.now()}`,
      name:      name.trim(),
      email:     email.toLowerCase().trim(),
      password,
      role:      "user",
      plan:      plan || "starter",
      balance:   0,
      invested:  0,
      profit:    0,
      status:    "active",
      createdAt: new Date().toISOString(),
      lastActive:new Date().toISOString(),
    });

    const { password:_, ...safeUser } = user;
    const session = { id:safeUser.id, email:safeUser.email, role:safeUser.role, name:safeUser.name, plan:safeUser.plan };

    const res = NextResponse.json({ success:true, user:safeUser }, { status:201 });
    res.cookies.set("cv_session", JSON.stringify(session), {
      httpOnly:false, secure:false, sameSite:"lax", maxAge:60*60*24*7, path:"/"
    });
    return res;
  } catch (err) {
    return NextResponse.json({ error:"Server error: " + err.message }, { status:500 });
  }
}
