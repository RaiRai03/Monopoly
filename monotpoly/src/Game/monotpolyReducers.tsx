import { GameState, Player, PropertySpaceData, isPropertySpace } from "../common/types";

function remove<T>(item: T, arr: Array<T>) {
    const index = arr.indexOf(item);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return [...arr]
}

const _handleLanding = (state: GameState): GameState => {
    const { turn, board, players } = state;
    const currentPlayer = players[turn.currentPlayerIndex];
    const currentSpace = board[currentPlayer.currentPosition];
    if (isPropertySpace(currentSpace)) {
        if (currentSpace.owner == undefined) {
            turn.offerToBuy = true;
        } else if (currentSpace.owner != currentPlayer) {
            _payRent(currentPlayer, currentSpace);
        }
    } else {
        console.log("you landed here");
    }
    return { ...state, turn };
};

const _payRent = (currentPlayer: Player, currentSpace: PropertySpaceData) => {
    currentPlayer.money -= currentSpace.rent;
    currentSpace.owner!.money += currentSpace.rent; //assert
    console.log(
        `${currentPlayer.name} paid ${currentSpace.rent} to ${
            currentSpace.owner!.name
        }.`
    );
};

export const buyProperty = (state: GameState): GameState => {
    const { turn, board, players } = state;
    const currentPlayer = players[turn.currentPlayerIndex];
    const currentSpace = board[
        currentPlayer.currentPosition
    ] as PropertySpaceData;
    if (currentPlayer.money >= currentSpace.price) {
        currentPlayer.money -= currentSpace.price;
        currentPlayer.ownedProperties.push(currentSpace);
        currentSpace.owner = currentPlayer;
        turn.offerToBuy = false;
        console.log(`${currentPlayer.name} bought ${currentSpace.name}.`);
    } else {
        console.log("Insufficient Funds.");
    }
    return { ...state };
};

export const endTurn = (state:GameState):GameState => {
    const { turn, board, players } = state;
    return {
        ...state,
        turn: {
            currentPlayerIndex: (turn.currentPlayerIndex + 1) % players.length,
            currentPlayerHasMoved: false,
            offerToBuy: false,
        },
    };
};

export const step = (state: GameState): GameState => {
    const {turn, board, players} = state; 
    const currentPlayer = players[turn.currentPlayerIndex];
    const currentIndex = currentPlayer.currentPosition;
    const currentSpace = board[currentIndex];
    const nextSpace = board[currentIndex + 1];

    currentPlayer.currentPosition += 1;
    currentSpace.players = remove(currentPlayer, currentSpace.players);
    nextSpace.players = [...nextSpace.players, currentPlayer];
    turn.currentPlayerHasMoved = true;
    return _handleLanding({
        players: [...players],
        board: [...board],
        turn: {...turn},
    });
};