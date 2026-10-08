<template>
  <div class="card mb-3 border-0 shadow-sm">
    <div class="row g-0 align-items-center">
      <div class="col-4 col-md-2">
        <img 
          :src="item.image" 
          class="img-fluid rounded-start" 
          :alt="item.name" 
          style="height: 100px; width: 100%; object-fit: cover;" 
        />
      </div>
      <div class="col-8 col-md-4">
        <div class="card-body py-2">
          <h6 class="card-title fw-bold mb-1">{{ item.name }}</h6>
          <p class="card-text text-muted small mb-0">{{ item.category }}</p>
        </div>
      </div>
      <div class="col-6 col-md-3 d-flex justify-content-center align-items-center py-2">
        <button @click="$emit('decrease-qty', item)" class="btn btn-sm btn-outline-dark px-2">-</button>
        <span class="mx-3 fw-bold">{{ item.quantity }}</span>
        <button @click="$emit('increase-qty', item)" class="btn btn-sm btn-outline-dark px-2">+</button>
      </div>
      <div class="col-6 col-md-3 d-flex justify-content-around align-items-center py-2">
        <span class="fw-bold fs-5">€{{ item.price * item.quantity }}</span>
        <button @click="$emit('remove-item', item)" class="btn btn-sm btn-danger" title="Rimuovi">
          ✕
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true }
})
defineEmits(['increase-qty', 'decrease-qty', 'remove-item'])
</script>