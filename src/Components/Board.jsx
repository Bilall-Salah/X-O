import './styles/Board.css';
import Cells from './Cells';
import { useState } from 'react';

export default function Board() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("X");

  return (
    <div className='container'>
      <div className='Board'>
        {cells.map((cell, index) => (
          <Cells
            key={index}
            id={index}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            cell={cell}
          />
        ))}
      </div>
    </div>
  );
}

