import classes from "./GameGrid.module.css";

interface GameGridProps{
    children: JSX.Element []
}
export default function GameGrid({children}: GameGridProps) {
    return <div className={classes["game-grid"]}> {...children}</div>
}