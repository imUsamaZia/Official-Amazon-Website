document.addEventListener("DOMContentLoaded", function () {
    const minPriceInput = document.getElementById("minPrice");
    const maxPriceInput = document.getElementById("maxPrice");
    const priceRangeDisplay = document.getElementById("priceRangeDisplay");
    const filterButton = document.getElementById("filterButton");
    const productListContainer = document.getElementById("productList");

    const products = [
        { name: 'Product A', price: 5 },
        { name: 'Product B', price: 10 },
        { name: 'Product C', price: 15 },
        { name: 'Product C', price: 20 },
        { name: 'Product C', price: 25 },
        { name: 'Product C', price: 30 },
    ];

    filterButton.addEventListener("click", function () {
        const minPrice = parseFloat(minPriceInput.value) || 0;
        const maxPrice = parseFloat(maxPriceInput.value) || 30;
        priceRangeDisplay.textContent = `Price: $${minPrice} — $${maxPrice}`;
        const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);

        if (productListContainer.style.display === "none" || filteredProducts.length === 0) {
            productListContainer.style.display = "block";
            displayFilteredProducts(filteredProducts);
        } else {
            productListContainer.style.display = "none";
        }
    });

    function displayFilteredProducts(filteredProducts) {
        productListContainer.innerHTML = '';

        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.textContent = `${product.name} - $${product.price}`;
            productListContainer.appendChild(productElement);
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.left-side-bar');
    const toggleBar = document.querySelector('.responsive__top__side__bar');
    let isOpen = false;

    toggleBar.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleSidebar();
    });

    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && isOpen) {
            toggleSidebar();
        }
    });

    function toggleSidebar() {
        if (!isOpen) {
            sidebar.style.right = '10px';
            sidebar.style.transition = 'right 0.3s ease'; 
        } else {
            sidebar.style.right = '210px'; 
        }
        isOpen = !isOpen;
    }
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
