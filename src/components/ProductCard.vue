<template>
  <div class="card h-100 shadow-sm border-0">
    <img 
      :src="product.image" 
      class="card-img-top"
      :alt="product.name"
      style="object-fit: cover; height: 300px;" 
    />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title fw-bold mb-1">{{ product.name }}</h5>
      <p class="card-text text-muted mb-2">{{ product.category }} · {{ product.color }}</p>
      <p class="card-text fs-5 mb-4">€{{ product.price }}</p>
      
      <div class="mt-auto d-flex gap-2">
        <router-link :to="'/wardrobe/' + product.id" class="btn btn-dark flex-grow-1">
          Dettagli
        </router-link>
        <button 
          v-if="showHeart" 
          @click="$emit('add-to-wishlist', product)"
          class="btn btn-outline-danger"
          title="Salva nella wishlist"
        >
          ❤️
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true },
  showHeart: { type: Boolean, default: true }
})

defineEmits(['add-to-wishlist'])
</script>