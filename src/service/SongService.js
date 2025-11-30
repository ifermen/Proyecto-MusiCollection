import { SupabaseClientApi } from "../api/SupabaseAPI";

/**
 * @typedef {Object} Song
 * @property {int} id
 * @property {string} title
 * @property {string} genre
 * @property {int} idArtist
 * @property {int} year
 */

const TABLE_NAME = "Song";

/**
 * @callback callbackGetAllSongs
 * @property {Song[]} songs
 */
/**
 * 
 * @param {callbackGetAllSongs} callback 
 */
export function getAllSongs(callback) {
  SupabaseClientApi
    .from(TABLE_NAME)
    .select()
    .then((response) => {
      if (response.error) {
        throw new Error("Select Error");
      }
      callback(response.data);
    })
    .catch(error => {
        console.error(error);
        
    })
}

/**
 * @callback callbackGetSongsByIdList
 * @param {Song[]}
 */
/**
 * 
 * @param {number[]} ids 
 * @param {callbackGetSongsByIdList} callback 
 */
export function getSongsByIdList(ids,callback){
  SupabaseClientApi
    .from(TABLE_NAME)
    .select()
    .in("id",ids)
    .then(response => {
      if(response.error){
        throw new Error("Error al obtener los datos de la base de datos.");
      }
      callback(response.data);
    })
}

/**
 * @callback callbackAddSong
 * @param {boolean} isError
 * @param {string} msg
 */
/**
 * 
 * @param {Song} song
 * @param {callbackAddSong} callback 
 */
export function addSong(song,callback){
  SupabaseClientApi
    .from(TABLE_NAME)
    .insert(song)
    .then(response => {
      if(response.status == 201){
        callback(false,"Canción creada con exito");
      }else{
        console.error(response);
        callback(true,"No se creó la canción")
      }
    });
}

