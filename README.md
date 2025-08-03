# Portfolio - Développeur Web Full Stack

Un portfolio moderne et responsive développé avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- ✅ **Design responsive** adapté à tous les appareils
- ✅ **Mode sombre/clair** automatique basé sur les préférences système
- ✅ **Animations fluides** avec Framer Motion
- ✅ **SEO optimisé** avec next-seo
- ✅ **Performance optimisée** avec Next.js 15
- ✅ **Projets dynamiques** avec filtres et recherche
- ✅ **Formulaire de contact** fonctionnel
- ✅ **PWA ready** avec manifest.json

## 🛠️ Technologies utilisées

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **SEO**: next-seo
- **Déploiement**: Vercel
- **Language**: TypeScript/JavaScript

## 📁 Structure du projet

```
portfolio/
├── src/app/                  # Pages Next.js (App Router)
├── components/               # Composants réutilisables
│   ├── animations/          # Composants d'animation
│   ├── Layout.jsx           # Layout principal
│   ├── Navbar.jsx           # Navigation
│   ├── Footer.jsx           # Pied de page
│   └── ProjectCard.jsx      # Carte de projet
├── data/                    # Données des projets
├── lib/                     # Configuration SEO
├── public/                  # Assets statiques
│   ├── images/             # Images du portfolio
│   └── icons/              # Icônes et favicons
└── tailwind.config.js      # Configuration Tailwind

```

## 🚀 Installation et démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/votre-username/portfolio.git

# Aller dans le dossier
cd portfolio

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 📋 Scripts disponibles

```bash
npm run dev          # Mode développement
npm run build        # Build de production
npm run start        # Démarrer la version de production
npm run lint         # Linter le code
```

## 🎨 Personnalisation

### 1. Informations personnelles
Modifiez les fichiers suivants avec vos informations :
- `lib/seo.js` - Configuration SEO et métadonnées
- `data/projects.js` - Vos projets
- `components/Navbar.jsx` - Liens de navigation
- `components/Footer.jsx` - Informations de contact

### 2. Couleurs et thème
Personnalisez les couleurs dans :
- `src/app/globals.css` - Variables CSS
- `tailwind.config.js` - Configuration Tailwind

### 3. Images et médias
Ajoutez vos images dans :
- `public/images/` - Images des projets et og-image
- `public/icons/` - Favicons et icônes PWA

## 📱 SEO et métadonnées

Le portfolio est optimisé pour :
- **Open Graph** pour le partage sur les réseaux sociaux
- **Twitter Cards** pour Twitter
- **Schema.org** pour les moteurs de recherche
- **Favicon** et icônes PWA
- **Manifest.json** pour l'installation comme app

## 🚀 Déploiement sur Vercel

### Déploiement automatique
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Le déploiement se fera automatiquement

### Déploiement manuel
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Variables d'environnement
Si vous utilisez des APIs externes, ajoutez vos variables dans Vercel :
- Dashboard Vercel > Projet > Settings > Environment Variables

## 📊 Performance

Le portfolio est optimisé pour :
- ⚡ **Core Web Vitals** excellents
- 🏎️ **Lighthouse Score** 90+
- 📱 **Mobile-first** design
- 🖼️ **Images optimisées** avec next/image
- 🗜️ **Bundle size** minimal

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et le modifier selon vos besoins.

## 📞 Contact

- Email: contact@example.com
- LinkedIn: [Votre LinkedIn](https://linkedin.com/in/votre-profil)
- GitHub: [Votre GitHub](https://github.com/votre-username)

---

Développé avec ❤️ et Next.js
