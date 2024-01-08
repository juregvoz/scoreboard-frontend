import "../App.css";
import { useState } from "react";
import Match from "../classes/Match.js";

function MatchStarter(props) {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  const handleClick = () => {
    if (homeTeam != "" && awayTeam != "") {
      var match = new Match(homeTeam, awayTeam);
      props.setMatches([...props.matches, match]);
      setHomeTeam("");
      setAwayTeam("");
    }
  };

  return (
    <div className="MatchStarter">
      <h3>Start a match</h3>
      <div>
        <input
          className="InputTeam"
          type="text"
          placeholder="Home Team"
          value={homeTeam}
          onChange={(e) => setHomeTeam(e.target.value)}
        ></input>
        <input
          className="InputTeam"
          type="text"
          placeholder="Away Team"
          value={awayTeam}
          onChange={(e) => setAwayTeam(e.target.value)}
        ></input>
        <button onClick={handleClick}>Start match</button>
      </div>
    </div>
  );
}

export default MatchStarter;
