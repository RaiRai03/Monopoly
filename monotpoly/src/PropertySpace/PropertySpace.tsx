import { memo, FC } from "react";
import PlayerToken from "../Player Token/PlayerToken";
import { PropertySpaceProps } from "../common/types";
import classes from "./PropertySpace.module.css";

const PropertySpace :FC<PropertySpaceProps> = memo(
    ({ region, name, price, index, players,}) => {
    return (
        <div className={classes.space + ` boardspace-${index}`}>
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
);
export default PropertySpace

