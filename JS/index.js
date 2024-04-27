document.addEventListener('DOMContentLoaded', function () {
    const AllCategories = document.querySelector('.All-Categories');
    const AllCategoriesType = document.querySelector('.All-Categories-type');

    AllCategories.addEventListener('click', (e) => {
        AllCategoriesType.classList.toggle('hidden');
    });
});


const showSidePanel = document.querySelectorAll('.show__side__panel');
const hiddenSidePanel = document.querySelector('.hidden__side__panel');
const CategoriesDropdown = document.querySelectorAll('.Categories-dropdown');
let activePanelIndex = -1;

showSidePanel.forEach((panel, index) => {
    panel.addEventListener('click', (e) => {
        if (activePanelIndex !== -1 && activePanelIndex !== index) {
            hidePanel();
        }
        if (activePanelIndex === index) {
            togglePanel();
        } else {
            showPanel(index);
        }
        activePanelIndex = index;
        e.stopPropagation();
    });
});

document.body.addEventListener('click', (e) => {
    hidePanel();
});

hiddenSidePanel.addEventListener('click', (e) => {
    e.stopPropagation();
});

function showPanel(index) {
    hiddenSidePanel.style.maxHeight = '530px';
    CategoriesDropdown[index].style.transform = 'rotate(-90deg)';
}

function hidePanel() {
    hiddenSidePanel.style.maxHeight = '0';
    if (activePanelIndex !== -1) {
        CategoriesDropdown[activePanelIndex].style.transform = 'rotate(0deg)';
    }
    activePanelIndex = -1;
}

function togglePanel() {
    hiddenSidePanel.style.maxHeight = hiddenSidePanel.style.maxHeight === '530px' ? '0' : '530px';
    CategoriesDropdown[activePanelIndex].style.transform = hiddenSidePanel.style.maxHeight === '530px' ? 'rotate(-90deg)' : 'rotate(0deg)';
}


document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('#mobile__sub__side__panel');
    const toggleBar = document.querySelector('.hiddem-all-catagories');
    let isOpen = false;

    toggleBar.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleSidebar();
    });

    document.addEventListener('click', function (e) {
        if (!sidebar.contains(e.target) && isOpen) {
            toggleSidebar();
        }
    });

    function toggleSidebar() {
        if (!isOpen) {
            sidebar.style.right = '-70px';
            sidebar.style.transition = 'right 0.3s ease';
        } else {
            sidebar.style.right = '205px';
        }
        isOpen = !isOpen;
    }
});

let cartCount = 0;

function addToCart(item) {
    cartCount++;
    document.getElementById('cartCount').innerText = cartCount;
    alert(item + " added to cart!");
}

function toggleTrendingDropdown(content) {
    let dropdownMenu = content.nextElementSibling;
    dropdownMenu.classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.main-home-heading') && !event.target.matches('.Categories-dropdown')) {
        let dropdowns = document.querySelectorAll(".main-home-dropdown-trending");
        dropdowns.forEach(function (dropdown) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
}

function toggleDropdownSale(dropdown) {
    let dropdownMenu = dropdown.nextElementSibling;
    dropdownMenu.classList.toggle("show");
    event.stopPropagation();
}
document.addEventListener("click", function (event) {
    let dropdowns = document.querySelectorAll(".main-home-dropdown-sale");
    dropdowns.forEach(function (dropdown) {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });
});


function toggleDropdown(content) {
    let dropdownMenu = content.nextElementSibling;
    let isOpen = dropdownMenu.classList.contains("show");
    let allDropdowns = document.querySelectorAll(".main-home-dropdown");
    allDropdowns.forEach(function (dropdown) {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });
    if (!isOpen) {
        dropdownMenu.classList.add("show");
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.main-home-heading') && !event.target.matches('.hidden-Categories-dropdown')) {
        let dropdowns = document.querySelectorAll(".main-home-dropdown");
        dropdowns.forEach(function (dropdown) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
}


const targetDate = new Date('2024-04-30T00:00:00');

function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.querySelectorAll('.days').forEach(element => {
        element.textContent = formatTime(days);
    });
    document.querySelectorAll('.hours').forEach(element => {
        element.textContent = formatTime(hours);
    });
    document.querySelectorAll('.minutes').forEach(element => {
        element.textContent = formatTime(minutes);
    });
    document.querySelectorAll('.seconds').forEach(element => {
        element.textContent = formatTime(seconds);
    });
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateCountdown, 1000);
updateCountdown();




document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtns = document.querySelectorAll(".Add-Cart-btn");
    const cartValueSpan = document.querySelector('#cartCount');

    addToCartBtns.forEach((addToCartBtn) => {
        addToCartBtn.addEventListener("click", function (event) {
            event.preventDefault();

            const productImage = this.closest('.applice-juice-card').querySelector("img").getAttribute("src");
            const productName = this.closest('.applice-juice-card').querySelector(".Percent-Apple").textContent.trim();
            const productPrice = this.closest('.applice-juice-card').querySelector(".juice-card-number").textContent.trim();
            const addToCartBtn = document.querySelector('.Add-Cart-btn').textContent.trim();


            const product = {
                image: productImage,
                name: productName,
                price: productPrice,
                quantity: 1,
                button: addToCartBtn
            };

            let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            const existingProductIndex = cartItems.findIndex(item => item.name === product.name);

            if (existingProductIndex !== -1) {
                cartItems[existingProductIndex].quantity++;
            } else {
                cartItems.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cartItems));
            updateCartValue();
        });
    });

    function updateCartValue() {
        let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartValueSpan.textContent = totalItems;
    }
});










// document.addEventListener("DOMContentLoaded", function () {
//     const cartValueSpan = document.querySelector(".select-cart");
//     const cartContent = document.querySelector(".main--cart");
  
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  
//     function updateCartValue() {
//         let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
//         cartValueSpan.textContent = totalItems;
//     }
  
//     function updateCartContent() {
//         cartContent.innerHTML = ""; // Clear existing content
  
//         cartItems.forEach((item) => {
//             const cartItemHTML = `
//                 <div class="applice-juice-card">
//                     <img class="applice-juice" src="${item.image}" alt="${item.name}">
//                     <div class="apple-juice-content">
//                         <h1 class="Percent-Apple">${item.name}</h1>
//                         <p class="juice__card__number">Price: ${item.price}</p>
//                         <p class="juice__del__number">Quantity: ${item.quantity}</p>
//                     </div>
//                 </div>
//             `;
//             cartContent.innerHTML += cartItemHTML;
//         });
//     }
  
//     if (cartItems.length === 0) {
//         cartContent.innerHTML = `
//             <div class="container">
//                 <div class="main-container">
//                     <div class="main__cart__image">
//                         <img src="/Image/card-cart.png" alt="no card available" class="main__cart__img">
//                     </div>
//                     <a href="#" class="">
//                         <button class="cart-btn">Your cart is currently empty.</button>
//                     </a>
//                     <a href="#" class="">
//                         <button class="shop-btn">Return to shop</button>
//                     </a>
//                 </div>
//             </div>
//         `;
//     } else {
//         updateCartContent();
//     }
  
//     updateCartValue();
//   });