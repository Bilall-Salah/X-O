import { useEffect, useState } from "react";
import"/src/Components/styles/InputPlayers.css";
export default function MultiPlayerSetup({ playersName, setPlayersName }) {
    const text = "To start Playing with your friend pls recourd your names here.";
    const speed = 50;
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
    return (
        <div className="container">
            <div className="containerr">
            <p className="disc">{displayText}</p>
            <input
                type="text"
                name="PlayerOne"
                id=""
                placeholder="  Write here Player One name."
                value={ playersName.playerOne}
                onChange={(e) => setPlayersName(e.target.value)}
            />
            <input
                type="text"
                name="PlayerTwo"
                id=""
                placeholder="  Write here Player Two name."
                value={ playersName.playerTwo}
                onChange={(e) => setPlayersName(e.target.value)}
                />
                                <div className="btnContanier">
                    <button className="Btn" type="submit">Let's Start</button>

                </div>
        </div>
        </div>
    )
}