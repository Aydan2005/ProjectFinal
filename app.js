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

let submit1 = document.querySelector(".submit1")

submit1.addEventListener("click", (e) => {
  e.preventDefault();
  const passwordInput1 = document.querySelector("#password");
  if (passwordInput1.value.length < 6) {
      alert("Password must be at least 6 characters long!");
  } else {
      window.location.href = "./premiumPart/premium.html";
  }
});

let submit2 = document.querySelector(".submit2");
submit2.addEventListener("click", (e) => {
  e.preventDefault();
  const passwordInput2 = document.querySelector("#password-signin");
  if (passwordInput2.value.length < 6) {
      alert("Password must be at least 6 characters long!");
  } else {
      window.location.href = "./freePart/freePart.html";
  }
});

const inputs1 = document.querySelectorAll('.req-inputs1');
const passwordInput1 = document.querySelector("#password");

function checkInputs1() {
  let allFilled1 = true;
  for (let i = 0; i < inputs1.length; i++) {
    if (inputs1[i].value.trim() === '') {
      allFilled1 = false;
      break;
    }
  }
  // if (passwordInput1.value.length < 6) { 
  //   allFilled1 = false; 
  //   alert("Password must be at least 6 characters long!"); 
  // }
  submit1.disabled = !allFilled1;
}

inputs1.forEach(input => { 
  input.addEventListener('input', () => { 
    if (input.id === "name" || input.id === "surname"){ 
      input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
    } 
    checkInputs1();
  }); 
});

const inputs2 = document.querySelectorAll('.req-inputs2');
const passwordInput2 = document.querySelector("#password-signin");

function checkInputs2() {
  let allFilled2 = true;
  for (let i = 0; i < inputs2.length; i++) {
    if (inputs2[i].value.trim() === '') {
      allFilled2 = false;
      break;
    }
  }
  // if (passwordInput2.value.length < 6) { 
  //   allFilled2 = false; 
  //   alert("Password must be at least 6 characters long!"); 
  // }
  submit2.disabled = !allFilled2;
}
inputs2.forEach(input => {
  input.addEventListener('input', checkInputs2);
});