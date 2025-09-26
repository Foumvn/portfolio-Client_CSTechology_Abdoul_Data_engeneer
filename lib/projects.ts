export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "application-recherche-emploi",
    title: "Application de Recherche d'Emploi",
    category: "Application Mobile",
    shortDescription: "Une application moderne de recherche d'emploi conçue pour connecter efficacement les demandeurs d'emploi avec les employeurs.",
    description: [
      "L'Application de Recherche d'Emploi est une application mobile complète conçue pour simplifier le processus de recherche d'emploi. Elle fournit une interface intuitive permettant aux demandeurs d'emploi de découvrir des opportunités correspondant à leurs compétences et préférences.",
      "L'application dispose d'un algorithme de correspondance intelligent qui analyse les profils utilisateurs et les exigences des postes pour suggérer les positions les plus pertinentes. Les utilisateurs peuvent facilement filtrer les emplois par localisation, secteur, niveau d'expérience et fourchette salariale.",
      "Pour les employeurs, la plateforme offre des outils pour publier des offres d'emploi, examiner les candidatures et communiquer directement avec les candidats potentiels via l'application.",
    ],
    features: [
      "Recommandations d'emploi personnalisées basées sur les compétences et préférences de l'utilisateur",
      "Notifications en temps réel pour les nouvelles offres d'emploi et mises à jour de candidatures",
      "Système de messagerie intégré pour la communication directe entre employeurs et candidats",
      "Générateur de CV avec modèles et outils de mise en forme",
      "Planification d'entretiens et intégration calendrier",
      "Analyses détaillées pour les demandeurs d'emploi afin de suivre leurs progrès de candidature",
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "AWS", "Firebase"],
    coverImage: "/job-finder-cover.png",
    thumbnailImage: "/modern-finance-app.png",
    gallery: [
      { url: "/job-finder-screen1.png", caption: "Écran d'accueil avec recommandations d'emploi" },
      { url: "/job-finder-screen2.png", caption: "Vue détaillée de l'offre d'emploi" },
      { url: "/job-finder-screen3.png", caption: "Profil utilisateur et compétences" },
      { url: "/job-finder-screen4.png", caption: "Tableau de bord de suivi des candidatures" },
    ],
    timeline: "3 mois (T2 2023)",
    role: "Designer Produit Principal",
    liveUrl: "https://example.com/job-finder",
    githubUrl: "https://github.com/example/job-finder",
    relatedProjects: [
      {
        slug: "tableau-de-bord-finance",
        title: "Tableau de Bord Financier",
        category: "Application Web",
        image: "/modern-finance-overview.png",
      },
      {
        slug: "refonte-ecommerce",
        title: "Refonte E-Commerce",
        category: "Étude de Cas UX",
        image: "/modern-apparel-storefront.png",
      },
    ],
  },
  {
    id: 2,
    slug: "tableau-de-bord-finance",
    title: "Tableau de Bord Financier",
    category: "Application Web",
    shortDescription:
      "Un tableau de bord complet de gestion financière pour suivre les investissements, dépenses et objectifs financiers.",
    description: [
      "Le Tableau de Bord Financier est une application web puissante conçue pour aider les utilisateurs à gérer leurs finances personnelles dans un emplacement centralisé. Il fournit des insights en temps réel sur les habitudes de dépenses, la performance des investissements et les progrès vers les objectifs financiers.",
      "Le tableau de bord présente des graphiques interactifs et des visualisations qui rendent les données financières complexes faciles à comprendre en un coup d'œil. Les utilisateurs peuvent connecter plusieurs comptes, catégoriser les transactions automatiquement et recevoir des recommandations personnalisées pour améliorer leur santé financière.",
      "L'application a été conçue en mettant l'accent sur la sécurité, utilisant un cryptage de niveau bancaire et des protocoles d'authentification pour protéger les informations financières sensibles.",
    ],
    features: [
      "Agrégation de comptes de multiples institutions financières",
      "Catégorisation et étiquetage automatiques des transactions",
      "Création de budget et suivi des dépenses",
      "Analyse de portefeuille d'investissement et métriques de performance",
      "Définition d'objectifs avec suivi des progrès",
      "Rapports personnalisables et exports de données",
      "Insights financiers et recommandations",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "API Plaid", "PostgreSQL", "Vercel"],
    coverImage: "/finance-dashboard-cover.png",
    thumbnailImage: "/modern-finance-overview.png",
    gallery: [
      { url: "/finance-dashboard-screen1.png", caption: "Vue d'ensemble du tableau de bord principal" },
      { url: "/finance-dashboard-screen2.png", caption: "Analyse des dépenses" },
      { url: "/finance-dashboard-screen3.png", caption: "Portefeuille d'investissement" },
      { url: "/finance-dashboard-screen4.png", caption: "Suivi des objectifs financiers" },
    ],
    timeline: "4 mois (T3-T4 2022)",
    role: "Designer UX/UI & Développeur Frontend",
    liveUrl: "https://example.com/finance-dashboard",
    githubUrl: "https://github.com/example/finance-dashboard",
    relatedProjects: [
      {
        slug: "application-recherche-emploi",
        title: "Application de Recherche d'Emploi",
        category: "Application Mobile",
        image: "/modern-finance-app.png",
      },
      {
        slug: "refonte-ecommerce",
        title: "Refonte E-Commerce",
        category: "Étude de Cas UX",
        image: "/modern-apparel-storefront.png",
      },
    ],
  },
  {
    id: 3,
    slug: "refonte-ecommerce",
    title: "Refonte E-Commerce",
    category: "Étude de Cas UX",
    shortDescription:
      "Une refonte complète d'une plateforme e-commerce axée sur l'amélioration de l'expérience utilisateur et des taux de conversion.",
    description: [
      "Ce projet impliquait une refonte complète d'une plateforme e-commerce établie qui rencontrait des difficultés avec l'engagement utilisateur et les taux de conversion. L'objectif était de créer une expérience d'achat plus intuitive et visuellement attrayante qui stimulerait les ventes et la satisfaction client.",
      "Le processus de refonte a commencé par une recherche utilisateur extensive, incluant des entretiens, enquêtes et tests d'utilisabilité de la plateforme existante. Cette recherche a révélé des points de friction clés dans le parcours client, tels qu'un processus de commande compliqué et des difficultés à trouver les produits.",
      "Basé sur ces insights, j'ai développé une nouvelle architecture d'information et un flux utilisateur qui simplifie la navigation et rationalise le processus d'achat. Le design visuel a été mis à jour avec une esthétique moderne et épurée qui met en valeur l'imagerie produit et crée une expérience de marque cohérente sur tous les points de contact.",
    ],
    features: [
      "Système de navigation et filtrage produit simplifié",
      "Pages détail produit repensées avec imagerie et informations améliorées",
      "Processus de commande rationalisé réduisant les étapes de 40%",
      "Recommandations de produits personnalisées basées sur l'historique de navigation",
      "Design responsive mobile-first",
      "Fonctionnalité de recherche améliorée avec suggestions prédictives",
      "Fonctionnalité de liste de souhaits et articles sauvegardés améliorée",
    ],
    technologies: ["Figma", "Adobe XD", "HTML/CSS", "JavaScript", "Shopify", "Hotjar", "Google Analytics"],
    coverImage: "/ecommerce-redesign-cover.png",
    thumbnailImage: "/modern-apparel-storefront.png",
    gallery: [
      { url: "/ecommerce-redesign-screen1.png", caption: "Design de la page d'accueil" },
      { url: "/ecommerce-redesign-screen2.png", caption: "Page catégorie produit" },
      { url: "/ecommerce-redesign-screen3.png", caption: "Page détail produit" },
      { url: "/ecommerce-redesign-screen4.png", caption: "Processus de commande" },
    ],
    client: "Fashion Retailer Inc.",
    timeline: "6 mois (T1-T2 2022)",
    role: "Designer UX Principal",
    liveUrl: "https://example.com/fashion-retailer",
    relatedProjects: [
      {
        slug: "application-recherche-emploi",
        title: "Application de Recherche d'Emploi",
        category: "Application Mobile",
        image: "/modern-finance-app.png",
      },
      {
        slug: "tableau-de-bord-finance",
        title: "Tableau de Bord Financier",
        category: "Application Web",
        image: "/modern-finance-overview.png",
      },
    ],
  },
]

export { projects }

// Ajout de ces fonctions après l'export du tableau de projets

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // Si aucun projet associé n'est défini, retourner des projets aléatoires
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}