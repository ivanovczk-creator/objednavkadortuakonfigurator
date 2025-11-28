import { Product } from './types';

// Zde jsou data dortů. Pro použití reálných dat upravte toto pole.
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Královský Harlekýn",
    price: 890,
    description: "Lehká pařížská šlehačka v kombinaci s bílou šlehačkou na kakaovém korpusu.",
    imageAlt: "Dort Harlekýn"
  },
  {
    id: 2,
    name: "Jahodový Sen",
    price: 950,
    description: "Nadýchaný piškot, vanilkový krém a čerstvé české jahody zalité želatinou.",
    imageAlt: "Jahodový dort"
  },
  {
    id: 3,
    name: "Sacher Originál",
    price: 820,
    description: "Hutný čokoládový korpus promazaný meruňkovou marmeládou, potažený ganache.",
    imageAlt: "Sacher dort"
  },
  {
    id: 4,
    name: "Kubánský dort",
    price: 920,
    description: "Čokoládový korpus, banány a pařížská šlehačka s kousky čokolády.",
    imageAlt: "Kubánský dort s banány"
  },
  {
    id: 5,
    name: "Red Velvet",
    price: 1100,
    description: "Sametově červený korpus prokládaný krémem z mascarpone a smetany.",
    imageAlt: "Red Velvet dort"
  },
  {
    id: 6,
    name: "Ovocný Košík",
    price: 750,
    description: "Variace sezónního ovoce na lehkém tvarohovém krému.",
    imageAlt: "Ovocný dort"
  },
  {
    id: 7,
    name: "Pistáciový Deluxe",
    price: 1250,
    description: "Prémiový dort z pravých pistácií, malinový vklad a pistáciový krém.",
    imageAlt: "Pistáciový dort"
  },
  {
    id: 8,
    name: "Medovník",
    price: 690,
    description: "Tradiční receptura, medové pláty spojené karamelovým krémem s ořechy.",
    imageAlt: "Medovník"
  }
];

export const EMAIL_TO = "objednavky@cukrarstviblahutovi.cz";
export const CONFIGURATOR_URL = "https://www.cukrarstviblahutovi.cz/konfigurator-dortu/";