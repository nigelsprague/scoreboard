console.log(':-)')

let homeScore = 0
let awayScore = 0

function scorePoints(team, points) {
  if (team == )}

function scoreHome(points) {
  homeScore += points
  console.log('Home Team scores!')
  updateScores()
}

function scoreAway(points) {
  awayScore += points
  console.log('Away Team Scores!')
  updateScores()
}

function updateScores() {
  document.getElementById('homeCard').innerText = homeScore
  document.getElementById('awayCard').innerText = awayScore
  console.log('Home: ' + homeScore + ' Away: ' + awayScore)
}

function resetPoints() {
  homeScore = 0
  awayScore = 0
  updateScores()
  console.log('RESET')
}

function gameEnd() {
  if (homeScore >= 11) {
    document.getElementById('gameEnd')
  }
}