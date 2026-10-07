<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="fw-bold display-5">Inspire Your Style</h1>
      <p class="text-muted">Esplora le combinazioni e trova il tuo prossimo look.</p>
    </div>

    <div class="row justify-content-center mb-5">
      <div class="col-12 col-md-6 col-lg-4">
        <select v-model="selectedStyle" class="form-select border-dark shadow-sm">
          <option value="">Tutti gli stili</option>
          <option value="Minimal">Minimal</option>
          <option value="Urban">Urban</option>
          <option value="Elegant">Elegant</option>
          <option value="Casual">Casual</option>
        </select>
      </div>
    </div>

    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="outfit in filteredOutfits" :key="outfit.id">
        <OutfitCard :outfit="outfit" @save-outfit="handleSaveOutfit" />
      </div>
      <div v-if="filteredOutfits.length === 0" class="col-12 text-center py-5 text-muted">
        <h3>Nessun outfit trovato per questo stile.</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMashionLabStore } from '../stores/mashionLab'
import OutfitCard from '../components/OutfitCard.vue'

const store = useMashionLabStore()
const selectedStyle = ref('')

const filteredOutfits = computed(() => {
  if (selectedStyle.value === '') {
    return store.outfits
  }
  return store.outfits.filter(o => o.style === selectedStyle.value)
})

const handleSaveOutfit = (outfit) => {
  store.saveOutfit(outfit)
  alert(`Outfit "${outfit.name}" salvato`)
}
</script>