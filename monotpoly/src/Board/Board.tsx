import { MouseEventHandler } from "react";
import classes from "./Board.module.css";
import "./Board.global.css";
import PropertySpace from "../PropertySpace/PropertySpace.tsx";
import Space from "../Space/Space.tsx";
import {
  PropertySpaceData,
  SpaceData,
  StatefulPropertySpace,
  StatefulSpace,
  TurnState,
  isPropertySpace,
} from "../common/types.tsx";

interface BoardProps {
  boardState: Array<StatefulSpace | StatefulPropertySpace>;
  actions: { [key: string]: MouseEventHandler };
  turn: TurnState;
}
function Board({ boardState, actions, turn }: BoardProps) {
  return (
<div className={classes["grid-wrapper"]}>
      {boardState.map((space, index) =>
        isPropertySpace(space) ? (
          <PropertySpace index={index} key={index} {...space} />
        ) : (
          <Space index={index} key={index} {...space} />
        )
      )}
      <div className={classes.feedback}>
        {turn.currentPlayerHasMoved ? (
          <button onClick={actions.endTurn}>End Turn</button>
        ) : (
          <button onClick={actions.step}>Get Walkin'</button>
        )}
        {turn.offerToBuy && (
          <button onClick={actions.buyProperty}>Buy It!</button>
        )}
      </div>
    </div>
  );
}
export default Board;