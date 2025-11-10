import './styles/Board.css';
import Cells from './Cells';
import { useEffect, useState } from 'react';
import ResetBTN from './ResetBTN';
export default function Board() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winningMassage, setWinningMassage] = useState("");
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const [go, setGo] = useState("X");
  useEffect(() => {
  let winner = "";
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      winner = cells[a];
      break;
    }
  }

  if (winner) {
    setWinningMassage(`${winner} Wins!`);
  } else {
    setWinningMassage("");
  }
  }, [cells]);
  return (
    <div className='contain'>
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
            winningMassage={winningMassage}
          />
        ))}
        <div className='WinningMassage'>
        {winningMassage ? winningMassage : `It's now ${go} turn!`}
        </div>

        
      </div>
      <ResetBTN setCells={setCells } setGo={setGo } setWinningMassage={ setWinningMassage} />
    </div>
  );
}

