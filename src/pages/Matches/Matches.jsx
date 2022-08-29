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
    const randomListMatch = (sortMatches) => {
        const randomNumber = Math.floor(Math.random() * arrMatches.length);
        const randomMatch = arrMatches[randomNumber];

        const teamPlayedLastMatch = sortMatches.length > 0 ? sortMatches.at(-1) : false;
        const checkAlreadyExist = sortMatches.some(match => match == randomMatch);

        return !checkAlreadyExist ? randomMatch : false;
    }


    const findNextMatch = (previousMatch, prevArr, sortArr) => {
        const firstTeam = previousMatch[0];
        const secondTeam = previousMatch[1];

        const result = prevArr.find(arr => !arr.includes(firstTeam) && !arr.includes(secondTeam));
        const alreadyAdd = sortArr.some(arr => JSON.stringify(arr) == JSON.stringify(result));

        return alreadyAdd ? false : result;
    }


    const getRandomArr = () => {
        let random = [];

        while(random.length !== arrMatches.length){
            let result = randomListMatch(random);

            if(result){
                random.push(result);
            }
        }

        return random;
    }


    const teste = () => {
        const randomArr = getRandomArr();
        let copyArr = [...randomArr.slice(1, randomArr.length)];
        let sortArr = [randomArr[0]];

        for(let i = 0; i < randomArr.length - 1; i++){
            const nextMatch = findNextMatch(sortArr[i], copyArr, sortArr);
            if(nextMatch){
                const indexOfNextMatch = copyArr.indexOf(nextMatch);
                copyArr.splice(indexOfNextMatch, 1);
                sortArr.push(nextMatch)
            }
        }

        if(copyArr.length == 1){
            console.log("sad girl :(");
            teste();
            return false;
        }


        setMatchesRandom(sortArr)
    }



    useEffect(() => {
        generateMatches();
    },[])

    useEffect(() => {
        if(arrMatches.length > 0){
            // createChampionshipMatches();

            teste();
        }
    },[arrMatches])

    return(
        <MatchesStyled>
            <h1>Matches:</h1>

            {matchesRandom && matchesRandom.map((match, index) => (
                <p key={index}>{match[0]} x {match[1]}</p>
            ))}
        </MatchesStyled>
    )
}

export default Matches;