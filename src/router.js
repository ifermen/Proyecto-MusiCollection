import { Artist } from "./view/Artist.js";
import { Home } from "./view/Home.js";
import { NotFound } from "./view/NotFound.js";
import { Song } from "./view/Song.js";
export function router() {
  const view = document.getElementById("view");
  const route = location.hash.slice(1).toLowerCase() || "/";
  const routes = {
    "/": Home,
    "/song": Song,
    "/artist": Artist
  };
  const screen = routes[route] || NotFound;
  screen(view);
}
