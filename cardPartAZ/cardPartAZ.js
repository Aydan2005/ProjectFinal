// Bütün input və select elementlərində dinamik olaraq məlumatları yeniləyən funksiya
document.querySelectorAll("input, select").forEach(function (element) {
    element.addEventListener("input", function () {
        let value = element.value;

        if (element.id === "number") {
            // Kart nömrəsini hər 4 rəqəmdən sonra boşluq əlavə edərək formatlamaq
            value = value.replace(/(.{4})/g, "$1 ");
            document.querySelector(".card-number .mono").textContent = value;
        } else if (element.id === "holder") {
            // Kart sahibinin adını yeniləmək
            document.querySelector(".card-holder .mono").textContent = value;
        } else if (element.id === "month") {
            // Ay məlumatını yeniləmək
            const currentDate = document.querySelector(".card-date .mono").textContent.slice(2, 8);
            const date = value + currentDate;
            document.querySelector(".card-date .mono").textContent = date;
        } else if (element.id === "year") {
            // İl məlumatını yeniləmək
            const currentMonth = document.querySelector(".card-date .mono").textContent.slice(0, 3);
            const date = currentMonth + value;
            document.querySelector(".card-date .mono").textContent = date;
        } else if (element.id === "ccv") {
            // CCV məlumatını yeniləmək
            document.querySelector(".card-code .mono").textContent = value;
        }
    });
});
let languageMain = document.querySelector(".language-main")
let languagePart = document.querySelector(".language-part")
languageMain.addEventListener("click",()=>{
    languagePart.classList.toggle("active")
})


let buttonEN = document.querySelector(".button-EN")
buttonEN.addEventListener("click",()=>{
    window.location.href = "../cardPart/cardPart.html"; 
})
let pay = document.querySelector(".pay")
pay.addEventListener("click",()=>{
    window.location.href = "../monthlyAndYearlyPartAZ/monthlyAndYearlyAZ.html"
})