interface Result {
  name: string;
  url: string;
}

interface Language {
  language: Result;
  name: string;
}

export interface Generation {
  abilities: any[];
  id: number;
  main_region: Result;
  moves: Result[];
  name: string;
  names: Language[];
  pokemon_species: Result[];
  types: Result[];
  version_groups: Result[];
}

export interface List {
  count: number;
  next: boolean;
  previous: boolean;
  results: Result[];
}
