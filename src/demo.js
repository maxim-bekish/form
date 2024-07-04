import { getLocal } from './helper.js';

let currentUrl = window.location.pathname;
const showLogin = document.getElementById("showLogin");
if (currentUrl === '/src/demo.html' || currentUrl === "/form/src/demo.html") {
   showLogin.textContent = `Ваш логин ${getLocal('user')}. `;
}

