<template>
    <div
        v-if="event"
        class="panel-content"
    >
        <h1 v-html="parseTag(event.title)" />
        <h2>Catégories</h2>
        <ul class="categories">
            <li
                v-for="(category, index) of event.categories"
                :key="index"
                class="category"
            >
                <MCategoryTag :category-id="category.id" /> : {{ category.reason }}
            </li>
        </ul>
        <h2>Description</h2>
        <div
            class="content"
            v-html="parseTag(event.body)"
        />
        <h2>Sources</h2>
        <div class="sources">
            <MSource
                v-for="(source, index) of event.sources"
                :key="index"
                :source="source"
            />
        </div>
        <h2>Git</h2>
        <UButton
            :href="event.gitUrl"
            icon="lucide:pencil"
            size="xs"
            target="_blank"
            variant="soft"
        >
            Éditer la source sur GitHub
        </UButton>
    </div>
</template>

<script setup lang="ts">
import MCategoryTag from "@/pages/timeline/components/form/MCategoryTag.vue";
import MSource from "@/pages/timeline/components/panel/MSource.vue";
import { parseTag } from "@/pages/timeline/lib/markdown.ts";
import type { TFilledEvent } from "@/types/event.ts";

defineProps<{
    event?: TFilledEvent;
}>();
</script>

<style scoped>
.panel-content {
    h1 {
        font-size: var(--font-size-xl);
        font-weight: 600;
    }

    h2 {
        font-size: var(--font-size-s);
        margin-top: var(--length-m);
        margin-bottom: var(--length-s);
        color: var(--color-primary);
        font-weight: 600;
        text-transform: uppercase;
    }

    .categories {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: var(--length-xs);

        .category {
            border: 1px solid var(--ui-border);
            border-radius: var(--radius-m);
            padding: var(--length-xxs);
            font-size: var(--font-size-s);
            color: var(--color-text-softer);
        }
    }

    .content {
        &:deep(p) {
            margin: var(--length-s) 0;
        }
    }
}

.sources {
    display: flex;
    flex-direction: column;
    gap: var(--length-s);
}
</style>
