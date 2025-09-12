import React from 'react';

const StoryPage = () => {
  const experiences = [
    {
      title: 'Exploration e-commerce – Shopify',
      points: [
        'Création d’environ 15 sites Shopify pour tester différentes niches et stratégies e-commerce.',
        'Expérimentation avec la mise en page, l’UX/UI et les outils marketing intégrés (apps Shopify, email automation, SEO).',
        'Objectif : comprendre le processus complet de lancement et gestion d’un e-shop, du produit à la vente.',
        'Compétences développées : structuration d’un site marchand, optimisation UX, intégration d’outils marketing, prise de décisions basées sur des tests.'
      ]
    },
    {
      title: 'Marketing digital – Publicités Facebook & campagnes publicitaires',
      points: [
        'Mise en place et test de campagnes publicitaires sur Facebook Ads.',
        'Analyse des performances, ajustement des audiences et optimisation du ROI.',
        'Compétences développées : ciblage, copywriting publicitaire, A/B testing, suivi des conversions.'
      ]
    },
    {
      title: 'Création et édition visuelle – Canva / CapCut / Kapwing',
      points: [
        'Conception de visuels et designs pour les sites Shopify et campagnes publicitaires.',
        'Montage de vidéos publicitaires et contenus courts avec CapCut et Kapwing.',
        'Retouche et édition d’images pour supports digitaux.',
        'Compétences développées : storytelling visuel, design orienté marketing, montage vidéo court et impactant.'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Story / Expériences personnelles</h1>
      <p className="text-lg mb-10">
        Au fil de mes expériences, j’ai exploré différents domaines pour enrichir mes compétences, parfois à travers des projets personnels ou tests, qui ne sont pas toujours visibles en ligne aujourd’hui. Voici un aperçu de ce que j’ai expérimenté et appris.
      </p>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{exp.title}</h2>
          <ul className="list-disc list-inside space-y-2">
            {exp.points.map((point, idx) => (
              <li key={idx} className="text-gray-700">{point}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-10">
        <p className="text-lg font-medium">
          Ces expériences m’ont permis de développer une vision complète du parcours marketing digital et e-commerce, du design à la diffusion, même si ces projets étaient exploratoires et ne sont plus en ligne aujourd’hui. Elles témoignent de ma capacité à apprendre rapidement, tester des idées et m’adapter à de nouveaux outils.
        </p>
      </div>
    </div>
  );
};

export default StoryPage;