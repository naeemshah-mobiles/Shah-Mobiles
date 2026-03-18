import { useRoute, Link } from "wouter";
import { ArrowLeft, Cpu, HardDrive, Camera, Battery, Maximize, Settings, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout";
import { useProduct } from "@/hooks/use-products";
import { formatPKR } from "@/data/products";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const { product } = useProduct(params?.id || "");

  // Image path ko fix karne ke liye function
  const getImagePath = (path: string) => {
    if (!path) return "";
    // Agar path 'public/' se shuru ho raha hai toh usay hatayein
    let cleanPath = path.replace(/^public\//, "");
    // Agar path './' se shuru ho raha hai toh usay hatayein
    cleanPath = cleanPath.replace(/^\.\//, "");
    // Ensure karein ke path hamesha '/' se shuru ho taake root se fetch ho
    return cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
  };

  if (!product) {
    return (
      <Layout>
        <div className="flex-1 flex flex-col items-center justify-center py-32 px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Product Not Found</h2>
          <p className="text-muted-foreground mb-8">The device you are looking for does not exist or has been removed.</p>
          <Link href="/" className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors">
            Return Home
          </Link>
        </div>
      </Layout>
    );
  }

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(`Hi Shah Mobile! I want to buy the ${product.name}. Is it available?`);
    window.open(`https://wa.me/923001234567?text=${text}`, "_blank");
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
      <div className="bg-secondary/30 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to catalog</span>
          </Link>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg shadow-black/5 border border-border/60">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Image Column */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl bg-secondary/20 p-8 flex items-center justify-center min-h-[400px] border border-border/50"
              >
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-4 py-1.5 rounded-full bg-white shadow-sm text-xs font-bold uppercase tracking-widest text-foreground">
                    {product.brand}
                  </span>
                </div>
                <img 
                  src={getImagePath(product.image)} 
                  alt={product.name}
                  className="w-full max-w-[400px] h-auto object-contain mix-blend-multiply drop-shadow-xl"
                  onError={(e) => {
                    // Agar image load na ho toh placeholder ya error handling
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=No+Image+Found';
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
                  <div className="flex items-center gap-2 text-green-600 font-semibold text-sm mb-4 bg-green-50 w-max px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4" />
                    In Stock
                  </div>
                  
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                    {product.name}
                  </h1>
                  
                  <div className="mb-8 pb-8 border-b border-border">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Price</p>
                    <p className="font-display text-3xl md:text-4xl font-extrabold text-primary">
                      {formatPKR(product.price)}
                    </p>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-6">Technical Specifications</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {specsList.map((spec, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border/40 hover:bg-secondary/60 transition-colors">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                          <spec.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground mb-0.5">{spec.label}</p>
                          <p className="font-semibold text-foreground text-sm">{spec.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full py-4 px-8 rounded-2xl font-bold text-lg text-white bg-[#25D366] hover:bg-[#1EBE5D] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    Buy via WhatsApp
                  </button>
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    Clicking this button will open a WhatsApp chat with our sales team.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}