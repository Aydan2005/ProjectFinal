document.getElementById('reservation-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    const today = new Date().toISOString().split('T')[0];

    // Məhdudiyyətlər
    if (name === "") {
        alert("Adınızı daxil edin.");
        return;
    }

    if (date < today) {
        alert("Tarix keçmiş ola bilməz.");
        return;
    }

    if (!/^\+994\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/.test(phone)) {
        alert("Telefon formatı düzgün deyil. (+994 XX XXX XX XX)");
        return;
    }

    // Rezervasiya təsdiqi
    document.getElementById('confirmation-message').innerText = 
        `Təşəkkürlər, ${name}. Rezervasiyanız qəbul olundu: ${date}, ${time}, ${guests} qonaq.`;
});
let languageMain = document.querySelector(".language-main")
let languagePart = document.querySelector(".language-part")
languageMain.addEventListener("click",()=>{
    languagePart.classList.toggle("active")
})




document.querySelector(".button-EN").addEventListener("click", () => {
    window.location.href = "../reservationPartForPremium/reservationPartForPremium.html"; 
});