let languageMain = document.querySelector(".language-main")
let languagePart = document.querySelector(".language-part")
languageMain.addEventListener("click",()=>{
    languagePart.classList.toggle("active2")
})

document.querySelector(".button-EN").addEventListener("click", () => {
    window.location.href = "../aboutPart/aboutPart.html"; 
});
let burgerDiv = document.querySelector(".burger-div");
let headerItems = document.querySelector(".header-items");
burgerDiv.addEventListener("click", () => {
    headerItems.classList.toggle("active1");
});
