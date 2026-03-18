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
    color: "bg-green-50 text-[#25D366]",
    btnClass: "bg-[#25D366] hover:bg-[#1EBE5D] text-white",
    btnLabel: "Chat Now",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+92 346 5900627",
    sub: "Call us during store hours",
    href: "tel:+923465900627",
    color: "bg-blue-50 text-blue-600",
    btnClass: "bg-blue-600 hover:bg-blue-700 text-white",
    btnLabel: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    value: "naeem.hussain262@gmail.com",
    sub: "We reply within 24 hours",
    href: "mailto:naeem.hussain@gmail.com",
    color: "bg-purple-50 text-purple-600",
    btnClass: "bg-purple-600 hover:bg-purple-700 text-white",
    btnLabel: "Send Email",
  },
  {
    icon: MapPin,
    title: "Visit Store",
    value: "Latif Khan Plaza",
    sub: "Abbottabad, 22010, Pakistan",
    href: "https://maps.google.com/?q=Latif+Khan+Plaza,+Abbottabad,+Pakistan",
    color: "bg-orange-50 text-orange-600",
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
      `Hi Shah Mobile Zone!\n\nName: ${form.name}\nPhone: ${form.phone || "N/A"}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/923465900627?text=${text}`, "_blank");
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Layout>

      {/* Hero */}
      <section className="bg-stone-100 border-b border-border py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm text-muted-foreground font-medium mb-3">We'd love to hear from you</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Reach out via WhatsApp, call us, or visit our store in Abbottabad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border/60 shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
                <p className="text-foreground font-semibold text-sm mt-1 break-all">{item.value}</p>
                <p className="text-muted-foreground text-xs mt-0.5 mb-5">{item.sub}</p>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`mt-auto w-full py-2.5 rounded-xl text-sm font-bold text-center transition-colors ${item.btnClass}`}
                >
                  {item.btnLabel}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Form + Map */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* WhatsApp Message Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold text-sm uppercase tracking-widest">Send a Message</span>
              <h2 className="font-display text-3xl font-extrabold text-foreground mt-2 mb-2">
                Get In Touch
              </h2>
              <p className="text-muted-foreground text-sm mb-8">
                Fill in the form below and we'll open a WhatsApp chat with your message pre-filled.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Ali Hassan"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number <span className="text-muted-foreground font-normal">(optional)</span></label>
                  <input
                    type="tel"
                    placeholder="e.g. +92 300 0000000"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Message *</label>
                  <textarea
                    rows={5}
                    placeholder="e.g. I'm interested in the Samsung Galaxy A56 5G. Is it in stock?"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm resize-none"
                  />
                </div>

                {sent && (
                  <div className="px-4 py-3 rounded-xl bg-green-50 text-green-700 text-sm font-medium border border-green-100">
                    ✅ WhatsApp opened with your message. We'll reply shortly!
                  </div>
                )}

                <button
                  onClick={handleWhatsAppSend}
                  disabled={!form.name || !form.message}
                  className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-200"
                >
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  This will open WhatsApp with your message. No account needed.
                </p>
              </div>
            </motion.div>

            {/* Map + Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border shadow h-72">
                <iframe
                  title="Shah Mobile Zone Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://maps.google.com/maps?q=Latif+Khan+Plaza,+Abbottabad,+Pakistan&output=embed"
                  allowFullScreen
                />
              </div>

              {/* Business Hours */}
              <div className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-bold text-lg text-foreground">Business Hours</h3>
                </div>
                <ul className="space-y-3">
                  {hours.map(h => (
                    <li key={h.day} className="flex justify-between items-center text-sm py-2 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">{h.day}</span>
                      <span className="text-primary font-semibold">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">
                  📍 Latif Khan Plaza, Abbottabad, 22010, Pakistan
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
