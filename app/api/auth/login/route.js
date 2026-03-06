import { NextResponse } from "next/server";
import { usersDb } from "../../../../lib/db";

const DEMO_USERS = [
  { id:"u-admin", name:"Admin User", email:"admin@demo.com", password:"password123", role:"admin", plan:"titan", balance:0,    invested:0,    profit:0,    status:"active" },
  { id:"u-demo",  name:"Demo User",  email:"user@demo.com",  password:"password123", role:"user",  plan:"pro",   balance:6200, invested:5000, profit:1200, status:"active" },
];

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ error:"Email and password are required." }, { status:400 });
    }

    // Check MongoDB first, then fall back to demo users
    let user = await usersDb.findByEmail(email).catch(() => null);
    if (!user) {
      user = DEMO_USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
    }

    if (!user)                       return NextResponse.json({ error:"No account found with this email." },      { status:404 });
    if (user.password !== password)  return NextResponse.json({ error:"Incorrect password." },                    { status:401 });
    if (user.status === "suspended") return NextResponse.json({ error:"Account suspended. Contact support." },    { status:403 });

    const { password:_, ...safeUser } = user;
    const session = { id:safeUser.id, email:safeUser.email, role:safeUser.role, name:safeUser.name, plan:safeUser.plan };

    const res = NextResponse.json({ success:true, user:safeUser }, { status:200 });
    res.cookies.set("cv_session", JSON.stringify(session), {
      httpOnly:false, secure:false, sameSite:"lax", maxAge:60*60*24*7, path:"/"
    });
    return res;
  } catch (err) {
    return NextResponse.json({ error:"Server error: " + err.message }, { status:500 });
  }
}
