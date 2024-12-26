let signUp = document.querySelector(".sign-up");
let signIn = document.querySelector(".sign-in");
let forSignUp = document.querySelector(".forSignUp");
let forSignIn = document.querySelector(".forSignIn");

signUp.addEventListener("click", () => {
    if (forSignUp.classList.contains("hidden")) {
        forSignUp.classList.remove("hidden");
    }
    forSignIn.classList.add("hidden");
});

signIn.addEventListener("click", () => {
    if (forSignIn.classList.contains("hidden")) {
        forSignIn.classList.remove("hidden");
    }
    forSignUp.classList.add("hidden");
});

// document.getElementById("navigateButton").addEventListener("click", () => {
//     window.location.href = "newpage.html"; // Keçid ediləcək səhifənin ünvanı
// });
    
let submit1 = document.querySelector(".submit1")
submit1.addEventListener("click",(e)=>{
    e.preventDefault()
    window.location.href = "./premiumPart/premium.html"
})


let submit2 = document.querySelector(".submit2");
submit2.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href = "./freePart/freePart.html";
})



const inputs1 = document.querySelectorAll('.req-inputs1');
// const button = document.getElementById('submitButton');

function checkInputs1() {
  // Əvvəlcə inputların doluluğunu yoxlamaq üçün dəyişən təyin edilir
  let allFilled1 = true;

  // Hər inputu yoxlamaq üçün dövr
  for (let i = 0; i < inputs1.length; i++) {
    if (inputs1[i].value.trim() === '') {
      allFilled1 = false; // Əgər hər hansı bir input boşdursa
      break; // Daha yoxlamağa ehtiyac yoxdur, dövrü bitir
    }
  }

  // Düyməni aktiv və ya deaktiv etmək
  submit1.disabled = !allFilled1;
}

// Hər input dəyişdikdə yoxlama aparır
inputs1.forEach(input => {
  input.addEventListener('input', checkInputs1);
});





const inputs2 = document.querySelectorAll('.req-inputs2');
// const button = document.getElementById('submitButton');

function checkInputs2() {
  // Əvvəlcə inputların doluluğunu yoxlamaq üçün dəyişən təyin edilir
  let allFilled2 = true;

  // Hər inputu yoxlamaq üçün dövr
  for (let i = 0; i < inputs2.length; i++) {
    if (inputs2[i].value.trim() === '') {
      allFilled2 = false; // Əgər hər hansı bir input boşdursa
      break; // Daha yoxlamağa ehtiyac yoxdur, dövrü bitir
    }
  }

  // Düyməni aktiv və ya deaktiv etmək
  submit2.disabled = !allFilled2;
}

// Hər input dəyişdikdə yoxlama aparır
inputs2.forEach(input => {
  input.addEventListener('input', checkInputs2);
});

