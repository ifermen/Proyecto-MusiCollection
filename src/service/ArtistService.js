import { SupabaseClientApi } from "../api/SupabaseAPI";

const TABLE_NAME = "Artist";

/**
 * @typedef {Object} Artist
 * @property {int} id
 * @property {string} name
 * @property {string} genre
 * @property {int} nationality
 * @property {Date} birthdate
 */



/**
 * @callback callbackGetAllArtist
 * @param {Artist[]} artists
 */
/**
 * 
 * @param {callbackGetAllArtist} callback 
 */
export function getAllArtist(callback) {
  SupabaseClientApi
    .from(TABLE_NAME)
    .select()
    .then((response) => {
      if (response.error) {
        throw new Error("Select Error");
      }
      callback(response.data);
    });
}

/**
 * @callback callbackAddArtist
 * @param {boolean} isError
 * @param {string} msg
 */
/**
 * 
 * @param {Artist} artist
 * @param {callbackAddArtist} callback 
 */
export function addArtist(artist,callback){
  SupabaseClientApi
    .from(TABLE_NAME)
    .insert(artist)
    .then(response => {
      if(response.status == 201){
        callback(false,"Artista creado con exito");
      }else{
        callback(true,"No se insertó el artista")
      }
    });
}

/**
 * @callback callbackGetArtistsByIdList
 * @param {Artist[]}
 */
/**
 * 
 * @param {number[]} ids 
 * @param {*} callback 
 */
export function getArtistsByIdList(ids,callback){
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
 * @callback callbackGetArtistById
 * @param {Artist} artist
 */
/**
 * 
 * @param {number} id 
 * @param {callbackGetArtistById} callback 
 */
export function getArtistById(id,callback){
  SupabaseClientApi
    .from(TABLE_NAME)
    .select()
    .eq("id",id)
    .then(response => {
      if(response.data.length > 0){
        callback(response.data[0]);
      }else{
        callback({id:-1,name:"Artista no encontrado"});
      }
    })
}