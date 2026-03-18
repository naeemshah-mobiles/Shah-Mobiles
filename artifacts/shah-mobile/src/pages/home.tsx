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
} from "lucide-react";
import { getAllProducts } from "@/hooks/use-admin-store";
import { ProductCard } from "@/components/product-card";

const brands = ["Samsung", "Vivo", "Oppo", "Xiaomi", "Redmi", "Honor", "Tecno"];

const features = [
  {
    icon: ShieldCheck,
    title: "100% Genuine",
    desc: "Every phone is sourced from authorized distributors. No duplicates, no fakes — ever.",
    bg: "bg-blue-100",
    color: "text-blue-700",
  },
  {
    icon: Tag,
    title: "Best Local Prices",
    desc: "We keep our prices fair and transparent. What you see is what you pay — no hidden charges.",
    bg: "bg-emerald-100",
    color: "text-emerald-700",
  },
  {
    icon: Headphones,
    title: "Honest Advice",
    desc: "Not sure which phone to pick? Our staff will help you find the right one for your budget.",
    bg: "bg-violet-100",
    color: "text-violet-700",
  },
  {
    icon: Zap,
    title: "Quick WhatsApp",
    desc: "Ask anything, order easily — we reply fast on WhatsApp so you don't have to wait.",
    bg: "bg-amber-100",
    color: "text-amber-700",
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

export default function Home() {
  const allProducts = getAllProducts();
  const featured = allProducts.filter((p) =>
    ["s12", "v2", "o1", "x3"].includes(p.id),
  );

  return (
    <Layout>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-blue-950 min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700/30 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-7">
                <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                <span className="text-amber-300/90 text-sm font-medium">
                  Abbottabad, Pakistan · Est. 2014
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.1] mb-6">
                Abbottabad's
                <br />
                <span className="text-amber-300">Trusted Mobile</span>
                <br />
                Store
              </h1>

              <p className="text-lg text-blue-200/80 leading-relaxed mb-10">
                Genuine smartphones, honest prices, and real advice. Browse 94+
                devices from Samsung, Vivo, Oppo, Xiaomi, and more.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/store"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:bg-amber-50 transition-colors text-base"
                >
                  Browse Phones <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/923465900627"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366] text-white font-bold rounded-xl shadow-lg hover:bg-[#1EBE5D] transition-colors text-base"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-10 divide-x divide-blue-800/50">
                {[
                  { val: "94+", lbl: "phones in stock" },
                  { val: "5.0 ★", lbl: "Google rating" },
                  { val: "670+", lbl: "happy customers" },
                  { val: "50+", lbl: "top brands" },
                ].map((s, i) => (
                  <div key={s.lbl} className={i > 0 ? "pl-10" : ""}>
                    <div className="text-2xl font-bold text-white">{s.val}</div>
                    <div className="text-blue-300/70 text-sm mt-0.5">
                      {s.lbl}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── AMBER INFO BAR ───────────────────────────────────────────────── */}
      <div className="bg-amber-400 py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-6 text-amber-950 text-sm font-semibold">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Latif Khan Plaza, Abbottabad
          </span>
          <span className="hidden sm:block text-amber-600">·</span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> Opens 9 AM Daily
          </span>
          <span className="hidden sm:block text-amber-600">·</span>
          <span>📞 +92 346 5900627</span>
        </div>
      </div>

      {/* ── BRANDS ───────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-5">
            Brands we carry
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2.5">
            {brands.map((brand) => (
              <Link
                key={brand}
                href="/store"
                className="px-5 py-2 rounded-full border border-border bg-secondary hover:bg-primary hover:text-white hover:border-primary transition-colors text-sm font-semibold text-foreground"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Why people choose us
            </h2>
            <p className="text-muted-foreground mt-2">
              Serving Abbottabad since 2014 — built on honesty, one customer at
              a time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4`}
                >
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3 className="font-semibold text-base text-foreground mb-1.5">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ─────────────────────────────────────────────────────── */}
      {featured.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  Featured Phones
                </h2>
                <p className="text-muted-foreground mt-1 text-sm">
                  Some of our most popular picks this season
                </p>
              </div>
              <Link
                href="/store"
                className="hidden sm:inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline"
              >
                All phones <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-8 sm:hidden">
              <Link
                href="/store"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors"
              >
                See all phones <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-1.5 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
              <span className="text-muted-foreground text-sm ml-1">
                5.0 on Google · 670+ reviews
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">
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
                className="bg-white rounded-2xl p-6 border border-border shadow-sm"
              >
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-5">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm flex-shrink-0">
                    {r.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {r.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {r.time}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-blue-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Looking for a phone?
          </h2>
          <p className="text-blue-200/80 text-lg mb-8">
            Visit us at Latif Khan Plaza, Abbottabad — or just drop us a
            WhatsApp message anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/store"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-900 font-bold rounded-xl hover:bg-amber-50 transition-colors"
            >
              Browse All Phones <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Find Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
