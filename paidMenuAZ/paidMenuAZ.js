let mealsBtn = document.querySelector(".meals-btn")
let sweetsBtn = document.querySelector(".sweets-btn")
let bakeryBtn = document.querySelector(".bakery-btn")
let drinksBtn = document.querySelector(".drinks-btn")
let meal = document.querySelector(".meal")
let sweet = document.querySelector(".sweet")
let bakery = document.querySelector(".bakery")
let drink = document.querySelector(".drink")
mealsBtn.addEventListener("click",()=>{
    meal.classList.toggle("passive")
})
sweetsBtn.addEventListener("click",()=>{
    sweet.classList.toggle("passive")
})
bakeryBtn.addEventListener("click",()=>{
    bakery.classList.toggle("passive")
})
drinksBtn.addEventListener("click",()=>{
    drink.classList.toggle("passive")
})



function filterItems(category) {
    const items = document.querySelectorAll('.main-item');
    // const menuHeader = document.querySelector(".menu-header")
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'grid';
            // categoryHeader.textContent = `${category}`
            // console.log(menuHeader);
        } else {
            item.style.display = 'none';
        }
    });
}

function searchItems() {
    const input = document.querySelector('#search-Input').value.toLowerCase();
    const items = document.querySelectorAll('.main-item');
    if(input.length === 0){
        menuHeader.textContent = "All"
    }
    else
    items.forEach(item => {
        const name = item.getAttribute('data-name').toLowerCase();
        if (name.includes(input)) {
            item.style.display = 'grid';
        } else {
            item.style.display = 'none';
        }
    });
}
const menuHeader = document.querySelector(".menu-header")

const filterButtons = document.querySelectorAll('.filters button');
filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const category = event.target.getAttribute('data-category');
        menuHeader.textContent = `${category}`
        filterItems(category);
    });
});
const searchInput = document.querySelector('#search-Input');
searchInput.addEventListener('keyup',searchItems);
filterItems('new-meals');






// valyuta cevirme hissesi



// API-dən məlumat alma funksiyası
async function getExchangeRate() {
    try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/e55b790e8387e029a03784e6/latest/USD');
        const data = await response.json();
        return data.conversion_rates.AZN; // AZN üçün məzənnəni qaytarır
    } catch (error) {
        console.error('Məzənnəni əldə etmək mümkün olmadı:', error);
        alert('Məzənnəni əldə etmək mümkün olmadı. Daha sonra yenidən cəhd edin.');
        return null;
    }
}

// Düymələrə event listener əlavə edin
document.querySelectorAll('.convert-btn').forEach(button => {
    button.addEventListener('click', async (event) => {
        // hansi elemente click etmisikse onun ana elementi olan main-item
        const mainItem = event.target.closest('.main-item');
        const aznPriceElement = mainItem.querySelector('.main-item-money');
        const usdPriceElement = mainItem.querySelector('.usd-price');

        // Qiyməti AZN-dən götür
        const aznPrice = parseFloat(aznPriceElement.textContent.replace('₼', '').trim());

        // API-dən məzənnəni al
        const aznToUsdRate = await getExchangeRate();
        if (!aznToUsdRate) return; // Əgər məzənnə alınmazsa, funksiyanı bitir

        // USD qiymətini hesabla
        const usdPrice = (aznPrice / aznToUsdRate).toFixed(2);

        // USD qiymətini göstər
        usdPriceElement.textContent = `$${usdPrice}`;
    });
});

let languageMain = document.querySelector(".language-main")
let languagePart = document.querySelector(".language-part")
languageMain.addEventListener("click",()=>{
    languagePart.classList.toggle("active2")
})

// document.querySelector(".button-AZ").addEventListener("click", () => {
//     window.location.href = "../menuPartAZ/menuPartAZ.html"; 
// });





// document.querySelector(".heart").addEventListener("click", () => {
//     window.location.href = "../favoritePart/favoritePart.html"; 
// });



// // Favorite düymələrinə event listener əlavə edirik
// document.querySelectorAll('.favorite-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         const mainItem = this.closest('.main-item');
//         const itemName = mainItem.querySelector('.main-item-name').textContent;
//         const itemPrice = mainItem.querySelector('.main-item-money').textContent;
//         const itemIngredients = mainItem.querySelector('.main-item-ingredient').textContent;

//         // "Add favorite" düyməsini disable edirik
//         this.disabled = true;

//         // Favoritlərə əlavə etmək üçün array saxlayırıq
//         let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

//         // Bu itemin artıq əlavə olunub-olunmadığını yoxlayırıq
//         if (!favorites.some(fav => fav.name === itemName)) {
//             favorites.push({
//                 name: itemName,
//                 price: itemPrice,
//                 ingredients: itemIngredients
//             });
//             localStorage.setItem('favorites', JSON.stringify(favorites));
//         }
//     });
// });

// // "Favorites" səhifəsinə keçid edən düymə
// document.querySelector(".hearts").addEventListener('click', function() {
//     window.location.href = '../favoritePart/favoritePart.html';
// });




// // Favorite düymələrinə event listener əlavə edirik
// document.querySelectorAll('.favorite-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         const mainItem = this.closest('.main-item');
//         const itemName = mainItem.querySelector('.main-item-name').textContent;
//         const itemPrice = mainItem.querySelector('.main-item-money').textContent;
//         const itemIngredients = mainItem.querySelector('.main-item-ingredient').textContent;

//         // "Add favorite" düyməsini disable edirik
//         this.disabled = true;

//         // Favoritlərə əlavə etmək üçün array saxlayırıq
//         let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

//         // Bu itemin artıq əlavə olunub-olunmadığını yoxlayırıq
//         if (!favorites.some(fav => fav.name === itemName)) {
//             favorites.push({
//                 name: itemName,
//                 price: itemPrice,
//                 ingredients: itemIngredients
//             });
//             localStorage.setItem('favorites', JSON.stringify(favorites));
//         }
//     });
// });

// "Favorites" səhifəsinə keçid edən düymə
document.querySelector(".heart").addEventListener('click', function() {
    window.location.href = '../favoritePartAZ/favoritePartAZ.html';
});







// paidMenuAZ-dan favorilere əlavə
document.querySelectorAll('.favorite-btn').forEach(button => {
    button.addEventListener('click', function() {
        const mainItem = this.closest('.main-item');
        const itemName = mainItem.querySelector('.main-item-name').textContent;
        const itemPrice = mainItem.querySelector('.main-item-money').textContent;
        const itemIngredients = mainItem.querySelector('.main-item-ingredient').textContent;

        // "Add favorite" düyməsini disable edirik
        this.disabled = true;

        // Favoritlərə əlavə etmək üçün array saxlayırıq
        let favorites = JSON.parse(localStorage.getItem('paidMenuAZFavorites')) || [];

        // Bu itemin artıq əlavə olunub-olunmadığını yoxlayırıq
        if (!favorites.some(fav => fav.name === itemName)) {
            favorites.push({
                name: itemName,
                price: itemPrice,
                ingredients: itemIngredients
            });
            localStorage.setItem('paidMenuAZFavorites', JSON.stringify(favorites));
        }
    });
});














document.querySelector(".button-EN").addEventListener("click", () => {
    window.location.href = "../paidMenu/paidMenu.html"; 
});



let burgerDiv = document.querySelector(".burger-div");
let headerItems = document.querySelector(".header-items");
burgerDiv.addEventListener("click", () => {
    headerItems.classList.toggle("active1");
});
