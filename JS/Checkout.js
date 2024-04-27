function submitForm() {
    let form = document.getElementById("orderForm");

    let requiredFields = form.querySelectorAll("[required]");
    for (let i = 0; i < requiredFields.length; i++) {
        if (!requiredFields[i].value.trim()) {
            alert("Please fill in all required fields.");
            return false;
        }
    }
    let formData = {};
    for (let i = 0; i < form.elements.length; i++) {
        let element = form.elements[i];
        formData[element.name] = element.value;
        if (element.type === "checkbox") {
            formData[element.name] = element.checked;
        }
    }
    localStorage.setItem("formData", JSON.stringify(formData));

    alert("Form submitted successfully!");
    return true;
}
let form = document.getElementById("orderForm");
form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    submitForm();
});
function populateForm() {
    let formData = localStorage.getItem("formData");
    if (formData) {
        formData = JSON.parse(formData);
        for (let key in formData) {
            if (formData.hasOwnProperty(key)) {
                let element = document.getElementById(key);
                if (element) {
                    if (element.type === "checkbox") {
                        element.checked = formData[key];
                    } else {
                        element.value = formData[key];
                    }
                }
            }
        }
    }
}
populateForm()




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
