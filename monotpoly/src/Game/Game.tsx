import Board from '../Board/Board';
import GameGrid from '../GameGrid/GameGrid';
import PlayerInfoSection from "../PlayerinfoSection/PlayerinfoSection";
import useMonotpoly from './useMonotpoly';

export default function Game() {
    const { state, actions } = useMonotpoly();
    const { board, players, turn } = state;
    return (
        <GameGrid>
  <PlayerInfoSection players={players} turn={turn} />
            <Board boardState={board} actions={actions} turn={turn}/>
        </GameGrid>
    );
}
