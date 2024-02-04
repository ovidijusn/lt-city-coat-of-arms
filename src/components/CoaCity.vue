<template>
    {{ name }} <a :href="city.about" target="_blank" title="Daugiau apie miestą">
        <v-icon icon="mdi-link-variant" size="small" color="grey-darken-2" />
    </a>
</template>
<script setup lang="ts">
const props = defineProps({
    name: {
        type: String as PropType<CityName>,
        required: true
    }
})
import { PropType, ref } from 'vue';
import { useCityStore } from '@/stores/city';
import { CityName } from '@/types';
const city = ref(useCityStore().city(props.name));
</script>