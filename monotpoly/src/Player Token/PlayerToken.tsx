import "react";
import { Player } from "../common/types";

const PlayerToken = ({ color, token }: Player) => {
    return <span style={{ color, fontSize: 30 }}>{token}</span>;
};
export default PlayerToken;
