<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h6 class="text-uppercase text-muted">Discover</h6>
      <h1 class="fw-bold display-5 mb-3">Capsule Wardrobes</h1>
      <p class="text-muted mx-auto" style="max-width: 600px;">
        Guardaroba compatti e versatili, pensati per ogni stile e stagione.
      </p>
    </div>
    <div class="row g-5">
      <div class="col-12 col-md-6" v-for="capsule in store.capsules" :key="capsule.id">
        <div class="card border-0 shadow h-100">
          <img :src="capsule.image" class="card-img-top" :alt="capsule.name" style="height: 300px; object-fit: cover;" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ capsule.name }}</h5>
            <p class="text-muted">{{ capsule.season }} · {{ capsule.style }}</p>
            <p class="mb-2">Comprende {{ capsule.items.length }} capi:</p>
            <ul class="mb-0">
              <li v-for="item in getCapsuleItems(capsule)" :key="item.id">
                <router-link :to="'/wardrobe/' + item.id" class="text-dark">
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMashionLabStore } from '../stores/mashionLab'

const store = useMashionLabStore()

const getCapsuleItems = (capsule) => {
  return store.clothes.filter(c => capsule.items.includes(c.id))
}
</script>