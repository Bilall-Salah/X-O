import { useNavigate } from "react-router-dom";
import "../Components/styles/homepage.css";
import { useState, useEffect } from "react";

export default function HomePage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Choose"); // ✅ صح
  };

  const text =
    "Engage in a classic battle of wits with this interactive Tic Tac Toe game. Challenge yourself or a friend to align three marks in a row on a sleek, responsive board designed for quick and fun gameplay.";

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const speed = 50;

  useEffect(() => {
    if (index < text.length) {
      const timeOut = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeOut);
    }
  }, [index, text]);

  return (
    <div className="container">
      <div className="containerr">
        <p className="introText">{displayText}</p>
        <div>
          <button className="startButton" type="submit" onClick={handleSubmit}>
            Let's Start Game
          </button>
        </div>
      </div>
    </div>
  );
}
