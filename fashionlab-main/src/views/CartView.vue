<template>
  <div class="container py-5">
    <h1 class="fw-bold display-5 mb-5">Carrello</h1>
    <div class="row" v-if="store.cart.length > 0">
      <div class="col-12 col-lg-8 mb-4 mb-lg-0">
        <CartItem
          v-for="item in store.cart"
          :key="item.id"
          :item="item"
          @increase-qty="store.increaseCartQuantity(item.id)"
          @decrease-qty="store.decreaseCartQuantity(item.id)"
          @remove-item="store.removeFromCart(item.id)"
        />
      </div>
      <div class="col-12 col-lg-4">
        <div class="card border-dark bg-light shadow-sm">
          <div class="card-body p-4">
            <h4 class="card-title fw-bold mb-4">Riepilogo</h4>
            <div class="d-flex justify-content-between mb-2">
              <span class="text-muted">Subtotale</span>
              <span>€{{ store.cartTotal }}</span>
            </div>
            <div class="d-flex justify-content-between mb-3">
              <span class="text-muted">Spedizione</span>
              <span>Gratuita</span>
            </div>
            <hr>
            <div class="d-flex justify-content-between mb-4">
              <strong class="fs-5">Totale</strong>
              <strong class="fs-4">€{{ store.cartTotal }}</strong>
            </div>
            <button class="btn btn-dark w-100 btn-lg mb-2" @click="checkout">
              Procedi al checkout
            </button>
            <router-link to="/finder" class="btn btn-outline-dark w-100">
              Continua lo shopping
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-5">
      <h3 class="text-muted mb-4">Il tuo carrello è vuoto.</h3>
      <router-link to="/finder" class="btn btn-dark btn-lg">Trova il tuo look</router-link>
    </div>
  </div>
</template>

<script setup>
import { useMashionLabStore } from '../stores/mashionLab'
import CartItem from '../components/CartItem.vue'

const store = useMashionLabStore()

const checkout = () => {
  alert("Grazie per l'ordine! (simulazione)")
}
</script>