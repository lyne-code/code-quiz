function printHighscores() {
  // either get scores from localstorage or set to empty array
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  // (optional) sort highscores by score property in descending order

  highscores.forEach(function(score) {
  // for each score
    // create li tag for each high score
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + "-" + score.score;
  
    // display on page
    var olEl = document.createElementId("highscores");
    olEl.appendChild(liTag);
  });
}

// attach clear event to clear score button
 // (and reload)
function clearHighscores() {
}

//document.getElementById("clear").onclick = clearHighscores;

// run printhighscore when page loads
window.onload = printHighscores;