import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import {
  ArrowRight,
  ShieldCheck,
  Tag,
  Headphones,
  Zap,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  Flame,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { getAllProducts } from "@/hooks/use-admin-store";
import { ProductCard } from "@/components/product-card";
import { useEffect, useState } from "react";

const allBrands = [
  "Apple", "Samsung", "Vivo", "Oppo", "Xiaomi",
  "Redmi", "Honor", "Tecno", "Realme", "Infinix", "OnePlus",
];

const categories = [
  { icon: "🔧", name: "Repair Tools", sub: "Kits · LCD · IC Parts" },
  { icon: "💾", name: "Storage", sub: "Memory Cards · USB · OTG" },
  { icon: "🚗", name: "Car Accessories", sub: "Holders · Chargers · Kits" },
  { icon: "⌚", name: "Smart Gadgets", sub: "Smartwatches · Bands" },
  { icon: "💡", name: "Mobile Gadgets", sub: "Ring Lights · Stands · Tripods" },
  { icon: "🔊", name: "Speakers", sub: "Bluetooth · Mini · Soundbars" },
  { icon: "📱", name: "Covers", sub: "Back · Flip · Tempered Glass" },
  { icon: "🔌", name: "Cables & Wires", sub: "Type-C · Lightning · AUX" },
  { icon: "🎧", name: "Audio", sub: "Earbuds · Headphones · Earphones" },
  { icon: "⚡", name: "Chargers", sub: "Fast · Wireless · Power Banks" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "100% Genuine",
    desc: "Every phone is sourced from authorized distributors. No duplicates, no fakes — ever.",
    color: "#C9A227",
  },
  {
    icon: Tag,
    title: "Best Local Prices",
    desc: "We keep our prices fair and transparent. What you see is what you pay — no hidden charges.",
    color: "#C9A227",
  },
  {
    icon: Headphones,
    title: "Honest Advice",
    desc: "Not sure which phone to pick? Our staff will help you find the right one for your budget.",
    color: "#C9A227",
  },
  {
    icon: Zap,
    title: "Quick WhatsApp",
    desc: "Ask anything, order easily — we reply fast on WhatsApp so you don't have to wait.",
    color: "#C9A227",
  },
];

const reviews = [
  {
    name: "Ihtisham Shah",
    rating: 5,
    time: "5 months ago",
    text: "Excellent Mobile Shop! Great selection of phones, accessories, and gadgets. The staff was friendly, knowledgeable, and helped me find exactly what I needed at a great price. Fast service and genuine products. Highly recommended!",
    initial: "I",
  },
  {
    name: "Zaraq Khan",
    rating: 5,
    time: "6 months ago",
    text: "Excellent mobile shop with great variety, fair prices, and honest dealing. The staff is very cooperative and provides helpful guidance. Highly recommended for anyone looking to buy mobiles and accessories.",
    initial: "Z",
  },
  {
    name: "Muhammad Maaz Masood",
    rating: 5,
    time: "5 months ago",
    text: "Great mobile shop! Wide variety of phones, fair prices, and very helpful staff. Excellent service and quick setup — highly recommended.",
    initial: "M",
  },
];

function useCountdown(targetHours: number) {
  const getTime = () => {
    const now = new Date();
    const end = new Date(now);
    end.setHours(now.getHours() + targetHours, 0, 0, 0);
    const diff = Math.max(0, end.getTime() - now.getTime());
    return {
      h: Math.floor(diff / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(getTime);
  useEffect(() => {
    const t = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

function CountdownUnit({ val, label }: { val: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="text-2xl font-black tabular-nums leading-none px-3 py-2 rounded-lg"
        style={{ background: "#1A1A1A", color: "#F0D060", border: "1px solid rgba(201,162,39,0.3)", minWidth: "3rem", textAlign: "center" }}
      >
        {String(val).padStart(2, "0")}
      </span>
      <span className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mt-1">{label}</span>
    </div>
  );
}

export default function Home() {
  const allProducts = getAllProducts();
  const flashSaleProducts = allProducts.filter((p) => p.isFlashSale).slice(0, 4);
  const newArrivals = allProducts.filter((p) => p.isNew).slice(0, 8);
  const featured = allProducts.filter((p) => ["s12", "v2", "o1", "x3"].includes(p.id));
  const countdown = useCountdown(6);

  return (
    <Layout>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(201,162,39,0.08) 0%, transparent 60%), #080808",
        }}
      >
        {/* Gold accent lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,39,0.4), transparent)" }} />
          <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,39,0.2), transparent)" }} />
          <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, #C9A227, transparent)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-7">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#C9A227" }} />
                <span className="text-sm font-semibold tracking-wide" style={{ color: "rgba(201,162,39,0.8)" }}>
                  Abbottabad, Pakistan · Est. 2014
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-black text-white leading-[1.08] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Abbottabad's
                <br />
                <span style={{ background: "linear-gradient(90deg, #C9A227, #F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Trusted Mobile
                </span>
                <br />
                Store
              </h1>

              <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
                Genuine smartphones, honest prices, and real advice. Browse 110+
                devices from Apple, Samsung, Vivo, Oppo, Xiaomi, and more.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/store"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-black rounded-xl shadow-lg transition-all hover:scale-105 text-base"
                  style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#0A0A0A" }}
                >
                  Browse Phones <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/923465900627"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl text-white transition-all hover:scale-105 text-base"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-10 divide-x"
                style={{ borderColor: "rgba(201,162,39,0.15)" }}
              >
                {[
                  { val: "110+", lbl: "phones in stock" },
                  { val: "5.0 ★", lbl: "Google rating" },
                  { val: "670+", lbl: "happy customers" },
                  { val: "23+", lbl: "top brands" },
                ].map((s, i) => (
                  <div key={s.lbl} className={i > 0 ? "pl-10" : ""}>
                    <div className="text-2xl font-black text-white">{s.val}</div>
                    <div className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GOLD INFO BAR ────────────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(90deg, #8B6914, #C9A227, #F0D060, #C9A227, #8B6914)" }}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-center items-center gap-6 text-black text-sm font-bold">
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Latif Khan Plaza, Abbottabad</span>
          <span className="hidden sm:block opacity-40">·</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Opens 9 AM Daily</span>
          <span className="hidden sm:block opacity-40">·</span>
          <span>📞 +92 346 5900627</span>
        </div>
      </div>

      {/* ── FLASH SALE ───────────────────────────────────────────────────── */}
      {flashSaleProducts.length > 0 && (
        <section className="py-12" style={{ background: "#0D0A04" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)" }}>
                  <Flame className="w-5 h-5 text-red-400 flash-pulse" />
                  <span className="text-red-400 font-black text-lg uppercase tracking-wide">Flash Sale</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/40 text-sm font-medium">Ends in:</span>
                <div className="flex items-center gap-2">
                  <CountdownUnit val={countdown.h} label="hrs" />
                  <span className="text-primary font-black text-xl mb-4">:</span>
                  <CountdownUnit val={countdown.m} label="min" />
                  <span className="text-primary font-black text-xl mb-4">:</span>
                  <CountdownUnit val={countdown.s} label="sec" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {flashSaleProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BRANDS STRIP ─────────────────────────────────────────────────── */}
      <section className="py-8" style={{ background: "#0A0A0A", borderTop: "1px solid rgba(201,162,39,0.1)", borderBottom: "1px solid rgba(201,162,39,0.1)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-white/30 mb-4 font-semibold uppercase tracking-widest">Brands We Carry</p>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {allBrands.map((brand) => (
              <Link
                key={brand}
                href="/store"
                className="px-4 py-2 rounded-full text-sm font-bold transition-all hover:scale-105"
                style={{
                  border: "1px solid rgba(201,162,39,0.25)",
                  color: "rgba(201,162,39,0.7)",
                  background: "rgba(201,162,39,0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,162,39,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#C9A227";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,162,39,0.05)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(201,162,39,0.7)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.25)";
                }}
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW ARRIVALS ─────────────────────────────────────────────────── */}
      {newArrivals.length > 0 && (
        <section className="py-14" style={{ background: "#080808" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-primary font-bold text-sm uppercase tracking-widest">Just Arrived</span>
                </div>
                <h2 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
                  New Arrivals
                </h2>
                <p className="text-white/40 mt-1 text-sm">Latest iPhones, flagship Android, and more — fresh in stock</p>
              </div>
              <Link
                href="/store"
                className="hidden sm:inline-flex items-center gap-1.5 font-bold text-sm hover:text-primary/80 transition-colors"
                style={{ color: "#C9A227" }}
              >
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {newArrivals.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SHOP BY CATEGORY ─────────────────────────────────────────────── */}
      <section className="py-14" style={{ background: "#060606" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Everything You Need</p>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
              Shop By Category
            </h2>
            <p className="text-white/40 mt-1 text-sm">Accessories, gadgets, and more — ask us on WhatsApp for availability</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <motion.a
                key={cat.name}
                href="https://wa.me/923465900627"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  background: "rgba(201,162,39,0.04)",
                  border: "1px solid rgba(201,162,39,0.12)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,162,39,0.10)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(201,162,39,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,162,39,0.04)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
                <span className="font-bold text-sm text-white/90 mb-1">{cat.name}</span>
                <span className="text-[11px] text-white/35">{cat.sub}</span>
              </motion.a>
            ))}
          </div>

          <p className="text-center mt-8 text-white/25 text-xs">
            Tap any category to ask about availability on WhatsApp
          </p>
        </div>
      </section>

      {/* ── FEATURED PHONES ──────────────────────────────────────────────── */}
      {featured.length > 0 && (
        <section className="py-14" style={{ background: "#080808" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Staff Picks</p>
                <h2 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
                  Featured Phones
                </h2>
                <p className="text-white/40 mt-1 text-sm">Some of our most popular picks this season</p>
              </div>
              <Link
                href="/store"
                className="hidden sm:inline-flex items-center gap-1.5 font-bold text-sm transition-colors"
                style={{ color: "#C9A227" }}
              >
                All phones <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHY US ───────────────────────────────────────────────────────── */}
      <section className="py-14" style={{ background: "#040404" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Why Shah Mobile?</p>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
              Why people choose us
            </h2>
            <p className="text-white/40 mt-2 text-sm">Serving Abbottabad since 2014 — built on honesty, one customer at a time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6 transition-all hover:-translate-y-1"
                style={{
                  background: "rgba(201,162,39,0.04)",
                  border: "1px solid rgba(201,162,39,0.12)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(201,162,39,0.12)" }}
                >
                  <f.icon className="w-5 h-5" style={{ color: "#C9A227" }} />
                </div>
                <h3 className="font-bold text-base text-white mb-1.5">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section className="py-14" style={{ background: "#060606" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-1.5 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#C9A227" }} />
              ))}
              <span className="text-sm ml-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                5.0 on Google · 670+ reviews
              </span>
            </div>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
              What our customers say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6"
                style={{ background: "rgba(201,162,39,0.04)", border: "1px solid rgba(201,162,39,0.12)" }}
              >
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" style={{ color: "#C9A227" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(201,162,39,0.1)" }}>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                    style={{ background: "rgba(201,162,39,0.15)", color: "#C9A227" }}
                  >
                    {r.initial}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{r.name}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{r.time}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="py-16 text-center"
        style={{
          background: "radial-gradient(ellipse at center, rgba(201,162,39,0.08) 0%, #040404 70%)",
          borderTop: "1px solid rgba(201,162,39,0.15)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Looking for a phone?
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
            Visit us at Latif Khan Plaza, Abbottabad — or just drop us a WhatsApp message anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/store"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-black rounded-xl transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#0A0A0A" }}
            >
              Browse All Phones <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/923465900627"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-bold rounded-xl border transition-all hover:scale-105"
              style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.15)" }}
            >
              <MapPin className="w-4 h-4" /> Find Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
