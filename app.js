console.log(':-)')

let homeScore = 0
let awayScore = 0
// let home1 = document.getElementById('home1')
// let home3 = document.getElementById('home3')
// let away1 = document.getElementById('away1')
// let away3 = document.getElementById('away3')

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