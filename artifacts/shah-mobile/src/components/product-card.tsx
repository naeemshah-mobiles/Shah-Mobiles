import { Link } from "wouter";
import { motion } from "framer-motion";
import { Product, formatPKR } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 }
      }}
      className="group"
    >
      <Link href={`/product/${product.id}`} className="block h-full">
        <div className="h-full bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/25 transition-all duration-300 flex flex-col overflow-hidden group-hover:-translate-y-0.5">

          {/* Image */}
          <div className="relative bg-stone-50 aspect-square flex items-center justify-center p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white border border-border text-[11px] font-semibold text-foreground/70 shadow-sm">
              {product.brand}
            </span>
          </div>

          {/* Info */}
          <div className="flex-1 flex flex-col p-4">
            <h3 className="font-semibold text-[15px] text-foreground line-clamp-2 leading-snug mb-1.5">
              {product.name}
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              {product.specs.ram} RAM · {product.specs.storage}
            </p>

            <div className="mt-auto flex items-center justify-between">
              <div>
                <p className="text-[11px] text-muted-foreground mb-0.5">Price</p>
                <p className="font-bold text-primary text-lg leading-none">
                  {formatPKR(product.price)}
                </p>
              </div>
              <span className="text-xs font-semibold text-primary bg-primary/8 px-3 py-1.5 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                View →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
