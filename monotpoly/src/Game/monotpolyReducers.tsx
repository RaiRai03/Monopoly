import { GameState } from "../common/types";

function remove<T>(item: T, arr: Array<T>){
    const index = arr.indexOf(item);
    if (index > -1){
      arr.splice(index, 1);
    }
    return [...arr];
  }

export const step = (state:GameState):GameState => {
  const {turn, board, players} = state;
  const currentPlayer = players[turn.currentIndex];
  const currentIndex = currentPlayer.currentPostion;
  const currentSpace = board[currentIndex];
  const nextSpace = board[currentIndex + 1];
  currentPlayer.currentPostion += 1;
  currentSpace.players = remove(currentPlayer, currentSpace.players);
  nextSpace.players= [...nextSpace.players, currentPlayer];
  turn.currentPlayerHasMoved=true
  return {
    players: [...players],
    board: [...board],
    turn: { ...turn },
  };
};