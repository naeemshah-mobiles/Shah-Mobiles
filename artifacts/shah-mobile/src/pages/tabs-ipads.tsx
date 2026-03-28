import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { MessageCircle, Tablet, ChevronRight } from "lucide-react";

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
    name: "Apple iPad Pro M4 256GB",
    brand: "Apple",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-13-m4-finish-unselect-gallery-1-202405?wid=720&hei=720&fmt=jpeg&qlt=90&.v=1713920820",
    price: "PKR 379,999",
    sub: "11\" · Wi-Fi · M4 Chip",
  },
  {
    name: "Apple iPad Mini (6th Gen)",
    brand: "Apple",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-unselect-gallery-2-202109?wid=720&hei=720&fmt=jpeg&qlt=90&.v=1629913938",
    price: "PKR 119,999",
    sub: "8.3\" · Wi-Fi · A15 Bionic",
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
  {
    name: "Samsung Galaxy Tab S9+",
    brand: "Samsung",
    image: "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-x810nzaapak/gallery/pk-galaxy-tab-s9-plus-x810-sm-x810nzaapak-thumb-537580062?$650_519_PNG$",
    price: "PKR 229,999",
    sub: "12.4\" · Wi-Fi · Android 14",
  },
  {
    name: "Samsung Galaxy Tab A8",
    brand: "Samsung",
    image: "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-x200nzaapak/gallery/pk-galaxy-tab-a8-wifi-x200-sm-x200nzaapak-thumb-520429059?$650_519_PNG$",
    price: "PKR 59,999",
    sub: "10.5\" · Wi-Fi · Android 11",
  },
];

export default function TabsIpads() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative py-20"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(56,189,248,0.08) 0%, transparent 60%), #080808",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Tablet className="w-5 h-5" style={{ color: "#38bdf8" }} />
              <p className="font-bold text-sm uppercase tracking-widest" style={{ color: "#38bdf8" }}>
                iPads & Tablets
              </p>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tabs & iPads
            </h1>
            <p className="text-white/45 text-lg max-w-xl mx-auto mb-8">
              Apple iPads and Samsung Galaxy Tabs — ask us on WhatsApp for the
              latest pricing, availability, and installment options.
            </p>
            <a
              href="https://wa.me/923465900627?text=Hi!%20I%27m%20interested%20in%20iPads%20and%20Tablets.%20Please%20share%20latest%20prices."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-white text-base transition-all hover:scale-105"
              style={{ background: "#25D366" }}
            >
              <MessageCircle className="w-5 h-5" />
              Ask for Prices on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-14" style={{ background: "#050508" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tabletProducts.map((tab, i) => (
              <motion.a
                key={tab.name}
                href="https://wa.me/923465900627?text=Hi!%20I%27m%20interested%20in%20buying%20a%20tablet%20or%20iPad."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
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
                <div className="p-4">
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{
                      background: "rgba(56,189,248,0.12)",
                      color: "#38bdf8",
                      border: "1px solid rgba(56,189,248,0.25)",
                    }}
                  >
                    {tab.brand}
                  </span>
                  <h3 className="font-bold text-sm text-white leading-snug mb-1">{tab.name}</h3>
                  <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>{tab.sub}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-base" style={{ color: "#C9A227" }}>
                      {tab.price}
                    </span>
                    <span
                      className="text-xs font-bold px-2.5 py-1.5 rounded-lg text-white"
                      style={{ background: "#25D366" }}
                    >
                      Ask Price
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Info Banner */}
          <div
            className="mt-10 p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: "rgba(56,189,248,0.04)", borderColor: "rgba(56,189,248,0.15)" }}
          >
            <div className="flex items-center gap-3">
              <Tablet className="w-5 h-5 shrink-0" style={{ color: "#38bdf8" }} />
              <div>
                <p className="font-bold text-white text-sm">
                  Want the latest iPad or Samsung Tab pricing?
                </p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Message us on WhatsApp for real-time prices, availability, and installment plans
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/923465900627?text=Hi!%20I%27m%20interested%20in%20iPads%20and%20Tablets.%20Please%20share%20latest%20prices."
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
    </Layout>
  );
}
