/**
 *  
 * @param {HTMLDivElement} app 
 */
export function footer(app) {
    const footer = document.createElement("footer");
    footer.className = "border-top py-4 d-flex justify-content-center"
    
    const p = document.createElement("p");
    p.textContent = "Creado por Iván Fernández Méndez";
    p.dataset.i18n = "layout.footer.info";
    p.className = "m-0 w-auto";

    footer.appendChild(p);
    app.appendChild(footer);
}