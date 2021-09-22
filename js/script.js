"use strict";
const button = document.querySelector("button");
const jokeElem = document.querySelector(".joke");

document.querySelector("h3").innerHTML += " \u{1f602}";

button.addEventListener("click", getJoke);
getJoke();

function getJoke() {
  let joke;
  const myHttp = new XMLHttpRequest();
  myHttp.open("GET", "https://icanhazdadjoke.com/");
  myHttp.setRequestHeader("Accept", "application/json");
  myHttp.send();
  myHttp.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status == 200) {
      joke = JSON.parse(this.response).joke;
      jokeElem.innerHTML = joke;
    }
  });
}
