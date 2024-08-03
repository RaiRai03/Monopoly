import {MouseEventHandler} from "react";
import classes from  "./Board.module.css";
import "./Board.global.css";
import PropertySpace from '../PropertySpace/PropertySpace';
import { Space } from '../Space/Space';
import { PropertySpaceData, SpaceData, StatefulPropertySpace, StatefulSpace } from "../common/types";

interface BoardProps {
  boardState: Array<StatefulSpace | StatefulPropertySpace>;
  actions: { step: MouseEventHandler };
}

function isPropertySpace(
  space: SpaceData | PropertySpaceData
): space is PropertySpaceData {
  return (space as PropertySpaceData).region !== undefined;
};

function Board({boardState, actions}:BoardProps) {
  
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
        <button onClick={actions.step}> get walking</button>
      </div>
    </div>
  );
};

export default Board;
