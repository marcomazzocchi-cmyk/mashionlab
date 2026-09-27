import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useFashionStore = defineStore('fashion', () => {
  // Database simulato
  const products = ref([
    {
      id: 1,
      name: 'Black Blazer Minimal',
      brand: 'Zara',
      category: 'Outerwear',
      price: 89.99,
      colour: 'Black',
      season: 'Autumn/Winter',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60',
      description: 'Blazer monopetto classico per look formali o casual.'
    },
    {
      id: 2,
      name: 'Camicia Popeline Bianca',
      brand: 'COS',
      category: 'Tops',
      price: 59.00,
      colour: 'White',
      season: 'All Season',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60',
      description: 'Camicia over in cotone 100% versatile ed essenziale.'
    },
    {
      id: 3,
      name: 'Pantaloni Wide Sartoriali',
      brand: 'Arket',
      category: 'Bottoms',
      price: 79.50,
      colour: 'Beige',
      season: 'Spring/Autumn',
      image: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=500&auto=format&fit=crop&q=60',
      description: 'Pantaloni a gamba larga con pinces frontali.'
    }
  ])

  const favorites = ref([])
  const cart = ref([])

  const favoritesCount = computed(() => favorites.value.length)
  const cartTotalItems = computed(() => cart.value.reduce((sum, item) => sum + item.quantity, 0))

  function toggleFavorite(productId) {
    const index = favorites.value.indexOf(productId)
    if (index === -1) {
      favorites.value.push(productId)
    } else {
      favorites.value.splice(index, 1)
    }
  }

  function addToCart(productId) {
    const existing = cart.value.find(item => item.id === productId)
    if (existing) {
      existing.quantity++
    } else {
      cart.value.push({ id: productId, quantity: 1 })
    }
  }

  return {
    products,
    favorites,
    cart,
    favoritesCount,
    cartTotalItems,
    toggleFavorite,
    addToCart
  }
})