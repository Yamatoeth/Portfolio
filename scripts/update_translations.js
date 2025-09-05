const fs = require('fs');
const path = require('path');

// Chemin vers le fichier de traduction
const i18nPath = path.join(__dirname, '../lib/i18n.js');

// Lire le contenu actuel du fichier
let content = fs.readFileSync(i18nPath, 'utf-8');

// Mise à jour des traductions françaises
content = content.replace(
  /tools: \{\s+title: "Technologies & Outils",[\s\S]*?\/\/ Technologies/g,
  `tools: {
      title: "Technologies & Outils",
      subtitle: "Outils et plateformes que je maîtrise",
      categories: {
        development: {
          title: "Développement & Intégration",
          description: "Outils pour le développement et l'intégration web",
          tools: ["Shopify", "WordPress", "Webflow", "Framer", "Vercel", "Netlify"]
        },
        design: {
          title: "Design & Visuel",
          description: "Outils de création et d'édition visuelle",
          tools: ["Figma", "Adobe XD", "Canva", "CapCut", "Kapwing", "Runway"]
        },
        productivity: {
          title: "Productivité & Collaboration",
          description: "Outils pour travailler plus efficacement",
          tools: ["Notion", "Slack", "Discord", "Supabase", "n8n", "Make"]
        },
        web3: {
          title: "Web3 & Analyse",
          description: "Outils pour l'écosystème blockchain",
          tools: ["ThirdWeb", "HardHat", "Dune Analytics", "Etherscan", "OpenZeppelin"]
        }
      }
    },

    // Technologies`
);

// Mise à jour des traductions anglaises
content = content.replace(
  /const en = \{[\s\S]*?tools: \{[\s\S]*?\/\/ Technologies/g,
  `const en = {
  translation: {
    // Navigation
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact"
    },
    
    // Home page
    home: {
      title: "Developer",
      titleHighlight: "Web3",
      subtitle: "Hi, I'm Yamato. Nice to meet you.\nI design clean, effective landing pages and work on small web3 projects.\nCurious by nature, I like keeping things simple and always aim to get better at what I do.",
      viewProjects: "View my projects",
      contactMe: "Contact me",
      codeCreate: "Code & Create",
      techTitle: "Technologies I work with",
      featuredTitle: "Featured Projects",
      featuredSubtitle: "Discover some of my work",
      viewAllProjects: "View all projects",
      ctaTitle: "Ready to bring your project to life?",
      ctaSubtitle: "Let's collaborate to create something extraordinary",
      ctaButton: "Let's talk",
      skills: {
        designer: {
          title: "Designer",
          description: "I value simple content structure, clean design patterns, and thoughtful interactions.",
          thingsTitle: "Things I enjoy designing:",
          things: "UX, UI, Web, Apps, Logos",
          toolsTitle: "Design Tools:"
        },
        developer: {
          title: "Frontend Developer",
          description: "I like to code from scratch and enjoy bringing ideas to life in the browser.",
          languagesTitle: "Languages I speak:",
          languages: "HTML, CSS, Sass, JavaScript, React",
          toolsTitle: "Dev Tools:"
        },
        web3: {
          title: "Web3 Enthusiast",
          description: "Passionate about blockchain and decentralized technologies, I create modern interfaces for the Web3 ecosystem.",
          experienceTitle: "Experiences I'm exploring:",
          experience: "DeFi, NFTs, Smart Contracts, dApps",
          toolsTitle: "Web3 Tools:"
        }
      }
    },
    
    // Projects page
    projects: {
      title: "My Projects",
      subtitle: "Discover my work, from WordPress sites to innovative DeFi protocols. From classic web development to decentralized applications with integrated AI.",
      filters: {
        all: "🗂️ All projects",
        featured: "⭐ Featured projects",
        web3: "🔗 Web3 & Blockchain",
        web: "💻 Web Applications",
        wordpress: "🌐 Showcase Sites"
      },
      noResults: "No projects found",
      noResultsDesc: "No projects match the selected criteria.",
      viewAll: "View all projects",
      search: {
        placeholder: "Search by name or technology...",
        clear: "Clear search",
        searching: "Searching"
      },
      stats: {
        title: "My Project Statistics",
        projects: "Projects completed",
        technologies: "Technologies mastered",
        clients: "Satisfied clients",
        experience: "Years of experience"
      },
      cta: {
        title: "Interested in my work?",
        subtitle: "Let's discuss your next project",
        button: "Contact me"
      },
      buttons: {
        code: "Code",
        demo: "Demo",
        etherscan: "Etherscan"
      },
      featured: "Featured project",
      featuredSection: {
        title: "Featured Projects",
        subtitle: "Here are some design projects I've worked on. Want to see more?",
        emailLink: "Contact me.",
        viewProject: "View project",
        github: "Source code",
        viewWebsite: "View website",
        viewGithub: "View on Github"
      },
      viewWebsite: "View website",
      viewGithub: "View on Github"
    },
    
    // Contact page
    contact: {
      title: "Contact Me",
      subtitle: "Let's discuss your next project together",
      infoTitle: "Contact Information",
      availability: "Availability",
      availabilityText: "I'm currently available for new projects. Don't hesitate to contact me to discuss your needs!",
      formTitle: "Send me a message",
      form: {
        name: "Full name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        subject: "Subject",
        subjectPlaceholder: "Message subject",
        message: "Message",
        messagePlaceholder: "Tell me about your project or request...",
        submit: "Send message",
        sending: "Sending...",
        success: "Message sent successfully!",
        successDesc: "Thank you for your message. I'll get back to you as soon as possible.",
        error: "Error sending message",
        errorDesc: "An error occurred. Please try again later."
      }
    },

    // Testimonials
    testimonials: {
      title: "What My Clients Say",
      subtitle: "Discover feedback from clients who have used my services"
    },
    
    // Footer
    footer: {
      startProject: {
        title: "Start a project",
        subtitle: "Interested in collaborating? Let's create something together.",
        button: "Let's talk"
      },
      mainFooter: {
        description: "Web3 Developer passionate about modern web technologies and decentralized innovation.",
        signature: "Yamato 2025 ✦",
        social: "Find me on"
      },
      description: "Full Stack Developer passionate about modern web technologies and innovation.",
      quickLinks: "Quick links",
      connect: "Follow me",
      rights: "All rights reserved."
    },
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
    },

    // Technologies`
);

// Écrire les modifications dans le fichier
fs.writeFileSync(i18nPath, content, 'utf-8');

console.log('Traductions mises à jour avec succès !');
