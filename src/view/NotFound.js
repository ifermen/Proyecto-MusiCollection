/**
 * 
 * @param {HTMLDivElement} main 
 */
export function NotFound(main) {
  main.innerHTML = "";

  const div = document.createElement("div");
  div.className = "card shadow p-3";

  const h2 = document.createElement("h2");
  h2.textContent = "Error 404";
  h2.dataset.i18n = "view.notFount.h2";
  div.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = "La página no existe";
  p.dataset.i18n = "view.notFount.p";
  div.appendChild(p);

  main.appendChild(div);
}
