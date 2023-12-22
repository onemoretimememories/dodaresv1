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
    { text:"take off your partner's clothes using only your mouth.", emoji: "👄"},
    {text: "give your partner a hot wax massage.", emoji: "🌶️`"},
    {text: "let your partner lick whipped cream off of you.", emoji: "🍼"},
    {text: "tell your partner your wildest sex story.", emoji: "📕"},
    {text: "act out an iconic sex scene from a movie.", emoji: "🎥"},
    {text: "strip down to your underwear.", emoji: "🩲👙"},
    {text: "play the rest of this game naked.", emoji: "😏"},
    {text: "kiss your partner with passion like your life depended on it.", emoji: "💋"},
    {text: "use finger paint and your partner's body as canvas.", emoji: "🎨"},
    {text: "put an ice cube in your underwear.", emoji: "🧊"},
    {text: "send your partner a sexy voice note from the other room.", emoji: "🔉"},
    {text: "make your orgasm face.", emoji: "🫠"},
    {text: "show your partner what you want to do to your partner using only emojis.", emoji: "🫦🍦👙💦"},
    {text: "pretend to make an OnlyFans clip.", emoji: "📽️"},
    {text: "pretend to work at a phone sex line.", emoji: "☎️"},
    {text: "guide your partner around the house while wearing a blindfold.", emoji: "🕶️"},
    {text: "let your partner guide you around the house blindfolded.", emoji: "🕶️"},
    {text: "shave your partner's chest.", emoji: "🪒"},
    {text: "shave your partner's pubic hair.", emoji: "🪒"},
    {text: "give your partner a foot massage.", emoji: "🦶"},
    {text: "rub massage oil on your partner's private parts.", emoji: "🪔"},
    {text: "let your partner eat something off of you.", emoji: "🍴"},
    {text: "eat something off your partners body.", emoji: "🍴"},
    {text: "act out your favorite sex position with sound effects.", emoji: "🫦"},
    {text: "passionately make out with that pillow.", emoji: "🫦"},
    {text: "pretend to give something oral.", emoji: "🍦"},
    {text: "fake an orgasm.", emoji: "🫦"},
    {text: "show your partner the last porn you watched.", emoji: "🫦"},
    {text: "find the coin in your partner's pocket.", emoji: "🪙"},
    {text: "pillow fight your partner in your underwear.", emoji: "🥷"},
    {text: "put on your sexiest lingerie.", emoji: "👙"},
    {text: "let your partner dress you up in a sexy outfit.", emoji: "👙"},
    {text: "give your partner a massage.", emoji: "💆‍♀️"},
    {text: "let your partner tie you up.", emoji: "🪢"},
    {text: "tie your partner up.", emoji: "🪢"},
    {text: "hit on your partner like you're just meeting for the first time.", emoji: "😏"},
    {text: "go outside your room only wearing under garments.", emoji: "👙"},
    {text: "send a sext to a random person on Instagram.", emoji: "💬"},
    {text: "read dirty story out loud to your partner.", emoji: "📕"},
    {text: "send your partner a nude.", emoji: "👙"},
    {text: "lick honey off your partner.", emoji: "🍯"},
    {text: "make your partner Chai but BUTT naked.", emoji: "☕"},
    {text: "vacuum the rug naked.", emoji: "🧹"},
    {text: "give your partner a lap dance.", emoji: "💃"},
    {text: "do a belly dance.", emoji: "💃"},
    {text: "ask your partner about the perfect stranger encounter they want to have.", emoji: "🥵"},
    {text: "look for swinging couples online and message them.", emoji: "💏"},
    {text: "ask your partner about the idea of swinging with another couple.", emoji: "💍"},
    {text: "ask your partner's dirtiest fantasy.", emoji: "🎯"},
    {text: "watch a porn clip naked.", emoji: "📎"},
    {text: "lick your partner's earlobe.", emoji: "🧏"},
    {text: "kiss your partner's on back of the neck.", emoji: "🧣"},
    {text: "blindfold and talk dirty.", emoji: "🕶️😎"},
    {text: "kiss your partner's neck.", emoji: "👄💋"},
    {text: "lick your partner's inner thighs.", emoji: "👅"},
    {text: "lick your partner's genitals.", emoji: "👅"},
    {text: "pretend to make out like other people watching and you are teasing them.", emoji: ""},
    {text: "pretend you are a porn star and record a clip for your fans.", emoji: "📹"},
    {text: "blindfold your partner and touch them.", emoji: "😎🕶️"},
    {text: "order something sexy online for us to try together (i.e., massage oil or a new toy).", emoji: "🛒🛍️"},
    {text: "show off your body in a torch, act like you are on a stage.", emoji: "🔦"},
    {text: "use nipple clamps.", emoji: "🗜️"},
    {text: "let your partner use a sex toy on you.", emoji: "🪀"},
    {text: "use a sex toy on your partner.", emoji: "🪀"},
    {text: "touch yourself in front of your partner.", emoji: "🫦"},
    {text: "let your partner give you a foot job.", emoji: "🐾"},
    {text: "give your partner a foot job.", emoji: "🐾"},
    {text: "eat fruit sensually.", emoji: "🍉🍇🍈🍌"},
    {text: "do a nude photoshoot, your partner as the photographer.", emoji: "📷"},
    {text: "shower with your partner.", emoji: "🚿"},
    {text: "try a pick-up line on your partner.", emoji: "😏"},
    {text: "let your partner give you a hot wax massage.", emoji: "🌶️"},
  ];
let isYourNameTurn = Math.random() < 0.5;

function triggerFirstDare() {
  shuffleDare();
  document.getElementById("beginButton").style.display = "block";
}

function shuffleDare() {
  clearTimer();
  document.getElementById("beginButton").style.display = "block";
  let randomDareIndex = Math.floor(Math.random() * dares.length);
  let randomDare = dares[randomDareIndex];
  let playerName = isYourNameTurn
    ? document.getElementById("yourName").value
    : document.getElementById("partnersName").value;

  if (!playerName) {
    playerName = isYourNameTurn ? "Player 1" : "Player 2";
  }

  document.getElementById("dareEmoji").innerText = randomDare.emoji;
  document.getElementById("dareText").innerText = playerName + ", " + randomDare.text;
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
