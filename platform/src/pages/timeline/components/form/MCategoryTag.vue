<template>
    <div class="tag">
        <UIcon
            v-if="icon"
            class="icon"
            :name="icon"
        />
        {{ label }}
    </div>
</template>

<script setup lang="ts">
import { capitalize } from "es-toolkit";
import { computed } from "vue";

import { categories } from "@/data/categories.ts";

const props = defineProps<{
    categoryId: string;
}>();

const icon = computed(() => categories[props.categoryId.split("/")[0]!]?.icon);
const label = computed(() => capitalize(props.categoryId.split("/").at(-1)!));
</script>

<style scoped>
.tag {
    display: inline-flex;
    font-size: var(--font-size-xxs);
    padding: var(--length-xxxxs) var(--length-xxs);
    background: var(--color-primary);
    color: var(--color-text-inverted);
    border-radius: var(--radius-s);
    gap: var(--length-xxs);
    align-items: center;

    .icon {
        font-size: var(--font-icon-xxs);

    }
}
</style>
