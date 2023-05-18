const EMPTY = [];

const SMALL = [
  {
    id: 1,
    imageSource: "/images/MisoRamen.png",
    title: "Miso Ramen",
    price: 8.297,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "pâtes, bouillon, miso, algues, oignons verts, champignons, tofu, viande (porc ou poulet), légumes, œuf, gingembre, ail, huile de sésame, sauce soja, vinaigre de riz.",
  },
  {
    id: 2,
    imageSource: "/images/shoyuRamen.png",
    title: "Shoyu Ramen",
    price: 8.297,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "pâtes, bouillon, sauce soja, mirin, sucre, oignons verts, algues, viande (porc ou poulet), œuf, champignons, légumes, gingembre, ail, huile de sésame, vinaigre de riz.",
  },
];

const MEDIUM = [
  {
    id: 1,
    imageSource: "/images/MisoRamen.png",
    title: "Miso Ramen",
    price: 8.297,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "pâtes, bouillon, miso, algues, oignons verts, champignons, tofu, viande (porc ou poulet), légumes, œuf, gingembre, ail, huile de sésame, sauce soja, vinaigre de riz.",
  },
  {
    id: 2,
    imageSource: "/images/shoyuRamen.png",
    title: "Shoyu Ramen",
    price: 8.297,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "pâtes, bouillon, sauce soja, mirin, sucre, oignons verts, algues, viande (porc ou poulet), œuf, champignons, légumes, gingembre, ail, huile de sésame, vinaigre de riz.",
  },
  {
    id: 3,
    imageSource: "/images/mazesoba.png",
    title: "Mazesoba",
    price: 8.367,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "nouilles, sauce mazesoba, viande (porc ou poulet), oignons verts, œuf, algues, légumes, ail, huile de sésame, vinaigre de riz, mayonnaise, nori, sésame, poivre, gingembre mariné.",
  },
  {
    id: 4,
    imageSource: "/images/ShioRamen.png",
    title: "Shio Ramen",
    price: 8.568,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "pâtes, bouillon, sel, mirin, sucre, oignons verts, algues, viande (porc ou poulet), œuf, champignons, légumes, gingembre, ail, huile de sésame, vinaigre de riz.",
  },
  {
    id: 5,
    imageSource: "/images/tonkotsuRamen.png",
    title: "Tonkotsu Ramen",
    price: 9.487,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "pâtes, bouillon de porc, viande de porc, oignons verts, algues, œuf, champignons, gingembre, ail, huile de sésame, vinaigre de riz, sauce soja, sésame, poivre, beurre d'ail.",
  },
];

const LARGE = [
  {
    id: 1,
    imageSource: "/images/MisoRamen.png",
    title: "Miso Ramen",
    price: 8.297,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "pâtes, bouillon, miso, algues, oignons verts, champignons, tofu, viande (porc ou poulet), légumes, œuf, gingembre, ail, huile de sésame, sauce soja, vinaigre de riz.",
  },
  {
    id: 2,
    imageSource: "/images/shoyuRamen.png",
    title: "Shoyu Ramen",
    price: 8.297,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "pâtes, bouillon, sauce soja, mirin, sucre, oignons verts, algues, viande (porc ou poulet), œuf, champignons, légumes, gingembre, ail, huile de sésame, vinaigre de riz.",
  },
  {
    id: 3,
    imageSource: "/images/mazesoba.png",
    title: "Mazesoba",
    price: 8.367,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "nouilles, sauce mazesoba, viande (porc ou poulet), oignons verts, œuf, algues, légumes, ail, huile de sésame, vinaigre de riz, mayonnaise, nori, sésame, poivre, gingembre mariné.",
  },
  {
    id: 4,
    imageSource: "/images/ShioRamen.png",
    title: "Shio Ramen",
    price: 8.568,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "pâtes, bouillon, sel, mirin, sucre, oignons verts, algues, viande (porc ou poulet), œuf, champignons, légumes, gingembre, ail, huile de sésame, vinaigre de riz.",
  },
  {
    id: 5,
    imageSource: "/images/tonkotsuRamen.png",
    title: "Tonkotsu Ramen",
    price: 9.487,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "pâtes, bouillon de porc, viande de porc, oignons verts, algues, œuf, champignons, gingembre, ail, huile de sésame, vinaigre de riz, sauce soja, sésame, poivre, beurre d'ail.",
  },
  {
    id: 6,
    imageSource: "/images/tsukemen.png",
    title: "Tsukemen",
    price: 10.356,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "pâtes, bouillon épais, viande (porc ou poulet), oignons verts, algues, œuf, légumes, gingembre, ail, huile de sésame, vinaigre de riz, sauce soja, sésame, poivre, poudre de piment.",
  },
  {
    id: 7,
    imageSource: "/images/coke.png",
    title: "Coca-Cola 33cl",
    price: 2.867,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "eau gazéifiée, sucre, arômes naturels et artificiels, acidifiants, colorants, agents conservateurs",
  },
  {
    id: 8,
    imageSource: "/images/mugicha.png",
    title: "Mugicha 33cl",
    price: 3.1678,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails: "orge japonais torréfié, eau.",
  },
  {
    id: 9,
    imageSource: "/images/ramune.png",
    title: "Ramune 33cl",
    price: 3.7,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "eau gazéifiée, sucre, arôme de myrtille, acide citrique, colorant alimentaire.",
  },
  {
    id: 10,
    imageSource: "/images/bubbletea.png",
    title: "Bubble Tea 75cl",
    price: 4.678,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    productDetails:
      "thé noir, lait, perles de tapioca, sirop de saveur (fruit ou thé), glace pilée, sucre, crème.",
  },
];

export const fakeMenu = {
  EMPTY,
  SMALL,
  MEDIUM,
  LARGE,
};
