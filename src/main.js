import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { router } from './router.js'
import { header } from './layout/Header.js';
import { footer } from './layout/Footer.js';

const app = document.querySelector('#app');
const main = document.createElement("main");
main.className = "p-3"
main.id = "view";

header(app);
app.appendChild(main);
footer(app)

router();
window.addEventListener('hashchange', () => router());