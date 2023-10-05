"use strict";
const purchasingArray = [];
const tableProducts = [
  {
    src: "assets/glass-top-coffee-table.jpg",
    alt: "Glass Top Coffee Table",
    description: "Mid-Century Modern Glass Top Coffee Table",
    price: 1329.99,
  },
  {
    src: "assets/french-oval-coffee-table.jpg",
    alt: "French Vintage Oval Coffee Table",
    description: "French Vintage Oval Coffee Table",
    price: 1395.0,
  },
  {
    src: "assets/vintage-cocktail-table.jpg",
    alt: "Vintage Cocktail Table",
    description: "Vintage Cocktail Table",
    price: 2200.0,
  },
  {
    src: "assets/bamboo-round-coffee-table.webp",
    alt: "Bamboo Round Coffee Table",
    description: "1950's Bamboo Round Coffee Table",
    price: 495,
  },
];
const chairProducts = [
  {
    src: "assets/vintage-diner-chair.jpg",
    alt: "Vintage Diner Chairs",
    description: "Vintage Diner Chair - Set of 2",
    price: 435.95,
  },
  {
    src: "assets/mid-century-leopard-chairs.webp",
    alt: "Mid Century Modern Leopard Chairs",
    description: "Mid Century Modern Leopard Chair - Set of 2",
    price: 1500,
  },
  {
    src: "assets/lounge-chair-ottoman-set.webp",
    alt: "Lounge Chair and Ottoman",
    description: "Chrome Lounge Chair and Ottoman, 1970's",
    price: 2150,
  },
];
const sofaProducts = [
  {
    src: "assets/pink-velvet-settee.webp",
    alt: "Pink Velvet Settee",
    description: "Mid-Century Burger Bun Pink Velvet Settee",
    price: 3500,
  },
  {
    src: "assets/pheasant-villa-loveseat.webp",
    alt: "21st Century Pheasant Loveseat",
    description: "21st Century Pheasant Loveseat",
    price: 3950,
  },
  {
    src: "assets/italian-art-deco-sofa.webp",
    alt: "Italian Art Deco Green Sofa",
    description: "Vintage Italian Art Deco Green Sofa",
    price: 4900,
  },
  {
    src: "assets/skyscraper-sectional.webp",
    alt: "70s Skyscraper Velvet Sectional Sofa",
    description: "Vintage 70s Skyscraper Velvet Sectional Sofa",
    price: 6950,
  },
];
const bedroomProducts = [
  {
    src: "assets/spanish-armoire.webp",
    alt: "18th Century Spanish Colonial Armoire",
    description: "18th Century Spanish Colonial Armoire",
    price: 2325,
  },
  {
    src: "assets/bedroom-set-floating-bookcase.webp",
    alt: "Queen Bed & Night Stands With Floating Bookcase",
    description: "Queen Bed & Night Stands With Floating Bookcase",
    price: 3500,
  },
  {
    src: "assets/dressers-pair.webp",
    alt: "1950's Mid Century Modern Dressers",
    description: "1950's Mid Century Modern Dressers",
    price: 2450,
  },
];

const main = document.querySelector("main");
const tableContainer = document.querySelector("#tables-container");
const chairContainer = document.querySelector("#chairs-container");
const sofaContainer = document.querySelector("#sofas-container");
const bedroomContainer = document.querySelector("#bedroom-container");
const cartContainer = document.querySelector(".fa-cart-shopping");
const cartCounter = document.querySelector("#cart-counter");
cartCounter.style.display = "none";
const currentCart = document.querySelector("#current-cart");
const purchasingCart = document.querySelector("#purchasing-cart");
const cartDeleteButton = document.querySelector("#cart-delete-button");
const subtotalTaxTotalField = document.querySelector(
  "#subtotal-tax-total-field"
);
const buttonContainer = document.querySelector("#button-container");
const cashButton = document.querySelector("#cash-button");
const creditButton = document.querySelector("#credit-button");
const cashCheckout = document.querySelector("#cash-checkout");
const creditCheckout = document.querySelector("#credit-checkout");
const cashSubmitButton = document.querySelector("#cash-submit");
const cashOnHand = document.querySelector("#cash-on-hand");
const cashChangeTotal = document.querySelector("#cash-checkout-change-total");
const itemContainer = document.querySelector("#item-container");
const subtotalContainer = document.querySelector(".subtotal");
const taxContainer = document.querySelector(".tax");
const totalContainer = document.querySelector(".total");
const cashContainerTotal = document.querySelector("#cash-container-total");
const receiptContainer = document.querySelector("#receipt-container");
const itemReceiptContainer = document.querySelector("#item-receipt-container");
const submitButtonCredit = document.querySelector("#submit-button-credit");
const cashCheckoutFormContainer = document.querySelector(
  "#cash-checkout-form-container"
);
const creditCardForm = document.querySelector("#credit-card-form");
const receiptHeader = document.querySelector("#receipt-header");
const itemReceiptTotal = document.querySelector("#item-receipt-total");
const orderConfirmation = document.querySelector("#order-confirmation");
const receiptDeleteButton = document.querySelector("#receipt-delete-button");
let total = null;
let tax = null;
let subtotal = null;
cartContainer.addEventListener("click", (event) => {
  itemContainer.innerHTML = ""; // gets rid of Cart Array Duplication
  if (event.target.classList.contains("fa-cart-shopping")) {
    currentCart.classList.remove("hidden");
    subtotalTaxTotalField.classList.remove("hidden");
    buttonContainer.classList.remove("hidden");
    // receiptContainer.classList.remove("hidden");
    // receiptHeader.classList.add("hidden");
    purchasingArray.forEach((item) => {
      const newLi = document.createElement("li");
      const image = document.createElement("img");
      const descriptionP = document.createElement("p");
      const priceP = document.createElement("p");
      image.setAttribute("src", item.src);
      image.setAttribute("alt", item.alt);
      descriptionP.textContent = item.description;
      priceP.textContent = `$${item.price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        minimumIntegerDigits: 1,
      })}`;
      newLi.append(image, descriptionP, priceP);
      itemContainer.append(newLi);
    });
    subtotal = purchasingArray.reduce((ac, cv) => ac + cv.price, 0);
    tax = subtotal * 0.06;
    total = subtotal + tax;
    subtotalContainer.textContent = `Subtotal: $${subtotal.toLocaleString(
      undefined,
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        minimumIntegerDigits: 1,
      }
    )}`;
    taxContainer.textContent = `Tax: $${tax.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      minimumIntegerDigits: 1,
    })}`;
    totalContainer.textContent = `Total: $${total.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      minimumIntegerDigits: 1,
    })}`;
  }
});
cartDeleteButton.addEventListener("click", (event) => {
  if (event.target.id === "cart-delete-button") {
    currentCart.classList.add("hidden");
  }
});
cashButton.addEventListener("click", (event) => {
  cashContainerTotal.innerHTML = "";
  if (event.target.id === "cash-button") {
    cashCheckout.classList.remove("hidden");
    purchasingCart.classList.add("hidden");
    cashContainerTotal.textContent = `Cart Total: $${total.toLocaleString(
      undefined,
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        minimumIntegerDigits: 1,
      }
    )}`;
    cashContainerTotal.textContent = `Cart Total: $${total.toLocaleString(
      undefined,
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        minimumIntegerDigits: 1,
      }
    )}`;
  }
});
const cashDeleteButton = document.querySelector("#cash-delete-button");
cashDeleteButton.addEventListener("click", (event) => {
  if (event.target.id === "cash-delete-button") {
    cashCheckout.classList.add("hidden");
    purchasingCart.classList.remove("hidden");
  }
});
creditButton.addEventListener("click", (event) => {
  if (event.target.id === "credit-button") {
    creditCheckout.classList.remove("hidden");
    purchasingCart.classList.add("hidden");
  }
});
const creditDeleteButton = document.querySelector("#credit-delete-button");
creditDeleteButton.addEventListener("click", (event) => {
  if (event.target.id === "credit-delete-button") {
    creditCheckout.classList.add("hidden");
    purchasingCart.classList.remove("hidden");
  }
});
const categoryFiller = (array, container, arrayName) => {
  array.forEach((item, index) => {
    const list = document.createElement("li");
    const image = document.createElement("img");
    const descriptionP = document.createElement("p");
    const priceP = document.createElement("p");
    const addToCart = document.createElement("button");
    addToCart.setAttribute("data-index", index);
    addToCart.setAttribute("data-array", arrayName);
    addToCart.classList.add("cart-button");
    image.setAttribute("src", item.src);
    image.setAttribute("alt", item.alt);
    descriptionP.textContent = item.description;
    priceP.textContent = `$${item.price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      minimumIntegerDigits: 1,
    })}`;
    addToCart.textContent = "Add to Cart";
    list.append(image, descriptionP, addToCart, priceP);
    container.append(list);
  });
};
categoryFiller(sofaProducts, sofaContainer, "sofaProducts");
categoryFiller(bedroomProducts, bedroomContainer, "bedroomProducts");
categoryFiller(chairProducts, chairContainer, "chairProducts");
categoryFiller(tableProducts, tableContainer, "tableProducts");
main.addEventListener("click", (event) => {
  // purchasingArray.innerHTML = "";
  // currentCart.innerHTML = "";
  if (event.target.classList.contains("cart-button")) {
    const index = event.target.getAttribute("data-index");
    const array = event.target.getAttribute("data-array");
    if (array === "sofaProducts") {
      purchasingArray.push(sofaProducts[index]);
    } else if (array === "bedroomProducts") {
      purchasingArray.push(bedroomProducts[index]);
    } else if (array === "chairProducts") {
      purchasingArray.push(chairProducts[index]);
    } else if (array === "tableProducts") {
      purchasingArray.push(tableProducts[index]);
    }
    let counter = purchasingArray.length;
    cartCounter.textContent = counter;
    if (counter > 0) {
      cartCounter.style.display = "block"; // Show the cart counter
    } else {
      cartCounter.style.display = "none"; // Hide the cart counter if there are no items
    }
  }
});
cashCheckoutFormContainer.addEventListener("submit", (event) => {
  itemReceiptContainer.innerHTML = "";
  subtotalContainer.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  taxContainer.textContent = `Tax: $${tax.toFixed(2)}`;
  totalContainer.textContent = `Total: $${total.toFixed(2)}`;
  const change = cashOnHand.value - total;
  cashChangeTotal.textContent = `Change: $${change.toFixed(2)}`;
  event.preventDefault();
  receiptContainer.classList.remove("hidden");
  orderConfirmation.classList.remove("hidden");
  // currentCart.classList.add("hidden");
  subtotalTaxTotalField.classList.add("hidden");
  // receiptHeader.classList.remove("hidden");
  buttonContainer.classList.add("hidden");
  // cashCheckout.classList.add("hidden");
  purchasingArray.forEach((item) => {
    const newLi = document.createElement("li");
    const image = document.createElement("img");
    const descriptionP = document.createElement("p");
    const priceP = document.createElement("p");
    image.setAttribute("src", item.src);
    image.setAttribute("alt", item.alt);
    descriptionP.textContent = item.description;
    priceP.textContent = `$${item.price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      minimumIntegerDigits: 1,
    })}`;
    newLi.append(image, descriptionP, priceP);
    itemReceiptContainer.append(
      newLi,
      subtotalContainer,
      taxContainer,
      totalContainer
    );
  });
});
receiptDeleteButton.addEventListener("click", () => {
  // Redirect to the main page
  window.location.href = "index.html";
});
creditCardForm.addEventListener("submit", (event) => {
  itemReceiptContainer.innerHTML = "";
  subtotalContainer.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  taxContainer.textContent = `Tax: $${tax.toFixed(2)}`;
  totalContainer.textContent = `Total: $${total.toFixed(2)}`;
  event.preventDefault();
  receiptContainer.classList.remove("hidden");
  orderConfirmation.classList.remove("hidden");
  // currentCart.classList.add("hidden");
  subtotalTaxTotalField.classList.add("hidden");
  buttonContainer.classList.add("hidden");
  // cashCheckout.classList.add("hidden");
  purchasingArray.forEach((item) => {
    const newLi = document.createElement("li");
    const image = document.createElement("img");
    const descriptionP = document.createElement("p");
    const priceP = document.createElement("p");
    image.setAttribute("src", item.src);
    image.setAttribute("alt", item.alt);
    descriptionP.textContent = item.description;
    priceP.textContent = `$${item.price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      minimumIntegerDigits: 1,
    })}`;
    newLi.append(image, descriptionP, priceP);
    itemReceiptContainer.append(
      newLi,
      subtotalContainer,
      taxContainer,
      totalContainer
    );
    // itemReceiptTotal.append(subtotalTaxTotalField);
  });
});
