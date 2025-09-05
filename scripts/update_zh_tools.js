const fs = require('fs');
const path = require('path');

// Chemin vers le fichier de traduction
const i18nPath = path.join(__dirname, '../lib/i18n.js');

// Lire le contenu actuel du fichier
let content = fs.readFileSync(i18nPath, 'utf-8');

// Nouvelle section des outils en chinois
const zhToolsSection = `    // Tech & Tools Section
    tools: {
      title: "技术与工具",
      subtitle: "我熟悉的工具和平台",
      categories: {
        development: {
          title: "开发与集成",
          description: "用于网络开发和集成的工具",
          tools: ["Shopify", "WordPress", "Webflow", "Framer", "Vercel", "Netlify"]
        },
        design: {
          title: "设计与视觉",
          description: "创意和视觉编辑工具",
          tools: ["Figma", "Adobe XD", "Canva", "CapCut", "Kapwing", "Runway"]
        },
        productivity: {
          title: "效率与协作",
          description: "提高工作效率的工具",
          tools: ["Notion", "Slack", "Discord", "Supabase", "n8n", "Make"]
        },
        web3: {
          title: "Web3与分析",
          description: "区块链生态系统工具",
          tools: ["ThirdWeb", "HardHat", "Dune Analytics", "Etherscan", "OpenZeppelin"]
        }
      }
    },`;

// Remplacer la section des outils en chinois
const updatedContent = content.replace(
  /(const zh = \{[\s\S]*?)(\/\/ Tech & Tools Section[\s\S]*?)(\/\/ Technologies)/g,
  `$1${zhToolsSection}\n\n    // Technologies`
);

// Écrire les modifications dans le fichier
fs.writeFileSync(i18nPath, updatedContent, 'utf-8');

console.log('Traduction des outils en chinois mise à jour avec succès !');
