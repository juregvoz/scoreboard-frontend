import "../App.css";
import { useState } from "react";
import Match from "../classes/Match.js";

function MatchStarter(props) {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  const startMatch = () => {
    if (homeTeam != "" && awayTeam != "" && homeTeam != awayTeam) {
      if (props.matches.length < 1) {
        createNewMatch();
      } else {
        if (!props.matches.some((match) => checkTeamsAvailability(match))) {
          createNewMatch();
        }
      }
    }
  };

  const checkTeamsAvailability = (match) => {
    return (
      [match.homeTeam, match.awayTeam].includes(homeTeam) ||
      [match.homeTeam, match.awayTeam].includes(awayTeam)
    );
  };

  const createNewMatch = () => {
    var match = new Match(homeTeam, awayTeam);
    props.setMatches([...props.matches, match]);
    setHomeTeam("");
    setAwayTeam("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      startMatch();
    }
  };

  return (
    <div className="MatchStarter">
      <h3 className="Text">Start a match</h3>
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
          onKeyDown={handleEnter}
        ></input>
        <button className="Btn Text" onClick={startMatch}>
          Start match
        </button>
      </div>
    </div>
  );
}

export default MatchStarter;
