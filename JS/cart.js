const middleContentEnglish = document.querySelector(".middle-content-english");
const dropdownMenu = document.getElementsByClassName(
  "middle__content__english"
);

middleContentEnglish.addEventListener("mouseenter", () => {
  dropdownMenu.style.display = "block";
});

middleContentEnglish.addEventListener("mouseleave", () => {
  const isLeavingToDropdown = dropdownMenu.contains(event.relatedTarget);

  if (!isLeavingToDropdown) {
    dropdownMenu.style.display = "none";
  }
});

function toggleDropdownSale(dropdown) {
  let dropdownMenu = dropdown.nextElementSibling;
  dropdownMenu.classList.toggle("show");
}

window.onclick = function (event) {
  if (
    !event.target.matches(".dropdown-content-sale") &&
    !event.target.matches(".Categories-dropdown")
  ) {
    let dropdowns = document.querySelectorAll(".main-home-dropdown-sale");
    dropdowns.forEach(function (dropdown) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    });
  }
};

function toggleTrendingDropdown(content) {
  let dropdownMenu = content.nextElementSibling;
  dropdownMenu.classList.toggle("show");
}

window.onclick = function (event) {
  if (
    !event.target.matches(".main-home-heading") &&
    !event.target.matches(".hidden-Categories-dropdown")
  ) {
    let dropdowns = document.querySelectorAll(".main-home-dropdown-trending");
    dropdowns.forEach(function (dropdown) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    });
  }
};

function toggleDropdown(content) {
  let dropdownMenu = content.nextElementSibling;
  let isOpen = dropdownMenu.classList.contains("show");
  let allDropdowns = document.querySelectorAll(".main-home-dropdown");
  allDropdowns.forEach(function (dropdown) {
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  });
  if (!isOpen) {
    dropdownMenu.classList.add("show");
  }
}
window.onclick = function (event) {
  if (
    !event.target.matches(".main-home-heading") &&
    !event.target.matches(".hidden-Categories-dropdown")
  ) {
    let dropdowns = document.querySelectorAll(".main-home-dropdown");
    dropdowns.forEach(function (dropdown) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    });
  }
};

// Set the target date (end of sale)
const targetDate = new Date("2024-04-30T00:00:00");
function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  document.getElementById("days").textContent = formatTime(days);
  document.getElementById("hours").textContent = formatTime(hours);
  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// cart.js

// document.addEventListener("DOMContentLoaded", function () {
//   const cartValueSpan = document.querySelector(".select-cart");
//   const cartContent = document.querySelector(".main--cart");

//   const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

//   function updateCartValue() {
//       let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
//       cartValueSpan.textContent = totalItems;
//   }

//   function updateCartContent() {
//       cartContent.innerHTML = ""; // Clear existing content

//       cartItems.forEach((item) => {
//           const cartItemHTML = `
//               <div class="applice-juice-card">
//                   <img class="applice-juice" src="${item.image}" alt="${item.name}">
//                   <div class="apple-juice-content">
//                       <h1 class="Percent-Apple">${item.name}</h1>
//                       <p class="juice__card__number">Price: ${item.price}</p>
//                       <p class="juice__del__number">Quantity: ${item.quantity}</p>
//                       <button class="Add-Cart-btn">Buy Now</button>
//                   </div>
//               </div>
//           `;
//           cartContent.innerHTML += cartItemHTML;
//       });
//   }

//   if (cartItems.length === 0) {
//       cartContent.innerHTML = `
//           <div class="container">
//               <div class="main-container">
//                   <div class="main__cart__image">
//                       <img src="/Image/card-cart.png" alt="no card available" class="main__cart__img">
//                   </div>
//                   <a href="#" class="">
//                       <button class="cart-btn">Your cart is currently empty.</button>
//                   </a>
//                   <a href="#" class="">
//                       <button class="shop-btn">Return to shop</button>
//                   </a>
//               </div>
//           </div>
//       `;
//   } else {
//       updateCartContent();
//   }

//   updateCartValue();
// });



document.addEventListener("DOMContentLoaded", function () {
  const cartValueSpan = document.querySelector(".select-cart");
  const cartContent = document.querySelector(".main--cart");

  // Retrieve cart items from localStorage or create an empty array
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Function to update the cart value display
  function updateCartValue() {
      let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
      cartValueSpan.textContent = totalItems;
  }

  // Function to update the cart content display
  function updateCartContent() {
      cartContent.innerHTML = ""; // Clear existing content

      // Loop through each cart item and generate HTML to display it
      cartItems.forEach((item) => {
          const cartItemHTML = `
              <div class="applice-juice-card">
                  <img class="applice-juice" src="${item.image}" alt="${item.name}">
                  <div class="apple-juice-content">
                      <h1 class="Percent-Apple">${item.name}</h1>
                      <p class="juice__card__number">Price: ${item.price}</p>
                      <p class="juice__del__number">Quantity: ${item.quantity}</p>
                      <button class="Add-Cart-btn">Buy Now</button>
                  </div>
              </div>
          `;
          cartContent.innerHTML += cartItemHTML;
      });
  }

  // Check if there are any items in the cart
  if (cartItems.length === 0) {
      // If cart is empty, display a message
      cartContent.innerHTML = `
          <div class="container">
              <div class="main-container">
                  <div class="main__cart__image">
                      <img src="/Image/card-cart.png" alt="no card available" class="main__cart__img">
                  </div>
                  <a href="#" class="">
                      <button class="cart-btn">Your cart is currently empty.</button>
                  </a>
                  <a href="#" class="">
                      <button class="shop-btn">Return to shop</button>
                  </a>
              </div>
          </div>
      `;
  } else {
      // If cart has items, update the cart content display
      updateCartContent();
  }

  // Call the update functions initially
  updateCartValue();
});





