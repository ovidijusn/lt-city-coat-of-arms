<template>
    <v-app>
        <v-container>
            <v-main class="d-flex align-center justify-center">
                <CoaGameCard class="mx-auto"/>
            </v-main>
            <v-footer v-if="isDev">
                <CoaDebugCard />
            </v-footer>
        </v-container>
    </v-app>
</template>

<script setup lang="ts">
import CoaGameCard from './components/CoaGameCard.vue';
import CoaDebugCard from './components/CoaDebugCard.vue';


const isDev = 'development' === import.meta.env.MODE;
</script>

<style scoped></style>
