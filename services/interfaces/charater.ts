import { Addition, Attribute, Element, ID, Path, Property } from './common';
import { Relic, RelicSet } from './relic';

interface Skill {
  id: ID;
  name: string;
  level: number;
  max_level: number;
  element?: Element;
  type: string;
  type_text?: string;
  effect: string;
  effect_text?: string;
  simple_desc?: string;
  desc: string;
  icon: string;
}

interface SkillTree {
  id: ID;
  level: number;
  icon: string;
}

interface LightCone {
  id: ID;
  name: string;
  rarity: number;
  rank: number;
  level: number;
  promotion: number;
  icon: string;
  preview: string;
  portrait: string;
  path: Path;
}

interface Character {
  id: ID;
  name: string;
  rarity: number;
  rank: number;
  level: number;
  promotion: number;
  icon: string;
  preview: string;
  portrait: string;
  rank_icons: string[];
  path: Path;
  element: Element;
  skills: Skill[];
  skill_trees: SkillTree[];
  light_cone: LightCone;
  attributes: Attribute[];
  properties: Property[];
  additions: Addition[];
  relics: Relic[];
  relic_sets: RelicSet[];
}

export type { Character, LightCone, Skill, SkillTree };
