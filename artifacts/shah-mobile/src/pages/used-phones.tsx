import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { MessageCircle, ShieldCheck, Tag, RefreshCw, CheckCircle } from "lucide-react";
import { getAllProducts } from "@/hooks/use-admin-store";
import { ProductCard } from "@/components/product-card";

const usedFeatures = [
  {
    icon: ShieldCheck,
    title: "Inspected & Tested",
    desc: "Every used phone is physically inspected and tested before listing.",
  },
  {
    icon: Tag,
    title: "Honest Pricing",
    desc: "Fair market prices based on condition — no hidden markups.",
  },
  {
    icon: RefreshCw,
    title: "Exchange Available",
    desc: "Bring your old phone and exchange it for a used or new device.",
  },
  {
    icon: CheckCircle,
    title: "Condition Graded",
    desc: "Each phone is graded — Good, Very Good, or Like New.",
  },
];

export default function UsedPhones() {
  const allProducts = getAllProducts();
  const usedProducts = allProducts.filter((p) => p.isUsed);

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative py-20"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(201,162,39,0.08) 0%, transparent 60%), #080808",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-bold text-sm uppercase tracking-widest mb-3" style={{ color: "#C9A227" }}>
              Budget-Friendly Options
            </p>
            <h1
              className="text-4xl sm:text-5xl font-black text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Used Phones
            </h1>
            <p className="text-white/45 text-lg max-w-xl mx-auto mb-8">
              Pre-owned smartphones in great condition — tested, honest pricing,
              and available for exchange. Ask us on WhatsApp for the latest stock.
            </p>
            <a
              href="https://wa.me/923465900627?text=Hi!%20I%20am%20looking%20for%20used%20phones.%20Please%20share%20available%20stock."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-white text-base transition-all hover:scale-105"
              style={{ background: "#25D366" }}
            >
              <MessageCircle className="w-5 h-5" />
              Ask About Used Phones
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12" style={{ background: "#060606" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {usedFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6"
                style={{ background: "rgba(201,162,39,0.04)", border: "1px solid rgba(201,162,39,0.12)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(201,162,39,0.12)" }}
                >
                  <f.icon className="w-5 h-5" style={{ color: "#C9A227" }} />
                </div>
                <h3 className="font-bold text-base text-white mb-1.5">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid (if any added via admin as used) */}
      {usedProducts.length > 0 ? (
        <section className="py-14" style={{ background: "#080808" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-black text-white mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Available Used Phones
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {usedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-14" style={{ background: "#080808" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-3xl p-10 text-center"
              style={{ background: "#0D0D0D", border: "1px solid rgba(201,162,39,0.15)" }}
            >
              <div className="text-5xl mb-4">📱</div>
              <h2 className="text-2xl font-black text-white mb-3">
                Used Phone Stock Changes Daily
              </h2>
              <p className="text-white/40 mb-8 max-w-md mx-auto">
                We receive new used phones regularly. Message us on WhatsApp and
                we'll share what's currently available with prices and photos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/923465900627?text=Hi!%20I%20am%20looking%20for%20used%20phones.%20Please%20share%20available%20stock%20with%20prices."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-black text-white text-base transition-all hover:scale-105"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Check Available Stock
                </a>
                <a
                  href="https://wa.me/923465900627?text=Hi!%20I%20want%20to%20exchange%20my%20old%20phone.%20Please%20share%20the%20exchange%20offer."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base transition-all hover:scale-105 border"
                  style={{
                    color: "#C9A227",
                    borderColor: "rgba(201,162,39,0.4)",
                    background: "rgba(201,162,39,0.06)",
                  }}
                >
                  <RefreshCw className="w-5 h-5" />
                  Exchange My Phone
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
