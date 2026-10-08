<template>
  <div class="d-flex flex-column min-vh-100 bg-light">
    <!-- Navbar fissa in alto -->
    <Navbar />

    <!-- Corpo centrale che cambia in base alla rotta -->
    <main class="flex-grow-1">
      <router-view />
    </main>

    <!-- Footer fisso in basso -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>