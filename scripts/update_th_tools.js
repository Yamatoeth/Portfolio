const fs = require('fs');
const path = require('path');
const { toolsTranslations } = require('./translations_config');

// Chemin vers le fichier de traduction
const i18nPath = path.join(__dirname, '../lib/i18n.js');

// Lire le contenu actuel du fichier
let content = fs.readFileSync(i18nPath, 'utf-8');

// Récupérer la traduction pour le thaï
const thTranslation = toolsTranslations.th;

// Créer la section des outils en thaï
const thToolsSection = `    // Tech & Tools Section
    tools: {
      title: "${thTranslation.title}",
      subtitle: "${thTranslation.subtitle}",
      categories: {
        development: {
          title: "${thTranslation.categories.development.title}",
          description: "${thTranslation.categories.development.description}",
          tools: ["Shopify", "WordPress", "Webflow", "Framer", "Vercel", "Netlify"]
        },
        design: {
          title: "${thTranslation.categories.design.title}",
          description: "${thTranslation.categories.design.description}",
          tools: ["Figma", "Adobe XD", "Canva", "CapCut", "Kapwing", "Runway"]
        },
        productivity: {
          title: "${thTranslation.categories.productivity.title}",
          description: "${thTranslation.categories.productivity.description}",
          tools: ["Notion", "Slack", "Discord", "Supabase", "n8n", "Make"]
        },
        web3: {
          title: "${thTranslation.categories.web3.title}",
          description: "${thTranslation.categories.web3.description}",
          tools: ["ThirdWeb", "HardHat", "Dune Analytics", "Etherscan", "OpenZeppelin"]
        }
      }
    },`;

// Remplacer la section des outils en thaï
const updatedContent = content.replace(
  /(const th = \{[\s\S]*?)(\/\/ Tech & Tools Section[\s\S]*?)(\/\/ Technologies)/g,
  `$1${thToolsSection}\n\n    // Technologies`
);

// Écrire les modifications dans le fichier
fs.writeFileSync(i18nPath, updatedContent, 'utf-8');

console.log('Traduction des outils en thaï mise à jour avec succès !');
