<template>
  <div>
    <section class="bg-dark text-white text-center py-5">
      <div class="container py-5">
        <h1 class="display-3 fw-bold mb-4">Build your wardrobe. Create your look.</h1>
        <p class="lead mb-5 mx-auto" style="max-width: 600px;">
          Esplora un guardaroba digitale, scopri outfit e capsule tematiche e trova il tuo stile.
        </p>
        <div class="d-flex justify-content-center gap-3">
          <router-link to="/wardrobe" class="btn btn-light btn-lg px-4 fw-bold">
            Esplora il guardaroba
          </router-link>
          <router-link to="/finder" class="btn btn-outline-light btn-lg px-4">
            Trova un look
          </router-link>
        </div>
      </div>
    </section>

    <section class="container py-5 text-center">
      <div class="row g-4 mt-3">
        <div class="col-12 col-md-4">
          <h3 class="fw-bold">My Wardrobe</h3>
          <p class="text-muted">Esplora i capi e guarda i dettagli di ognuno.</p>
          <router-link to="/wardrobe" class="text-dark fw-bold">Vai al catalogo</router-link>
        </div>
        <div class="col-12 col-md-4">
          <h3 class="fw-bold">Outfits</h3>
          <p class="text-muted">Lasciati ispirare da abbinamenti pronti.</p>
          <router-link to="/outfits" class="text-dark fw-bold">Scopri gli outfit</router-link>
        </div>
        <div class="col-12 col-md-4">
          <h3 class="fw-bold">Capsules</h3>
          <p class="text-muted">Raccolte tematiche per stile e stagione.</p>
          <router-link to="/capsules" class="text-dark fw-bold">Vedi le capsule</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>