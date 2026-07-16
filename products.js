// ============================================================
// CATALOGUE PRODUITS VCI
// Pour ajouter ou corriger un produit : modifiez l'objet correspondant.
// "status: 'real'" = donnée confirmée. "status: 'draft'" = brouillon à valider.
// ============================================================

const VCI_PRODUCTS = [
  {
    id: "javel-pro",
    status: "real",
    category: "detergents",
    subcategory: "Désinfectant",
    name: "Eau de Javel professionnelle",
    tagline: "8° · 12° · 48° Chl",
    description: "Une désinfection fiable et dosée avec précision, adaptée à chaque usage — de l'entretien courant à la désinfection industrielle intensive.",
    formats: ["500 ml", "1 L", "5 L", "20 L"],
    specs: {
      "Concentration": "8°, 12° ou 48° Chl",
      "pH": "12 – 13",
      "Conditionnement": "500 ml à 20 L",
      "Conservation": "12 mois à l'abri de la lumière"
    },
    composition: "Hypochlorite de sodium, eau, stabilisant. Fiche de données de sécurité (FDS) disponible sur demande.",
    usage: "Diluer selon le degré chlorométrique et la surface à traiter. Respecter les dosages recommandés sur la fiche technique produit.",
    precautions: "Tenir hors de portée des enfants. Éviter le contact avec les yeux et la peau. Ne jamais mélanger avec un autre produit chimique. Stocker dans un endroit frais et ventilé.",
    results: ["Désinfection efficace", "Élimination des bactéries et virus courants", "Conforme aux protocoles d'hygiène collective"]
  },
  {
    id: "savon-liquide-multi",
    status: "real",
    category: "detergents",
    subcategory: "Nettoyant multi-usages",
    name: "Savon liquide multi-usage",
    tagline: "Sols, surfaces, équipements",
    description: "Un seul produit polyvalent qui couvre le nettoyage quotidien des sols, surfaces et équipements, réduisant le nombre de références à gérer.",
    formats: ["500 ml", "1 L", "5 L", "20 L"],
    specs: {
      "pH": "7 – 8 (neutre)",
      "Parfum": "Disponible parfumé ou neutre",
      "Conditionnement": "500 ml à 20 L",
      "Conservation": "18 mois"
    },
    composition: "Agents tensioactifs doux, parfum, conservateurs. Fiche de données de sécurité (FDS) disponible sur demande.",
    usage: "Diluer dans l'eau selon la surface à nettoyer. Utilisable au quotidien sur la plupart des surfaces dures.",
    precautions: "Éviter le contact prolongé avec la peau. Tenir hors de portée des enfants. Bien rincer les surfaces en contact alimentaire.",
    results: ["Nettoyage polyvalent", "Formule douce pour les mains", "Rinçage facile"]
  },
  {
    id: "savon-noir-cosm",
    status: "real",
    category: "cosmetiques",
    subcategory: "Savons",
    name: "Savon noir cosmétique",
    tagline: "Saponification à froid · actifs AHA/BHA",
    description: "Un soin traditionnel ivoirien reformulé avec une rigueur cosmétique moderne, pour les marques et distributeurs qui veulent un produit authentique sans compromis sur la qualité active.",
    formats: ["100 g", "250 g", "500 g", "En vrac (kg)"],
    specs: {
      "Type de peau": "Tous types, y compris peaux sensibles",
      "Procédé": "Saponification à froid",
      "Actifs": "AHA / BHA",
      "Conservation": "12 mois"
    },
    composition: "Beurre de karité, cendres de plantes locales, huiles végétales, actifs exfoliants AHA/BHA. Liste INCI complète disponible sur demande.",
    usage: "Appliquer sur peau humide, masser délicatement, rincer à l'eau claire. Usage recommandé 2 à 3 fois par semaine.",
    precautions: "Test cutané conseillé avant première utilisation. Éviter le contact avec les yeux. Conserver dans un endroit sec.",
    results: ["Nettoie en douceur", "Exfolie et affine le grain de peau", "Convient aux peaux sensibles"]
  },

  // ---------- BROUILLONS : à valider / compléter avec vos vraies données ----------
  {
    id: "liquide-vaisselle",
    status: "draft",
    category: "detergents",
    subcategory: "Liquide vaisselle",
    name: "Liquide vaisselle",
    tagline: "Formule dégraissante",
    description: "Un liquide vaisselle conçu pour éliminer efficacement les graisses tout en restant doux pour les mains. [Brouillon — à valider avec la formulation réelle]",
    formats: ["500 ml", "1 L"],
    specs: { "pH": "À confirmer", "Parfum": "À confirmer", "Conditionnement": "500 ml / 1 L" },
    composition: "Composition à préciser.",
    usage: "Dosage à préciser.",
    precautions: "Tenir hors de portée des enfants. Éviter le contact avec les yeux.",
    results: ["Dissout les graisses", "Mousse abondante", "Rinçage facile"]
  },
  {
    id: "lessive-liquide",
    status: "draft",
    category: "detergents",
    subcategory: "Lessive liquide",
    name: "Lessive liquide",
    tagline: "Entretien du linge",
    description: "Une lessive liquide pour un entretien efficace du linge au quotidien. [Brouillon — à valider avec la formulation réelle]",
    formats: ["1 L", "5 L"],
    specs: { "pH": "À confirmer", "Parfum": "À confirmer", "Conditionnement": "1 L / 5 L" },
    composition: "Composition à préciser.",
    usage: "Dosage à préciser selon la charge de linge.",
    precautions: "Tenir hors de portée des enfants.",
    results: ["Nettoyage en profondeur", "Parfum longue durée"]
  },
  {
    id: "nettoyant-sol",
    status: "draft",
    category: "detergents",
    subcategory: "Nettoyant sol",
    name: "Nettoyant sol",
    tagline: "Tous types de sols",
    description: "Un nettoyant formulé pour l'entretien courant des sols. [Brouillon — à valider avec la formulation réelle]",
    formats: ["1 L", "5 L"],
    specs: { "pH": "À confirmer", "Conditionnement": "1 L / 5 L" },
    composition: "Composition à préciser.",
    usage: "Diluer selon le type de sol.",
    precautions: "Sol glissant pendant le séchage.",
    results: ["Brillance", "Parfum frais"]
  },
  {
    id: "nettoyant-sanitaire",
    status: "draft",
    category: "detergents",
    subcategory: "Nettoyant sanitaire",
    name: "Nettoyant sanitaire",
    tagline: "Salles de bain et sanitaires",
    description: "Un nettoyant dédié aux surfaces sanitaires. [Brouillon — à valider avec la formulation réelle]",
    formats: ["500 ml", "1 L"],
    specs: { "pH": "À confirmer", "Conditionnement": "500 ml / 1 L" },
    composition: "Composition à préciser.",
    usage: "Appliquer et rincer après quelques minutes de pose.",
    precautions: "Éviter le mélange avec l'eau de javel.",
    results: ["Détartrant", "Désodorisant"]
  },
  {
    id: "gel-douche",
    status: "draft",
    category: "cosmetiques",
    subcategory: "Gels douche",
    name: "Gel douche",
    tagline: "Soin quotidien",
    description: "Un gel douche pour le nettoyage quotidien du corps. [Brouillon — à valider avec la formulation réelle]",
    formats: ["250 ml", "500 ml"],
    specs: { "Type de peau": "À confirmer", "Conservation": "12 mois" },
    composition: "Liste INCI à préciser.",
    usage: "Appliquer sur peau humide, masser, rincer.",
    precautions: "Test cutané conseillé.",
    results: ["Nettoie en douceur", "Parfum agréable"]
  },
  {
    id: "creme-corporelle",
    status: "draft",
    category: "cosmetiques",
    subcategory: "Crèmes",
    name: "Crème corporelle",
    tagline: "Hydratation quotidienne",
    description: "Une crème corporelle hydratante pour un usage quotidien. [Brouillon — à valider avec la formulation réelle]",
    formats: ["150 ml", "300 ml"],
    specs: { "Type de peau": "À confirmer", "Texture": "À confirmer" },
    composition: "Liste INCI à préciser.",
    usage: "Appliquer sur peau propre, matin et/ou soir.",
    precautions: "Test cutané conseillé.",
    results: ["Hydratation longue durée", "Peau douce"]
  },
  {
    id: "huile-corporelle",
    status: "draft",
    category: "cosmetiques",
    subcategory: "Huiles corporelles",
    name: "Huile corporelle",
    tagline: "Nourrissante",
    description: "Une huile corporelle nourrissante à base d'huiles végétales. [Brouillon — à valider avec la formulation réelle]",
    formats: ["100 ml", "200 ml"],
    specs: { "Base": "Huiles végétales", "Conservation": "12 mois" },
    composition: "Liste INCI à préciser.",
    usage: "Appliquer sur peau humide après la douche.",
    precautions: "Test cutané conseillé.",
    results: ["Nourrit la peau", "Non grasse au toucher"]
  },
  {
    id: "produit-capillaire",
    status: "draft",
    category: "cosmetiques",
    subcategory: "Produits capillaires",
    name: "Soin capillaire",
    tagline: "Cheveux",
    description: "Un soin capillaire à formuler selon le type de cheveux ciblé. [Brouillon — à valider avec la formulation réelle]",
    formats: ["250 ml"],
    specs: { "Type de cheveux": "À confirmer" },
    composition: "Liste INCI à préciser.",
    usage: "Mode d'emploi à préciser.",
    precautions: "Test cutané conseillé.",
    results: ["À préciser"]
  }
];

// Renvoie un produit par son identifiant
function getProductById(id){
  return VCI_PRODUCTS.find(p => p.id === id);
}
