<script setup lang="ts">
import FlippingBoard from './FlippingBoard.vue';

import { ref } from 'vue';
import { cities } from '../cities';
const city = ref(cities[0]);

</script>

<template>
  <div class="card coat-of-arms-card" style="width: 400px;">
    <div class="card-header">

      <flipping-board class="mx-auto" :city="city" />


    </div>


    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<style scoped>
.card.coat-of-arms-card :deep(.row) {
  padding-right: 0;
  padding-left: 0;
}

.card.coat-of-arms-card .row :deep(.col) {
  padding: 0 !important;
  width: 200px !important;
}
</style>
<style>
.card.coat-of-arms-card .row {
  padding-right: 0;
  padding-left: 0;
}

.card.coat-of-arms-card .row .col {
  padding-right: 0;
  padding-left: 0;
  width: 200px !important;
}
</style>
