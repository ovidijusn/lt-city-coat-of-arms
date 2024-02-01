<template>
  <div>
    <v-card class="game-card">
      <v-toolbar class="text-center" density="compact">
        <v-toolbar-title>Dienos herbas</v-toolbar-title>
        <v-btn size="small" icon @click="showStats" title="Statistika">
          <v-icon>mdi-chart-bar</v-icon>
        </v-btn>
        <v-btn size="small" icon @click="showHelp" title="Pagalba">
          <v-icon>mdi-help</v-icon>
        </v-btn>
        <v-btn size="small" icon href="https://www.buymeacoffee.com/ovidijus" title="Pavaišinti kava">
          <v-icon>mdi-coffee-outline</v-icon>
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
    <CoaGameHelp v-model:opened="helpVisible" />

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import CoaGamePuzzle from '@/components/CoaGamePuzzle.vue';
import CoaGameControl from '@/components/CoaGameControl.vue';
import CoaGameResult from '@/components/CoaGameResult.vue';
import CoaGameShare from '@/components/CoaGameShare.vue';
import CoaGameHelp from '@/components/CoaGameHelp.vue';
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore();
const statsVisible = ref(false);
const helpVisible = ref(false);


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

function showHelp() {
  helpVisible.value = true;
}

</script>

<style scoped>
.game-card {
  width: 350px;
}
</style>