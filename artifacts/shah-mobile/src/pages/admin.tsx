import { useState, useRef } from "react";
import {
  Trash2, Plus, LogOut, ShieldCheck, Eye, EyeOff, Package,
  AlertTriangle, Upload, X, ImageIcon, BookOpen, Smartphone,
  Cpu, Zap, Watch, Wifi, Pencil
} from "lucide-react";
import { useAdminStore } from "@/hooks/use-admin-store";
import { Product, ProductCategory } from "@/data/products";

type CategoryTab = "mobile" | "gadget" | "accessory" | "smart-device";

const CATEGORY_LABELS: Record<CategoryTab, string> = {
  mobile: "Mobile Phone and Others",
  gadget: "Gadget",
  accessory: "Accessory",
  "smart-device": "Smart Device",
};

const CATEGORY_ICONS: Record<CategoryTab, React.ReactNode> = {
  mobile: <Smartphone className="w-4 h-4" />,
  gadget: <Cpu className="w-4 h-4" />,
  accessory: <Zap className="w-4 h-4" />,
  "smart-device": <Watch className="w-4 h-4" />,
};

const MOBILE_SPECS = [
  { key: "ram", label: "RAM", ph: "e.g. 8GB", required: true },
  { key: "storage", label: "Storage", ph: "e.g. 256GB", required: true },
  { key: "camera", label: "Camera", ph: "e.g. 50+12+5MP" },
  { key: "battery", label: "Battery", ph: "e.g. 5000mAh" },
  { key: "display", label: "Display", ph: 'e.g. 6.7" AMOLED 120Hz' },
  { key: "os", label: "Operating System", ph: "e.g. Android 15 (One UI 7)" },
];

function defaultExtras(cat: CategoryTab) {
  const MOBILE_EXTRA_DEFAULTS = [{ key: "Processor", val: "" }, { key: "Charging", val: "" }, { key: "Connectivity", val: "" }, { key: "SIM", val: "" }];
  const GADGET_EXTRA_DEFAULTS = [{ key: "Type", val: "" }, { key: "Connectivity", val: "" }, { key: "Battery", val: "" }, { key: "Compatibility", val: "" }];
  const ACCESSORY_EXTRA_DEFAULTS = [{ key: "Type", val: "" }, { key: "Compatible With", val: "" }, { key: "Material", val: "" }, { key: "Color", val: "" }];
  const SMART_DEVICE_EXTRA_DEFAULTS = [{ key: "Type", val: "" }, { key: "Connectivity", val: "" }, { key: "Smart Platform", val: "" }, { key: "Power", val: "" }];

  if (cat === "mobile") return [...MOBILE_EXTRA_DEFAULTS];
  if (cat === "gadget") return [...GADGET_EXTRA_DEFAULTS];
  if (cat === "accessory") return [...ACCESSORY_EXTRA_DEFAULTS];
  return [...SMART_DEVICE_EXTRA_DEFAULTS];
}

const emptyMobileSpecs = { ram: "", storage: "", camera: "", battery: "", display: "", os: "" };

function emptyForm(cat: CategoryTab) {
  return {
    name: "", brand: "", price: "", image: "", modelNumber: "",
    pta: "approved" as "approved" | "non-pta" | "grey",
    isFlashSale: false, isNew: false, isPreBook: false,
    specs: { ...emptyMobileSpecs },
    extraRows: defaultExtras(cat),
  };
}

export default function Admin() {
  const { allProducts, isLoggedIn, login, logout, addProduct, deleteProduct, updateProduct } = useAdminStore() as any;

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<"add" | "manage">("add");
  const [category, setCategory] = useState<CategoryTab>("mobile");
  const [form, setForm] = useState(emptyForm("mobile"));
  const [imagePreview, setImagePreview] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formError, setFormError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [manageFilter, setManageFilter] = useState<"all" | ProductCategory>("all");

  // --- EDIT LOGIC ---
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const inputCls = "w-full bg-[#111] border border-[rgba(201,162,39,0.2)] rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[rgba(201,162,39,0.6)] transition-colors";

  function switchCategory(cat: CategoryTab) {
    setCategory(cat); setForm(emptyForm(cat)); setImagePreview(""); setFormError(""); setSuccessMsg("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>, isEdit = false) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      if (isEdit && editingProduct) {
        setEditingProduct({ ...editingProduct, image: dataUrl });
      } else {
        setImagePreview(dataUrl); setForm(prev => ({ ...prev, image: dataUrl }));
      }
    };
    reader.readAsDataURL(file);
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!login(password)) { setLoginError("Wrong password. Try again."); setPassword(""); }
  }

  function handleAddProduct(e: React.FormEvent) {
    e.preventDefault();
    // (Aapka original validation logic yahan rahega)
    const extraSpecs: Record<string, string> = {};
    form.extraRows.forEach(row => { if (row.key.trim() && row.val.trim()) extraSpecs[row.key.trim()] = row.val.trim(); });

    addProduct({
      ...form,
      price: parseFloat(form.price),
      category: category as ProductCategory,
      extraSpecs: Object.keys(extraSpecs).length > 0 ? extraSpecs : undefined,
    } as any);

    setForm(emptyForm(category)); setImagePreview(""); setSuccessMsg("Product added!");
    setTimeout(() => setSuccessMsg(""), 3000);
  }

  function handleSaveEdit() {
    if (editingProduct && updateProduct) {
      updateProduct(editingProduct.id, editingProduct);
      setEditingProduct(null);
      setSuccessMsg("Updated successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    }
  }

  const managedProducts = allProducts.filter(p =>
    manageFilter === "all" || p.category === manageFilter || (!p.category && manageFilter === "mobile")
  );

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "#050505" }}>
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)" }}><ShieldCheck className="w-8 h-8 text-black" /></div>
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
          </div>
          <form onSubmit={handleLogin} className="rounded-2xl p-6 shadow-2xl" style={{ background: "#0D0D0D", border: "1px solid rgba(201,162,39,0.2)" }}>
            <label className="block text-sm font-medium mb-2 text-white/60">Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" className={inputCls + " pr-12"} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <button type="submit" className="w-full mt-4 font-black py-3 rounded-lg" style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#000" }}>Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white" style={{ background: "#050505" }}>
      <header className="px-6 py-4 flex items-center justify-between sticky top-0 z-20" style={{ background: "#0D0D0D", borderBottom: "1px solid rgba(201,162,39,0.2)" }}>
        <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)" }}><ShieldCheck className="w-5 h-5 text-black" /></div>
            <div><h1 className="font-bold text-lg">Admin Panel</h1><p className="text-[10px] text-white/30">Shah Mobile Store</p></div>
        </div>
        <button onClick={logout} className="flex items-center gap-2 text-xs text-white/40"><LogOut size={14} />Logout</button>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Main Tab Switch */}
        <div className="flex gap-1 rounded-xl p-1 mb-8 w-fit bg-[#0D0D0D] border border-[#C9A227]/10">
          {(["add", "manage"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === tab ? 'bg-[#C9A227] text-black' : 'text-white/40'}`}>
              {tab === "add" ? <><Plus size={16}/>Add Product</> : <><Package size={16}/>Manage ({allProducts.length})</>}
            </button>
          ))}
        </div>

        {activeTab === "add" ? (
          <div>
             {/* Category Tabs (Mobile, Gadget, etc.) */}
             <div className="flex gap-2 mb-6 flex-wrap">
                {(["mobile", "gadget", "accessory", "smart-device"] as CategoryTab[]).map(cat => (
                  <button key={cat} onClick={() => switchCategory(cat)} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${category === cat ? 'bg-[#C9A227] text-black border-[#C9A227]' : 'bg-[#0D0D0D] text-white/50 border-white/5'}`}>
                    {CATEGORY_ICONS[cat]}{CATEGORY_LABELS[cat]}
                  </button>
                ))}
             </div>
             {/* ... Baki Add Form ka code wahi rahega jo pehle tha ... */}
             <form onSubmit={handleAddProduct} className="bg-[#0D0D0D] p-6 rounded-2xl border border-white/5 space-y-4">
                <input type="text" placeholder="Product Name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className={inputCls} />
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Brand" value={form.brand} onChange={e=>setForm({...form, brand: e.target.value})} className={inputCls} />
                    <input type="number" placeholder="Price" value={form.price} onChange={e=>setForm({...form, price: e.target.value})} className={inputCls} />
                </div>
                <button type="submit" className="w-full bg-[#C9A227] text-black py-3 rounded-xl font-bold">Add Product</button>
             </form>
          </div>
        ) : (
          /* MANAGE SECTION */
          <div className="bg-[#0D0D0D] rounded-2xl border border-white/5 overflow-hidden">
            <div className="p-4 border-b border-white/5 flex gap-2 flex-wrap">
                {["all", "mobile", "gadget", "accessory", "smart-device"].map(f => (
                    <button key={f} onClick={() => setManageFilter(f as any)} className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase ${manageFilter === f ? 'bg-[#C9A227] text-black' : 'bg-white/5 text-white/40'}`}>{f}</button>
                ))}
            </div>
            <div className="divide-y divide-white/5">
              {managedProducts.map(product => (
                <div key={product.id} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={product.image} className="w-10 h-10 rounded-lg object-cover bg-white/5" />
                    <div><p className="text-sm font-bold">{product.name}</p><p className="text-[10px] text-white/40">Rs. {product.price.toLocaleString()}</p></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setEditingProduct(product)} className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-lg"><Pencil size={16}/></button>
                    <button onClick={() => setDeleteConfirm(product.id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg"><Trash2 size={16}/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* --- EDIT MODAL (POPUP) --- */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-[#0D0D0D] border border-[#C9A227]/20 w-full max-w-lg rounded-3xl overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <h3 className="font-bold text-[#C9A227] flex items-center gap-2"><Pencil size={18}/> Edit Product</h3>
                <button onClick={() => setEditingProduct(null)}><X className="text-white/30"/></button>
            </div>
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
                <input type="text" value={editingProduct.name} onChange={e=>setEditingProduct({...editingProduct, name: e.target.value})} className={inputCls} placeholder="Name" />
                <div className="grid grid-cols-2 gap-4">
                    <input type="number" value={editingProduct.price} onChange={e=>setEditingProduct({...editingProduct, price: parseFloat(e.target.value)})} className={inputCls} placeholder="Price" />
                    <select value={editingProduct.pta} onChange={e=>setEditingProduct({...editingProduct, pta: e.target.value as any})} className={inputCls}>
                        <option value="approved">PTA Approved</option>
                        <option value="non-pta">Non-PTA</option>
                    </select>
                </div>
                {/* Specs Edit */}
                <div className="bg-white/5 p-4 rounded-xl space-y-3">
                    <p className="text-[10px] font-bold text-white/30 uppercase">Core Specifications</p>
                    <div className="grid grid-cols-2 gap-3">
                        {Object.keys(editingProduct.specs).map(s => (
                            <div key={s}>
                                <label className="text-[10px] text-white/40 capitalize">{s}</label>
                                <input type="text" value={(editingProduct.specs as any)[s]} onChange={e=>setEditingProduct({...editingProduct, specs: {...editingProduct.specs, [s]: e.target.value}})} className="w-full bg-transparent border-b border-white/10 py-1 text-sm focus:border-[#C9A227] outline-none" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="p-6 bg-white/5 flex gap-3">
                <button onClick={() => setEditingProduct(null)} className="flex-1 py-3 rounded-xl bg-white/5 font-bold">Cancel</button>
                <button onClick={handleSaveEdit} className="flex-1 py-3 rounded-xl bg-[#C9A227] text-black font-bold">Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation UI wahi rahega jo pehle tha */}
    </div>
  );
}
