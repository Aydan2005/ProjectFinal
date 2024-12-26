let languageMain = document.querySelector(".language-main")
let languagePart = document.querySelector(".language-part")
languageMain.addEventListener("click",()=>{
    languagePart.classList.toggle("active2")
})

document.querySelector(".button-AZ").addEventListener("click", () => {
    window.location.href = "../aboutPartAZ/aboutPartAZ.html"; 
});
let burgerDiv = document.querySelector(".burger-div");
let headerItems = document.querySelector(".header-items");
burgerDiv.addEventListener("click", () => {
    headerItems.classList.toggle("active1");
});
