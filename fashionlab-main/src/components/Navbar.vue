<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">MashionLab</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/wardrobe">Wardrobe</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/outfits">Outfits</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/finder">Finder</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/capsules">Capsules</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/wishlist">
              Wishlist ({{ store.wishlistCount }})
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/cart">
              Cart ({{ store.cartCount }})
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useMashionLabStore } from '../stores/mashionLab'

const store = useMashionLabStore()
</script>