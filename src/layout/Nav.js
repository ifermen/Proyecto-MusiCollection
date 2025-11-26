/**
 * 
 * @param {HTMLDivElement} header 
 */
export function nav (header){
    const ul = document.createElement("ul");
    ul.className = "nav nav-pills gap-2";

    linkToSong(ul);
    linkToArtist(ul);

    header.appendChild(ul);
    
}

/**
 * 
 * @param {HTMLUListElement} nav 
 */
export function linkToSong(nav){
    const li = document.createElement("li");
    li.className = "nav-item";

    const a = document.createElement("a");
    a.className = "nav-link active bg-gradient-primary-link fw-bold rounded-5";
    a.href = "#/Song";
    a.textContent = "Canciones";

    li.appendChild(a);
    nav.appendChild(li);

}

/**
 * 
 * @param {HTMLUListElement} nav 
 */
export function linkToArtist(nav){
    const li = document.createElement("li");
    li.className = "nav-item";

    const a = document.createElement("a");
    a.className = "nav-link active bg-gradient-primary-link fw-bold rounded-5";
    a.href = "#/artist";
    a.textContent = "Artistas";

    li.appendChild(a);
    nav.appendChild(li);

}