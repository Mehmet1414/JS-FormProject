// sabit degiskenler

const _username = "emrehrmn";
const _password = "onecvlandingapi";

const userName = document.getElementById("username");
const password = document.getElementById("password");
const notLogin = document.getElementById("notLogin");
const isLogin = document.getElementById("isLogin");
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!userName.value) {
    userName.classList.add("error-msg");
    userName.focus();
    return;
  } else {
    userName.classList.remove("error-msg");
  }
  if (!password.value) {
    password.classList.add("error-msg");
    password.focus();
    return;
  } else {
    password.classList.remove("error-msg");
  }

  if (userName.value !== _username || password.value !== _password) {
    alert("Kullanici veya Sifre Hatali");
    return;
  } else {
  }

  fetch("http://localhost:3004/get-forms", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userName.value,
      pass: password.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
        const dataList = data.forms;
        notLogin.style.display = "none";
        isLogin.style.display = "flex";
    
        dataList.map((item, index) => {
          const cardWrapper = document.createElement("div");
          cardWrapper.className = "card-wrapper";
          cardWrapper.innerHTML = `
                    <u>index : ${index + 1}</u>
                    <div>
                        <span>Name :</span>
                        <span>${item.name}</span>
                    </div>
                    <div>
                        <span>Surname :</span>
                        <span>${item.surname}</span>
                    </div>
                    <div>
                        <span>Email :</span>
                        <span>${item.email}</span>
                    </div>
                    <div>
                        <span>Message :</span>
                        <span>${item.message}</span>
                    </div>
            `;
          isLogin.appendChild(cardWrapper);
        });
      })

    .catch((err) => console.log(err));
});
