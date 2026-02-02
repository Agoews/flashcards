"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
  description?: string;
};

const NAV_LINKS: NavLink[] = [
  {
    href: "/",
    label: "Flashcards",
    description: "Practice the active deck",
  },
  {
    href: "/cheatsheet",
    label: "Cheat Sheet",
    description: "Reference notes per chapter",
  },
];

const isRouteActive = (pathname: string, href: string) => {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
};

export function SiteHeader() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="navbar sticky top-0 z-10 border-b border-base-300 bg-base-100/95 px-4 backdrop-blur md:px-6">
      <div className="navbar-start flex flex-col gap-0.5 text-left">
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-base-content"
        >
          Chem Flashcards
        </Link>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-base-content/60">
          Main-group study
        </p>
      </div>
      <div className="navbar-center flex flex-wrap justify-center gap-3">
        {NAV_LINKS.map((link) => {
          const active = isRouteActive(pathname, link.href);
          const baseClasses = "btn btn-sm uppercase tracking-wide transition";
          const activeClasses = "btn-primary text-base-100 shadow";
          const inactiveClasses = "btn-ghost text-base-content/80 hover:text-base-content";
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
              aria-label={
                link.description
                  ? `${link.label} - ${link.description}`
                  : link.label
              }
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="navbar-end hidden flex-col text-right text-xs text-base-content/70 sm:flex">
        <span>Decks: 1A-8A</span>
        <span className="font-mono uppercase tracking-wider">v1.0</span>
      </div>
    </header>
  );
}
