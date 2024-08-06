import { buyProperty, endTurn, step } from "./monotpolyReducers";
import { 
    GameState,
    Player, 
    SpaceData, 
    PropertySpaceData, 
    StatefulSpace, 
    StatefulPropertySpace
} from "../common/types";
import { gameboard } from "../board";
import { useReducer } from "react";

const player: Player = {
    name: "Alice",
    token: "♟︎",
    color: "purple",
    money: 400,
    currentPosition: 0,
    ownedProperties: [],
};
const player2: Player = {
    ...player,
    name: "Bob",
    color: "orange",
    ownedProperties: [],
};

function makeStateful(space: SpaceData | PropertySpaceData) {
    const stateFullSpace: StatefulSpace | StatefulPropertySpace = {
        ...space,
        players: new Array(),
    };
    return stateFullSpace;
}

const initialState: GameState = {
    board: gameboard.map(makeStateful),
    players: [player, player2],
    turn: {
        currentPlayerIndex: 0,
        currentPlayerHasMoved: false,
        offerToBuy: false,
    },
};
initialState.board[0].players = [player, player2];

interface MonotpolyAction {
    type: string;
}
// const statefulBoard = gameboard.map(makeStateful);
// statefulBoard[0].players = [player, player2];

function monotpolyReducer(
    state: GameState, 
    action: MonotpolyAction
): GameState {    
    switch(action.type){
        case "step": {
        const newState = step(state);
        return {...newState };
        }
        case "endTurn": {
            return {...endTurn(state)}
        }
        case "buyProperty": {
            return { ...buyProperty(state) };
        }
    }
    return { ...state };
}

export default function useMonotpoly() {
    const [state, dispatch] = useReducer(monotpolyReducer, initialState)
    const actions = {
        step: () => dispatch({ type: "step",}),
        endTurn: () => dispatch({type: "endTurn"}),
        buyProperty: () => dispatch({type: "buyProperty"}),
    };
    return { state, actions };
}
