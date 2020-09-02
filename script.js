var popup = document.querySelector(".modal-login"); //ищет в документе (DOM) нужный класс
var link = document.querySelector(".login-link");// 1-ищет в документе класс
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[user-login]");
var password = popup.querySelector("[user-password]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(evt){ //добавляем событие при клике на класс в переменной link
evt.preventDefault(); //по умолчанию выключено
popup.classList.add('modal-show');  //в переменную popup добавляется класс и становится в документе после
login.focus();
});
close.addEventListener("click", function(evt) { //при закрытии
evt.preventDefault(); //по умолчанию выкл
popup.classList.remove("modal-show"); //удаляет класс из документа (модальное окно закрывается)
});
// form.addEventListener("submit", function(evt) {
//     if (!login.value || !password.value) {
//     evt.preventDefault();
// console.log("Let's enter login and password");
//     } else{
// localStorage.setItem("login", login.value);
//     }
// });
// window.addEventListener("keydown", function(event){
//     if (event.keyCode === 27){
//         if (popup.classList.contains("modal-show")) {
//             event.preventDefault();
//             popup.classList.remove("modal-show");
//         }
//     }
// });
