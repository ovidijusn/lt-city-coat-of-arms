<template>
  <v-dialog :model-value="opened" width="500" max-height="550" @update:model-value="emit('update:opened', $event)">
    <template #default>
      <v-card :title="title">
        <template #append><v-btn icon="mdi-close" variant="text" @click="emit('update:opened', false)"></v-btn></template>
        <v-card-subtitle v-if="gameStore.ended">
          Dienos miestas: <b>{{ gameStore.cityName }}</b>
        </v-card-subtitle>
        <v-card-subtitle>
          Atspėta: <b>{{ statsStore.totalWins }}</b> iš <b>{{ statsStore.total }}</b>
        </v-card-subtitle>
        <v-card-subtitle>
          Dabartinė pergalių serija: <b>{{
            statsStore.streak }}</b>, Ilgiausa pergalių serija: <b>{{ statsStore.longestStreak }}</b>
        </v-card-subtitle>
        <v-card-text>
          <v-table density="compact">
            <tbody>
              <tr v-for="(win, idx) in statsStore.wins">
                <td style="width: 10px; padding: 0;">{{ idx + 1 }}</td>
                <td>
                  <v-progress-linear :model-value="win" :max="statsStore.total" :color="colors[idx]" height="20">{{
                    win
                  }}</v-progress-linear>
                </td>
              </tr>
              <tr>
                <td style="width: 10px; padding: 0;">x</td>
                <td>
                  <v-progress-linear :model-value="loses" :max="statsStore.total" color="red-darken-4" height="20">
                    {{ loses }}
                  </v-progress-linear>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>

        <v-card-actions v-if="gameStore.ended">
          <v-btn prepend-icon="mdi-share-variant" @click="share" title="Dalintis">Dalintis</v-btn>
          <v-snackbar v-model="copied" color="info" timeout="2000">Resultas nukopijuotas</v-snackbar>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGameStore } from '@/stores/game';
import { useStatsStore } from '@/stores/stats';
import { daysSinceLunch } from '@/utils/date';

defineProps({
  opened: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:opened']);

const gameStore = useGameStore();
const statsStore = useStatsStore();
const copied = ref(false);
const title = computed(() => gameStore.ended ? (gameStore.won ? 'Sveikinimai! 🎉🥳' : 'Sekmės rytoj! 😉') : 'Statistika');
const loses = computed(() => statsStore.total - statsStore.totalWins);


const colors = ['green', 'light-green', 'lime', 'amber', 'orange', 'red'];

function _redOrGreen(idx: number): string {
  return gameStore.flipped.includes(idx) ? '🟥' : '🟩';
}
function _puzzle(): string {
  return `${_redOrGreen(0)}${_redOrGreen(1)}
${_redOrGreen(2)}${_redOrGreen(3)}
${_redOrGreen(4)}${_redOrGreen(5)}`
}

function share() {
  let url = window.location.href;
  if (url.endsWith('/')) {
    url = url.substring(0, url.length - 1);
  }
  const guesses = gameStore.won ? gameStore.guesses.length : 'X';
  const text =
    `#DienosHerbas #${daysSinceLunch()} ${guesses}/6
${_puzzle()}
${url}`;

  navigator.clipboard.writeText(text);
  copied.value = true;
}
</script>

<style scoped></style>