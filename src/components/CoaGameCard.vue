<template>
  <v-card class="game-card">
    <!-- <CoaPuzzle class="mx-auto" /> -->



    <div>
      <!--
      <v-autocomplete :items="items" item-title="name" v-model="selectedCity" return-object append-icon="mdi-check-outline" @keyup.enter="test" />

      <AutoComplete v-model="selectedCity" optionLabel="name" :suggestions="items" @complete="search" forceSelection />
      <Button :disabled="!canGuess" severity="success" label="Spėti" @click="check" />
      -->
    </div>

    <template #content>
      <!--
      <DataTable :value="guesses">
        <Column field="cityName" />
        <Column field="distance" />
        <Column field="direction" />
      </DataTable>
    -->
    </template>
  </v-card>
</template>

<script setup lang="ts">

//import CoaPuzzle from './CoaPuzzle.vue';
import { useGameStore } from '@/stores/game'
const gameStore = useGameStore()

console.log(gameStore.cityName)
gameStore.addGuess("Trakai");

</script>

<style scoped>
.game-card {
  width: 350px;
}
</style>

../random