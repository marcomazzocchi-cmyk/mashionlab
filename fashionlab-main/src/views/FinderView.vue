<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="fw-bold display-5">Fashion Finder</h1>
      <p class="text-muted">Trova quello che cerchi per il tuo stile e il tuo budget.</p>
    </div>
    <div class="row">
      <aside class="col-12 col-lg-3 mb-4 mb-lg-0">
        <FilterBar @update-filters="applyFilters" />
      </aside>
      <section class="col-12 col-lg-9">
        <div class="row g-4">
          <div class="col-12 col-md-6 col-xl-4" v-for="item in filteredProducts" :key="item.id">
            <ProductCard :product="item" @add-to-wishlist="handleAddToWishlist" />
          </div>
          <div v-if="filteredProducts.length === 0" class="col-12 text-center py-5">
            <h4 class="text-muted">Nessun prodotto trovato con questi filtri.</h4>
            <p>Prova ad ampliare la ricerca.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMashionLabStore } from '../stores/mashionLab'
import FilterBar from '../components/FilterBar.vue'
import ProductCard from '../components/ProductCard.vue'

const store = useMashionLabStore()
const activeFilters = ref({ search: '', category: '', maxPrice: 500 })

const applyFilters = (newFilters) => {
  activeFilters.value = newFilters
}

const filteredProducts = computed(() => {
  return store.clothes.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(activeFilters.value.search.toLowerCase())
    const matchCategory = activeFilters.value.category === '' || item.category === activeFilters.value.category
    const matchPrice = item.price <= activeFilters.value.maxPrice
    return matchSearch && matchCategory && matchPrice
  })
})

const handleAddToWishlist = (product) => {
  store.addToWishlist(product)
  alert(`${product.name} aggiunto alla wishlist`)
}
</script>