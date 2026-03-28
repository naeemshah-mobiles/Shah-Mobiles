import { useState, useRef } from "react";
import {
  Trash2, Plus, LogOut, ShieldCheck, Eye, EyeOff, Package,
  AlertTriangle, Upload, X, ImageIcon, BookOpen, Smartphone,
  Cpu, Zap, Watch, Wifi, Pencil, Tablet
} from "lucide-react";
import { useAdminStore } from "@/hooks/use-admin-store";
import { Product, ProductCategory } from "@/data/products";

type CategoryTab = "mobile" | "gadget" | "accessory" | "smart-device" | "tablet";

const CATEGORY_LABELS: Record<CategoryTab, string> = {
  mobile: "Mobile Phone and Others",
  gadget: "Gadget",
  accessory: "Accessory",
  "smart-device": "Smart Device",
  tablet: "Tabs & iPads",
};

const CATEGORY_ICONS: Record<CategoryTab, React.ReactNode> = {
  mobile: <Smartphone className="w-4 h-4" />,
  gadget: <Cpu className="w-4 h-4" />,
  accessory: <Zap className="w-4 h-4" />,
  "smart-device": <Watch className="w-4 h-4" />,
  tablet: <Tablet className="w-4 h-4" />,
};

const MOBILE_SPECS = [
  { key: "ram", label: "RAM", ph: "e.g. 8GB", required: true },
  { key: "storage", label: "Storage", ph: "e.g. 256GB", required: true },
  { key: "camera", label: "Camera", ph: "e.g. 50+12+5MP" },
  { key: "battery", label: "Battery", ph: "e.g. 5000mAh" },
  { key: "display", label: "Display", ph: 'e.g. 6.7" AMOLED 120Hz' },
  { key: "os", label: "Operating System", ph: "e.g. Android 15 (One UI 7)" },
];

const MOBILE_EXTRA_DEFAULTS = [
  { key: "Processor", val: "" },
  { key: "Charging", val: "" },
  { key: "Connectivity", val: "" },
  { key: "SIM", val: "" },
];

const GADGET_EXTRA_DEFAULTS = [
  { key: "Type", val: "" },
  { key: "Connectivity", val: "" },
  { key: "Battery", val: "" },
  { key: "Compatibility", val: "" },
];

const ACCESSORY_EXTRA_DEFAULTS = [
  { key: "Type", val: "" },
  { key: "Compatible With", val: "" },
  { key: "Material", val: "" },
  { key: "Color", val: "" },
];

const SMART_DEVICE_EXTRA_DEFAULTS = [
  { key: "Type", val: "" },
  { key: "Connectivity", val: "" },
  { key: "Smart Platform", val: "" },
  { key: "Power", val: "" },
];

const TABLET_EXTRA_DEFAULTS = [
  { key: "Display", val: "" },
  { key: "Chip / Processor", val: "" },
  { key: "Connectivity", val: "" },
  { key: "Storage", val: "" },
];

function defaultExtras(cat: CategoryTab) {
  if (cat === "mobile") return [...MOBILE_EXTRA_DEFAULTS];
  if (cat === "gadget") return [...GADGET_EXTRA_DEFAULTS];
  if (cat === "accessory") return [...ACCESSORY_EXTRA_DEFAULTS];
  if (cat === "tablet") return [...TABLET_EXTRA_DEFAULTS];
  return [...SMART_DEVICE_EXTRA_DEFAULTS];
}

const emptyMobileSpecs = { ram: "", storage: "", camera: "", battery: "", display: "", os: "" };

function emptyForm(cat: CategoryTab) {
  return {
    name: "",
    brand: "",
    price: "",
    images: [] as string[],
    modelNumber: "",
    pta: "approved" as "approved" | "non-pta" | "grey",
    isFlashSale: false,
    isNew: false,
    isPreBook: false,
    isUsed: false,
    specs: { ...emptyMobileSpecs },
    extraRows: defaultExtras(cat),
  };
}

export default function Admin() {
  const { allProducts, isLoggedIn, login, logout, addProduct, updateProduct, deleteProduct } = useAdminStore();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [activeTab, setActiveTab] = useState<"add" | "manage">("add");
  const [category, setCategory] = useState<CategoryTab>("mobile");
  const [form, setForm] = useState(emptyForm("mobile"));
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formError, setFormError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [manageFilter, setManageFilter] = useState<"all" | ProductCategory>("all");

  const [editingId, setEditingId] = useState<string | null>(null);

  const inputCls = "w-full bg-[#111] border border-[rgba(201,162,39,0.2)] rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[rgba(201,162,39,0.6)] transition-colors";

  function switchCategory(cat: CategoryTab) {
    setCategory(cat);
    setForm(emptyForm(cat));
    setFormError("");
    setSuccessMsg("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const invalid = files.find(f => !f.type.startsWith("image/"));
    if (invalid) { setFormError("Please upload valid image files only."); return; }

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const dataUrl = ev.target?.result as string;
        setForm(prev => ({ ...prev, images: [...prev.images, dataUrl] }));
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removeImage(idx: number) {
    setForm(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== idx) }));
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!login(password)) { setLoginError("Wrong password. Try again."); setPassword(""); }
  }

  function handleSpecChange(key: string, val: string) {
    setForm(prev => ({ ...prev, specs: { ...prev.specs, [key]: val } }));
  }

  function handleExtraRowChange(idx: number, field: "key" | "val", val: string) {
    setForm(prev => {
      const rows = [...prev.extraRows];
      rows[idx] = { ...rows[idx], [field]: val };
      return { ...prev, extraRows: rows };
    });
  }

  function addExtraRow() {
    setForm(prev => ({ ...prev, extraRows: [...prev.extraRows, { key: "", val: "" }] }));
  }

  function removeExtraRow(idx: number) {
    setForm(prev => ({ ...prev, extraRows: prev.extraRows.filter((_, i) => i !== idx) }));
  }

  function startEdit(product: Product) {
    const cat = (product.category || "mobile") as CategoryTab;
    setCategory(cat);
    setActiveTab("add");
    setEditingId(product.id);
    setFormError("");
    setSuccessMsg("");

    const extraRows = product.extraSpecs
      ? Object.entries(product.extraSpecs).map(([key, val]) => ({ key, val }))
      : defaultExtras(cat);

    const existingImages: string[] = product.images?.length
      ? product.images
      : product.image && product.image !== "images/placeholder.jpg"
      ? [product.image]
      : [];

    setForm({
      name: product.name,
      brand: product.brand,
      price: String(product.price),
      images: existingImages,
      modelNumber: product.modelNumber || "",
      pta: product.pta || "approved",
      isFlashSale: product.isFlashSale || false,
      isNew: product.isNew || false,
      isPreBook: product.isPreBook || false,
      isUsed: product.isUsed || false,
      specs: {
        ram: product.specs.ram !== "N/A" ? product.specs.ram : "",
        storage: product.specs.storage !== "N/A" ? product.specs.storage : "",
        camera: product.specs.camera !== "N/A" ? product.specs.camera : "",
        battery: product.specs.battery !== "N/A" ? product.specs.battery : "",
        display: product.specs.display !== "N/A" ? product.specs.display : "",
        os: product.specs.os !== "N/A" ? product.specs.os : "",
      },
      extraRows,
    });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(emptyForm(category));
    setFormError("");
    setSuccessMsg("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(""); setSuccessMsg("");

    if (!form.name.trim()) { setFormError("Product name is required."); return; }
    if (!form.brand.trim()) { setFormError("Brand name is required."); return; }
    if (!form.price) { setFormError("Price is required."); return; }
    if (category === "mobile" && (!form.specs.ram || !form.specs.storage)) {
      setFormError("RAM and Storage are required for mobile phones."); return;
    }

    const price = parseFloat(form.price);
    if (isNaN(price) || price <= 0) { setFormError("Enter a valid price."); return; }

    const extraSpecs: Record<string, string> = {};
    form.extraRows.forEach(row => {
      if (row.key.trim() && row.val.trim()) extraSpecs[row.key.trim()] = row.val.trim();
    });

    const primaryImage = form.images[0] || "images/placeholder.jpg";

    const productData: Omit<Product, "id"> = {
      name: form.name.trim(),
      brand: form.brand.trim(),
      price,
      image: primaryImage,
      images: form.images.length > 0 ? form.images : undefined,
      modelNumber: form.modelNumber.trim() || undefined,
      pta: category === "mobile" ? form.pta : undefined,
      isFlashSale: form.isFlashSale || undefined,
      isNew: form.isNew || undefined,
      isPreBook: form.isPreBook || undefined,
      isUsed: form.isUsed || undefined,
      category: category as ProductCategory,
      specs: {
        ram: form.specs.ram.trim() || "N/A",
        storage: form.specs.storage.trim() || "N/A",
        camera: form.specs.camera.trim() || "N/A",
        battery: form.specs.battery.trim() || "N/A",
        display: form.specs.display.trim() || "N/A",
        os: form.specs.os.trim() || "N/A",
      },
      extraSpecs: Object.keys(extraSpecs).length > 0 ? extraSpecs : undefined,
    };

    if (editingId) {
      updateProduct(editingId, productData);
      setEditingId(null);
      setSuccessMsg(`"${productData.name}" updated successfully!`);
    } else {
      addProduct(productData);
      setSuccessMsg(`"${productData.name}" added successfully!`);
    }

    setForm(emptyForm(category));
    if (fileInputRef.current) fileInputRef.current.value = "";
    setTimeout(() => setSuccessMsg(""), 4000);
  }

  function handleDelete(id: string) {
    deleteProduct(id);
    setDeleteConfirm(null);
    if (editingId === id) { setEditingId(null); setForm(emptyForm(category)); }
  }

  const managedProducts = allProducts.filter(p =>
    manageFilter === "all" || p.category === manageFilter || (!p.category && manageFilter === "mobile")
  );

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
            <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>Shah Mobile Store · Abbottabad</p>
          </div>
          <form onSubmit={handleLogin} className="rounded-2xl p-6 shadow-2xl"
            style={{ background: "#0D0D0D", border: "1px solid rgba(201,162,39,0.2)" }}>
            <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>Password</label>
            <div className="relative mb-4">
              <input type={showPassword ? "text" : "password"} value={password}
                onChange={e => { setPassword(e.target.value); setLoginError(""); }}
                placeholder="Enter password" className={inputCls + " pr-12"} autoFocus />
              <button type="button" onClick={() => setShowPassword(p => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.35)" }}>
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {loginError && (
              <p className="text-red-400 text-sm mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />{loginError}
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
      <header className="px-6 py-4 flex items-center justify-between sticky top-0 z-20"
        style={{ background: "#0D0D0D", borderBottom: "1px solid rgba(201,162,39,0.2)" }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)" }}>
            <ShieldCheck className="w-5 h-5 text-black" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Admin Panel</h1>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Shah Mobile Store · Abbottabad</p>
          </div>
        </div>
        <button onClick={logout} className="flex items-center gap-2 text-sm hover:text-white transition-colors"
          style={{ color: "rgba(255,255,255,0.4)" }}>
          <LogOut className="w-4 h-4" />Logout
        </button>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Main Tab Switch */}
        <div className="flex gap-1 rounded-xl p-1 mb-8 w-fit" style={{ background: "#0D0D0D", border: "1px solid rgba(201,162,39,0.15)" }}>
          {(["add", "manage"] as const).map((tab) => (
            <button key={tab} onClick={() => { setActiveTab(tab); if (tab === "add" && editingId) cancelEdit(); }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
              style={activeTab === tab
                ? { background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#000" }
                : { color: "rgba(255,255,255,0.5)" }}>
              {tab === "add"
                ? <><Plus className="w-4 h-4" />{editingId ? "Edit Product" : "Add Product"}</>
                : <><Package className="w-4 h-4" />Manage ({allProducts.length})</>}
            </button>
          ))}
        </div>

        {/* ─── ADD / EDIT PRODUCT ─── */}
        {activeTab === "add" && (
          <div>
            {editingId && (
              <div className="mb-5 p-4 rounded-xl flex items-center justify-between gap-3"
                style={{ background: "rgba(201,162,39,0.08)", border: "1px solid rgba(201,162,39,0.25)" }}>
                <div className="flex items-center gap-2">
                  <Pencil className="w-4 h-4" style={{ color: "#C9A227" }} />
                  <span className="text-sm font-semibold" style={{ color: "#C9A227" }}>
                    Editing: {allProducts.find(p => p.id === editingId)?.name || "Product"}
                  </span>
                </div>
                <button onClick={cancelEdit} className="text-xs text-white/40 hover:text-white/70 transition-colors underline">
                  Cancel Edit
                </button>
              </div>
            )}

            {/* Category Selector */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {(["mobile", "tablet", "gadget", "accessory", "smart-device"] as CategoryTab[]).map(cat => (
                <button key={cat} onClick={() => switchCategory(cat)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={category === cat
                    ? { background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#000" }
                    : { background: "#0D0D0D", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(201,162,39,0.15)" }}>
                  {CATEGORY_ICONS[cat]}
                  {CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl p-6"
              style={{ background: "#0D0D0D", border: "1px solid rgba(201,162,39,0.15)" }}>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                {editingId ? <Pencil className="w-5 h-5" style={{ color: "#C9A227" }} /> : CATEGORY_ICONS[category]}
                {editingId ? "Edit" : "Add"} {CATEGORY_LABELS[category]}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Product Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Product Name *
                  </label>
                  <input type="text" value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    placeholder={
                      category === "mobile" ? "e.g. Samsung Galaxy A55 8GB+256GB" :
                      category === "gadget" ? "e.g. Xiaomi Smart Band 9 Pro" :
                      category === "accessory" ? "e.g. Anker 65W GaN Charger" :
                      category === "tablet" ? "e.g. Apple iPad Air M2 256GB" :
                      "e.g. Amazon Echo Dot (5th Gen)"
                    }
                    className={inputCls} />
                </div>

                {/* Brand */}
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Brand *
                  </label>
                  <input type="text" value={form.brand}
                    onChange={e => setForm(p => ({ ...p, brand: e.target.value }))}
                    placeholder="e.g. Samsung, Apple, Anker, Xiaomi..."
                    className={inputCls} />
                </div>

                {/* Model Number */}
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Model Number
                  </label>
                  <input type="text" value={form.modelNumber}
                    onChange={e => setForm(p => ({ ...p, modelNumber: e.target.value }))}
                    placeholder="e.g. SM-A556B / A2896"
                    className={inputCls} />
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Price (PKR) *
                  </label>
                  <input type="number" value={form.price}
                    onChange={e => setForm(p => ({ ...p, price: e.target.value }))}
                    placeholder="e.g. 75000" min="1" className={inputCls} />
                </div>

                {/* PTA Status (mobile only) */}
                {category === "mobile" && (
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                      PTA Status
                    </label>
                    <select value={form.pta}
                      onChange={e => setForm(p => ({ ...p, pta: e.target.value as "approved" | "non-pta" | "grey" }))}
                      className={inputCls}>
                      <option value="approved">✓ PTA Approved</option>
                      <option value="non-pta">Non-PTA</option>
                      <option value="grey">Grey Import</option>
                    </select>
                  </div>
                )}

                {/* Status Flags */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Product Status
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { key: "isFlashSale", label: "🔥 Flash Sale" },
                      { key: "isNew", label: "✨ New Arrival" },
                      { key: "isPreBook", label: "📖 Pre-Book" },
                      { key: "isUsed", label: "♻️ Used Phone" },
                    ].map(({ key, label }) => {
                      const val = form[key as keyof typeof form] as boolean;
                      return (
                        <label key={key} className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg transition-all"
                          style={{
                            background: val ? "rgba(201,162,39,0.15)" : "rgba(255,255,255,0.04)",
                            border: `1px solid ${val ? "rgba(201,162,39,0.4)" : "rgba(255,255,255,0.08)"}`,
                          }}>
                          <input type="checkbox" checked={val}
                            onChange={e => setForm(p => ({ ...p, [key]: e.target.checked }))}
                            className="w-4 h-4 accent-yellow-500" />
                          <span className="text-sm font-semibold" style={{ color: val ? "#C9A227" : "rgba(255,255,255,0.5)" }}>
                            {label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Multiple Image Upload */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Product Images (optional — you can add multiple)
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  <div className="flex flex-wrap gap-3 mb-3">
                    {form.images.map((img, idx) => (
                      <div key={idx} className="relative w-28 h-28 rounded-xl overflow-hidden border border-white/10 group shrink-0">
                        <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
                        <div className="absolute top-1 left-1 bg-black/60 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                          {idx === 0 ? "Main" : `#${idx + 1}`}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeImage(idx)}
                          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                        >
                          <X className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex flex-col items-center justify-center gap-2 w-28 h-28 border-2 border-dashed rounded-xl transition-colors shrink-0"
                      style={{ borderColor: "rgba(201,162,39,0.25)", color: "rgba(255,255,255,0.3)" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.6)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.25)"; }}
                    >
                      <Upload className="w-6 h-6" />
                      <span className="text-xs font-medium text-center leading-snug">
                        {form.images.length === 0 ? "Upload Image" : "Add More"}
                      </span>
                    </button>
                  </div>

                  <p className="text-xs flex items-center gap-1" style={{ color: "rgba(255,255,255,0.25)" }}>
                    <ImageIcon className="w-3 h-3" />
                    JPG, PNG, WEBP · First image is shown as main photo · You can add multiple images
                  </p>
                </div>
              </div>

              {/* ─── SPECIFICATIONS ─── */}
              <div className="mt-8">
                <h3 className="text-base font-bold mb-4 pb-3 flex items-center gap-2"
                  style={{ color: "rgba(255,255,255,0.85)", borderBottom: "1px solid rgba(201,162,39,0.12)" }}>
                  <Wifi className="w-4 h-4" style={{ color: "#C9A227" }} />
                  Specifications
                  {category !== "mobile" && (
                    <span className="text-xs font-normal ml-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                      — fill only what applies
                    </span>
                  )}
                </h3>

                {/* Mobile core specs */}
                {category === "mobile" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {MOBILE_SPECS.map(({ key, label, ph, required }) => (
                      <div key={key}>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                          {label}{required ? " *" : ""}
                        </label>
                        <input type="text" value={form.specs[key as keyof typeof form.specs]}
                          onChange={e => handleSpecChange(key, e.target.value)}
                          placeholder={ph} className={inputCls} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Extra / Custom Spec Rows */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {category === "mobile" ? "Additional Specs (Processor, Charging, NFC, etc.)" : "Specification Details"}
                  </p>
                  {form.extraRows.map((row, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <input type="text" value={row.key}
                        onChange={e => handleExtraRowChange(idx, "key", e.target.value)}
                        placeholder="Spec name (e.g. Processor)"
                        className={inputCls + " flex-1"} style={{ minWidth: 0 }} />
                      <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 18 }}>:</span>
                      <input type="text" value={row.val}
                        onChange={e => handleExtraRowChange(idx, "val", e.target.value)}
                        placeholder="Value (e.g. Snapdragon 8 Gen 3)"
                        className={inputCls + " flex-2"} style={{ minWidth: 0 }} />
                      <button type="button" onClick={() => removeExtraRow(idx)}
                        className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg transition-colors hover:bg-red-400/10 hover:text-red-400"
                        style={{ color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={addExtraRow}
                    className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all hover:scale-[1.02] mt-2"
                    style={{ background: "rgba(201,162,39,0.08)", color: "#C9A227", border: "1px dashed rgba(201,162,39,0.3)" }}>
                    <Plus className="w-4 h-4" />
                    Add Another Spec Row
                  </button>
                </div>
              </div>

              {formError && (
                <div className="mt-5 p-3 rounded-lg flex items-center gap-2 text-red-400 text-sm"
                  style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)" }}>
                  <AlertTriangle className="w-4 h-4 shrink-0" />{formError}
                </div>
              )}
              {successMsg && (
                <div className="mt-5 p-3 rounded-lg text-sm"
                  style={{ background: "rgba(201,162,39,0.08)", border: "1px solid rgba(201,162,39,0.25)", color: "#C9A227" }}>
                  ✓ {successMsg}
                </div>
              )}

              <div className="mt-6 flex gap-3">
                <button type="submit"
                  className="flex items-center gap-2 font-black px-6 py-3 rounded-lg transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#000" }}>
                  {editingId ? <Pencil className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  {editingId ? "Save Changes" : `Add ${CATEGORY_LABELS[category]}`}
                </button>
                {editingId && (
                  <button type="button" onClick={cancelEdit}
                    className="px-5 py-3 rounded-lg text-sm font-semibold transition-colors"
                    style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {/* ─── MANAGE PRODUCTS ─── */}
        {activeTab === "manage" && (
          <div className="rounded-2xl overflow-hidden" style={{ background: "#0D0D0D", border: "1px solid rgba(201,162,39,0.15)" }}>
            <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(201,162,39,0.1)" }}>
              <h2 className="text-xl font-bold mb-3">All Products ({allProducts.length})</h2>
              {/* Category filter tabs */}
              <div className="flex gap-2 flex-wrap">
                {([
                  { val: "all", label: "All" },
                  { val: "mobile", label: "Mobiles" },
                  { val: "tablet", label: "Tabs & iPads" },
                  { val: "gadget", label: "Gadgets" },
                  { val: "accessory", label: "Accessories" },
                  { val: "smart-device", label: "Smart Devices" },
                ] as { val: "all" | ProductCategory; label: string }[]).map(opt => (
                  <button key={opt.val} onClick={() => setManageFilter(opt.val)}
                    className="px-3 py-1.5 rounded-full text-xs font-bold transition-all"
                    style={manageFilter === opt.val
                      ? { background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#000" }
                      : { background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              {managedProducts.length === 0 ? (
                <div className="px-6 py-12 text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
                  No products in this category yet.
                </div>
              ) : (
                managedProducts.map(product => (
                  <div key={product.id}
                    className="px-6 py-4 flex items-center justify-between gap-4 transition-colors hover:bg-white/[0.02]">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Thumbnail */}
                      {(product.images?.[0] || product.image) && (product.images?.[0] || product.image) !== "images/placeholder.jpg" ? (
                        <img
                          src={product.images?.[0] || product.image}
                          alt={product.name}
                          className="w-10 h-10 rounded-lg object-cover shrink-0 border border-white/10"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                          style={{ background: "rgba(201,162,39,0.08)", border: "1px solid rgba(201,162,39,0.15)" }}>
                          <ImageIcon className="w-4 h-4" style={{ color: "rgba(201,162,39,0.4)" }} />
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <p className="font-medium text-white truncate">{product.name}</p>
                          {product.isPreBook && (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1"
                              style={{ background: "rgba(201,162,39,0.15)", color: "#C9A227", border: "1px solid rgba(201,162,39,0.3)" }}>
                              <BookOpen className="w-2.5 h-2.5" />Pre-Book
                            </span>
                          )}
                          {product.isFlashSale && (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-red-900/40 text-red-400 border border-red-800/40">
                              🔥 Sale
                            </span>
                          )}
                          {product.isUsed && (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full"
                              style={{ background: "rgba(168,85,247,0.15)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.3)" }}>
                              ♻️ Used
                            </span>
                          )}
                          {product.images && product.images.length > 1 && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{ background: "rgba(56,189,248,0.1)", color: "#38bdf8", border: "1px solid rgba(56,189,248,0.2)" }}>
                              {product.images.length} photos
                            </span>
                          )}
                          {product.category && product.category !== "mobile" && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.25)" }}>
                              {CATEGORY_LABELS[product.category as CategoryTab]}
                            </span>
                          )}
                        </div>
                        <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                          <span style={{ color: "#C9A227" }}>{product.brand}</span>
                          <span className="mx-2" style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                          PKR {product.price.toLocaleString()}
                          {product.specs.ram !== "N/A" && (
                            <>
                              <span className="mx-2" style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                              {product.specs.ram} / {product.specs.storage}
                            </>
                          )}
                          {product.pta && (
                            <>
                              <span className="mx-2" style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                              <span className={product.pta === "approved" ? "text-emerald-400" : "text-orange-400"}>
                                {product.pta === "approved" ? "PTA ✓" : product.pta === "grey" ? "Grey" : "Non-PTA"}
                              </span>
                            </>
                          )}
                        </p>
                      </div>
                    </div>

                    {deleteConfirm === product.id ? (
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-red-400">Confirm delete?</span>
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
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => { startEdit(product); setActiveTab("add"); }}
                          className="p-2 rounded-lg transition-colors hover:bg-yellow-400/10 hover:text-yellow-400"
                          style={{ color: "rgba(255,255,255,0.3)" }}
                          title="Edit Product"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button onClick={() => setDeleteConfirm(product.id)}
                          className="p-2 rounded-lg transition-colors hover:bg-red-400/10 hover:text-red-400"
                          style={{ color: "rgba(255,255,255,0.3)" }} title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
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
