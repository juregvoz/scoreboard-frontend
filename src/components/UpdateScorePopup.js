import { useState } from "react";

function UpdateScorePopup(props) {
  const top = 170 + props.index * 44;
  const topStyle = { top: top + "px" };

  const [homeTeamScore, setHomeTeamScore] = useState("");
  const [awayTeamScore, setAwayTeamScore] = useState("");

  const updateMatchScore = () => {
    let matchList = [...props.matches];
    matchList[props.index].homeTeamScore = homeTeamScore;
    matchList[props.index].awayTeamScore = awayTeamScore;
    props.setMatches(matchList);
    props.closePopup();
  };

  return (
    <div className="Popup" style={topStyle}>
      <div>{props.result}</div>
      <input
        className="ScoreInput"
        type="number"
        value={homeTeamScore}
        onChange={(e) => setHomeTeamScore(e.target.valueAsNumber)}
      />
      <input
        className="ScoreInput"
        type="number"
        value={awayTeamScore}
        onChange={(e) => setAwayTeamScore(e.target.valueAsNumber)}
      />
      <button className="Btn" onClick={updateMatchScore}>
        Update
      </button>
      <button className="Btn" onClick={props.closePopup}>
        Close
      </button>
    </div>
  );
}

export default UpdateScorePopup;
