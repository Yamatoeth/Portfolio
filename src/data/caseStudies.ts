import { projects } from './projects';

export interface CaseStudySection {
  title: string;
  body: string;
}

export interface CaseStudy {
  id: string;
  projectId: string;
  title: string;
  eyebrow: string;
  summary: string;
  demo?: {
    title: string;
    embedUrl: string;
    watchUrl: string;
    aspectRatio: 'video' | 'short';
  };
  role: string;
  timeline: string;
  stack: string[];
  metrics: Array<{ label: string; value: string }>;
  sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'jarvis',
    projectId: 'jarvis-voice-assistant',
    title: 'Jarvis Voice Assistant',
    eyebrow: 'Mobile AI assistant',
    summary:
      'A voice-first assistant connecting an Expo mobile app with a FastAPI backend, speech-to-text, LLM response generation, text-to-speech, PostgreSQL, Redis, and Dockerized infrastructure.',
    demo: {
      title: 'Jarvis voice assistant demo',
      embedUrl: 'https://www.youtube-nocookie.com/embed/8DVzpbzEVlk',
      watchUrl: 'https://youtube.com/shorts/8DVzpbzEVlk?feature=share',
      aspectRatio: 'short',
    },
    role: 'Full-stack implementation across mobile UI, backend orchestration, provider integration, persistence, and latency-focused product decisions.',
    timeline: 'Active build',
    stack: ['React Native', 'Expo', 'FastAPI', 'Python', 'Deepgram', 'Groq', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: [
      { label: 'Target latency', value: '~2s' },
      { label: 'Core surfaces', value: 'Mobile + API' },
      { label: 'Pipeline', value: 'STT / LLM / TTS' },
    ],
    sections: [
      {
        title: 'Problem',
        body:
          'Voice assistants fail quickly when response latency, audio state, backend orchestration, or provider fallbacks are not handled deliberately. The product needed a fast spoken loop that could remain understandable and testable while integrating several external services.',
      },
      {
        title: 'Approach',
        body:
          'The architecture separates the Expo client from a backend-owned voice pipeline. The backend coordinates transcription, context assembly, LLM generation, speech synthesis, persistence, and local fallback paths so the mobile app can stay focused on recording, playback, and state feedback.',
      },
      {
        title: 'Result',
        body:
          'The project demonstrates a functional spoken question-to-answer workflow with a target path around 2 seconds, plus a clearer architecture for iterating on provider choice, persistence, and future assistant memory.',
      },
    ],
  },
  {
    id: 'convai',
    projectId: 'convai-speech-analysis',
    title: 'ConvAI Speech Analysis Agent',
    eyebrow: 'Speech analysis automation',
    summary:
      'A reusable workflow for turning raw speech recordings into summaries, extracted insights, and structured JSON outputs that can feed downstream automation.',
    demo: {
      title: 'ConvAI speech analysis demo',
      embedUrl: 'https://www.youtube-nocookie.com/embed/-FJmN1G5UbI',
      watchUrl: 'https://youtu.be/-FJmN1G5UbI',
      aspectRatio: 'video',
    },
    role: 'Designed the ingestion and analysis flow, structured outputs, and automation-friendly data shape.',
    timeline: 'Prototype / workflow',
    stack: ['Python', 'LLM APIs', 'Audio ingestion', 'Structured JSON', 'Automation'],
    metrics: [
      { label: 'Input', value: 'Raw audio' },
      { label: 'Output', value: 'Insights + JSON' },
      { label: 'Use case', value: 'Repeatable analysis' },
    ],
    sections: [
      {
        title: 'Problem',
        body:
          'Audio recordings contain useful information but are hard to search, compare, summarize, or reuse in other tools without consistent transcription, analysis, and output formatting.',
      },
      {
        title: 'Approach',
        body:
          'The workflow treats speech analysis as a repeatable data pipeline: ingest audio, produce structured summaries, extract useful fields, and return machine-readable JSON instead of only free-form text.',
      },
      {
        title: 'Result',
        body:
          'The output becomes easier to review manually and easier to plug into automation, reporting, or follow-up systems.',
      },
    ],
  },
  {
    id: 'teclis',
    projectId: 'classic-1',
    title: 'Teclis Scientific',
    eyebrow: 'CMS-backed international site',
    summary:
      'A modernization of a legacy Wix website into a maintainable Next.js platform with CMS-driven content, multilingual routing, SEO structure, and scalable content workflows.',
    role: 'Full-stack delivery across Next.js, Sanity CMS, multilingual architecture, SEO structure, and deployment workflow.',
    timeline: '6-month engagement',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Sanity CMS', 'REST APIs', 'SEO', 'i18n'],
    metrics: [
      { label: 'Languages', value: '3 -> 10' },
      { label: 'Platform', value: 'Wix -> Next.js' },
      { label: 'Focus', value: 'Maintainability' },
    ],
    sections: [
      {
        title: 'Problem',
        body:
          'The previous Wix setup made international content maintenance slow and fragile. The site needed a technical foundation that could support more languages, cleaner content ownership, and stronger SEO structure.',
      },
      {
        title: 'Approach',
        body:
          'The rebuild introduced a Next.js frontend, Sanity CMS content workflows, structured multilingual routing, reusable page sections, and a cleaner deployment path for ongoing changes.',
      },
      {
        title: 'Result',
        body:
          'The platform became easier to maintain and expand, with multilingual support growing from 3 to 10 languages and a stronger foundation for international visibility.',
      },
    ],
  },
  {
    id: 'uparena',
    projectId: 'ongoing-3',
    title: 'UpArena',
    eyebrow: 'Prediction product UX',
    summary:
      'A streaming and prediction product direction focused on making Web3-backed actions clearer for mainstream users through understandable onboarding, wallet flows, and transaction feedback.',
    role: 'Interface direction and integration thinking around prediction flows, wallet actions, blockchain state, and product feedback.',
    timeline: 'Ongoing product',
    stack: ['React', 'TypeScript', 'Node.js', 'Drizzle', 'PostgreSQL', 'Supabase', 'Web3', 'NFTs'],
    metrics: [
      { label: 'Domain', value: 'Streaming + prediction' },
      { label: 'UX goal', value: 'Web2-friendly' },
      { label: 'Focus', value: 'Wallet clarity' },
    ],
    sections: [
      {
        title: 'Problem',
        body:
          'Prediction products can become confusing when users must understand wallet state, transaction status, rewards, and game outcomes at the same time.',
      },
      {
        title: 'Approach',
        body:
          'The interface direction prioritizes simple onboarding, clear transaction states, understandable prediction flows, and product copy that explains what is happening without assuming crypto-native knowledge.',
      },
      {
        title: 'Result',
        body:
          'The product direction lowers friction for users who understand streaming and games but may not understand blockchain mechanics.',
      },
    ],
  },
];

export const getCaseStudyById = (id: string) => {
  const caseStudy = caseStudies.find((study) => study.id === id);
  if (!caseStudy) return undefined;

  const project = projects.find((item) => item.id === caseStudy.projectId);
  if (!project) return undefined;

  return { ...caseStudy, project };
};

export const getCaseStudyByProjectId = (projectId: string) => {
  return caseStudies.find((study) => study.projectId === projectId);
};
