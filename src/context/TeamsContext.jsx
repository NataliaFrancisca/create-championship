import { createContext, useState } from "react";
export const TeamsContext = createContext();

export const TeamsContextProvider = ({children}) => {
    const [winners, setWinners] = useState([]);

    return(
        <TeamsContext.Provider value={{winners, setWinners}}>
            {children}
        </TeamsContext.Provider>
    )
}