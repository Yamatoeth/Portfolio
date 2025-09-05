// This script will update the translations for the Tech & Tools section in all languages

const fs = require('fs');
const path = require('path');

// Path to the i18n.js file
const i18nPath = path.join(__dirname, '../lib/i18n.js');

// Read the current content
let content = fs.readFileSync(i18nPath, 'utf8');

// Define the new tools section structure
const toolsSection = `
    // Tech & Tools Section
    tools: {
      title: "Tech & Tools",
      subtitle: "Tools and platforms I'm familiar with",
      categories: {
        development: {
          title: "Development & Integration",
          description: "Tools for web development and integration",
          tools: ["Shopify", "WordPress", "Webflow", "Framer", "Vercel", "Netlify"]
        },
        design: {
          title: "Design & Visual",
          description: "Creative and visual editing tools",
          tools: ["Figma", "Adobe XD", "Canva", "CapCut", "Kapwing", "Runway"]
        },
        productivity: {
          title: "Productivity & Collaboration",
          description: "Tools for efficient work",
          tools: ["Notion", "Slack", "Discord", "Supabase", "n8n", "Make"]
        },
        web3: {
          title: "Web3 & Analytics",
          description: "Blockchain ecosystem tools",
          tools: ["ThirdWeb", "HardHat", "Dune Analytics", "Etherscan", "OpenZeppelin"]
        }
      }
    },`;

// Update translations for each language
const languages = [
  { code: 'fr', name: 'French' },
  { code: 'en', name: 'English' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'th', name: 'Thai' },
  { code: 'vi', name: 'Vietnamese' }
];

// For each language, find and update the tools section
languages.forEach(lang => {
  const pattern = new RegExp(`// Tech & Tools Section[\s\S]*?},`, 'g');
  content = content.replace(pattern, toolsSection);
});

// Write the updated content back to the file
fs.writeFileSync(i18nPath, content, 'utf8');

console.log('Successfully updated translations for all languages!');
