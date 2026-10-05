<template>
  <div class="container py-5">
    <div v-if="cloth" class="row align-items-center">
      <!-- Breadcrumb -->
      <div class="col-12 mb-4">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="isFromWardrobe ? '/wardrobe' : '/finder'" class="text-decoration-none text-muted">
                {{ isFromWardrobe ? 'Wardrobe' : 'Finder' }}
              </router-link>
            </li>
            <li class="breadcrumb-item active text-dark" aria-current="page">{{ cloth.name }}</li>
          </ol>
        </nav>
      </div>

      <!-- Immagine Capo -->
      <div class="col-12 col-md-6 text-center mb-4 mb-md-0">
        <img 
          :src="cloth.image" 
          :alt="cloth.name" 
          class="img-fluid rounded shadow-sm p-4" 
          style="max-height: 480px; object-fit: contain; background-color: #f8f9fa;"
        >
      </div>

      <!-- Informazioni e Azioni -->
      <div class="col-12 col-md-6 ps-md-5">
        <span class="text-uppercase text-muted fw-bold small">MASHIONLAB</span>
        <h1 class="display-5 fw-bold mb-2">{{ cloth.name }}</h1>

        <!-- Mostra prezzo solo se non proviene dal guardaroba -->
        <p v-if="!isFromWardrobe" class="display-6 fw-semibold mb-3">€{{ cloth.price }}</p>
        <div v-else class="mb-3">
          <span class="badge bg-dark fs-6 px-3 py-2">Capo presente nel tuo armadio</span>
        </div>

        <p class="lead text-muted mb-4">{{ cloth.description }}</p>

        <ul class="list-group list-group-flush mb-4">
          <li class="list-group-item px-0 d-flex justify-content-between">
            <span class="text-muted">Categoria</span>
            <strong>{{ cloth.category }}</strong>
          </li>
          <li class="list-group-item px-0 d-flex justify-content-between">
            <span class="text-muted">Stile</span>
            <strong>{{ cloth.style }}</strong>
          </li>
          
          <!-- Taglia Singola -->
          <li class="list-group-item px-0 d-flex justify-content-between align-items-center">
            <span class="text-muted">{{ isFromWardrobe ? 'La tua taglia' : 'Taglia disponibile' }}</span>
            <span class="badge border border-dark text-dark px-3 py-2 fs-6">
              {{ cloth.size || (cloth.sizes && cloth.sizes[0]) || 'M' }}
            </span>
          </li>
        </ul>

        <!-- Azioni differenziate -->
        <div v-if="!isFromWardrobe" class="d-flex gap-3">
          <button class="btn btn-dark btn-lg flex-grow-1" @click="handleAddToCart">
            Aggiungi al carrello
          </button>
          <button class="btn btn-outline-danger btn-lg px-4" @click="handleAddToWishlist">
            Salva
          </button>
        </div>
        <div v-else class="d-flex gap-3">
          <router-link to="/outfits" class="btn btn-dark btn-lg flex-grow-1">
            Vedi Outfit abbinati
          </router-link>
          <router-link to="/wardrobe" class="btn btn-outline-secondary btn-lg">
            Torna all'armadio
          </router-link>
        </div>
      </div>
    </div>

    <!-- Fallback capo inesistente -->
    <div v-else class="text-center py-5">
      <h2 class="fw-bold mb-3">Capo non trovato</h2>
      <router-link to="/wardrobe" class="btn btn-dark">Torna al guardaroba</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMashionLabStore } from '../stores/mashionLab'

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  }
})

const route = useRoute()
const store = useMashionLabStore()

const cloth = computed(() => {
  return store.clothes.find(c => c.id === parseInt(props.id))
})

const isFromWardrobe = computed(() => {
  return route.query.from === 'wardrobe' || (cloth.value && cloth.value.owned)
})

const handleAddToCart = () => {
  if (cloth.value) {
    store.addToCart(cloth.value)
    alert(`${cloth.value.name} aggiunto al carrello!`)
  }
}

const handleAddToWishlist = () => {
  if (cloth.value) {
    store.addToWishlist(cloth.value)
    alert(`${cloth.value.name} aggiunto alla wishlist!`)
  }
}
</script>