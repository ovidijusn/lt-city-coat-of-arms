<script setup lang="ts">
import { ref } from 'vue'
type ShadeBlock = {
  opened: boolean
};
import coaSrc from '@/assets/images/coa/300px-akmene.png';
const shadeBlocks:ShadeBlock[][] = ref([]);
for(let i = 0; i < 3; i++){
  shadeBlocks.value[i] = [];
  for(let j = 0; j < 3; j++){
    shadeBlocks.value[i][j] = {opened:false};
}
}
function toggle(block:ShadeBlock){
  console.log(block)
  block.opened = !block.opened;
}


</script>

<template>
  <div class="card" style="width: 332px;">
    <div class="card-header">
      <div class="coat-of-arms-container">
      <img class="coat-of-arms" :src="coaSrc" alt="Card image cap">
      <div class="coat-of-arms-shade">

        <div v-for="row in shadeBlocks" class="row">
          <div v-for="col in row" class="col shade-block " :class="{'no-shade':col.opened}" @click="toggle(col)"></div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</template>

<style scoped>
.coat-of-arms-container {
  width: 300px;
  height: 300px;
}
.coat-of-arms-shade {
  width: 300px;
  height: 300px;
  position: relative; 
  top: -300px;
}

.shade-block {
  width: 100px;
  height: 100px;
  border: 1px solid grey;
  background-color: blueviolet;
}
.shade-block.no-shade {
  border: none;
  background: none;
}
</style>
