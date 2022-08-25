import { createContext, useState } from "react";
export const TeamsContext = createContext();

export const TeamsContextProvider = ({children}) => {
    const [teams, setTeams] = useState([]);

    return(
        <TeamsContext.Provider value={{teams, setTeams}}>
            {children}
        </TeamsContext.Provider>
    )
}