import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import type { TFilledEvent } from "@/types/event.ts";

export const useTimelineStore = defineStore(
    "timeline",
    () => {
        const route = useRoute();
        const router = useRouter();
        const urlParams = new URLSearchParams(window.location.search);

        const filters = ref<Array<string>>([]);
        const selectedPerson = ref<string>("");
        const selectedEvent = ref<string>("");

        if (urlParams.has("filter")) {
            filters.value = urlParams.get("filter")?.split(",") ?? [];
        }

        watch(() => filters.value, async () => {
            await router.push({ query: { ...router.currentRoute.value.query, filter: filters.value.join(",") } });
        });

        watch(() => route.params.event, (event) => {
            event = String(event);

            selectedEvent.value = event;
        }, {
            immediate: true
        });

        watch(() => route.params.person, (person) => {
            person = String(person);

            if (/^[0-9]{4}/.test(person)) {
                selectedEvent.value = person;
                selectedPerson.value = "";
                return;
            }

            selectedPerson.value = person;
        }, {
            immediate: true
        });

        async function setPerson(personId: string) {
            await router.push({ name: "timeline", params: { person: personId } });
        }

        async function setEvent(eventId: string) {
            await router.push({ name: "timeline", params: { event: eventId, person: selectedPerson.value } });
        }

        async function deselectEvent() {
            await router.push({ name: "timeline", params: { person: selectedPerson.value } });
        }

        function isEventInFilter(event: TFilledEvent) {
            if (filters.value.length === 0) {
                return true;
            }

            return filters.value.some((filter) => event.categories?.some((category) => category.id.startsWith(filter)));
        }

        return {
            deselectEvent,
            filters,
            isEventInFilter,
            selectedEvent,
            selectedPerson,
            setEvent,
            setPerson
        };
    }
);
