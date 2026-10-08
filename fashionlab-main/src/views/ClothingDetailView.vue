<template>
  <div class="container py-5" v-if="product">
    <nav aria-label="breadcrumb" class="mb-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/wardrobe" class="text-dark">Wardrobe</router-link>
        </li>
        <li class="breadcrumb-item active">{{ product.name }}</li>
      </ol>
    </nav>
    <div class="row gx-5">
      <div class="col-12 col-md-6 mb-4 mb-md-0">
        <img :src="product.image" class="img-fluid rounded shadow-sm w-100" :alt="product.name" />
      </div>
      <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
        <h4 class="text-uppercase text-muted mb-1">{{ product.brand }}</h4>
        <h1 class="fw-bold mb-3">{{ product.name }}</h1>
        <p class="fs-2 mb-4">€{{ product.price }}</p>
        <p class="text-secondary mb-4">{{ product.description }}</p>
        <ul class="list-group list-group-flush mb-5">
          <li class="list-group-item px-0"><strong>Categoria:</strong> {{ product.category }}</li>
          <li class="list-group-item px-0"><strong>Colore:</strong> {{ product.color }}</li>
          <li class="list-group-item px-0"><strong>Stile:</strong> {{ product.style }}</li>
          <li class="list-group-item px-0 d-flex align-items-center gap-2">
            <strong>Taglie disponibili:</strong>
            <span v-for="size in product.sizes" :key="size" class="badge border border-dark text-dark px-3 py-2">
              {{ size }}
            </span>
          </li>
        </ul>
        <div class="d-flex gap-3">
          <button @click="handleAddToCart" class="btn btn-dark btn-lg flex-grow-1">
            Aggiungi al carrello
          </button>
          <button @click="handleAddToWishlist" class="btn btn-outline-danger btn-lg px-4">
            Salva
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container py-5 text-center">
    <h2 class="mb-4">Capo non trovato</h2>
    <router-link to="/wardrobe" class="btn btn-dark">Torna al guardaroba</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMashionLabStore } from '../stores/mashionLab'

const props = defineProps({
  id: { type: String, required: true }
})

const store = useMashionLabStore()

const product = computed(() => {
  return store.clothes.find(item => item.id === Number(props.id))
})

const handleAddToCart = () => {
  store.addToCart(product.value)
  alert('Prodotto aggiunto al carrello')
}

const handleAddToWishlist = () => {
  store.addToWishlist(product.value)
  alert('Prodotto aggiunto alla wishlist')
}
</script>