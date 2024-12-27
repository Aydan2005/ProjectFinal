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
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'grid';
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





async function getExchangeRate() {
    try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/e55b790e8387e029a03784e6/latest/USD');
        const data = await response.json();
        return data.conversion_rates.AZN; 
    } catch (error) {
        console.error('Məzənnəni əldə etmək mümkün olmadı:', error);
        alert('Məzənnəni əldə etmək mümkün olmadı. Daha sonra yenidən cəhd edin.');
        return null;
    }
}

document.querySelectorAll('.convert-btn').forEach(button => {
    button.addEventListener('click', async (event) => {
        const mainItem = event.target.closest('.main-item');
        const aznPriceElement = mainItem.querySelector('.main-item-money');
        const usdPriceElement = mainItem.querySelector('.usd-price');
        const aznPrice = parseFloat(aznPriceElement.textContent.replace('₼', '').trim());
        const aznToUsdRate = await getExchangeRate();
        if (!aznToUsdRate) return;
        const usdPrice = (aznPrice / aznToUsdRate).toFixed(2);
        usdPriceElement.textContent = `$${usdPrice}`;
    });
});

let languageMain = document.querySelector(".language-main")
let languagePart = document.querySelector(".language-part")
languageMain.addEventListener("click",()=>{
    languagePart.classList.toggle("active2")
})

document.querySelector(".button-AZ").addEventListener("click", () => {
    window.location.href = "../paidMenuAZ/paidMenuAZ.html"; 
});





document.querySelector(".heart").addEventListener("click", () => {
    window.location.href = "../favoritePart/favoritePart.html"; 
});

document.querySelectorAll('.favorite-btn').forEach(button => {
    button.addEventListener('click', function() {
        const mainItem = this.closest('.main-item');
        const itemName = mainItem.querySelector('.main-item-name').textContent;
        const itemPrice = mainItem.querySelector('.main-item-money').textContent;
        const itemIngredients = mainItem.querySelector('.main-item-ingredient').textContent;
        this.disabled = true;
        let favorites = JSON.parse(localStorage.getItem('paidMenuFavorites')) || [];
        if (!favorites.some(fav => fav.name === itemName)) {
            favorites.push({
                name: itemName,
                price: itemPrice,
                ingredients: itemIngredients
            });
            localStorage.setItem('paidMenuFavorites', JSON.stringify(favorites));
        }
    });
});





let burgerDiv = document.querySelector(".burger-div");
let headerItems = document.querySelector(".header-items");
burgerDiv.addEventListener("click", () => {
    headerItems.classList.toggle("active1");
});

