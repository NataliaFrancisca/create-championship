import { useEffect, useState, useRef } from "react";
import { useTeamsContext } from "../../hook/useTeamsContext";

import { MatchesStyled } from "./MatchesStyle";

const Matches = () => {

    // const [teamsFiltered, setTeamsFiltered] = useState();
    const [arrMatches, setArrMatches] = useState([]);
    const [matchesRandom, setMatchesRandom] = useState([]);

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

    // GERAR UMA LISTA DE PARTIDAS ALEATORIAS, EVITAR O MESMO TIME JOGAR DUAS PARTIDAS SEGUIDAS
    const getRandomMatch = (sortMatches) => {
        const randomNumber = Math.floor(Math.random() * arrMatches.length);
        const randomMatch = arrMatches[randomNumber];

        const checkAlreadyExist = sortMatches.some(match => JSON.stringify(match) == JSON.stringify(randomMatch));
        const teamPlayedLastMatch = sortMatches.length > 0 ? sortMatches.at(-1) : false;

        const checkFirstTeamHadPlayed = teamPlayedLastMatch && randomMatch.includes(teamPlayedLastMatch[0]);
        const checkSecondTeamHadPlayed = teamPlayedLastMatch && randomMatch.includes(teamPlayedLastMatch[1]);

        return !checkFirstTeamHadPlayed && !checkSecondTeamHadPlayed && !checkAlreadyExist ? randomMatch : false;
    }

    const createChampionship = () => {
        let randomListOfMatches = [];

        while(randomListOfMatches.length !== arrMatches.length){
            let result = getRandomMatch(randomListOfMatches);
            if(result){
                randomListOfMatches.push(result)
            }
        }

        setMatchesRandom(randomListOfMatches);
    }

    useEffect(() => {
        console.log(matchesRandom)
    },[matchesRandom])



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

    useEffect(() => {
        if(arrMatches.length > 0){
            console.log(arrMatches)
            console.log("AQUI VAI EXECUTAR O GENERATE CODE")
            createChampionship();
        }

    },[arrMatches])

    return(
        <MatchesStyled>
            <h1>Matches:</h1>
        </MatchesStyled>
    )
}

export default Matches;