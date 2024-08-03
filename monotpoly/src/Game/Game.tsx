import Board from "../Board/Board";
import GameGrid from "../GameGrid/GameGrid";
import PlayerinfoSection from "../PlayerinfoSection/PlayerinfoSection";
import { 
    PropertySpaceData, 
    SpaceData, 
    Player,
    StatefulPropertySpace,
    StatefulSpace,
  } from '../common/types';
import { gameboard } from '../board';
import { useState } from "react";

const player: Player = {
  name: "player",
  token: "♟︎",
  color: "purple",
};
const player2: Player = {
  name: "player2",
  token: "♟︎",
  color: "orange",
};


function makeStateful(space: SpaceData | PropertySpaceData) {
  const stateFullSpace: StatefulSpace | StatefulPropertySpace = {
    ...space,
    players: new Array(),
  };
  return stateFullSpace;
}

const statefulBoard = gameboard.map(makeStateful);
statefulBoard[0].players = [player, player2];

function remove<T>(item: T, arr: Array<T>){
  const index = arr.indexOf(item);
  if (index > -1){
    arr.splice(index, 1);
  }
  return [...arr]
}

export default function Game() {
  const [boardState, setBoardState] = useState(statefulBoard);
  const step = () => {
    const currentIndex = boardState.findIndex(space =>
      space.players.includes(player)
    );
    const currentSpace = boardState[currentIndex];
    const nextSpace = boardState[currentIndex + 1];
    currentSpace.players = remove(player, currentSpace.players);
    nextSpace.players= [...nextSpace.players, player];
    setBoardState([...boardState]);
  };

  const actions = { step };

    return (
     <GameGrid>
        <PlayerinfoSection />
        <Board boardState={boardState} actions={actions} />
    </GameGrid>  
  );
}