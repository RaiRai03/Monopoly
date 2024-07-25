import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

type SquareColor = "red" | "black";
interface SquareProps {
  color: SquareColor;
}
function Square({ color }: SquareProps) {
  return <div className="square" style={{ backgroundColor: color }}></div>
}

interface BoardProps {
  ranks: number;
  files: number;
}

function Board({ ranks = 8, files = 8 }: BoardProps) {
  const squares = new Array(ranks).fill(new Array(files).fill(null));
  return (
    <>
      {squares.map((rank, rankIndex)=> (
        <div className="rank" key={rankIndex}> 
         {rank.map((piece: null, fileIndex: number) => (
            <Square 
              color={(rankIndex + fileIndex) % 2 == 0 ? "red" : "black"} 
              key={fileIndex} 
            />
          ))}
        </div> 
      ))}
    </>    
  );
}

function App() {
  return <Board ranks={7} files={9} />;
}

export default App;
