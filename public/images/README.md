# 📁 Structure des Images

## 📂 Dossiers organisés :

### `/projects/` 
- Images des projets du portfolio
- Format recommandé : JPG/PNG/WebP
- Taille recommandée : 1200x800px
- Exemples : `defi-protocol.jpg`, `portfolio-website.png`

### `/profile/`
- Photos de profil et images personnelles  
- Avatar, photo professionnelle, etc.
- Format recommandé : JPG/PNG
- Taille recommandée : 400x400px (carré)

### `/technologies/`
- Logos et icônes des technologies
- SVG de préférence pour la qualité
- Taille recommandée : 64x64px ou 128x128px

### `/general/`
- Images générales du site
- Arrière-plans, illustrations, etc.

## 🔧 Utilisation dans le code :

```jsx
import Image from 'next/image';

// Pour un projet
<Image 
  src="/images/projects/mon-projet.jpg" 
  alt="Description du projet"
  width={600}
  height={400}
/>

// Pour un profil
<Image 
  src="/images/profile/avatar.jpg"
  alt="Photo de profil"
  width={200}
  height={200}
/>
```

## 📝 Bonnes pratiques :

1. **Noms descriptifs** : `defi-protocol.jpg` plutôt que `image1.jpg`
2. **Formats optimisés** : WebP > JPG > PNG
3. **Tailles appropriées** : Pas trop grandes pour les performances
4. **Alt text** : Toujours renseigner l'attribut `alt`
