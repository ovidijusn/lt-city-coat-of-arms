<script setup lang="ts">
import { computed } from 'vue';
import { Card } from './types'


const props = defineProps({
  card: {
    type: Object as PropType<Card>,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

defineEmits(['click']);

const imgContent = computed(()=>`url(${props.imageUrl})`);
const moveX = computed(()=>`${props.card.offset.x}px`);
const moveY = computed(()=>`${props.card.offset.y}px`);

</script>

<template>
  <div class="flip-card" :class="{ flipped: card.flipped }" @click="$emit('click')">
    <div class="flip-card-inner">
      <div class="flip-card-front">

      </div>
      <div class="flip-card-back">
        <img class="coat-of-arms" width="300"  />
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 100px;
  height: 100px;
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
