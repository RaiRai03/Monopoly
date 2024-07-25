import PlayerToken from "../Player Token/PlayerToken";
import { PropertySpaceProps } from "../common/types";
import classes from "./PropertySpace.module.css";

export default function PropertySpace({ 
  region, 
  name, 
  price,
  index,
  players,
}: PropertySpaceProps) {
  return (
    <div className={classes.space + ' boardspace-${index}'}>
      <div className={classes.region} style={{ backgroundColor: region }}></div>
      <h3 className={classes.name}>{name}</h3>
      <div>
         {players.map((player, index) => (
           <PlayerToken {...player} key={index} />
         ))}
       </div>
      <span className={classes.price}>Price: ${price}</span>
    </div>             
  );
}