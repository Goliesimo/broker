// lib/auth-client.js — client-side session helpers (reads browser cookies)

export function getSession() {
  if (typeof document === "undefined") return null;
  try {
    const match = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cv_session="));
    if (!match) return null;
    const raw = match.split("=").slice(1).join("=");
    return JSON.parse(decodeURIComponent(decodeURIComponent(raw)));
  } catch {
    return null;
  }
}

export async function logout(router) {
  try {
    await fetch("/api/auth/logout", { method: "POST" });
  } catch {
    document.cookie = "cv_session=; Max-Age=0; path=/";
  }
  router.push("/login");
}
