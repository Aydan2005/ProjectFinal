let subscribe1 = document.querySelector(".subscribe")


subscribe1.addEventListener("click",()=>{
    window.location.href = "../freePartAZ/freePartAZ.html"
})


let languageMain = document.querySelector(".language-main")
let languagePart = document.querySelector(".language-part")
languageMain.addEventListener("click",()=>{
    languagePart.classList.toggle("active")
})


document.querySelector(".button-EN").addEventListener("click", () => {
    window.location.href = "../premiumPart/premium.html"; 
});

let subscribe2 = document.querySelector(".subscribe2")
subscribe2.addEventListener("click",()=>{
    window.location.href = "../cardPartAZ/cardPartAZ.html"
})
let subscribe3 = document.querySelector(".subscribe3")
subscribe3.addEventListener("click",()=>{
    window.location.href = "../cardPartAZ/cardPartAZ.html"
})


