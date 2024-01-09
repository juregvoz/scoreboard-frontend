import "./App.css";
import { useState } from "react";

import MatchStarter from "./components/MatchStarter.js";
import Scoreboard from "./components/Scoreboard.js";

function App() {
  const [matches, setMatches] = useState([]);

  return (
    <div className="App">
      <MatchStarter matches={matches} setMatches={setMatches} />
      <Scoreboard matches={matches} />
    </div>
  );
}

export default App;
