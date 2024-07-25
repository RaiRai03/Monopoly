export interface Player {
  name: string;
  token: string;
  color: string;
}

interface HasPlayers {
  players: Player[];
}
interface Indexed {
  index: number;
}
export interface SpaceData {
  name: string;
  image? : string;
}
export type StatefulSpace = SpaceData & HasPlayers;
export type SpaceProps = StatefulSpace & Indexed;

export interface PropertySpaceData extends SpaceData {
  region: string;
  price: number;
}

export type StatefulPropertySpace = PropertySpaceData & HasPlayers;
export type PropertySpaceProps = PropertySpaceData & HasPlayers & Indexed;

