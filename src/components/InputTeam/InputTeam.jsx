import { useEffect, useState } from "react";
import { InputStyled } from "./InputTeamStyle";

const InputTeam = ({numberTeam}) => {

    const [inputValue, setInputValue] = useState();

    useEffect(() => {
        numberTeam.nameTeam = inputValue;
    },[inputValue])

    return(
        <InputStyled>
            <p>#{numberTeam.id}</p>
            <input type="text" id="number-teams" onChange={(event) => setInputValue(event.target.value)} maxLength={6} />
        </InputStyled>
    )
}

export default InputTeam;