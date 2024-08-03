import Board from "../Board/Board";
import GameGrid from "../GameGrid/GameGrid";
import PlayerinfoSection from "../PlayerinfoSection/PlayerinfoSection";
import useMonotpoly from "./useMonotpoly";

export default function Game() {
  const {state, actions} = useMonotpoly();
  const { board, players, turn } = state;
  return (
    <GameGrid>
      <PlayerinfoSection />
      <Board boardState={board} actions={actions} />
    </GameGrid>  
  );
}