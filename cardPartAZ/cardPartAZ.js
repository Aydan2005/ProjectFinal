// // Bütün input və select elementlərində dinamik olaraq məlumatları yeniləyən funksiya
// document.querySelectorAll("input, select").forEach(function (element) {
//     element.addEventListener("input", function () {
//         let value = element.value;

//         if (element.id === "number") {
//             // Kart nömrəsini hər 4 rəqəmdən sonra boşluq əlavə edərək formatlamaq
//             value = value.replace(/(.{4})/g, "$1 ");
//             document.querySelector(".card-number .mono").textContent = value;
//         } else if (element.id === "holder") {
//             // Kart sahibinin adını yeniləmək
//             document.querySelector(".card-holder .mono").textContent = value;
//         } else if (element.id === "month") {
//             // Ay məlumatını yeniləmək
//             const currentDate = document.querySelector(".card-date .mono").textContent.slice(2, 8);
//             const date = value + currentDate;
//             document.querySelector(".card-date .mono").textContent = date;
//         } else if (element.id === "year") {
//             // İl məlumatını yeniləmək
//             const currentMonth = document.querySelector(".card-date .mono").textContent.slice(0, 3);
//             const date = currentMonth + value;
//             document.querySelector(".card-date .mono").textContent = date;
//         } else if (element.id === "ccv") {
//             // CCV məlumatını yeniləmək
//             document.querySelector(".card-code .mono").textContent = value;
//         }
//     });
// });






// Function to update card display dynamically
document.querySelectorAll("input, select").forEach(function (element) {
    element.addEventListener("input", function () {
        let value = element.value;

        if (element.id === "number") {
            // Restrict card number input to 16 digits and update display
            value = value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
            document.querySelector(".card-number .mono").textContent = value;
            element.value = value.replace(/ /g, '');
        } else if (element.id === "holder") {
            // Restrict holder input to letters and spaces only
            value = value.replace(/[^a-zA-Z\s]/g, '');
            document.querySelector(".card-holder .mono").textContent = value;
            element.value = value;
        } else if (element.id === "month") {
            // Update month
            const currentDate = document.querySelector(".card-date .mono").textContent.slice(3, 7);
            const date = value + "/" + currentDate;
            document.querySelector(".card-date .mono").textContent = date;
        } else if (element.id === "year") {
            // Update year
            const currentMonth = document.querySelector(".card-date .mono").textContent.slice(0, 2);
            const date = currentMonth + "/" + value;
            document.querySelector(".card-date .mono").textContent = date;
        } else if (element.id === "ccv") {
            // Restrict CCV to 3 digits
            value = value.replace(/\D/g, '').slice(0, 3);
            document.querySelector(".card-code .mono").textContent = value;
            element.value = value;
        }
        validateForm();
    });
});


// Function to validate form and enable/disable button
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

let languageMain = document.querySelector(".language-main")
let languagePart = document.querySelector(".language-part")
languageMain.addEventListener("click",()=>{
    languagePart.classList.toggle("active")
})
document.querySelector("#paymentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "../monthlyAndYearlyPartAZ/monthlyAndYearlyAZ.html";
});

let buttonEN = document.querySelector(".button-EN")
buttonEN.addEventListener("click",()=>{
    window.location.href = "../cardPart/cardPart.html"; 
})
let pay = document.querySelector(".pay")
pay.addEventListener("click",()=>{
    window.location.href = "../monthlyAndYearlyPartAZ/monthlyAndYearlyAZ.html"
})