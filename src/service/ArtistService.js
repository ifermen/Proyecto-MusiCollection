

/**
 * @typedef {Object} Artist
 * @property {int} id
 * @property {string} name
 * @property {string} genre
 * @property {int} nationality
 * @property {Date} birthdate
 */

import { SupabaseClient } from "@supabase/supabase-js";

/**
 * @callback callbackGetAllArtist
 * @property {Artist[]} artists
 */
/**
 * 
 * @param {callbackGetAllArtist} callback 
 */
export function getAllArtist(callback) {
  SupabaseClient
    .from("Artist")
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
