document.querySelectorAll("input, select").forEach(function (element) {
    element.addEventListener("input", function () {
        let value = element.value;

        if (element.id === "number") {
            value = value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
            document.querySelector(".card-number .mono").textContent = value;
            element.value = value.replace(/ /g, '');
        } else if (element.id === "holder") {
            value = value.replace(/[^a-zA-Z\s]/g, '');
            document.querySelector(".card-holder .mono").textContent = value;
            element.value = value;
        } else if (element.id === "month") {
            const currentDate = document.querySelector(".card-date .mono").textContent.slice(3, 7);
            const date = value + "/" + currentDate;
            document.querySelector(".card-date .mono").textContent = date;
        } else if (element.id === "year") {
            const currentMonth = document.querySelector(".card-date .mono").textContent.slice(0, 2);
            const date = currentMonth + "/" + value;
            document.querySelector(".card-date .mono").textContent = date;
        } else if (element.id === "ccv") {
            value = value.replace(/\D/g, '').slice(0, 3);
            document.querySelector(".card-code .mono").textContent = value;
            element.value = value;
        }
        validateForm();
    });
});

let languageMain = document.querySelector(".language-main");
let languagePart = document.querySelector(".language-part");
languageMain.addEventListener("click", () => {
    languagePart.classList.toggle("active");
});

document.querySelector(".button-AZ").addEventListener("click", () => {
    window.location.href = "../cardPartAZ/cardPartAZ.html";
});

document.querySelector("#paymentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "../monthlyAndYearlyPart/monthlyAndYearlyPart.html";
});

function validateForm() {
    const number = document.getElementById("number").value.trim();
    const holder = document.getElementById("holder").value.trim();
    const ccv = document.getElementById("ccv").value.trim();
    const payButton = document.getElementById("payButton");

    if (number.length === 16 && holder && ccv.length === 3) {
        payButton.disabled = false;
    } else {
        payButton.disabled = true;
    }
}
