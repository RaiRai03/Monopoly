import classes from  './App.module.css';
import "./App.global.css";
import PropertySpace from './PropertySpace/PropertySpace';
import { Space } from './Space/Space';
import { PropertySpaceData, SpaceData } from './common/types';
import { gameboard } from './board';

function isPropertySpace(
  space: SpaceData | PropertySpaceData
): space is PropertySpaceData {
  return (space as PropertySpaceData).region !== undefined;
};
function Board() {
  return (
    <div className={classes['grid-wrapper']}>
    {gameboard.map((space, index) => 
    isPropertySpace(space) ? (
      <PropertySpace index={index} key={index} {...space} />
    ) : (
      <Space index={index} key={index} {...space}/>
    )
  )}
  </div>
);
};

export default Board;
