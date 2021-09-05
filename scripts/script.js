const keyList = [
  "A",
  "boom",
  "S",
  "clap",
  "D",
  "hihat",
  "F",
  "kick",
  "G",
  "openhat",
  "H",
  "ride",
  "J",
  "snare",
  "K",
  "tink",
  "L",
  "tom",
];

function createButtons() {
  // populate keys contents
  let res = "";
  for (let i = 0; i < keyList.length - 1; i += 2) {
    res += `
      <div class='keys' id='${keyList[i + 1]}Button'>
      <p>${keyList[i]}</p>
      <p>${keyList[i + 1]}</p>
      <audio id="${keyList[i + 1]}Audio" src="./src/sounds/${
      keyList[i + 1]
    }.wav"/>
      </div>
      `;
  }
  return res;
}

document.getElementById("content").innerHTML = `${createButtons()}`;
