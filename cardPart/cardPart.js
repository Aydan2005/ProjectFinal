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
// let languageMain = document.querySelector(".language-main")
// let languagePart = document.querySelector(".language-part")
// languageMain.addEventListener("click",()=>{
//     languagePart.classList.toggle("active")
// })

// let buttonAZ = document.querySelector(".button-AZ")
// buttonAZ.addEventListener("click",()=>{
//     window.location.href = "../cardPartAZ/cardPartAZ.html"; 
// })
// document.querySelector(".pay").addEventListener("click", () => {
//     window.location.href = "../monthlyAndYearlyPart/monthlyAndYearlyPart.html"; 
// });
















// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("paymentForm");
//     const payButton = document.querySelector(".pay");

//     // Yalnız rəqəm qəbul edən funksiya
//     document.getElementById("number").addEventListener("input", function () {
//         this.value = this.value.replace(/[^0-9]/g, '').replace(/(.{4})/g, "$1 ").trim();
//         document.querySelector(".card-number .mono").textContent = this.value || "0000 0000 0000 0000";
//     });

//     document.getElementById("holder").addEventListener("input", function () {
//         document.querySelector(".card-holder .mono").textContent = this.value || "Tam Ad";
//     });

//     document.getElementById("month").addEventListener("input", function () {
//         const year = document.getElementById("year").value || "2025";
//         document.querySelector(".card-date .mono").textContent = `${this.value}/${year}`;
//     });

//     document.getElementById("year").addEventListener("input", function () {
//         const month = document.getElementById("month").value || "01";
//         document.querySelector(".card-date .mono").textContent = `${month}/${this.value}`;
//     });

//     document.getElementById("ccv").addEventListener("input", function () {
//         this.value = this.value.replace(/[^0-9]/g, '');
//         document.querySelector(".card-code .mono").textContent = this.value || "123";
//     });

//     // Bütün inputları yoxlayan funksiya
//     function checkInputs() {
//         const number = document.getElementById("number").value.trim();
//         const holder = document.getElementById("holder").value.trim();
//         const month = document.getElementById("month").value;
//         const year = document.getElementById("year").value;
//         const ccv = document.getElementById("ccv").value.trim();

//         payButton.disabled = !(number && holder && month && year && ccv);
//     }

//     // Input dəyişikliklərinə qulaq asmaq
//     document.querySelectorAll("input, select").forEach((input) => {
//         input.addEventListener("input", checkInputs);
//     });

//     // Formanın submit edilməsinin qarşısını almaq
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         alert("Ödəniş həyata keçirildi!");
//     });
// });











// // Function to update card display dynamically
// document.querySelectorAll("input, select").forEach(function (element) {
//     element.addEventListener("input", function () {
//         let value = element.value;

//         if (element.id === "number") {
//             // Restrict card number input to 16 digits and update display
//             value = value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
//             document.querySelector(".card-number .mono").textContent = value;
//             element.value = value.replace(/ /g, '');
//         } else if (element.id === "holder") {
//             // Update card holder's name
//             document.querySelector(".card-holder .mono").textContent = value;
//         } else if (element.id === "month") {
//             // Update month
//             const currentDate = document.querySelector(".card-date .mono").textContent.slice(3, 7);
//             const date = value + "/" + currentDate;
//             document.querySelector(".card-date .mono").textContent = date;
//         } else if (element.id === "year") {
//             // Update year
//             const currentMonth = document.querySelector(".card-date .mono").textContent.slice(0, 2);
//             const date = currentMonth + "/" + value;
//             document.querySelector(".card-date .mono").textContent = date;
//         } else if (element.id === "ccv") {
//             // Update CCV
//             document.querySelector(".card-code .mono").textContent = value;
//         }
//         validateForm();
//     });
// });

// // Function to toggle language dropdown
// let languageMain = document.querySelector(".language-main");
// let languagePart = document.querySelector(".language-part");
// languageMain.addEventListener("click", () => {
//     languagePart.classList.toggle("active");
// });

// // Redirect to Azerbaijani version
// document.querySelector(".button-AZ").addEventListener("click", () => {
//     window.location.href = "../cardPartAZ/cardPartAZ.html";
// });

// // Payment button click event
// document.querySelector("#paymentForm").addEventListener("submit", (event) => {
//     event.preventDefault();
//     window.location.href = "../monthlyAndYearlyPart/monthlyAndYearlyPart.html";
// });

// // Function to validate form and enable/disable button
// function validateForm() {
//     const number = document.getElementById("number").value.trim();
//     const holder = document.getElementById("holder").value.trim();
//     const ccv = document.getElementById("ccv").value.trim();
//     const payButton = document.getElementById("payButton");

//     if (number.length === 16 && holder && ccv.length === 3) {
//         payButton.disabled = false;
//     } else {
//         payButton.disabled = true;
//     }
// }











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

// Function to toggle language dropdown
let languageMain = document.querySelector(".language-main");
let languagePart = document.querySelector(".language-part");
languageMain.addEventListener("click", () => {
    languagePart.classList.toggle("active");
});

// Redirect to Azerbaijani version
document.querySelector(".button-AZ").addEventListener("click", () => {
    window.location.href = "../cardPartAZ/cardPartAZ.html";
});

// Payment button click event
document.querySelector("#paymentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "../monthlyAndYearlyPart/monthlyAndYearlyPart.html";
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
