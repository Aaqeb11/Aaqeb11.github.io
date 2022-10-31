const quotes = [
  "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
  "There is nothing more deceptive than an obvious fact.",
  "I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.",
  "I never make exceptions. An exception disproves the rule.",
  "What one man can invent another can discover.",
  "Nothing clears up a case so much as stating it to another person.",
  "Education never ends, Watson. It is a series of lessons, with the greatest for the last.",
];
let wordIndex = 0;
// let startTime = Date.now();
// let startTime = new Date();
// alert(startTime.getMinutes());

let quoteElement = document.getElementById("quote");
let messageElement = document.getElementById("message");
let typedElementValue = document.getElementById("input-box");
let ReloadButton = document.getElementById("btn2");
let messageBox = document.getElementById("msg");
ReloadButton.addEventListener("click", () => {
  location.reload();
});
if (messageBox.style.display === "none") {
  messageBox.style.display = "block";
} else {
  messageBox.style.display = "none";
}

// let timerValue = document.getElementById("time");
let clickButton = document.getElementById("btn");
let timerButton = document.getElementById("time");
let count = 0;
let count2 = 0;
let ArQuotes = [];
let NoOfletters = 0;
let CorrectLetter = [];
let cLetters = [];
let correctLetter = 0;
let partialcLetters = 0;

typedElementValue.addEventListener("input", input);
function input() {
  const arrayQuote = quoteElement.querySelectorAll("span");
  const inputQuote = typedElementValue.value.split("");
  const ArrayQuote = quoteElement.querySelectorAll("p");
  const inputQuote2 = typedElementValue.value.split("");
  let correct = true;

  arrayQuote.forEach((characterSpan, index) => {
    const character = inputQuote[index];
    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      characterSpan.classList.add("untyped");
      correct = false;
      count2++;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
      partialcLetters = typedElementValue.value.split(" ");
    } else {
      characterSpan.classList.remove("correct");
      characterSpan.classList.add("incorrect");
      correct = false;
    }
  });

  // CorrectLetter = Math.floor(
  //   (partialcLetters.length / (NoOfletters - partialcLetters.length)) * 60
  // );
  if (correct) {
    count++;
    cLetters.push(typedElementValue.value.split(" "));
    typedElementValue.value = null;
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    quoteElement.innerHTML = "";
    quote.split("").forEach((character) => {
      const characterSpan = document.createElement("span");
      characterSpan.innerText = character;
      quoteElement.appendChild(characterSpan);
    });
    quote.split(" ").forEach((word) => {
      const wordSpan = document.createElement("p");
      wordSpan.innerText = word;
    });
    ArQuotes.push(quote.split(" "));
  }
}

document.getElementById("btn").addEventListener("click", () => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  ArQuotes.push(quote.split(" "));
  quoteElement.innerHTML = "";
  quote.split(" ").forEach((word) => {
    const wordSpan = document.createElement("p");
    wordSpan.innerText = word;
    quoteElement.appendChild(wordSpan);
  });

  // quote.split(' ').forEach(word => {
  //   const wordSpan = document.createElement('span');
  //   wordSpan.innerText = word;
  // });
  quoteElement.innerHTML = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    quoteElement.appendChild(characterSpan);
  });

  typedElementValue.value = null;
  const startingMinutes = 1;
  let time = startingMinutes * 60;

  const countdownEl = document.getElementById("time");

  function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + `${seconds}` : `${seconds}`;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time == -1) {
      clearInterval(Id);
      countdownEl.innerHTML = "Time Up!";
      countdownEl.style.color = "white";
      countdownEl.style.backgroundColor = "red";
      typedElementValue.style.top = "-80px";
      function summary() {
        let letters = document.querySelectorAll("span");

        let incorrectLetter = document.querySelectorAll(".incorrect");

        for (let i = 0; i < ArQuotes.length; i++) {
          NoOfletters = NoOfletters + ArQuotes[i].length;
        }
        for (let j = 0; j < cLetters.length; j++) {
          correctLetter = correctLetter + cLetters[j].length;
        }
        if (messageBox.style.display === "none") {
          messageBox.style.display = "block";
        }
        if (cLetters.length == undefined) {
          messageBox.innerHTML =
            "Speed: " + Math.floor(partialcLetters.length / 1);
        } else {
          messageBox.innerHTML = "Speed: " + Math.floor(correctLetter / 1);
        }
      }
      summary();
      if (quoteElement.style.display === "none") {
        quoteElement.style.display = "block";
      } else {
        quoteElement.style.display = "none";
      }
    }
  }
  const Id = setInterval(updateCountDown, 1000);
  if (
    clickButton.addEventListener("click", () => {
      countdownEl.style.backgroundColor = "inherit";
      countdownEl.style.color = "inherit";
      time = startingMinutes * 60;
      if (quoteElement.style.display === "none") {
        quoteElement.style.display = "block";
      }
      timerButton.style.top = "-270px";
    })
  );
});
