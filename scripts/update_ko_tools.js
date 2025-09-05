const fs = require('fs');
const path = require('path');
const { toolsTranslations } = require('./translations_config');

// Chemin vers le fichier de traduction
const i18nPath = path.join(__dirname, '../lib/i18n.js');

// Lire le contenu actuel du fichier
let content = fs.readFileSync(i18nPath, 'utf-8');

// Récupérer la traduction pour le coréen
const koTranslation = toolsTranslations.ko;

// Créer la section des outils en coréen
const koToolsSection = `    // Tech & Tools Section
    tools: {
      title: "${koTranslation.title}",
      subtitle: "${koTranslation.subtitle}",
      categories: {
        development: {
          title: "${koTranslation.categories.development.title}",
          description: "${koTranslation.categories.development.description}",
          tools: ["Shopify", "WordPress", "Webflow", "Framer", "Vercel", "Netlify"]
        },
        design: {
          title: "${koTranslation.categories.design.title}",
          description: "${koTranslation.categories.design.description}",
          tools: ["Figma", "Adobe XD", "Canva", "CapCut", "Kapwing", "Runway"]
        },
        productivity: {
          title: "${koTranslation.categories.productivity.title}",
          description: "${koTranslation.categories.productivity.description}",
          tools: ["Notion", "Slack", "Discord", "Supabase", "n8n", "Make"]
        },
        web3: {
          title: "${koTranslation.categories.web3.title}",
          description: "${koTranslation.categories.web3.description}",
          tools: ["ThirdWeb", "HardHat", "Dune Analytics", "Etherscan", "OpenZeppelin"]
        }
      }
    },`;

// Remplacer la section des outils en coréen
const updatedContent = content.replace(
  /(const ko = \{[\s\S]*?)(\/\/ Tech & Tools Section[\s\S]*?)(\/\/ Technologies)/g,
  `$1${koToolsSection}\n\n    // Technologies`
);

// Écrire les modifications dans le fichier
fs.writeFileSync(i18nPath, updatedContent, 'utf-8');

console.log('Traduction des outils en coréen mise à jour avec succès !');
