
export function addFavoriteArtist(id){
    const favoriteArtists = JSON.parse(localStorage.getItem("favoriteArtists"));
    if(favoriteArtists != null){
        favoriteArtists.push(id);
        localStorage.setItem("favoriteArtists",JSON.stringify(favoriteArtists));
    }else{
        localStorage.setItem("favoriteArtists",JSON.stringify([id]));
    }
}

export function removeFavoriteArtist(id){
    const favoriteArtists = JSON.parse(localStorage.getItem("favoriteArtists"));
    if(favoriteArtists != null){
        localStorage.setItem("favoriteArtists",JSON.stringify(favoriteArtists.filter(artistId => artistId != id)));
    }
}

export function isArtistFavorite(id){
    let result = false;
    const favoriteArtist = JSON.parse(localStorage.getItem("favoriteArtists"));
    if(favoriteArtist != null){
        result = favoriteArtist.includes(id);
    }

    return result;
}

/**
 * 
 * @returns {number[]}
 */
export function getFavoriteArtists(){
    const favoriteArtist = JSON.parse(localStorage.getItem("favoriteArtists"));
    if(favoriteArtist == null){
        return [];
    }
    return favoriteArtist;
}







export function addFavoriteSong(id){
    const favoriteSongs = JSON.parse(localStorage.getItem("favoriteSongs"));
    if(favoriteSongs != null){
        favoriteSongs.push(id);
        localStorage.setItem("favoriteSongs",JSON.stringify(favoriteSongs));
    }else{
        localStorage.setItem("favoriteSongs",JSON.stringify([id]));
    }
}

export function removeFavoriteSong(id){
    const favoriteSongs = JSON.parse(localStorage.getItem("favoriteSongs"));
    if(favoriteSongs != null){
        localStorage.setItem("favoriteSongs",JSON.stringify(favoriteSongs.filter(songId => songId != id)));
    }
}

export function isSongFavorite(id){
    let result = false;
    const favoriteSong = JSON.parse(localStorage.getItem("favoriteSongs"));
    if(favoriteSong != null){
        result = favoriteSong.includes(id);
    }

    return result;
}

/**
 * 
 * @returns {number[]}
 */
export function getFavoriteSongs(){
    const favoriteSongs = JSON.parse(localStorage.getItem("favoriteSongs"));
    if(favoriteSongs == null){
        return [];
    }
    return favoriteSongs;
}