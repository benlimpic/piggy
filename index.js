const input = document.getElementById("input");
const button = document.getElementById("button");
const readThis = document.getElementById("readThis");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  output.textContent = piggy(input.value);
  readToMe();
});

readThis.addEventListener("click", () => {
  output.textContent = input.value;
  readToMe();
});

function piggy(str) {
  if (str.length === 0) {
    return "";
  }
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

let voiceArray = [100, 84, 61, 52, 40, 39, 13, 15];

function voiceRoller() {
  let number = Math.floor(Math.random() * 8);
  console.log(number);
  return number;
}

function readToMe() {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[voiceArray[voiceRoller()]];
  msg.volume = 1; // From 0 to 1
  msg.rate = 0.5; // From 0.1 to 10
  msg.pitch = 1; // From 0 to 2
  msg.text = output.textContent;
  msg.lang = "en-au";
  speechSynthesis.speak(msg);
}
