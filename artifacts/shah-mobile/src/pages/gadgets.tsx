import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "923465900627";

const gadgetCategories = [
  {
    icon: "⌚",
    name: "Smart Watches",
    sub: "AMOLED · Health Tracking · Water Resistant",
    items: ["Series 9 Style Smart Watch", "Ultra Smart Watch (Rugged)", "Ladies Smart Watch (Slim)", "Kids Smart Watch GPS"],
  },
  {
    icon: "💪",
    name: "Fitness Bands",
    sub: "Heart Rate · Steps · Sleep Tracking",
    items: ["Mi Band Style Fitness Tracker", "Ultra-Slim Smart Band", "Sports Fitness Band", "Blood Oxygen Monitor Band"],
  },
  {
    icon: "💡",
    name: "Ring Lights",
    sub: "10\" · 12\" · Selfie · Desktop",
    items: ['10" Ring Light with Tripod', '12" LED Ring Light', "Clip-On Selfie Ring Light", "Desktop Mini Ring Light"],
  },
  {
    icon: "🎮",
    name: "Gaming Accessories",
    sub: "Triggers · Controllers · Cooling Fans",
    items: ["L1 R1 Gaming Triggers (PUBG)", "Bluetooth Game Controller", "Mobile Cooling Fan", "Phone Gaming Grip"],
  },
  {
    icon: "🔊",
    name: "Bluetooth Speakers",
    sub: "Mini · Waterproof · Party · Soundbars",
    items: ["Mini Portable Bluetooth Speaker", "Waterproof Outdoor Speaker", "Party LED Speaker", "Desktop Sound Bar"],
  },
  {
    icon: "📸",
    name: "Photo & Video Gear",
    sub: "Tripods · Gimbals · Lens Kits",
    items: ["Flexible Phone Tripod", "Wide Angle Lens Kit", "Phone Gimbal Stabilizer", "Ring Light + Microphone Combo"],
  },
];

export default function Gadgets() {
  return (
    <Layout>
      <div style={{ background: "#080808", borderBottom: "1px solid rgba(201,162,39,0.12)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Shah Mobiles</p>
            <h1 className="text-4xl font-black text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Gadgets
            </h1>
            <p className="text-white/40 text-sm max-w-xl">
              Smart watches, fitness bands, ring lights, gaming triggers, Bluetooth speakers, and more.
              Ask us on WhatsApp for pricing and availability.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-14" style={{ background: "#060606" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gadgetCategories.map((cat, i) => {
              const waMsg = encodeURIComponent(`Hi Shah Mobiles, I'm interested in ${cat.name}. What options do you have and what are the prices?`);
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
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
            <h2 className="text-2xl font-black text-white mb-2">Looking for something specific?</h2>
            <p className="text-white/40 text-sm mb-6">We stock a wide range of gadgets. Message us on WhatsApp and we'll help you find exactly what you want.</p>
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hi Shah Mobiles, I'm looking for a gadget. Can you help me?")}`}
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
