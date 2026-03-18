import { useState, useMemo } from "react";
import { getAllProducts } from "./use-admin-store";

export function useProducts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string>("All");

  const allProducts = getAllProducts();

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrand === "All" || product.brand === selectedBrand;
      return matchesSearch && matchesBrand;
    });
  }, [searchQuery, selectedBrand, allProducts.length]);

  const brands = ["All", ...Array.from(new Set(allProducts.map(p => p.brand)))];

  return {
    products: filteredProducts,
    searchQuery,
    setSearchQuery,
    selectedBrand,
    setSelectedBrand,
    brands
  };
}

export function useProduct(id: string) {
  const allProducts = getAllProducts();
  const product = useMemo(() => {
    return allProducts.find(p => p.id === id);
  }, [id]);

  return { product };
}
