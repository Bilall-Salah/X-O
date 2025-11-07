import { useEffect, useState } from "react";
import "/src/Components/styles/InputPlayers.css";
import { useNavigate } from "react-router-dom";
export default function SinglePlayerSetup({playerName,setPlayerName}) {
  const text = "To start a game, write your name please.";
  const speed = 50;
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < text.length) {
      const timeOut = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeOut);
    }
    
  }, [index, text]);
  const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/Board")
  }
    return (
        <div className="container">
            <div className="containerr">
            <p className="disc">{displayText}</p>
            <input
                type="text"
                name="playerName"
                    id=""
                    placeholder="  Write your name here."
                value={playerName}
                onChange={ (e)=> setPlayerName(e.target.value)}
                />
                <div className="btnContanier">
                    <button className="Btn" type="submit" onClick={handleSubmit}>Let's Start</button>

                </div>    
            </div>
        </div>
    )
}