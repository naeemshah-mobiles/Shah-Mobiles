import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "923465900627";

const categories = [
  {
    icon: "🔌",
    name: "Cables",
    sub: "Type-C · Lightning · AUX · Micro-USB",
    items: ["Type-C Data Cable (1m / 2m)", "Lightning Cable (Original Quality)", "AUX 3.5mm Cable", "Micro-USB Cable"],
  },
  {
    icon: "⚡",
    name: "Chargers",
    sub: "Fast Charging · Wireless · Travel Adapters",
    items: ["33W Fast Charger", "65W Super VOOC Charger", "15W Wireless Charger Pad", "Dual-Port USB Charger"],
  },
  {
    icon: "🔋",
    name: "Power Banks",
    sub: "10,000mAh · 20,000mAh · Slim Series",
    items: ["10,000mAh Slim Power Bank", "20,000mAh Fast Charge Bank", "Mini Pocket Power Bank", "Wireless Power Bank"],
  },
  {
    icon: "🎧",
    name: "Audio — Earbuds & AirPods",
    sub: "TWS Earbuds · AirPods Replicas · In-Ear",
    items: ["TWS Bluetooth Earbuds", "AirPods Style (High Copy)", "In-Ear Wired Earphones", "Neckband Bluetooth"],
  },
  {
    icon: "🎵",
    name: "Wireless Headphones",
    sub: "Over-Ear · Foldable · Noise Cancelling",
    items: ["Over-Ear Bluetooth Headphones", "Foldable Wired Headset", "Bass Boost Headphones", "Gaming Headset"],
  },
  {
    icon: "📱",
    name: "Back Covers",
    sub: "Silicon · Hard · Leather · Transparent",
    items: ["Transparent Silicone Cover", "Hard Shockproof Case", "Leather Flip Cover", "Ring Stand Case"],
  },
  {
    icon: "🛡️",
    name: "Tempered Glass",
    sub: "Full-Glue · Anti-Glare · Privacy",
    items: ["Full-Glue Tempered Glass", "Anti-Glare Matte Glass", "Privacy Screen Protector", "Camera Lens Protector"],
  },
  {
    icon: "💾",
    name: "Storage",
    sub: "Memory Cards · USB Flash Drives · OTG",
    items: ["microSD Card 64GB / 128GB / 256GB", "USB Flash Drive 32GB / 64GB", "OTG Adapter (Type-C & Micro)", "Memory Card Reader"],
  },
  {
    icon: "🔧",
    name: "Repair Parts",
    sub: "LCD Screens · Charging Ports · IC Parts · Tool Kits",
    items: ["LCD Display Screens", "Charging Port Flex", "Battery Replacement", "Mobile Repair Tool Kit"],
  },
];

export default function Accessories() {
  return (
    <Layout>
      <div style={{ background: "#080808", borderBottom: "1px solid rgba(201,162,39,0.12)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Shah Mobiles</p>
            <h1 className="text-4xl font-black text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Accessories
            </h1>
            <p className="text-white/40 text-sm max-w-xl">
              Cables, chargers, audio, protection, storage, and repair parts — everything your phone needs.
              Ask us on WhatsApp for availability and pricing.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-14" style={{ background: "#060606" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const waMsg = encodeURIComponent(`Hi Shah Mobiles, I'm looking for ${cat.name}. What's available and what are the prices?`);
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300"
                  style={{ background: "rgba(201,162,39,0.04)", border: "1px solid rgba(201,162,39,0.12)" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cat.icon}</span>
                    <div>
                      <h3 className="font-black text-white text-base">{cat.name}</h3>
                      <p className="text-xs text-white/35">{cat.sub}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="text-sm text-white/55 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#C9A227" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${PHONE_NUMBER}?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 text-white"
                    style={{ background: "#25D366" }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Ask on WhatsApp
                  </a>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-14 rounded-2xl p-8 text-center" style={{ background: "rgba(201,162,39,0.06)", border: "1px solid rgba(201,162,39,0.2)" }}>
            <h2 className="text-2xl font-black text-white mb-2">Can't find what you need?</h2>
            <p className="text-white/40 text-sm mb-6">Message us on WhatsApp — we'll source it for you or let you know when it's in stock.</p>
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hi Shah Mobiles, I'm looking for an accessory. Can you help me find it?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-black transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#000" }}
            >
              <MessageCircle className="w-4 h-4" />
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
