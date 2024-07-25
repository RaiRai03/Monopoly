import { useState } from "react";
import classes from "./App.module.css";
import "./App.global.css";
import PropertySpace from "./PropertySpace/PropertySpace";
import { Space } from "./Space/Space";
import { 
  PropertySpaceData,
  SpaceData, 
  Player, 
  StatefulPropertySpace,
  StatefulSpace,
} from "./common/types";
import { gameboard } from "./board.ts";

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
}
function makeStateful(space: SpaceData | PropertySpaceData){
  const statefulSpace:  StatefulSpace | StatefulPropertySpace = {
    ...space,
    players: new Array(),
  };
  return statefulSpace;
}
const statefulBoard = gameboard.map(makeStateful);
statefulBoard[0].players = [player, player2];

function Board() {
  const [boardState, setBoardState] = useState(statefulBoard);
  const step = ()=>{};
  return (
    <div className={classes["grid-wrapper"]}>
      {boardState.map((space, index) =>
        isPropertySpace(space) ? (
          <PropertySpace index={index} key={index} {...space} />
        ) : ( 
          <Space index={index} key={index} {...space} />
        )
      )}
      <div className="feedback">
        <button onClick={step}> get walkin</button>
      </div>
    </div>
  );
}

export default Board;
