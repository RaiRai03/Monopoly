import { FC } from "react";
import { SpaceProps } from "../common/types";

import classes from "./Space.module.css"
import PlayerToken from "../Player Token/PlayerToken";


export const Space: FC<SpaceProps> = ({ 
  name,
  image,
  index,
  players,
}: SpaceProps) => {
  return (
    <div className={classes.space + ` boardspace-${index}`}>
      <img src={image} alt={name} />
       <div>
         {players.map((player, index) => (
           <PlayerToken {...player} key={index} />
         ))}
       </div>
    </div>
  );
};