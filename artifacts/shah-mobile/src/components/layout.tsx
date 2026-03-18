import { Link, useLocation } from "wouter";
import { Smartphone, Menu, X, MessageCircle } from "lucide-react";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/store", label: "Store" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3.5">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0"
            >
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                <Smartphone className="text-white w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-none block">
                  Shah Mobile
                </span>
                <span className="text-[10px] text-muted-foreground leading-none block mt-0.5">
                  Abbottabad
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground/60 hover:text-foreground hover:bg-stone-100",
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
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-whatsapp text-white hover:bg-whatsapp/90 transition-colors font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground hover:bg-stone-100",
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
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-whatsapp text-white font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col">{children}</main>

      {/* Footer */}
      <footer className="bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                  <Smartphone className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-lg">Shah Mobile</span>
              </div>
              <p className="text-blue-200/70 text-sm leading-relaxed">
                Abbottabad's most trusted mobile store. Genuine products, honest
                prices, and real guidance — all in one place.
              </p>
              <div className="mt-4 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="ml-2 text-blue-200/60 text-sm">
                  5.0 · 670+ reviews
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-base mb-4">Quick Links</h3>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-blue-200/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-base mb-4">Get in Touch</h3>
              <ul className="space-y-3 text-sm text-blue-200/70">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0">📍</span>
                  <span>Shop No. 1, Latif Khan Plaza Mandian, Abbottabad, 2014, Pakistan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a
                    href="tel:+923465900627"
                    className="hover:text-white transition-colors"
                  >
                    +92 346 5900627
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <a
                    href="mailto:naeem.hussain@gmail.com"
                    className="hover:text-white transition-colors"
                  >
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

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-blue-200/40">
            <span>
              © {new Date().getFullYear()} Shah Mobile Zone. All rights
              reserved.
            </span>
            <span> Abbottabad, Pakistan</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
