"use client";

import { signOut } from "next-auth/react";

export default function DashboardClient() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6">Welcome Admin</p>

      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        Logout
      </button>
    </main>
  );
}
