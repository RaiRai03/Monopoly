import { FC } from "react";
import { SpaceProps } from "../common/types";

import classes from "./Space.module.css"

export const Space: FC<SpaceProps> = ({name, image, index}:SpaceProps)=> {
    return (
        <div className={classes.space + ` boardspace-${index}`}>
            <img src={image} alt={name} />
        </div>
    );
};
