const fs = require('fs');
const path = require('path');
const { toolsTranslations } = require('./translations_config');

// Chemin vers le fichier de traduction
const i18nPath = path.join(__dirname, '../lib/i18n.js');

// Lire le contenu actuel du fichier
let content = fs.readFileSync(i18nPath, 'utf-8');

// Récupérer la traduction pour le japonais
const jaTranslation = toolsTranslations.ja;

// Créer la section des outils en japonais
const jaToolsSection = `    // Tech & Tools Section
    tools: {
      title: "${jaTranslation.title}",
      subtitle: "${jaTranslation.subtitle}",
      categories: {
        development: {
          title: "${jaTranslation.categories.development.title}",
          description: "${jaTranslation.categories.development.description}",
          tools: ["Shopify", "WordPress", "Webflow", "Framer", "Vercel", "Netlify"]
        },
        design: {
          title: "${jaTranslation.categories.design.title}",
          description: "${jaTranslation.categories.design.description}",
          tools: ["Figma", "Adobe XD", "Canva", "CapCut", "Kapwing", "Runway"]
        },
        productivity: {
          title: "${jaTranslation.categories.productivity.title}",
          description: "${jaTranslation.categories.productivity.description}",
          tools: ["Notion", "Slack", "Discord", "Supabase", "n8n", "Make"]
        },
        web3: {
          title: "${jaTranslation.categories.web3.title}",
          description: "${jaTranslation.categories.web3.description}",
          tools: ["ThirdWeb", "HardHat", "Dune Analytics", "Etherscan", "OpenZeppelin"]
        }
      }
    },`;

// Remplacer la section des outils en japonais
const updatedContent = content.replace(
  /(const ja = \{[\s\S]*?)(\/\/ Tech & Tools Section[\s\S]*?)(\/\/ Technologies)/g,
  `$1${jaToolsSection}\n\n    // Technologies`
);

// Écrire les modifications dans le fichier
fs.writeFileSync(i18nPath, updatedContent, 'utf-8');

console.log('Traduction des outils en japonais mise à jour avec succès !');
