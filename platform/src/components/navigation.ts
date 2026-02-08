import type { ArrayOrNested, NavigationMenuItem } from "@nuxt/ui";

export const navigationItems: ArrayOrNested<NavigationMenuItem> = [
    {
        label: "Chronologie",
        icon: "lucide:calendars",
        to: "/timeline"
    },
    {
        label: "Documentation",
        icon: "lucide:book",
        to: "/documentation"
    },
    {
        label: "À propos",
        icon: "lucide:info",
        to: "/about"
    },
    {
        label: "Contribuer",
        icon: "lucide:pencil-ruler",
        to: "/contribute"
    }
];
