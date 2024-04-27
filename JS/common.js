
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

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-content-sale') && !event.target.matches('.Categories-dropdown')) {
      let dropdowns = document.querySelectorAll(".main-home-dropdown-sale");
      dropdowns.forEach(function(dropdown) {
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

window.onclick = function(event) {
  if (!event.target.matches('.main-home-heading') && !event.target.matches('.hidden-Categories-dropdown')) {
      let dropdowns = document.querySelectorAll(".main-home-dropdown-trending");
      dropdowns.forEach(function(dropdown) {
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
  allDropdowns.forEach(function(dropdown) {
      if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
      }
  });
  if (!isOpen) {
      dropdownMenu.classList.add("show");
  }
}
window.onclick = function(event) {
  if (!event.target.matches('.main-home-heading') && !event.target.matches('.hidden-Categories-dropdown')) {
      let dropdowns = document.querySelectorAll(".main-home-dropdown");
      dropdowns.forEach(function(dropdown) {
          if (dropdown.classList.contains('show')) {
              dropdown.classList.remove('show');
          }
      });
  }
}



// // Set the target date (end of sale)
// const targetDate = new Date('2024-04-30T00:00:00');
// function updateCountdown() {
//     const now = new Date();
//     const timeDifference = targetDate - now;
//     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
//     document.getElementById('days').textContent = formatTime(days);
//     document.getElementById('hours').textContent = formatTime(hours);
//     document.getElementById('minutes').textContent = formatTime(minutes);
//     document.getElementById('seconds').textContent = formatTime(seconds);
// }
// function formatTime(time) {
//     return time < 10 ? `0${time}` : time;
// }
// setInterval(updateCountdown, 1000);
// updateCountdown();




