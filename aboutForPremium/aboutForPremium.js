let languageMain = document.querySelector(".language-main")
let languagePart = document.querySelector(".language-part")
languageMain.addEventListener("click",()=>{
    languagePart.classList.toggle("active")
})

document.querySelector(".button-AZ").addEventListener("click", () => {
    window.location.href = "../aboutForPremiumAZ/aboutForPremiumAZ.html"; 
});