export default function Cells({ go, winningMassage, setGo, id, cells, setCells, cell }) {
  const handleClicked = () => {
    if (cell || winningMassage) return; 

    if (go === "O") {
      handleCellChange("O");
      setGo("X");
    } else {
      handleCellChange("X");
      setGo("O");
    }
  };

  const handleCellChange = (cellToChange) => {
    const copyCells = [...cells];
    copyCells[id] = cellToChange;
    setCells(copyCells);
  };

  return (
    <div className="Squair" onClick={handleClicked}>
      <div className={`square ${cell}`}>
        {cell === "X" ? "X" : cell === "O" ? "O" : ""}
      </div>
    </div>
  );
}
