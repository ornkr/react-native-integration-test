## Exo Ornikar : Intégration d'une modale

### ⏱ Durée

45 minutes d'exercice + 15 minutes de discussions

### 🎯 Objectif

L'objectif de cet exercice est d'intégrer une modal pour une librairie de composants, puis d'en discuter.<br/>
Ce composant devra être suffisament flexible pour respecter la spec designs et reprendre le maximum d'éléments de la liste de features dessous.<br/>
<br/>
Tu seras autonome, mais n'hésite pas à poser des questions au besoin pendant toute la durée de l'exercice !
Aussi n'hésite pas à chercher au besoin ce dont tu as besoin sur internet (dans l'idéal, garde tes onglets de recherches ouverts 👀)

### ✨ Features

Voici la liste des features à ajouter à la modal. Il n'y a pas de minimum attendu, le but est d'avoir quelque chose à montrer à la fin de l'exercice et d'en discuter.

#### Principales

- Intégration de la modale (ouverture/fermeture selon le state)
- Header simple et footer, tous deux optionnels
- Afficher le contenu de la modale et de son overflow
- Ajouter un overlay de gris transparent derrière la modale

#### Bonus

- Ajouter une icône optionnelle de retour arrière au header
- Avoir une animation de slide up sur le modale
- Avoir une animation de fade sur l'overlay
- Différencier la modale selon les breakpoints (notamment sur tablette)

_NB: Sauf composant déjà fait, on peut ajouter toutes librairies qu'on jugera utile._

### 👩‍🎨 Design

[Lien vers le design](https://www.figma.com/file/S9j3lzxmLImOp0R8RHX0pt/Kitt-pre-2021?type=design&node-id=308-697&mode=design&t=VURDXKLIIhOx6PXm-0)

### 🏯 Structure du Projet

```
exo-modal
├── .storybook
└── src
    ├── composants
    │ └── Modal                   - ✍️ Composant à implémenter
    │   ├── index.js
    │   ├── stories.js
    │ └── ModalLaucher            - 🔘 Composant de test qui va toggler la Modal
    │   ├── index.js
    │   ├── stories.js
    ├── App.tsx
    └── index.tsx
```

### 🤖 Commande

`yarn start`: start Expo
