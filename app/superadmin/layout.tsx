"use client";
// app/superadmin/layout.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Car,
  FileText,
  Settings,
  LogOut,
  LayoutDashboard,
  Eye,
  EyeOff,
} from "lucide-react";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "WheelsAdmin2025";

const NAV_ITEMS = [
  { href: "/superadmin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/superadmin/cars", label: "Cars", icon: Car },
  { href: "/superadmin/blogs", label: "Blogs", icon: FileText },
  { href: "/superadmin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPw, setShowPw] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const stored = sessionStorage.getItem("wod_admin_auth");
    if (stored === "1") setAuthed(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("wod_admin_auth", "1");
      setAuthed(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("wod_admin_auth");
    setAuthed(false);
    setPassword("");
  };

  if (!authed) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#0A0A0A" }}
      >
        <div
          className="w-full max-w-sm p-8 rounded-2xl"
          style={{
            background: "#161616",
            border: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <div className="text-center mb-8">
            <span
              className="text-3xl font-['Cormorant_Garamond',serif] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Wheels
            </span>
            <p className="text-[#888880] text-xs uppercase tracking-widest mt-1">
              Admin Portal
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin Password"
                className="w-full px-4 py-3 pr-12 rounded-xl text-sm text-[#F5F5F0] placeholder-[#444440] focus:outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: error
                    ? "1px solid rgba(239,68,68,0.5)"
                    : "1px solid rgba(255,255,255,0.08)",
                }}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#444440] hover:text-[#C9A84C] transition-colors"
                aria-label={showPw ? "Hide password" : "Show password"}
              >
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {error && (
              <p className="text-red-400 text-xs">{error}</p>
            )}
            <button
              type="submit"
              className="btn-gold w-full py-3 rounded-xl text-sm font-semibold uppercase tracking-widest"
            >
              Enter Admin
            </button>
          </form>

          <p className="text-[#444440] text-[10px] text-center mt-6 uppercase tracking-wider">
            Restricted Access — Wheels On Deal
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex" style={{ background: "#0A0A0A" }}>
      {/* Sidebar */}
      <aside
        className="w-60 shrink-0 flex flex-col"
        style={{
          background: "#0D0D0D",
          borderRight: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Logo */}
        <div
          className="px-6 py-6"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span
            className="text-xl font-['Cormorant_Garamond',serif] font-semibold"
            style={{ color: "#C9A84C" }}
          >
            Wheels On Deal
          </span>
          <p className="text-[#444440] text-[10px] uppercase tracking-widest mt-0.5">
            Admin Portal
          </p>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1" aria-label="Admin navigation">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all"
                style={{
                  background: active ? "rgba(201,168,76,0.1)" : "transparent",
                  color: active ? "#C9A84C" : "#888880",
                  border: active
                    ? "1px solid rgba(201,168,76,0.2)"
                    : "1px solid transparent",
                }}
              >
                <item.icon size={16} aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div
          className="p-4 space-y-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-[#888880] hover:text-[#C9A84C] transition-all"
          >
            <Eye size={16} aria-hidden="true" />
            View Site
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-[#888880] hover:text-red-400 transition-all w-full text-left"
          >
            <LogOut size={16} aria-hidden="true" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-8">
        {children}
      </main>
    </div>
  );
}
