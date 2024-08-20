console.log(':-)')

let homeScore = 0
let awayScore = 0

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
    console.log('end')
    document.getElementById('gameEnd').innerText = 'Home Team Wins!'
    document.getElementById('gameEnd')
    element.classList.remove('d-none')
    document.getElementById('reset')
    element.classList.add('d-none')
    // } else if (awayScore >= 11) {
    //   document.getElementById('gameEnd').innerText = 'Away Team Wins!'
    //   document.getElementById('gameEnd')
    //   element.classList.remove('d-none')
    //   document.getElementById('reset')
    //   element.classList.add('d-none')
  }
}

function playAgain() {
  document.getElementById('reset')
  element.classList.remove('d-none')
  document.getElementById('gameEnd')
  element.classList.add('d-none')
  resetPoints()
}