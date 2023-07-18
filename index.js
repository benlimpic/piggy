const input = document.getElementById("input");
const button = document.getElementById("button");
const inputRead = document.getElementById("inputRead");
const output = document.getElementById("output");
const synth = window.speechSynthesis;
let clicked;
let voices;

//@ VOICES------------------------------------------>

const loadVoices = () => {
  voices = synth.getVoices();
}

loadVoices()

const readToMe = () => {
  clicked = true
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[15];
  msg.volume = 1; // From 0 to 1
  msg.rate = 0.7; // From 0.1 to 10
  msg.pitch = 1; // From 0 to 2
  msg.text = output.textContent;
  msg.lang = "en-au";
  synth.speak(msg);
  msg.onend = (event) => {
    inputRead.innerText = "▶︎"
    clicked = false
  };
}

//! PIG------------------------------------------>

const piggy = (str) => {
  // if (str.length === 0) {
  //   return "";
  // }
  str = str.toLowerCase();
  words = str.split(" ");
  piggyWords = words.map((word) => {
    if (
      word[0] === "a" ||
      word[0] === "e" ||
      word[0] === "i" ||
      word[0] === "o" ||
      word[0] === "u"
    ) {
      return `${word}way`;
    }
    let first = word[0];
    let rest = word.slice(1);
    return `${rest}${first}ay`;
  });
  return piggyWords.join(" ");
}

//# BUTTONS------------------------------------------>

button.addEventListener("click", () => {
  output.textContent = piggy(input.value);
});

readThis.addEventListener("click", () => {
  output.textContent = input.value;
});

inputRead.addEventListener("click", () => {
  clicked = !clicked
  if (clicked === false) {
    synth.cancel();
    inputRead.innerText = "▶︎"
    return;
  }
  else if (clicked === true) {
    inputRead.innerText = "⏸︎"
    readToMe()
    return
  }
});