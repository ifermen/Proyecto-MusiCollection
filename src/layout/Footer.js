/**
 *  
 * @param {HTMLDivElement} app 
 */
export function footer(app) {
    const footer = document.createElement("footer");
    
    const p = document.createElement("p");
    p.textContent = "Creado por Iván Fernández Méndez";

    footer.appendChild(p);
    app.appendChild(footer);
}