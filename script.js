let timer;
let timeLeft;

function proceedToNextScreen() {
  if (
    document.getElementById("yourName").value &&
    document.getElementById("partnersName").value
  ) {
    document.getElementById("nameInputSection").style.display = "none";
    document.getElementById("gameSection").style.display = "block";
    triggerFirstDare();
    $("#instructionsModal").modal("show");
  }
}

document
  .getElementById("nextButton")
  .addEventListener("click", proceedToNextScreen);

document
  .getElementById("yourName")
  .addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      proceedToNextScreen();
    }
  });

document
  .getElementById("partnersName")
  .addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      proceedToNextScreen();
    }
  });

let dares = [
  "take off your partner's clothes using only your mouth.",
  "do a belly dance.",
  "give your partner a lap dance.",
  "vacuum the rug naked.",
  "make your partner a chai but BUTT naked.",
  "lick Roof Afzha off your partner.",
  "send your partner a nude.",
  "read dirty story out loud to your partner.",
  "send a sext to a random person on Instagram.",
  "go outside your room only wearing under garments.",
  "hit on your partner like you're just meeting for the first time.",
  "tie your partner up.",
  "let your partner tie you up.",
  "give your partner a massage.",
  "let your partner dress you up in a sexy outfit.",
  "put on your sexiest lingerie.",
  "pillow fight your partner in your underwear.",
  "find the coin in your partner's pocket.",
  "show your partner the last porn you watched.",
  "fake an orgasm.",
  "pretend to give something oral.",
  "passionately make out with that pillow.",
  "act out your favorite sex position with sound effects.",
  "eat something off your partners body.",
  "let your partner eat something off of you.",
  "rub massage oil on your partner's private parts.",
  "give your partner a foot massage.",
  "shave your partner's pubic hair.",
  "shave your partner's chest.",
  "let your partner guide you around the house blindfolded.",
  "guide your partner around the house while wearing a blindfold.",
  "pretend to work at a phone sex line.",
  "pretend to make an OnlyFans clip.",
  "show your partner what you want to do to your partner using only emojis.",
  "make your orgasm face.",
  "send your partner a sexy voice note from the other room.",
  "put an ice cube in your underwear.",
  "use finger paint and your partner's body as canvas.",
  "kiss your partner with passion like your life depended on it.",
  "play the rest of this game naked.",
  "play the rest of this game naked.",
  "play the rest of this game naked.",
  "play the rest of this game naked.",
  "play the rest of this game naked.",
  "play the rest of this game naked.",
  "play the rest of this game naked.",
  "strip down to your underwear.",
  "strip down to your underwear.",
  "strip down to your underwear.",
  "strip down to your underwear.",
  "act out an iconic sex scene from a movie.",
  "tell your partner your wildest sex story.",
  "let your partner lick whipped cream off of you.",
  "give your partner a hot wax massage.",
  "let your partner give you a hot wax massage.",
  "try a pick-up line on your partner.",
  "shower with your partner.",
  "do a nude photoshoot with your partner as the photographer.",
  "eat fruit sensually.",
  "give your partner a foot job.",
  "let your partner give you a foot job.",
  "touch yourself in front of your partner.",
  "use a sex toy on your partner.",
  "use a sex toy on your partner.",
  "use a sex toy on your partner.",
  "let your partner use a sex toy on you.",
  "use nipple clamps.",
  "sing your partner a sexy ballad.",
  "show off your body in a torch, act like you are on a stage.",
  "show off your body in a torch, act like you are on a stage.",
  "show off your body in a torch, act like you are on a stage.",
  "order something sexy online for us to try together (i.e., massage oil or a new toy).",
  "blindfold your partner and touch them.",
  "blindfold your partner and touch them.",
  "blindfold your partner and touch them.",
  "blindfold and talk dirty.",
  "pretend you are a porn star and record a clip for your fans.",
  "pretend to make out like other people watching and you are teasing them.",
  "lick your partner's genitals.",
  "lick your partner's genitals.",
  "lick your partner's genitals.",
  "lick your partner's genitals.",
  "lick your partner's inner thighs.",
  "kiss your partner's neck.",
  "kiss your partner's on back of the neck.",
  "lick your partner's earlobe.",
  "watch a porn clip naked.",
  "watch a porn clip while touching each other.",
  "ask your partner's dirtiest fantasy.",
  "ask your partner about the idea of swinging with another couple.",
  "look for swinging couples online and message them.",
  "ask your partner about the perfect stranger encounter they want to have.",
];
let isYourNameTurn = Math.random() < 0.5;

function triggerFirstDare() {
  shuffleDare();
  document.getElementById("beginButton").style.display = "block";
}

function shuffleDare() {
  clearTimer();
  document.getElementById("beginButton").style.display = "block";
  let randomDare = dares[Math.floor(Math.random() * dares.length)];
  let playerName = isYourNameTurn
    ? document.getElementById("yourName").value
    : document.getElementById("partnersName").value;

  if (!playerName) {
    playerName = isYourNameTurn ? "Player 1" : "Player 2";
  }

  document.getElementById("dareDisplay").innerText =
    playerName + ", " + randomDare;
  isYourNameTurn = !isYourNameTurn;
}

function clearTimer() {
  clearInterval(timer);
  document.getElementById("timer").innerText = "";
  document.getElementById("pauseButton").style.display = "none";
}

document.getElementById("shuffleButton").addEventListener("click", shuffleDare);
document.getElementById("skipButton").addEventListener("click", shuffleDare);

document.getElementById("beginButton").addEventListener("click", function () {
  this.style.display = "none";
  startTimer(60);
});

document.getElementById("pauseButton").addEventListener("click", function () {
  togglePauseResume();
});

function togglePauseResume() {
  if (document.getElementById("pauseButton").innerText === "Pause Timer") {
    clearInterval(timer);
    document.getElementById("pauseButton").innerText = "Resume Timer";
    timeLeft = parseInt(
      document.getElementById("timer").innerText.split(" ")[0]
    );
  } else {
    startTimer(timeLeft);
    document.getElementById("pauseButton").innerText = "Pause Timer";
  }
}

function startTimer(duration) {
  timeLeft = duration;
  document.getElementById("pauseButton").style.display = "block";
  timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearTimer();
      document.getElementById("timer").innerText = "Time's up!";
      document.getElementById("shuffleAgainButton").style.display = "block";
    } else {
      document.getElementById("timer").innerText = timeLeft + " seconds left";
    }
    timeLeft -= 1;
  }, 1000);
}

document
  .getElementById("shuffleAgainButton")
  .addEventListener("click", function () {
    this.style.display = "none";
    shuffleDare();
  });

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("introVideo").style.display = "none";
  }, 4000);
});
