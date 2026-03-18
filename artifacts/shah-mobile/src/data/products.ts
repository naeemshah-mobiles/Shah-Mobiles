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
];

export const formatPKR = (amount: number) => {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    maximumFractionDigits: 0
  }).format(amount);
};
