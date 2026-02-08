Si vous êtes intéressé par le projet, la meilleure chose à faire est de rejoindre le serveur [Discord](https://discord.gg/BpqvAhAGNq), ou de suggérer des modifications sur [GitHub](https://github.com/hugoattal/memoire-collective).

## Créer un évènement

Les évènements sont des fichiers texte au format YAML et Markdown. Voici un exemple : [2025-03-31_condamnation.md](https://github.com/hugoattal/memoire-collective/edit/main/platform/src/data/people/mlepen/events/2025/2025-03-31_condamnation.md).

Un évènement est définis par quatre éléments :
- son emplacement *(qui définit à qui/quoi il se rattache, ici `people/mlepen/events/2025`)*
- son titre *(qui contient sa date exacte et son identifiant, ici `2025-03-31_condamnation`)*
- son en-tête *(qui définit ses propriétés, comme son titre, ses sources, etc...)*
- son contenu *(qui décrit l'évènement)*

### L'en-tête

Voici à quoi ressemble l'en-tête. Il est au format [YAML](https://fr.wikipedia.org/wiki/YAML).

```md
---
title: Condamnation pour détournement de fonds publics
categories: justice/detournement
files: assistants-parlementaires-fn-parlement-europeen
sources:
  - name: "Délibéré dossier"
    url: "https://infographics.mediapart.fr/hubs/assets/documents/proces-le-pen/attendus-jugement-rn-31-mars.pdf"
    date: "2025/03/31"

---
```

Différents champs peuvent être remplis :
- `title` : Le titre de cet évènement
- `categories` : La ou les catégories de cet évènement *(ici `justice/detournement`)*
- `sources` : La ou les sources
- `files?` : La ou les affaires auxquelles cet évènement est lié
- `links?` : Le ou les évènements liés à cet évènement
- `summary?` : Un résumé de cet évènement
- `timestamp?` : Une date précise de cet évènement (s'il doit être placé précisément dans la journée)

Les propriétés avec un `?` sont optionnelles.

### Le contenu

Voici à quoi ressemble le contenu. Il est au format [Markdown](https://fr.wikipedia.org/wiki/Markdown).

```md
@mlepen est condamnée par le tribunal correctionnel de Paris à **quatre ans de prison** (dont deux avec sursis), **100 000 euros d'amende** et **cinq ans d'inéligibilité** (exécutée immédiatement) pour avoir organisé entre 2009 et 2016, un système de contrats fictifs d'assistants parlementaires européens, détournant plus de **4,4 millions d'euros** au profit de son parti.
```

Pour tagger des personnes, des partis ou des affaires, utilisez `@` suivi de leur identifiant.

## Modifier la plateforme

Si vous souhaitez proposer une modification de la plateforme, créez un [issue](https://github.com/hugoattal/memoire-collective/issues) avec votre proposition. Une fois acceptée, vous pouvez créez une [pull request](https://github.com/hugoattal/memoire-collective/pulls) qui sera relue, corrigée et mergée, avant d'être disponible en ligne.
