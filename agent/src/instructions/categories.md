# Event Categories Classification

This document provides instructions for agents on how to assign categories to events in the "Mémoire Collective" project.

## Classification System

Categories are structured in two levels:
1. **Generic Categories**: Broad themes (e.g., `comportement`).
2. **Precise Categories**: Specific sub-themes within a generic category (e.g., `comportement/haine`).

### Assignment Rules

- **Multiple Categories**: An event can have any number of categories if multiple themes apply.
- **Precision Rule**: If a precise category is assigned, the corresponding generic category **must not** be added. For example, if you assign `comportement/racisme`, do not add `comportement`.
- **Generic Fallback**: Only use a generic category if the event fits the broad theme but none of the specific sub-categories apply.

---

## List of Categories

### 1. Autoritarisme et censure (`autoritarisme`)
Broad category for actions targeting the press, journalists, or legal intimidation.
- `autoritarisme/journalistes`: Pressure on journalists.
- `autoritarisme/presse`: Obstacles to press freedom.
- `autoritarisme/procedures`: SLAPP suits (Procédures-bâillons).

### 2. Comportement inappropriés (`comportement`)
Broad category for discriminatory or hateful behavior.
- `comportement/antisemitisme`: Antisemitism.
- `comportement/discrimination`: Discrimination (general).
- `comportement/haine`: Hate speech / Incitement to hatred.
- `comportement/homophobie`: Homophobia.
- `comportement/islamophobie`: Islamophobia.
- `comportement/racisme`: Racism.
- `comportement/sexism`: Sexism.

### 3. Conflit d'intérêt (`conflit`)
Broad category for personal enrichment or undue influence.
- `conflit/enrichissement`: Personal enrichment.
- `conflit/lobbying`: Lobbying / Undue influence.
- `conflit/mandats`: Accumulation of mandates (Cumul des mandats).
- `conflit/remuneration`: Excessive remuneration.

### 4. Mensonges et désinformation (`desinformation`)
Broad category for manipulation of information.
- `desinformation/fakeNews`: Fake news.
- `desinformation/manipulation`: Manipulation of opinion.
- `desinformation/promesses`: Unkept promises.

### 5. Incompétence et irresponsabilité (`incompetence`)
Broad category for failures in governance or accountability.
- `incompetence/clientelisme`: Clientelism.
- `incompetence/echecs`: Refusal to take responsibility for failures.
- `incompetence/erreur`: Serious errors/negligence.
- `incompetence/favoritisme`: Favoritism.

### 6. Mépris des institutions (`institutions`)
Broad category for subverting legal or institutional processes.
- `institutions/ingerence`: Interference in justice.
- `institutions/lois`: Changing laws for private interests.
- `institutions/regles`: Bypassing rules/procedures.

### 7. Affaires judiciaires (`justice`)
Broad category for legal and criminal matters.
- `justice/corruption`: Corruption.
- `justice/detournement`: Embezzlement of public funds.
- `justice/escroquerie`: Fraud / Swindling.
- `justice/fraude`: Tax fraud.
- `justice/obstruction`: Obstruction of justice.

### 8. Népotisme et copinage (`nepotisme`)
Broad category for favoritism towards family or friends.
- `nepotisme/emploi`: Nepotism in employment.

### 9. Opportunisme et double discours (`opportunisme`)
Broad category for political inconsistency or populism.
- `opportunisme/discours`: Double language.
- `opportunisme/ideologie`: Ideological inconsistency.
- `opportunisme/populisme`: Populism.
- `opportunisme/revirement`: Opportunistic turnarounds.

---

## Examples

- **Example 1**: An event about a politician accused of diverting public funds to hire their cousin.
  - Categories: `justice/detournement`, `nepotisme/emploi`
  - *Note: `justice` and `nepotisme` are omitted because precise sub-categories are used.*

- **Example 2**: A public speech containing racist remarks and calling for the closure of a newspaper.
  - Categories: `comportement/racisme`, `autoritarisme/presse`

- **Example 3**: A politician who made a vague mistake that doesn't fit any sub-category of incompétence.
  - Categories: `incompetence`
