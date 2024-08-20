console.log(':-)')

let homeScore = 0
let awayScore = 0
const homeWin = 'Home Team Wins!'
const awayWin = 'Away Team Wins!'

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
  updateScores()
  console.log('RESET')
}

function gameEnd() {
  if (homeScore >= 11) {
    alert(homeWin)
  } else if (awayScore >= 11) {
    alert(awayWin)
  }
}