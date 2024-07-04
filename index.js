import { getLocal, setLocal, validForm } from "./src/helper.js";
if (getLocal("auth") === null) {
   setLocal("auth", [{ login: "admin@admin.com", password: "Admin1234" }]);
}

const form = document.getElementById("authForm");

//регистрация
document.getElementById("logIn").addEventListener("click", function (e) {
   e.preventDefault();
   let { valid, password, login } = validForm(form);
   if (valid) {
      let base = getLocal('auth');
      let userExists = base.some(el => el.login === login);
      if (userExists) {
         alert("Такой пользователь уже существует");
         form.reset();
      } else {
         base.push({ login: login, password: password });
         setLocal('auth', base);
         form.reset();
         if (confirm("Регистрация прошла успешно, войти?")) {
            form.submit()
            setLocal('user', login);
         } else {
            null
         };
      }
   }
});

//вход
document.getElementById("signIn").addEventListener("click", function (e) {
   e.preventDefault()
   let { valid, password, login } = validForm(form);
   let remember = form.remember.checked;
   let base = getLocal("auth")

   if (valid) {
      let userExists = base.some(el => el.login === login && el.password === password);
      if (userExists) {
         alert(`Пароль ${remember ? "запомнили" : "не запомнили"} `);
         form.reset();
         setLocal('user', login);
         form.submit();
      } else {
         alert("Не верный логин или пароль")
      }
   }
});