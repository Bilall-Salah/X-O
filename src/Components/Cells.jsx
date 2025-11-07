export default function Cells({ go, setGo,id,cells,setCells,cell}) {
    const handleClicked = () => {
        const notTaken = !cells[id];
        if (notTaken) {
            if (go === "O") {
                handleCellChange("O");
                setGo("X")
            } else if (go === "X") {
                handleCellChange("X");
                setGo("O")
            }
        }
    }
    const handleCellChange = (cellToChange) => {
        let copyCells = [...cells];
        copyCells[id] = cellToChange;
        setCells(copyCells);
    }
    return (
        <div className="Squair" onClick={handleClicked}> 
            <div className={`square ${cell}`}>
                {cell === "X" ? "X" : cell === "O" ? "O" : ""}
            </div>
        </div>
    )
}