let setLocal = (name, data) => {
   localStorage.setItem(name, JSON.stringify(data));
}
let getLocal = (name) => {
   return JSON.parse(localStorage.getItem(name));
}

setLocal("auth", [{ login: "admin@admin", password: "admin" }])

const form = document.getElementById("authForm");

//регистрация
document.getElementById("logIn").addEventListener("click", function (e) {
   e.preventDefault();

   // Получаем элементы формы
   let form = document.getElementById('authForm');

   // Проверка длины логина
   let isAUTH_LOGIN = false;
   let loginValue = form.login.value.trim();
   if (loginValue.length <= 5) {
      alert("Логин должен быть больше 5 символов");
      form.login.classList.add("auth-form__input--error");
   } else {
      form.login.classList.remove("auth-form__input--error");
      isAUTH_LOGIN = true;
   }

   // Проверка длины пароля
   let isAUTH_PASS = false;
   let passwordValue = form.password.value.trim();
   if (passwordValue.length <= 4) {
      alert("Пароль должен быть больше 4 символов");
      form.password.classList.add("auth-form__input--error");
   } else {
      form.password.classList.remove("auth-form__input--error");
      isAUTH_PASS = true;
   }

   // Если оба условия выполнены
   if (isAUTH_PASS && isAUTH_LOGIN) {
      let base = getLocal('auth');

      // Проверяем, существует ли уже такой логин в базе
      let userExists = base.some(el => el.login === loginValue);

      if (userExists) {
         alert("Такой пользователь уже существует");
         form.reset();
      } else {
         // Добавляем нового пользователя в базу
         base.push({ login: loginValue, password: passwordValue });
         setLocal('auth', base);
         alert("Регистрация прошла успешно");
         form.reset();
      }
   }
});


