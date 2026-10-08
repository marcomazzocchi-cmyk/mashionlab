<template>
  <div class="card h-100 shadow-sm border-0 text-center bg-light">
    <div class="card-header bg-dark text-white py-3">
      <h5 class="card-title fw-bold mb-0">{{ outfit.name }}</h5>
    </div>
    <div class="card-body d-flex flex-column py-4">
      <h6 class="text-uppercase text-muted mb-3">{{ outfit.style }}</h6>
      <p class="card-text mb-4">{{ outfit.description }}</p>
      <p class="small text-muted mb-4">Composto da {{ outfit.items.length }} capi</p>
      
      <div class="mt-auto d-flex gap-2 justify-content-center">
        <router-link :to="'/outfits/' + outfit.id" class="btn btn-outline-dark px-4 flex-grow-1">
          Scopri il look
        </router-link>
        <button 
          v-if="showHeart" 
          @click="$emit('save-outfit', outfit)"
          class="btn btn-outline-danger"
          title="Salva outfit"
        >
          ❤️
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  outfit: { type: Object, required: true },
  showHeart: { type: Boolean, default: true }
})

defineEmits(['save-outfit'])
</script>