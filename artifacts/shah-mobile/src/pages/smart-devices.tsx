import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "923465900627";

const smartDeviceCategories = [
  {
    icon: "⌚",
    name: "Smart Watches",
    sub: "Series 9 Style · Ultra · AMOLED Display",
    desc: "Track health, receive notifications, and monitor fitness — all from your wrist.",
    items: ["Apple Watch Style Series 9", "Ultra Smart Watch (49mm Titanium)", "Ladies Rose Gold Smart Watch", "Kids GPS Smart Watch"],
    badge: "Best Seller",
  },
  {
    icon: "💪",
    name: "Fitness Bands",
    sub: "Heart Rate · SpO2 · Sleep Monitor",
    desc: "Stay on top of your health with real-time heart rate, blood oxygen, and sleep tracking.",
    items: ["Mi Band Ultra Fitness Tracker", "Slim AMOLED Fitness Band", "Waterproof Sports Band", "Women's Health Tracker"],
    badge: null,
  },
  {
    icon: "🏠",
    name: "Smart Home",
    sub: "Smart Bulbs · Plugs · Cameras",
    desc: "Control your home from your phone — lights, power, and security cameras.",
    items: ["RGB Smart Bulb (Wi-Fi)", "Smart Plug with Timer", "Mini CCTV Camera (Wi-Fi)", "Smart Door Sensor"],
    badge: "New",
  },
  {
    icon: "📡",
    name: "Networking",
    sub: "Wi-Fi Routers · Data SIM Devices · Hotspots",
    desc: "Stay connected everywhere — routers, pocket Wi-Fi, and 4G data devices.",
    items: ["Pocket 4G Wi-Fi Hotspot", "Mini Wi-Fi Router", "4G USB Data Dongle", "Wi-Fi Signal Booster"],
    badge: null,
  },
  {
    icon: "🎧",
    name: "True Wireless Audio",
    sub: "ANC · Spatial Audio · Hi-Fi",
    desc: "Premium wireless earbuds and headphones with active noise cancellation.",
    items: ["ANC Pro Wireless Earbuds", "Spatial Audio Over-Ear Headphones", "Open-Ear Clip-On Earbuds", "Hi-Fi Neckband Earphones"],
    badge: null,
  },
  {
    icon: "📷",
    name: "Action & Dash Cams",
    sub: "4K Action Cameras · Car Dash Cams",
    desc: "Record your adventures or keep an eye on the road with high-quality cameras.",
    items: ["4K Action Camera (Waterproof)", "Car Dash Cam Full HD", "Drone Mini Camera", "360° Action Camera"],
    badge: "Popular",
  },
];

export default function SmartDevices() {
  return (
    <Layout>
      <div style={{ background: "#080808", borderBottom: "1px solid rgba(201,162,39,0.12)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Shah Mobiles</p>
            <h1 className="text-4xl font-black text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Smart Devices
            </h1>
            <p className="text-white/40 text-sm max-w-xl">
              Smart watches, fitness bands, smart home gadgets, networking devices, action cameras, and premium audio.
              Contact us on WhatsApp for current stock and pricing.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-14" style={{ background: "#060606" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smartDeviceCategories.map((cat, i) => {
              const waMsg = encodeURIComponent(`Hi Shah Mobiles, I'm interested in ${cat.name}. What options and prices do you have?`);
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 relative"
                  style={{ background: "rgba(201,162,39,0.04)", border: "1px solid rgba(201,162,39,0.12)" }}
                >
                  {cat.badge && (
                    <span className="absolute top-4 right-4 text-[10px] font-black px-2 py-0.5 rounded-full"
                      style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#000" }}
                    >
                      {cat.badge}
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cat.icon}</span>
                    <div>
                      <h3 className="font-black text-white text-base">{cat.name}</h3>
                      <p className="text-xs text-white/35">{cat.sub}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/45 leading-relaxed">{cat.desc}</p>
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
            <h2 className="text-2xl font-black text-white mb-2">Need a smart device recommendation?</h2>
            <p className="text-white/40 text-sm mb-6">
              Tell us your budget and use case — our team will suggest the best smart device for you.
            </p>
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hi Shah Mobiles, I need help choosing a smart device. Can you guide me?")}`}
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
