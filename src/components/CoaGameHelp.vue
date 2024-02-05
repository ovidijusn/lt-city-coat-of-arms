<template>
  <v-dialog :model-value="opened" width="500" max-height="550" @update:model-value="emit('update:opened', $event)">
    <template #default>
      <v-card title="Pagalba">
        <template #append>
          <v-btn icon="mdi-close" variant="text" @click="emit('update:opened', false)"></v-btn>
        </template>

        <v-card-text>
          <div class="text-h7 font-weight-bold">Kaip žaisti?</div>
          <p class="text-body-2 ma-4">
            Kiekvieną dieną atsitiktine tvarka bus išrenkamas Lietuvos miesto herbas(išskyrus <a
              href="https://www.vle.lt/straipsnis/panemune/" target="_blank">Panemunę</a>, kuri iki šiol
            neturi
            herbo) ir žaidimo tikslas - atspėti, kokio tai miesto herbas su kuo mažiau spėjimų. Visi žaidėjai tą pačią
            dieną
            gauna tą patį herbą.
          </p>
          <p class="text-body-2 ma-4">Žaidimas prasideda su viena atversta herbo dalimi iš 6 galimų.</p>
          <p class="text-body-2 ma-4"> Po kiekvieno blogo spėjimo atverčiama nauja herbo dalis bei pateikiamas apytikslis
            atstumas ir kryptis nuo spėto
            miesto iki tos dienos miesto.</p>
          <p class="text-body-2 ma-4">Atspėjus atverčiamos visos užverstos herbo dalys bei pateikiama asmeninė žaidimo
            statistika, duomenys apie
            praeities žaidimus saugomi naršyklėje.</p>
          <p class="text-body-2 ma-4"> Neatspėjus bus pateikiama žaidimų statistika su tos dienos miesto pavadinimu.
          </p>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">

defineProps({
  opened: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:opened'])

</script>

<style scoped></style>
