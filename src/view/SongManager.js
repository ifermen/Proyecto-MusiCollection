import { getAllArtist } from "../service/ArtistService";
import { addSong } from "../service/SongService";
import {
  isBetween,
  isRequired,
  isNotYearInTheFuture,
  isNumber,
} from "../utility/formValidation";
import { ErrorView } from "./ErrorView";

/**
 * @typedef {import("../router").Param} Param
 */

/**
 * @typedef {import("../service/SongService").Song} Song
 */

const ACTIONS_WITH_ID = ["show", "edit", "delete"];
let paramAction = "";
let paramId = "";

export function SongManager(main, params) {
  main.innerHTML = "";

  try {
    loadParams(params);
  } catch (error) {
    ErrorView(main, error.message);
    return false;
  }

  const div = document.createElement("div");
  div.className = "card shadow p-4 rounded-4";

  const divCardHead = document.createElement("div");
  divCardHead.className = "card-header bg-white border-bottom-0 d-flex";

  const h2 = document.createElement("h2");
  try {
    switch (paramAction) {
      case "edit":
        h2.textContent = "Editar Canción";
        break;
      case "create":
        h2.textContent = "Crear Canción";
        break;
      case "delete":
        h2.textContent = "Borrar Canción";
        break;
      case "show":
        h2.textContent = "Mostar Canción";
        break;
      default:
        throw new Error("Acción incorrecta");
        break;
    }
  } catch (error) {
    ErrorView(main, error.message);
    return false;
  }
  h2.className = "w-auto me-auto mb-0";
  divCardHead.appendChild(h2);

  const aButtonCreate = document.createElement("a");
  aButtonCreate.href = "#/song";
  const buttonCreate = document.createElement("button");
  buttonCreate.className = "btn btn-secondary rounded-5";
  buttonCreate.textContent = "Volver";
  aButtonCreate.appendChild(buttonCreate);
  divCardHead.appendChild(aButtonCreate);

  div.appendChild(divCardHead);

  const divCardBody = document.createElement("div");
  divCardBody.className = "card-header bg-white border-bottom-0";
  renderForm(divCardBody);
  div.appendChild(divCardBody);

  main.appendChild(div);
}

/**
 *
 * @param {Param[]} params
 */
function loadParams(params) {
  if (params[0].name == "action") {
    paramAction = params[0].value;
  } else {
    throw new Error("Acción no especificada");
  }

  if (ACTIONS_WITH_ID.includes(paramAction)) {
    if (params.length > 1 && params[1].name == "artistid") {
      paramId = params[1].value;
    } else {
      throw new Error("Parametro necesario no encontrado");
    }
  }
}

/**
 *
 * @param {HTMLDivElement} divCardBody
 */
function renderForm(divCardBody) {
  const form = document.createElement("form");
  form.className = "border rounded-4 p-3";
  form.id = "artistForm";
  form.addEventListener("input", (event) => validateInput(event));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitForm(event);
  });

  const divRow = document.createElement("div");
  divRow.className = "row";
  const divCol1 = document.createElement("div");
  divCol1.className = "col col-6 border-end";
  const divCol2 = document.createElement("div");
  divCol2.className = "col col-6";

  renderInputTitle(divCol1);
  renderInputGenre(divCol1);
  renderInputArtist(divCol2);
  renderInputYear(divCol2);

  divRow.appendChild(divCol1);
  divRow.appendChild(divCol2);
  form.appendChild(divRow);

  const button = document.createElement("button");
  button.textContent = "Enviar";
  button.className = "btn btn-color-custom rounded-5 w-100 mt-3";
  button.type = "submit";
  form.appendChild(button);

  divCardBody.appendChild(form);
}

/**
 *
 * @param {HTMLFormElement} form
 */
function renderInputTitle(form) {
  const divFormControl = document.createElement("div");
  divFormControl.className = "form-group";
  const input = document.createElement("input");
  input.id = "titleInput";
  input.name = "titleInput";
  input.className = "form-control rounded-5";
  const label = document.createElement("label");
  label.textContent = "Título";
  label.htmlFor = "titleInput";
  label.className = "form-label";

  divFormControl.appendChild(label);
  divFormControl.appendChild(input);

  const small = document.createElement("small");
  small.className = "text-danger";
  divFormControl.appendChild(small);

  form.appendChild(divFormControl);
}

/**
 *
 * @param {HTMLFormElement} form
 */
function renderInputGenre(form) {
  const divFormControl = document.createElement("div");
  divFormControl.className = "form-group mt-2";
  const input = document.createElement("input");
  input.id = "genreInput";
  input.name = "genreInput";
  input.className = "form-control rounded-5";
  const label = document.createElement("label");
  label.textContent = "Géreno";
  label.htmlFor = "genreInput";
  label.className = "form-label";

  divFormControl.appendChild(label);
  divFormControl.appendChild(input);

  const small = document.createElement("small");
  small.className = "text-danger";
  divFormControl.appendChild(small);

  form.appendChild(divFormControl);
}

//#TODO Estoy haciendo el input de artistas que es un select que muestra todos los artisitas
/**
 *
 * @param {HTMLFormElement} form
 */
function renderInputArtist(form) {
  const divFormControl = document.createElement("div");
  divFormControl.className = "form-group";
  const select = document.createElement("select");
  select.id = "artistInput";
  select.name = "artistInput";
  select.className = "form-select rounded-5";
  const label = document.createElement("label");
  label.textContent = "Artista";
  label.htmlFor = "artistInput";
  label.className = "form-label";

  getAllArtist((artists) => {
    const defaultOption = document.createElement("option");
    defaultOption.textContent = " -- Elige una opción --";
    defaultOption.value = "-1";
    select.appendChild(defaultOption);
    artists.forEach((artist) => {
      const option = document.createElement("option");
      option.textContent = artist.name;
      option.value = artist.id;
      select.appendChild(option);
    });
  });

  divFormControl.appendChild(label);
  divFormControl.appendChild(select);

  const small = document.createElement("small");
  small.className = "text-danger";
  divFormControl.appendChild(small);

  form.appendChild(divFormControl);
}

/**
 *
 * @param {HTMLFormElement} form
 */
function renderInputYear(form) {
  const divFormControl = document.createElement("div");
  divFormControl.className = "form-group mt-2";
  const input = document.createElement("input");
  input.type = "number";
  input.id = "yearInput";
  input.name = "yearInput";
  input.className = "form-control rounded-5";
  const label = document.createElement("label");
  label.textContent = "Año de publicación";
  label.htmlFor = "yearInput";
  label.className = "form-label";

  divFormControl.appendChild(label);
  divFormControl.appendChild(input);

  const small = document.createElement("small");
  small.className = "text-danger";
  divFormControl.appendChild(small);

  form.appendChild(divFormControl);
}

/**
 *
 * @param {HTMLInputElement} input
 * @param {string} message
 */
function showError(input, message) {
  const formField = input.parentElement;
  const errorSmall = formField.querySelector("small");
  errorSmall.textContent = message;
}

/**
 *
 * @param {string} input
 */
function showSuccess(input) {
  const formField = input.parentElement;
  const errorSmall = formField.querySelector("small");
  errorSmall.textContent = "";
}

/**
 *
 * @param {HTMLInputElement} input
 * @returns {boolean}
 */
function checkTitleInput(input) {
  let result = false;
  if (isRequired(input.value)) {
    if (isBetween(input.value.length, 3, 50)) {
      showSuccess(input);
      result = true;
    } else {
      showError(input, "El título debe de estar entre 3 y 50 caracteres.");
    }
  } else {
    showError(input, "Este campo es obligatorio.");
  }
  return result;
}

/**
 *
 * @param {HTMLInputElement} input
 * @returns {boolean}
 */
function checkGenreInput(input) {
  let result = false;
  if (isRequired(input.value)) {
    if (isBetween(input.value.length, 3, 50)) {
      showSuccess(input);
      result = true;
    } else {
      showError(input, "El género debe de estar entre 3 y 50 caracteres.");
    }
  } else {
    showError(input, "Este campo es obligatorio.");
  }
  return result;
}

/**
 *
 * @param {HTMLSelectElement} input
 * @returns {boolean}
 */
function checkArtistInput(input) {
  let result = false;
  if (isRequired(input.value)) {
    if (input.value != "-1") {
      showSuccess(input);
      result = true;
    } else {
      showError(input, "No se ha seleccionado ningún artista.");
    }
  } else {
    showError(input, "Este campo es obligatorio.");
  }
  return result;
}

/**
 *
 * @param {HTMLInputElement} input
 * @returns {boolean}
 */
function checkYearInput(input) {
  let result = false;
  if (isRequired(input.value)) {
    if(isNumber(input.value)){
      if (isNotYearInTheFuture(Number(input.value))) {
        showSuccess(input);
        result = true;
      } else {
        showError(input,"El año no puede ser posterior al actual.")
      }
    }else{
      showError(input,"El año debe de ser un número");
    }
  } else {
    showError(input, "Este campo es obligatorio.");
  }
  return result;
}

/**
 *
 * @param {Event} event
 */
function validateInput(event) {
  const name = event.target.name;

  switch (name) {
    case "titleInput":
      checkTitleInput(event.target);
      break;
    case "genreInput":
      checkGenreInput(event.target);
      break;
    case "artistInput":
      checkArtistInput(event.target);
      break;
    case "yearInput":
      checkYearInput(event.target);
      break;

    default:
      break;
  }
}

function submitForm(event) {
  const titleInput = document.getElementById("titleInput");
  const genreInput = document.getElementById("genreInput");
  const artistInput = document.getElementById("artistInput");
  const yearInput = document.getElementById("yearInput");

  const validatetitleInput = checkTitleInput(titleInput);
  const validateGenreInput = checkGenreInput(genreInput);
  const validateartistInput = checkArtistInput(artistInput);
  const validateyearInput = checkYearInput(yearInput);
  if (
    validatetitleInput &&
    validateGenreInput &&
    validateartistInput &&
    validateyearInput
  ) {
    /**
     * @type {Song}
     */
    const newSong = {
      title : titleInput.value,
      genre : genreInput.value,
      idArtist : artistInput.value,
      year : yearInput.value
    }

    addSong(newSong,(isError,msg) => {
      if(isError){
        alert(msg);
      }else{
        alert(msg);
      }
    });
    titleInput.value = "";
    genreInput.value = "";
    artistInput.value = "";
    yearInput.value = "";
  }
}
