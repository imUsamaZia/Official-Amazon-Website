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
