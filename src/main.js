import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { router } from './router.js'
import { header } from './layout/Header.js';
import { footer } from './layout/Footer.js';
import { translatePage } from './i18n/i18n.js';

const app = document.querySelector('#app');
const main = document.createElement("main");
main.className = "p-3"
main.id = "view";

header(app);
app.appendChild(main);
footer(app)

router();
translatePage();
window.addEventListener('hashchange', () => router());