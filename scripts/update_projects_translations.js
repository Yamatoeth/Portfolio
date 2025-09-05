const fs = require('fs');
const path = require('path');

// Chemin vers le fichier de traduction
const i18nPath = path.join(__dirname, '../lib/i18n.js');

// Lire le contenu actuel du fichier
let content = fs.readFileSync(i18nPath, 'utf-8');

// Données des projets à ajouter
const projectsData = `
    // Projets
    projects: [
      {
        id: 1,
        title: "WF Design + Build",
        description: "Site web vitrine professionnel pour une agence de design et construction. Architecture moderne et interface utilisateur élégante.",
        client: "WF Design",
        category: "Site vitrine",
        featured: true,
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
        image: "/images/projects/wf.png",
        githubUrl: "https://github.com/yamatoeth/WF",
        liveUrl: "https://yamatoeth.github.io/WF/"
      },
      {
        id: 2,
        title: "Burkett & Co",
        description: "Plateforme web pour cabinet comptable avec gestion clients et services professionnels. Interface moderne et sécurisée.",
        client: "Burkett & Co",
        category: "Application Web",
        featured: true,
        technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
        image: "/images/projects/burkett.png",
        githubUrl: "https://github.com/yamatoeth/Burkett-Co",
        liveUrl: "https://yamatoeth.github.io/Burkett-Co"
      },
      {
        id: 3,
        title: "Chronicled Platform",
        description: "Application blockchain pour la traçabilité et l'authentification de produits. Solution complète avec smart contracts.",
        client: "Chronicled",
        category: "Blockchain",
        featured: true,
        technologies: ["Solidity", "React", "Web3.js", "IPFS"],
        image: "/images/projects/chronicled.svg",
        githubUrl: "https://github.com/yamatoeth/chronicled",
        liveUrl: "https://chronicled-demo.vercel.app",
        etherscanUrl: "https://etherscan.io/address/0x1234567890abcdef"
      }
    ],`;

// Données des témoignages à ajouter
const testimonialsData = `
    // Témoignages
    testimonials: [
      {
        author: "Dr. Marie Dubois",
        role: "Psychologue",
        company: "Cabinet Privé",
        text: "Site web professionnel et moderne qui a transformé ma présence en ligne. Les patients trouvent facilement les informations et prennent rendez-vous plus facilement.",
        rating: 5,
        project: "Site vitrine cabinet psychologie"
      },
      {
        author: "Nguyễn Minh",
        role: "Gérant",
        company: "Boutique Déco Hanoï",
        text: "L'application de gestion de stock a révolutionné notre façon de travailler. Interface intuitive et fonctionnalités parfaitement adaptées à nos besoins.",
        rating: 5,
        project: "App gestion de stock"
      },
      {
        author: "Alex Chen",
        role: "Community Manager",
        company: "Crypto Collective",
        text: "Excellent travail sur le smart contract NFT. Code propre, sécurisé et déploiement sans problème. Recommande vivement pour les projets Web3.",
        rating: 5,
        project: "Smart contract NFT"
      }
    ],`;

// Mettre à jour les traductions pour chaque langue
const languages = ['fr', 'en', 'zh', 'ja', 'ko', 'th', 'vi'];

languages.forEach(lang => {
  // Ajouter les projets
  const projectsRegex = new RegExp(`(const ${lang} = \{[\s\S]*?)(\/\/ Technologies)`, 'g');
  content = content.replace(projectsRegex, `$1${projectsData}\n\n    // Technologies`);
  
  // Ajouter les témoignages
  const testimonialsRegex = new RegExp(`(const ${lang} = \{[\s\S]*?)(\/\/ Témoignages)`, 'g');
  content = content.replace(testimonialsRegex, `$1${testimonialsData}\n\n    // Témoignages`);
});

// Écrire les modifications dans le fichier
fs.writeFileSync(i18nPath, content, 'utf-8');

console.log('Traductions des projets et témoignages mises à jour avec succès !');
