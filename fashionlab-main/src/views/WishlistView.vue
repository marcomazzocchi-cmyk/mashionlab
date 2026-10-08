<template>
  <div class="container py-5">
    <h1 class="fw-bold display-5 mb-5">La tua wishlist</h1>
    <h3 class="mb-3">Capi ({{ store.wishlist.length }})</h3>
    <div class="row g-4 mb-5">
      <div class="col-12 col-md-6 col-lg-4" v-for="item in store.wishlist" :key="item.id">
        <div class="position-relative h-100">
          <ProductCard :product="item" :show-heart="false" />
          <button class="btn btn-danger btn-sm position-absolute top-0 end-0 m-2" @click="store.removeFromWishlist(item.id)">
            ✕
          </button>
        </div>
      </div>
      <p v-if="store.wishlist.length === 0" class="text-muted">Nessun capo salvato.</p>
    </div>

    <h3 class="mb-3">Outfit ({{ store.savedOutfits.length }})</h3>
    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="outfit in store.savedOutfits" :key="outfit.id">
        <div class="position-relative h-100">
          <OutfitCard :outfit="outfit" :show-heart="false" />
          <button class="btn btn-danger btn-sm position-absolute top-0 end-0 m-2" @click="store.removeSavedOutfit(outfit.id)">
            ✕
          </button>
        </div>
      </div>
      <p v-if="store.savedOutfits.length === 0" class="text-muted">Nessun outfit salvato.</p>
    </div>
  </div>
</template>

<script setup>
import { useMashionLabStore } from '../stores/mashionLab'
import ProductCard from '../components/ProductCard.vue'
import OutfitCard from '../components/OutfitCard.vue'

const store = useMashionLabStore()
</script>