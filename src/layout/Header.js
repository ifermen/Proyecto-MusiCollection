import i18next from "i18next";
import { nav } from "./Nav";
import { translatePage } from "../i18n/i18n";

/**
 *  
 * @param {HTMLDivElement} app 
 */
export function header(app) {
    const header = document.createElement("header");
    header.className = "d-flex flex-wrap justify-content-center p-3 border-bottom";
    
    const a = document.createElement("a");
    a.className = "d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none";
    a.href = ""

    const h1 = document.createElement("h1");
    h1.className = "h-title mb-0"
    h1.textContent = "MusiCollection";

    a.appendChild(h1);
    header.appendChild(a);

    const btnEs = document.createElement("button");
    btnEs.id = "btnEs";
    btnEs.textContent = "Español";
    btnEs.addEventListener("click", () => {
        i18next.changeLanguage("es").then(translatePage);
    });
    header.appendChild(btnEs);

    const btnEn = document.createElement("button");
    btnEn.id = "btnEs";
    btnEn.textContent = "English";
    btnEn.addEventListener("click", () => {
        i18next.changeLanguage("en").then(translatePage);
    });
    header.appendChild(btnEn);

    nav(header)
    app.appendChild(header);
}