import { ID, Property } from './common';

interface RelicMainAffix {
  type: string;
  field: string;
  name: string;
  icon: string;
  value: number;
  display: string;
  percent: boolean;
}

interface RelicSubAffix {
  type: string;
  field: string;
  name: string;
  icon: string;
  value: number;
  display: string;
  percent: boolean;
  count: number;
  step: number;
}

interface Relic {
  id: ID;
  name: string;
  set_id: ID;
  set_name: string;
  rarity: number;
  level: number;
  icon: string;
  main_affix: RelicMainAffix;
  sub_affix: RelicSubAffix[];
}

interface RelicSet {
  id: ID;
  name: string;
  icon: string;
  num: number;
  desc: string;
  properties: Property[];
}

export type { Relic, RelicMainAffix, RelicSubAffix, RelicSet };
