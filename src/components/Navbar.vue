<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand fw-bold">
        FASHION<span class="text-primary">LAB</span>
      </router-link>

      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/wardrobe" class="nav-link" active-class="active">Guardaroba</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/outfits" class="nav-link" active-class="active">Outfit</router-link>
          </li>
        </ul>

        <div class="d-flex align-items-center gap-2">
          <span class="badge bg-secondary py-2 px-3">
            Preferiti: <strong>{{ store.favoritesCount }}</strong>
          </span>
          <router-link to="/cart" class="btn btn-outline-light position-relative btn-sm">
            Carrello
            <span 
              v-if="store.cartTotalItems > 0" 
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {{ store.cartTotalItems }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useFashionStore } from '../stores/fashionStore'

const store = useFashionStore()
</script>