import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext()

export default function FavoritesProvider({children}) {
    let favsArray = JSON.parse(localStorage.getItem("favorites"))
    let [favorites, setFavorites] = useState(favsArray ? favsArray : [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])
    
    const value = {
        favorites,
        setFavorites
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}