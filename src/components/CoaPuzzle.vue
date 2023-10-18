<template>
  <div class="flipping-board">
    <CoaPuzzlePeace v-for="state in states" class="fragment" :state="state" :image-url="city.image"
      :style="{ top: `${state.offset.y}px`, left: `${state.offset.x}px` }" @click="state.flipped = !state.flipped" />
  </div>
</template>

<script setup lang="ts">
import CoaPuzzlePeace from './CoaPuzzlePeace.vue';

import { ref, PropType } from 'vue';
import { City } from '../cities';
import { FragmentState, Offset } from './types'

defineProps({
  city: {
    type: Object as PropType<City>,
    required: true
  }
});

function moveX(idx: number): number {
  return (idx % 3) * 100
}
function moveY(idx: number): number {
  return Math.floor(idx / 3) * 100
}
function offset(idx: number): Offset {
  return {
    x: moveX(idx),
    y: moveY(idx)
  }
}

const states = ref([] as FragmentState[]);
  for (let idx = 0; idx < 9; idx++) {
    states.value[idx] = { flipped: true, offset: offset(idx) };
  }
</script>

<style scoped>
.flipping-board {
  position: relative;
  width: 300px;
  height: 400px;
}

.flipping-board>.fragment {
  position: absolute;
  display: block;
}
</style>
