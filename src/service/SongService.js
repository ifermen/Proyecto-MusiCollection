import { getSupabaseClient } from "../api/SupabaseAPI";

export function getAllSongs(callback) {
  getSupabaseClient()
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
