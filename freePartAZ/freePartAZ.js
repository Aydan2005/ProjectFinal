const animatedElements = document.querySelectorAll('.section4-item1');
const animatedElements2 = document.querySelectorAll('.ofisiant');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});
animatedElements.forEach((el) => observer.observe(el));
animatedElements2.forEach((el) => observer.observe(el))

const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function updateCarousel() {
  carouselItems.forEach((item, index) => {
    item.classList.remove('active');
    if (index === currentIndex) {
      item.classList.add('active');
    }
  });
}
function showNextItem() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}
function showPrevItem() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
}
setInterval(showNextItem, 5000);
nextBtn.addEventListener('click', showNextItem);
prevBtn.addEventListener('click', showPrevItem);
updateCarousel();

let buttonMenu = document.querySelector(".go-to-menu");

buttonMenu.addEventListener("click",()=>{
  window.location.href = "../menuPart/menuPart.html"
})

let languageMain = document.querySelector(".language-main")
let languagePart = document.querySelector(".language-part")
languageMain.addEventListener("click",()=>{
    languagePart.classList.toggle("active2")
})

document.querySelector(".button-EN").addEventListener("click", () => {
    window.location.href = "../freePart/freePart.html"; 
});

document.querySelector(".btn-reservation").addEventListener("click", () => {
  window.location.href = "../reservationPartAZ/reservationPartAZ.html"; 
});

let burgerDiv = document.querySelector(".burger-div");
let headerItems = document.querySelector(".header-items");
burgerDiv.addEventListener("click", () => {
    headerItems.classList.toggle("active1");
});
