import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WardrobeView from '../views/WardrobeView.vue'
import ClothingDetailView from '../views/ClothingDetailView.vue'
import OutfitsView from '../views/OutfitsView.vue'
import OutfitDetailView from '../views/OutfitDetailView.vue'
import FinderView from '../views/FinderView.vue'
import CapsulesView from '../views/CapsulesView.vue'
import WishlistView from '../views/WishlistView.vue'
import CartView from '../views/CartView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/wardrobe', name: 'wardrobe', component: WardrobeView },
    { path: '/wardrobe/:id', name: 'clothing-detail', component: ClothingDetailView, props: true },
    { path: '/outfits', name: 'outfits', component: OutfitsView },
    { path: '/outfits/:id', name: 'outfit-detail', component: OutfitDetailView, props: true },
    { path: '/finder', name: 'finder', component: FinderView },
    { path: '/capsules', name: 'capsules', component: CapsulesView },
    { path: '/wishlist', name: 'wishlist', component: WishlistView },
    { path: '/cart', name: 'cart', component: CartView },
    { path: '/:catchAll(.*)*', name: 'not-found', component: NotFoundView }
  ]
})

export default router