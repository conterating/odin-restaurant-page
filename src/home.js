export default function () {
  const homeHeader = document.createElement("h1");
  homeHeader.textContent = "The Duble Taunt";

  const homeText = document.createElement("p");
  homeText.textContent =
    "This is the best restaurant in the whole world it makes the best mac and cheese you'll ever have. Come try it, you'll never be able to have a different mac and cheese again.";

  const homeImage = document.createElement("img");
  homeImage.src =
    "https://www.allrecipes.com/thmb/e8uotDI18ieXNBY0KpmtGKbxMRM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/238691-Simple-Macaroni-And-Cheese-mfs_008-4x3-6ed91ba87a1344558aacc0f9ef0f4b41.jpg";
  homeImage.style.width = "300px";
  homeImage.style.height = "300px";

  const contentDiv = document.querySelector("#content");
  contentDiv.append(homeHeader, homeText, homeImage);
}
