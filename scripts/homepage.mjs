"use strict";

console.log("this script is finally loaded");
// imported variables
import { baseApiUrl } from "./modules.mjs";
import { rainyProdEndPoints } from "./modules.mjs";
// Imported functions
import { doFetchData } from "./modules.mjs";
import { returnCart } from "./modules.mjs";
import { createCart } from "./modules.mjs";
import { addToCart } from "./modules.mjs";

function genProdHtml(raincoat) {
  // console.log(raincoat);
  //    ------- variables -------
  const prodCardContainer = document.createElement("section");
  const productCard = document.createElement("div");
  const imgContForCard = document.createElement("div");
  const textContainer = document.createElement("div");
  const productTtl = document.createElement("p");
  const productDescription = document.createElement("p");
  const productPrice = document.createElement("p");
  //    ------- button add to cart -------
  const buyItem = document.createElement("button");
  buyItem.classList.add("buyProdButton");
  buyItem.textContent = "Add to cart ";
  buyItem.addEventListener("click", () => {
    console.log("id", raincoat.id);
    addToCart(raincoat);
  });
  // If I later filter with items on sale
  // const isProductOnSale = "";
  //                  insert image how?
  const productImg = document.createElement("img");
  // how to get the image????
  productImg.src = raincoat.image.url;
  // productImg.src = raincoat.image.url;
  //       ------- declaration from api -------
  // delete the Rainy days from the title
  productTtl.textContent = raincoat.title;
  productDescription.textContent = raincoat.description;
  // Change the int of price to num
  productPrice.textContent = raincoat.price;
  //       ------- styles/classes and ids -------
  prodCardContainer.classList.add("content-container");
  productCard.classList.add("card");
  imgContForCard.classList.add("card-image");
  textContainer.classList.add("card-text-field");
  productDescription.classList.add("product-txt");
  productTtl.classList.add("product-ttl");
  productPrice.classList.add("product-price");
  //       ------- append and return -------
  // to do
  // 1. add imgs
  // 2. create a div with class card-image
  // 3. create a div with class card.
  // 4. append card-image and card

  // if appending is correct like nesting
  textContainer.append(productTtl, productDescription, productPrice, buyItem);
  productCard.append(imgContForCard, textContainer);
  prodCardContainer.append(productCard);
  return prodCardContainer;
}
// Display html to the DOM
function displayRainCoatsLi(rainCoats) {
  const displayContainer = document.querySelector("#display-container");
  rainCoats.data.forEach((rainCoat) => {
    const ProdHtml = genProdHtml(rainCoat);
    displayContainer.appendChild(ProdHtml);
  });
}
// async function main() {
//   createCart();
//   const { data: rainCoats } = await doFetchData(rainyProdEndPoints);
//   // const raincoats = rainCoats.data;
//   displayRainCoatsLi(rainCoats);
// }

async function main() {
  createCart();
  try {
    const { data: rainCoats } = await doFetchData(rainyProdEndPoints);
    // const rainCoats = { data: rainCoats }.data;
    displayRainCoatsLi(rainCoats);
  } catch (error) {
    console.error();
  }
}

main();

//      ------- Working on -------
// const filterForHim = document.querySelector("#for-him");
// const filterForHer = document.querySelector("#for-her");
// let productByGender = " ";

//      ------- Working on -------
//  use for loop to loop throught all product .
// if the value of gender is male add class or id of For him
//                         else set value to 'for her' id or class
