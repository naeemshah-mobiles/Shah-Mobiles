import { useState, useRef } from "react";
import { Trash2, Plus, LogOut, ShieldCheck, Eye, EyeOff, Package, AlertTriangle, Upload, X, ImageIcon, BookOpen } from "lucide-react";
import { useAdminStore } from "@/hooks/use-admin-store";
import { Product } from "@/data/products";

const BRANDS = ["Samsung", "Apple", "Vivo", "Xiaomi", "Oppo", "Redmi", "Tecno", "Infinix", "Realme", "Honor", "OnePlus", "Other"];

const emptyForm = {
  name: "",
  brand: "Samsung",
  price: "",
  image: "",
  modelNumber: "",
  pta: "approved" as "approved" | "non-pta" | "grey",
  isFlashSale: false,
  isNew: false,
  isPreBook: false,
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
      setFormError("Please upload an image file (JPG, PNG, etc.)");
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
      setLoginError("Wrong password! Please try again.");
      setPassword("");
    }
  }

  function handleFormChange(field: string, value: string | boolean) {
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
      setFormError("Name, brand, price, RAM and storage are required.");
      return;
    }

    const price = parseFloat(form.price);
    if (isNaN(price) || price <= 0) {
      setFormError("Please enter a valid price.");
      return;
    }

    const product: Omit<Product, "id"> = {
      name: form.name.trim(),
      brand: form.brand,
      price,
      image: form.image.trim() || "images/placeholder.jpg",
      modelNumber: form.modelNumber.trim() || undefined,
      pta: form.pta,
      isFlashSale: form.isFlashSale || undefined,
      isNew: form.isNew || undefined,
      isPreBook: form.isPreBook || undefined,
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
    setSuccessMsg(`"${product.name}" has been added successfully!`);
    setTimeout(() => setSuccessMsg(""), 4000);
  }

  function handleDelete(id: string) {
    deleteProduct(id);
    setDeleteConfirm(null);
  }

  const inputCls = "w-full bg-[#111] border border-[rgba(201,162,39,0.2)] rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[rgba(201,162,39,0.6)] transition-colors";

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "#050505" }}>
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
              style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)" }}>
              <ShieldCheck className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
            <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>Shah Mobile Zone · Abbottabad</p>
          </div>

          <form onSubmit={handleLogin} className="rounded-2xl p-6 shadow-2xl"
            style={{ background: "#0D0D0D", border: "1px solid rgba(201,162,39,0.2)" }}>
            <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>Password</label>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => { setPassword(e.target.value); setLoginError(""); }}
                placeholder="Enter password"
                className={inputCls + " pr-12"}
                autoFocus
              />
              <button type="button" onClick={() => setShowPassword(p => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                style={{ color: "rgba(255,255,255,0.35)" }}>
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {loginError && (
              <p className="text-red-400 text-sm mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />{loginError}
              </p>
            )}

            <button type="submit" className="w-full font-black py-3 rounded-lg transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#000" }}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white" style={{ background: "#050505" }}>
      <header className="px-6 py-4 flex items-center justify-between" style={{ background: "#0D0D0D", borderBottom: "1px solid rgba(201,162,39,0.2)" }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)" }}>
            <ShieldCheck className="w-5 h-5 text-black" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Admin Panel</h1>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Shah Mobile Zone · Abbottabad</p>
          </div>
        </div>
        <button onClick={logout} className="flex items-center gap-2 text-sm transition-colors hover:text-white"
          style={{ color: "rgba(255,255,255,0.4)" }}>
          <LogOut className="w-4 h-4" />Logout
        </button>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex gap-1 rounded-xl p-1 mb-8 w-fit" style={{ background: "#0D0D0D", border: "1px solid rgba(201,162,39,0.15)" }}>
          {(["add", "manage"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
              style={activeTab === tab
                ? { background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#000" }
                : { color: "rgba(255,255,255,0.5)" }
              }>
              {tab === "add" ? <><Plus className="w-4 h-4" />Add Product</> : <><Package className="w-4 h-4" />Manage ({allProducts.length})</>}
            </button>
          ))}
        </div>

        {activeTab === "add" && (
          <form onSubmit={handleAddProduct} className="rounded-2xl p-6"
            style={{ background: "#0D0D0D", border: "1px solid rgba(201,162,39,0.15)" }}>
            <h2 className="text-xl font-bold mb-6">Add New Product</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>Product Name *</label>
                <input type="text" value={form.name} onChange={e => handleFormChange("name", e.target.value)}
                  placeholder="e.g. Samsung Galaxy A55 (8GB+256GB)" className={inputCls} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>Brand *</label>
                <select value={form.brand} onChange={e => handleFormChange("brand", e.target.value)} className={inputCls}>
                  {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>Model Number</label>
                <input type="text" value={form.modelNumber} onChange={e => handleFormChange("modelNumber", e.target.value)}
                  placeholder="e.g. SM-A556BZKGPAK / MPUF3VN/A" className={inputCls} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>Price (PKR) *</label>
                <input type="number" value={form.price} onChange={e => handleFormChange("price", e.target.value)}
                  placeholder="e.g. 75000" min="1" className={inputCls} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>PTA Status</label>
                <select value={form.pta} onChange={e => handleFormChange("pta", e.target.value as "approved" | "non-pta" | "grey")} className={inputCls}>
                  <option value="approved">✓ PTA Approved</option>
                  <option value="non-pta">Non-PTA</option>
                  <option value="grey">Grey Import</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>Product Status / Flags</label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { key: "isFlashSale", label: "🔥 Flash Sale" },
                    { key: "isNew", label: "✨ New Arrival" },
                    { key: "isPreBook", label: "📖 Pre-Book Only" },
                  ].map(({ key, label }) => (
                    <label key={key} className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg transition-all"
                      style={{
                        background: form[key as keyof typeof form] ? "rgba(201,162,39,0.15)" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${form[key as keyof typeof form] ? "rgba(201,162,39,0.4)" : "rgba(255,255,255,0.08)"}`,
                      }}>
                      <input type="checkbox" checked={!!form[key as keyof typeof form]}
                        onChange={e => handleFormChange(key, e.target.checked)}
                        className="w-4 h-4 accent-yellow-500" />
                      <span className="text-sm font-semibold" style={{ color: form[key as keyof typeof form] ? "#C9A227" : "rgba(255,255,255,0.5)" }}>
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>Product Image (optional)</label>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                {imagePreview ? (
                  <div className="relative w-40 h-40 rounded-xl overflow-hidden border border-white/10 group">
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    <button type="button" onClick={removeImage}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <X className="w-6 h-6 text-white" />
                    </button>
                  </div>
                ) : (
                  <button type="button" onClick={() => fileInputRef.current?.click()}
                    className="flex flex-col items-center justify-center gap-2 w-40 h-40 border-2 border-dashed rounded-xl transition-colors"
                    style={{ borderColor: "rgba(201,162,39,0.25)", color: "rgba(255,255,255,0.3)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.6)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.25)"; }}
                  >
                    <Upload className="w-7 h-7" />
                    <span className="text-xs font-medium text-center">Upload Image</span>
                  </button>
                )}
                <p className="text-xs mt-2 flex items-center gap-1" style={{ color: "rgba(255,255,255,0.25)" }}>
                  <ImageIcon className="w-3 h-3" />
                  JPG, PNG, WEBP — upload directly from your computer
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-semibold mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { key: "ram", label: "RAM *", ph: "e.g. 8GB", required: true },
                  { key: "storage", label: "Storage *", ph: "e.g. 256GB", required: true },
                  { key: "camera", label: "Camera", ph: "e.g. 50+12+5MP" },
                  { key: "battery", label: "Battery", ph: "e.g. 5000mAh" },
                  { key: "display", label: "Display Size", ph: 'e.g. 6.7" AMOLED 120Hz' },
                  { key: "os", label: "Operating System", ph: "e.g. Android 15 (One UI 7)" },
                ].map(({ key, label, ph }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>{label}</label>
                    <input type="text" value={form.specs[key as keyof typeof form.specs]}
                      onChange={e => handleSpecChange(key, e.target.value)}
                      placeholder={ph} className={inputCls} />
                  </div>
                ))}
              </div>
            </div>

            {formError && (
              <div className="mt-4 p-3 rounded-lg flex items-center gap-2 text-red-400 text-sm"
                style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)" }}>
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />{formError}
              </div>
            )}
            {successMsg && (
              <div className="mt-4 p-3 rounded-lg text-sm"
                style={{ background: "rgba(201,162,39,0.08)", border: "1px solid rgba(201,162,39,0.25)", color: "#C9A227" }}>
                ✓ {successMsg}
              </div>
            )}

            <div className="mt-6">
              <button type="submit" className="flex items-center gap-2 font-black px-6 py-3 rounded-lg transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#000" }}>
                <Plus className="w-5 h-5" />
                Add Product
              </button>
            </div>
          </form>
        )}

        {activeTab === "manage" && (
          <div className="rounded-2xl overflow-hidden" style={{ background: "#0D0D0D", border: "1px solid rgba(201,162,39,0.15)" }}>
            <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(201,162,39,0.1)" }}>
              <h2 className="text-xl font-bold">All Products ({allProducts.length})</h2>
              <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Click the trash icon to delete a product</p>
            </div>

            <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              {allProducts.length === 0 ? (
                <div className="px-6 py-12 text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
                  No products found.
                </div>
              ) : (
                allProducts.map(product => (
                  <div key={product.id} className="px-6 py-4 flex items-center justify-between gap-4 transition-colors hover:bg-white/[0.02]">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <p className="font-medium text-white truncate">{product.name}</p>
                        {product.isPreBook && (
                          <span className="text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1"
                            style={{ background: "rgba(201,162,39,0.15)", color: "#C9A227", border: "1px solid rgba(201,162,39,0.3)" }}>
                            <BookOpen className="w-2.5 h-2.5" /> Pre-Book
                          </span>
                        )}
                        {product.isFlashSale && (
                          <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-red-900/40 text-red-400 border border-red-800/40">
                            🔥 Sale
                          </span>
                        )}
                      </div>
                      <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                        <span style={{ color: "#C9A227" }}>{product.brand}</span>
                        <span className="mx-2" style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                        PKR {product.price.toLocaleString()}
                        <span className="mx-2" style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                        {product.specs.ram} / {product.specs.storage}
                        {product.pta && (
                          <>
                            <span className="mx-2" style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                            <span className={product.pta === "approved" ? "text-emerald-400" : "text-orange-400"}>
                              {product.pta === "approved" ? "PTA ✓" : "Grey"}
                            </span>
                          </>
                        )}
                      </p>
                    </div>

                    {deleteConfirm === product.id ? (
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-red-400">Confirm?</span>
                        <button onClick={() => handleDelete(product.id)}
                          className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg transition-colors">
                          Delete
                        </button>
                        <button onClick={() => setDeleteConfirm(null)}
                          className="px-3 py-1.5 text-white text-xs font-semibold rounded-lg transition-colors"
                          style={{ background: "rgba(255,255,255,0.08)" }}>
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button onClick={() => setDeleteConfirm(product.id)}
                        className="flex-shrink-0 p-2 rounded-lg transition-colors hover:bg-red-400/10 hover:text-red-400"
                        style={{ color: "rgba(255,255,255,0.3)" }} title="Delete">
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
