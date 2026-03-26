import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { MapPin, Clock, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const contactItems = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+92 346 5900627",
    sub: "Fastest way to reach us",
    href: "https://wa.me/923465900627",
    color: "bg-green-400/10 text-[#25D366]",
    btnClass: "bg-[#25D366] hover:bg-[#1EBE5D] text-white",
    btnLabel: "Chat Now",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+92 346 5900627",
    sub: "Call us during store hours",
    href: "tel:+923465900627",
    color: "bg-blue-400/10 text-blue-400",
    btnClass: "bg-blue-600 hover:bg-blue-700 text-white",
    btnLabel: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    value: "naeem.hussain262@gmail.com",
    sub: "We reply within 24 hours",
    href: "mailto:naeem.hussain262@gmail.com",
    color: "bg-purple-400/10 text-purple-400",
    btnClass: "bg-purple-600 hover:bg-purple-700 text-white",
    btnLabel: "Send Email",
  },
  {
    icon: MapPin,
    title: "Visit Store",
    value: "Latif Khan Plaza",
    sub: "Abbottabad, 22010, Pakistan",
    href: "https://goo.gl/maps/YOUR_ACTUAL_MAP_LINK",
    color: "bg-orange-400/10 text-orange-400",
    btnClass: "bg-orange-600 hover:bg-orange-700 text-white",
    btnLabel: "Get Directions",
  },
];

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
  { day: "Saturday", time: "9:00 AM – 9:00 PM" },
  { day: "Sunday", time: "10:00 AM – 7:00 PM" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleWhatsAppSend = () => {
    if (!form.name || !form.message) return;
    const text = encodeURIComponent(
      `Hi Shah Mobile Zone!\n\nName: ${form.name}\nPhone: ${form.phone || "N/A"}\n\nMessage:\n${form.message}`,
    );
    window.open(`https://wa.me/923465900627?text=${text}`, "_blank");
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#111111] border-b border-white/5 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-primary font-medium mb-3 tracking-widest uppercase">
              We'd love to hear from you
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Contact Us
            </h1>
            <p className="text-lg text-gray-400">
              Reach out via WhatsApp, call us, or visit our store in Abbottabad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 shadow-xl hover:border-primary/30 transition-all flex flex-col"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 font-semibold text-sm mt-1 break-all">
                  {item.value}
                </p>
                <p className="text-gray-500 text-xs mt-0.5 mb-5">{item.sub}</p>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`mt-auto w-full py-2.5 rounded-xl text-sm font-bold text-center transition-all ${item.btnClass}`}
                >
                  {item.btnLabel}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Form + Map */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* WhatsApp Message Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold text-sm uppercase tracking-widest">
                Send a Message
              </span>
              <h2 className="font-display text-3xl font-extrabold text-white mt-2 mb-2">
                Get In Touch
              </h2>
              <p className="text-gray-400 text-sm mb-8">
                Fill in the form below and we'll open a WhatsApp chat with your
                message pre-filled.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ali Hassan"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                    Phone Number{" "}
                    <span className="text-gray-500 font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +92 300 0000000"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="e.g. I'm interested in the Samsung Galaxy A56 5G. Is it in stock?"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm resize-none"
                  />
                </div>

                {sent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="px-4 py-3 rounded-xl bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20"
                  >
                    ✅ WhatsApp opened with your message. We'll reply shortly!
                  </motion.div>
                )}

                <button
                  onClick={handleWhatsAppSend}
                  disabled={!form.name || !form.message}
                  className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
                >
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </button>
              </div>
            </motion.div>

            {/* Map + Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {/* Map Container */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-72">
                <iframe
                  title="Shah Mobile Zone Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{
                    border: 0,
                    filter: "grayscale(1) invert(0.9) contrast(1.2)",
                  }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.444!2d73.21!3d34.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA5JzAwLjAiTiA3M8KwMTInMzYuMCJF!5e0!3m2!1sen!2spk!4v1620000000000!5m2!1sen!2spk"
                  allowFullScreen
                />
              </div>

              {/* Business Hours Container */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 shadow-xl">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-bold text-lg text-white">
                    Business Hours
                  </h3>
                </div>
                <ul className="space-y-3">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between items-center text-sm py-2 border-b border-white/5 last:border-0"
                    >
                      <span className="font-medium text-gray-300">{h.day}</span>
                      <span className="text-primary font-semibold">
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-start gap-2 text-xs text-gray-500">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Latif Khan Plaza, Abbottabad, 22010, Pakistan</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
