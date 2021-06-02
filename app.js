let resultArea = document.getElementById("result");
let jokeButton = document.getElementById("jokeButton");
let anyButton = document.getElementById("any");
let customButton = document.getElementById("custom");
let programmingRadio = document.getElementById("programming");
let miscRadio = document.getElementById("misc");
let darkRadio = document.getElementById("dark");
let punRadio = document.getElementById("pun");
let spookyRadio = document.getElementById("spooky");
let christmasRadio = document.getElementById("christmas");
let radios = document.getElementById("radios");
let checks = document.getElementById("checks");

// let getJoke = async () => {}

async function getJoke() {
    const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  if (anyButton) {
    url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  }
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  if (data.type === "single") {
    resultArea.innerHTML = data.joke;
  }

  if (data.type === "twopart") {
    resultArea.innerHTML = `<p>${data.setup}</p><break><p>${data.delivery}</p>`;
  }
  // programming, misc, dark, pun, spooky, christmas
  unCheck();
  if (customButton.checked) {
    switch (data.category) {
      case programming:
        // code block
        url =
          "https://v2.jokeapi.dev/joke/programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
        break;
      case misc:
        // code block
        url =
          "https://v2.jokeapi.dev/joke/misc?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
        break;
      case dark:
        // code block
        url =
          "https://v2.jokeapi.dev/joke/dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
        break;
      case pun:
        // code block
        url =
          "https://v2.jokeapi.dev/joke/pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

        break;
      case spooky:
        // code block
        url =
          "https://v2.jokeapi.dev/joke/spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
        break;
      case christmas:
        // code block
        url =
          "https://v2.jokeapi.dev/joke/christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
        break;
      default:
      // code block
    }
  }
}

jokeButton.addEventListener("click", getJoke);
customButton.addEventListener("click", () => {
  anyButton.checked = false;
  customButton.checked = true;
});
anyButton.addEventListener("click", () => {
  customButton.checked = false;
  anyButton.checked = true;
});

function unCheck(e) {
  checks.children.map((node) => {
    if (node.id !== e.target.id) {
      node.checked = false;
    }
  });
}
