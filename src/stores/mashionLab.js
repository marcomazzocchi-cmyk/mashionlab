import { defineStore } from 'pinia'

export const useMashionLabStore = defineStore('mashionLab', {
  state: () => ({
    // 26 Capi allineati alle immagini reali
    clothes: [
      // --- MY WARDROBE (owned: true) ---
      { id: 1, name: "Oversized Blazer", category: "Jackets", style: "Minimal", price: 180, size: "M", owned: true, image: "/images/cloth-1.jpg", description: "Blazer strutturato marrone a doppiopetto dal taglio sartoriale." },
      { id: 2, name: "Denim Jacket", category: "Jackets", style: "Casual", price: 120, size: "M", owned: true, image: "/images/cloth-2.jpg", description: "Giacca di jeans classica lavaggio medio con bottoni metallici." },
      { id: 3, name: "Leather Biker", category: "Jackets", style: "Urban", price: 320, size: "L", owned: true, image: "/images/cloth-3.jpg", description: "Giacca chiodo in pelle scura effetto vissuto con cerniere a contrasto." },
      { id: 4, name: "Classic Trench", category: "Jackets", style: "Elegant", price: 250, size: "M", owned: true, image: "/images/cloth-4.jpg", description: "Trench coat impermeabile doppiopetto beige con cintura." },
      { id: 5, name: "Burgundy Bomber", category: "Jackets", style: "Urban", price: 190, size: "L", owned: true, image: "/images/cloth-5.jpg", description: "Bomber imbottito in pelle bordeaux dal fit over rilassato." },
      { id: 6, name: "Long Wool Coat", category: "Jackets", style: "Elegant", price: 280, size: "S", owned: true, image: "/images/cloth-6.jpg", description: "Cappotto lungo marrone sartoriale a cintura." },
      { id: 7, name: "White Basic Tee", category: "Tops", style: "Minimal", price: 35, size: "S", owned: true, image: "/images/cloth-7.jpg", description: "T-shirt bianca a costine con maniche corte e scollo rotondo." },
      { id: 8, name: "Sky Blue Shirt", category: "Tops", style: "Casual", price: 70, size: "L", owned: true, image: "/images/cloth-8.jpg", description: "Camicia casual azzurra in popeline di cotone lavato." },
      { id: 9, name: "Silk Shirt", category: "Tops", style: "Elegant", price: 110, size: "M", owned: true, image: "/images/cloth-9.jpg", description: "Camicia fluida in seta blu polvere con colletto dritto." },
      { id: 10, name: "Black Turtleneck", category: "Tops", style: "Urban", price: 80, size: "M", owned: true, image: "/images/cloth-10.jpg", description: "Maglione dolcevita nero a costine in morbida lana." },
      { id: 11, name: "Varsity Crewneck", category: "Tops", style: "Casual", price: 85, size: "L", owned: true, image: "/images/cloth-11.jpg", description: "Felpa girocollo blu royal con grafica varsity frontale." },
      { id: 12, name: "Pastel Pink Shirt", category: "Tops", style: "Casual", price: 65, size: "M", owned: true, image: "/images/cloth-12.jpg", description: "Camicia over rosa pastello dal taglio pulito e moderno." },
      { id: 13, name: "Olive Knit Sweater", category: "Tops", style: "Minimal", price: 95, size: "M", owned: true, image: "/images/cloth-13.jpg", description: "Maglione girocollo verde oliva lavorato a maglia rasata." },

      // --- FINDER CATALOGO SHOP (owned: false) ---
      { id: 14, name: "Flare Denim Jeans", category: "Bottoms", style: "Casual", price: 110, size: "M", owned: false, image: "/images/cloth-14.jpg", description: "Jeans svasati a zampa in denim lavaggio vintage." },
      { id: 15, name: "Burgundy Wide Trousers", category: "Bottoms", style: "Elegant", price: 130, size: "M", owned: false, image: "/images/cloth-15.jpg", description: "Pantaloni a gamba dritta in tessuto fluido color bordeaux scuro." },
      { id: 16, name: "Cargo Pants", category: "Bottoms", style: "Urban", price: 95, size: "L", owned: false, image: "/images/cloth-16.jpg", description: "Pantaloni cargo color marrone fango con ampie tasche laterali." },
      { id: 17, name: "Pleated Check Skirt", category: "Bottoms", style: "Elegant", price: 115, size: "S", owned: false, image: "/images/cloth-17.jpg", description: "Gonna midi a pieghe con motivo scozzese grigio sartoriale." },
      { id: 18, name: "Tailored Brown Pants", category: "Bottoms", style: "Minimal", price: 125, size: "M", owned: false, image: "/images/cloth-18.jpg", description: "Pantaloni eleganti a vita alta con piega frontale." },
      { id: 19, name: "Denim Bermuda Shorts", category: "Bottoms", style: "Casual", price: 75, size: "M", owned: false, image: "/images/cloth-19.jpg", description: "Bermuda rilassati in jeans chiaro a gamba larga." },
      { id: 20, name: "Relaxed Black Trousers", category: "Bottoms", style: "Urban", price: 90, size: "M", owned: false, image: "/images/cloth-20.jpg", description: "Pantaloni neri dritti con coulisse in vita per il massimo comfort." },
      { id: 21, name: "Minimal White Sneakers", category: "Shoes", style: "Minimal", price: 120, size: "42", owned: false, image: "/images/cloth-21.jpg", description: "Sneakers low-profile in morbida pelle bianca con suola tonale." },
      { id: 22, name: "Chelsea Boots", category: "Shoes", style: "Elegant", price: 190, size: "43", owned: false, image: "/images/cloth-22.jpg", description: "Stivaletti chelsea in pelle nera spazzolata con elastico laterale." },
      { id: 23, name: "Chunky Street Sneakers", category: "Shoes", style: "Urban", price: 145, size: "42", owned: false, image: "/images/cloth-23.jpg", description: "Sneakers bicolore con suola scolpita ad alto impatto." },
      { id: 24, name: "Classic Leather Loafers", category: "Shoes", style: "Elegant", price: 175, size: "42", owned: false, image: "/images/cloth-24.jpg", description: "Mocassini neri eleganti con suola in cuoio e mascherina frontale." },
      { id: 25, name: "Suede Slip-On Shoes", category: "Shoes", style: "Casual", price: 85, size: "41", owned: false, image: "/images/cloth-25.jpg", description: "Scarpe basse slip-on in morbido scamosciato marrone." },
      { id: 26, name: "Heeled Leather Boots", category: "Shoes", style: "Elegant", price: 210, size: "39", owned: false, image: "/images/cloth-26.jpg", description: "Stivaletti marroni in pelle con tacco dritto e punta squadrata." }
    ],

    // 10 Outfit (aggiornati per combinare capi posseduti e capi da acquistare)
    outfits: [
      { id: 1, name: "Urban Monochrome", style: "Urban", season: "Autumn/Winter", items: [3, 10, 16, 23], image: "/images/cloth-3.jpg", description: "Look deciso e moderno con chiodo in pelle, cargo e sneakers chunky." },
      { id: 2, name: "Casual Denim & Tee", style: "Casual", season: "Spring/Summer", items: [2, 7, 14, 21], image: "/images/cloth-2.jpg", description: "Outfit fresco per il giorno con giacca di jeans e sneakers bianche." },
      { id: 3, name: "Office Minimal", style: "Minimal", season: "Autumn/Winter", items: [1, 7, 18, 22], image: "/images/cloth-1.jpg", description: "Blazer strutturato e pantalone sartoriale per la routine lavorativa." },
      { id: 4, name: "Burgundy Statement", style: "Urban", season: "Autumn/Winter", items: [5, 10, 15, 23], image: "/images/cloth-5.jpg", description: "Bomber bordeaux abbinato a toni scuri e silhouette over." },
      { id: 5, name: "Classic Tailoring", style: "Elegant", season: "Autumn/Winter", items: [4, 9, 18, 24], image: "/images/cloth-4.jpg", description: "Trench classico doppiopetto, camicia in seta e mocassino sartoriale." },
      { id: 6, name: "Weekend Relax", style: "Casual", season: "Spring/Summer", items: [8, 19, 21], image: "/images/cloth-8.jpg", description: "Camicia celeste e bermuda in denim per il tempo libero estivo." },
      { id: 7, name: "Preppy Casual", style: "Casual", season: "Autumn/Winter", items: [11, 14, 25], image: "/images/cloth-11.jpg", description: "Felpa college abbinata a denim svasato e slip-on scamosciate." },
      { id: 8, name: "Winter Elegance", style: "Elegant", season: "Autumn/Winter", items: [6, 17, 26], image: "/images/cloth-6.jpg", description: "Cappotto lungo marrone, gonna a pieghe e stivaletti coordinati." },
      { id: 9, name: "Earth Tone Layering", style: "Minimal", season: "Autumn/Winter", items: [13, 16, 22], image: "/images/cloth-13.jpg", description: "Maglione in lana verde oliva e pantaloni dritti dal sapore naturale." },
      { id: 10, name: "Contemporary Smart", style: "Urban", season: "Spring/Summer", items: [12, 20, 21], image: "/images/cloth-12.jpg", description: "Camicia over pastello e pantalone nero dritto per un look essenziale." }
    ],

    // 4 Capsule Collections
    capsules: [
      { id: 1, name: "London Essentials", season: "Autumn/Winter", style: "Urban", items: [3, 5, 10, 16, 23], image: "/images/capsule-1.jpg", description: "Una capsule metropolitana ispirata alle strade londinesi." },
      { id: 2, name: "Minimal Summer", season: "Spring/Summer", style: "Minimal", items: [7, 8, 19, 21], image: "/images/capsule-2.jpg", description: "Pochi pezzi essenziali ad alta versatilità per la stagione calda." },
      { id: 3, name: "Elegant Office", season: "Autumn/Winter", style: "Elegant", items: [4, 6, 9, 18, 24], image: "/images/capsule-3.jpg", description: "La rotazione settimanale definitiva per il business attire." },
      { id: 4, name: "Casual Spring", season: "Spring/Summer", style: "Casual", items: [2, 11, 14, 25], image: "/images/capsule-4.jpg", description: "Spirito spensierato con denim, felpe college e scarpe comode." }
    ],

    // Stato Carrello e Wishlist
    cart: [],
    wishlist: [],
    savedOutfits: []
  }),

  getters: {
    cartCount: (state) => {
      return state.cart.reduce((total, item) => total + item.quantity, 0)
    },
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    },
    wishlistCount: (state) => {
      return state.wishlist.length + state.savedOutfits.length
    }
  },

  actions: {
    addToCart(product) {
      const existing = this.cart.find(item => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId)
    },
    increaseCartQuantity(productId) {
      const item = this.cart.find(i => i.id === productId)
      if (item) item.quantity++
    },
    decreaseCartQuantity(productId) {
      const item = this.cart.find(i => i.id === productId)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          this.removeFromCart(productId)
        }
      }
    },
    addToWishlist(product) {
      if (!this.wishlist.some(item => item.id === product.id)) {
        this.wishlist.push(product)
      }
    },
    removeFromWishlist(productId) {
      this.wishlist = this.wishlist.filter(item => item.id !== productId)
    },
    saveOutfit(outfit) {
      if (!this.savedOutfits.some(o => o.id === outfit.id)) {
        this.savedOutfits.push(outfit)
      }
    },
    removeSavedOutfit(outfitId) {
      this.savedOutfits = this.savedOutfits.filter(o => o.id !== outfitId)
    }
  }
})