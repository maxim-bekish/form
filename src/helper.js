export const setLocal = (name, data) => {
   localStorage.setItem(name, JSON.stringify(data));
}

export const getLocal = (name) => {
   return JSON.parse(localStorage.getItem(name));
}

const isValidLogin = (login) => {
   const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/;
   return { valid: pattern.test(login), value: login };
}

const isValidPassword = (password) => {
   const minLength = 4;
   const maxLength = 20;
   const hasDigit = /\d/;
   const hasLowerCase = /[a-z]/;
   const hasUpperCase = /[A-Z]/;
   const validChars = /^[a-zA-Z0-9]+$/;

   if (password.length < minLength) {
      return { valid: false, message: `Пароль должен содержать минимум ${minLength} символа.` };
   }
   if (password.length > maxLength) {
      return { valid: false, message: `Пароль должен содержать не более ${maxLength} символов.` };
   }
   if (!hasDigit.test(password)) {
      return { valid: false, message: 'Пароль должен содержать хотя бы одну цифру.' };
   }
   if (!hasLowerCase.test(password)) {
      return { valid: false, message: 'Пароль должен содержать хотя бы одну строчную латинскую букву.' };
   }
   if (!hasUpperCase.test(password)) {
      return { valid: false, message: 'Пароль должен содержать хотя бы одну заглавную латинскую букву.' };
   }
   if (!validChars.test(password)) {
      return { valid: false, message: 'Пароль может содержать только латинские буквы и цифры.' };
   }

   return { valid: true, value: password };
}

export const validForm = (form) => {

   const passwordValidationResult = isValidPassword(form.password.value);
   const loginValidationResult = isValidLogin(form.login.value);

   if (!loginValidationResult.valid) {
      alert("Не верный формат логина");
      form.login.classList.add("auth-form__input--error");
   } else {
      form.login.classList.remove("auth-form__input--error");
   }

   if (!passwordValidationResult.valid) {
      alert(passwordValidationResult.message);
      form.password.classList.add("auth-form__input--error");
   } else {
      form.password.classList.remove("auth-form__input--error");
   }

   if (loginValidationResult.valid && passwordValidationResult.valid) {
      return { valid: true, password: passwordValidationResult.value, login: loginValidationResult.value };
   } else {
      return { valid: false };
   }
}
