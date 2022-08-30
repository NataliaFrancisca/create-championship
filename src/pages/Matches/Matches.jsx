import { useEffect, useState } from "react";

import { MatchesStyled } from "./MatchesStyle";

const Matches = () => {

    const [arrMatches, setArrMatches] = useState([]);
    const [matchesRandom, setMatchesRandom] = useState([]);

    const teams = JSON.parse(localStorage.getItem("teamNumber"));

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

    // PEGAR UMA PARTIDA ALEATORIA DENTRO DO ARRAY
    const getRandomMatch = (sortMatches) => {
        const randomNumber = Math.floor(Math.random() * arrMatches.length);
        const randomMatch = arrMatches[randomNumber];
        const checkAlreadyExist = sortMatches.some(match => match == randomMatch);
        return !checkAlreadyExist ? randomMatch : false;
    }
    
    // PEGAR UMA LISTA DE PARTIDAS ALEATORIAS
    const randomListMatch = () => {
        let listOfRandomMatches = [];

        while(listOfRandomMatches.length !== arrMatches.length){
            let result = getRandomMatch(listOfRandomMatches);
            result && listOfRandomMatches.push(result);
        }

        return listOfRandomMatches;
    }

    // PEGAR A PRÓXIMA PARTIDA, MAS QUE NÃO TENHA OS MESMOS TIMES DA ÚLTIMA PARTIDA QUE TEVE
    const findNextMatch = (previousMatch, prevArr, sortArr) => {
        const firstTeam = previousMatch[0];
        const secondTeam = previousMatch[1];

        const result = prevArr.find(arr => !arr.includes(firstTeam) && !arr.includes(secondTeam));
        const alreadyAdd = sortArr.some(arr => JSON.stringify(arr) == JSON.stringify(result));

        return alreadyAdd ? false : result;
    }

    const createSmallChampionshipMatches = () => {
        let matchesSortArr = [];
        const numberFor = arrMatches.length % 2 !== 0 ? ((arrMatches.length % 2) + 1) : arrMatches.length / 2;
        
        for(let i = 0; i < numberFor; i++){
            const firstValue = arrMatches[i];
            const lastValue = arrMatches[arrMatches.length - (i+1)];
   
            matchesSortArr.push(firstValue)

            if(!matchesSortArr.find(arr => JSON.stringify(arr) == JSON.stringify(lastValue))){
                matchesSortArr.push(lastValue)
            }
        }

        setMatchesRandom(matchesSortArr);
    }

    const createBiggerChampionshipMatches = () => {
        const randomArr = randomListMatch();
        const randomArrLength = randomArr.length;

        let matchesArr = [...randomArr.slice(1, randomArrLength)];
        let matchesSortArr = [randomArr[0]];

        for(let i = 0; i < matchesArr.length; i++){    
            const nextMatch = findNextMatch(matchesSortArr[i], matchesArr, matchesSortArr);
            const indexOfNextMatch = matchesArr.indexOf(nextMatch);

            if(nextMatch){
                matchesArr.splice(indexOfNextMatch, 1);
                matchesSortArr.push(nextMatch)
            }
        }

        if(matchesArr.length == 1){
            createChampionshipMatches();
            return false;
        }

        setMatchesRandom(matchesSortArr)
    }

    const createChampionshipMatches = () => {
        if(teams.length <= 4){
            createSmallChampionshipMatches();
        }else{
            createBiggerChampionshipMatches();
        }
    }

    useEffect(() => {
        generateMatches();
    },[])

    useEffect(() => {
        if(arrMatches.length > 0){
            createChampionshipMatches();
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