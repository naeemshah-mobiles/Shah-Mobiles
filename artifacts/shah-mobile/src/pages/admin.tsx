import { useState, useRef } from "react";
import { Trash2, Plus, LogOut, ShieldCheck, Eye, EyeOff, Package, AlertTriangle, Upload, X, ImageIcon } from "lucide-react";
import { useAdminStore } from "@/hooks/use-admin-store";
import { Product } from "@/data/products";

const BRANDS = ["Samsung", "Vivo", "Xiaomi", "Oppo", "Tecno", "Infinix", "Realme", "Apple", "Other"];

const emptyForm = {
  name: "",
  brand: "Samsung",
  price: "",
  image: "",
  specs: {
    ram: "",
    storage: "",
    camera: "",
    battery: "",
    display: "",
    os: "",
  },
};

export default function Admin() {
  const { allProducts, isLoggedIn, login, logout, addProduct, deleteProduct } = useAdminStore();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [imagePreview, setImagePreview] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formError, setFormError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"add" | "manage">("add");

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setFormError("Sirf image file upload karein (JPG, PNG, etc.)");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      setImagePreview(dataUrl);
      setForm(prev => ({ ...prev, image: dataUrl }));
    };
    reader.readAsDataURL(file);
  }

  function removeImage() {
    setImagePreview("");
    setForm(prev => ({ ...prev, image: "" }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const ok = login(password);
    if (!ok) {
      setLoginError("Galat password! Dobara koshish karein.");
      setPassword("");
    }
  }

  function handleFormChange(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function handleSpecChange(field: string, value: string) {
    setForm(prev => ({ ...prev, specs: { ...prev.specs, [field]: value } }));
  }

  function handleAddProduct(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    setSuccessMsg("");

    if (!form.name.trim() || !form.brand || !form.price || !form.specs.ram || !form.specs.storage) {
      setFormError("Naam, brand, price, RAM aur storage zaroor bharein.");
      return;
    }

    const price = parseFloat(form.price);
    if (isNaN(price) || price <= 0) {
      setFormError("Sahi price enter karein.");
      return;
    }

    const product: Omit<Product, "id"> = {
      name: form.name.trim(),
      brand: form.brand,
      price,
      image: form.image.trim() || "images/placeholder.jpg",
      specs: {
        ram: form.specs.ram.trim(),
        storage: form.specs.storage.trim(),
        camera: form.specs.camera.trim() || "N/A",
        battery: form.specs.battery.trim() || "N/A",
        display: form.specs.display.trim() || "N/A",
        os: form.specs.os.trim() || "N/A",
      },
    };

    addProduct(product);
    setForm(emptyForm);
    setImagePreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    setSuccessMsg(`"${product.name}" successfully add ho gaya!`);
    setTimeout(() => setSuccessMsg(""), 4000);
  }

  function handleDelete(id: string) {
    deleteProduct(id);
    setDeleteConfirm(null);
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 mb-4">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
            <p className="text-slate-400 mt-1 text-sm">Shah Mobile Zone</p>
          </div>

          <form onSubmit={handleLogin} className="bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700">
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => { setPassword(e.target.value); setLoginError(""); }}
                placeholder="Password enter karein"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 pr-12"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(p => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {loginError && (
              <p className="text-red-400 text-sm mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                {loginError}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Admin Panel</h1>
            <p className="text-slate-400 text-xs">Shah Mobile Zone</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex gap-1 bg-slate-800 rounded-xl p-1 mb-8 w-fit">
          <button
            onClick={() => setActiveTab("add")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === "add"
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Plus className="w-4 h-4" />
            Naya Product Add Karein
          </button>
          <button
            onClick={() => setActiveTab("manage")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === "manage"
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Package className="w-4 h-4" />
            Products Manage Karein ({allProducts.length})
          </button>
        </div>

        {activeTab === "add" && (
          <form onSubmit={handleAddProduct} className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h2 className="text-xl font-bold mb-6">Naya Product Add Karein</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Product ka Naam *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => handleFormChange("name", e.target.value)}
                  placeholder="e.g. Samsung Galaxy A55 (8GB+256GB)"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Brand *</label>
                <select
                  value={form.brand}
                  onChange={e => handleFormChange("brand", e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                >
                  {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Price (PKR) *</label>
                <input
                  type="number"
                  value={form.price}
                  onChange={e => handleFormChange("price", e.target.value)}
                  placeholder="e.g. 75000"
                  min="1"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Product Image (optional)</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                {imagePreview ? (
                  <div className="relative w-40 h-40 rounded-xl overflow-hidden border border-slate-700 group">
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    >
                      <X className="w-6 h-6 text-white" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex flex-col items-center justify-center gap-2 w-40 h-40 border-2 border-dashed border-slate-700 hover:border-indigo-500 rounded-xl text-slate-500 hover:text-indigo-400 transition-colors"
                  >
                    <Upload className="w-7 h-7" />
                    <span className="text-xs font-medium text-center">Image Upload<br/>Karein</span>
                  </button>
                )}
                <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                  <ImageIcon className="w-3 h-3" />
                  JPG, PNG, WEBP — computer se seedha upload karein
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-semibold text-slate-200 mb-4">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">RAM *</label>
                  <input
                    type="text"
                    value={form.specs.ram}
                    onChange={e => handleSpecChange("ram", e.target.value)}
                    placeholder="e.g. 8GB"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Storage *</label>
                  <input
                    type="text"
                    value={form.specs.storage}
                    onChange={e => handleSpecChange("storage", e.target.value)}
                    placeholder="e.g. 256GB"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Camera</label>
                  <input
                    type="text"
                    value={form.specs.camera}
                    onChange={e => handleSpecChange("camera", e.target.value)}
                    placeholder="e.g. 50+12+5MP"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Battery</label>
                  <input
                    type="text"
                    value={form.specs.battery}
                    onChange={e => handleSpecChange("battery", e.target.value)}
                    placeholder="e.g. 5000mAh"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Display</label>
                  <input
                    type="text"
                    value={form.specs.display}
                    onChange={e => handleSpecChange("display", e.target.value)}
                    placeholder='e.g. 6.7"'
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Operating System</label>
                  <input
                    type="text"
                    value={form.specs.os}
                    onChange={e => handleSpecChange("os", e.target.value)}
                    placeholder="e.g. Android 15 (One UI 7)"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            {formError && (
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2 text-red-400 text-sm">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                {formError}
              </div>
            )}

            {successMsg && (
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                ✓ {successMsg}
              </div>
            )}

            <div className="mt-6">
              <button
                type="submit"
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Plus className="w-5 h-5" />
                Product Add Karein
              </button>
            </div>
          </form>
        )}

        {activeTab === "manage" && (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-800">
              <h2 className="text-xl font-bold">Saare Products ({allProducts.length})</h2>
              <p className="text-slate-400 text-sm mt-0.5">Kisi bhi product ko delete karne ke liye trash icon click karein</p>
            </div>

            <div className="divide-y divide-slate-800">
              {allProducts.length === 0 ? (
                <div className="px-6 py-12 text-center text-slate-500">
                  Koi product nahi mila.
                </div>
              ) : (
                allProducts.map(product => (
                  <div key={product.id} className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-800/50 transition-colors">
                    <div className="min-w-0">
                      <p className="font-medium text-white truncate">{product.name}</p>
                      <p className="text-sm text-slate-400 mt-0.5">
                        <span className="text-indigo-400">{product.brand}</span>
                        <span className="mx-2 text-slate-600">·</span>
                        PKR {product.price.toLocaleString()}
                        <span className="mx-2 text-slate-600">·</span>
                        {product.specs.ram} / {product.specs.storage}
                      </p>
                    </div>

                    {deleteConfirm === product.id ? (
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-red-400">Confirm?</span>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg transition-colors"
                        >
                          Haan, Delete
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold rounded-lg transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirm(product.id)}
                        className="flex-shrink-0 p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
