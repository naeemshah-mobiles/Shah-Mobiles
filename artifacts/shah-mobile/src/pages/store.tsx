import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X, Flame, Sparkles, PackageX } from "lucide-react";
import { Layout } from "@/components/layout";
import { ProductCard } from "@/components/product-card";
import { useProducts } from "@/hooks/use-products";
import { ALL_BRANDS } from "@/data/products";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 }
  }
};

const PTA_OPTIONS = [
  { value: "all", label: "All" },
  { value: "approved", label: "✓ PTA Approved" },
  { value: "non-pta", label: "Grey Import" },
];

const PRICE_RANGES = [
  { value: "all", label: "Any Price" },
  { value: "budget", label: "Under Rs.50K" },
  { value: "mid", label: "Rs.50K – 150K" },
  { value: "high", label: "Rs.150K – 300K" },
  { value: "premium", label: "Above Rs.300K" },
];

const ALL_BRAND_FILTERS = ["All", ...ALL_BRANDS];

export default function Store() {
  const { products, searchQuery, setSearchQuery, selectedBrand, setSelectedBrand } = useProducts();
  const [ptaFilter, setPtaFilter] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [showDealsOnly, setShowDealsOnly] = useState(false);
  const [showNewOnly, setShowNewOnly] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (showDealsOnly && !p.isFlashSale && !p.discountPercent) return false;
      if (showNewOnly && !p.isNew) return false;
      if (ptaFilter !== "all") {
        if (ptaFilter === "approved" && p.pta !== "approved") return false;
        if (ptaFilter === "non-pta" && p.pta !== "grey" && p.pta !== "non-pta") return false;
      }
      if (priceRange !== "all") {
        if (priceRange === "budget" && p.price >= 50000) return false;
        if (priceRange === "mid" && (p.price < 50000 || p.price >= 150000)) return false;
        if (priceRange === "high" && (p.price < 150000 || p.price >= 300000)) return false;
        if (priceRange === "premium" && p.price < 300000) return false;
      }
      return true;
    });
  }, [products, ptaFilter, priceRange, showDealsOnly, showNewOnly]);

  const brandHasNoStock = selectedBrand !== "All" && filtered.length === 0 && !searchQuery && ptaFilter === "all" && priceRange === "all" && !showDealsOnly && !showNewOnly;

  const clearAll = () => {
    setSearchQuery("");
    setSelectedBrand("All");
    setPtaFilter("all");
    setPriceRange("all");
    setShowDealsOnly(false);
    setShowNewOnly(false);
  };

  const hasActiveFilters = selectedBrand !== "All" || ptaFilter !== "all" || priceRange !== "all" || showDealsOnly || showNewOnly || searchQuery;

  return (
    <Layout>

      {/* Page Header */}
      <div style={{ background: "#080808", borderBottom: "1px solid rgba(201,162,39,0.12)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl font-black text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
              All Phones
            </h1>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
              Browse our full collection — 110+ genuine devices including iPhones, Samsung, Vivo, Oppo, Xiaomi & more
            </p>

            {/* Search */}
            <div className="relative max-w-lg">
              <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none" style={{ color: "rgba(201,162,39,0.5)" }}>
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search by brand or model name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl text-sm placeholder:text-white/25 text-white transition-all outline-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,162,39,0.2)",
                }}
                onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(201,162,39,0.5)"; }}
                onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(201,162,39,0.2)"; }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-3 flex items-center"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">

        {/* Quick Toggles */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <button
            onClick={() => setShowDealsOnly(!showDealsOnly)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all border",
              showDealsOnly
                ? "bg-red-600 text-white border-red-600"
                : "text-red-400 border-red-800/40 hover:border-red-600/60"
            )}
          >
            <Flame className="w-3.5 h-3.5" /> Flash Sale Only
          </button>
          <button
            onClick={() => setShowNewOnly(!showNewOnly)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all border",
              showNewOnly
                ? "bg-emerald-600 text-white border-emerald-600"
                : "text-emerald-500 border-emerald-800/40 hover:border-emerald-600/60"
            )}
          >
            <Sparkles className="w-3.5 h-3.5" /> New Arrivals Only
          </button>
        </div>

        {/* Brand + PTA + Price Filters */}
        <div className="flex flex-col gap-4 mb-8">

          {/* Brand filter */}
          <div className="flex items-start gap-3">
            <span className="text-xs font-semibold shrink-0 mt-2" style={{ color: "rgba(201,162,39,0.6)" }}>Brand</span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 flex-1">
              <div className="flex items-center gap-2 min-w-max flex-wrap">
                {ALL_BRAND_FILTERS.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border",
                      selectedBrand === brand
                        ? "text-black border-primary"
                        : "text-white/50 border-white/10 hover:border-primary/40 hover:text-primary/70"
                    )}
                    style={selectedBrand === brand ? { background: "linear-gradient(135deg, #C9A227, #F0D060)" } : {}}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* PTA filter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold shrink-0" style={{ color: "rgba(201,162,39,0.6)" }}>PTA</span>
            <div className="flex items-center gap-2 flex-wrap">
              {PTA_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setPtaFilter(opt.value)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-bold transition-all border",
                    ptaFilter === opt.value
                      ? "text-black border-primary"
                      : "text-white/50 border-white/10 hover:border-primary/40 hover:text-primary/70"
                  )}
                  style={ptaFilter === opt.value ? { background: "linear-gradient(135deg, #C9A227, #F0D060)" } : {}}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price filter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold shrink-0" style={{ color: "rgba(201,162,39,0.6)" }}>Price</span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <div className="flex items-center gap-2 min-w-max">
                {PRICE_RANGES.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setPriceRange(opt.value)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border",
                      priceRange === opt.value
                        ? "text-black border-primary"
                        : "text-white/50 border-white/10 hover:border-primary/40 hover:text-primary/70"
                    )}
                    style={priceRange === opt.value ? { background: "linear-gradient(135deg, #C9A227, #F0D060)" } : {}}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Results count + clear */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            <SlidersHorizontal className="w-4 h-4" />
            <span className="font-semibold">{filtered.length} {filtered.length === 1 ? "phone" : "phones"} found</span>
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearAll}
              className="text-xs font-bold transition-colors hover:text-white/60"
              style={{ color: "rgba(201,162,39,0.6)" }}
            >
              Clear all filters ×
            </button>
          )}
        </div>

        {/* Grid */}
        {brandHasNoStock ? (
          <div
            className="text-center py-24 rounded-2xl border border-dashed"
            style={{ borderColor: "rgba(201,162,39,0.15)", background: "rgba(201,162,39,0.02)" }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "rgba(201,162,39,0.08)" }}
            >
              <PackageX className="w-9 h-9" style={{ color: "rgba(201,162,39,0.5)" }} />
            </div>
            <h3 className="font-black text-2xl text-white mb-2">{selectedBrand}</h3>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
              style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)" }}>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm font-bold text-red-400">Not in Stock Right Now</span>
            </div>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
              We currently don't have any {selectedBrand} devices in stock.<br />
              Contact us on WhatsApp — we can source it for you!
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a
                href={`https://wa.me/923465900627?text=Hi Shah Mobiles, do you have any ${selectedBrand} phones available? I'd like to check availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", color: "#fff" }}
              >
                Ask on WhatsApp
              </a>
              <button
                onClick={clearAll}
                className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#0A0A0A" }}
              >
                Browse All Phones
              </button>
            </div>
          </div>
        ) : filtered.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        ) : (
          <div
            className="text-center py-24 rounded-2xl border border-dashed"
            style={{ borderColor: "rgba(201,162,39,0.15)", background: "rgba(201,162,39,0.02)" }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "rgba(201,162,39,0.08)" }}
            >
              <Search className="w-6 h-6" style={{ color: "rgba(201,162,39,0.5)" }} />
            </div>
            <h3 className="font-black text-xl text-white mb-1">Nothing found</h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>Try a different brand, price range, or search term.</p>
            <button
              onClick={clearAll}
              className="mt-5 px-5 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#0A0A0A" }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
}
