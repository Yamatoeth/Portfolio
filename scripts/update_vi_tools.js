const fs = require('fs');
const path = require('path');
const { toolsTranslations } = require('./translations_config');

// Chemin vers le fichier de traduction
const i18nPath = path.join(__dirname, '../lib/i18n.js');

// Lire le contenu actuel du fichier
let content = fs.readFileSync(i18nPath, 'utf-8');

// Récupérer la traduction pour le vietnamien
const viTranslation = toolsTranslations.vi;

// Créer la section des outils en vietnamien
const viToolsSection = `    // Tech & Tools Section
    tools: {
      title: "${viTranslation.title}",
      subtitle: "${viTranslation.subtitle}",
      categories: {
        development: {
          title: "${viTranslation.categories.development.title}",
          description: "${viTranslation.categories.development.description}",
          tools: ["Shopify", "WordPress", "Webflow", "Framer", "Vercel", "Netlify"]
        },
        design: {
          title: "${viTranslation.categories.design.title}",
          description: "${viTranslation.categories.design.description}",
          tools: ["Figma", "Adobe XD", "Canva", "CapCut", "Kapwing", "Runway"]
        },
        productivity: {
          title: "${viTranslation.categories.productivity.title}",
          description: "${viTranslation.categories.productivity.description}",
          tools: ["Notion", "Slack", "Discord", "Supabase", "n8n", "Make"]
        },
        web3: {
          title: "${viTranslation.categories.web3.title}",
          description: "${viTranslation.categories.web3.description}",
          tools: ["ThirdWeb", "HardHat", "Dune Analytics", "Etherscan", "OpenZeppelin"]
        }
      }
    },`;

// Remplacer la section des outils en vietnamien
const updatedContent = content.replace(
  /(const vi = \{[\s\S]*?)(\/\/ Tech & Tools Section[\s\S]*?)(\/\/ Technologies)/g,
  `$1${viToolsSection}\n\n    // Technologies`
);

// Écrire les modifications dans le fichier
fs.writeFileSync(i18nPath, updatedContent, 'utf-8');

console.log('Traduction des outils en vietnamien mise à jour avec succès !');
