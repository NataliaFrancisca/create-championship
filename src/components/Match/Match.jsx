import { useEffect, useState } from "react";

import { MatchStyled } from "./MatchStyle";

const Match = ({matchData, numberMatch}) => {

    const [firstTeam, setFirstTeam] = useState();
    const [secondTeam, setSecondTeam] = useState();
    const [winner, setWinner] = useState({first_team: false, second_team: false});

    const getDataFromTeam = () => {
        const data = JSON.parse(localStorage.getItem("teamNumber"));
        const firstTeam = data.find(team => team.id == matchData[0]);
        const secondTeam = data.find(team => team.id == matchData[1]);

        setFirstTeam(firstTeam)
        setSecondTeam(secondTeam);
    }

    useEffect(() => {
        getDataFromTeam();
    },[])

    useEffect(() => {
        if(firstTeam && firstTeam.nameTeam == null){
            const updatedData = {
                ...firstTeam,
                nameTeam: `Team ${firstTeam.id}`
            }
            setFirstTeam(updatedData)
        }
    },[firstTeam])

    useEffect(() => {
        if(secondTeam && secondTeam.nameTeam == null){
            const updatedData = {
                ...secondTeam,
                nameTeam: `Team ${secondTeam.id}`
            }
            setSecondTeam(updatedData)
        }
    },[secondTeam])


    return(
        <MatchStyled>
            <h1>#{numberMatch + 1}</h1>
            <div id="container-dashboard">
                <span class="team"
                    onClick={() => setWinner({first_team: true, second_team: false})}>
                    {firstTeam?.nameTeam}
                </span>
                    <span id="winner">X</span>
                <span class="team" 
                    onClick={() => setWinner({first_team: false, second_team: true})}>
                    {secondTeam?.nameTeam}
                </span>
            </div>
        </MatchStyled>
    )
}

export default Match;