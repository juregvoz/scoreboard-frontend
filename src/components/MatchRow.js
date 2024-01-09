import "../App.css";

function MatchRow(props) {
  const match = props.match;
  let result = `${match.homeTeam} ${match.homeTeamScore} - ${match.awayTeam} ${match.awayTeamScore}`;

  const removeMatch = () => {
    let matchList = [...props.matches];
    matchList.splice(props.index, 1);
    props.setMatches(matchList);
  };

  return (
    <li className="MatchRow">
      <div>{result}</div>
      <button className="Btn" onClick={removeMatch}>
        End match
      </button>
    </li>
  );
}

export default MatchRow;
