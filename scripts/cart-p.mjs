// steps to display cart items

// 1. Get the  display container container
// 2. Get the items from the local storage
// 3. Loop through the items in the cart
// 4. Generate HTML from the item
// 5. Append the HTML yo the display container
//
//
console.log("hei there im connected");
function genHtmlCartProd(raincoat) {
  const prodOverwiew = document.querySelector("#cartCont");
  const prodCard = `
  <h2>Order review</h2>
  <div class="check-outbox" id="singleCartCheckoutProd">
    <img src="${raincoat.img}" alt="MyPlaceHolder IMG" id="checkOutProdImg">
    <div class="check-outbox2">
    <p id="prodQuant">${raincoat.quantity}</p>
        <p class="product-ttl" id="prodTtl">${raincoat.name}</p>
        <p class="product-price" id="prodPrice">${raincoat.price}</p>
    </div>
</div>`;
  prodOverwiew.innerHTML = prodCard;
}
// function genHtmlCartProd() {
//   //    ------- variables -------
//   // one div
//   const singleProdCheckoutDiv = document.createElement("div");
//   const singleProdCheckoutImg = document.createElement("img");
//   // singleProdCheckoutImg.src = "";
//   const singleProdCheckoutTtl = document.createElement("p");
//   singleProdCheckoutTtl.textContent = raincoat.title;
//   const singleProdCheckoutTxt = document.createElement("p");
//   // singleProdCheckoutTtl = raincoat.description;
//   const singleProdCheckoutPrice = document.createElement("p");
//   singleProdCheckoutPrice = raincoat.price;
//   const decorLine = document.createElement("hr");
//   // next div
//   const cartCalculations = document.createElement("div");
//   const textSub = document.createElement("h6");
//   textSub.textContent = "Subtotal";
//   const numSub = document.createElement("h6");
//   // numSub.textContent= '';
//   const shippingTxt = document.createElement("h6");
//   shippingTxt.textContent = "Shipping";
//   const shippingCost = document.createElement("h6");
//   shippingCost.textContent = "Free";
//   const totalCostText = document.createElement("h6");
//   totalCostText = "Total";
//   const totalCostAmount = document.createElement("h6");
//   totalCostAmount.textContent = raincoat.price * raincoat.quantity;

//       ------- declaration from items added to the cart -------
//   cartCalculations.append(
//     numSub,
//     shippingTxt,
//     shippingCost,
//     totalCostText,
//     totalCostAmount
//   );
//   singleProdCheckoutDiv.append(
//     singleProdCheckoutImg,
//     singleProdCheckoutTtl,
//     singleProdCheckoutTxt,
//     singleProdCheckoutPrice,
//     decorLine,
//     cartCalculations
//   );
//   return singleProdCheckoutDiv;
// }

//    ------- delete from cart -------
function removeFromCart() {
  const productId = raincoat.id;
  const filteredProd = cart.filter((currentProd) => {
    currentProd.id !== productId;
  });
  cart = filteredProd;
}
// add an delete button

//    ------- empty cart -------
function emptyCart() {
  cart = [];
}
// add an empty cart button

function displayCartProd() {
  const cartCont = document.querySelector("#cartCont");
  const cart = JSON.parse(localStorage.getItem("cart"));

  // cart.forEach((currentProd) => {
  //   const singleProdCard = genHtmlCartProd(currentProd);
  // });
  // is it cart not an array ??
  cart.forEach(function (currentProd) {
    const singleProdCard = genHtmlCartProd(currentProd);
    cartCont.append(singleProdCard);
  });
}

function checkoutCart() {
  displayCartProd();
}
checkoutCart(checkoutCart);
