<template>
  <div class="flipping-board">
    <CoaPuzzlePeace v-for="(fragment, idx) in fragments" class="fragment" :fragment="fragment" :flipped="flips[idx]"
      :style="{ top: `${fragment.offsetY}px`, left: `${fragment.offsetX}px` }" @click="flips[idx] = !flips[idx]" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, PropType } from 'vue';

import CoaPuzzlePeace from './CoaPuzzlePeace.vue';

import { City } from '../cities';
import { Fragment } from './types';
import { getImageSize } from '../utils';

const props = defineProps({
  city: {
    type: Object as PropType<City>,
    required: true
  }
});

const width = 100;

const fragments = ref([] as Fragment[]);
const flips = ref([] as boolean[]);
getImageSize(props.city.image, (size) => {
  let height;
  if (size.height % 3 == 0) {
    height = size.height / 6
  } else if ((size.height + 1) % 3 == 0) {
    height = (size.height + 1) / 6
  } else {
    height = (size.height + 2) / 6
  }
  height = Math.floor(height) + (size.height % 2 == 0 ? 0 : 1);

  for (let idx = 0; idx < 9; idx++) {

    const offsetX = (idx % 3) * 100;
    const offsetY = Math.floor(idx / 3) * height;
    fragments.value[idx] = { width, height, offsetX, offsetY, image: props.city.image };
    flips.value[idx] = false;
  }
});

const puzzleHeight = computed(() => (fragments.value.length > 0 ? fragments.value[0].height * 3 + 10 : 400) + 'px');

</script>

<style scoped>
.flipping-board {
  position: relative;
  width: 300px;
  height: v-bind(puzzleHeight);
}

.flipping-board>.fragment {
  position: absolute;
  display: block;
}
</style>
