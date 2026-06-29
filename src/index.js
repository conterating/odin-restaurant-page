import initialPageLoad from "./home.js";
import menuPageLoad from "./menu.js";
import contactPageLoad from "./contact.js";

initialPageLoad();

const contentDiv = document.querySelector("#content");
const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((element) => {
  element.addEventListener("click", (event) => {
    contentDiv.innerHTML = "";

    if (event.target.textContent == "Home") {
      initialPageLoad();
    } else if (event.target.textContent == "Menu") {
      menuPageLoad();
    } else if (event.target.textContent == "Contact") {
      contactPageLoad();
    }
  });
});
