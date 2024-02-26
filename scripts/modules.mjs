"use strict";
//                 .....   variables ......
export const baseApiUrl = "https://v2.api.noroff.dev";
// export const someIdToFetch = `${""}`;
export const rainyProdEndPoints = `${baseApiUrl}/rainy-days`;
// with template for url//need to create constants/vars

// fetch the api async
export async function doFetchData(url) {
  try {
    // start a loading spinner
    // const res = await axios.get("https://v2.api.noroff.dev/./rainy-days/");
    const res = await axios.get(url);
    console.log(res, res.data, res.data.data);
    return res;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  //   stop loading spinner
}

// creating cart component
export function createCart() {
  const cart = localStorage.getItem("cart");
  if (!cart) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
}
// function to return the stored cart
export function returnCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
}

//  adding to cart
export function addToCart(raincoat) {
  // the function that returns my cart is not functioning..
  // returnCart();
  console.log("addedToCart", raincoat);
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
  const prodIndex = cart.findIndex(function (currentProd) {
    console.log("currentProd");
    if (raincoat.id === raincoat.id) {
      return true;
    } else {
      return false;
    }
  });
  if (prodIndex === -1) {
    cart.push({ ...raincoat, quantity: 1 });
  } else {
    cart[prodIndex].quantity++;
  }
  // console.log("prodIndex", prodIndex);
  cart.push(raincoat);
  localStorage.setItem("cart", JSON.stringify(cart));
}
