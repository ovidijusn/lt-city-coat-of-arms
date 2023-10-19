<template>
  <div class="flipping-board">
    <CoaPuzzlePeace v-for="(fragment, idx) in fragments" class="fragment" :fragment="fragment" :flipped="flips[idx]"
      :style="{ top: `${fragment.offsetY}px`, left: `${fragment.offsetX}px` }" @click="flips[idx] = !flips[idx]" />
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue';

import CoaPuzzlePeace from './CoaPuzzlePeace.vue';

import { City } from '../cities';
import { Fragment } from './types';

const props = defineProps({
  city: {
    type: Object as PropType<City>,
    required: true
  }
});

const width = 150;

const fragments = ref([] as Fragment[]);
const flips = ref([] as boolean[]);

  let height;
  if (props.city.imageSize.h % 3 == 0) {
    height = props.city.imageSize.h / 6
  } else if ((props.city.imageSize.h + 1) % 3 == 0) {
    height = (props.city.imageSize.h + 1) / 6
  } else {
    height = (props.city.imageSize.h + 2) / 6
  }
  height = Math.ceil(height);

  for (let idx = 0; idx < 6; idx++) {
    const offsetX = (idx % 2) * width;
    const offsetY = Math.floor(idx / 2) * height;
    fragments.value[idx] = { width, height, offsetX, offsetY, image: props.city.image };
    flips.value[idx] = false;
    console.log(fragments.value[idx])
  }

const puzzleHeight = ref((3 * height) + 'px');

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
../utils/utils