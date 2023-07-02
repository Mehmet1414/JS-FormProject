/* GET NECESSARY ELEMNTS */
const myForm = document.getElementById("myForm");
const nameElement = document.getElementById("name");
const surnameElement = document.getElementById("surname");
const email = document.getElementById("email");
const message = document.getElementById("massage");
const formBtn = document.getElementById("formBtn");
const modal = document.getElementById("modal");
const modalMsg = document.getElementById("modalMsg")

/* EVENT LISTENERS */
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //console.log("submit olayi gereklesti");

  /* VALIDATION */

  if (!nameElement.value) {
    nameElement.classList.add("error-msg");
    nameElement.focus();
    return;
  } else {
    nameElement.classList.remove("error-msg");
  }
  if (!surnameElement.value) {
    surnameElement.classList.add("error-msg");
    surnameElement.focus();
    return;
  } else {
    surnameElement.classList.remove("error-msg");
  }
  if (!email.value) {
    email.classList.add("error-msg");
    email.focus();
    return;
  } else {
    email.classList.remove("error-msg");
  }
  if (!message.value) {
    message.classList.add("error-msg");
    message.focus();
    return;
  } else {
    surnameElement.classList.remove("error-msg");
  }

  /* API ye form gönder */
  const data = {
    name: nameElement.value,
    surname: surnameElement.value,
    email: email.value,
    message: message.value,
    date: new Date(),
  };
  /* Gönderiliyor uyarisi */

  formBtn.disabled = "true";
  formBtn.innerText = "GÖNDERILIYOR...";

  fetch("http://localhost:3004/add-form", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      /* Gönderildi uyarisi */
      formBtn.disabled = "false";
      formBtn.innerText = "GÖNDER";
      modal.style.display = "block";
      modalMsg.innerText = `${data.message}...`
    })
    .catch((error) => {
      console.log(error);
    });
  /* Formu bosalt ve modal i kapat */
  setTimeout(() => {
      surnameElement.value = "";
      email.value = "";
      message.value = "";
      nameElement.value = "";

      modal.style.display = "none";
    
  }, 3000);
});

/* NECESSARY FONCTIONS/ TOOLS */
