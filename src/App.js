import "./App.css";
import { useState } from "react";

import MatchStarter from "./components/MatchStarter.js";
import Scoreboard from "./components/Scoreboard.js";
import SummaryPopup from "./components/SummaryPopup.js";

function App() {
  const [matches, setMatches] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openClosePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="App">
      <img
        src="https://sportradar.com/wp-content/uploads/2023/11/Sportradar-Brand-Line_Color_White.svg"
        class="Img"
      ></img>
      <MatchStarter matches={matches} setMatches={setMatches} />
      <Scoreboard matches={matches} setMatches={setMatches} />
      <div className="SummaryBtnDiv">
        <button className="BtnSummary Btn Text" onClick={openClosePopup}>
          {isPopupOpen ? "Hide summary" : "Show summary"}
        </button>
        {isPopupOpen && <SummaryPopup matches={matches} />}
      </div>
    </div>
  );
}

export default App;
