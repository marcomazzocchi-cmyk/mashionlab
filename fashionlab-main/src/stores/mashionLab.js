import { defineStore } from 'pinia'

export const useMashionLabStore = defineStore('mashionLab', {
  state: () => ({
    clothes: [
      { id: 1, name: 'Oversized Blazer', category: 'Jackets', brand: 'MashionLab', price: 180, sizes: ['S', 'M', 'L'], color: 'Black', style: 'Minimal', image: '/images/cloth-1.jpg', description: 'Un blazer minimal e versatile.' },
      { id: 2, name: 'Denim Jacket', category: 'Jackets', brand: 'MashionLab', price: 120, sizes: ['S', 'M', 'L', 'XL'], color: 'Blue', style: 'Casual', image: '/images/cloth-2.jpg', description: 'Giacca di jeans classica.' },
      { id: 3, name: 'Leather Biker', category: 'Jackets', brand: 'MashionLab', price: 320, sizes: ['S', 'M', 'L'], color: 'Black', style: 'Urban', image: '/images/cloth-3.jpg', description: 'Chiodo in pelle dal taglio moderno.' },
      { id: 4, name: 'Trench Coat', category: 'Jackets', brand: 'MashionLab', price: 260, sizes: ['S', 'M', 'L'], color: 'Beige', style: 'Elegant', image: '/images/cloth-4.jpg', description: 'Trench lungo, elegante e leggero.' },
      { id: 5, name: 'Bomber Jacket', category: 'Jackets', brand: 'MashionLab', price: 140, sizes: ['M', 'L', 'XL'], color: 'Green', style: 'Urban', image: '/images/cloth-5.jpg', description: 'Bomber sportivo per la città.' },
      { id: 6, name: 'Wool Coat', category: 'Jackets', brand: 'MashionLab', price: 290, sizes: ['S', 'M', 'L'], color: 'Grey', style: 'Elegant', image: '/images/cloth-6.jpg', description: 'Cappotto in lana per l\'inverno.' },
      { id: 7, name: 'White Tee', category: 'Tops', brand: 'MashionLab', price: 35, sizes: ['S', 'M', 'L', 'XL'], color: 'White', style: 'Minimal', image: '/images/cloth-7.jpg', description: 'T-shirt bianca essenziale.' },
      { id: 8, name: 'Striped Shirt', category: 'Tops', brand: 'MashionLab', price: 60, sizes: ['S', 'M', 'L'], color: 'Blue', style: 'Casual', image: '/images/cloth-8.jpg', description: 'Camicia a righe leggera.' },
      { id: 9, name: 'Silk Blouse', category: 'Tops', brand: 'MashionLab', price: 110, sizes: ['S', 'M', 'L'], color: 'Ivory', style: 'Elegant', image: '/images/cloth-9.jpg', description: 'Camicetta in seta color avorio.' },
      { id: 10, name: 'Black Turtleneck', category: 'Tops', brand: 'MashionLab', price: 70, sizes: ['S', 'M', 'L'], color: 'Black', style: 'Minimal', image: '/images/cloth-10.jpg', description: 'Dolcevita nero aderente.' },
      { id: 11, name: 'Graphic Hoodie', category: 'Tops', brand: 'MashionLab', price: 85, sizes: ['M', 'L', 'XL'], color: 'Grey', style: 'Urban', image: '/images/cloth-11.jpg', description: 'Felpa con cappuccio e stampa.' },
      { id: 12, name: 'Linen Shirt', category: 'Tops', brand: 'MashionLab', price: 75, sizes: ['S', 'M', 'L'], color: 'Beige', style: 'Casual', image: '/images/cloth-12.jpg', description: 'Camicia in lino per l\'estate.' },
      { id: 13, name: 'Knit Sweater', category: 'Tops', brand: 'MashionLab', price: 95, sizes: ['S', 'M', 'L'], color: 'Cream', style: 'Minimal', image: '/images/cloth-13.jpg', description: 'Maglione morbido in maglia.' },
      { id: 14, name: 'Straight Jeans', category: 'Bottoms', brand: 'MashionLab', price: 90, sizes: ['S', 'M', 'L', 'XL'], color: 'Blue', style: 'Casual', image: '/images/cloth-14.jpg', description: 'Jeans dritti di uso quotidiano.' },
      { id: 15, name: 'Tailored Trousers', category: 'Bottoms', brand: 'MashionLab', price: 130, sizes: ['S', 'M', 'L'], color: 'Black', style: 'Elegant', image: '/images/cloth-15.jpg', description: 'Pantaloni sartoriali neri.' },
      { id: 16, name: 'Cargo Pants', category: 'Bottoms', brand: 'MashionLab', price: 100, sizes: ['M', 'L', 'XL'], color: 'Khaki', style: 'Urban', image: '/images/cloth-16.jpg', description: 'Pantaloni cargo con tasconi.' },
      { id: 17, name: 'Pleated Skirt', category: 'Bottoms', brand: 'MashionLab', price: 85, sizes: ['S', 'M'], color: 'Beige', style: 'Elegant', image: '/images/cloth-17.jpg', description: 'Gonna plissettata al polpaccio.' },
      { id: 18, name: 'Wide Leg Trousers', category: 'Bottoms', brand: 'MashionLab', price: 110, sizes: ['S', 'M', 'L'], color: 'Grey', style: 'Minimal', image: '/images/cloth-18.jpg', description: 'Pantaloni a gamba larga.' },
      { id: 19, name: 'Denim Shorts', category: 'Bottoms', brand: 'MashionLab', price: 55, sizes: ['S', 'M', 'L'], color: 'Blue', style: 'Casual', image: '/images/cloth-19.jpg', description: 'Shorts di jeans.' },
      { id: 20, name: 'Jogger Pants', category: 'Bottoms', brand: 'MashionLab', price: 70, sizes: ['M', 'L', 'XL'], color: 'Black', style: 'Urban', image: '/images/cloth-20.jpg', description: 'Jogger comodi con elastico.' },
      { id: 21, name: 'White Sneakers', category: 'Shoes', brand: 'MashionLab', price: 110, sizes: ['38', '40', '42', '44'], color: 'White', style: 'Minimal', image: '/images/cloth-21.jpg', description: 'Sneakers bianche pulite.' },
      { id: 22, name: 'Chelsea Boots', category: 'Shoes', brand: 'MashionLab', price: 190, sizes: ['40', '42', '44'], color: 'Black', style: 'Elegant', image: '/images/cloth-22.jpg', description: 'Stivaletti Chelsea in pelle.' },
      { id: 23, name: 'Chunky Sneakers', category: 'Shoes', brand: 'MashionLab', price: 130, sizes: ['38', '40', '42', '44'], color: 'Black', style: 'Urban', image: '/images/cloth-23.jpg', description: 'Sneakers con suola alta.' },
      { id: 24, name: 'Loafers', category: 'Shoes', brand: 'MashionLab', price: 150, sizes: ['40', '42', '44'], color: 'Brown', style: 'Elegant', image: '/images/cloth-24.jpg', description: 'Mocassini in pelle marrone.' },
      { id: 25, name: 'Canvas Shoes', category: 'Shoes', brand: 'MashionLab', price: 60, sizes: ['38', '40', '42'], color: 'White', style: 'Casual', image: '/images/cloth-25.jpg', description: 'Scarpe di tela bianche.' },
      { id: 26, name: 'Ankle Boots', category: 'Shoes', brand: 'MashionLab', price: 170, sizes: ['38', '40', '42'], color: 'Brown', style: 'Urban', image: '/images/cloth-26.jpg', description: 'Stivaletti alla caviglia.' }
    ],
    outfits: [
      { id: 1, name: 'Urban Evening', style: 'Urban', items: [3, 11, 16, 23], description: 'Perfetto per una serata in città.' },
      { id: 2, name: 'Minimal Daily', style: 'Minimal', items: [1, 7, 18, 21], description: 'Look pulito per tutti i giorni.' },
      { id: 3, name: 'Elegant Dinner', style: 'Elegant', items: [4, 9, 15, 22], description: 'Elegante per una cena speciale.' },
      { id: 4, name: 'Casual Weekend', style: 'Casual', items: [2, 8, 14, 25], description: 'Comodo per il fine settimana.' },
      { id: 5, name: 'Street Night', style: 'Urban', items: [5, 11, 20, 26], description: 'Stile street per la sera.' },
      { id: 6, name: 'Office Minimal', style: 'Minimal', items: [1, 10, 18, 24], description: 'Sobrio per l\'ufficio.' },
      { id: 7, name: 'Summer Walk', style: 'Casual', items: [12, 19, 25], description: 'Leggero per le passeggiate estive.' },
      { id: 8, name: 'City Chic', style: 'Elegant', items: [6, 9, 17, 24], description: 'Chic per muoversi in città.' },
      { id: 9, name: 'Cozy Minimal', style: 'Minimal', items: [13, 18, 21], description: 'Morbido e minimal per le giornate fredde.' },
      { id: 10, name: 'Autumn Urban', style: 'Urban', items: [5, 10, 16, 26], description: 'Look urban per l\'autunno.' }
    ],
    capsules: [
      { id: 1, name: 'London Essentials', season: 'Autumn/Winter', style: 'Urban', image: '/images/capsule-1.jpg', items: [3, 5, 10, 16, 23] },
      { id: 2, name: 'Minimal Summer', season: 'Spring/Summer', style: 'Minimal', image: '/images/capsule-2.jpg', items: [7, 18, 21] },
      { id: 3, name: 'Elegant Office', season: 'Autumn/Winter', style: 'Elegant', image: '/images/capsule-3.jpg', items: [4, 9, 15, 22] },
      { id: 4, name: 'Casual Spring', season: 'Spring/Summer', style: 'Casual', image: '/images/capsule-4.jpg', items: [2, 8, 14, 25] }
    ],
    wishlist: [],
    savedOutfits: [],
    cart: []
  }),
  getters: {
    cartCount: (state) => state.cart.reduce((totale, item) => totale + item.quantity, 0),
    cartTotal: (state) => state.cart.reduce((totale, item) => totale + (item.price * item.quantity), 0),
    wishlistCount: (state) => state.wishlist.length + state.savedOutfits.length
  },
  actions: {
    addToWishlist(item) {
      if (!this.wishlist.some(w => w.id === item.id)) {
        this.wishlist.push(item)
      }
    },
    removeFromWishlist(id) {
      this.wishlist = this.wishlist.filter(w => w.id !== id)
    },
    saveOutfit(outfit) {
      if (!this.savedOutfits.some(o => o.id === outfit.id)) {
        this.savedOutfits.push(outfit)
      }
    },
    removeSavedOutfit(id) {
      this.savedOutfits = this.savedOutfits.filter(o => o.id !== id)
    },
    addToCart(item) {
      const esistente = this.cart.find(c => c.id === item.id)
      if (esistente) {
        esistente.quantity++
      } else {
        this.cart.push({ ...item, quantity: 1 })
      }
    },
    removeFromCart(id) {
      this.cart = this.cart.filter(c => c.id !== id)
    },
    increaseCartQuantity(id) {
      const item = this.cart.find(c => c.id === id)
      if (item) item.quantity++
    },
    decreaseCartQuantity(id) {
      const item = this.cart.find(c => c.id === id)
      if (item && item.quantity > 1) item.quantity--
    }
  }
})