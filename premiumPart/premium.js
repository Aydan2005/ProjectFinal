let subscribe1 = document.querySelector(".subscribe")


subscribe1.addEventListener("click",()=>{
    window.location.href = "../freePart/freePart.html"
})


let languageMain = document.querySelector(".language-main")
let languagePart = document.querySelector(".language-part")
languageMain.addEventListener("click",()=>{
    languagePart.classList.toggle("active")
})

document.querySelector(".button-AZ").addEventListener("click", () => {
    window.location.href = "../premiumPartAZ/premiumPartAZ.html"; 
});
document.querySelector(".subscribe2").addEventListener("click", () => {
    window.location.href = "../cardPart/cardPart.html"; 
});
document.querySelector(".subscribe3").addEventListener("click", () => {
    window.location.href = "../cardPart/cardPart.html"; 
});