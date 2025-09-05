const fs = require('fs');
const path = require('path');
const { toolsTranslations } = require('./translations_config');

// Chemin vers le fichier de traduction
const i18nPath = path.join(__dirname, '../lib/i18n.js');

// Lire le contenu actuel du fichier
let content = fs.readFileSync(i18nPath, 'utf-8');

// Fonction pour mettre à jour une langue spécifique
function updateLanguageTools(lang, translation) {
  const toolsSection = `    // Tech & Tools Section
    tools: {
      title: "${translation.title}",
      subtitle: "${translation.subtitle}",
      categories: {
        development: {
          title: "${translation.categories.development.title}",
          description: "${translation.categories.development.description}",
          tools: ["Shopify", "WordPress", "Webflow", "Framer", "Vercel", "Netlify"]
        },
        design: {
          title: "${translation.categories.design.title}",
          description: "${translation.categories.design.description}",
          tools: ["Figma", "Adobe XD", "Canva", "CapCut", "Kapwing", "Runway"]
        },
        productivity: {
          title: "${translation.categories.productivity.title}",
          description: "${translation.categories.productivity.description}",
          tools: ["Notion", "Slack", "Discord", "Supabase", "n8n", "Make"]
        },
        web3: {
          title: "${translation.categories.web3.title}",
          description: "${translation.categories.web3.description}",
          tools: ["ThirdWeb", "HardHat", "Dune Analytics", "Etherscan", "OpenZeppelin"]
        }
      }
    },`;

  // Mettre à jour le contenu pour cette langue
  const regex = new RegExp(`(const ${lang} = \{[\s\S]*?)(\/\/ Tech & Tools Section[\s\S]*?)(\/\/ Technologies)`, 'g');
  content = content.replace(regex, `$1${toolsSection}\n\n    // Technologies`);
}

// Mettre à jour les traductions pour chaque langue (sauf zh qui est déjà fait)
const languagesToUpdate = ['ja', 'ko', 'th', 'vi'];
languagesToUpdate.forEach(lang => {
  if (toolsTranslations[lang]) {
    updateLanguageTools(lang, toolsTranslations[lang]);
    console.log(`Traduction des outils en ${lang} mise à jour avec succès !`);
  }
});

// Écrire les modifications dans le fichier
fs.writeFileSync(i18nPath, content, 'utf-8');

console.log('Toutes les traductions des outils ont été mises à jour avec succès !');
