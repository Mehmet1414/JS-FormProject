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

  fetch("http://localhost:3004/add-form", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(">>> gelen cevap",data);

      /* Gönderildi uyarisi */
      
      modal.style.display = "block";
      modalMsg.innerText = `${data.message}...`

      /* mesaj gönderi sesli uyari */
      sound.play()
    })
    .catch((error) => {
      console.log(error);
    });
    const sound = new Audio("./assets/msg-sound.mp3")
      /* Formu bosalt */
  setTimeout(() => {
      surnameElement.value = "";
      email.value = "";
      message.value = "";
      nameElement.value = "";

      /* modal i kapat */
      modal.style.display = "none";

      /* mesaj sesini sonlandir */
      sound.pause()
    
  }, 3000);
});

/* NECESSARY FONCTIONS/ TOOLS */
