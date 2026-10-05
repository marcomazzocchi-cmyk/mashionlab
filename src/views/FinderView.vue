<template>
  <div class="container py-5">
    <div class="mb-4">
      <h1 class="fw-bold">Finder Catalogo</h1>
      <p class="text-muted">Scopri nuovi capi da aggiungere alla tua collezione</p>
    </div>

    <!-- Barra filtri -->
    <FilterBar @update-filters="applyFilters" class="mb-5" />

    <!-- Risultati catalogo -->
    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="item in filteredCatalog" :key="item.id">
        <ProductCard 
          :product="item" 
          :is-wardrobe="false"
          @add-to-wishlist="handleAddToWishlist" 
        />
      </div>

      <div v-if="filteredCatalog.length === 0" class="col-12 text-center py-5 text-muted">
        <h3>Nessun capo a catalogo corrisponde ai filtri selezionati.</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMashionLabStore } from '../stores/mashionLab'
import ProductCard from '../components/ProductCard.vue'
import FilterBar from '../components/FilterBar.vue'

const store = useMashionLabStore()

const currentFilters = ref({
  search: '',
  category: '',
  maxPrice: Infinity
})

const applyFilters = (newFilters) => {
  currentFilters.value = newFilters
}

const filteredCatalog = computed(() => {
  return store.clothes.filter(item => {
    // 1. Solo capi da acquistare
    const isCatalog = !item.owned
    
    // 2. Filtro ricerca testo
    const matchesSearch = item.name.toLowerCase().includes(currentFilters.value.search.toLowerCase())
    
    // 3. Filtro categoria
    const matchesCategory = currentFilters.value.category === '' || item.category === currentFilters.value.category
    
    // 4. Filtro prezzo massimo
    const matchesPrice = item.price <= (currentFilters.value.maxPrice || Infinity)

    return isCatalog && matchesSearch && matchesCategory && matchesPrice
  })
})

const handleAddToWishlist = (product) => {
  store.addToWishlist(product)
  alert(`${product.name} aggiunto alla wishlist!`)
}
</script>