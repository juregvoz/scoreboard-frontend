import "../App.css";
import { useState } from "react";
import UpdateScorePopup from "./UpdateScorePopup.js";

function MatchRow(props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const match = props.match;
  let result = `${match.homeTeam} ${match.homeTeamScore} - ${match.awayTeam} ${match.awayTeamScore}`;

  const removeMatch = () => {
    let matchList = [...props.matches];
    matchList.splice(props.index, 1);
    props.setMatches(matchList);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <li className="MatchRow">
      <div>{result}</div>

      {isPopupOpen && (
        <UpdateScorePopup
          result={result}
          index={props.index}
          matches={props.matches}
          setMatches={props.setMatches}
          closePopup={closePopup}
        />
      )}
      <button className="Btn" onClick={openPopup}>
        Update score
      </button>

      <button onClick={removeMatch}>End match</button>
    </li>
  );
}

export default MatchRow;
