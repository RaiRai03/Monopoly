import { useReducer } from "react";
import { gameboard } from "../board";
import { step } from "./monotpolyReducers";
import { 
  Player, 
  SpaceData, 
  PropertySpaceData, 
  StatefulSpace, 
  StatefulPropertySpace,
  GameState,
} from "../common/types";

const player: Player = {
    name: "alice",
    token: "♟︎",
    color: "purple",
    money: 400,
    currentPostion: 0,
    ownedProperties: [],
  };
  const player2: Player = {
    ...player,
    name: "bob",
    color: "orange",
    ownedProperties: [],
  };
  
  
  function makeStateful(space: SpaceData | PropertySpaceData) {
    const statefulSpace: StatefulSpace | StatefulPropertySpace = {
      ...space,
      players: new Array(),
    };
    return statefulSpace;
  }
const initialState: GameState = {
  board: gameboard.map(makeStateful),
  players: [player, player2],
  turn: {
      currentPlayerHasMoved: false,
      currentPlayerIndex: 0,
      offerToBuy: false,
      currentIndex: undefined
  },
};

initialState.board[0].players = [player, player2];

interface MonotpolyAction {
    type: string;
}
function monotpolyReducer(
  state: GameState, 
  action: MonotpolyAction
): GameState {
  switch(action.type) {
    case "step": {
      const newState = step(state);
      return { ...newState };
    }
  }
  return { ...state };
}
  
export default function useMonotpoly(){
    const [state, dispatch] = useReducer(monotpolyReducer , initialState);
    const actions = {
      step: () => dispatch({ type: "step" }),
    };
    return { state, actions };
}