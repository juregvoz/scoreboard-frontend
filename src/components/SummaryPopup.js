function SummaryPopup(props) {
  let matchesCopy = [...props.matches];

  matchesCopy.sort((a, b) => {
    let diff = a.getScoreSum() - b.getScoreSum();
    if (diff != 0) {
      return diff;
    } else {
      return a.startTime - b.startTime;
    }
  });

  matchesCopy.reverse();

  return (
    <div className="SummaryPopup">
      <ul className="UL">
        {matchesCopy.map((match) => (
          <li className="SummaryRow">
            <h3 className="SummaryText">
              {match.homeTeam + " " + match.homeTeamScore}
            </h3>{" "}
            <h3 className="SummaryText">{"-"}</h3>
            <h3 className="SummaryText">
              {match.awayTeam + " " + match.awayTeamScore}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SummaryPopup;
