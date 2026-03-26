export interface ProductSpecs {
  ram: string;
  storage: string;
  camera: string;
  battery: string;
  display: string;
  os: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  specs: ProductSpecs;
  discountPercent?: number;
  originalPrice?: number;
  isFlashSale?: boolean;
  isNew?: boolean;
  stockLeft?: number;
  pta?: "approved" | "non-pta" | "grey";
}

export const products: Product[] = [

  // ─── SAMSUNG ───────────────────────────────────────────────────────────────

  {
    id: "s1",
    name: "Samsung Galaxy A07 (4GB+64GB)",
    brand: "Samsung",
    price: 30500,
    image: "images/Samsung/galaxya07.jpg",
    specs: { ram: "4GB", storage: "64GB", camera: "50+2MP", battery: "5000mAh", display: '6.7"', os: "Android 13 (One UI 5)" }
  },
  {
    id: "s2",
    name: "Samsung Galaxy A07 (4GB+128GB)",
    brand: "Samsung",
    price: 35500,
    image: "images/Samsung/galaxya07.jpg",
    specs: { ram: "4GB", storage: "128GB", camera: "50+2MP", battery: "5000mAh", display: '6.7"', os: "Android 13 (One UI 5)" }
  },
  {
    id: "s3",
    name: "Samsung Galaxy A07 (6GB+128GB)",
    brand: "Samsung",
    price: 42500,
    image: "images/Samsung/galaxya07.jpg",
    specs: { ram: "6GB", storage: "128GB", camera: "50+2MP", battery: "5000mAh", display: '6.7"', os: "Android 13 (One UI 5)" }
  },

  {
    id: "s4",
    name: "Samsung Galaxy A17 (6GB+128GB)",
    brand: "Samsung",
    price: 59500,
    image: "images/Samsung/galaxya17.jpg",
    specs: { ram: "6GB", storage: "128GB", camera: "50+5+2MP", battery: "5000mAh", display: '6.7"', os: "Android 15 (One UI 7)" }
  },
  {
    id: "s5",
    name: "Samsung Galaxy A17 (8GB+256GB)",
    brand: "Samsung",
    price: 68500,
    image: "images/Samsung/galaxya17.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50+5+2MP", battery: "5000mAh", display: '6.7"', os: "Android 15 (One UI 7)" }
  },

  {
    id: "s6",
    name: "Samsung Galaxy A26 5G",
    brand: "Samsung",
    price: 89999,
    image: "images/Samsung/galaxya26.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50+8+2MP", battery: "5000mAh", display: '6.7"', os: "Android 15 (One UI 7)" }
  },

  {
    id: "s7",
    name: "Samsung Galaxy A36 5G",
    brand: "Samsung",
    price: 119999,
    image: "images/Samsung/galaxya36.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50+8+5MP", battery: "5000mAh", display: '6.7"', os: "Android 15 (One UI 7)" }
  },

  {
    id: "s8",
    name: "Samsung Galaxy A56 5G (8GB+256GB)",
    brand: "Samsung",
    price: 137999,
    image: "images/Samsung/galaxya56.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50+12+5MP", battery: "5000mAh", display: '6.7"', os: "Android 15 (One UI 7)" }
  },
  {
    id: "s9",
    name: "Samsung Galaxy A56 5G (12GB+256GB)",
    brand: "Samsung",
    price: 150999,
    image: "images/Samsung/galaxya56.jpg",
    specs: { ram: "12GB", storage: "256GB", camera: "50+12+5MP", battery: "5000mAh", display: '6.7"', os: "Android 15 (One UI 7)" }
  },

  {
    id: "s10",
    name: "Samsung Galaxy S25 FE (8GB+256GB)",
    brand: "Samsung",
    price: 219999,
    image: "images/Samsung/galaxys25fe.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50+12+8MP", battery: "4900mAh", display: '6.7"', os: "Android 15 (One UI 7)" }
  },
  {
    id: "s11",
    name: "Samsung Galaxy S25 FE (8GB+512GB)",
    brand: "Samsung",
    price: 254999,
    image: "images/Samsung/galaxys25fe.jpg",
    specs: { ram: "8GB", storage: "512GB", camera: "50+12+8MP", battery: "4900mAh", display: '6.7"', os: "Android 15 (One UI 7)" }
  },

  {
    id: "s12",
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    price: 459999,
    image: "images/Samsung/galaxys25ultra.jpg",
    specs: { ram: "12GB", storage: "512GB", camera: "200+10+50MP", battery: "5000mAh", display: '6.9"', os: "Android 15 (One UI 7)" }
  },

  {
    id: "s13",
    name: "Samsung Galaxy S26 (12GB+256GB)",
    brand: "Samsung",
    price: 299999,
    image: "images/Samsung/galaxys26.jpg",
    specs: { ram: "12GB", storage: "256GB", camera: "50+10+12MP", battery: "4300mAh", display: '6.3"', os: "Android 15 (One UI 7)" }
  },
  {
    id: "s14",
    name: "Samsung Galaxy S26 (12GB+512GB)",
    brand: "Samsung",
    price: 356999,
    image: "images/Samsung/galaxys26.jpg",
    specs: { ram: "12GB", storage: "512GB", camera: "50+10+12MP", battery: "4300mAh", display: '6.3"', os: "Android 15 (One UI 7)" }
  },

  {
    id: "s15",
    name: "Samsung Galaxy S26+ (12GB+256GB)",
    brand: "Samsung",
    price: 364999,
    image: "images/Samsung/galaxys26+.jpg",
    specs: { ram: "12GB", storage: "256GB", camera: "50+10+12MP", battery: "4900mAh", display: '6.7"', os: "Android 15 (One UI 7)" }
  },
  {
    id: "s16",
    name: "Samsung Galaxy S26+ (12GB+512GB)",
    brand: "Samsung",
    price: 409999,
    image: "images/Samsung/galaxys26+.jpg",
    specs: { ram: "12GB", storage: "512GB", camera: "50+10+12MP", battery: "4900mAh", display: '6.7"', os: "Android 15 (One UI 7)" }
  },

  {
    id: "s17",
    name: "Samsung Galaxy S26 Ultra (12GB+256GB)",
    brand: "Samsung",
    price: 424999,
    image: "images/Samsung/galaxys26ultra.jpg",
    specs: { ram: "12GB", storage: "256GB", camera: "200+10+50MP", battery: "5000mAh", display: '6.9"', os: "Android 15 (One UI 7)" }
  },
  {
    id: "s18",
    name: "Samsung Galaxy S26 Ultra (12GB+512GB)",
    brand: "Samsung",
    price: 489999,
    image: "images/Samsung/galaxys26ultra.jpg",
    specs: { ram: "12GB", storage: "512GB", camera: "200+10+50MP", battery: "5000mAh", display: '6.9"', os: "Android 15 (One UI 7)" }
  },
  {
    id: "s19",
    name: "Samsung Galaxy S26 Ultra (16GB+1TB)",
    brand: "Samsung",
    price: 579999,
    image: "images/Samsung/galaxys26ultra.jpg",
    specs: { ram: "16GB", storage: "1TB", camera: "200+10+50MP", battery: "5000mAh", display: '6.9"', os: "Android 15 (One UI 7)" }
  },

  // ─── VIVO ──────────────────────────────────────────────────────────────────

  {
    id: "v1",
    name: "Vivo X Fold 5",
    brand: "Vivo",
    price: 569999,
    image: "images/Vivo/vivoxfold5.jpg",
    specs: { ram: "16GB", storage: "512GB", camera: "50+50+50MP / Front 20+20MP", battery: "6000mAh", display: '6.53" & 8.03" Foldable', os: "Android 15 (FunTouch OS 15)" }
  },

  {
    id: "v2",
    name: "Vivo X300 Pro",
    brand: "Vivo",
    price: 349999,
    image: "images/Vivo/vivox300pro.jpg",
    specs: { ram: "16GB", storage: "512GB", camera: "200+50+50MP / Front 50MP", battery: "6510mAh", display: '6.78"', os: "Android 15 (FunTouch OS 15)" }
  },

  {
    id: "v3",
    name: "Vivo X200 FE",
    brand: "Vivo",
    price: 219999,
    image: "images/Vivo/vivox200fe.jpg",
    specs: { ram: "12GB", storage: "512GB", camera: "50+50+8MP / Front 50MP", battery: "6500mAh", display: '6.31"', os: "Android 15 (FunTouch OS 15)" }
  },

  {
    id: "v4",
    name: "Vivo V70 (12GB+512GB)",
    brand: "Vivo",
    price: 184999,
    image: "images/Vivo/vivov70.jpg",
    specs: { ram: "12GB", storage: "512GB", camera: "50+50+8MP / Front 50MP", battery: "6500mAh", display: '6.59"', os: "Android 15 (FunTouch OS 15)" }
  },
  {
    id: "v5",
    name: "Vivo V70 (12GB+256GB)",
    brand: "Vivo",
    price: 169999,
    image: "images/Vivo/vivov70.jpg",
    specs: { ram: "12GB", storage: "256GB", camera: "50+50+8MP / Front 50MP", battery: "6500mAh", display: '6.59"', os: "Android 15 (FunTouch OS 15)" }
  },

  {
    id: "v6",
    name: "Vivo V60 Lite 5G",
    brand: "Vivo",
    price: 94999,
    image: "images/Vivo/vivov60lite.jpg",
    specs: { ram: "12GB", storage: "256GB", camera: "50+8MP / Front 32MP", battery: "6500mAh", display: '6.77"', os: "Android 15 (FunTouch OS 15)" }
  },

  {
    id: "v7",
    name: "Vivo V60 Lite",
    brand: "Vivo",
    price: 76999,
    image: "images/Vivo/vivov60lite.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50+8MP / Front 32MP", battery: "6500mAh", display: '6.77"', os: "Android 15 (FunTouch OS 15)" }
  },

  {
    id: "v8",
    name: "Vivo Y400",
    brand: "Vivo",
    price: 69999,
    image: "images/Vivo/vivoy400.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50+2MP / Front 8MP", battery: "6000mAh", display: '6.67"', os: "Android 15 (FunTouch OS 15)" }
  },

  {
    id: "v9",
    name: "Vivo Y29",
    brand: "Vivo",
    price: 60999,
    image: "images/Vivo/vivoy29.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50+2MP / Front 8MP", battery: "6500mAh", display: '6.68"', os: "Android 14 (FunTouch OS 14)" }
  },

  {
    id: "v10",
    name: "Vivo Y21d (8GB+128GB)",
    brand: "Vivo",
    price: 56999,
    image: "images/Vivo/vivoy21d.jpg",
    specs: { ram: "8GB", storage: "128GB", camera: "50MP / Front 5MP", battery: "6500mAh", display: '6.68"', os: "Android 14 (FunTouch OS 14)" }
  },
  {
    id: "v11",
    name: "Vivo Y21d (6GB+128GB)",
    brand: "Vivo",
    price: 49999,
    image: "images/Vivo/vivoy21d.jpg",
    specs: { ram: "6GB", storage: "128GB", camera: "50MP / Front 5MP", battery: "6500mAh", display: '6.68"', os: "Android 14 (FunTouch OS 14)" }
  },

  {
    id: "v12",
    name: "Vivo Y05 (4GB+128GB) 8MP",
    brand: "Vivo",
    price: 37999,
    image: "images/Vivo/vivoy05.jpg",
    specs: { ram: "4GB", storage: "128GB", camera: "8MP / Front 5MP", battery: "6500mAh", display: '6.74"', os: "Android 14 (FunTouch OS 14)" }
  },
  {
    id: "v13",
    name: "Vivo Y05 (4GB+128GB) 13MP",
    brand: "Vivo",
    price: 35999,
    image: "images/Vivo/vivoy05.jpg",
    specs: { ram: "4GB", storage: "128GB", camera: "13MP / Front 5MP", battery: "5500mAh", display: '6.74"', os: "Android 14 (FunTouch OS 14)" }
  },
  {
    id: "v14",
    name: "Vivo Y05 (4GB+64GB)",
    brand: "Vivo",
    price: 33999,
    image: "images/Vivo/vivoy05.jpg",
    specs: { ram: "4GB", storage: "64GB", camera: "13+8MP / Front 5MP", battery: "6500mAh", display: '6.74"', os: "Android 14 (FunTouch OS 14)" }
  },

  {
    id: "v15",
    name: "Vivo Y04 (4GB+128GB)",
    brand: "Vivo",
    price: 35999,
    image: "images/Vivo/vivoy04.jpg",
    specs: { ram: "4GB", storage: "128GB", camera: "13MP / Front 5MP", battery: "5500mAh", display: '6.74"', os: "Android 14 (FunTouch OS 14)" }
  },
  {
    id: "v16",
    name: "Vivo Y04 (4GB+64GB)",
    brand: "Vivo",
    price: 30999,
    image: "images/Vivo/vivoy04.jpg",
    specs: { ram: "4GB", storage: "64GB", camera: "13MP / Front 5MP", battery: "5500mAh", display: '6.74"', os: "Android 14 (FunTouch OS 14)" }
  },

  // ─── REDMI ─────────────────────────────────────────────────────────────────

  {
    id: "r1",
    name: "Xiaomi Redmi A3X",
    brand: "Redmi",
    price: 18999,
    image: "images/Redmi/redmia3x.jpg",
    specs: { ram: "3GB", storage: "64GB", camera: "8MP / Selfie 5MP", battery: "5000mAh", display: '6.71" 4G', os: "Android 14 (HyperOS)" }
  },

  {
    id: "r2",
    name: "Xiaomi Redmi A5",
    brand: "Redmi",
    price: 27999,
    image: "images/Redmi/redmia5.jpg",
    specs: { ram: "4GB", storage: "64GB", camera: "32MP / Selfie 8MP", battery: "5200mAh", display: '6.88" 4G', os: "Android 14 (HyperOS)" }
  },

  {
    id: "r3",
    name: "Xiaomi Redmi 14C (4GB+128GB)",
    brand: "Redmi",
    price: 26999,
    image: "images/Redmi/Redmi14c.jpg",
    specs: { ram: "4GB", storage: "128GB", camera: "50MP / Selfie 13MP", battery: "5160mAh", display: '6.88" 4G', os: "Android 14 (HyperOS)" }
  },
  {
    id: "r4",
    name: "Xiaomi Redmi 14C (6GB+128GB)",
    brand: "Redmi",
    price: 29999,
    image: "images/Redmi/Redmi14c.jpg",
    specs: { ram: "6GB", storage: "128GB", camera: "50MP / Selfie 13MP", battery: "5160mAh", display: '6.88" 4G', os: "Android 14 (HyperOS)" }
  },

  {
    id: "r5",
    name: "Xiaomi Redmi 15C (4GB+128GB)",
    brand: "Redmi",
    price: 36499,
    image: "images/Redmi/redmi15c.jpg",
    specs: { ram: "4GB", storage: "128GB", camera: "50MP / Selfie 8MP", battery: "6000mAh", display: '6.9" 4G', os: "Android 15 (HyperOS 2)" }
  },
  {
    id: "r6",
    name: "Xiaomi Redmi 15C (6GB+128GB)",
    brand: "Redmi",
    price: 38499,
    image: "images/Redmi/redmi15c.jpg",
    specs: { ram: "6GB", storage: "128GB", camera: "50MP / Selfie 8MP", battery: "6000mAh", display: '6.9" 4G', os: "Android 15 (HyperOS 2)" }
  },

  {
    id: "r7",
    name: "Xiaomi Redmi 13",
    brand: "Redmi",
    price: 34999,
    image: "images/Redmi/redmi13.jpg",
    specs: { ram: "6GB", storage: "128GB", camera: "108+2MP / Selfie 13MP", battery: "5030mAh", display: '6.79" 4G', os: "Android 14 (HyperOS)" }
  },

  {
    id: "r8",
    name: "Xiaomi Redmi 15",
    brand: "Redmi",
    price: 50499,
    image: "images/Redmi/redmi15.jpg",
    specs: { ram: "8GB", storage: "128GB", camera: "50MP / Selfie 8MP", battery: "7000mAh", display: '6.9" 4G', os: "Android 15 (HyperOS 2)" }
  },

  {
    id: "r9",
    name: "Xiaomi Redmi Note 14 (8GB+128GB)",
    brand: "Redmi",
    price: 55999,
    image: "images/Redmi/redmi14.jpg",
    specs: { ram: "8GB", storage: "128GB", camera: "108+2+2MP / Selfie 20MP", battery: "5500mAh", display: '6.67" 4G', os: "Android 14 (HyperOS)" }
  },
  {
    id: "r10",
    name: "Xiaomi Redmi Note 14 (8GB+256GB)",
    brand: "Redmi",
    price: 59999,
    image: "images/Redmi/redmi14.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "108+2+2MP / Selfie 20MP", battery: "5500mAh", display: '6.67" 4G', os: "Android 14 (HyperOS)" }
  },

  {
    id: "r11",
    name: "Xiaomi Redmi Note 14 Pro (8GB+256GB)",
    brand: "Redmi",
    price: 79999,
    image: "images/Redmi/redmi14pro.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "200+8+2MP / Selfie 32MP", battery: "5500mAh", display: '6.67" 4G', os: "Android 14 (HyperOS)" }
  },
  {
    id: "r12",
    name: "Xiaomi Redmi Note 14 Pro (12GB+512GB)",
    brand: "Redmi",
    price: 94999,
    image: "images/Redmi/redmi14pro.jpg",
    specs: { ram: "12GB", storage: "512GB", camera: "200+8+2MP / Selfie 32MP", battery: "5500mAh", display: '6.67" 4G', os: "Android 14 (HyperOS)" }
  },

  {
    id: "r13",
    name: "Xiaomi Redmi Note 14 Pro+",
    brand: "Redmi",
    price: 144999,
    image: "images/Redmi/redmi14pro+5g.jpg",
    specs: { ram: "12GB", storage: "512GB", camera: "200+8+2MP / Selfie 20MP", battery: "5110mAh", display: '6.67" 5G', os: "Android 15 (HyperOS 2)" }
  },

  // ─── XIAOMI ────────────────────────────────────────────────────────────────

  {
    id: "x1",
    name: "Xiaomi 15T",
    brand: "Xiaomi",
    price: 169999,
    image: "images/Xiaomi/xiaomi15t.jpg",
    specs: { ram: "12GB", storage: "512GB", camera: "50+50+12MP / Selfie 32MP", battery: "5500mAh", display: '6.83" 5G', os: "Android 15 (HyperOS 2)" }
  },
  {
    id: "x2",
    name: "Xiaomi 15T Pro",
    brand: "Xiaomi",
    price: 233999,
    image: "images/Xiaomi/xiaomi15tpro.jpg",
    specs: { ram: "12GB", storage: "512GB", camera: "50+50+12MP / Selfie 32MP", battery: "5500mAh", display: '6.83" 5G', os: "Android 15 (HyperOS 2)" }
  },
  {
    id: "x3",
    name: "Xiaomi 15",
    brand: "Xiaomi",
    price: 269999,
    image: "images/Xiaomi/xiaomi15.jpg",
    specs: { ram: "12GB", storage: "512GB", camera: "50+50+50MP / Selfie 32MP", battery: "5240mAh", display: '6.36" 5G', os: "Android 15 (HyperOS 2)" }
  },
  {
    id: "x4",
    name: "Xiaomi 15 Ultra",
    brand: "Xiaomi",
    price: 399999,
    image: "images/Xiaomi/xiaomi15ultra.jpg",
    specs: { ram: "16GB", storage: "512GB", camera: "50+50+50+200MP / Selfie 32MP", battery: "5410mAh", display: '6.67" 5G', os: "Android 15 (HyperOS 2)" }
  },

  // ─── OPPO ──────────────────────────────────────────────────────────────────

  {
    id: "o1",
    name: "OPPO Reno15 Pro 5G",
    brand: "Oppo",
    price: 229999,
    image: "images/Oppo/opporeno15pro.jpg",
    specs: { ram: "12GB", storage: "512GB", camera: "200+50+50MP / Front 50MP", battery: "6200mAh", display: '6.32" OLED 120Hz', os: "Android 15 (ColorOS 15)" }
  },

  {
    id: "o2",
    name: "OPPO Reno14 Pro 5G",
    brand: "Oppo",
    price: 219999,
    image: "images/Oppo/opporeno14pro.jpg",
    specs: { ram: "12GB", storage: "512GB", camera: "50+50+50MP / Front 50MP", battery: "6200mAh", display: '6.83" OLED 120Hz', os: "Android 15 (ColorOS 15)" }
  },

  {
    id: "o3",
    name: "OPPO Reno15 5G (12GB+512GB)",
    brand: "Oppo",
    price: 169999,
    image: "images/Oppo/opporeno15.jpg",
    specs: { ram: "12GB", storage: "512GB", camera: "50+50+8MP / Front 50MP", battery: "6500mAh", display: '6.59" OLED 120Hz', os: "Android 15 (ColorOS 15)" }
  },
  {
    id: "o4",
    name: "OPPO Reno15 5G (12GB+256GB)",
    brand: "Oppo",
    price: 159999,
    image: "images/Oppo/opporeno15.jpg",
    specs: { ram: "12GB", storage: "256GB", camera: "50+50+8MP / Front 50MP", battery: "6500mAh", display: '6.59" OLED 120Hz', os: "Android 15 (ColorOS 15)" }
  },

  {
    id: "o5",
    name: "OPPO Reno14 5G (12GB+512GB)",
    brand: "Oppo",
    price: 159999,
    image: "images/Oppo/opporeno14.jpg",
    specs: { ram: "12GB", storage: "512GB", camera: "50+50+8MP / Front 50MP", battery: "6000mAh", display: '6.59" 1.5K OLED 120Hz', os: "Android 15 (ColorOS 15)" }
  },
  {
    id: "o6",
    name: "OPPO Reno14 5G (12GB+256GB)",
    brand: "Oppo",
    price: 149999,
    image: "images/Oppo/opporeno14.jpg",
    specs: { ram: "12GB", storage: "256GB", camera: "50+50+8MP / Front 50MP", battery: "6000mAh", display: '6.59" 1.5K OLED 120Hz', os: "Android 15 (ColorOS 15)" }
  },

  {
    id: "o7",
    name: "OPPO Reno15 F 5G",
    brand: "Oppo",
    price: 119999,
    image: "images/Oppo/opporeno15f.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50+50+8MP / Front 50MP", battery: "7000mAh", display: '6.59" 1.5K OLED 120Hz', os: "Android 15 (ColorOS 15)" }
  },

  {
    id: "o8",
    name: "OPPO Reno14 F 5G",
    brand: "Oppo",
    price: 99999,
    image: "images/Oppo/opporeno14f.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50+8+2MP / Front 32MP", battery: "6000mAh", display: '6.57" OLED 120Hz', os: "Android 15 (ColorOS 15)" }
  },

  {
    id: "o9",
    name: "OPPO A6 Pro (8GB+256GB)",
    brand: "Oppo",
    price: 89999,
    image: "images/Oppo/oppoa6pro.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50+2MP / Front 16MP", battery: "7000mAh", display: '6.57" AMOLED 120Hz', os: "Android 15 (ColorOS 15)" }
  },
  {
    id: "o10",
    name: "OPPO A6 Pro (8GB+128GB)",
    brand: "Oppo",
    price: 74999,
    image: "images/Oppo/oppoa6pro.jpg",
    specs: { ram: "8GB", storage: "128GB", camera: "50+2MP / Front 16MP", battery: "7000mAh", display: '6.57" AMOLED 120Hz', os: "Android 15 (ColorOS 15)" }
  },

  {
    id: "o11",
    name: "OPPO A6s",
    brand: "Oppo",
    price: 74999,
    image: "images/Oppo/oppoa6s.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50+2MP / Front 16MP", battery: "7000mAh", display: '6.75" Punch Hole', os: "Android 15 (ColorOS 15)" }
  },

  {
    id: "o12",
    name: "OPPO A6",
    brand: "Oppo",
    price: 64999,
    image: "images/Oppo/oppoa6.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50+2MP / Front 8MP", battery: "7000mAh", display: '6.75" Punch Hole', os: "Android 15 (ColorOS 15)" }
  },

  {
    id: "o13",
    name: "OPPO A6k (8GB+128GB)",
    brand: "Oppo",
    price: 59999,
    image: "images/Oppo/oppoa6k.jpg",
    specs: { ram: "8GB", storage: "128GB", camera: "50MP / Front 5MP", battery: "6500mAh", display: '6.75" Punch Hole', os: "Android 14 (ColorOS 14)" }
  },
  {
    id: "o14",
    name: "OPPO A6k (6GB+128GB)",
    brand: "Oppo",
    price: 54999,
    image: "images/Oppo/oppoa6k.jpg",
    specs: { ram: "6GB", storage: "128GB", camera: "50MP / Front 5MP", battery: "6500mAh", display: '6.75" Punch Hole', os: "Android 14 (ColorOS 14)" }
  },

  {
    id: "o15",
    name: "OPPO A5 Pro (8GB+256GB)",
    brand: "Oppo",
    price: 59999,
    image: "images/Oppo/oppoa5pro.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50+2MP / Front 8MP", battery: "5800mAh", display: '6.67" Punch Hole', os: "Android 14 (ColorOS 14)" }
  },
  {
    id: "o16",
    name: "OPPO A5 Pro (8GB+128GB)",
    brand: "Oppo",
    price: 54999,
    image: "images/Oppo/oppoa5pro.jpg",
    specs: { ram: "8GB", storage: "128GB", camera: "50+2MP / Front 8MP", battery: "5800mAh", display: '6.67" Punch Hole', os: "Android 14 (ColorOS 14)" }
  },

  {
    id: "o17",
    name: "OPPO A5 (8GB+256GB)",
    brand: "Oppo",
    price: 54999,
    image: "images/Oppo/oppoa5x.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50+2MP / Front 8MP", battery: "6000mAh", display: '6.67" Punch Hole', os: "Android 14 (ColorOS 14)" }
  },
  {
    id: "o18",
    name: "OPPO A5 (8GB+128GB)",
    brand: "Oppo",
    price: 49999,
    image: "images/Oppo/oppoa5x.jpg",
    specs: { ram: "8GB", storage: "128GB", camera: "50+2MP / Front 8MP", battery: "6000mAh", display: '6.67" Punch Hole', os: "Android 14 (ColorOS 14)" }
  },
  {
    id: "o19",
    name: "OPPO A5 (6GB+128GB)",
    brand: "Oppo",
    price: 42999,
    image: "images/Oppo/oppoa5x.jpg",
    specs: { ram: "6GB", storage: "128GB", camera: "50+2MP / Front 8MP", battery: "6000mAh", display: '6.67" Punch Hole', os: "Android 14 (ColorOS 14)" }
  },

  {
    id: "o20",
    name: "OPPO A6x (8GB+128GB)",
    brand: "Oppo",
    price: 51999,
    image: "images/Oppo/oppoa6x.jpg",
    specs: { ram: "8GB", storage: "128GB", camera: "13MP / Front 5MP", battery: "6500mAh", display: '6.75" Punch Hole', os: "Android 14 (ColorOS 14)" }
  },
  {
    id: "o21",
    name: "OPPO A6x (6GB+128GB)",
    brand: "Oppo",
    price: 46999,
    image: "images/Oppo/oppoa6x.jpg",
    specs: { ram: "6GB", storage: "128GB", camera: "13MP / Front 5MP", battery: "6500mAh", display: '6.75" Punch Hole', os: "Android 14 (ColorOS 14)" }
  },
  {
    id: "o22",
    name: "OPPO A6x (4GB+128GB)",
    brand: "Oppo",
    price: 37999,
    image: "images/Oppo/oppoa6x.jpg",
    specs: { ram: "4GB", storage: "128GB", camera: "13MP / Front 5MP", battery: "6500mAh", display: '6.75" Punch Hole', os: "Android 14 (ColorOS 14)" }
  },
  {
    id: "o23",
    name: "OPPO A6x (4GB+64GB)",
    brand: "Oppo",
    price: 31999,
    image: "images/Oppo/oppoa6x.jpg",
    specs: { ram: "4GB", storage: "64GB", camera: "13MP / Front 5MP", battery: "6500mAh", display: '6.75" Punch Hole', os: "Android 14 (ColorOS 14)" }
  },

  {
    id: "o24",
    name: "OPPO A5x (4GB+128GB)",
    brand: "Oppo",
    price: 33999,
    image: "images/Oppo/oppoa5x.jpg",
    specs: { ram: "4GB", storage: "128GB", camera: "32MP / Front 5MP", battery: "6000mAh", display: '6.67" Punch Hole', os: "Android 14 (ColorOS 14)" }
  },
  {
    id: "o25",
    name: "OPPO A5x (4GB+64GB)",
    brand: "Oppo",
    price: 31999,
    image: "images/Oppo/oppoa5x.jpg",
    specs: { ram: "4GB", storage: "64GB", camera: "32MP / Front 5MP", battery: "6000mAh", display: '6.67" Punch Hole', os: "Android 14 (ColorOS 14)" }
  },

  {
    id: "o26",
    name: "OPPO A5i (4GB+128GB)",
    brand: "Oppo",
    price: 35999,
    image: "images/Oppo/oppoa5i.jpg",
    specs: { ram: "4GB", storage: "128GB", camera: "8MP / Front 5MP", battery: "5100mAh", display: '6.67" Punch Hole', os: "Android 14 (ColorOS 14)" }
  },
  {
    id: "o27",
    name: "OPPO A5i (4GB+64GB)",
    brand: "Oppo",
    price: 30999,
    image: "images/Oppo/oppoa5i.jpg",
    specs: { ram: "4GB", storage: "64GB", camera: "8MP / Front 5MP", battery: "5100mAh", display: '6.67" Punch Hole', os: "Android 14 (ColorOS 14)" }
  },

  // ─── HONOR ─────────────────────────────────────────────────────────────────

  {
    id: "h1",
    name: "HONOR Play 10",
    brand: "Honor",
    price: 20999,
    image: "images/Honor/honorplay10.jpg",
    specs: { ram: "3GB", storage: "64GB", camera: "13MP AF / Front 5MP", battery: "5000mAh", display: '6.74" 90Hz', os: "Android 14 (MagicOS 8)" }
  },

  {
    id: "h2",
    name: "HONOR X5c",
    brand: "Honor",
    price: 27999,
    image: "images/Honor/honorx5c.jpg",
    specs: { ram: "4GB", storage: "64GB", camera: "50+0.08MP / Front 5MP", battery: "5260mAh", display: '6.74" 90Hz', os: "Android 14 (MagicOS 8)" }
  },

  {
    id: "h3",
    name: "HONOR X5c Plus",
    brand: "Honor",
    price: 29999,
    image: "images/Honor/honorx5cplus.jpg",
    specs: { ram: "4GB", storage: "128GB", camera: "50+0.08MP / Front 5MP", battery: "5260mAh", display: '6.74" 90Hz', os: "Android 14 (MagicOS 8)" }
  },

  {
    id: "h4",
    name: "HONOR X6c (6GB+128GB)",
    brand: "Honor",
    price: 36999,
    image: "images/Honor/honorx6c.jpg",
    specs: { ram: "6GB", storage: "128GB", camera: "50+0.08MP / Front 5MP", battery: "5300mAh", display: '6.61" 120Hz', os: "Android 14 (MagicOS 8)" }
  },
  {
    id: "h5",
    name: "HONOR X6c (6GB+256GB)",
    brand: "Honor",
    price: 41999,
    image: "images/Honor/honorx6c.jpg",
    specs: { ram: "6GB", storage: "256GB", camera: "50+0.08MP / Front 5MP", battery: "5300mAh", display: '6.61" 120Hz', os: "Android 14 (MagicOS 8)" }
  },

  {
    id: "h6",
    name: "HONOR X7c",
    brand: "Honor",
    price: 47999,
    image: "images/Honor/honorx7c.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "108+2MP / Front 8MP", battery: "6000mAh", display: '6.77" 120Hz', os: "Android 14 (MagicOS 8)" }
  },

  {
    id: "h7",
    name: "HONOR X8d",
    brand: "Honor",
    price: 69999,
    image: "images/Honor/honorx8d.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "108+5MP / Front 16MP", battery: "7000mAh", display: '6.78" 120Hz', os: "Android 15 (MagicOS 9)" }
  },

  {
    id: "h8",
    name: "HONOR X9d 5G",
    brand: "Honor",
    price: 109999,
    image: "images/Honor/honorx9d.jpg",
    specs: { ram: "12GB", storage: "256GB", camera: "108+5MP / Front 16MP", battery: "8300mAh", display: '6.79" 120Hz 5G', os: "Android 15 (MagicOS 9)" }
  },

  // ─── TECNO ─────────────────────────────────────────────────────────────────

  {
    id: "t1",
    name: "Tecno Spark 40 Pro Plus",
    brand: "Tecno",
    price: 65999,
    image: "public/images/Tecno/technospark40pro+.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50MP", battery: "N/A", display: '6.78" 3D AMOLED 1.5K 144Hz', os: "Android 14 (HiOS 14)" }
  },

  {
    id: "t2",
    name: "Tecno Spark 40 Pro",
    brand: "Tecno",
    price: 54999,
    image: "public/images/Tecno/technospark40pro.jpg",
    specs: { ram: "8GB", storage: "256GB", camera: "50MP", battery: "N/A", display: '6.78" AMOLED 144Hz', os: "Android 14 (HiOS 14)" }
  },

  {
    id: "t3",
    name: "Tecno Spark 40",
    brand: "Tecno",
    price: 39999,
    image: "public/images/Tecno/technospark40.jpg",
    specs: { ram: "6GB", storage: "128GB", camera: "50MP", battery: "N/A", display: '6.67" 120Hz', os: "Android 14 (HiOS 14)" }
  },

  {
    id: "t4",
    name: "Tecno Spark 40C",
    brand: "Tecno",
    price: 29999,
    image: "./images/Tecno/tecnospark40c.jpg",
    specs: { ram: "4GB", storage: "128GB", camera: "13+8MP", battery: "N/A", display: '6.67" 120Hz', os: "Android 14 (HiOS 14)" }
  },

  {
    id: "t5",
    name: "Tecno Spark Go 3 (4GB+128GB)",
    brand: "Tecno",
    price: 29999,
    image: "public/images/Tecno/tecnosparkgo3.jpg",
    specs: { ram: "4GB", storage: "128GB", camera: "13+8MP", battery: "N/A", display: '6.75" 120Hz', os: "Android 14 (HiOS 14)" }
  },
  {
    id: "t6",
    name: "Tecno Spark Go 3 (4GB+64GB)",
    brand: "Tecno",
    price: 26999,
    image: "public/images/Tecno/tecnosparkgo3.jpg",
    specs: { ram: "4GB", storage: "64GB", camera: "13+8MP", battery: "N/A", display: '6.75" 120Hz', os: "Android 14 (HiOS 14)" }
  },

  {
    id: "t7",
    name: "Tecno Spark Go 2",
    brand: "Tecno",
    price: 26999,
    image: "public/images/Tecno/tecnosparkgo2.jpg",
    specs: { ram: "4GB", storage: "64GB", camera: "13+8MP", battery: "N/A", display: '6.67" 120Hz', os: "Android 14 (HiOS 14)" }
  },

  // ─── APPLE ─────────────────────────────────────────────────────────────────

  {
    id: "ap1",
    name: "Apple iPhone 14 128GB — Midnight",
    brand: "Apple",
    price: 175000,
    image: "images/Apple/iphone14.jpg",
    pta: "grey",
    specs: { ram: "6GB", storage: "128GB", camera: "12+12MP", battery: "3279mAh", display: '6.1" OLED 60Hz', os: "iOS 17" }
  },
  {
    id: "ap2",
    name: "Apple iPhone 14 128GB — Blue",
    brand: "Apple",
    price: 175000,
    image: "images/Apple/iphone14.jpg",
    pta: "grey",
    specs: { ram: "6GB", storage: "128GB", camera: "12+12MP", battery: "3279mAh", display: '6.1" OLED 60Hz', os: "iOS 17" }
  },
  {
    id: "ap3",
    name: "Apple iPhone 15 128GB — Black",
    brand: "Apple",
    price: 225000,
    image: "images/Apple/iphone15.jpg",
    pta: "grey",
    stockLeft: 3,
    specs: { ram: "6GB", storage: "128GB", camera: "48+12MP", battery: "3877mAh", display: '6.1" OLED 60Hz', os: "iOS 18" }
  },
  {
    id: "ap4",
    name: "Apple iPhone 15 128GB — Blue",
    brand: "Apple",
    price: 225000,
    image: "images/Apple/iphone15.jpg",
    pta: "grey",
    specs: { ram: "6GB", storage: "128GB", camera: "48+12MP", battery: "3877mAh", display: '6.1" OLED 60Hz', os: "iOS 18" }
  },
  {
    id: "ap5",
    name: "Apple iPhone 16 128GB — Black",
    brand: "Apple",
    price: 265000,
    originalPrice: 280000,
    discountPercent: 5,
    isFlashSale: true,
    image: "images/Apple/iphone16.jpg",
    pta: "approved",
    specs: { ram: "8GB", storage: "128GB", camera: "48+12MP", battery: "3561mAh", display: '6.1" OLED 60Hz', os: "iOS 18" }
  },
  {
    id: "ap6",
    name: "Apple iPhone 16 128GB — White",
    brand: "Apple",
    price: 265000,
    image: "images/Apple/iphone16.jpg",
    pta: "approved",
    specs: { ram: "8GB", storage: "128GB", camera: "48+12MP", battery: "3561mAh", display: '6.1" OLED 60Hz', os: "iOS 18" }
  },
  {
    id: "ap7",
    name: "Apple iPhone 16 128GB — Ultramarine",
    brand: "Apple",
    price: 265000,
    image: "images/Apple/iphone16.jpg",
    pta: "approved",
    stockLeft: 2,
    specs: { ram: "8GB", storage: "128GB", camera: "48+12MP", battery: "3561mAh", display: '6.1" OLED 60Hz', os: "iOS 18" }
  },
  {
    id: "ap8",
    name: "Apple iPhone 17 512GB — White",
    brand: "Apple",
    price: 415000,
    isNew: true,
    image: "images/Apple/iphone17.jpg",
    pta: "approved",
    specs: { ram: "8GB", storage: "512GB", camera: "48+12MP", battery: "4000mAh", display: '6.1" OLED 60Hz', os: "iOS 18" }
  },
  {
    id: "ap9",
    name: "Apple iPhone 17 512GB — Mist Blue",
    brand: "Apple",
    price: 415000,
    isNew: true,
    image: "images/Apple/iphone17.jpg",
    pta: "approved",
    specs: { ram: "8GB", storage: "512GB", camera: "48+12MP", battery: "4000mAh", display: '6.1" OLED 60Hz', os: "iOS 18" }
  },
  {
    id: "ap10",
    name: "Apple iPhone 17 512GB — Sage",
    brand: "Apple",
    price: 415000,
    isNew: true,
    image: "images/Apple/iphone17.jpg",
    pta: "approved",
    specs: { ram: "8GB", storage: "512GB", camera: "48+12MP", battery: "4000mAh", display: '6.1" OLED 60Hz', os: "iOS 18" }
  },
  {
    id: "ap11",
    name: "Apple iPhone 17 Air 256GB — Space Black",
    brand: "Apple",
    price: 355000,
    isNew: true,
    image: "images/Apple/iphone17air.jpg",
    pta: "approved",
    specs: { ram: "8GB", storage: "256GB", camera: "48+12MP", battery: "3600mAh", display: '6.6" OLED 60Hz', os: "iOS 18" }
  },
  {
    id: "ap12",
    name: "Apple iPhone 17 Pro 1TB — Cosmic Orange",
    brand: "Apple",
    price: 660000,
    isNew: true,
    stockLeft: 1,
    image: "images/Apple/iphone17pro.jpg",
    pta: "approved",
    specs: { ram: "12GB", storage: "1TB", camera: "48+12+12MP", battery: "4100mAh", display: '6.3" ProMotion 120Hz', os: "iOS 18" }
  },
  {
    id: "ap13",
    name: "Apple iPhone 17 Pro 256GB — Silver",
    brand: "Apple",
    price: 470000,
    isNew: true,
    image: "images/Apple/iphone17pro.jpg",
    pta: "approved",
    specs: { ram: "12GB", storage: "256GB", camera: "48+12+12MP", battery: "4100mAh", display: '6.3" ProMotion 120Hz', os: "iOS 18" }
  },
  {
    id: "ap14",
    name: "Apple iPhone 17 Pro 256GB — Cosmic Orange",
    brand: "Apple",
    price: 470000,
    isNew: true,
    image: "images/Apple/iphone17pro.jpg",
    pta: "approved",
    specs: { ram: "12GB", storage: "256GB", camera: "48+12+12MP", battery: "4100mAh", display: '6.3" ProMotion 120Hz', os: "iOS 18" }
  },
  {
    id: "ap15",
    name: "Apple iPhone 17 Pro 256GB — Deep Blue",
    brand: "Apple",
    price: 470000,
    isNew: true,
    image: "images/Apple/iphone17pro.jpg",
    pta: "approved",
    specs: { ram: "12GB", storage: "256GB", camera: "48+12+12MP", battery: "4100mAh", display: '6.3" ProMotion 120Hz', os: "iOS 18" }
  },
  {
    id: "ap16",
    name: "Apple iPhone 17 Pro 512GB — Cosmic Orange",
    brand: "Apple",
    price: 535000,
    isNew: true,
    image: "images/Apple/iphone17pro.jpg",
    pta: "approved",
    specs: { ram: "12GB", storage: "512GB", camera: "48+12+12MP", battery: "4100mAh", display: '6.3" ProMotion 120Hz', os: "iOS 18" }
  },
  {
    id: "ap17",
    name: "Apple iPhone 17 Pro Max 256GB — Cosmic Orange",
    brand: "Apple",
    price: 535000,
    originalPrice: 565000,
    discountPercent: 5,
    isNew: true,
    isFlashSale: true,
    image: "images/Apple/iphone17promax.jpg",
    pta: "approved",
    specs: { ram: "12GB", storage: "256GB", camera: "48+12+12MP", battery: "4685mAh", display: '6.9" ProMotion 120Hz', os: "iOS 18" }
  },
  {
    id: "ap18",
    name: "Apple iPhone 17 Pro Max 256GB — Deep Blue",
    brand: "Apple",
    price: 565000,
    isNew: true,
    image: "images/Apple/iphone17promax.jpg",
    pta: "approved",
    specs: { ram: "12GB", storage: "256GB", camera: "48+12+12MP", battery: "4685mAh", display: '6.9" ProMotion 120Hz', os: "iOS 18" }
  },
  {
    id: "ap19",
    name: "Apple iPhone 17 Pro Max 512GB — Cosmic Orange",
    brand: "Apple",
    price: 635000,
    isNew: true,
    image: "images/Apple/iphone17promax.jpg",
    pta: "approved",
    specs: { ram: "12GB", storage: "512GB", camera: "48+12+12MP", battery: "4685mAh", display: '6.9" ProMotion 120Hz', os: "iOS 18" }
  },
  {
    id: "ap20",
    name: "Apple iPhone 17 Pro Max 512GB — Deep Blue",
    brand: "Apple",
    price: 635000,
    isNew: true,
    stockLeft: 2,
    image: "images/Apple/iphone17promax.jpg",
    pta: "approved",
    specs: { ram: "12GB", storage: "512GB", camera: "48+12+12MP", battery: "4685mAh", display: '6.9" ProMotion 120Hz', os: "iOS 18" }
  },
];

// ─── DETAILED SPECIFICATIONS ────────────────────────────────────────────────

export interface DetailedSpecs {
  dimensions: string;
  weight: string;
  displayType: string;
  screenSize: string;
  refreshRate: string;
  resolution: string;
  processor: string;
  gpu: string;
  expandableStorage: string;
  rearCamera: string;
  frontCamera: string;
  chargingSpeed: string;
  network: string;
  wifi: string;
  bluetooth: string;
  usb: string;
  simType: string;
  fingerprint: string;
  waterResistance: string;
}

// ── Model-level spec objects (shared by variants) ──

const sA07: DetailedSpecs = {
  dimensions: "164.4 × 76.3 × 9.1 mm", weight: "193g",
  displayType: "PLS LCD", screenSize: '6.7"', refreshRate: "60Hz", resolution: "720 × 1600 (HD+)",
  processor: "Samsung Exynos 850 (8nm)", gpu: "Mali-G52",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "50MP (f/1.8) + 2MP Depth", frontCamera: "5MP",
  chargingSpeed: "15W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const sA17: DetailedSpecs = {
  dimensions: "166.5 × 77.2 × 8.0 mm", weight: "195g",
  displayType: "Super AMOLED", screenSize: '6.7"', refreshRate: "90Hz", resolution: "1080 × 2400 (FHD+)",
  processor: "MediaTek Helio G99 (6nm)", gpu: "Mali-G57 MC2",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "50MP + 5MP + 2MP", frontCamera: "13MP",
  chargingSpeed: "25W Wired",
  network: "4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.3",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const sA26: DetailedSpecs = {
  dimensions: "163.1 × 77.9 × 7.5 mm", weight: "185g",
  displayType: "Super AMOLED", screenSize: '6.7"', refreshRate: "120Hz", resolution: "1080 × 2340 (FHD+)",
  processor: "Samsung Exynos 1380 (5nm)", gpu: "Mali-G68 MP5",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "50MP + 8MP Ultra-wide + 2MP Depth", frontCamera: "12MP",
  chargingSpeed: "25W Wired",
  network: "5G / 4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.3",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "In-display Optical", waterResistance: "IP67",
};

const sA36: DetailedSpecs = {
  dimensions: "163.5 × 77.9 × 7.5 mm", weight: "192g",
  displayType: "Super AMOLED", screenSize: '6.7"', refreshRate: "120Hz", resolution: "1080 × 2340 (FHD+)",
  processor: "Qualcomm Snapdragon 6 Gen 3 (4nm)", gpu: "Adreno 710",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "50MP + 8MP Ultra-wide + 5MP", frontCamera: "12MP",
  chargingSpeed: "45W Wired",
  network: "5G / 4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.3",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "In-display Optical", waterResistance: "IP67",
};

const sA56: DetailedSpecs = {
  dimensions: "164.2 × 78.1 × 7.3 mm", weight: "197g",
  displayType: "Super AMOLED", screenSize: '6.7"', refreshRate: "120Hz", resolution: "1080 × 2340 (FHD+)",
  processor: "Samsung Exynos 1580 (4nm)", gpu: "Xclipse 540",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "50MP + 12MP Ultra-wide + 5MP", frontCamera: "12MP",
  chargingSpeed: "45W Wired",
  network: "5G / 4G LTE", wifi: "Wi-Fi 6E (802.11ax)", bluetooth: "5.3",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "In-display Optical", waterResistance: "IP67",
};

const sS25FE: DetailedSpecs = {
  dimensions: "162.2 × 77.6 × 7.9 mm", weight: "190g",
  displayType: "Dynamic AMOLED 2X", screenSize: '6.7"', refreshRate: "120Hz Adaptive", resolution: "1080 × 2340 (FHD+)",
  processor: "Samsung Exynos 2500 (3nm)", gpu: "Xclipse 950",
  expandableStorage: "No",
  rearCamera: "50MP + 12MP Ultra-wide + 8MP Telephoto (3x)", frontCamera: "10MP",
  chargingSpeed: "45W Wired, 15W Wireless",
  network: "5G / 4G LTE", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 3.2", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "Ultrasonic In-display", waterResistance: "IP68",
};

const sS25Ultra: DetailedSpecs = {
  dimensions: "162.8 × 77.6 × 8.2 mm", weight: "218g",
  displayType: "Dynamic AMOLED 2X", screenSize: '6.9"', refreshRate: "120Hz Adaptive (1–120Hz)", resolution: "3088 × 1440 (QHD+)",
  processor: "Qualcomm Snapdragon 8 Elite for Galaxy (3nm)", gpu: "Adreno 830",
  expandableStorage: "No",
  rearCamera: "200MP (f/1.7, OIS) + 12MP Ultra-wide + 10MP Periscope (10x) + 10MP (3x)", frontCamera: "12MP (f/2.2)",
  chargingSpeed: "45W Wired, 15W Wireless, 4.5W Reverse Wireless",
  network: "5G (Sub-6GHz + mmWave)", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 3.2", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "Ultrasonic In-display", waterResistance: "IP68",
};

const sS26: DetailedSpecs = {
  dimensions: "147.8 × 70.7 × 7.2 mm", weight: "162g",
  displayType: "Dynamic AMOLED 2X", screenSize: '6.3"', refreshRate: "120Hz Adaptive (1–120Hz)", resolution: "2340 × 1080 (FHD+)",
  processor: "Qualcomm Snapdragon 8 Elite for Galaxy (3nm)", gpu: "Adreno 830",
  expandableStorage: "No",
  rearCamera: "50MP (f/1.8, OIS) + 12MP Ultra-wide + 10MP Telephoto (3x)", frontCamera: "12MP",
  chargingSpeed: "25W Wired, 15W Wireless",
  network: "5G (Sub-6GHz + mmWave)", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 3.2", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "Ultrasonic In-display", waterResistance: "IP68",
};

const sS26Plus: DetailedSpecs = {
  dimensions: "158.0 × 76.0 × 7.3 mm", weight: "193g",
  displayType: "Dynamic AMOLED 2X", screenSize: '6.7"', refreshRate: "120Hz Adaptive (1–120Hz)", resolution: "2340 × 1080 (FHD+)",
  processor: "Qualcomm Snapdragon 8 Elite for Galaxy (3nm)", gpu: "Adreno 830",
  expandableStorage: "No",
  rearCamera: "50MP (f/1.8, OIS) + 12MP Ultra-wide + 10MP Telephoto (3x)", frontCamera: "12MP",
  chargingSpeed: "45W Wired, 15W Wireless",
  network: "5G (Sub-6GHz + mmWave)", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 3.2", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "Ultrasonic In-display", waterResistance: "IP68",
};

// S26 Ultra — based on Daraz listing (similar architecture to S24 Ultra)
const sS26Ultra: DetailedSpecs = {
  dimensions: "162.3 × 79.1 × 8.6 mm", weight: "234g",
  displayType: "Dynamic AMOLED 2X", screenSize: '6.9"', refreshRate: "120Hz Adaptive (1–120Hz)", resolution: "3088 × 1440 (~500 ppi)",
  processor: "Qualcomm Snapdragon 8 Elite for Galaxy (3nm)", gpu: "Adreno 830",
  expandableStorage: "No",
  rearCamera: "200MP (f/1.7, OIS, Laser AF) + 12MP Ultra-wide (f/2.2, 120°) + 10MP Periscope (f/4.9, 10x Optical) + 10MP (f/2.4, 3x Optical)", frontCamera: "12MP (f/2.2, 90° FOV)",
  chargingSpeed: "45W Wired, 15W Wireless, 4.5W Reverse Wireless",
  network: "5G (Sub-6GHz + mmWave)", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 3.2", simType: "Dual SIM (Nano-SIM + eSIM)",
  fingerprint: "Ultrasonic In-display", waterResistance: "IP68",
};

// ── Vivo ──

const vXFold5: DetailedSpecs = {
  dimensions: "156.7 × 73.9 × 4.7 mm (unfolded)", weight: "229g",
  displayType: "Foldable AMOLED (Inner 8.03\" + Cover 6.53\")", screenSize: '8.03" / 6.53"', refreshRate: "120Hz", resolution: "2160 × 1916 / 1080 × 2748",
  processor: "Qualcomm Snapdragon 8 Gen 3 (4nm)", gpu: "Adreno 750",
  expandableStorage: "No",
  rearCamera: "50MP (f/1.57, OIS) + 50MP Ultra-wide + 50MP Periscope (3.7x)", frontCamera: "20MP + 20MP (Inner)",
  chargingSpeed: "80W Wired, 30W Wireless",
  network: "5G / 4G LTE", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "Side-mounted", waterResistance: "IP54",
};

const vX300Pro: DetailedSpecs = {
  dimensions: "163.4 × 76.0 × 8.3 mm", weight: "228g",
  displayType: "AMOLED LTPO", screenSize: '6.78"', refreshRate: "120Hz Adaptive", resolution: "1260 × 2800",
  processor: "MediaTek Dimensity 9400 (3nm)", gpu: "Immortalis-G925",
  expandableStorage: "No",
  rearCamera: "200MP Periscope (5.5x, OIS) + 50MP Ultra-wide + 50MP Portrait", frontCamera: "50MP",
  chargingSpeed: "90W Wired, 30W Wireless",
  network: "5G / 4G LTE", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "In-display Optical", waterResistance: "IP69",
};

const vX200FE: DetailedSpecs = {
  dimensions: "152.3 × 72.3 × 8.5 mm", weight: "187g",
  displayType: "BOE AMOLED", screenSize: '6.31"', refreshRate: "120Hz", resolution: "1440 × 3216",
  processor: "MediaTek Dimensity 9300+ (4nm)", gpu: "Immortalis-G720",
  expandableStorage: "No",
  rearCamera: "50MP (Zeiss, OIS) + 50MP Ultra-wide + 8MP", frontCamera: "50MP",
  chargingSpeed: "80W Wired, 30W Wireless",
  network: "5G / 4G LTE", wifi: "Wi-Fi 6E (802.11ax)", bluetooth: "5.4",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "In-display Optical", waterResistance: "IP64",
};

const vV70: DetailedSpecs = {
  dimensions: "161.8 × 76.2 × 7.6 mm", weight: "185g",
  displayType: "AMOLED", screenSize: '6.59"', refreshRate: "120Hz", resolution: "1080 × 2408",
  processor: "MediaTek Dimensity 7300 (4nm)", gpu: "Mali-G615 MC2",
  expandableStorage: "No",
  rearCamera: "50MP (Sony IMX882, OIS) + 50MP Portrait + 8MP Ultra-wide", frontCamera: "50MP",
  chargingSpeed: "80W Wired, 30W Wireless",
  network: "4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.4",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "In-display Optical", waterResistance: "IP64",
};

const vV60Lite5G: DetailedSpecs = {
  dimensions: "165.0 × 76.4 × 7.7 mm", weight: "191g",
  displayType: "AMOLED", screenSize: '6.77"', refreshRate: "120Hz", resolution: "1080 × 2408",
  processor: "MediaTek Dimensity 6300 (4nm)", gpu: "Mali-G57 MC2",
  expandableStorage: "No",
  rearCamera: "50MP + 8MP Ultra-wide", frontCamera: "32MP",
  chargingSpeed: "44W Wired",
  network: "5G / 4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "In-display Optical", waterResistance: "No",
};

const vV60Lite: DetailedSpecs = {
  dimensions: "165.0 × 76.4 × 7.7 mm", weight: "189g",
  displayType: "AMOLED", screenSize: '6.77"', refreshRate: "120Hz", resolution: "1080 × 2408",
  processor: "MediaTek Helio G99 (6nm)", gpu: "Mali-G57 MC2",
  expandableStorage: "No",
  rearCamera: "50MP + 8MP Ultra-wide", frontCamera: "32MP",
  chargingSpeed: "44W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "In-display Optical", waterResistance: "No",
};

const vY400: DetailedSpecs = {
  dimensions: "164.6 × 76.2 × 8.0 mm", weight: "185g",
  displayType: "IPS LCD", screenSize: '6.67"', refreshRate: "120Hz", resolution: "1080 × 2400",
  processor: "Qualcomm Snapdragon 4 Gen 2 (4nm)", gpu: "Adreno 613",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "50MP + 2MP Depth", frontCamera: "8MP",
  chargingSpeed: "44W Wired",
  network: "5G / 4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.3",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const vY29: DetailedSpecs = {
  dimensions: "164.4 × 75.7 × 8.3 mm", weight: "185g",
  displayType: "IPS LCD", screenSize: '6.68"', refreshRate: "90Hz", resolution: "1080 × 2400",
  processor: "MediaTek Helio G91 (12nm)", gpu: "Mali-G57 MC2",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "50MP + 2MP Depth", frontCamera: "8MP",
  chargingSpeed: "15W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.1",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const vY21d: DetailedSpecs = {
  dimensions: "164.4 × 75.7 × 8.3 mm", weight: "185g",
  displayType: "IPS LCD", screenSize: '6.68"', refreshRate: "90Hz", resolution: "1080 × 2400",
  processor: "MediaTek Helio G91 (12nm)", gpu: "Mali-G57 MC2",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "50MP", frontCamera: "5MP",
  chargingSpeed: "15W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const vY05: DetailedSpecs = {
  dimensions: "167.4 × 77.3 × 8.5 mm", weight: "193g",
  displayType: "IPS LCD", screenSize: '6.74"', refreshRate: "90Hz", resolution: "720 × 1600 (HD+)",
  processor: "MediaTek Helio G36 (12nm)", gpu: "PowerVR GE8320",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "13MP / 8MP (varies by model)", frontCamera: "5MP",
  chargingSpeed: "10W Wired",
  network: "4G LTE", wifi: "Wi-Fi 4 (802.11n)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const vY04: DetailedSpecs = {
  dimensions: "165.8 × 76.9 × 8.5 mm", weight: "190g",
  displayType: "IPS LCD", screenSize: '6.74"', refreshRate: "90Hz", resolution: "720 × 1600 (HD+)",
  processor: "MediaTek Helio G36 (12nm)", gpu: "PowerVR GE8320",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "13MP", frontCamera: "5MP",
  chargingSpeed: "10W Wired",
  network: "4G LTE", wifi: "Wi-Fi 4 (802.11n)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

// ── Redmi ──

const rA3X: DetailedSpecs = {
  dimensions: "168.4 × 76.4 × 8.3 mm", weight: "186g",
  displayType: "IPS LCD", screenSize: '6.71"', refreshRate: "90Hz", resolution: "720 × 1600 (HD+)",
  processor: "MediaTek Helio G36 (12nm)", gpu: "PowerVR GE8320",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "8MP", frontCamera: "5MP",
  chargingSpeed: "10W Wired",
  network: "4G LTE", wifi: "Wi-Fi 4 (802.11n)", bluetooth: "5.3",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const rA5: DetailedSpecs = {
  dimensions: "168.7 × 77.6 × 8.3 mm", weight: "198g",
  displayType: "IPS LCD", screenSize: '6.88"', refreshRate: "90Hz", resolution: "720 × 1640 (HD+)",
  processor: "Unisoc T7250 (12nm)", gpu: "IMG BXE-4-32",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "32MP", frontCamera: "8MP",
  chargingSpeed: "10W Wired",
  network: "4G LTE", wifi: "Wi-Fi 4 (802.11n)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const r14C: DetailedSpecs = {
  dimensions: "168.0 × 77.8 × 8.2 mm", weight: "204g",
  displayType: "IPS LCD", screenSize: '6.88"', refreshRate: "120Hz", resolution: "720 × 1640 (HD+)",
  processor: "MediaTek Helio G85 (12nm)", gpu: "Mali-G52 MC2",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "50MP + Depth sensor", frontCamera: "13MP",
  chargingSpeed: "18W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.3",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const r15C: DetailedSpecs = {
  dimensions: "168.7 × 77.6 × 8.3 mm", weight: "210g",
  displayType: "IPS LCD", screenSize: '6.9"', refreshRate: "120Hz", resolution: "720 × 1640 (HD+)",
  processor: "MediaTek Helio G91 Ultra (12nm)", gpu: "Mali-G57 MC2",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "50MP + AI Lens", frontCamera: "8MP",
  chargingSpeed: "18W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.3",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const r13: DetailedSpecs = {
  dimensions: "168.6 × 76.3 × 8.1 mm", weight: "205g",
  displayType: "IPS LCD", screenSize: '6.79"', refreshRate: "90Hz", resolution: "1080 × 2460 (FHD+)",
  processor: "MediaTek Helio G91 (12nm)", gpu: "Mali-G57 MC2",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "108MP + 2MP Depth", frontCamera: "13MP",
  chargingSpeed: "18W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.3",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const r15: DetailedSpecs = {
  dimensions: "168.7 × 76.0 × 8.3 mm", weight: "218g",
  displayType: "AMOLED", screenSize: '6.9"', refreshRate: "90Hz", resolution: "1080 × 2400 (FHD+)",
  processor: "MediaTek Dimensity 7300X (4nm)", gpu: "Mali-G615 MC2",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "50MP (OIS)", frontCamera: "8MP",
  chargingSpeed: "45W Wired",
  network: "4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.4",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const rNote14: DetailedSpecs = {
  dimensions: "162.3 × 75.3 × 7.9 mm", weight: "187g",
  displayType: "AMOLED", screenSize: '6.67"', refreshRate: "120Hz", resolution: "1080 × 2400 (FHD+)",
  processor: "Qualcomm Snapdragon 685 (6nm)", gpu: "Adreno 610",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "108MP + 2MP Depth + 2MP Macro", frontCamera: "20MP",
  chargingSpeed: "33W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.1",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "IP54",
};

const rNote14Pro: DetailedSpecs = {
  dimensions: "162.3 × 74.3 × 8.0 mm", weight: "189g",
  displayType: "AMOLED", screenSize: '6.67"', refreshRate: "120Hz", resolution: "1080 × 2400 (FHD+)",
  processor: "MediaTek Dimensity 7200 Ultra (4nm)", gpu: "Mali-G610 MC4",
  expandableStorage: "Yes (microSD up to 1TB)",
  rearCamera: "200MP (OIS) + 8MP Ultra-wide + 2MP Macro", frontCamera: "32MP",
  chargingSpeed: "45W Wired",
  network: "4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.4",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "IP54",
};

const rNote14ProPlus: DetailedSpecs = {
  dimensions: "161.4 × 74.3 × 8.5 mm", weight: "193g",
  displayType: "AMOLED", screenSize: '6.67"', refreshRate: "120Hz", resolution: "1220 × 2712",
  processor: "MediaTek Dimensity 9200+ (4nm)", gpu: "Immortalis-G715 MC11",
  expandableStorage: "No",
  rearCamera: "200MP (OIS) + 8MP Ultra-wide + 2MP Macro", frontCamera: "20MP",
  chargingSpeed: "90W Wired, 50W Wireless",
  network: "5G / 4G LTE", wifi: "Wi-Fi 6E (802.11ax)", bluetooth: "5.4",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "In-display Optical", waterResistance: "IP54",
};

// ── Xiaomi ──

const x15T: DetailedSpecs = {
  dimensions: "160.5 × 74.9 × 7.8 mm", weight: "193g",
  displayType: "AMOLED LTPO", screenSize: '6.83"', refreshRate: "144Hz Adaptive", resolution: "1220 × 2712",
  processor: "MediaTek Dimensity 8300 Ultra (4nm)", gpu: "Mali-G615 MC6",
  expandableStorage: "No",
  rearCamera: "50MP (OIS) + 50MP Ultrawide + 12MP Periscope Telephoto (5x)", frontCamera: "32MP",
  chargingSpeed: "67W Wired, 50W Wireless",
  network: "5G / 4G LTE", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "In-display Optical", waterResistance: "IP68",
};

const x15TPro: DetailedSpecs = {
  dimensions: "160.5 × 74.9 × 7.8 mm", weight: "210g",
  displayType: "AMOLED LTPO", screenSize: '6.83"', refreshRate: "144Hz Adaptive", resolution: "1220 × 2712",
  processor: "Qualcomm Snapdragon 8 Gen 3 (4nm)", gpu: "Adreno 750",
  expandableStorage: "No",
  rearCamera: "50MP (OIS, Leica) + 50MP Ultrawide + 12MP Periscope (5x)", frontCamera: "32MP",
  chargingSpeed: "90W Wired, 50W Wireless",
  network: "5G / 4G LTE", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "In-display Optical", waterResistance: "IP68",
};

const x15: DetailedSpecs = {
  dimensions: "152.4 × 72.6 × 8.08 mm", weight: "188g",
  displayType: "AMOLED LTPO", screenSize: '6.36"', refreshRate: "120Hz Adaptive", resolution: "1200 × 2670",
  processor: "Qualcomm Snapdragon 8 Elite (3nm)", gpu: "Adreno 830",
  expandableStorage: "No",
  rearCamera: "50MP (OIS, Leica) + 50MP Ultrawide + 50MP Telephoto (2.5x)", frontCamera: "32MP",
  chargingSpeed: "90W Wired, 50W Wireless, 10W Reverse Wireless",
  network: "5G / 4G LTE", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "In-display Optical", waterResistance: "IP68",
};

const x15Ultra: DetailedSpecs = {
  dimensions: "160.6 × 75.2 × 9.5 mm", weight: "226g",
  displayType: "AMOLED LTPO", screenSize: '6.67"', refreshRate: "120Hz Adaptive", resolution: "1440 × 3200",
  processor: "Qualcomm Snapdragon 8 Elite (3nm)", gpu: "Adreno 830",
  expandableStorage: "No",
  rearCamera: "50MP (OIS, Leica) + 50MP Ultrawide + 50MP Telephoto + 200MP Periscope (10x)", frontCamera: "32MP",
  chargingSpeed: "90W Wired, 80W Wireless, 10W Reverse Wireless",
  network: "5G / 4G LTE", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "In-display Optical", waterResistance: "IP68",
};

// ── OPPO ──

const oReno15Pro: DetailedSpecs = {
  dimensions: "157.0 × 74.0 × 8.0 mm", weight: "185g",
  displayType: "OLED", screenSize: '6.32"', refreshRate: "120Hz", resolution: "1080 × 2400",
  processor: "Qualcomm Snapdragon 8s Gen 3 (4nm)", gpu: "Adreno 735",
  expandableStorage: "No",
  rearCamera: "200MP (OIS) + 50MP Ultra-wide + 50MP Telephoto (3x)", frontCamera: "50MP",
  chargingSpeed: "80W Wired",
  network: "5G / 4G LTE", wifi: "Wi-Fi 6E (802.11ax)", bluetooth: "5.4",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "In-display Optical", waterResistance: "IP65",
};

const oReno14Pro: DetailedSpecs = {
  dimensions: "162.3 × 75.8 × 7.7 mm", weight: "196g",
  displayType: "OLED", screenSize: '6.83"', refreshRate: "120Hz", resolution: "1080 × 2400",
  processor: "MediaTek Dimensity 9200 (4nm)", gpu: "Immortalis-G715",
  expandableStorage: "No",
  rearCamera: "50MP (OIS) + 50MP Ultra-wide + 50MP Telephoto", frontCamera: "50MP",
  chargingSpeed: "80W Wired",
  network: "5G / 4G LTE", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "In-display Optical", waterResistance: "IP65",
};

const oReno15: DetailedSpecs = {
  dimensions: "163.2 × 76.0 × 7.8 mm", weight: "195g",
  displayType: "OLED", screenSize: '6.59"', refreshRate: "120Hz", resolution: "1080 × 2400",
  processor: "MediaTek Dimensity 8350 (4nm)", gpu: "Mali-G615 MC6",
  expandableStorage: "No",
  rearCamera: "50MP (OIS) + 50MP Ultra-wide + 8MP", frontCamera: "50MP",
  chargingSpeed: "80W Wired",
  network: "5G / 4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.3",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "In-display Optical", waterResistance: "IP65",
};

const oReno14: DetailedSpecs = {
  dimensions: "162.5 × 75.7 × 7.7 mm", weight: "190g",
  displayType: "1.5K OLED", screenSize: '6.59"', refreshRate: "120Hz", resolution: "1200 × 2640",
  processor: "MediaTek Dimensity 8350 (4nm)", gpu: "Mali-G615 MC6",
  expandableStorage: "No",
  rearCamera: "50MP (OIS) + 50MP Ultra-wide + 8MP", frontCamera: "50MP",
  chargingSpeed: "80W Wired",
  network: "5G / 4G LTE", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano + eSIM)",
  fingerprint: "In-display Optical", waterResistance: "IP65",
};

const oReno15F: DetailedSpecs = {
  dimensions: "163.2 × 76.0 × 7.8 mm", weight: "198g",
  displayType: "1.5K OLED", screenSize: '6.59"', refreshRate: "120Hz", resolution: "1200 × 2640",
  processor: "MediaTek Dimensity 7300 (4nm)", gpu: "Mali-G615 MC2",
  expandableStorage: "Yes (microSD)",
  rearCamera: "50MP (OIS) + 50MP Ultra-wide + 8MP", frontCamera: "50MP",
  chargingSpeed: "45W Wired",
  network: "5G / 4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.2",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "In-display Optical", waterResistance: "IP54",
};

const oReno14F: DetailedSpecs = {
  dimensions: "163.3 × 75.5 × 7.7 mm", weight: "188g",
  displayType: "OLED", screenSize: '6.57"', refreshRate: "120Hz", resolution: "1080 × 2400",
  processor: "MediaTek Dimensity 7300 (4nm)", gpu: "Mali-G615 MC2",
  expandableStorage: "Yes (microSD)",
  rearCamera: "50MP (OIS) + 8MP Ultra-wide + 2MP Macro", frontCamera: "32MP",
  chargingSpeed: "45W Wired",
  network: "5G / 4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.2",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "In-display Optical", waterResistance: "No",
};

const oA6Pro: DetailedSpecs = {
  dimensions: "163.7 × 75.9 × 7.9 mm", weight: "194g",
  displayType: "AMOLED", screenSize: '6.57"', refreshRate: "120Hz", resolution: "1080 × 2400",
  processor: "MediaTek Dimensity 7300 (4nm)", gpu: "Mali-G615 MC2",
  expandableStorage: "Yes (microSD)",
  rearCamera: "50MP + 2MP Depth", frontCamera: "16MP",
  chargingSpeed: "45W Wired",
  network: "4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.2",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "In-display Optical", waterResistance: "No",
};

const oA6s: DetailedSpecs = {
  dimensions: "164.5 × 76.1 × 7.8 mm", weight: "188g",
  displayType: "AMOLED", screenSize: '6.75"', refreshRate: "120Hz", resolution: "1080 × 2400",
  processor: "MediaTek Helio G99 (6nm)", gpu: "Mali-G57 MC2",
  expandableStorage: "Yes (microSD)",
  rearCamera: "50MP + 2MP Depth", frontCamera: "16MP",
  chargingSpeed: "33W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const oA6: DetailedSpecs = {
  dimensions: "165.2 × 76.4 × 7.9 mm", weight: "190g",
  displayType: "IPS LCD", screenSize: '6.75"', refreshRate: "120Hz", resolution: "1080 × 2400",
  processor: "MediaTek Helio G99 (6nm)", gpu: "Mali-G57 MC2",
  expandableStorage: "Yes (microSD)",
  rearCamera: "50MP + 2MP Depth", frontCamera: "8MP",
  chargingSpeed: "33W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const oA6k: DetailedSpecs = {
  dimensions: "165.5 × 76.6 × 8.1 mm", weight: "195g",
  displayType: "IPS LCD", screenSize: '6.75"', refreshRate: "90Hz", resolution: "720 × 1600 (HD+)",
  processor: "MediaTek Helio G91 (12nm)", gpu: "Mali-G57 MC2",
  expandableStorage: "Yes (microSD)",
  rearCamera: "50MP", frontCamera: "5MP",
  chargingSpeed: "15W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const oA5Pro: DetailedSpecs = {
  dimensions: "164.3 × 75.8 × 8.0 mm", weight: "192g",
  displayType: "IPS LCD", screenSize: '6.67"', refreshRate: "90Hz", resolution: "1080 × 2400 (FHD+)",
  processor: "MediaTek Helio G99 (6nm)", gpu: "Mali-G57 MC2",
  expandableStorage: "Yes (microSD)",
  rearCamera: "50MP (OIS) + 2MP Depth", frontCamera: "8MP",
  chargingSpeed: "45W Wired",
  network: "4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.1",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const oA5: DetailedSpecs = {
  dimensions: "164.0 × 75.6 × 7.9 mm", weight: "188g",
  displayType: "IPS LCD", screenSize: '6.67"', refreshRate: "90Hz", resolution: "1080 × 2400 (FHD+)",
  processor: "MediaTek Helio G91 (12nm)", gpu: "Mali-G57 MC2",
  expandableStorage: "Yes (microSD)",
  rearCamera: "50MP + 2MP Depth", frontCamera: "8MP",
  chargingSpeed: "33W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const oA6x: DetailedSpecs = {
  dimensions: "165.8 × 76.7 × 8.3 mm", weight: "195g",
  displayType: "IPS LCD", screenSize: '6.75"', refreshRate: "120Hz", resolution: "720 × 1600 (HD+)",
  processor: "MediaTek Helio G88 (12nm)", gpu: "Mali-G52 MC2",
  expandableStorage: "Yes (microSD)",
  rearCamera: "13MP + AI Lens", frontCamera: "5MP",
  chargingSpeed: "15W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const oA5x: DetailedSpecs = {
  dimensions: "163.9 × 75.6 × 8.1 mm", weight: "192g",
  displayType: "IPS LCD", screenSize: '6.67"', refreshRate: "90Hz", resolution: "720 × 1600 (HD+)",
  processor: "MediaTek Helio G85 (12nm)", gpu: "Mali-G52 MC2",
  expandableStorage: "Yes (microSD)",
  rearCamera: "32MP + AI Lens", frontCamera: "5MP",
  chargingSpeed: "15W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const oA5i: DetailedSpecs = {
  dimensions: "163.9 × 75.4 × 8.2 mm", weight: "190g",
  displayType: "IPS LCD", screenSize: '6.67"', refreshRate: "60Hz", resolution: "720 × 1600 (HD+)",
  processor: "MediaTek Helio G57 (12nm)", gpu: "Mali-G52",
  expandableStorage: "Yes (microSD)",
  rearCamera: "8MP", frontCamera: "5MP",
  chargingSpeed: "10W Wired",
  network: "4G LTE", wifi: "Wi-Fi 4 (802.11n)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

// ── Honor ──

const hPlay10: DetailedSpecs = {
  dimensions: "167.2 × 76.7 × 8.4 mm", weight: "188g",
  displayType: "IPS LCD", screenSize: '6.74"', refreshRate: "90Hz", resolution: "720 × 1600 (HD+)",
  processor: "MediaTek Helio G37 (12nm)", gpu: "PowerVR GE8320",
  expandableStorage: "Yes (microSD)",
  rearCamera: "13MP AF", frontCamera: "5MP",
  chargingSpeed: "10W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const hX5c: DetailedSpecs = {
  dimensions: "167.2 × 76.7 × 8.4 mm", weight: "190g",
  displayType: "IPS LCD", screenSize: '6.74"', refreshRate: "90Hz", resolution: "720 × 1600 (HD+)",
  processor: "MediaTek Helio G37 (12nm)", gpu: "PowerVR GE8320",
  expandableStorage: "Yes (microSD)",
  rearCamera: "50MP + 0.08MP Depth", frontCamera: "5MP",
  chargingSpeed: "10W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const hX6c: DetailedSpecs = {
  dimensions: "163.2 × 75.2 × 7.9 mm", weight: "180g",
  displayType: "IPS LCD", screenSize: '6.61"', refreshRate: "120Hz", resolution: "1080 × 2388 (FHD+)",
  processor: "Qualcomm Snapdragon 680 (6nm)", gpu: "Adreno 610",
  expandableStorage: "Yes (microSD)",
  rearCamera: "50MP + 0.08MP Depth", frontCamera: "5MP",
  chargingSpeed: "22.5W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.1",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const hX7c: DetailedSpecs = {
  dimensions: "167.3 × 76.5 × 8.1 mm", weight: "197g",
  displayType: "IPS LCD", screenSize: '6.77"', refreshRate: "120Hz", resolution: "1080 × 2388 (FHD+)",
  processor: "Qualcomm Snapdragon 680 (6nm)", gpu: "Adreno 610",
  expandableStorage: "Yes (microSD)",
  rearCamera: "108MP + 2MP Depth", frontCamera: "8MP",
  chargingSpeed: "35W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.1",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const hX8d: DetailedSpecs = {
  dimensions: "167.0 × 77.0 × 8.1 mm", weight: "198g",
  displayType: "IPS LCD", screenSize: '6.78"', refreshRate: "120Hz", resolution: "1080 × 2388 (FHD+)",
  processor: "Qualcomm Snapdragon 6 Gen 1 (4nm)", gpu: "Adreno 710",
  expandableStorage: "Yes (microSD)",
  rearCamera: "108MP (OIS) + 5MP Ultra-wide", frontCamera: "16MP",
  chargingSpeed: "35W Wired",
  network: "4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.2",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const hX9d: DetailedSpecs = {
  dimensions: "167.5 × 77.5 × 8.1 mm", weight: "221g",
  displayType: "IPS LCD", screenSize: '6.79"', refreshRate: "120Hz", resolution: "1080 × 2388 (FHD+)",
  processor: "Qualcomm Snapdragon 6 Gen 3 (4nm)", gpu: "Adreno 710",
  expandableStorage: "Yes (microSD)",
  rearCamera: "108MP (OIS) + 5MP Ultra-wide", frontCamera: "16MP",
  chargingSpeed: "35W Wired",
  network: "5G / 4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.3",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

// ── Tecno ──

const tSpark40ProPlus: DetailedSpecs = {
  dimensions: "165.0 × 76.5 × 7.7 mm", weight: "185g",
  displayType: "3D AMOLED", screenSize: '6.78"', refreshRate: "144Hz", resolution: "1220 × 2652 (1.5K)",
  processor: "MediaTek Dimensity 7025 (6nm)", gpu: "Mali-G610 MC2",
  expandableStorage: "Yes (microSD)",
  rearCamera: "50MP (OIS) + AI Lens", frontCamera: "32MP",
  chargingSpeed: "45W Wired",
  network: "4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.1",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "In-display Optical", waterResistance: "No",
};

const tSpark40Pro: DetailedSpecs = {
  dimensions: "165.0 × 76.5 × 7.9 mm", weight: "187g",
  displayType: "AMOLED", screenSize: '6.78"', refreshRate: "144Hz", resolution: "1080 × 2400",
  processor: "MediaTek Helio G92 (12nm)", gpu: "Mali-G57 MC2",
  expandableStorage: "Yes (microSD)",
  rearCamera: "50MP (OIS) + AI Lens", frontCamera: "32MP",
  chargingSpeed: "33W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "In-display Optical", waterResistance: "No",
};

const tSpark40: DetailedSpecs = {
  dimensions: "163.5 × 75.3 × 7.8 mm", weight: "182g",
  displayType: "IPS LCD", screenSize: '6.67"', refreshRate: "120Hz", resolution: "720 × 1600 (HD+)",
  processor: "MediaTek Helio G88 (12nm)", gpu: "Mali-G52 MC2",
  expandableStorage: "Yes (microSD)",
  rearCamera: "50MP + AI Lens", frontCamera: "8MP",
  chargingSpeed: "18W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const tSpark40C: DetailedSpecs = {
  dimensions: "163.9 × 75.5 × 8.0 mm", weight: "190g",
  displayType: "IPS LCD", screenSize: '6.67"', refreshRate: "120Hz", resolution: "720 × 1600 (HD+)",
  processor: "MediaTek Helio G85 (12nm)", gpu: "Mali-G52 MC2",
  expandableStorage: "Yes (microSD)",
  rearCamera: "13MP + 8MP Ultra-wide", frontCamera: "5MP",
  chargingSpeed: "15W Wired",
  network: "4G LTE", wifi: "Wi-Fi 5 (802.11ac)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const tSparkGo3: DetailedSpecs = {
  dimensions: "164.5 × 76.8 × 8.3 mm", weight: "193g",
  displayType: "IPS LCD", screenSize: '6.75"', refreshRate: "120Hz", resolution: "720 × 1600 (HD+)",
  processor: "MediaTek Helio G36 (12nm)", gpu: "PowerVR GE8320",
  expandableStorage: "Yes (microSD)",
  rearCamera: "13MP + 8MP", frontCamera: "5MP",
  chargingSpeed: "10W Wired",
  network: "4G LTE", wifi: "Wi-Fi 4 (802.11n)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

const tSparkGo2: DetailedSpecs = {
  dimensions: "163.6 × 75.7 × 8.3 mm", weight: "190g",
  displayType: "IPS LCD", screenSize: '6.67"', refreshRate: "120Hz", resolution: "720 × 1600 (HD+)",
  processor: "MediaTek Helio G36 (12nm)", gpu: "PowerVR GE8320",
  expandableStorage: "Yes (microSD)",
  rearCamera: "13MP + 8MP", frontCamera: "5MP",
  chargingSpeed: "10W Wired",
  network: "4G LTE", wifi: "Wi-Fi 4 (802.11n)", bluetooth: "5.0",
  usb: "USB Type-C 2.0", simType: "Dual SIM (Nano-SIM)",
  fingerprint: "Side-mounted", waterResistance: "No",
};

// ── Apple ──

const iphone14: DetailedSpecs = {
  dimensions: "146.7 × 71.5 × 7.8 mm", weight: "172g",
  displayType: "Super Retina XDR OLED", screenSize: '6.1"', refreshRate: "60Hz", resolution: "2532 × 1170 (460 ppi)",
  processor: "Apple A15 Bionic (5nm)", gpu: "Apple GPU (4-core)",
  expandableStorage: "No",
  rearCamera: "12MP (OIS) + 12MP Ultra-wide", frontCamera: "12MP TrueDepth",
  chargingSpeed: "20W Wired / 15W MagSafe",
  network: "5G / 4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.3",
  usb: "Lightning", simType: "Nano-SIM + eSIM",
  fingerprint: "Face ID", waterResistance: "IP68 (6m / 30 min)",
};

const iphone15: DetailedSpecs = {
  dimensions: "147.6 × 71.6 × 7.8 mm", weight: "171g",
  displayType: "Super Retina XDR OLED", screenSize: '6.1"', refreshRate: "60Hz", resolution: "2556 × 1179 (460 ppi)",
  processor: "Apple A16 Bionic (4nm)", gpu: "Apple GPU (5-core)",
  expandableStorage: "No",
  rearCamera: "48MP (OIS) + 12MP Ultra-wide", frontCamera: "12MP TrueDepth",
  chargingSpeed: "20W Wired / 15W MagSafe",
  network: "5G / 4G LTE", wifi: "Wi-Fi 6 (802.11ax)", bluetooth: "5.3",
  usb: "USB Type-C 2.0", simType: "Nano-SIM + eSIM",
  fingerprint: "Face ID", waterResistance: "IP68 (6m / 30 min)",
};

const iphone16: DetailedSpecs = {
  dimensions: "147.6 × 71.6 × 7.8 mm", weight: "170g",
  displayType: "Super Retina XDR OLED", screenSize: '6.1"', refreshRate: "60Hz", resolution: "2556 × 1179 (460 ppi)",
  processor: "Apple A18 (3nm)", gpu: "Apple GPU (5-core)",
  expandableStorage: "No",
  rearCamera: "48MP (OIS) + 12MP Ultra-wide", frontCamera: "12MP TrueDepth",
  chargingSpeed: "25W Wired / 25W MagSafe",
  network: "5G / 4G LTE", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.3",
  usb: "USB Type-C 3.0", simType: "Nano-SIM + eSIM",
  fingerprint: "Face ID", waterResistance: "IP68 (6m / 30 min)",
};

const iphone17: DetailedSpecs = {
  dimensions: "147.7 × 71.7 × 7.8 mm", weight: "170g",
  displayType: "Super Retina XDR OLED", screenSize: '6.1"', refreshRate: "60Hz", resolution: "2556 × 1179 (460 ppi)",
  processor: "Apple A19 Bionic (3nm)", gpu: "Apple GPU (6-core)",
  expandableStorage: "No",
  rearCamera: "48MP (OIS) + 12MP Ultra-wide", frontCamera: "24MP TrueDepth",
  chargingSpeed: "30W Wired / 25W MagSafe",
  network: "5G / 4G LTE", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 3.0", simType: "eSIM only",
  fingerprint: "Face ID", waterResistance: "IP68 (6m / 30 min)",
};

const iphone17Air: DetailedSpecs = {
  dimensions: "163.3 × 77.4 × 5.5 mm", weight: "145g",
  displayType: "Super Retina XDR OLED", screenSize: '6.6"', refreshRate: "60Hz", resolution: "2796 × 1290 (460 ppi)",
  processor: "Apple A19 Bionic (3nm)", gpu: "Apple GPU (5-core)",
  expandableStorage: "No",
  rearCamera: "48MP (OIS)", frontCamera: "24MP TrueDepth",
  chargingSpeed: "30W Wired / 25W MagSafe",
  network: "5G / 4G LTE", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 3.0", simType: "eSIM only",
  fingerprint: "Face ID", waterResistance: "IP68 (6m / 30 min)",
};

const iphone17Pro: DetailedSpecs = {
  dimensions: "149.6 × 71.5 × 8.2 mm", weight: "190g",
  displayType: "ProMotion OLED (LTPO)", screenSize: '6.3"', refreshRate: "1–120Hz ProMotion", resolution: "2622 × 1206 (460 ppi)",
  processor: "Apple A19 Pro (3nm)", gpu: "Apple GPU (6-core)",
  expandableStorage: "No",
  rearCamera: "48MP (OIS) + 48MP Ultra-wide + 12MP 5× Tetraprism", frontCamera: "24MP TrueDepth",
  chargingSpeed: "30W Wired / 25W MagSafe",
  network: "5G / 4G LTE", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 3.2 Gen 2", simType: "eSIM only",
  fingerprint: "Face ID", waterResistance: "IP68 (6m / 30 min)",
};

const iphone17ProMax: DetailedSpecs = {
  dimensions: "163.0 × 77.6 × 8.2 mm", weight: "227g",
  displayType: "ProMotion OLED (LTPO)", screenSize: '6.9"', refreshRate: "1–120Hz ProMotion", resolution: "2868 × 1320 (460 ppi)",
  processor: "Apple A19 Pro (3nm)", gpu: "Apple GPU (6-core)",
  expandableStorage: "No",
  rearCamera: "48MP (OIS) + 48MP Ultra-wide + 12MP 5× Tetraprism", frontCamera: "24MP TrueDepth",
  chargingSpeed: "30W Wired / 25W MagSafe",
  network: "5G / 4G LTE", wifi: "Wi-Fi 7 (802.11be)", bluetooth: "5.4",
  usb: "USB Type-C 3.2 Gen 2", simType: "eSIM only",
  fingerprint: "Face ID", waterResistance: "IP68 (6m / 30 min)",
};

// ── Master lookup map ────────────────────────────────────────────────────────

export const productDetailedSpecs: Record<string, DetailedSpecs> = {
  // Samsung Galaxy A07
  s1: sA07, s2: sA07, s3: sA07,
  // Samsung Galaxy A17
  s4: sA17, s5: sA17,
  // Samsung Galaxy A26 5G
  s6: sA26,
  // Samsung Galaxy A36 5G
  s7: sA36,
  // Samsung Galaxy A56 5G
  s8: sA56, s9: sA56,
  // Samsung Galaxy S25 FE
  s10: sS25FE, s11: sS25FE,
  // Samsung Galaxy S25 Ultra
  s12: sS25Ultra,
  // Samsung Galaxy S26
  s13: sS26, s14: sS26,
  // Samsung Galaxy S26+
  s15: sS26Plus, s16: sS26Plus,
  // Samsung Galaxy S26 Ultra
  s17: sS26Ultra, s18: sS26Ultra, s19: sS26Ultra,
  // Vivo X Fold 5
  v1: vXFold5,
  // Vivo X300 Pro
  v2: vX300Pro,
  // Vivo X200 FE
  v3: vX200FE,
  // Vivo V70
  v4: vV70, v5: vV70,
  // Vivo V60 Lite 5G
  v6: vV60Lite5G,
  // Vivo V60 Lite
  v7: vV60Lite,
  // Vivo Y400
  v8: vY400,
  // Vivo Y29
  v9: vY29,
  // Vivo Y21d
  v10: vY21d, v11: vY21d,
  // Vivo Y05
  v12: vY05, v13: vY05, v14: vY05,
  // Vivo Y04
  v15: vY04, v16: vY04,
  // Redmi A3X
  r1: rA3X,
  // Redmi A5
  r2: rA5,
  // Redmi 14C
  r3: r14C, r4: r14C,
  // Redmi 15C
  r5: r15C, r6: r15C,
  // Redmi 13
  r7: r13,
  // Redmi 15
  r8: r15,
  // Redmi Note 14
  r9: rNote14, r10: rNote14,
  // Redmi Note 14 Pro
  r11: rNote14Pro, r12: rNote14Pro,
  // Redmi Note 14 Pro+
  r13: rNote14ProPlus,
  // Xiaomi 15T
  x1: x15T,
  // Xiaomi 15T Pro
  x2: x15TPro,
  // Xiaomi 15
  x3: x15,
  // Xiaomi 15 Ultra
  x4: x15Ultra,
  // OPPO Reno 15 Pro 5G
  o1: oReno15Pro,
  // OPPO Reno 14 Pro 5G
  o2: oReno14Pro,
  // OPPO Reno 15 5G
  o3: oReno15, o4: oReno15,
  // OPPO Reno 14 5G
  o5: oReno14, o6: oReno14,
  // OPPO Reno 15 F 5G
  o7: oReno15F,
  // OPPO Reno 14 F 5G
  o8: oReno14F,
  // OPPO A6 Pro
  o9: oA6Pro, o10: oA6Pro,
  // OPPO A6s
  o11: oA6s,
  // OPPO A6
  o12: oA6,
  // OPPO A6k
  o13: oA6k, o14: oA6k,
  // OPPO A5 Pro
  o15: oA5Pro, o16: oA5Pro,
  // OPPO A5
  o17: oA5, o18: oA5, o19: oA5,
  // OPPO A6x
  o20: oA6x, o21: oA6x, o22: oA6x, o23: oA6x,
  // OPPO A5x
  o24: oA5x, o25: oA5x,
  // OPPO A5i
  o26: oA5i, o27: oA5i,
  // Honor Play 10
  h1: hPlay10,
  // Honor X5c
  h2: hX5c,
  // Honor X5c Plus
  h3: hX5c,
  // Honor X6c
  h4: hX6c, h5: hX6c,
  // Honor X7c
  h6: hX7c,
  // Honor X8d
  h7: hX8d,
  // Honor X9d 5G
  h8: hX9d,
  // Tecno Spark 40 Pro+
  t1: tSpark40ProPlus,
  // Tecno Spark 40 Pro
  t2: tSpark40Pro,
  // Tecno Spark 40
  t3: tSpark40,
  // Tecno Spark 40C
  t4: tSpark40C,
  // Tecno Spark Go 3
  t5: tSparkGo3, t6: tSparkGo3,
  // Tecno Spark Go 2
  t7: tSparkGo2,
  // iPhone 14
  ap1: iphone14, ap2: iphone14,
  // iPhone 15
  ap3: iphone15, ap4: iphone15,
  // iPhone 16
  ap5: iphone16, ap6: iphone16, ap7: iphone16,
  // iPhone 17
  ap8: iphone17, ap9: iphone17, ap10: iphone17,
  // iPhone 17 Air
  ap11: iphone17Air,
  // iPhone 17 Pro
  ap12: iphone17Pro, ap13: iphone17Pro, ap14: iphone17Pro, ap15: iphone17Pro, ap16: iphone17Pro,
  // iPhone 17 Pro Max
  ap17: iphone17ProMax, ap18: iphone17ProMax, ap19: iphone17ProMax, ap20: iphone17ProMax,
};

export const formatPKR = (amount: number) => {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    maximumFractionDigits: 0
  }).format(amount);
};
