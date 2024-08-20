let homeScore = 0
let awayScore = 0
const homeWin = 'Home Team Wins!'
const awayWin = 'Away Team Wins!'
const gameEndPoints = 11

function scorePoints(team, points) {
  if (team == 'home') {
    homeScore += points
    console.log('Home Team scores!')
    updateScores()
  } else if (team == 'away') {
    awayScore += points
    console.log('Away Team Scores!')
    updateScores()
  }
}

// function scoreHome(points) {
//   homeScore += points
//   console.log('Home Team scores!')
//   updateScores()
// }

// function scoreAway(points) {
//   awayScore += points
//   console.log('Away Team Scores!')
//   updateScores()
// }

function updateScores() {
  document.getElementById('homeCard').innerText = homeScore
  document.getElementById('awayCard').innerText = awayScore
  console.log('Home: ' + homeScore + ' Away: ' + awayScore)
}

function resetPoints() {
  homeScore = 0
  awayScore = 0
  console.log('RESET')
  updateScores()
}

// NOTE not sure why the alert is not working, read on the topic but still can't seem to figure it
function gameEnd() {
  if (homeScore >= gameEndPoints) {
    console.log(homeWin)
    alert(homeWin)
  } else if (awayScore >= gameEndPoints) {
    console.log(awayWin)
    alert(awayWin)
  }
}