<template>
    <v-app>
        <v-container>
            <v-main class="d-flex align-center justify-center">
                <CoaGameCard class="mx-auto" />
            </v-main>
            <v-footer class="mt-2" v-if="isDev">
                <CoaDebugCard />
            </v-footer>
        </v-container>
    </v-app>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import CoaGameCard from './components/CoaGameCard.vue';
import CoaDebugCard from './components/CoaDebugCard.vue';
import { seed, genSeed } from './utils/random';


const isDev = 'development' === import.meta.env.MODE;

onMounted(() => {
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            const [newSeed] = genSeed();
            if (newSeed !== seed) {
                window.location.reload();
            }
        }
    });
});
</script>

<style scoped></style>
