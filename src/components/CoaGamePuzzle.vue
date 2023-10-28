<template>
  <div class="flipping-board mx-auto" :style="{ height: height + 'px', width: width + 'px' }">
    <div v-for="idx in 6" class="flip-card" :class="{ flipped: flipped(idx) }"
      :style="{ height: pHeight + 'px', width: pWidth + 'px', left: pLeft(idx), top: pTop(idx) }">
      <div class="flip-card-inner">
        <div class="flip-card-front">

        </div>
        <div class="flip-card-back">
          <img class="coat-of-arms" :width="width" :height="height" draggable="false"
            :style="{ content: imgContent, right: pLeft(idx), bottom: pTop(idx) }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore();

const width = ref(200);
const height = computed(() => Math.ceil((width.value * gameStore.city.imageSize.h) / gameStore.city.imageSize.w));
const imgContent = computed(() => `url(${gameStore.city.image})`);

const pWidth = computed(() => Math.ceil(width.value / 2));
const pHeight = computed(() => Math.ceil(height.value / 3));

function pTop(idx: number): string {
  return (Math.floor((idx - 1) / 2)) * pHeight.value + 'px';
}

function pLeft(idx: number): string {
  return ((idx - 1) % 2) * pWidth.value + 'px';
}

function flipped(idx: number): boolean {
  return gameStore.won ? true : gameStore.flipped.includes(idx - 1);
}

</script>

<style scoped>
.flipping-board {
  position: relative;
}

.flip-card {
  position: absolute;
  background-color: transparent;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  width: 100%;
  height: 100%;
  color: black;
  border: 1px solid #ccc;
}

.flip-card-back {
  overflow: hidden;
  transform: rotateY(180deg);
}

img.coat-of-arms {
  position: relative;
  width: 200px;
}
</style>