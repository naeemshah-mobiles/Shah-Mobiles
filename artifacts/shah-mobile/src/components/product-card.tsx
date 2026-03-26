import { Link } from "wouter";
import { motion } from "framer-motion";
import { Product, formatPKR } from "../data/products";
import { Flame, Sparkles } from "lucide-react";

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
        <div className="h-full bg-card rounded-2xl border border-card-border shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col overflow-hidden group-hover:-translate-y-1"
          style={{ boxShadow: "0 2px 12px rgb(0 0 0 / 0.4)" }}
        >

          {/* Image */}
          <div className="relative bg-[#111] aspect-square flex items-center justify-center p-6 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  `https://via.placeholder.com/400x400/1a1a1a/C9A227?text=${encodeURIComponent(product.brand)}`;
              }}
            />

            {/* Brand pill */}
            <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 border border-white/10 text-[11px] font-semibold text-white/80 backdrop-blur-sm">
              {product.brand}
            </span>

            {/* Flash Sale badge */}
            {product.isFlashSale && (
              <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wide flash-pulse">
                <Flame className="w-3 h-3" /> Flash
              </span>
            )}

            {/* New badge (only if not flash sale) */}
            {product.isNew && !product.isFlashSale && (
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
            <h3 className="font-semibold text-[14px] text-foreground line-clamp-2 leading-snug mb-1.5">
              {product.name}
            </h3>
            <p className="text-xs text-muted-foreground mb-3">
              {product.specs.ram} RAM · {product.specs.storage}
            </p>

            {/* Low stock warning */}
            {isLowStock && (
              <p className="text-[11px] font-bold text-red-400 mb-2 flex items-center gap-1">
                🔴 Only {product.stockLeft} left!
              </p>
            )}

            {/* PTA badge */}
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
                  <p className="text-[11px] text-muted-foreground line-through mb-0.5">
                    {formatPKR(product.originalPrice)}
                  </p>
                )}
                <p className="font-bold text-primary text-lg leading-none">
                  {formatPKR(product.price)}
                </p>
              </div>
              <span className="text-xs font-bold text-background bg-primary px-3 py-1.5 rounded-lg group-hover:bg-primary/80 transition-colors duration-200 whitespace-nowrap">
                View →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
