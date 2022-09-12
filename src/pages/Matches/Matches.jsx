import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MatchesStyled, BackgroundMask } from "./MatchesStyle";
import { useTeamsContext } from "../../hook/useTeamsContext";

import Match from "../../components/Match/Match";
import Modal from "../../components/Modal/Modal";

const Matches = () => {

    const [arrMatches, setArrMatches] = useState([]);
    const [matchesRandom, setMatchesRandom] = useState([]);
    const {winners} = useTeamsContext();
    const [modal, setModal] = useState(false);

    const navigate = useNavigate();

    const teams = JSON.parse(localStorage.getItem("teams"));
    
    // GERAR AS PARTIDAS QUE VÃO SER JOGADAS
    const generateMatches = () => {
        let state = [];

        if(!teams){
            navigate("/");
            return false;
        }

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
    
    // PEGAR A LISTA DE PARTIDAS ALEATORIAS
    const randomListMatch = () => {
        let listOfRandomMatches = [];

        while(listOfRandomMatches.length !== arrMatches.length){
            let result = getRandomMatch(listOfRandomMatches);
            result && listOfRandomMatches.push(result);
        }

        return listOfRandomMatches;
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

     // PEGAR A PRÓXIMA PARTIDA, MAS QUE NÃO TENHA OS MESMOS TIMES DA ÚLTIMA PARTIDA QUE TEVE
    const findNextMatch = (previousMatch, prevArr, sortArr) => {
        if(!previousMatch){
            return false;
        }

        const firstTeam = previousMatch[0];
        const secondTeam = previousMatch[1];

        const result = prevArr.find(arr => !arr.includes(firstTeam) && !arr.includes(secondTeam));
        const alreadyAdd = sortArr.some(arr => JSON.stringify(arr) == JSON.stringify(result));

        return alreadyAdd ? false : result;
    }

    const createBiggerChampionshipMatches = () => {
        const randomArr = randomListMatch();
        const randomArrLength = randomArr.length;

        let matchesArr = [...randomArr.slice(1, randomArrLength)];
        let matchesSortArr = [randomArr[0]];

        for(let i = 0; i < randomArrLength - 1; i++){    
            const nextMatch = findNextMatch(matchesSortArr[i], matchesArr, matchesSortArr);
            const indexOfNextMatch = matchesArr.indexOf(nextMatch);
            if(nextMatch){
                matchesArr.splice(indexOfNextMatch, 1);
                matchesSortArr.push(nextMatch)
            }
        }

        if(matchesArr.length == 1){
            createBiggerChampionshipMatches();
            return false;
        }

        if(matchesSortArr.length > 1){
            setMatchesRandom(matchesSortArr);
        }
    }

    useEffect(() => {
        generateMatches();
        localStorage.setItem("winners", []);
    },[])

    useEffect(() => {
        if(teams && teams.length <= 4){
            createSmallChampionshipMatches();
        }else{
            createBiggerChampionshipMatches();
        }
    },[arrMatches])

    useEffect(() => {
        if(matchesRandom.length > 0 && winners.length == matchesRandom.length){
            setModal(!modal)
        }
    },[winners])
    
    return(
        <MatchesStyled>
            <BackgroundMask activeFilter={modal} />
            <h1>Matches:</h1>
            {matchesRandom && matchesRandom.map((match, index) => (
                <Match matchData={match} key={index} numberMatch={index} />
            ))}
            {modal && <Modal onCloseModal={() => setModal(!modal)} />} 
        </MatchesStyled>
    )
}

export default Matches;