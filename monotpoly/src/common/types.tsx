export interface Player {
  name: string;
  token: string;
  color: string;
  ownedProperties: PropertySpaceData[];
  money: number;
  currentPosition: number;
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

export function isPropertySpace(
  space: SpaceData | PropertySpaceData
): space is PropertySpaceData {
  return (space as PropertySpaceData).region !== undefined;
}

export interface PropertySpaceData extends SpaceData {
  region: string;
  price: number;
  owner?: Player;
  rent: number;
}

export type StatefulPropertySpace = PropertySpaceData & HasPlayers;
export type PropertySpaceProps = StatefulPropertySpace & Indexed;

export interface TurnState {
  currentPlayerIndex: number;
  currentPlayerHasMoved: boolean;
  offerToBuy: boolean;
}

export interface GameState {
  players: Player[];
  board: Array<StatefulSpace | StatefulPropertySpace>;
  turn: TurnState;
}
