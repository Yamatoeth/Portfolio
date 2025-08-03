# Guide de déploiement sur Vercel

## 🚀 Déploiement automatique (Recommandé)

### 1. Préparer le code
```bash
# Vérifier que le build fonctionne
npm run build

# Ajouter et commiter les changements
git add .
git commit -m "Portfolio prêt pour le déploiement"
git push
```

### 2. Connecter à Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez sur "New Project"
4. Sélectionnez votre repository GitHub
5. Vercel détectera automatiquement Next.js
6. Cliquez sur "Deploy"

### 3. Configuration automatique
Vercel configurera automatiquement :
- ✅ Build Command: `npm run build`
- ✅ Install Command: `npm install`
- ✅ Framework: Next.js
- ✅ Output Directory: `.next`

## 🔧 Déploiement manuel (CLI)

### 1. Installer Vercel CLI
```bash
npm i -g vercel
```

### 2. Login et déployer
```bash
# Se connecter à Vercel
vercel login

# Premier déploiement (preview)
vercel

# Déploiement en production
vercel --prod
```

## ⚙️ Variables d'environnement (si nécessaire)

Si vous ajoutez des APIs externes plus tard, configurez dans Vercel :
1. Dashboard Vercel > Votre projet > Settings > Environment Variables
2. Ajoutez vos variables (ex: `NEXT_PUBLIC_API_URL`)

## 🎯 Optimisations incluses

### SEO
- ✅ next-seo configuré
- ✅ Open Graph pour réseaux sociaux
- ✅ Schema.org structured data
- ✅ Meta tags optimisés

### Performance
- ✅ Images optimisées avec next/image
- ✅ Bundle splitting automatique
- ✅ Static generation (SSG)
- ✅ Code splitting

### Sécurité
- ✅ Headers de sécurité (vercel.json)
- ✅ HTTPS automatique
- ✅ Protection XSS

## 📱 PWA Ready

Le portfolio peut être installé comme app :
- ✅ manifest.json configuré
- ✅ Icônes pour tous les appareils
- ✅ Responsive design

## 🔄 Déploiement continu

Après le premier déploiement :
- Chaque push sur main → déploiement automatique
- Pull requests → preview automatique
- Rollback facile depuis le dashboard

## 📊 Monitoring

Vercel Analytics inclus :
- Core Web Vitals
- Traffic analytics
- Error monitoring
- Performance insights

## 🌐 Domaine personnalisé

Pour ajouter votre domaine :
1. Dashboard Vercel > Votre projet > Settings > Domains
2. Ajouter votre domaine
3. Configurer les DNS selon les instructions

## ✅ Checklist finale

Avant le déploiement, vérifiez :
- [ ] `npm run build` fonctionne sans erreur
- [ ] Toutes les images sont dans `public/`
- [ ] Les métadonnées SEO sont personnalisées
- [ ] Les liens sociaux sont mis à jour
- [ ] L'email de contact est correct
- [ ] Les projets sont ajoutés dans `data/projects.js`

🎉 **Votre portfolio est prêt pour le déploiement !**
