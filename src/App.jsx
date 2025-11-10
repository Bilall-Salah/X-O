import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Choose from "./Components/Choose";
import SinglePlayerGame from "./Components/SinglePlayerGame";
import MultiPlayerGame from "./Components/MultiPlayerGame";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Choose" element={<Choose />} />
        <Route path="/SinglePlayerGame" element={<SinglePlayerGame />} />
        <Route path="/MultiPlayerGame" element={<MultiPlayerGame />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}


