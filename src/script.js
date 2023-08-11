function tryUs() {
  let name = prompt("Waht is your name?");
  let phone = prompt("What is your phone number?");
  let food = prompt("What kind of food would you like to try?");
  let heading = document.querySelector("h1");
  if (food === "pork") {
    heading.innerHTML =
      "Nice choice!🥰" +
      name +
      " " +
      "Don't forget to check your phone." +
      " " +
      "Thank You.";
  } else {
    heading.innerHTML =
      "That's great!🥰" +
      name +
      " " +
      "Don't forget to check your phone." +
      " " +
      "Thank You.";
  }
}
let tryButton = document.querySelector("button");
tryButton.addEventListener("click", tryUs);
