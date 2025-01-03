import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const BasketContext = createContext()

export default function BasketProvider({children}) {
    let basketArray = JSON.parse(localStorage.getItem("basket"))
    let [basket, setBasket] = useState(basketArray ? basketArray : [])

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket))
    }, [basket])
    
    const value = {
        basket,
        setBasket
    }

    return (
        <BasketContext.Provider value={value}>
            {children}
        </BasketContext.Provider>
    )
}