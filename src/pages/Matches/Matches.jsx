import { useEffect, useState, useRef } from "react";
import { useTeamsContext } from "../../hook/useTeamsContext";

import { MatchesStyled } from "./MatchesStyle";

const Matches = () => {

    // const [teamsFiltered, setTeamsFiltered] = useState();
    const [arrMatches, setArrMatches] = useState([]);
    const [sortMatches, setSortMatches] = useState([]);

    // const {teams} = useTeamsContext();

    const teams = [
        {id: 1, numberTeam: 1, nameTeam: undefined},
        {id: 2, numberTeam: 2, nameTeam: undefined},
        {id: 3, numberTeam: 3, nameTeam: undefined},
        {id: 4, numberTeam: 4, nameTeam: undefined},
        {id: 5, numberTeam: 5, nameTeam: undefined},
    ]
    
    // GERAR AS PARTIDAS QUE VÃO SER JOGADAS
    const generateMatches = () => {
        let state = [];
        for(let i = 1; i <= teams.length; i++){
            for(let n = 1; n <= (teams.length - i); n++){
                state.push([i, i+n]);
            }
        }
        setArrMatches(state);
    }

    useEffect(() => {
        if(arrMatches.length > 0){
            console.log(arrMatches)
        }
    },[arrMatches])


    // GERAR UMA LISTA DE PARTIDAS ALEATORIAS, EVITAR O MESMO TIVE JOGAR DUAS PARTIDAS SEGUIDAS
    const randomMatches = () => {
        const randomNumber = Math.floor(Math.random() * arrMatches.length);
        const randomMatch = arrMatches[randomNumber];

        const checkAlreadyExist = sortMatches.some(match => JSON.stringify(match) == JSON.stringify(randomMatch));
        const checkPlayedLastGame = sortMatches.length > 0 ? sortMatches.at(-1) : false;

        const checkTeste = checkPlayedLastGame && randomMatch.includes(checkPlayedLastGame[0]);
        const checkTesteDos = checkPlayedLastGame && randomMatch.includes(checkPlayedLastGame[1]);

        if(!checkTeste && !checkTesteDos && !checkAlreadyExist){
            setSortMatches(prev => [...prev, randomMatch]);
        }
    }


    useEffect(() => {
        // const checkedTeamName = teams.map(team => {
        //     if(team.nameTeam == undefined){
        //         return {...team, nameTeam:`Team ${team.id}`};
        //     }else{
        //         return team;
        //     }
        // })

        // setTeamsFiltered(checkedTeamName);
        generateMatches();
    },[])

    return(
        <MatchesStyled>
            <h1>Matches:</h1>
        </MatchesStyled>
    )
}

export default Matches;