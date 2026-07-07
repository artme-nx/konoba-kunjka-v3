"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#mul", label: "Mul" },
  { href: "#jelovnik", label: "Jelovnik" },
  { href: "#prica", label: "Priča" },
  { href: "#galerija", label: "Galerija" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(250, 243, 230, 0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 var(--surface-line)" : "none",
        paddingTop: scrolled ? "0.9rem" : "1.5rem",
        paddingBottom: scrolled ? "0.9rem" : "1.5rem",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="font-display text-2xl tracking-tight"
          style={{ color: scrolled ? "var(--foreground)" : "var(--background)" }}
        >
          Kunj<span style={{ color: "var(--rust)" }}>k</span>a
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.84rem] tracking-wide transition-colors hover:opacity-70"
              style={{ color: scrolled ? "var(--muted-foreground)" : "rgba(250,243,230,0.85)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-full border px-5 py-2.5 text-[0.78rem] uppercase tracking-[0.12em] transition-all hover:bg-[var(--rust)] hover:text-[var(--background)] hover:border-[var(--rust)]"
            style={{
              borderColor: scrolled ? "var(--rust)" : "var(--button-ghost-border)",
              color: scrolled ? "var(--rust)" : "var(--background)",
            }}
          >
            Rezerviraj stol
          </a>
        </nav>

        <button
          aria-label="Izbornik"
          className="md:hidden z-50 text-2xl"
          style={{ color: scrolled || open ? "var(--foreground)" : "var(--background)" }}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>

      <nav
        className={`md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "var(--background)" }}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-2xl"
            style={{ color: "var(--foreground)" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#kontakt"
          onClick={() => setOpen(false)}
          className="rounded-full px-6 py-3 text-sm uppercase tracking-[0.12em]"
          style={{ background: "var(--rust)", color: "var(--background)" }}
        >
          Rezerviraj stol
        </a>
      </nav>
    </>
  );
}
