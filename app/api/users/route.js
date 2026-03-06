import { NextResponse } from "next/server";
import { usersDb } from "../../../lib/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
      const user = await usersDb.findById(id);
      if (!user) return NextResponse.json({ error:"User not found." }, { status:404 });
      const { password:_, ...safe } = user;
      return NextResponse.json({ user:safe });
    }
    const users = await usersDb.getAll();
    return NextResponse.json({ users: users.map(u => { const {password:_,...s}=u; return s; }), total:users.length });
  } catch (err) {
    return NextResponse.json({ error:err.message }, { status:500 });
  }
}

export async function PATCH(request) {
  try {
    const { userId, ...updates } = await request.json();
    if (!userId) return NextResponse.json({ error:"userId required." }, { status:400 });
    const user = await usersDb.update(userId, updates);
    if (!user) return NextResponse.json({ error:"User not found." }, { status:404 });
    const { password:_, ...safe } = user;
    return NextResponse.json({ success:true, user:safe });
  } catch (err) {
    return NextResponse.json({ error:err.message }, { status:500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error:"id required." }, { status:400 });
    await usersDb.delete(id);
    return NextResponse.json({ success:true });
  } catch (err) {
    return NextResponse.json({ error:err.message }, { status:500 });
  }
}
