import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Choose from "./Components/Choose";
import SinglePlayerSetup from "./Components/SinglePlayerSetup";
import MuliPlayerSetup from "./Components/MultiPlayerSetup";
import { useState } from "react";
import Footer from "./Components/Footer";
import Board from "./Components/Board";
export default function App() {
  const [playerName, setPlayerName] = useState("");
  const [playersName, setPlayersName] = useState({
    playerOne: "",
    playerTwo:"",
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Choose" element={<Choose />} />
        <Route path="/SinglePlayerSetup.jsx" element={<SinglePlayerSetup playerName={playerName} setPlayerName={setPlayerName} />} />
        <Route path="/MultiPlayerSetup.jsx" element={<MuliPlayerSetup playersName={playersName} setPlayersName={setPlayersName} />} />
        <Route path="/Board" element={<Board/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}


