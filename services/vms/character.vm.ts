export interface CharacterVM {
  id: string;
  name: string;
  level: number;
  icon: string;
  portrait: string;
  preview: string;
  promotion: number;
  rank: {
    level: number;
    icons: string[];
  };
  rarity: number;
  element: {
    name: string;
    icon: string;
  };
  path: {
    name: string;
    icon: string;
  };
  attributes: {
    name: string;
    total: string | number;
    value: string | number;
    addition: string | number;
  }[];
  skills: {
    id: string;
    name: string;
    icon: string;
    shortDescription: string;
    description: string;
    level: number;
    maxLevel: number;
    type: string;
    effect: string;
  }[];
  relics: {}[];
  relicSets: {}[];
}
