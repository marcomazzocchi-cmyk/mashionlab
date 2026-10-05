<template>
  <div class="container py-5">
    <h1 class="fw-bold mb-4">My Wardrobe</h1>
    
    <div class="row mb-4">
      <div class="col-12 col-md-4">
        <label for="categoryFilter" class="form-label text-muted">Filtra per categoria</label>
        <select id="categoryFilter" v-model="selectedCategory" class="form-select border-dark">
          <option value="">Tutte le categorie</option>
          <option value="Jackets">Giacche</option>
          <option value="Tops">Top e magliette</option>
          <option value="Bottoms">Pantaloni e gonne</option>
          <option value="Shoes">Scarpe</option>
        </select>
      </div>
    </div>

    <!-- Griglia Responsive -->
    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="item in filteredClothes" :key="item.id">
        <ProductCard :product="item" :is-wardrobe="true" />
      </div>
      
      <div v-if="filteredClothes.length === 0" class="col-12 text-center py-5 text-muted">
        <h3>Nessun capo trovato nel tuo armadio per questa categoria.</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMashionLabStore } from '../stores/mashionLab'
import ProductCard from '../components/ProductCard.vue'

const store = useMashionLabStore()
const selectedCategory = ref('')

const filteredClothes = computed(() => {
  // Prende solo i capi posseduti
  const myClothes = store.clothes.filter(item => item.owned)
  
  if (selectedCategory.value === '') {
    return myClothes
  }
  return myClothes.filter(item => item.category === selectedCategory.value)
})
</script>