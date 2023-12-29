let timer;
let timeLeft;
let selectedDareType = "foreplay";
document.querySelectorAll(".btn-group .btn").forEach((button) => {
  button.addEventListener("click", function () {
    selectedDareType = this.getAttribute("data-dare-type");
    document
      .querySelectorAll(".btn-group .btn")
      .forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

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
  {
    text: "take off your partner's clothes using only your mouth.",
    emoji: "👄",
    type: "foreplay",
  },
  {
    text: "give your partner a hot wax massage.",
    emoji: "🌶️",
    type: "foreplay",
  },
  {
    text: "let your partner lick whipped cream off of you.",
    emoji: "🍼",
    type: "foreplay",
  },
  {
    text: "tell your partner your wildest sex story.",
    emoji: "📕",
    type: "foreplay",
  },
  {
    text: "act out an iconic sex scene from a movie.",
    emoji: "🎥",
    type: "foreplay",
  },
  { text: "strip down to your underwear.", emoji: "🩲👙", type: "foreplay" },
  { text: "play the rest of this game naked.", emoji: "😏", type: "foreplay" },
  {
    text: "kiss your partner with passion like your life depended on it.",
    emoji: "💋",
    type: "foreplay",
  },
  {
    text: "use finger paint and your partner's body as canvas.",
    emoji: "🎨",
    type: "foreplay",
  },
  { text: "put an ice cube in your underwear.", emoji: "🧊", type: "foreplay" },
  {
    text: "send your partner a sexy voice note from the other room.",
    emoji: "🔉",
    type: "foreplay",
  },
  {
    text: "show your partner what you want to do to your partner using only emojis.",
    emoji: "🫦🍦👙💦",
    type: "foreplay",
  },
  { text: "pretend to make an OnlyFans clip.", emoji: "📽️", type: "hardcore" },
  {
    text: "pretend to work at a phone sex line.",
    emoji: "☎️",
    type: "hardcore",
  },
  {
    text: "guide your partner around the house while wearing a blindfold.",
    emoji: "🕶️",
    type: "foreplay",
  },
  {
    text: "let your partner guide you around the house blindfolded.",
    emoji: "🕶️",
    type: "hardcore",
  },
  { text: "shave your partner's chest.", emoji: "🪒", type: "hardcore" },
  { text: "shave your partner's pubic hair.", emoji: "🪒", type: "hardcore" },
  { text: "give your partner a foot massage.", emoji: "🦶", type: "foreplay" },
  {
    text: "rub massage oil on your partner's private parts.",
    emoji: "🪔",
    type: "hardcore",
  },
  {
    text: "let your partner eat something off of you.",
    emoji: "🍴",
    type: "foreplay",
  },
  {
    text: "eat something off your partners body.",
    emoji: "🍴",
    type: "foreplay",
  },
  {
    text: "act out your favorite sex position with sound effects.",
    emoji: "🫦",
    type: "hardcore",
  },
  {
    text: "passionately make out with that pillow.",
    emoji: "🫦",
    type: "foreplay",
  },
  { text: "pretend to give something oral.", emoji: "🍦", type: "hardcore" },
  { text: "fake an orgasm.", emoji: "🫦", type: "hardcore" },
  {
    text: "show your partner the last porn you watched.",
    emoji: "🫦",
    type: "hardcore",
  },
  {
    text: "find the coin in your partner's pocket.",
    emoji: "🪙",
    type: "foreplay",
  },
  {
    text: "pillow fight your partner in your underwear.",
    emoji: "🥷",
    type: "foreplay",
  },
  { text: "put on your sexiest lingerie.", emoji: "👙", type: "foreplay" },
  {
    text: "let your partner dress you up in a sexy outfit.",
    emoji: "👙",
    type: "foreplay",
  },
  { text: "give your partner a sensual.", emoji: "💆‍♀️", type: "hardcore" },
  { text: "let your partner tie you up.", emoji: "🪢", type: "hardcore" },
  { text: "tie your partner up.", emoji: "🪢", type: "hardcore" },
  {
    text: "hit on your partner like you're just meeting for the first time.",
    emoji: "😏",
    type: "foreplay",
  },
  {
    text: "go outside your room only wearing under garments.",
    emoji: "👙",
    type: "foreplay",
  },
  {
    text: "send a sext to a random person on Instagram.",
    emoji: "💬",
    type: "hardcore",
  },
  {
    text: "read dirty story out loud to your partner.",
    emoji: "📕",
    type: "hardcore",
  },
  { text: "send your partner a nude.", emoji: "👙", type: "foreplay" },
  { text: "lick honey off your partner.", emoji: "🍯", type: "hardcore" },
  { text: "give your partner a lap dance.", emoji: "💃", type: "foreplay" },
  { text: "do a belly dance.", emoji: "💃", type: "foreplay" },
  {
    text: "ask your partner about the perfect stranger encounter they want to have.",
    emoji: "🥵",
    type: "hardcore",
  },
  {
    text: "look for swinging couples online and message them.",
    emoji: "💏",
    type: "hardcore",
  },
  {
    text: "ask your partner about the idea of swinging with another couple.",
    emoji: "💍",
    type: "hardcore",
  },
  {
    text: "ask your partner's dirtiest fantasy.",
    emoji: "🎯",
    type: "hardcore",
  },
  { text: "watch a porn clip naked.", emoji: "📎", type: "hardcore" },
  { text: "lick your partner's earlobe.", emoji: "🧏", type: "hardcore" },
  {
    text: "kiss your partner's on back of the neck.",
    emoji: "🧣",
    type: "foreplay",
  },
  { text: "blindfold and talk dirty.", emoji: "🕶️😎", type: "foreplay" },
  { text: "kiss your partner's neck.", emoji: "👄💋", type: "foreplay" },
  { text: "lick your partner's inner thighs.", emoji: "👅", type: "hardcore" },
  { text: "lick your partner's genitals.", emoji: "👅", type: "hardcore" },
  {
    text: "pretend to make out like other people watching and you are teasing them.",
    emoji: "🥵",
    type: "hardcore",
  },
  {
    text: "pretend you are a porn star and record a clip for your fans.",
    emoji: "📹",
    type: "hardcore",
  },
  {
    text: "blindfold your partner and touch them.",
    emoji: "😎🕶️",
    type: "hardcore",
  },
  {
    text: "order something sexy online for us to try together (i.e., massage oil or a new toy).",
    emoji: "🛒🛍️",
    type: "foreplay",
  },
  {
    text: "show off your body in a torch, act like you are on a stage.",
    emoji: "🔦",
    type: "hardcore",
  },
  { text: "use nipple clamps.", emoji: "🗜️", type: "hardcore" },
  {
    text: "let your partner use a sex toy on you.",
    emoji: "🪀",
    type: "hardcore",
  },
  { text: "use a sex toy on your partner.", emoji: "🪀", type: "hardcore" },
  {
    text: "touch yourself in front of your partner.",
    emoji: "🫦",
    type: "hardcore",
  },
  {
    text: "let your partner give you a foot job.",
    emoji: "🐾",
    type: "hardcore",
  },
  { text: "give your partner a foot job.", emoji: "🐾", type: "hardcore" },
  { text: "eat fruit sensually.", emoji: "🍉🍇🍈🍌", type: "foreplay" },
  {
    text: "do a nude photoshoot, your partner as the photographer.",
    emoji: "📷",
    type: "foreplay",
  },
  { text: "shower with your partner.", emoji: "🚿", type: "foreplay" },
  {
    text: "try a pick-up line on your partner.",
    emoji: "😏",
    type: "foreplay",
  },
];
let isYourNameTurn = Math.random() < 0.5;

function triggerFirstDare() {
  shuffleDare();
  document.getElementById("beginButton").style.display = "block";
}

function shuffleDare() {
  clearTimer();
  document.getElementById("beginButton").style.display = "block";
  let filteredDares = dares.filter((dare) => dare.type === selectedDareType);
  let randomDare =
    filteredDares[Math.floor(Math.random() * filteredDares.length)];

  let playerName = isYourNameTurn
    ? document.getElementById("yourName").value
    : document.getElementById("partnersName").value;

  if (!playerName) {
    playerName = isYourNameTurn ? "Player 1" : "Player 2";
  }

  document.getElementById("dareDisplay").innerText =
    playerName + ", " + randomDare.text + " " + randomDare.emoji;
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
