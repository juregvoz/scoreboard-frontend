import "../App.css";

function MatchRow(props) {
  const match = props.match;
  let result = `${match.homeTeam} ${match.homeTeamScore} - ${match.awayTeam} ${match.awayTeamScore}`;

  return (
    <li className="MatchRow">
      <div>{result}</div>
    </li>
  );
}

export default MatchRow;
