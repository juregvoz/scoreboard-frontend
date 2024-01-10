import { useState } from "react";

function UpdateScorePopup(props) {
  const top = 302 + props.index * 70;
  const topStyle = { top: top + "px" };

  const [homeTeamScore, setHomeTeamScore] = useState("");
  const [awayTeamScore, setAwayTeamScore] = useState("");

  const updateMatchScore = () => {
    if (homeTeamScore != "" && awayTeamScore != "") {
      let matchList = [...props.matches];
      matchList[props.index].homeTeamScore = homeTeamScore;
      matchList[props.index].awayTeamScore = awayTeamScore;
      props.setMatches(matchList);
      props.closePopup();
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      updateMatchScore();
    }
  };

  return (
    <div className="UpdateScorePopup" style={topStyle}>
      <div className="Result Text">{props.result}</div>
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
        onKeyDown={handleEnter}
      />
      <button
        className="Btn BtnUpdateScorePopup Text"
        onClick={updateMatchScore}
      >
        Update
      </button>
      <button
        className="Btn BtnUpdateScorePopup Text"
        onClick={props.closePopup}
      >
        Close
      </button>
    </div>
  );
}

export default UpdateScorePopup;
