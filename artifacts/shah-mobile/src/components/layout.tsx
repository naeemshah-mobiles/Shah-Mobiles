import { Link, useLocation } from "wouter";
import { Smartphone, Menu, X, MessageCircle } from "lucide-react";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/store", label: "Mobiles" },
  { href: "/store", label: "Deals", queryHint: "deals" },
  { href: "/contact", label: "Contact" },
];

const navLinksClean = [
  { href: "/", label: "Home" },
  { href: "/store", label: "Mobiles" },
  { href: "/contact", label: "Contact" },
];

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-white/8"
        style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(16px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3.5">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)" }}
              >
                <Smartphone className="text-black w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-lg text-white group-hover:text-primary transition-colors leading-none block"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Shah Mobile
                </span>
                <span className="text-[10px] text-primary/70 leading-none block mt-0.5 font-semibold tracking-wide uppercase">
                  Abbottabad
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {[
                { href: "/", label: "Home" },
                { href: "/store", label: "Mobiles" },
                { href: "/store", label: "Deals 🔥" },
                { href: "/contact", label: "Contact" },
              ].map((link) => {
                const isActive = location === link.href && link.label !== "Deals 🔥";
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                      isActive
                        ? "text-primary"
                        : link.label === "Deals 🔥"
                        ? "text-red-400 hover:text-red-300 hover:bg-red-950/30"
                        : "text-white/60 hover:text-white hover:bg-white/8",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* WhatsApp CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/923465900627"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white font-bold text-sm transition-all hover:shadow-lg hover:scale-105"
                style={{ background: "#25D366" }}
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10" style={{ background: "#0A0A0A" }}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {[
                { href: "/", label: "Home" },
                { href: "/store", label: "Mobiles" },
                { href: "/store", label: "Deals 🔥" },
                { href: "/contact", label: "Contact" },
              ].map((link) => {
                const isActive = location === link.href && link.label !== "Deals 🔥";
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
                      isActive
                        ? "bg-primary/15 text-primary"
                        : link.label === "Deals 🔥"
                        ? "text-red-400 hover:bg-red-950/30"
                        : "text-white/70 hover:text-white hover:bg-white/8",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="https://wa.me/923465900627"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-bold text-sm"
                style={{ background: "#25D366" }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── MAIN ───────────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col">{children}</main>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer style={{ background: "#080808", borderTop: "1px solid rgba(201,162,39,0.15)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)" }}
                >
                  <Smartphone className="text-black w-5 h-5" />
                </div>
                <span className="font-bold text-lg text-white" style={{ fontFamily: "var(--font-display)" }}>
                  Shah Mobile
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Abbottabad's most trusted mobile store. Genuine products, honest
                prices, and real guidance — all in one place.
              </p>
              <div className="mt-4 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 fill-current" style={{ color: "#C9A227" }} viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="ml-2 text-white/30 text-sm">5.0 · 670+ reviews</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-base mb-4" style={{ color: "#C9A227" }}>Quick Links</h3>
              <ul className="space-y-2.5">
                {navLinksClean.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-white/40 hover:text-primary transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/store" className="text-white/40 hover:text-primary transition-colors text-sm">
                    Deals & Offers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-base mb-4" style={{ color: "#C9A227" }}>Get in Touch</h3>
              <ul className="space-y-3 text-sm text-white/40">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0">📍</span>
                  <span>Shop No. 1, Latif Khan Plaza Mandian, Abbottabad, 2014, Pakistan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+923465900627" className="hover:text-primary transition-colors">
                    +92 346 5900627
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:naeem.hussain262@gmail.com" className="hover:text-primary transition-colors">
                    naeem.hussain262@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>🕘</span>
                  <span>Opens 9 AM daily</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/20"
            style={{ borderTop: "1px solid rgba(201,162,39,0.1)" }}
          >
            <span>© {new Date().getFullYear()} Shah Mobile Zone. All rights reserved.</span>
            <span>Abbottabad, Pakistan</span>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP BUTTON ────────────────────────────────────── */}
      <a
        href="https://wa.me/923465900627"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl wa-float"
        style={{
          background: "linear-gradient(135deg, #25D366, #1EBE5D)",
          boxShadow: "0 4px 24px rgba(37,211,102,0.4)",
        }}
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
