<template>
  <div class="card h-100 shadow-sm border-0">
    <img 
      :src="product.image" 
      class="card-img-top p-3" 
      :alt="product.name"
      style="height: 280px; object-fit: contain; background-color: #f8f9fa;"
    >
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 class="card-title fw-bold mb-1">{{ product.name }}</h5>
        <p class="text-muted small mb-2">{{ product.category }} · {{ product.style }}</p>
        
        <!-- Prezzo solo per il catalogo Finder -->
        <p v-if="!isWardrobe" class="fs-5 fw-semibold mb-3">€{{ product.price }}</p>
        <div v-else class="mb-3">
          <span class="badge bg-secondary">Nel tuo armadio</span>
        </div>
      </div>
      
      <div class="d-flex gap-2">
        <router-link 
          :to="{ path: `/wardrobe/${product.id}`, query: isWardrobe ? { from: 'wardrobe' } : {} }" 
          class="btn btn-dark flex-grow-1"
        >
          Dettagli
        </router-link>
        
        <!-- Cuore wishlist solo per capi acquistabili su Finder -->
        <button 
          v-if="!isWardrobe"
          class="btn btn-outline-danger" 
          @click="$emit('add-to-wishlist', product)"
          title="Salva nei preferiti"
        >
          ♥
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  },
  isWardrobe: {
    type: Boolean,
    default: false
  }
})

defineEmits(['add-to-wishlist'])
</script>