import { useState, useRef } from "react";
import {
  Trash2, Plus, LogOut, ShieldCheck, Eye, EyeOff, Package,
  AlertTriangle, Upload, X, ImageIcon, BookOpen, Smartphone,
  Cpu, Zap, Watch, Wifi, Pencil, Check, XCircle
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

const MOBILE_EXTRA_DEFAULTS = [{ key: "Processor", val: "" }, { key: "Charging", val: "" }, { key: "Connectivity", val: "" }, { key: "SIM", val: "" }];
const GADGET_EXTRA_DEFAULTS = [{ key: "Type", val: "" }, { key: "Connectivity", val: "" }, { key: "Battery", val: "" }, { key: "Compatibility", val: "" }];
const ACCESSORY_EXTRA_DEFAULTS = [{ key: "Type", val: "" }, { key: "Compatible With", val: "" }, { key: "Material", val: "" }, { key: "Color", val: "" }];
const SMART_DEVICE_EXTRA_DEFAULTS = [{ key: "Type", val: "" }, { key: "Connectivity", val: "" }, { key: "Smart Platform", val: "" }, { key: "Power", val: "" }];

function defaultExtras(cat: CategoryTab) {
  if (cat === "mobile") return [...MOBILE_EXTRA_DEFAULTS];
  if (cat === "gadget") return [...GADGET_EXTRA_DEFAULTS];
  if (cat === "accessory") return [...ACCESSORY_EXTRA_DEFAULTS];
  return [...SMART_DEVICE_EXTRA_DEFAULTS];
}

const emptyMobileSpecs = { ram: "", storage: "", camera: "", battery: "", display: "", os: "" };

function emptyForm(cat: CategoryTab) {
  return {
    name: "",
    brand: "",
    price: "",
    image: "",
    modelNumber: "",
    pta: "approved" as "approved" | "non-pta" | "grey",
    isFlashSale: false,
    isNew: false,
    isPreBook: false,
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

  // EDIT STATE
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const inputCls = "w-full bg-[#111] border border-[rgba(201,162,39,0.2)] rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[rgba(201,162,39,0.6)] transition-colors";

  function switchCategory(cat: CategoryTab) {
    setCategory(cat);
    setForm(emptyForm(cat));
    setImagePreview("");
    setFormError("");
    setSuccessMsg("");
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
        setImagePreview(dataUrl);
        setForm(prev => ({ ...prev, image: dataUrl }));
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
    if (!form.name.trim() || !form.brand.trim() || !form.price) { setFormError("Missing fields"); return; }
    
    const extraSpecs: Record<string, string> = {};
    form.extraRows.forEach(row => { if (row.key.trim() && row.val.trim()) extraSpecs[row.key.trim()] = row.val.trim(); });

    addProduct({
      ...form,
      price: parseFloat(form.price),
      category: category as ProductCategory,
      extraSpecs: Object.keys(extraSpecs).length > 0 ? extraSpecs : undefined,
    } as any);

    setForm(emptyForm(category));
    setImagePreview("");
    setSuccessMsg("Product added!");
    setTimeout(() => setSuccessMsg(""), 3000);
  }

  function handleUpdateProduct() {
    if (editingProduct && updateProduct) {
      updateProduct(editingProduct.id, editingProduct);
      setEditingProduct(null);
      setSuccessMsg("Updated successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    } else {
        // Fallback agar store me updateProduct function nahi hai toh:
        alert("Please ensure your useAdminStore has updateProduct function.");
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
            <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className={inputCls} />
            <button type="submit" className="w-full mt-4 font-black py-3 rounded-lg" style={{ background: "linear-gradient(135deg, #C9A227, #F0D060)", color: "#000" }}>Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white pb-20" style={{ background: "#050505" }}>
      <header className="px-6 py-4 flex items-center justify-between sticky top-0 z-30" style={{ background: "#0D0D0D", borderBottom: "1px solid rgba(201,162,39,0.2)" }}>
        <div className="flex items-center gap-3"><ShieldCheck className="text-[#C9A227]" /> <h1 className="font-bold">Shah Mobiles</h1></div>
        <button onClick={logout} className="text-xs opacity-50 flex items-center gap-1"><LogOut size={14}/> Logout</button>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex gap-1 rounded-xl p-1 mb-8 w-fit bg-[#0D0D0D] border border-white/5">
          {(["add", "manage"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === tab ? 'bg-[#C9A227] text-black' : 'text-white/40'}`}>
              {tab === "add" ? "Add Product" : `Manage (${allProducts.length})`}
            </button>
          ))}
        </div>

        {activeTab === "add" ? (
          <form onSubmit={handleAddProduct} className="bg-[#0D0D0D] p-6 rounded-2xl border border-white/5 space-y-4">
             {/* ... (Existing Add Form UI) ... */}
             <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className={inputCls} />
                <input type="text" placeholder="Brand" value={form.brand} onChange={e=>setForm({...form, brand: e.target.value})} className={inputCls} />
                <input type="number" placeholder="Price" value={form.price} onChange={e=>setForm({...form, price: e.target.value})} className={inputCls} />
                <select value={form.pta} onChange={e=>setForm({...form, pta: e.target.value as any})} className={inputCls}>
                    <option value="approved">PTA Approved</option>
                    <option value="non-pta">Non-PTA</option>
                </select>
             </div>
             <button type="submit" className="bg-[#C9A227] text-black w-full py-3 rounded-xl font-bold">Add to Store</button>
          </form>
        ) : (
          <div className="space-y-3">
            {managedProducts.map(product => (
              <div key={product.id} className="bg-[#0D0D0D] border border-white/5 p-4 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={product.image} className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="text-xs text-white/40">Rs. {product.price.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setEditingProduct(product)} className="p-2 hover:bg-blue-500/10 text-blue-400 rounded-lg transition-colors"><Pencil size={18} /></button>
                  <button onClick={() => setDeleteConfirm(product.id)} className="p-2 hover:bg-red-500/10 text-red-500 rounded-lg transition-colors"><Trash2 size={18} /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ─── EDIT MODAL ─── */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0D0D0D] border border-[#C9A227]/30 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
            <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
              <h2 className="font-bold text-[#C9A227] flex items-center gap-2"><Pencil size={18}/> Edit Product</h2>
              <button onClick={() => setEditingProduct(null)} className="text-white/40 hover:text-white"><X /></button>
            </div>
            
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
               <div>
                  <label className="text-xs text-white/40 mb-1 block">Product Name</label>
                  <input type="text" value={editingProduct.name} onChange={e => setEditingProduct({...editingProduct, name: e.target.value})} className={inputCls} />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/40 mb-1 block">Price (PKR)</label>
                    <input type="number" value={editingProduct.price} onChange={e => setEditingProduct({...editingProduct, price: parseFloat(e.target.value)})} className={inputCls} />
                  </div>
                  <div>
                    <label className="text-xs text-white/40 mb-1 block">PTA Status</label>
                    <select value={editingProduct.pta} onChange={e => setEditingProduct({...editingProduct, pta: e.target.value as any})} className={inputCls}>
                      <option value="approved">Approved</option>
                      <option value="non-pta">Non-PTA</option>
                      <option value="grey">Grey</option>
                    </select>
                  </div>
               </div>
               
               <div className="flex gap-4">
                 {["isFlashSale", "isNew", "isPreBook"].map(flag => (
                    <label key={flag} className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-white/5 bg-white/5 cursor-pointer">
                       <input type="checkbox" checked={!!(editingProduct as any)[flag]} onChange={e => setEditingProduct({...editingProduct, [flag]: e.target.checked} as any)} />
                       <span className="text-[10px] uppercase font-bold">{flag.replace('is','')}</span>
                    </label>
                 ))}
               </div>
            </div>

            <div className="p-6 border-t border-white/5 flex gap-3">
               <button onClick={() => setEditingProduct(null)} className="flex-1 py-3 rounded-xl font-bold bg-white/5 text-white/60">Cancel</button>
               <button onClick={handleUpdateProduct} className="flex-1 py-3 rounded-xl font-bold bg-[#C9A227] text-black flex items-center justify-center gap-2"><Check size={18}/> Update Now</button>
            </div>
          </div>
        </div>
      )}

      {/* ─── DELETE CONFIRM ─── */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
            <div className="bg-[#111] p-8 rounded-3xl border border-red-500/20 text-center max-w-xs w-full">
                <AlertTriangle className="mx-auto text-red-500 mb-4" size={48} />
                <h2 className="text-xl font-bold mb-2">Are you sure?</h2>
                <p className="text-white/40 text-sm mb-6">This product will be permanently removed from your store.</p>
                <div className="flex gap-3">
                    <button onClick={()=>setDeleteConfirm(null)} className="flex-1 py-3 rounded-xl bg-white/5">No</button>
                    <button onClick={()=>handleDelete(deleteConfirm)} className="flex-1 py-3 rounded-xl bg-red-600 font-bold">Yes, Delete</button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}
