import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WardrobeView from '../views/WardrobeView.vue'
import OutfitsView from '../views/OutfitsView.vue'
import CartView from '../views/CartView.vue'

// Definiamo i percorsi delle pagine
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/wardrobe',
    name: 'Wardrobe',
    component: WardrobeView
  },
  {
    path: '/outfits',
    name: 'Outfits',
    component: OutfitsView
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  }
]

// Creiamo l'istanza del router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router