import { Link } from "wouter";
import { motion } from "framer-motion";
import { Product, formatPKR } from "../data/products";
import { Flame, Sparkles, BookOpen } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discountPercent && product.discountPercent > 0;
  const isLowStock = product.stockLeft !== undefined && product.stockLeft <= 3;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 }
      }}
      className="group"
    >
      <Link href={`/product/${product.id}`} className="block h-full">
        <div className="h-full rounded-2xl border shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group-hover:-translate-y-1.5"
          style={{
            background: "#141414",
            borderColor: "rgba(201,162,39,0.1)",
            boxShadow: "0 2px 16px rgb(0 0 0 / 0.5)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,162,39,0.4)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(201,162,39,0.12), 0 2px 16px rgb(0 0 0 / 0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,162,39,0.1)";
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgb(0 0 0 / 0.5)";
          }}
        >

          {/* Image Area — white bg for clean product shot */}
          <div className="relative aspect-square flex items-center justify-center overflow-hidden rounded-t-2xl"
            style={{ background: "#ffffff" }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-5 group-hover:scale-108 transition-transform duration-500 ease-out"
              style={{ transform: "scale(1)", mixBlendMode: "multiply" }}
              loading="lazy"
              onMouseEnter={(e) => { (e.target as HTMLImageElement).style.transform = "scale(1.08)"; }}
              onMouseLeave={(e) => { (e.target as HTMLImageElement).style.transform = "scale(1)"; }}
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.mixBlendMode = "normal";
                img.src = `https://placehold.co/400x400/1a1a1a/C9A227?text=${encodeURIComponent(product.brand)}`;
              }}
            />

            {/* Brand pill */}
            <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-bold backdrop-blur-sm"
              style={{ background: "rgba(0,0,0,0.65)", color: "rgba(255,255,255,0.9)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {product.brand}
            </span>

            {/* Flash Sale badge */}
            {product.isFlashSale && !product.isPreBook && (
              <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wide flash-pulse">
                <Flame className="w-3 h-3" /> Flash
              </span>
            )}

            {/* Pre-Book badge */}
            {product.isPreBook && (
              <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide"
                style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#000" }}
              >
                <BookOpen className="w-3 h-3" /> Pre-Book
              </span>
            )}

            {/* New badge */}
            {product.isNew && !product.isFlashSale && !product.isPreBook && (
              <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wide">
                <Sparkles className="w-3 h-3" /> New
              </span>
            )}

            {/* Discount ribbon */}
            {hasDiscount && (
              <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md gold-shimmer text-black text-[11px] font-black">
                -{product.discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 flex flex-col p-4">
            <h3 className="font-bold text-[13.5px] text-white line-clamp-2 leading-snug mb-1.5">
              {product.name}
            </h3>
            <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              {product.specs.ram} RAM · {product.specs.storage} · {product.specs.battery}
            </p>

            {isLowStock && (
              <p className="text-[11px] font-bold text-red-400 mb-2 flex items-center gap-1">
                🔴 Only {product.stockLeft} left!
              </p>
            )}

            {product.pta && (
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit mb-3 ${
                product.pta === "approved"
                  ? "bg-emerald-900/40 text-emerald-400 border border-emerald-800"
                  : "bg-orange-900/40 text-orange-400 border border-orange-800"
              }`}>
                {product.pta === "approved" ? "✓ PTA Approved" : "Grey Import"}
              </span>
            )}

            <div className="mt-auto flex items-end justify-between gap-2">
              <div>
                {hasDiscount && product.originalPrice && (
                  <p className="text-[11px] line-through mb-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {formatPKR(product.originalPrice)}
                  </p>
                )}
                <p className="font-black text-lg leading-none" style={{ color: "#C9A227" }}>
                  {formatPKR(product.price)}
                </p>
              </div>
              <span className="text-xs font-black text-black px-3 py-1.5 rounded-xl transition-all duration-200 whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)" }}
              >
                View →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
