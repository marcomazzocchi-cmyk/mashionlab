<template>
  <div class="container py-5" v-if="outfit">
    <nav aria-label="breadcrumb" class="mb-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/outfits" class="text-dark">Outfits</router-link>
        </li>
        <li class="breadcrumb-item active">{{ outfit.name }}</li>
      </ol>
    </nav>
    <div class="text-center mb-5">
      <h6 class="text-uppercase text-muted">{{ outfit.style }}</h6>
      <h1 class="display-4 fw-bold mb-3">{{ outfit.name }}</h1>
      <p class="lead text-secondary mx-auto" style="max-width: 600px;">{{ outfit.description }}</p>
      <button @click="handleSaveOutfit" class="btn btn-dark mt-3 px-4 py-2">
        Salva questo look
      </button>
    </div>
    <hr class="mb-5">
    <h3 class="fw-bold mb-4">Capi inclusi in questo look</h3>
    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="item in outfitItems" :key="item.id">
        <ProductCard :product="item" @add-to-wishlist="handleAddToWishlist" />
      </div>
    </div>
  </div>
  <div v-else class="container py-5 text-center">
    <h2 class="mb-4">Outfit non trovato</h2>
    <router-link to="/outfits" class="btn btn-dark">Torna agli outfit</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMashionLabStore } from '../stores/mashionLab'
import ProductCard from '../components/ProductCard.vue'

const props = defineProps({
  id: { type: String, required: true }
})

const store = useMashionLabStore()

const outfit = computed(() => {
  return store.outfits.find(o => o.id === Number(props.id))
})

const outfitItems = computed(() => {
  if (!outfit.value) return []
  return store.clothes.filter(c => outfit.value.items.includes(c.id))
})

const handleSaveOutfit = () => {
  store.saveOutfit(outfit.value)
  alert('Outfit salvato')
}

const handleAddToWishlist = (product) => {
  store.addToWishlist(product)
  alert(`${product.name} aggiunto alla wishlist`)
}
</script>