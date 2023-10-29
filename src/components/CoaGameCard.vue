<template>
  <div>
    <v-card class="game-card">
      <v-card-title class="text-center">
        Dienos herbas
      </v-card-title>
      <v-card-subtitle class="text-center">
        Atspėk šios dienos Lietuvos miesto herbą
      </v-card-subtitle>
      <v-card-text v-if="gameStore.ready">
        <CoaGamePuzzle />
        <CoaGameControl class="mt-2" />
        <CoaGameResult class="mt-2" />
      </v-card-text>
    </v-card>
    <CoaGameShare />
  </div>
</template>

<script setup lang="ts">
import CoaGamePuzzle from '@/components/CoaGamePuzzle.vue';
import CoaGameControl from '@/components/CoaGameControl.vue';
import CoaGameResult from '@/components/CoaGameResult.vue';
import CoaGameShare from '@/components/CoaGameShare.vue';
import { useGameStore } from '@/stores/game'
const gameStore = useGameStore()

gameStore.resetIfNeeded();
</script>

<style scoped>
.game-card {
  width: 350px;
}
</style>