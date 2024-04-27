document.addEventListener("DOMContentLoaded", function () {
    const incrementButton = document.querySelector(".increment-value");
    const numberElement = incrementButton.querySelector(".number");

    incrementButton.addEventListener("click", function (event) {
        if (event.target.classList.contains("plus")) {
            increaseNumber();
        } else if (event.target.classList.contains("minus")) {
            decreaseNumber();
        }
    });

    function increaseNumber() {
        let currentValue = parseInt(numberElement.textContent);
        currentValue++;
        numberElement.textContent = currentValue;
    }

    function decreaseNumber() {
        let currentValue = parseInt(numberElement.textContent);
        if (currentValue > 1) {
            currentValue--;
            numberElement.textContent = currentValue;
        }
    }
});




const middleContentEnglish = document.querySelector('.middle-content-english');
const dropdownMenu = document.getElementsByClassName('middle__content__english');

middleContentEnglish.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block';
});

middleContentEnglish.addEventListener('mouseleave', () => {
    const isLeavingToDropdown = dropdownMenu.contains(event.relatedTarget);

    if (!isLeavingToDropdown) {
        dropdownMenu.style.display = 'none';
    }
});



function toggleDropdownSale(dropdown) {
    let dropdownMenu = dropdown.nextElementSibling;
    dropdownMenu.classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdown-content-sale') && !event.target.matches('.Categories-dropdown')) {
        let dropdowns = document.querySelectorAll(".main-home-dropdown-sale");
        dropdowns.forEach(function (dropdown) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
}


function toggleTrendingDropdown(content) {
    let dropdownMenu = content.nextElementSibling;
    dropdownMenu.classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.main-home-heading') && !event.target.matches('.hidden-Categories-dropdown')) {
        let dropdowns = document.querySelectorAll(".main-home-dropdown-trending");
        dropdowns.forEach(function (dropdown) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
}


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




document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtn = document.querySelector(".banana__lays__btn__green");
    const btnMinus = document.querySelectorAll('.minus');
    const btnPlus = document.querySelectorAll('.plus');
    const increasingNumber = document.querySelectorAll('.number');
    const cartValueSpan = document.querySelector('.select-cart');

    addToCartBtn.addEventListener("click", function (event) {
        event.preventDefault();

        // Retrieve product data
        const productName = document.querySelector(".Fresh-Organic").textContent.trim();
        const productPrice = document.querySelector(".juice-card-number").textContent.trim();
        const productImage = document.querySelector("#big-banana img").getAttribute("src");
        const addToCartBtn = document.querySelector('.banana__lays__btn__green').textContent.trim();
        
        // Create product object
        const product = {
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: parseInt(increasingNumber[0].value, 10), // Use the first input value for quantity
            button: addToCartBtn 
        };

        // Get existing cart items from localStorage
        let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if the product is already in the cart
        const existingProductIndex = cartItems.findIndex(item => item.name === product.name);

        if (existingProductIndex !== -1) {
            // If product already exists in the cart, update quantity
            cartItems[existingProductIndex].quantity += parseInt(increasingNumber[0].value, 10); // Use the first input value for quantity
        } else {
            // If product is not in the cart, add it with the set quantity
            cartItems.push(product);
        }

        // Update localStorage with updated cart items
        localStorage.setItem("cart", JSON.stringify(cartItems));

        // Redirect to cart.html
        window.location.href = "cart.html";
    });

    // Update cart value function
    function updateCartValue() {
        let newValue = 0;
        increasingNumber.forEach(input => {
            newValue += parseInt(input.value, 10);
        });
        cartValueSpan.textContent = newValue;
    }

    // Set initial values for input fields
    increasingNumber.forEach(input => {
        input.value = 1; // Set initial value to 1 for each input field
    });

    // Increase quantity when plus button is clicked
    btnPlus.forEach((plus, index) => {
        plus.addEventListener('click', () => {
            const inputValue = increasingNumber[index];
            let newValue = parseInt(inputValue.value, 10);
            if (!isNaN(newValue)) {
                newValue += 1;
                inputValue.value = newValue;
                updateCartValue(); // Update cart value when quantity changes
            }
        });
    });

    // Decrease quantity when minus button is clicked
    btnMinus.forEach((minus, index) => {
        minus.addEventListener('click', () => {
            const inputValue = increasingNumber[index];
            let newValue = parseInt(inputValue.value, 10);
            if (!isNaN(newValue) && newValue > 1) {
                newValue -= 1;
                inputValue.value = newValue;
                updateCartValue(); // Update cart value when quantity changes
            }
        });
    });

    // Update cart value when quantity changes directly in input field
    increasingNumber.forEach((input, index) => {
        input.addEventListener('input', () => {
            updateCartValue(); // Update cart value when quantity changes
        });
    });

    // Function to update dollar price (implementation not provided)
});


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

