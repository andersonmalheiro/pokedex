export interface GenerationResult {
  name: string;
  url: string;
  id?: number;
}

interface Language {
  language: GenerationResult;
  name: string;
}

export interface Generation {
  abilities: any[];
  id: number;
  main_region: GenerationResult;
  moves: GenerationResult[];
  name: string;
  names: Language[];
  pokemon_species: GenerationResult[];
  types: GenerationResult[];
  version_groups: GenerationResult[];
}

export interface GenerationList {
  count: number;
  next: string | null;
  previous: string | null;
  results: GenerationResult[];
}
