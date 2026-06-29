export default function () {
  const menuDiv = document.createElement("div");
  const contentDiv = document.querySelector("#content");

  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "We only serve mac and cheese :)";

  const menuText = document.createElement("p");
  menuText.textContent =
    "The only other option we have is...buffalo mac and cheese";

  const menuText2 = document.createElement("p");
  menuText2.textContent =
    "Would you like some mac and cheese to wash your main course down with?";

  menuDiv.append(menuHeader, menuText, menuText2);
  contentDiv.append(menuDiv);
}
