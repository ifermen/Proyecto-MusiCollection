/**
 * 
 * @param {HTMLDivElement} main 
 */
export function Song (main) {
    main.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.textContent = "Canciones"

    main.appendChild(h2);
}