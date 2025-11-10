import './styles/Board.css'
export default function ResetBTN({ setGo, setCells, setWinnimgMassage }) {
  function handleClick() {
    setGo("X");
    setCells(Array(9).fill(""));
    setWinnimgMassage("");
  }
  return (
    <div>
      <button className='resetBTN' onClick={handleClick}>Reset Game</button>
    </div>
  );
}