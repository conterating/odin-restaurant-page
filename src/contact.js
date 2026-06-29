export default function () {
  const contentDiv = document.querySelector("#content");

  const contactHeader = document.createElement("h1");
  contactHeader.textContent = "You wanna contact us?";

  const contactEmail = document.createElement("p");
  contactEmail.textContent = "thebestmacandcheese@email.email";

  const contactPhone = document.createElement("p");
  contactPhone.textContent = "MAC-AND-CHEESE";

  contentDiv.append(contactHeader, contactEmail, contactPhone);
}
