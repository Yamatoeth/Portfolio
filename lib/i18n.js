import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traductions françaises
const fr = {
  translation: {
    // Navigation
    nav: {
      home: "Accueil",
      projects: "Projets",
      contact: "Contact"
    },
    
    // Page d'accueil
    home: {
      title: "Développeur",
      titleHighlight: "Web3",
      subtitle: "Hi, I'm Yamato. Nice to meet you.\nI design clean, effective landing pages and work on small web3 projects.\nCurious by nature, I like keeping things simple and always aim to get better at what I do.",
      viewProjects: "Voir mes projets",
      contactMe: "Me contacter",
      codeCreate: "Code & Create",
      techTitle: "Technologies maîtrisées",
      featuredTitle: "Projets vedettes",
      featuredSubtitle: "Découvrez quelques-unes de mes réalisations",
      viewAllProjects: "Voir tous les projets",
      ctaTitle: "Prêt à donner vie à votre projet ?",
      ctaSubtitle: "Collaborons ensemble pour créer quelque chose d'extraordinaire",
      ctaButton: "Commençons à discuter",
      // Nouvelle section inspirée du design
      skills: {
        designer: {
          title: "Designer",
          description: "Je valorise une structure de contenu simple, des modèles de design épurés et des interactions réfléchies.",
          thingsTitle: "Ce que j'aime designer :",
          things: "UX, UI, Web, Apps, Logos",
          toolsTitle: "Outils de design :"
        },
        developer: {
          title: "Frontend Developer", 
          description: "J'aime coder des projets from scratch et prendre plaisir à donner vie aux idées dans le navigateur.",
          languagesTitle: "Langages que je parle :",
          languages: "HTML, CSS, Sass, JavaScript, React",
          toolsTitle: "Outils de dev :"
        },
        web3: {
          title: "Web3 Enthusiast",
          description: "Passionné par la blockchain et les technologies décentralisées, je crée des interfaces modernes pour l'écosystème Web3.",
          experienceTitle: "Expériences que j'explore :",
          experience: "DeFi, NFTs, Smart Contracts, dApps",
          toolsTitle: "Technologies Web3 :"
        }
      }
    },
    
    // Page projets
    projects: {
      title: "Mes Projets",
      subtitle: "Découvrez mes réalisations, des sites WordPress aux protocoles DeFi innovants. Du développement Web classique aux applications décentralisées avec IA intégrée.",
      filters: {
        all: "🗂️ Tous les projets",
        featured: "⭐ Projets vedettes",
        web3: "🔗 Web3 & Blockchain",
        web: "💻 Applications Web",
        wordpress: "🌐 Sites Vitrine"
      },
      noResults: "Aucun projet trouvé",
      noResultsDesc: "Aucun projet ne correspond aux critères sélectionnés.",
      viewAll: "Voir tous les projets",
      search: {
        placeholder: "Rechercher par nom ou technologie...",
        clear: "Effacer la recherche",
        searching: "Recherche"
      },
      stats: {
        title: "Statistiques de mes projets",
        projects: "Projets réalisés",
        technologies: "Technologies maîtrisées",
        clients: "Clients satisfaits",
        experience: "Années d'expérience"
      },
      cta: {
        title: "Intéressé par mon travail ?",
        subtitle: "Discutons de votre prochain projet ensemble",
        button: "Contactez-moi"
      },
      buttons: {
        code: "Code",
        demo: "Demo",
        etherscan: "Etherscan"
      },
      featured: "Projet vedette",
      featuredSection: {
        title: "Projets Vedettes",
        subtitle: "Voici quelques projets de design que j'ai réalisés. Vous voulez en voir plus ?",
        emailLink: "Contactez-moi.",
        viewProject: "Voir le projet",
        github: "Code source"
      }
    },
    
    // Page contact
    contact: {
      title: "Contactez-moi",
      subtitle: "Discutons de votre prochain projet ensemble",
      infoTitle: "Informations de contact",
      availability: "Disponibilité",
      availabilityText: "Je suis actuellement disponible pour de nouveaux projets. N'hésitez pas à me contacter pour discuter de vos besoins !",
      formTitle: "Envoyez-moi un message",
      form: {
        name: "Nom complet",
        namePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "votre@email.com",
        subject: "Sujet",
        subjectPlaceholder: "Sujet de votre message",
        message: "Message",
        messagePlaceholder: "Décrivez votre projet ou votre demande...",
        submit: "Envoyer le message",
        sending: "Envoi en cours...",
        success: "Message envoyé avec succès !",
        successDesc: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
        error: "Erreur lors de l'envoi",
        errorDesc: "Une erreur s'est produite. Veuillez réessayer plus tard."
      }
    },

    // Témoignages
    testimonials: {
      title: "Ce que disent mes clients",
      subtitle: "Découvrez les retours de clients satisfaits de mes services"
    },
    
    // Footer
    footer: {
      startProject: {
        title: "Commencer un projet",
        subtitle: "Intéressé par une collaboration ? Créons quelque chose ensemble.",
        button: "Discutons"
      },
      mainFooter: {
        description: "Développeur Web3 passionné par les technologies web modernes et l'innovation décentralisée.",
        signature: "Yamato 2025 ✦",
        social: "Retrouvez-moi sur"
      },
      description: "Développeur Full Stack passionné par les technologies web modernes et l'innovation.",
      quickLinks: "Liens rapides",
      connect: "Me suivre",
      rights: "Tous droits réservés."
    },
    
    // Technologies
    technologies: {
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      react: "React",
      nextjs: "Next.js",
      typescript: "TypeScript",
      nodejs: "Node.js",
      mongodb: "MongoDB",
      tailwind: "Tailwind",
      solidity: "Solidity",
      rust: "Rust",
      ethers: "Ether.js"
    }
  }
};

// Traductions anglaises
const en = {
  translation: {
    // Navigation
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact"
    },
    
    // Home page
    home: {
      title: "Web3",
      titleHighlight: "Developer",
      subtitle: "Hi, I'm Yamato. Nice to meet you.\nI design clean, effective landing pages and work on small web3 projects.\nCurious by nature, I like keeping things simple and always aim to get better at what I do.",
      viewProjects: "View my projects",
      contactMe: "Contact me",
      codeCreate: "Code & Create",
      techTitle: "Mastered Technologies",
      featuredTitle: "Featured Projects",
      featuredSubtitle: "Discover some of my achievements",
      viewAllProjects: "View all projects",
      ctaTitle: "Ready to bring your project to life?",
      ctaSubtitle: "Let's collaborate to create something extraordinary",
      ctaButton: "Let's start talking",
      // New section inspired by the design
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
          description: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
          languagesTitle: "Languages I speak:",
          languages: "HTML, CSS, Sass, JavaScript, React",
          toolsTitle: "Dev Tools:"
        },
        web3: {
          title: "Web3 Enthusiast",
          description: "Passionate about blockchain and decentralized technologies, I create modern interfaces for the Web3 ecosystem.",
          experienceTitle: "Experiences I draw from:",
          experience: "DeFi, NFTs, Smart Contracts, dApps",
          toolsTitle: "Web3 Technologies:"
        }
      }
    },
    
    // Projects page
    projects: {
      title: "My Projects",
      subtitle: "Discover my achievements, from WordPress sites to innovative DeFi protocols. From classic Web development to decentralized applications with integrated AI.",
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
        title: "Project Statistics",
        projects: "Projects completed",
        technologies: "Technologies mastered",
        clients: "Satisfied clients",
        experience: "Years of experience"
      },
      cta: {
        title: "Interested in my work?",
        subtitle: "Let's discuss your next project together",
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
        subtitle: "Here are a few past design projects I've worked on. Want to see more?",
        emailLink: "Email me.",
        viewProject: "View project",
        github: "Source code"
      }
    },
    
    // Contact page
    contact: {
      title: "Contact me",
      subtitle: "Let's discuss your next project together",
      infoTitle: "Contact information",
      availability: "Availability",
      availabilityText: "I am currently available for new projects. Don't hesitate to contact me to discuss your needs!",
      formTitle: "Send me a message",
      form: {
        name: "Full name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        subject: "Subject",
        subjectPlaceholder: "Subject of your message",
        message: "Message",
        messagePlaceholder: "Describe your project or request...",
        submit: "Send message",
        sending: "Sending...",
        success: "Message sent successfully!",
        successDesc: "Thank you for your message. I will get back to you as soon as possible.",
        error: "Error sending message",
        errorDesc: "An error occurred. Please try again later."
      }
    },

    // Testimonials
    testimonials: {
      title: "What my clients say",
      subtitle: "Discover feedback from satisfied clients about my services"
    },
    
    // Footer
    footer: {
      startProject: {
        title: "Start a project",
        subtitle: "Interested in working together? Let's build something amazing together.",
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
    
    // Technologies
    technologies: {
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      react: "React",
      nextjs: "Next.js",
      typescript: "TypeScript",
      nodejs: "Node.js",
      mongodb: "MongoDB",
      tailwind: "Tailwind",
      solidity: "Solidity",
      rust: "Rust",
      ethers: "Ether.js"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr,
      en
    },
    fallbackLng: 'fr',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
