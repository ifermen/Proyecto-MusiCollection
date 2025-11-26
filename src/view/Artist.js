/**
 * @typedef {import("../service/ArtistService").Artist} Artist
 */

import { getAllArtist } from "../service/ArtistService";

/**
 * 
 * @param {HTMLDivElement} main 
 */
export function Artist (main) {
    main.innerHTML = "";

    const div = document.createElement("div");
    div.className = "card shadow p-4";
    
    const divCardHead = document.createElement("div");
    divCardHead.className = "card-header bg-white border-bottom-0 d-flex";

    const h2 = document.createElement("h2");
    h2.textContent = "Artista";
    h2.className = "w-auto me-auto mb-0"
    divCardHead.appendChild(h2);

    const aButtonCreate = document.createElement("a");
    aButtonCreate.href = "#/ArtistManager?action=create";
    const buttonCreate = document.createElement("button");
    buttonCreate.className = "btn btn-color-custom rounded-5";
    buttonCreate.textContent = "Añadir nuevo Artista";
    aButtonCreate.appendChild(buttonCreate);
    divCardHead.appendChild(aButtonCreate);

    const divTable = document.createElement("div");
    divTable.className = "table-responsive table-responsive rounded-3 overflow-hidden";
    const table = document.createElement("table");
    addTableHead(table);
    table.className = "table table-striped mb-0 text-center align-middle";
    const tbody = document.createElement("tbody");
    tbody.id = "tableArtist";
    table.appendChild(tbody);
    getAllArtist(renderTableData);
    divTable.appendChild(table);

    div.appendChild(divCardHead);
    div.appendChild(divTable);

    main.appendChild(div);
}

/**
 * 
 * @param {HTMLTableElement} table 
 */
export function addTableHead(table){
    const thead = document.createElement("thead");
    thead.className = "table-dark";
    
    const tr = document.createElement("tr");
    
    const thTitle = document.createElement("th");
    thTitle.textContent = "Nombre";
    tr.appendChild(thTitle);

    const thGenre = document.createElement("th");
    thGenre.textContent = "Género";
    tr.appendChild(thGenre);

    const thArtist = document.createElement("th");
    thArtist.textContent = "Nacionalidad";
    tr.appendChild(thArtist);

    const thDate = document.createElement("th");
    thDate.textContent = "Fecha de Nacimiento";
    tr.appendChild(thDate);

    thead.appendChild(tr);
    table.appendChild(thead);
}

/**
 * 
 * @param {Artist} artists
 */
export function renderTableData(artists){
    const tbody = document.getElementById("tableArtist");
    tbody.innerHTML = "";
    artists.forEach(artist => {
        addNewRow(artist,tbody);
    });
}

/**
 * 
 * @param {Artist} artist 
 * @param {HTMLTableElement} tbody 
 */
export function addNewRow(artist,tbody){
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = artist.name;
    tr.appendChild(tdName);

    const tdGenre = document.createElement("td");
    tdGenre.textContent = artist.genre;
    tr.appendChild(tdGenre);

    const tdNationality = document.createElement("td");
    tdNationality.textContent = artist.nationality;
    tr.appendChild(tdNationality);

    const tdDate = document.createElement("td");
    tdDate.textContent = artist.birthdate;
    tr.appendChild(tdDate);

    tbody.appendChild(tr);
}