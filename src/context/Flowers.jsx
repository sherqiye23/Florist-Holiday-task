import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import flowersUrl from "../assets/js/flowersUrl";
import { createContext } from "react";

export const FlowersContext = createContext()

export default function FlowersProvider({children}) {
    let [flowers, setFlowers] = useState([])
    let [loader, setLoader] = useState(true)

    useEffect(() => {
        axios.get(flowersUrl).then((res) => {
            setFlowers(res.data)
            setLoader(false)
        })
    },[])

    const value = {
        loader,
        setLoader,
        flowers,
        setFlowers
    }

    return (
        <FlowersContext.Provider value={value}>
            {children}
        </FlowersContext.Provider>
    )
}