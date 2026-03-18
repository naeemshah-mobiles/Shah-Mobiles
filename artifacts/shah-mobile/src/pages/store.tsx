import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Layout } from "@/components/layout";
import { ProductCard } from "@/components/product-card";
import { useProducts } from "@/hooks/use-products";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 }
  }
};

export default function Store() {
  const { products, searchQuery, setSearchQuery, selectedBrand, setSelectedBrand, brands } = useProducts();

  return (
    <Layout>

      {/* Page Header — clean & light */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl font-bold text-foreground mb-1">All Phones</h1>
            <p className="text-muted-foreground text-sm mb-6">
              Browse our full collection — 94+ genuine devices across 7 top brands
            </p>

            {/* Search */}
            <div className="relative max-w-lg">
              <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-muted-foreground">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search by brand or model name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm placeholder:text-muted-foreground/70 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">

        {/* Brand Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="font-medium">{products.length} {products.length === 1 ? "phone" : "phones"} found</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 w-full sm:w-auto">
            <div className="flex items-center gap-2 min-w-max">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap border",
                    selectedBrand === brand
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-white text-foreground border-border hover:border-primary/40 hover:text-primary"
                  )}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        {products.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-border">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="font-bold text-xl text-foreground mb-1">Nothing found</h3>
            <p className="text-muted-foreground text-sm">Try a different brand or search term.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedBrand("All"); }}
              className="mt-5 px-5 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
}
