let text =
  " Today, I celebrate not just your birth, but your incredible presence in my life and in the journey of SLINT Tech. You’ve been more than a friend, you’re a true co-founder, a pillar of strength, and a visionary partner. Keep being the light and the leader you are we have a future to build together.";
let word = text.split("");
let i = 0;
let interval = setInterval(writeText, 80);
function writeText() {
  let p = document.getElementsByTagName("p")[0];
  if (i < word.length) {
    p.innerHTML += word[i];
    i++;
  } else {
    clearInterval(interval);
  }
}
function Z() {
  swal(
    "You're the unit of sweetness kitty🍫🍫🍫🍰🍰🍰🍬🍬🍬🍨🍨🍧🍧🍧🍦🍦🍦🍦🍦🍦!"
  );
  let x = document.getElementById("Z");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function X() {
  swal("Youre cutest kitty!🌹🌹🌹🌹🌸🌸🌸🌼🌼🌼🌻🌻🌻🌺🌺🌺");
  let x = document.getElementById("X");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function Y() {
  swal("Meowwwwwwwwww😂😂😂😹😹😹😹 You're always Gooooooood 😺 like a 🐈😻😽");
  let x = document.getElementById("Y");
  if (x.style.display === " ") {
    x.style.display = "block";
  } else {
    x.style.display = " ";
  }
}

window.onerror = function () {
  console.error = null;
  return true;
};
