export default class Match {
  constructor(homeTeam, awayTeam) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeTeamScore = 0;
    this.awayTeamScore = 0;
    this.startTime = new Date();
  }

  setScore(homeTeamScore, awayTeamScore) {
    this.homeTeamScore = homeTeamScore;
    this.awayTeamScore = awayTeamScore;
  }

  getScoreSum() {
    return this.homeTeamScore + this.awayTeamScore;
  }
}
