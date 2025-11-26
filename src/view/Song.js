/**
 * @typedef {import("../service/SongService").Song} Song
 */

import { getAllSongs } from "../service/SongService";

/**
 *
 * @param {HTMLDivElement} main
 */
export function Song(main) {
  main.innerHTML = "";

  const div = document.createElement("div");
  div.className = "card shadow p-4";

  const divCardHead = document.createElement("div");
  divCardHead.className = "card-header bg-white border-bottom-0 d-flex";

  const h2 = document.createElement("h2");
  h2.textContent = "Canciones";
  h2.className = "w-auto me-auto mb-0";
  divCardHead.appendChild(h2);

  const aButtonCreate = document.createElement("a");
  aButtonCreate.href = "#/SongManager?action=create";
  const buttonCreate = document.createElement("button");
  buttonCreate.className = "btn btn-color-custom rounded-5";
  buttonCreate.textContent = "Añadir nueva Canción";
  aButtonCreate.appendChild(buttonCreate);
  divCardHead.appendChild(aButtonCreate);

  const divTable = document.createElement("div");
  divTable.className =
    "table-responsive table-responsive rounded-3 overflow-hidden";
  const table = document.createElement("table");
  addTableHead(table);
  table.className = "table table-striped mb-0 text-center align-middle";
  const tbody = document.createElement("tbody");
  tbody.id = "tableSong";
  table.appendChild(tbody);
  getAllSongs(renderTableData);
  divTable.appendChild(table);

  div.appendChild(divCardHead);
  div.appendChild(divTable);

  main.appendChild(div);
}

/**
 *
 * @param {HTMLTableElement} table
 */
export function addTableHead(table) {
  const thead = document.createElement("thead");
  thead.className = "table-dark";

  const tr = document.createElement("tr");

  const thTitle = document.createElement("th");
  thTitle.textContent = "Título";
  tr.appendChild(thTitle);

  const thGenre = document.createElement("th");
  thGenre.textContent = "Género";
  tr.appendChild(thGenre);

  const thArtist = document.createElement("th");
  thArtist.textContent = "Artista";
  tr.appendChild(thArtist);

  const thDate = document.createElement("th");
  thDate.textContent = "Date";
  tr.appendChild(thDate);

  thead.appendChild(tr);
  table.appendChild(thead);
}

/**
 *
 * @param {Song} songs
 */
export function renderTableData(songs) {
  const tbody = document.getElementById("tableSong");
  tbody.innerHTML = "";
  songs.forEach((song) => {
    addNewRow(song, tbody);
  });
}

/**
 *
 * @param {Song} song
 * @param {HTMLTableElement} tbody
 */
export function addNewRow(song, tbody) {
  const tr = document.createElement("tr");

  const tdTitle = document.createElement("td");
  tdTitle.textContent = song.title;
  tr.appendChild(tdTitle);

  const tdGenre = document.createElement("td");
  tdGenre.textContent = song.genre;
  tr.appendChild(tdGenre);

  const tdArtist = document.createElement("td");
  tdArtist.textContent = song.idArtist;
  tr.appendChild(tdArtist);

  const tdDate = document.createElement("td");
  tdDate.textContent = song.date;
  tr.appendChild(tdDate);

  tbody.appendChild(tr);
}
