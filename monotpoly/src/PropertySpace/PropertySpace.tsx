import { PropertySpaceProps } from "../common/types";
import classes from "./PropertySpace.module.css";

export default function PropertySpace({ 
    region, 
    name, 
    price ,
    index
}: PropertySpaceProps) {
    return (
        <div className={classes.space + ` boardspace-${index}`}>
            <div className={classes.region} style={{ backgroundColor: region }}></div>
            <h3 className={classes.name}>{name}</h3>
            <span className={classes.price}>Price: ${price}</span>
        </div>
    );
}
