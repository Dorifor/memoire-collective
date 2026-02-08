# Event Creation and Structure

This document explains how to create and structure event files for the "Mémoire Collective" project.

## File Location and Naming

Events are stored as Markdown files within the `src/data` directory. The path must follow this convention:

`src/data/people/[owner]/events/[year]/[YYYY-MM-DD]_[slug].md`

- **[owner]**: The unique identifier (ID) of the person or group (e.g., `mlepen`).
- **[year]**: The year the event took place.
- **[YYYY-MM-DD]**: The full date of the event. **This date is used as the primary source of truth for the event's date.**
- **[slug]**: A short, URL-friendly identifier for the event (e.g., `condamnation`).

Example path: `src/data/people/mlepen/events/2025/2025-03-31_condamnation.md`

---

## File Format

Each event file consists of a YAML frontmatter header followed by the markdown content.

### 1. YAML Frontmatter (TEvent)

The YAML header defines the metadata of the event.

| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | **Yes** | A concise and descriptive title. |
| `categories` | `TCategories[]` | No | Categories assigned to the event. Follow the rules in `categories.md`. |
| `files` | `string` \| `string[]` | No | IDs of "affaires" (legal cases or files) linked to this event. |
| `links` | `string` \| `string[]` | No | IDs of other events (filename slugs) linked to this event. |
| `sources` | `TSource[]` | **Yes** | A list of verifiable sources. |

#### TSource Structure

Each source in the `sources` list must have:
- `name`: The name of the article or document.
- `url`: A direct link to the information.
- `date`: The publication date of the source in `YYYY/MM/DD` format.

#### TCategories Structure

Each category in the `categories` list must have:
- `id`: The category identifier (e.g., `justice/detournement`).
- `reason`: A short sentence to explain why this event is linked to that category.


### 2. Markdown Content

The body of the file (after the second `---`) contains the description of the event.
- Use **Markdown** for styling (bold, lists, etc.).
- Use the **@[id]** syntax to mention people or groups (e.g., `@mlepen`).
- Keep the description factual, short and concise.

---

## Complete Example

**File Path**: `src/data/people/mlepen/events/2025/2025-03-31_condamnation.md`

```markdown
---
title: Condamnation pour détournement de fonds publics
categories:
  - id: justice/detournement
    reason: L'événement concerne une condamnation judiciaire pour détournement de fonds.
files: assistants-parlementaires-fn-parlement-europeen
sources:
  - name: "Délibéré dossier dit des assistants fictifs du RN"
    url: "https://infographics.mediapart.fr/hubs/assets/documents/proces-le-pen/attendus-jugement-rn-31-mars.pdf"
    date: "2025/03/31"
---

@mlepen est condamnée par le tribunal correctionnel de Paris à **quatre ans de prison** (dont deux avec sursis), **100 000 euros d'amende** et **cinq ans d'inéligibilité** (exécutée immédiatement) pour avoir organisé entre 2009 et 2016, un système de contrats fictifs d'assistants parlementaires européens, détournant plus de **4,4 millions d'euros** au profit de son parti.
```
