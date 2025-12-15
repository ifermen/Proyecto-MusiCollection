/**
 * 
 * @param {HTMLDivElement} main 
 */
export function Home(main) {
  main.innerHTML = "";
  const title = document.createElement("h2");
  title.classList.add();
  title.textContent = "Sobre MusiColection";
  title.dataset.i18n = "view.home.title";
  main.appendChild(title);

  const p1 = document.createElement("p");
  p1.textContent = "MusiCollection es una aplicación pensada para explorar y gestionar una colección musical compartida entre todos los usuarios. Te permite visualizar canciones y artistas, administrarlos fácilmente y mantener todo organizado en un solo lugar.";
  p1.dataset.i18n = "view.home.p1";
  main.appendChild(p1);


  const p2 = document.createElement("p");
  p2.textContent = "Además, podrás marcar tus pistas y artistas favoritos para acceder a ellos rápidamente, guardándolos directamente en tu navegador mediante localStorage y manteniendo tus preferencias siempre disponibles.";
  p2.dataset.i18n = "view.home.p2";
  main.appendChild(p2);

  const h3 = document.createElement("h3");
  h3.textContent = "Funcionalidades";
  h3.dataset.i18n = "view.home.h3";
  main.appendChild(h3);

  const ul = document.createElement("ul");
  
  const li1 = document.createElement("li");
  li1.textContent = "Visualizar lista de canciones";
  li1.dataset.i18n = "view.home.li1";
  ul.appendChild(li1);

  const li2 = document.createElement("li");
  li2.textContent = "Crear canciones";
  li2.dataset.i18n = "view.home.li2";
  ul.appendChild(li2);
  
  const li3 = document.createElement("li");
  li3.textContent = "Crear artistas";
  li3.dataset.i18n = "view.home.li3";
  ul.appendChild(li3);
  
  const li4 = document.createElement("li");
  li4.textContent = "Añadir y quitar canciones de favoritos";
  li4.dataset.i18n = "view.home.li4";
  ul.appendChild(li4);
  
  const li5 = document.createElement("li");
  li5.textContent = "Añadir y quitar artistas de favoritos";
  li5.dataset.i18n = "view.home.li5";
  ul.appendChild(li5);
  
  const li6 = document.createElement("li");
  li6.textContent = "Guardado de favoritos mediante localStorage";
  li6.dataset.i18n = "view.home.li6";
  ul.appendChild(li6);

  main.appendChild(ul);
}
