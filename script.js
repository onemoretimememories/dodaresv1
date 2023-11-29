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
  "Reenact your special move.",
  "Make out with your pillow.",
  "Act out the last time you did it.",
  "Act out the first time you did it.",
  "Attempt to twerk.",
  "Lap dance on a chair.",
  "Do a sexy dance with a broom.",
  "Reenact the opposite gender in bed.",
  "Suck your finger passionately.",
  "Try to take off your underwear/bra without flashing.",
  "Give your best “ready for you” face.",
  "Incorporate a towel into a seductive dance.",
  "Seductively show your booty.",
  "Fake an orgasm.",
  "Crawl on the ground seductively.",
  "Give the closest thing to your left a passionate kiss.",
  "Make out with yourself in the mirror.",
  "Take a video of you spanking yourself.",
  "Pretend you’re doing the deed with the closest thing to your right.",
  "Put on your sexiest song and catwalk and send it as a video.",
  "Demonstrate how to put a protection on and send it as a video.",
  "Grind on a pillow for 20 seconds.",
  "Take your pants off.",
  "Send a sexy text to your third contact.",
  "Text your ex and ask if there’s anything you can improve on in bed.",
  "Take off your shirt and swing it in the air.",
  "Put on the sexist outfit you own.",
  "In a video, demonstrate the most flexible position you can do.",
  "Send your dirtiest text with three sexy emojis.",
  "Describe yourself seductively.",
  "Talk without opening your mouth.",
  "Eat something in a seductive manner.",
  "Write your ex’s/ partner’s name on your underwear.",
  "Demonstrate your biggest turn-on.",
  "Demonstrate your biggest turn-off.",
  "Send a picture as if you were on top.",
  "Send a picture of you praying on your knees to your ex.",
  "Tell your partner that you want to try a different position.",
  "Call someone and explain your biggest turn-on.",
  "Send a link to your favourite adult site.",
  "Explain your favourite porn videos and why.",
  "Demonstrate your wildest fantasies.",
  "Send a voice message of you moaning to your partner.",
  "Drop an ice cube in your pants.",
  "Send a voice message of your dirtiest thoughts.",
  "Text like you are doing the deed right now.",
  "Pour a drink into your mouth.",
  "Send a video of you slowly picking up something to your partner.",
  "Without you in the frame, send a video of you throwing your clothes across the room.",
  "Imagine your phone as a third person you are trying to seduce and record it.",
  "Imagine you are with someone other than your partner and make out.",
  "Imagine you are watching your partner making out with someone else and touch yourself.",
  "Try to seduce a stranger and record it.",
  "Act like you are giving a massage to a hot stranger and seduce them.",
  "Act like you are in an elevator with a stranger and make out.",
  "Act like you are making out with someone else but your partner is peeking.",
  "Act like you are stuck in a train's compartment with a stranger and make out.",
  "Act like you are the boss at the office and grope your partner.",
  "Act like you ran into a hot stranger at a huge grocery store and make out behind the shelves.",
  "Act like you are in the library and flirting with a cute person.",
  "Sit on a chair and allow your partner to grope you from behind.",
  "Pin yourself against the wall and let your partner make out.",
  "Touch your partner inappropriately in a public setting.",
  "Lick your partner's nipples slowly.",
  "Lick your partner's intimate part slowly.",
  "Caress your partner's thigh in a seductive way.",
  "Finger / Stroke your partner.",
  "Lick your partner's tongue slowly.",
  "Kiss your partner's neck.",
  "Kiss and lick inner thighs of your partner.",
  "Set a reminder to make out tomorrow at noon.",
  "Set a reminder to kiss each other passionately on a daily basis.",
  "Rub your partner's intimate part.",
  "Spit and Rub your partner's genitals.",
  "Lick your partner's asshole.",
  "Touch your partner's asshole.",
  "Finger your partner's asshole.",
  "Rub finger on your partner's asshole.",
  "Lick your partner's toes passionately.",
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
