const fs = require('fs');
const path = require('path');
const { toolsTranslations } = require('./translations_config');

// Chemin vers le fichier de traduction
const i18nPath = path.join(__dirname, '../lib/i18n.js');

// Lire le contenu actuel du fichier
let content = fs.readFileSync(i18nPath, 'utf-8');

// Fonction pour générer le contenu de la section tools pour une langue donnée
function generateToolsSection(lang) {
  const t = toolsTranslations[lang];
  if (!t) return null;

  return `    tools: {
      title: "${t.title}",
      subtitle: "${t.subtitle}",
      categories: {
        development: {
          title: "${t.categories.development.title}",
          description: "${t.categories.development.description}",
          tools: ["Shopify", "WordPress", "Webflow", "Framer", "Vercel", "Netlify"]
        },
        design: {
          title: "${t.categories.design.title}",
          description: "${t.categories.design.description}",
          tools: ["Figma", "Adobe XD", "Canva", "CapCut", "Kapwing", "Runway"]
        },
        productivity: {
          title: "${t.categories.productivity.title}",
          description: "${t.categories.productivity.description}",
          tools: ["Notion", "Slack", "Discord", "Supabase", "n8n", "Make"]
        },
        web3: {
          title: "${t.categories.web3.title}",
          description: "${t.categories.web3.description}",
          tools: ["ThirdWeb", "HardHat", "Dune Analytics", "Etherscan", "OpenZeppelin"]
        }
      }
    },`;
}

// Mettre à jour les traductions pour chaque langue
Object.keys(toolsTranslations).forEach(lang => {
  // Créer une expression régulière plus précise pour trouver la section tools
  const sectionRegex = new RegExp(`(const ${lang} = \{[\s\S]*?)(tools: \{[\s\S]*?\n\s*\/\/ Technologies)`, 'g');
  const toolsSection = generateToolsSection(lang);
  
  if (toolsSection) {
    // Remplacer uniquement la section tools
    content = content.replace(sectionRegex, `$1${toolsSection}\n\n    // Technologies`);
  }
});

// Écrire les modifications dans le fichier
fs.writeFileSync(i18nPath, content, 'utf-8');

console.log('Traductions des outils mises à jour avec succès !');
