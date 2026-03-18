import { useState, useEffect } from "react";
import { products as staticProducts, Product } from "../data/products";

const STORAGE_KEY_CUSTOM = "admin_custom_products";
const STORAGE_KEY_DELETED = "admin_deleted_ids";
const ADMIN_PASSWORD = "naeem.hussain123";
const SESSION_KEY = "admin_logged_in";

function loadCustomProducts(): Product[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_CUSTOM);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function loadDeletedIds(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_DELETED);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function useAdminStore() {
  const [customProducts, setCustomProducts] = useState<Product[]>(loadCustomProducts);
  const [deletedIds, setDeletedIds] = useState<string[]>(loadDeletedIds);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem(SESSION_KEY) === "true";
  });

  const allProducts = [
    ...staticProducts.filter(p => !deletedIds.includes(p.id)),
    ...customProducts.filter(p => !deletedIds.includes(p.id)),
  ];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_CUSTOM, JSON.stringify(customProducts));
  }, [customProducts]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_DELETED, JSON.stringify(deletedIds));
  }, [deletedIds]);

  function login(password: string): boolean {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setIsLoggedIn(true);
      return true;
    }
    return false;
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    setIsLoggedIn(false);
  }

  function addProduct(product: Omit<Product, "id">) {
    const newProduct: Product = {
      ...product,
      id: "custom_" + Date.now(),
    };
    setCustomProducts(prev => [...prev, newProduct]);
  }

  function deleteProduct(id: string) {
    setDeletedIds(prev => [...prev, id]);
    setCustomProducts(prev => prev.filter(p => p.id !== id));
  }

  return { allProducts, isLoggedIn, login, logout, addProduct, deleteProduct };
}

export function getAllProducts(): Product[] {
  const deletedIds = loadDeletedIds();
  const customProducts = loadCustomProducts();
  return [
    ...staticProducts.filter(p => !deletedIds.includes(p.id)),
    ...customProducts.filter(p => !deletedIds.includes(p.id)),
  ];
}
