import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { config } from "../../config"


/**
 * 
 * @returns { SupabaseClient }
*/
export function getSupabaseClient (){
    const supabaseUrl = config.supabase.url;
    const supabaseKey = config.supabase.apiKey;
    return createClient(supabaseUrl, supabaseKey);
}

export const SupabaseClient = getSupabaseClient();