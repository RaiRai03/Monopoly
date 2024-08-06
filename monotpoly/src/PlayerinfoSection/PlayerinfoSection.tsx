import { Player, TurnState } from "../common/types";
import classes from "./PlayerinfoSection.tsx";

interface PlayerInfoSectionProps {
    players: Player[],
    turn: TurnState;
    
}

export default function PlayerInfoSection({players, turn, }: PlayerInfoSectionProps) {
    return (
        <div>
            This is the player info section.
            {players.map(player=>(
                <PlayerInfoCard {...player} key={player.name}/>
            ))}
        </div>
    );
}

function PlayerInfoCard({ name, money, ownedProperties }: Player) {
    return (
        <div className={classes.card}>
            <h2 className={classes.name}>{name}</h2>
            <p>{name}'s Funds: ${money}</p>
            <ul>
                Properties Owned:
                {ownedProperties.map((op, i) => (
                    <li
                        style={{ backgroundColor: op.region }}
                        className={classes.bought}
                        key={i}
                    >
                        {op.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
