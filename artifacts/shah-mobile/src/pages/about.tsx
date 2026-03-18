import { motion } from "framer-motion";
import { Link } from "wouter";
import { Layout } from "@/components/layout";
import {
  MapPin,
  Clock,
  Phone,
  Star,
  Heart,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
} from "lucide-react";

const reviews = [
  {
    name: "Ihtisham Shah",
    rating: 5,
    time: "5 months ago",
    text: "Excellent Mobile Shop! Great selection of phones, accessories, and gadgets. The staff was friendly, knowledgeable, and helped me find exactly what I needed at a great price. Fast service and genuine products. Highly recommended!",
  },
  {
    name: "Zaraq Khan",
    rating: 5,
    time: "6 months ago",
    text: "Excellent mobile shop with great variety, fair prices, and honest dealing. The staff is very cooperative and provides helpful guidance. Highly recommended for anyone looking to buy mobiles and accessories.",
  },
  {
    name: "Muhammad Maaz Masood",
    rating: 5,
    time: "5 months ago",
    text: "Great mobile shop! Wide variety of phones, fair prices, and very helpful staff. Excellent service and quick setup — highly recommended.",
  },
];

const stats = [
  { value: "5.0★", label: "Google Rating", icon: Star },
  { value: "670+", label: "Happy Customers", icon: Users },
  { value: "94+", label: "Devices In Stock", icon: ShieldCheck },
  { value: "50+", label: "Top Brands", icon: Award },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-stone-100 border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Shah Mobile
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Abbottabad's most trusted mobile store — built on honesty,
              quality, and a genuine passion for technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-border/50 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-3xl font-extrabold text-foreground">
                  {s.value}
                </div>
                <div className="text-muted-foreground text-sm mt-1">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold text-sm uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="font-display text-4xl font-extrabold text-foreground mt-2 mb-6">
                Serving Abbottabad with Pride
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Shah Mobile Zone is a proudly women-owned mobile retail
                  business located in the heart of Abbottabad, Pakistan. We
                  started with a simple mission: provide the people of
                  Abbottabad with genuine, high-quality smartphones at fair,
                  transparent prices.
                </p>
                <p>
                  Over the years, we have grown to become one of the most
                  trusted mobile stores in the region — stocking over 94 devices
                  from 7 premium brands including Samsung, Vivo, Oppo, Xiaomi,
                  Redmi, Honor, and Tecno.
                </p>
                <p>
                  Our team is knowledgeable, honest, and always ready to guide
                  you toward the perfect phone for your needs and budget. We
                  believe in building long-term relationships with our
                  customers, not just one-time sales.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-600 font-semibold text-sm border border-pink-100">
                  <Heart className="w-4 h-4" /> Genuine Products
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-600 font-semibold text-sm border border-green-100">
                  <ShieldCheck className="w-4 h-4" /> 100% Genuine
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm border border-blue-100">
                  <Award className="w-4 h-4" /> 5-Star Rated
                </span>
              </div>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-border/60 shadow-lg"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Store Information
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      Address
                    </div>
                    <div className="text-muted-foreground text-sm mt-0.5">
                      Latif Khan Plaza, Abbottabad, 22010, Pakistan
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      Business Hours
                    </div>
                    <div className="text-muted-foreground text-sm mt-0.5">
                      Opens 9 AM · Daily
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      Phone / WhatsApp
                    </div>
                    <a
                      href="tel:+923465900627"
                      className="text-primary text-sm mt-0.5 hover:underline block"
                    >
                      +92 346 5900627
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      Google Rating
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                      <span className="text-muted-foreground text-sm ml-1">
                        5.0 (600+ reviews)
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

              <a
                href="https://wa.me/923465900627"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#1EBE5D] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">
              Find Us
            </span>
            <h2 className="font-display text-3xl font-extrabold text-foreground mt-2">
              Our Location
            </h2>
            <p className="text-muted-foreground mt-2">
              Latif Khan Plaza, Abbottabad, 22010, Pakistan
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border shadow-lg h-80">
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
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">
              Google Reviews
            </span>
            <h2 className="font-display text-3xl font-extrabold text-foreground mt-2">
              Customer Feedback
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-border/60 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed italic mb-5">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm flex-shrink-0">
                    {r.name.charAt(0)}
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

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-extrabold text-white mb-4">
            Come Visit Us Today
          </h2>
          <p className="text-white/70 mb-8">
            We're open from 9 AM daily at Latif Khan Plaza, Abbottabad.
          </p>
          <Link
            href="/store"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-white/90 transition-all text-lg shadow-xl"
          >
            Browse Our Store <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
