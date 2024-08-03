export interface Player {
  name: string;
  token: string;
  color: string;
  ownedProperties: PropertySpaceData[];
  money: number;
  currentPostion: number;
}

interface HasPlayers {
  players: Player[];
}
interface Indexed {
  index: number;
}
export interface SpaceData {
  name: string;
  image?: string;
}
export type StatefulSpace = SpaceData & HasPlayers;
export type SpaceProps = StatefulSpace & Indexed;
export interface PropertySpaceData extends SpaceData {
  region: string;
  price: number;
  owner?: Player;
  rent: number;
}
export type StatefulPropertySpace = PropertySpaceData & HasPlayers;
export type PropertySpaceProps = StatefulPropertySpace & Indexed;

export interface TurnState{
  currentIndex: any;
  currentPlayerIndex: number;
  currentPlayerHasMoved: boolean;
  offerToBuy: Boolean;
}

export interface GameState {
  players: Player[];
  board: Array<StatefulSpace | StatefulPropertySpace>
  turn: TurnState;
}

// export interface SpaceProps {
//     name: string;
//     image?: string;
//     index: number;
// }
// export type SpaceData = Omit<SpaceProps, "index">
// export type PropertySpaceData = Omit<PropertySpaceProps, "index">
