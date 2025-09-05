const fs = require('fs');
const path = require('path');
const { toolsTranslations } = require('./translations_config');

// Chemin vers le fichier de traduction
const i18nPath = path.join(__dirname, '../lib/i18n.js');
const outputPath = path.join(__dirname, '../lib/i18n.updated.js');

// Lire le contenu actuel du fichier
let content = fs.readFileSync(i18nPath, 'utf-8');

// Mettre à jour les traductions pour chaque langue
Object.keys(toolsTranslations).forEach(lang => {
  const t = toolsTranslations[lang];
  
  // Créer le contenu de la section tools
  const toolsSection = `    // Tech & Tools Section
    tools: {
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
  
  // Créer une expression régulière pour trouver la section tools de cette langue
  const regex = new RegExp(`(const ${lang} = \{[\s\S]*?)(// Tech & Tools Section[\s\S]*?)(\/\/ Technologies)`, 'g');
  
  // Remplacer la section tools
  content = content.replace(regex, `$1${toolsSection}\n\n    // Technologies`);
});

// Écrire le contenu mis à jour dans un nouveau fichier
fs.writeFileSync(outputPath, content, 'utf-8');

console.log(`Fichier mis à jour généré : ${outputPath}`);
console.log('Veuillez vérifier le fichier généré avant de le déplacer vers lib/i18n.js');
