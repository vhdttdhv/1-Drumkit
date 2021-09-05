function addOnclicks() {
  let elements = document.getElementsByClassName("keys");
  // iterate all buttons
  Array.from(elements).forEach((element) => {
    let name = element.innerHTML.toString();
    //get audio file name
    let sound = name.slice(
      name.lastIndexOf("<p>") + 3,
      name.lastIndexOf("</p>")
    );
    // populate onClick
    element.addEventListener("mousedown", () => playSoundAndPressEffect(sound));
    element.addEventListener("mouseup", () => stopPressEffect(sound));
  });
}

function addKeysListener() {
  document.addEventListener("keydown", (e) => {
    let keyIndex = keyList.indexOf(e.key.toUpperCase());
    if (keyIndex >= 0) playSoundAndPressEffect(keyList[keyIndex + 1]);
  });

  document.addEventListener("keyup", (e) => {
    let keyIndex = keyList.indexOf(e.key.toUpperCase());
    if (keyIndex >= 0) stopPressEffect(keyList[keyIndex + 1]);
  });
}

function playSoundAndPressEffect(sound) {
  document.getElementById(`${sound}Audio`).play();
  document.getElementById(`${sound}Button`).classList.toggle("clicked");
}

function stopPressEffect(sound) {
  document.getElementById(`${sound}Button`).classList.toggle("clicked");
}

addOnclicks();
addKeysListener();
