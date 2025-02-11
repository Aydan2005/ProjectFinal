// document.addEventListener('DOMContentLoaded', () => {
//     let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     const container = document.getElementById('favorites-container');

//     favorites.forEach(item => {
//         const itemDiv = document.createElement('div');
//         itemDiv.classList.add('favorite-item');
//         itemDiv.innerHTML = `
//             <div class="favorite-item-name">${item.name}</div>
//             <div class="favorite-item-price">${item.price}</div>
//             <div class="favorite-item-ingredients">${item.ingredients}</div>
//             <button class="remove-btn">X</button>
//         `;

//         // Silmə funksiyası əlavə edirik
//         itemDiv.querySelector('.remove-btn').addEventListener('click', () => {
//             favorites = favorites.filter(fav => fav.name !== item.name);
//             localStorage.setItem('favorites', JSON.stringify(favorites));
//             itemDiv.remove();
//         });

//         container.appendChild(itemDiv);
//     });

//     // "Go Back" düyməsinə klikləyəndə əvvəlki səhifəyə qayıdır
//     document.getElementById('go-back').addEventListener('click', function() {
//         window.location.href = '../paidMenu/paidMenu.html';
//     });
// });










    let favorites = JSON.parse(localStorage.getItem('paidMenuFavorites')) || [];
    const container = document.getElementById('favorites-container');

    favorites.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('favorite-item');
        itemDiv.innerHTML = `
            <div class="favorite-item-name">${item.name}</div>
            <div class="favorite-item-price">${item.price}</div>
            <div class="favorite-item-ingredients">${item.ingredients}</div>
            <button class="remove-btn">X</button>
        `;

        itemDiv.querySelector('.remove-btn').addEventListener('click', () => {
            favorites = favorites.filter(fav => fav.name !== item.name);
            localStorage.setItem('paidMenuFavorites', JSON.stringify(favorites));
            itemDiv.remove();
        });

        container.appendChild(itemDiv);
    });

    document.getElementById('go-back').addEventListener('click', function() {
        window.location.href = '../paidMenu/paidMenu.html';
    });