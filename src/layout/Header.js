import i18next from "i18next";
import { nav } from "./Nav";
import { translatePage, updateDirection } from "../i18n/i18n";

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

    const selectLanguage = document.createElement("select");
    selectLanguage.id="selectLanguage";
    selectLanguage.name="selectLanguage";
    selectLanguage.className="form-select w-auto";

    const optionEs = document.createElement("option");
    optionEs.value = "es";
    optionEs.selected = true;
    optionEs.textContent = "Español";
    selectLanguage.appendChild(optionEs);

    const optionEn = document.createElement("option");
    optionEn.value = "en";
    optionEn.textContent = "English";
    selectLanguage.appendChild(optionEn);
    
    const optionFr = document.createElement("option");
    optionFr.value = "fr";
    optionFr.textContent = "Français";
    selectLanguage.appendChild(optionFr);

    const optionAr = document.createElement("option");
    optionAr.value = "ar";
    optionAr.textContent = "عربي";
    selectLanguage.appendChild(optionAr);

    selectLanguage.addEventListener("input",() => {
        i18next.changeLanguage(selectLanguage.value).then(() => {
            translatePage();
            updateDirection();
        });
    })
    header.appendChild(selectLanguage);

    nav(header)
    app.appendChild(header);
}