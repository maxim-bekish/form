import { getLocal } from './helper.js';

let currentUrl = window.location.pathname;
const showLogin = document.getElementById("showLogin");
console.log(currentUrl)
if (currentUrl === '/src/demo.html' || currentUrl === "/form/src/demo.html") {
   showLogin.textContent = `Ваш логин ${getLocal('user')}. `;
}

