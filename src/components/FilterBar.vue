<template>
  <div class="bg-light p-4 rounded shadow-sm">
    <h5 class="fw-bold mb-4">Cerca e filtra</h5>
    
    <div class="mb-4">
      <label class="form-label text-muted">Ricerca testuale</label>
      <input 
        type="text" 
        v-model="filters.search" 
        @input="sendFilters" 
        class="form-control border-dark" 
        placeholder="Cerca per nome capo..." 
      />
    </div>

    <div class="mb-4">
      <label class="form-label text-muted">Categoria</label>
      <select v-model="filters.category" @change="sendFilters" class="form-select border-dark">
        <option value="">Tutte le categorie</option>
        <option value="Jackets">Giacche</option>
        <option value="Tops">Top</option>
        <option value="Bottoms">Pantaloni</option>
        <option value="Shoes">Scarpe</option>
      </select>
    </div>

    <div class="mb-4">
      <label class="form-label text-muted">Prezzo massimo: €{{ filters.maxPrice }}</label>
      <input 
        type="range" 
        v-model.number="filters.maxPrice" 
        @input="sendFilters" 
        class="form-range" 
        min="0" 
        max="500" 
        step="10" 
      />
    </div>

    <button @click="resetFilters" class="btn btn-outline-dark w-100 mt-2">Reimposta filtri</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['update-filters'])

const filters = reactive({
  search: '',
  category: '',
  maxPrice: 500
})

const sendFilters = () => {
  emit('update-filters', { ...filters })
}

const resetFilters = () => {
  filters.search = ''
  filters.category = ''
  filters.maxPrice = 500
  sendFilters()
}
</script>