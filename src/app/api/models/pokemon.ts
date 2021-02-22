export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: PokemonResult[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: PokemonResult;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: PokemonResult[];
}

export interface PokemonSpecie {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: PokemonResult;
  pokedex_numbers: PokedexNumber[];
  egg_groups: PokemonResult[];
  color: PokemonResult;
  shape: PokemonResult;
  evolves_from_species: PokemonResult;
  evolution_chain: EvolutionChain;
  habitat: null;
  generation: PokemonResult;
  names: Name[];
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: FormDescription[];
  genera: Genus[];
  varieties: Variety[];
}

export interface PokemonResult {
  name: string;
  url: string;
  id?: number;
}

interface Ability {
  ability: PokemonResult;
  is_hidden: boolean;
  slot: number;
}

interface GameIndex {
  game_index: number;
  version: PokemonResult;
}

interface Move {
  move: PokemonResult;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: PokemonResult;
  version_group: PokemonResult;
}

interface GenerationV {
  'black-white': Sprites;
}

interface GenerationIv {
  'diamond-pearl': Sprites;
  'heartgold-soulsilver': Sprites;
  platinum: Sprites;
}

interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': { [key: string]: GenerationVi };
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

interface GenerationI {
  'red-blue': RedBlue;
  yellow: RedBlue;
}

interface RedBlue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

interface GenerationIi {
  crystal: Crystal;
  gold: Crystal;
  silver: Crystal;
}

interface Crystal {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface GenerationIii {
  emerald: Emerald;
  'firered-leafgreen': Crystal;
  'ruby-sapphire': Crystal;
}

interface Emerald {
  front_default: string;
  front_shiny: string;
}

interface GenerationVi {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

interface GenerationVii {
  icons: DreamWorld;
  'ultra-sun-ultra-moon': GenerationVi;
}

interface DreamWorld {
  front_default: string;
  front_female: null;
}

interface GenerationViii {
  icons: DreamWorld;
}

interface Other {
  dream_world: DreamWorld;
  'official-artwork': OfficialArtwork;
}

interface OfficialArtwork {
  front_default: string;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: PokemonResult;
}

interface Type {
  slot: number;
  type: PokemonResult;
}

interface EvolutionChain {
  url: string;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: PokemonResult;
  version: PokemonResult;
}

interface FormDescription {
  description: string;
  language: PokemonResult;
}

interface Genus {
  genus: string;
  language: PokemonResult;
}

interface Name {
  name: string;
  language: PokemonResult;
}

interface PokedexNumber {
  entry_number: number;
  pokedex: PokemonResult;
}

interface Variety {
  is_default: boolean;
  pokemon: PokemonResult;
}
