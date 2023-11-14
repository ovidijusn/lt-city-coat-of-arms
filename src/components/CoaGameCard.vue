<template>
  <div>
    <v-card class="game-card">
      <v-toolbar class="text-center" density="compact">
        <v-toolbar-title>Dienos herbas</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="showStats">
          <v-icon>mdi-chart-bar</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-subtitle class="text-center">
        Atspėk šios dienos Lietuvos miesto herbą
      </v-card-subtitle>
      <v-card-text v-if="gameStore.ready">
        <CoaGamePuzzle />
        <CoaGameControl class="mt-2" />
        <CoaGameResult class="mt-2" />
      </v-card-text>
    </v-card>
    <CoaGameShare v-model:opened="statsVisible" />

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import CoaGamePuzzle from '@/components/CoaGamePuzzle.vue';
import CoaGameControl from '@/components/CoaGameControl.vue';
import CoaGameResult from '@/components/CoaGameResult.vue';
import CoaGameShare from '@/components/CoaGameShare.vue';
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore();
const statsVisible = ref(false);

gameStore.resetIfNeeded();

showEndGame();

gameStore.$subscribe(() => showEndGame());

function showEndGame() {
  if (gameStore.ended) {
    setTimeout(() => statsVisible.value = true, 500);
  }
}

function showStats() {
  statsVisible.value = true;
}
</script>

<style scoped>
.game-card {
  width: 350px;
}
</style>