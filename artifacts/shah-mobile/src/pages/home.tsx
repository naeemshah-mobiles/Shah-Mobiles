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
  CreditCard,
  Wallet,
  Banknote,
  Gamepad2,
  Tablet,
  Phone,
} from "lucide-react";
import { getAllProducts } from "@/hooks/use-admin-store";
import { ProductCard } from "@/components/product-card";
import { useEffect, useState } from "react";

const allBrands = [
  "Apple", "Samsung", "Vivo", "Oppo", "Xiaomi",
  "Redmi", "Honor", "Tecno", "Realme", "Infinix", "OnePlus",
];

const categories = [
  { icon: "🔧", name: "Repair Tools", sub: "Kits · LCD · IC Parts", href: "https://wa.me/923465900627" },
  { icon: "💾", name: "Storage", sub: "Memory Cards · USB · OTG", href: "https://wa.me/923465900627" },
  { icon: "🚗", name: "Car Accessories", sub: "Holders · Chargers · Kits", href: "https://wa.me/923465900627" },
  { icon: "⌚", name: "Smart Gadgets", sub: "Smartwatches · Bands", href: "https://wa.me/923465900627" },
  { icon: "💡", name: "Mobile Gadgets", sub: "Ring Lights · Stands · Tripods", href: "https://wa.me/923465900627" },
  { icon: "🔊", name: "Speakers", sub: "Bluetooth · Mini · Soundbars", href: "https://wa.me/923465900627" },
  { icon: "📱", name: "Covers & Cases", sub: "Back · Flip · Tempered Glass", href: "https://wa.me/923465900627" },
  { icon: "🔌", name: "Cables & Wires", sub: "Type-C · Lightning · AUX", href: "https://wa.me/923465900627" },
  { icon: "🎧", name: "Audio", sub: "Earbuds · Headphones · Earphones", href: "https://wa.me/923465900627" },
  { icon: "⚡", name: "Chargers", sub: "Fast · Wireless · Power Banks", href: "https://wa.me/923465900627" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "100% Genuine",
    desc: "Every phone is sourced from authorized distributors. No duplicates, no fakes — ever.",
  },
  {
    icon: Tag,
    title: "Best Local Prices",
    desc: "We keep our prices fair and transparent. What you see is what you pay — no hidden charges.",
  },
  {
    icon: Headphones,
    title: "Honest Advice",
    desc: "Not sure which phone to pick? Our staff will help you find the right one for your budget.",
  },
  {
    icon: Zap,
    title: "Quick WhatsApp",
    desc: "Ask anything, order easily — we reply fast on WhatsApp so you don't have to wait.",
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

const installmentPlans = [
  { range: "PKR 20,000 – 50,000", monthly: "From PKR 2,000/mo", months: "12 months", icon: "📱", color: "#22c55e" },
  { range: "PKR 50,000 – 1,00,000", monthly: "From PKR 4,500/mo", months: "12–18 months", icon: "💎", color: "#3b82f6" },
  { range: "PKR 1,00,000 – 2,00,000", monthly: "From PKR 8,000/mo", months: "Up to 24 months", icon: "🏆", color: "#C9A227" },
  { range: "PKR 2,00,000+", monthly: "Custom Plan", months: "Flexible tenure", icon: "👑", color: "#C9A227" },
];

const paymentMethods = [
  { name: "JazzCash", icon: "🟠", desc: "Mobile wallet transfer" },
  { name: "EasyPaisa", icon: "🟢", desc: "Mobile wallet transfer" },
  { name: "Bank Transfer", icon: "🏦", desc: "All major banks accepted" },
  { name: "Visa / Mastercard", icon: "💳", desc: "Debit & credit cards" },
  { name: "Cash on Visit", icon: "💵", desc: "Pay in store, no fees" },
  { name: "Installment", icon: "📆", desc: "Easy monthly plans" },
];

const tabletProducts = [
  {
    name: "Apple iPad (10th Gen) 64GB",
    brand: "Apple",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-10th-gen-finish-unselect-gallery-2-202212?wid=720&hei=720&fmt=jpeg&qlt=90&.v=1670856361",
    price: "PKR 149,999",
    sub: "10.9\" · Wi-Fi · iPadOS 17",
  },
  {
    name: "Apple iPad Air M2 256GB",
    brand: "Apple",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-m2-finish-unselect-gallery-2-202405?wid=720&hei=720&fmt=jpeg&qlt=90&.v=1713318678",
    price: "PKR 249,999",
    sub: "11\" · Wi-Fi · M2 Chip",
  },
  {
    name: "Samsung Galaxy Tab A9+",
    brand: "Samsung",
    image: "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-x210nzaapak/gallery/pk-galaxy-tab-a9-plus-wifi-x210-sm-x210nzaapak-thumb-539285547?$650_519_PNG$",
    price: "PKR 89,999",
    sub: "11\" · Wi-Fi · Android 13",
  },
  {
    name: "Samsung Galaxy Tab S9 FE",
    brand: "Samsung",
    image: "https://images.samsung.com/is/image/samsung/p6pim/uk/sm-x510nzaabtu/gallery/uk-galaxy-tab-s9-fe-x510-sm-x510nzaabtu-thumb-537897526?$650_519_PNG$",
    price: "PKR 134,999",
    sub: "10.9\" · Wi-Fi · Android 14",
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

function SectionTitle({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div className="mb-10">
      <p className="font-bold text-sm uppercase tracking-widest mb-2" style={{ color: "#C9A227" }}>{tag}</p>
      <h2 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>{title}</h2>
      {sub && <p className="text-white/40 mt-1 text-sm">{sub}</p>}
    </div>
  );
}

export default function Home() {
  const allProducts = getAllProducts();
  const flashSaleProducts = allProducts.filter((p) => p.isFlashSale).slice(0, 4);
  const newArrivals = allProducts.filter((p) => p.isNew).slice(0, 8);
  const featured = allProducts.filter((p) => ["s12", "v2", "o1", "x3"].includes(p.id));
  const under30k = allProducts.filter((p) => p.price <= 30000).slice(0, 8);
  const gamingPhones = allProducts.filter((p) =>
    (p.specs.ram === "12GB" || p.specs.ram === "16GB") &&
    (p.category === "mobile" || !p.category) &&
    !p.isPreBook
  ).slice(0, 8);
  const countdown = useCountdown(6);

  return (
    <Layout>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[88vh] flex items-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(201,162,39,0.10) 0%, transparent 60%), #080808",
        }}
      >
        {/* Decorative lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,39,0.5), transparent)" }} />
          <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,39,0.2), transparent)" }} />
          <div className="absolute top-1/4 right-10 w-80 h-80 rounded-full opacity-5 pointer-events-none"
            style={{ background: "radial-gradient(circle, #C9A227, transparent)" }} />
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full opacity-4"
            style={{ background: "radial-gradient(circle, #C9A227, transparent)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "#C9A227" }} />
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
                Genuine smartphones, honest prices, and easy installments. Browse 110+
                devices from Apple, Samsung, Vivo, Oppo, Xiaomi & more.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
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

              <div className="flex flex-wrap gap-8">
                {[
                  { val: "110+", lbl: "phones in stock" },
                  { val: "5.0 ★", lbl: "Google rating" },
                  { val: "670+", lbl: "happy customers" },
                  { val: "Easy", lbl: "installments" },
                ].map((s, i) => (
                  <div key={s.lbl} className={i > 0 ? "pl-8 border-l" : ""} style={{ borderColor: "rgba(201,162,39,0.2)" }}>
                    <div className="text-2xl font-black text-white">{s.val}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero logo / store image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20" style={{ background: "radial-gradient(circle, #C9A227, transparent)" }} />
                <div className="relative rounded-3xl overflow-hidden border-2 shadow-2xl"
                  style={{ borderColor: "rgba(201,162,39,0.3)", boxShadow: "0 32px 80px rgba(201,162,39,0.15)" }}
                >
                  <img
                    src="/images/logo.png"
                    alt="Shah Mobile Store"
                    className="w-72 h-72 object-cover"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.parentElement!.style.display = "none";
                    }}
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl font-bold text-black text-sm shadow-xl"
                  style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)" }}
                >
                  ✓ 100% Genuine Phones
                </div>
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
          <span className="hidden sm:block opacity-40">·</span>
          <span>💳 Easy Installments Available</span>
        </div>
      </div>

      {/* ── PROMOTIONAL BANNER ───────────────────────────────────────────── */}
      <section style={{ background: "#0A0804" }}>
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: "linear-gradient(135deg, #1a1200 0%, #2a1e00 40%, #1a1200 100%)",
              border: "1px solid rgba(201,162,39,0.3)",
              boxShadow: "0 8px 40px rgba(201,162,39,0.1)",
            }}
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(201,162,39,0.15), transparent)", transform: "translate(30%, -30%)" }} />

            <div className="flex items-center gap-5 z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 shrink-0"
                style={{ borderColor: "rgba(201,162,39,0.5)" }}
              >
                <img src="/images/shop-logo.jpg" alt="Shah Mobile" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(201,162,39,0.7)" }}>
                  Shah Mobile Zone · Abbottabad
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Get Your Dream Phone
                  <br />
                  <span style={{ background: "linear-gradient(90deg, #C9A227, #F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    On Easy Installments
                  </span>
                </h2>
                <p className="text-sm mt-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                  No advance required · Flexible plans · Genuine phones guaranteed
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 z-10 shrink-0">
              <a
                href="https://wa.me/923465900627?text=Hi!%20I'm%20interested%20in%20installment%20plans."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-black text-black text-sm transition-all hover:scale-105 whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)" }}
              >
                Ask About Installments
              </a>
              <Link
                href="/store"
                className="px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105 whitespace-nowrap border"
                style={{ color: "#C9A227", borderColor: "rgba(201,162,39,0.4)", background: "rgba(201,162,39,0.06)" }}
              >
                Browse All Phones
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOP BY CATEGORY ─────────────────────────────────────────────── */}
      <section className="py-14" style={{ background: "#060606" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="Everything You Need"
            title="Shop By Category"
            sub="Accessories, gadgets, and more — ask us on WhatsApp for availability"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <motion.a
                key={cat.name}
                href={cat.href}
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
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px rgba(201,162,39,0.10)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,162,39,0.04)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
                <span className="font-bold text-sm text-white/90 mb-1">{cat.name}</span>
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>{cat.sub}</span>
              </motion.a>
            ))}
          </div>

          <p className="text-center mt-8 text-white/25 text-xs">
            Tap any category to ask about availability on WhatsApp
          </p>
        </div>
      </section>

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

      {/* ── UNDER 30K PHONES ─────────────────────────────────────────────── */}
      {under30k.length > 0 && (
        <section className="py-14" style={{ background: "#080808" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wide"
                    style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e" }}>
                    Budget Picks
                  </span>
                </div>
                <h2 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
                  Under 30k Phones
                </h2>
                <p className="text-white/40 mt-1 text-sm">Great phones at great prices — perfect for every budget</p>
              </div>
              <Link
                href="/store"
                className="hidden sm:inline-flex items-center gap-1.5 font-bold text-sm hover:opacity-80 transition-opacity"
                style={{ color: "#22c55e" }}
              >
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {under30k.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── NEW ARRIVALS ─────────────────────────────────────────────────── */}
      {newArrivals.length > 0 && (
        <section className="py-14" style={{ background: "#060606" }}>
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

      {/* ── BEST GAMING DEVICES ──────────────────────────────────────────── */}
      {gamingPhones.length > 0 && (
        <section className="py-14" style={{ background: "#080408" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Gamepad2 className="w-5 h-5" style={{ color: "#a855f7" }} />
                  <span className="font-bold text-sm uppercase tracking-widest" style={{ color: "#a855f7" }}>High Performance</span>
                </div>
                <h2 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
                  Best Gaming Devices
                </h2>
                <p className="text-white/40 mt-1 text-sm">Top-tier processors, high refresh displays, and massive batteries for hardcore gamers</p>
              </div>
              <Link
                href="/store"
                className="hidden sm:inline-flex items-center gap-1.5 font-bold text-sm hover:opacity-80 transition-opacity"
                style={{ color: "#a855f7" }}
              >
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {gamingPhones.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── IPADS & TABLETS ──────────────────────────────────────────────── */}
      <section className="py-14" style={{ background: "#050508" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Tablet className="w-5 h-5" style={{ color: "#38bdf8" }} />
                <span className="font-bold text-sm uppercase tracking-widest" style={{ color: "#38bdf8" }}>iPads & Tablets</span>
              </div>
              <h2 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
                iPads & Tabs
              </h2>
              <p className="text-white/40 mt-1 text-sm">Apple iPads & Samsung Galaxy Tabs — ask for latest pricing and availability</p>
            </div>
            <a
              href="https://wa.me/923465900627?text=Hi!%20I'm%20interested%20in%20iPads%20and%20Tablets."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 font-bold text-sm hover:opacity-80 transition-opacity"
              style={{ color: "#38bdf8" }}
            >
              Ask on WhatsApp <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tabletProducts.map((tab, i) => (
              <motion.a
                key={tab.name}
                href="https://wa.me/923465900627?text=Hi!%20I'm%20interested%20in%20buying%20a%20tablet%20or%20iPad."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group block rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer"
                style={{
                  background: "#141414",
                  borderColor: "rgba(56,189,248,0.12)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(56,189,248,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(56,189,248,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(56,189,248,0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                {/* Image */}
                <div className="aspect-square flex items-center justify-center p-6 bg-white">
                  <img
                    src={tab.image}
                    alt={tab.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    style={{ mixBlendMode: "multiply" }}
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.mixBlendMode = "normal";
                      img.src = `https://placehold.co/400x400/1a1a1a/38bdf8?text=${encodeURIComponent(tab.brand)}`;
                    }}
                  />
                </div>
                {/* Info */}
                <div className="p-4">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ background: "rgba(56,189,248,0.12)", color: "#38bdf8", border: "1px solid rgba(56,189,248,0.25)" }}>
                    {tab.brand}
                  </span>
                  <h3 className="font-bold text-sm text-white leading-snug mb-1">{tab.name}</h3>
                  <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>{tab.sub}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-base" style={{ color: "#C9A227" }}>{tab.price}</span>
                    <span className="text-xs font-bold px-2.5 py-1.5 rounded-lg text-white"
                      style={{ background: "#25D366" }}>
                      Ask Price
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: "rgba(56,189,248,0.04)", borderColor: "rgba(56,189,248,0.15)" }}>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 shrink-0" style={{ color: "#38bdf8" }} />
              <div>
                <p className="font-bold text-white text-sm">Want the latest iPad or Samsung Tab pricing?</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Message us on WhatsApp for real-time prices and availability</p>
              </div>
            </div>
            <a
              href="https://wa.me/923465900627?text=Hi!%20I'm%20interested%20in%20iPads%20and%20Tablets.%20Please%20share%20latest%20prices."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl font-bold text-white text-sm transition-all hover:scale-105 shrink-0"
              style={{ background: "#25D366" }}
            >
              <MessageCircle className="w-4 h-4 inline mr-1.5" />
              WhatsApp for Prices
            </a>
          </div>
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

      {/* ── INSTALLMENT PLANS ────────────────────────────────────────────── */}
      <section className="py-14" style={{ background: "#040404" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="Buy Now Pay Later"
            title="Easy Installment Plans"
            sub="Get your dream phone today — pay comfortably every month with zero stress"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {installmentPlans.map((plan, i) => (
              <motion.div
                key={plan.range}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{ background: "rgba(201,162,39,0.04)", border: "1px solid rgba(201,162,39,0.12)" }}
              >
                <span className="text-3xl">{plan.icon}</span>
                <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>{plan.range}</p>
                  <p className="text-lg font-black text-white">{plan.monthly}</p>
                  <p className="text-xs mt-1" style={{ color: plan.color }}>{plan.months}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-5"
            style={{ background: "linear-gradient(135deg, #1a1200, #2a1e00)", border: "1px solid rgba(201,162,39,0.25)" }}
          >
            <div>
              <p className="font-black text-xl text-white mb-1">Ready to buy on installment?</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                Message us on WhatsApp with your budget — we'll set up a custom plan for you
              </p>
            </div>
            <a
              href="https://wa.me/923465900627?text=Hi!%20I'm%20interested%20in%20buying%20a%20phone%20on%20installment.%20Please%20help%20me%20with%20the%20plans."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl font-black text-black transition-all hover:scale-105 text-sm shrink-0"
              style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)" }}
            >
              Get My Installment Plan
            </a>
          </div>

          {/* Terms */}
          <p className="text-center mt-5 text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            * Installment plans are subject to approval and may require a guarantor. Terms may vary by model. Contact us for details.
          </p>
        </div>
      </section>

      {/* ── PAYMENT METHODS ──────────────────────────────────────────────── */}
      <section className="py-14" style={{ background: "#060606" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="We Accept"
            title="Payment Methods"
            sub="Multiple ways to pay — pick what works best for you"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {paymentMethods.map((method, i) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="text-3xl mb-3">{method.icon}</span>
                <p className="font-bold text-sm text-white mb-1">{method.name}</p>
                <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────────── */}
      <section className="py-14" style={{ background: "#040404" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="Why Shah Mobile?"
            title="Why people choose us"
            sub="Serving Abbottabad since 2014 — built on honesty, one customer at a time."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6 transition-all hover:-translate-y-1"
                style={{ background: "rgba(201,162,39,0.04)", border: "1px solid rgba(201,162,39,0.12)" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
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
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm shrink-0"
                    style={{ background: "rgba(201,162,39,0.15)", color: "#C9A227" }}>
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

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-14" style={{ background: "#040404" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Ready to find your perfect phone?
            </h2>
            <p className="text-white/40 mb-8 text-base leading-relaxed">
              Visit our store in Latif Khan Plaza, Abbottabad — or message us on WhatsApp and we'll help you pick the right device at the right price.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://wa.me/923465900627"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-black rounded-xl text-white transition-all hover:scale-105 text-base"
                style={{ background: "#25D366" }}
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <Link
                href="/store"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl transition-all hover:scale-105 text-base border"
                style={{ color: "#C9A227", borderColor: "rgba(201,162,39,0.35)", background: "rgba(201,162,39,0.06)" }}
              >
                Browse All Phones <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
