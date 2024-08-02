import {useState} from "react";
import classes from  './App.module.css';
import "./App.global.css";
import PropertySpace from './PropertySpace/PropertySpace';
import { Space } from './Space/Space';
import { 
  PropertySpaceData, 
  SpaceData, 
  Player,
  StatefulPropertySpace,
  StatefulSpace,
} from './common/types';
import { gameboard } from './board';

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

function isPropertySpace(
  space: SpaceData | PropertySpaceData
): space is PropertySpaceData {
  return (space as PropertySpaceData).region !== undefined;
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

function Board() {
  const [boardState, setBoardState] = useState(statefulBoard);
  const step = ()=>{
    const currentIndex = boardState.findIndex(space =>
      space.players.includes(player)
    );
    const currentSpace = boardState[currentIndex];
    const nextSpace = boardState[currentIndex + 1];
    currentSpace.players = remove(player, currentSpace.players);
    nextSpace.players= [...nextSpace.players, player];
    setBoardState([...boardState]);
  };
  return (
    <div className={classes['grid-wrapper']}>
{boardState.map((space, index) => 
      isPropertySpace(space) ? (
        <PropertySpace index={index} key={index} {...space} />
      ) : (
        <Space index={index} key={index} {...space}/>
      )
    )}
    <div className={classes.feedback}>
        <button onClick={step}> get walking</button>
      </div>
    </div>
  );
};

export default Board;
