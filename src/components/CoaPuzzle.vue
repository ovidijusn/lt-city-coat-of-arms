<template>
  <div class="flipping-board">
    <!--
    <CoaPuzzlePeace v-for="(fragment, idx) in fragments" class="fragment" :fragment="fragment" :flipped="flipped(idx)"
      :style="{ top: `${fragment.offsetY}px`, left: `${fragment.offsetX}px` }" />
      -->
  </div>
</template>

<script setup lang="ts">
/*
import { ref } from 'vue';

import CoaPuzzlePeace from './CoaPuzzlePeace.vue';
import { Fragment } from '@/types';

const width = 150;

const fragments = ref([] as Fragment[]);

let height;
if (gameState.city.imageSize.h % 3 == 0) {
  height = gameState.city.imageSize.h / 6
} else if ((gameState.city.imageSize.h + 1) % 3 == 0) {
  height = (gameState.city.imageSize.h + 1) / 6
} else {
  height = (gameState.city.imageSize.h + 2) / 6
}
height = Math.ceil(height);

for (let idx = 0; idx < 6; idx++) {
  const offsetX = (idx % 2) * width;
  const offsetY = Math.floor(idx / 2) * height;
  fragments.value[idx] = { width, height, offsetX, offsetY, image: gameState.city.image };
}

const puzzleHeight = ref((3 * height) + 'px');

function flipped(idx: number): boolean {
  return getFragmentState(idx)?.flipped || false;
}


height: v-bind(puzzleHeight);
*/
</script>

<style scoped>
.flipping-board {
  position: relative;
  width: 300px;
  
}

.flipping-board>.fragment {
  position: absolute;
  display: block;
}
</style>