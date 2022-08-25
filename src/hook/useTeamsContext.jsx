import { useContext  } from "react";
import { TeamsContext } from "../context/TeamsContext";

export const useTeamsContext = () => {
    const context = useContext(TeamsContext);

    if(!context){
        console.log("Contexto não encontrado!")
    }

    return context;
}