type ID = string;

interface Element {
  id: ID;
  name: string;
  color: string;
  icon: string;
}

interface Path {
  id: ID;
  name: string;
  icon: string;
}

interface Attribute {
  field: string;
  name: string;
  icon: string;
  value: number;
  display: string;
  percent: boolean;
}

interface Property extends Attribute {
  type: string;
}

interface Addition extends Attribute {}

export type { Addition, Attribute, Element, ID, Path, Property };
