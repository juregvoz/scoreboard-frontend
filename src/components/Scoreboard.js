import "../App.css";
import MatchRow from "./MatchRow.js";

function Scoreboard(props) {
  return (
    <div className="Scoreboard">
      <ul className="UL">
        {props.matches.map((match, index) => (
          <MatchRow
            key={index}
            matches={props.matches}
            setMatches={props.setMatches}
            match={match}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default Scoreboard;
