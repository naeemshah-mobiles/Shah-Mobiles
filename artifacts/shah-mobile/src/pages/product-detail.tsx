import { useRoute, Link } from "wouter";
import {
  ArrowLeft,
  Cpu,
  HardDrive,
  Camera,
  Battery,
  Maximize,
  Settings,
  CheckCircle2,
} from "lucide-react";
import { Layout } from "@/components/layout";
import { useProduct } from "@/hooks/use-products";
import { formatPKR, productDetailedSpecs } from "@/data/products";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const { product } = useProduct(params?.id || "");

  const getImagePath = (path: string) => {
    if (!path) return "";
    let cleanPath = path.replace(/^public\//, "");
    cleanPath = cleanPath.replace(/^\.\//, "");
    return cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
  };

  if (!product) {
    return (
      <Layout>
        <div className="flex-1 flex flex-col items-center justify-center py-32 px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-400 mb-8">
            The device you are looking for does not exist or has been removed.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </Layout>
    );
  }

  const handleWhatsAppClick = () => {
    const priceStr = `Rs. ${product.price.toLocaleString()}`;
    const msg = product.isPreBook
      ? `Hi Shah Mobiles, I want to Pre-Book the ${product.name} for ${priceStr}. Please confirm availability and booking details.`
      : `Hi Shah Mobiles, I want to buy ${product.name} for ${priceStr}. Is it available?`;
    const text = encodeURIComponent(msg);
    window.open(`https://wa.me/923465900627?text=${text}`, "_blank");
  };

  const specsList = [
    { label: "Memory (RAM)", value: product.specs.ram, icon: Cpu },
    { label: "Storage", value: product.specs.storage, icon: HardDrive },
    { label: "Camera", value: product.specs.camera, icon: Camera },
    { label: "Battery", value: product.specs.battery, icon: Battery },
    { label: "Display", value: product.specs.display, icon: Maximize },
    { label: "Operating System", value: product.specs.os, icon: Settings },
  ];

  return (
    <Layout>
      <div className="bg-[#0a0a0a] flex-1 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to catalog</span>
          </Link>

          <div className="bg-[#1a1a1a] rounded-3xl p-6 md:p-10 shadow-2xl border border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl bg-white/5 p-8 flex items-center justify-center min-h-400px border border-white/10"
              >
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-widest text-primary">
                    {product.brand}
                  </span>
                </div>
                <img
                  src={getImagePath(product.image)}
                  alt={product.name}
                  className="w-full max-w-400px h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/400x400?text=No+Image+Found";
                  }}
                />
              </motion.div>

              {/* Details Column */}
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 text-green-400 font-semibold text-sm mb-4 bg-green-400/10 w-max px-3 py-1 rounded-full border border-green-400/20">
                    <CheckCircle2 className="w-4 h-4" />
                    In Stock
                  </div>

                  <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                    {product.name}
                  </h1>

                  <div className="mb-8 pb-8 border-b border-white/10">
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">
                      Price
                    </p>
                    <p className="font-display text-3xl md:text-4xl font-extrabold text-primary">
                      {formatPKR(product.price)}
                    </p>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-6">
                    Technical Specifications
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {specsList.filter(s => s.value && s.value !== "N/A").map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <div className="p-2 bg-[#2a2a2a] rounded-lg shadow-sm">
                          <spec.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-0.5">
                            {spec.label}
                          </p>
                          <p className="font-semibold text-gray-200 text-sm">
                            {spec.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Extra Specs from Admin */}
                  {product.extraSpecs && Object.keys(product.extraSpecs).length > 0 && (
                    <div className="mb-10 rounded-xl border border-white/10 overflow-hidden">
                      {Object.entries(product.extraSpecs).map(([key, val], i) => (
                        <div key={i}
                          className={`flex items-stretch min-h-40px ${i % 2 === 0 ? "bg-white/5" : "bg-transparent"}`}>
                          <div className="w-2/5 px-4 py-2.5 flex items-center">
                            <span className="text-sm font-semibold text-gray-400">{key}</span>
                          </div>
                          <div className="w-px bg-white/10 shrink-0" />
                          <div className="flex-1 px-4 py-2.5 flex items-center">
                            <span className="text-sm text-gray-200">{val}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Button */}
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full py-4 px-8 rounded-2xl font-bold text-lg text-white bg-[#25D366] hover:bg-[#1EBE5D] shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    Buy via WhatsApp
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-4">
                    Clicking this button will open a WhatsApp chat with our
                    sales team.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Full Specifications Table */}
            {(() => {
              const ds = productDetailedSpecs[product.id];
              if (!ds) return null;

              const rows: { label: string; value: string }[] = [
                { label: "Dimensions", value: ds.dimensions },
                { label: "Weight", value: ds.weight },
                { label: "Display Type", value: ds.displayType },
                { label: "Screen Size", value: ds.screenSize },
                { label: "Refresh Rate", value: ds.refreshRate },
                { label: "Screen Resolution", value: ds.resolution },
                { label: "Processor (CPU)", value: ds.processor },
                { label: "GPU", value: ds.gpu },
                { label: "RAM", value: product.specs.ram },
                { label: "Internal Storage", value: product.specs.storage },
                { label: "Expandable Storage", value: ds.expandableStorage },
                { label: "Rear Camera", value: ds.rearCamera },
                { label: "Front Camera", value: ds.frontCamera },
                { label: "Battery Capacity", value: product.specs.battery },
                { label: "Charging Speed", value: ds.chargingSpeed },
                { label: "Operating System", value: product.specs.os },
                { label: "Network", value: ds.network },
                { label: "Wi-Fi", value: ds.wifi },
                { label: "Bluetooth", value: ds.bluetooth },
                { label: "USB Port", value: ds.usb },
                { label: "SIM Card", value: ds.simType },
                { label: "Fingerprint", value: ds.fingerprint },
                { label: "Water Resistance", value: ds.waterResistance },
              ];

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-white/10"
                >
                  <h3 className="font-display text-xl font-bold text-white mb-5">
                    Full Specifications
                  </h3>
                  <div className="w-full rounded-2xl border border-white/10 overflow-hidden">
                    {rows.map((row, i) => (
                      <div
                        key={i}
                        className={`flex items-stretch min-h-44px ${
                          i % 2 === 0 ? "bg-white/5" : "bg-transparent"
                        }`}
                      >
                        <div className="w-2/5 px-4 py-3 flex items-center">
                          <span className="text-sm font-semibold text-gray-400">
                            {row.label}
                          </span>
                        </div>
                        <div className="w-px bg-white/10 shrink-0" />
                        <div className="flex-1 px-4 py-3 flex items-center">
                          <span className="text-sm text-gray-200">
                            {row.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })()}
          </div>
        </div>
      </div>
    </Layout>
  );
}
