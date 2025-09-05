import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traductions françaises
const fr = {
  translation: {
    // Navigation
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      contact: 'Contact',
    },

    // Page d'accueil
    home: {
      title: 'Développeur',
      titleHighlight: 'Web3',
      subtitle:
        "Bonjour, je suis Yamato. Enchanté de vous rencontrer.\nJe conçois des pages d'accueil propres et efficaces et je travaille sur des projets web3.\nCurieux de nature, j'aime garder les choses simples et m'améliore constamment dans ce que je fais.",
      viewProjects: 'Voir mes projets',
      contactMe: 'Me contacter',
      codeCreate: 'Code & Create',
      techTitle: 'Technologies maîtrisées',
      featuredTitle: 'Projets vedettes',
      featuredSubtitle: 'Découvrez quelques-unes de mes réalisations',
      viewAllProjects: 'Voir tous les projets',
      ctaTitle: 'Prêt à donner vie à votre projet ?',
      ctaSubtitle: "Collaborons ensemble pour créer quelque chose d'extraordinaire",
      ctaButton: 'Commençons à discuter',
      // Nouvelle section inspirée du design
      skills: {
        designer: {
          title: 'Designer',
          description:
            'Je valorise une structure de contenu simple, des modèles de design épurés et des interactions réfléchies.',
          thingsTitle: "Ce que j'aime designer :",
          things: 'UX, UI, Web, Apps, Logos',
          toolsTitle: 'Outils de design :',
        },
        developer: {
          title: 'Frontend Developer',
          description:
            "J'aime coder des projets from scratch et prendre plaisir à donner vie aux idées dans le navigateur.",
          languagesTitle: 'Langages que je parle :',
          languages: 'HTML, CSS, Sass, JavaScript, React',
          toolsTitle: 'Outils de dev :',
        },
        web3: {
          title: 'Web3 Enthusiast',
          description:
            "Passionné par la blockchain et les technologies décentralisées, je crée des interfaces modernes pour l'écosystème Web3.",
          experienceTitle: "Expériences que j'explore :",
          experience: 'DeFi, NFTs, Smart Contracts, dApps',
          toolsTitle: 'Technologies Web3 :',
        },
      },
    },

    // Page projets
    projects: {
      title: 'Mes Projets',
      subtitle:
        'Découvrez mes réalisations, des sites WordPress aux protocoles DeFi innovants. Du développement Web classique aux applications décentralisées avec IA intégrée.',
      filters: {
        all: '🗂️ Tous les projets',
        featured: '⭐ Projets vedettes',
        web3: '🔗 Web3 & Blockchain',
        web: '💻 Applications Web',
        wordpress: '🌐 Sites Vitrine',
      },
      noResults: 'Aucun projet trouvé',
      noResultsDesc: 'Aucun projet ne correspond aux critères sélectionnés.',
      viewAll: 'Voir tous les projets',
      search: {
        placeholder: 'Rechercher par nom ou technologie...',
        clear: 'Effacer la recherche',
        searching: 'Recherche',
      },
      stats: {
        title: 'Statistiques de mes projets',
        projects: 'Projets réalisés',
        technologies: 'Technologies maîtrisées',
        clients: 'Clients satisfaits',
        experience: "Années d'expérience",
      },
      cta: {
        title: 'Intéressé par mon travail ?',
        subtitle: 'Discutons de votre prochain projet ensemble',
        button: 'Contactez-moi',
      },
      buttons: {
        code: 'Code',
        demo: 'Demo',
        etherscan: 'Etherscan',
      },
      featured: 'Projet vedette',
      featuredSection: {
        title: 'Projets Vedettes',
        subtitle: "Voici quelques projets de design que j'ai réalisés. Vous voulez en voir plus ?",
        emailLink: 'Contactez-moi.',
        viewProject: 'Voir le projet',
        github: 'Code source',
        viewWebsite: 'Voir le site web',
        viewGithub: 'Voir Github',
      },
      viewWebsite: 'Voir le site web',
      viewGithub: 'Voir Github',
    },

    // Page contact
    contact: {
      title: 'Contactez-moi',
      subtitle: 'Discutons de votre prochain projet ensemble',
      infoTitle: 'Informations de contact',
      availability: 'Disponibilité',
      availabilityText:
        "Je suis actuellement disponible pour de nouveaux projets. N'hésitez pas à me contacter pour discuter de vos besoins !",
      formTitle: 'Envoyez-moi un message',
      form: {
        name: 'Nom complet',
        namePlaceholder: 'Votre nom',
        email: 'Email',
        emailPlaceholder: 'votre@email.com',
        subject: 'Sujet',
        subjectPlaceholder: 'Sujet de votre message',
        message: 'Message',
        messagePlaceholder: 'Décrivez votre projet ou votre demande...',
        submit: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès !',
        successDesc: 'Merci pour votre message. Je vous répondrai dans les plus brefs délais.',
        error: "Erreur lors de l'envoi",
        errorDesc: "Une erreur s'est produite. Veuillez réessayer plus tard.",
      },
    },

    // Témoignages
    testimonials: {
      title: 'Ce que disent mes clients',
      subtitle: 'Découvrez les retours de clients satisfaits de mes services',
    },

    // Footer
    footer: {
      startProject: {
        title: 'Commencer un projet',
        subtitle: 'Intéressé par une collaboration ? Créons quelque chose ensemble.',
        button: 'Discutons',
      },
      mainFooter: {
        description:
          "Développeur Web3 passionné par les technologies web modernes et l'innovation décentralisée.",
        signature: 'Yamato 2025 ✦',
        social: 'Retrouvez-moi sur',
      },
      description:
        "Développeur Full Stack passionné par les technologies web modernes et l'innovation.",
      quickLinks: 'Liens rapides',
      connect: 'Me suivre',
      rights: 'Tous droits réservés.',
    },

    // Tech & Tools Section
    tools: {
      title: 'Technologies & Outils',
      subtitle: 'Outils et plateformes que je maîtrise',
      categories: {
        development: {
          title: 'Développement & Intégration',
          description: "Outils pour le développement et l'intégration web",
          tools: ['Shopify', 'WordPress', 'Webflow', 'Framer', 'Vercel', 'Netlify'],
        },
        design: {
          title: 'Design & Visuel',
          description: "Outils de création et d'édition visuelle",
          tools: ['Figma', 'Adobe XD', 'Canva', 'CapCut', 'Kapwing', 'Runway'],
        },
        productivity: {
          title: 'Productivité & Collaboration',
          description: 'Outils pour travailler plus efficacement',
          tools: ['Notion', 'Slack', 'Discord', 'Supabase', 'n8n', 'Make'],
        },
        web3: {
          title: 'Web3 & Analyse',
          description: "Outils pour l'écosystème blockchain",
          tools: ['ThirdWeb', 'HardHat', 'Dune Analytics', 'Etherscan', 'OpenZeppelin'],
        },
      },
    },

    // Technologies
    technologies: {
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      react: 'React',
      nextjs: 'Next.js',
      typescript: 'TypeScript',
      nodejs: 'Node.js',
      mongodb: 'MongoDB',
      tailwind: 'Tailwind',
      webflow: 'Webflow',
      solidity: 'Solidity',
      rust: 'Rust',
      ethers: 'Ether.js',
    },
  },
};

// Traductions chinoises
const zh = {
  translation: {
    // Navigation
    nav: {
      home: '首页',
      projects: '项目',
      contact: '联系',
    },
    buttons: {
      code: '代码',
      demo: '演示',
      etherscan: 'Etherscan',
    },
    featured: '精选项目',
    featuredSection: {
      title: '精选项目',
      subtitle: '以下是我参与的一些设计项目。想了解更多吗？',
      emailLink: '联系我',
      viewProject: '查看项目',
      github: '源代码',
      viewWebsite: '访问网站',
      viewGithub: '查看Github',
    },
    viewWebsite: '访问网站',
    viewGithub: '查看Github',

    // Page d'accueil
    home: {
      title: 'Web3',
      titleHighlight: '开发者',
      subtitle:
        '你好，我是Yamato。很高兴认识你。\n我设计简洁有效的落地页，并从事小型Web3项目。\n我天生好奇，喜欢保持简单，始终致力于提升自己。',
      viewProjects: '查看我的项目',
      contactMe: '联系我',
      codeCreate: '代码与创作',
      techTitle: '掌握的技术',
      featuredTitle: '精选项目',
      featuredSubtitle: '探索我的一些作品',
      viewAllProjects: '查看所有项目',
      ctaTitle: '准备好启动您的项目了吗？',
      ctaSubtitle: '让我们一起创造非凡的东西',
      ctaButton: '开始交流',
      skills: {
        designer: {
          title: '设计师',
          description: '我重视简单的内容结构、干净的设计模式和经过深思熟虑的交互。',
          thingsTitle: '我喜欢设计：',
          things: '用户体验, 用户界面, 网页, 应用, 标志',
          toolsTitle: '设计工具：',
        },
        developer: {
          title: '前端开发者',
          description: '我喜欢从零开始编写项目，并享受在浏览器中实现创意的过程。',
          languagesTitle: '我使用的语言：',
          languages: 'HTML, CSS, Sass, JavaScript, React',
          toolsTitle: '开发工具：',
        },
        web3: {
          title: 'Web3爱好者',
          description: '对区块链和去中心化技术充满热情，我为Web3生态系统创建现代界面。',
          experienceTitle: '我探索的领域：',
          experience: '去中心化金融, 非同质化代币, 智能合约, 去中心化应用',
          toolsTitle: 'Web3工具：',
        },
      },
    },

    // Témoignages
    testimonials: {
      title: '客户评价',
      subtitle: '听听我的客户怎么说',
    },

    // Footer
    footer: {
      startProject: {
        title: '启动项目',
        subtitle: '有兴趣一起工作吗？让我们一起创造令人惊叹的东西。',
        button: '开始交流',
      },
      rights: '© 2023 保留所有权利。',
      madeWith: '用 Next.js 和 Tailwind CSS 构建',
    },
    // Tech & Tools Section
    tools: {
      title: '技术与工具',
      subtitle: '我熟悉的工具和平台',
      categories: {
        development: {
          title: '开发与集成',
          description: '用于网络开发和集成的工具',
          tools: ['Shopify', 'WordPress', 'Webflow', 'Framer', 'Vercel', 'Netlify'],
        },
        design: {
          title: '设计与视觉',
          description: '创意和视觉编辑工具',
          tools: ['Figma', 'Adobe XD', 'Canva', 'CapCut', 'Kapwing', 'Runway'],
        },
        productivity: {
          title: '效率与协作',
          description: '提高工作效率的工具',
          tools: ['Notion', 'Slack', 'Discord', 'Supabase', 'n8n', 'Make'],
        },
        web3: {
          title: 'Web3与分析',
          description: '区块链生态系统工具',
          tools: ['ThirdWeb', 'HardHat', 'Dune Analytics', 'Etherscan', 'OpenZeppelin'],
        },
      },
    },

    // Technologies
    technologies: {
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      react: 'React',
      nextjs: 'Next.js',
      typescript: 'TypeScript',
      nodejs: 'Node.js',
      mongodb: 'MongoDB',
      tailwind: 'Tailwind',
      webflow: 'Webflow',
      solidity: 'Solidity',
      rust: 'Rust',
      ethers: 'Ether.js',
    },
  },
};

// Traductions coréennes
const ko = {
  translation: {
    // Navigation
    nav: {
      home: '홈',
      projects: '프로젝트',
      contact: '연락처',
    },
    buttons: {
      code: '코드',
      demo: '데모',
      etherscan: '이더스캔',
    },
    featured: '추천 프로젝트',
    featuredSection: {
      title: '추천 프로젝트',
      subtitle: '제가 작업한 디자인 프로젝트 일부입니다. 더 보고 싶으신가요?',
      emailLink: '이메일 보내기',
      viewProject: '프로젝트 보기',
      github: '소스 코드',
      viewWebsite: '웹사이트 보기',
      viewGithub: 'Github에서 보기',
    },
    viewWebsite: '웹사이트 보기',
    viewGithub: 'Github에서 보기',

    // Page d'accueil
    home: {
      title: 'Web3',
      titleHighlight: '개발자',
      subtitle:
        '안녕하세요, 야마토입니다. 만나서 반갑습니다.\n깔끔하고 효과적인 랜딩 페이지를 디자인하고 소규모 Web3 프로젝트를 진행하고 있습니다.\n호기심이 많고 단순함을 추구하며, 항상 발전하기 위해 노력합니다.',
      viewProjects: '프로젝트 보기',
      contactMe: '연락하기',
      codeCreate: '코딩과 창작',
      techTitle: '보유 기술',
      featuredTitle: '주요 프로젝트',
      featuredSubtitle: '제 작품을 둘러보세요',
      viewAllProjects: '모든 프로젝트 보기',
      ctaTitle: '프로젝트를 시작할 준비가 되셨나요?',
      ctaSubtitle: '함께 멋진 것을 만들어보아요',
      ctaButton: '대화 시작하기',
      skills: {
        designer: {
          title: '디자이너',
          description:
            '단순한 콘텐츠 구조, 깔끔한 디자인 패턴, 신중하게 고려된 상호작용을 중요시합니다.',
          thingsTitle: '디자인 분야:',
          things: 'UX, UI, 웹, 앱, 로고',
          toolsTitle: '디자인 도구:',
        },
        developer: {
          title: '프론트엔드 개발자',
          description:
            '처음부터 프로젝트를 코딩하고 브라우저에서 아이디어를 구현하는 것을 즐깁니다.',
          languagesTitle: '사용 언어:',
          languages: 'HTML, CSS, Sass, JavaScript, React',
          toolsTitle: '개발 도구:',
        },
        web3: {
          title: 'Web3 애호가',
          description:
            '블록체인과 분산 기술에 열정을 가지고 Web3 생태계를 위한 현대적인 인터페이스를 만듭니다.',
          experienceTitle: '탐구 분야:',
          experience: 'DeFi, NFT, 스마트 계약, dApp',
          toolsTitle: 'Web3 도구:',
        },
      },
    },

    // Témoignages
    testimonials: {
      title: '고객 평가',
      subtitle: '고객분들의 의견을 들어보세요',
    },

    // Footer
    footer: {
      startProject: {
        title: '프로젝트 시작하기',
        subtitle: '함께 일하고 싶으신가요? 멋진 무언가를 함께 만들어봐요.',
        button: '대화 시작하기',
      },
      rights: '© 2023 모든 권리 보유.',
      madeWith: 'Next.js와 Tailwind CSS로 제작',
    },
    // Tech & Tools Section
    tools: {
      title: '기술 및 도구',
      subtitle: '제가 익숙한 도구와 플랫폼',
      categories: {
        development: {
          title: '개발 및 통합',
          description: '웹 개발 및 통합을 위한 도구',
          tools: ['Shopify', 'WordPress', 'Webflow', 'Framer', 'Vercel', 'Netlify'],
        },
        design: {
          title: '디자인 및 시각',
          description: '창의적이고 시각적인 편집 도구',
          tools: ['Figma', 'Adobe XD', 'Canva', 'CapCut', 'Kapwing', 'Runway'],
        },
        productivity: {
          title: '생산성 및 협업',
          description: '효율적인 작업을 위한 도구',
          tools: ['Notion', 'Slack', 'Discord', 'Supabase', 'n8n', 'Make'],
        },
        web3: {
          title: 'Web3 및 분석',
          description: '블록체인 생태계 도구',
          tools: ['ThirdWeb', 'HardHat', 'Dune Analytics', 'Etherscan', 'OpenZeppelin'],
        },
      },
    },

    // Technologies
    technologies: {
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      react: 'React',
      nextjs: 'Next.js',
      typescript: 'TypeScript',
      nodejs: 'Node.js',
      mongodb: 'MongoDB',
      tailwind: 'Tailwind',
      webflow: 'Webflow',
      solidity: 'Solidity',
      rust: 'Rust',
      ethers: 'Ether.js',
    },
  },
};

// Traductions thaïes
const th = {
  translation: {
    // Navigation
    nav: {
      home: 'หน้าแรก',
      projects: 'โปรเจกต์',
      contact: 'ติดต่อ',
    },
    buttons: {
      code: 'โค้ด',
      demo: 'เดโม',
      etherscan: 'Etherscan',
    },
    featured: 'โครงการแนะนำ',
    featuredSection: {
      title: 'โครงการแนะนำ',
      subtitle: 'นี่คือโปรเจกต์ดีไซน์บางส่วนที่ผมเคยทำงานด้วย ต้องการดูเพิ่มเติมไหม?',
      emailLink: 'ติดต่อผม',
      viewProject: 'ดูโปรเจกต์',
      github: 'ซอร์สโค้ด',
      viewWebsite: 'ดูเว็บไซต์',
      viewGithub: 'ดูบน Github',
    },
    viewWebsite: 'ดูเว็บไซต์',
    viewGithub: 'ดูบน Github',

    // Page d'accueil
    home: {
      title: 'นักพัฒนา',
      titleHighlight: 'Web3',
      subtitle:
        'สวัสดีครับ ผมยามาโต้ ยินดีที่ได้รู้จัก\nผมออกแบบ Landing Page ที่เรียบง่ายและมีประสิทธิภาพ และทำงานในโปรเจกต์ Web3 ขนาดเล็ก\nผมเป็นคนช่างสงสัย ชอบทำให้สิ่งต่าง ๆ เรียบง่าย และมุ่งมั่นพัฒนาตัวเองอยู่เสมอ',
      viewProjects: 'ดูโปรเจกต์ของฉัน',
      contactMe: 'ติดต่อฉัน',
      codeCreate: 'การเขียนโค้ดและความคิดสร้างสรรค์',
      techTitle: 'ทักษะที่เชี่ยวชาญ',
      featuredTitle: 'โปรเจกต์เด่น',
      featuredSubtitle: 'ชมผลงานบางส่วนของฉัน',
      viewAllProjects: 'ดูโปรเจกต์ทั้งหมด',
      ctaTitle: 'พร้อมเริ่มโปรเจกต์ของคุณหรือยัง?',
      ctaSubtitle: 'มาร่วมกันสร้างสิ่งที่น่าทึ่งกันเถอะ',
      ctaButton: 'มาคุยกันเลย',
      skills: {
        designer: {
          title: 'นักออกแบบ',
          description:
            'ผมให้ความสำคัญกับโครงสร้างเนื้อหาที่เรียบง่าย รูปแบบการออกแบบที่สะอาดตา และการโต้ตอบที่ผ่านการคิดมาอย่างดี',
          thingsTitle: 'สิ่งที่ชอบออกแบบ:',
          things: 'UX, UI, เว็บ, แอป, โลโก้',
          toolsTitle: 'เครื่องมือออกแบบ:',
        },
        developer: {
          title: 'นักพัฒนาหน้าเว็บ',
          description:
            'ผมชอบเขียนโค้ดโปรเจกต์ตั้งแต่เริ่มต้น และสนุกกับการนำไอเดียมาแสดงผลในเบราว์เซอร์',
          languagesTitle: 'ภาษาที่ใช้:',
          languages: 'HTML, CSS, Sass, JavaScript, React',
          toolsTitle: 'เครื่องมือพัฒนา:',
        },
        web3: {
          title: 'ผู้คลั่งใคล้ Web3',
          description:
            'มีความหลงใหลในเทคโนโลยีบล็อกเชนและระบบกระจายศูนย์ ผมออกแบบอินเทอร์เฟซที่ทันสมัยสำหรับระบบนิเวศ Web3',
          experienceTitle: 'สาขาที่สำรวจ:',
          experience: 'DeFi, NFT, สัญญาอัจฉริยะ, dApp',
          toolsTitle: 'เครื่องมือ Web3:',
        },
      },
    },

    // Témoignages
    testimonials: {
      title: 'ความเห็นจากลูกค้า',
      subtitle: 'ฟังสิ่งที่ลูกค้าพูดถึงผม',
    },

    // Footer
    footer: {
      startProject: {
        title: 'เริ่มโปรเจกต์',
        subtitle: 'สนใจที่จะทำงานร่วมกันไหม? มาร่วมกันสร้างสิ่งที่น่าทึ่งกันเถอะ',
        button: 'มาคุยกันเลย',
      },
      rights: '© 2023 สงวนลิขสิทธิ์',
      madeWith: 'สร้างด้วย Next.js และ Tailwind CSS',
    },
    // Tech & Tools Section
    tools: {
      title: 'เทคโนโลยีและเครื่องมือ',
      subtitle: 'เครื่องมือและแพลตฟอร์มที่ฉันคุ้นเคย',
      categories: {
        development: {
          title: 'การพัฒนาและบูรณาการ',
          description: 'เครื่องมือสำหรับการพัฒนาและบูรณาการเว็บไซต์',
          tools: ['Shopify', 'WordPress', 'Webflow', 'Framer', 'Vercel', 'Netlify'],
        },
        design: {
          title: 'การออกแบบและภาพ',
          description: 'เครื่องมือสร้างสรรค์และแก้ไขภาพ',
          tools: ['Figma', 'Adobe XD', 'Canva', 'CapCut', 'Kapwing', 'Runway'],
        },
        productivity: {
          title: 'ประสิทธิภาพและการทำงานร่วมกัน',
          description: 'เครื่องมือสำหรับการทำงานที่มีประสิทธิภาพ',
          tools: ['Notion', 'Slack', 'Discord', 'Supabase', 'n8n', 'Make'],
        },
        web3: {
          title: 'Web3 และการวิเคราะห์',
          description: 'เครื่องมือสำหรับระบบนิเวศบล็อกเชน',
          tools: ['ThirdWeb', 'HardHat', 'Dune Analytics', 'Etherscan', 'OpenZeppelin'],
        },
      },
    },

    // Technologies
    technologies: {
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      react: 'React',
      nextjs: 'Next.js',
      typescript: 'TypeScript',
      nodejs: 'Node.js',
      mongodb: 'MongoDB',
      tailwind: 'Tailwind',
      webflow: 'Webflow',
      solidity: 'Solidity',
      rust: 'Rust',
      ethers: 'Ether.js',
    },
  },
};

// Traductions vietnamiennes
const vi = {
  translation: {
    // Navigation
    nav: {
      home: 'Trang chủ',
      projects: 'Dự án',
      contact: 'Liên hệ',
    },
    buttons: {
      code: 'Mã nguồn',
      demo: 'Bản demo',
      etherscan: 'Etherscan',
    },
    featured: 'Dự án nổi bật',
    featuredSection: {
      title: 'Dự Án Nổi Bật',
      subtitle: 'Dưới đây là một số dự án thiết kế tôi đã thực hiện. Bạn có muốn xem thêm không?',
      emailLink: 'Liên hệ với tôi',
      viewProject: 'Xem Dự Án',
      github: 'Mã Nguồn',
      viewWebsite: 'Xem Trang Web',
      viewGithub: 'Xem trên Github',
    },
    viewWebsite: 'Xem Trang Web',
    viewGithub: 'Xem trên Github',

    // Page d'accueil
    home: {
      title: 'Lập trình viên',
      titleHighlight: 'Web3',
      subtitle:
        'Xin chào, tôi là Yamato. Rất vui được gặp bạn.\nTôi thiết kế các trang đích sạch đẹp, hiệu quả và làm việc với các dự án web3 nhỏ.\nLà người tò mò, tôi thích giữ mọi thứ đơn giản và luôn phấn đấu để trở nên tốt hơn.',
      viewProjects: 'Xem dự án của tôi',
      contactMe: 'Liên hệ với tôi',
      codeCreate: 'Lập trình & Sáng tạo',
      techTitle: 'Công nghệ thành thạo',
      featuredTitle: 'Dự án nổi bật',
      featuredSubtitle: 'Khám phá một số tác phẩm của tôi',
      viewAllProjects: 'Xem tất cả dự án',
      ctaTitle: 'Bạn đã sẵn sàng bắt đầu dự án?',
      ctaSubtitle: 'Cùng nhau tạo ra điều gì đó tuyệt vời',
      ctaButton: 'Bắt đầu trò chuyện',
      skills: {
        designer: {
          title: 'Nhà thiết kế',
          description:
            'Tôi coi trọng cấu trúc nội dung đơn giản, mẫu thiết kế sạch sẽ và tương tác được cân nhắc kỹ lưỡng.',
          thingsTitle: 'Những gì tôi thích thiết kế:',
          things: 'UX, UI, Web, Ứng dụng, Logo',
          toolsTitle: 'Công cụ thiết kế:',
        },
        developer: {
          title: 'Lập trình viên Frontend',
          description:
            'Tôi thích viết mã dự án từ đầu và tận hưởng việc hiện thực hóa ý tưởng trong trình duyệt.',
          languagesTitle: 'Ngôn ngữ tôi sử dụng:',
          languages: 'HTML, CSS, Sass, JavaScript, React',
          toolsTitle: 'Công cụ phát triển:',
        },
        web3: {
          title: 'Người đam mê Web3',
          description:
            'Đam mê công nghệ blockchain và phi tập trung, tôi tạo giao diện hiện đại cho hệ sinh thái Web3.',
          experienceTitle: 'Lĩnh vực tôi khám phá:',
          experience: 'Tài chính phi tập trung, NFT, Hợp đồng thông minh, Ứng dụng phi tập trung',
          toolsTitle: 'Công cụ Web3:',
        },
      },
    },

    // Témoignages
    testimonials: {
      title: 'Đánh giá từ khách hàng',
      subtitle: 'Nghe những gì khách hàng nói về tôi',
    },

    // Footer
    footer: {
      startProject: {
        title: 'Bắt đầu dự án',
        subtitle: 'Bạn muốn làm việc cùng nhau? Hãy cùng tạo ra điều gì đó tuyệt vời.',
        button: 'Bắt đầu trò chuyện',
      },
      rights: '© 2023 Bảo lưu mọi quyền.',
      madeWith: 'Được xây dựng bằng Next.js và Tailwind CSS',
    },
    // Tech & Tools Section
    tools: {
      title: 'Công nghệ & Công cụ',
      subtitle: 'Các công cụ và nền tảng tôi quen thuộc',
      categories: {
        development: {
          title: 'Phát triển & Tích hợp',
          description: 'Công cụ phát triển và tích hợp web',
          tools: ['Shopify', 'WordPress', 'Webflow', 'Framer', 'Vercel', 'Netlify'],
        },
        design: {
          title: 'Thiết kế & Hình ảnh',
          description: 'Công cụ chỉnh sửa sáng tạo và hình ảnh',
          tools: ['Figma', 'Adobe XD', 'Canva', 'CapCut', 'Kapwing', 'Runway'],
        },
        productivity: {
          title: 'Năng suất & Hợp tác',
          description: 'Công cụ làm việc hiệu quả',
          tools: ['Notion', 'Slack', 'Discord', 'Supabase', 'n8n', 'Make'],
        },
        web3: {
          title: 'Web3 & Phân tích',
          description: 'Công cụ hệ sinh thái blockchain',
          tools: ['ThirdWeb', 'HardHat', 'Dune Analytics', 'Etherscan', 'OpenZeppelin'],
        },
      },
    },

    // Technologies
    technologies: {
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      react: 'React',
      nextjs: 'Next.js',
      typescript: 'TypeScript',
      nodejs: 'Node.js',
      mongodb: 'MongoDB',
      tailwind: 'Tailwind',
      webflow: 'Webflow',
      solidity: 'Solidity',
      rust: 'Rust',
      ethers: 'Ether.js',
    },
  },
};

// Traductions japonaises
const ja = {
  translation: {
    // Navigation
    nav: {
      home: 'ホーム',
      projects: 'プロジェクト',
      contact: 'お問い合わせ',
    },
    buttons: {
      code: 'コード',
      demo: 'デモ',
      etherscan: 'Etherscan',
    },
    featured: '注目のプロジェクト',
    featuredSection: {
      title: '注目のプロジェクト',
      subtitle: 'これまでに手がけたデザインプロジェクトの一部です。もっと見たいですか？',
      emailLink: 'お問い合わせ',
      viewProject: 'プロジェクトを見る',
      github: 'ソースコード',
      viewWebsite: 'ウェブサイトを見る',
      viewGithub: 'Githubで見る',
    },
    viewWebsite: 'ウェブサイトを見る',
    viewGithub: 'Githubで見る',

    // Page d'accueil
    home: {
      title: 'Web3',
      titleHighlight: '開発者',
      subtitle:
        'こんにちは、Yamatoと申します。よろしくお願いします。\nクリーンで効果的なランディングページのデザインや、小規模なWeb3プロジェクトに取り組んでいます。\n好奇心旺盛で、物事をシンプルに保つことを好み、常にスキルアップを目指しています。',
      viewProjects: 'プロジェクトを見る',
      contactMe: 'お問い合わせ',
      codeCreate: 'コーディングとクリエイティブ',
      techTitle: '習得技術',
      featuredTitle: '注目のプロジェクト',
      featuredSubtitle: '私の作品の一部をご覧ください',
      viewAllProjects: 'すべてのプロジェクトを見る',
      ctaTitle: 'プロジェクトを始める準備はできましたか？',
      ctaSubtitle: '一緒に素晴らしいものを作りましょう',
      ctaButton: 'お話ししましょう',
      skills: {
        designer: {
          title: 'デザイナー',
          description:
            'シンプルなコンテンツ構造、クリーンなデザインパターン、そして考え抜かれたインタラクションを重視しています。',
          thingsTitle: '得意なデザイン：',
          things: 'UX, UI, Web, アプリ, ロゴ',
          toolsTitle: 'デザインツール：',
        },
        developer: {
          title: 'フロントエンド開発者',
          description:
            'ゼロからプロジェクトをコーディングし、ブラウザでアイデアを形にするのが好きです。',
          languagesTitle: '使用言語：',
          languages: 'HTML, CSS, Sass, JavaScript, React',
          toolsTitle: '開発ツール：',
        },
        web3: {
          title: 'Web3エンスージアスト',
          description:
            'ブロックチェーンと分散型技術に情熱を持ち、Web3エコシステムのためのモダンなインターフェースをデザインしています。',
          experienceTitle: '探求している分野：',
          experience: 'DeFi, NFT, スマートコントラクト, dApps',
          toolsTitle: 'Web3ツール：',
        },
      },
    },

    // Témoignages
    testimonials: {
      title: 'クライアントの声',
      subtitle: '私のクライアントが語る評価',
    },

    // Footer
    footer: {
      startProject: {
        title: 'プロジェクトを始める',
        subtitle: '一緒に働くことに興味がありますか？素晴らしいものを作りましょう。',
        button: 'お話ししましょう',
      },
      rights: '© 2023 全著作権所有',
      madeWith: 'Next.js と Tailwind CSS で構築',
    },
    // Tech & Tools Section
    tools: {
      title: 'テクノロジーとツール',
      subtitle: '私が慣れ親しんでいるツールとプラットフォーム',
      categories: {
        development: {
          title: '開発と統合',
          description: 'ウェブ開発と統合のためのツール',
          tools: ['Shopify', 'WordPress', 'Webflow', 'Framer', 'Vercel', 'Netlify'],
        },
        design: {
          title: 'デザインとビジュアル',
          description: 'クリエイティブで視覚的な編集ツール',
          tools: ['Figma', 'Adobe XD', 'Canva', 'CapCut', 'Kapwing', 'Runway'],
        },
        productivity: {
          title: '生産性とコラボレーション',
          description: '効率的な作業のためのツール',
          tools: ['Notion', 'Slack', 'Discord', 'Supabase', 'n8n', 'Make'],
        },
        web3: {
          title: 'Web3と分析',
          description: 'ブロックチェーンエコシステムツール',
          tools: ['ThirdWeb', 'HardHat', 'Dune Analytics', 'Etherscan', 'OpenZeppelin'],
        },
      },
    },

    // Technologies
    technologies: {
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      react: 'React',
      nextjs: 'Next.js',
      typescript: 'TypeScript',
      nodejs: 'Node.js',
      mongodb: 'MongoDB',
      tailwind: 'Tailwind',
      webflow: 'Webflow',
      solidity: 'Solidity',
      rust: 'Rust',
      ethers: 'Ether.js',
    },
  },
};

// Traductions anglaises
const en = {
  translation: {
    // Navigation
    nav: {
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
    },

    // Home page
    home: {
      title: 'Developer',
      titleHighlight: 'Web3',
      subtitle: `Hi, I'm Yamato. Nice to meet you.
I design clean, effective landing pages and work on small web3 projects.
Curious by nature, I like keeping things simple and always aim to get better at what I do.`,
      viewProjects: 'View my projects',
      contactMe: 'Contact me',
      codeCreate: 'Code & Create',
      techTitle: 'Technologies I work with',
      featuredTitle: 'Featured Projects',
      featuredSubtitle: 'Discover some of my work',
      viewAllProjects: 'View all projects',
      ctaTitle: 'Ready to bring your project to life?',
      ctaSubtitle: "Let's collaborate to create something extraordinary",
      ctaButton: "Let's talk",
      skills: {
        designer: {
          title: 'Designer',
          description:
            'I value simple content structure, clean design patterns, and thoughtful interactions.',
          thingsTitle: 'Things I enjoy designing:',
          things: 'UX, UI, Web, Apps, Logos',
          toolsTitle: 'Design Tools:',
        },
        developer: {
          title: 'Frontend Developer',
          description:
            'I like to code from scratch and enjoy bringing ideas to life in the browser.',
          languagesTitle: 'Languages I speak:',
          languages: 'HTML, CSS, Sass, JavaScript, React',
          toolsTitle: 'Dev Tools:',
        },
        web3: {
          title: 'Web3 Enthusiast',
          description:
            'Passionate about blockchain and decentralized technologies, I create modern interfaces for the Web3 ecosystem.',
          experienceTitle: "Experiences I'm exploring:",
          experience: 'DeFi, NFTs, Smart Contracts, dApps',
          toolsTitle: 'Web3 Tools:',
        },
      },
    },

    // Projects page
    projects: {
      title: 'My Projects',
      subtitle:
        'Discover my work, from WordPress sites to innovative DeFi protocols. From classic web development to decentralized applications with integrated AI.',
      filters: {
        all: '🗂️ All projects',
        featured: '⭐ Featured projects',
        web3: '🔗 Web3 & Blockchain',
        web: '💻 Web Applications',
        wordpress: '🌐 Showcase Sites',
      },
      noResults: 'No projects found',
      noResultsDesc: 'No projects match the selected criteria.',
      viewAll: 'View all projects',
      search: {
        placeholder: 'Search by name or technology...',
        clear: 'Clear search',
        searching: 'Searching',
      },
      stats: {
        title: 'My Project Statistics',
        projects: 'Projects completed',
        technologies: 'Technologies mastered',
        clients: 'Satisfied clients',
        experience: 'Years of experience',
      },
      cta: {
        title: 'Interested in my work?',
        subtitle: "Let's discuss your next project",
        button: 'Contact me',
      },
      buttons: {
        code: 'Code',
        demo: 'Demo',
        etherscan: 'Etherscan',
      },
      featured: 'Featured project',
      featuredSection: {
        title: 'Featured Projects',
        subtitle: "Here are some design projects I've worked on. Want to see more?",
        emailLink: 'Contact me.',
        viewProject: 'View project',
        github: 'Source code',
        viewWebsite: 'View website',
        viewGithub: 'View on Github',
      },
      viewWebsite: 'View website',
      viewGithub: 'View on Github',
    },

    // Contact page
    contact: {
      title: 'Contact Me',
      subtitle: "Let's discuss your next project together",
      infoTitle: 'Contact Information',
      availability: 'Availability',
      availabilityText:
        "I'm currently available for new projects. Don't hesitate to contact me to discuss your needs!",
      formTitle: 'Send me a message',
      form: {
        name: 'Full name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        subject: 'Subject',
        subjectPlaceholder: 'Message subject',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project or request...',
        submit: 'Send message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        successDesc: "Thank you for your message. I'll get back to you as soon as possible.",
        error: 'Error sending message',
        errorDesc: 'An error occurred. Please try again later.',
      },
    },

    // Testimonials
    testimonials: {
      title: 'What My Clients Say',
      subtitle: 'Discover feedback from clients who have used my services',
    },

    // Footer
    footer: {
      startProject: {
        title: 'Start a project',
        subtitle: "Interested in collaborating? Let's create something together.",
        button: "Let's talk",
      },
      mainFooter: {
        description:
          'Web3 Developer passionate about modern web technologies and decentralized innovation.',
        signature: 'Yamato 2025 ✦',
        social: 'Find me on',
      },
      description: 'Full Stack Developer passionate about modern web technologies and innovation.',
      quickLinks: 'Quick links',
      connect: 'Follow me',
      rights: 'All rights reserved.',
    },
    // Tech & Tools Section
    tools: {
      title: 'Tech & Tools',
      subtitle: "Tools and platforms I'm familiar with",
      categories: {
        development: {
          title: 'Development & Integration',
          description: 'Tools for web development and integration',
          tools: ['Shopify', 'WordPress', 'Webflow', 'Framer', 'Vercel', 'Netlify'],
        },
        design: {
          title: 'Design & Visual',
          description: 'Creative and visual editing tools',
          tools: ['Figma', 'Adobe XD', 'Canva', 'CapCut', 'Kapwing', 'Runway'],
        },
        productivity: {
          title: 'Productivity & Collaboration',
          description: 'Tools for efficient work',
          tools: ['Notion', 'Slack', 'Discord', 'Supabase', 'n8n', 'Make'],
        },
        web3: {
          title: 'Web3 & Analytics',
          description: 'Blockchain ecosystem tools',
          tools: ['ThirdWeb', 'HardHat', 'Dune Analytics', 'Etherscan', 'OpenZeppelin'],
        },
      },
    },

    // Technologies
    technologies: {
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      react: 'React',
      nextjs: 'Next.js',
      typescript: 'TypeScript',
      nodejs: 'Node.js',
      mongodb: 'MongoDB',
      tailwind: 'Tailwind',
      webflow: 'Webflow',
      solidity: 'Solidity',
      rust: 'Rust',
      ethers: 'Ether.js',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr,
      en,
      zh,
      ja,
      ko,
      th,
      vi,
    },
    supportedLngs: ['fr', 'en', 'zh', 'ja', 'ko', 'th', 'vi'],
    fallbackLng: 'fr',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
