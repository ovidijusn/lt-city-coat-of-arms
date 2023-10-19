<script setup lang="ts">
import { computed, PropType } from 'vue';
import { Fragment } from './types'


const props = defineProps({
  fragment: {
    type: Object as PropType<Fragment>,
    required: true
  },
  flipped: {
    type: Boolean,
    default: false
  }
});

defineEmits(['click']);

const imgContent = computed(()=>`url(${props.fragment.image})`);
const moveX = computed(()=>`${props.fragment.offsetX}px`);
const moveY = computed(()=>`${props.fragment.offsetY}px`);
const width = computed(()=>`${props.fragment.width}px`);
const height = computed(()=>`${props.fragment.height}px`);
</script>

<template>
  <div class="flip-card" :class="{ flipped }" @click="$emit('click')">
    <div class="flip-card-inner">
      <div class="flip-card-front">

      </div>
      <div class="flip-card-back">
        <img class="coat-of-arms" width="300" draggable="false"  />
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-card {
  background-color: transparent;
  width: v-bind(width);
  height: v-bind(height);
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
  width: 300px;
  content: v-bind(imgContent);
  right: v-bind(moveX);
  bottom: v-bind(moveY);
}
</style>
