<template>
    <div>
      <v-card class="game-card">
        <template #title>
          Dienos herbas
        </template>
        <template #subtitle>
          Atspėk Lietuvos miesto herbą
        </template>
        <template v-if="gameStore.ready" #text>
          <CoaGamePuzzle />
          <CoaGameControl class="mt-2" />
          <CoaGameResult class="mt-2" />
        </template>
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

../random