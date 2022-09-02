import { useEffect, useState } from "react";
import { MatchStyled } from "./MatchStyle";
import { useTeamsContext } from "../../hook/useTeamsContext";

const Match = ({matchData, numberMatch}) => {

    const [firstTeam, setFirstTeam] = useState();
    const [secondTeam, setSecondTeam] = useState();
    const {winners, setWinners} = useTeamsContext();

    const matchNumber = numberMatch + 1;

    const getDataFromTeam = () => {
        const data = JSON.parse(localStorage.getItem("teams"));
        const firstTeam = data.find(team => team.id == matchData[0]);
        const secondTeam = data.find(team => team.id == matchData[1]);

        setFirstTeam(firstTeam)
        setSecondTeam(secondTeam);
    }

    const setWinnerFromMatch = (value) => {
        const winnerMatch = {numberMatch: matchNumber, winner: value.nameTeam};
        const filteredArr = winners.filter(match => match.numberMatch !== winnerMatch.numberMatch);
        setWinners([...filteredArr, winnerMatch]);
        localStorage.setItem("winners", JSON.stringify(filteredArr));
    }

    useEffect(() => {
        getDataFromTeam();
    },[])

    return(
        <MatchStyled>
            <h1>#{matchNumber}</h1>
                <form id="container-dashboard">
                    <div className="radioInput">
                        <input 
                            type="radio" 
                            id={`first_team_${matchNumber}`} 
                            name={`match_${matchNumber}`} 
                            value={firstTeam?.nameTeam} 
                            onChange={() => setWinnerFromMatch(firstTeam)}
                        />
                        <label className="team" htmlFor={`first_team_${matchNumber}`}>{firstTeam?.nameTeam}</label>
                    </div>

                    <span id="winner">X</span>

                    <div className="radioInput">
                        <input 
                            type="radio" 
                            id={`second_team_${matchNumber}`} 
                            name={`match_${matchNumber}`} 
                            value={secondTeam?.nameTeam} 
                            onChange={() => setWinnerFromMatch(secondTeam)}
                        />
                        <label className="team" for={`second_team_${matchNumber}`}>{secondTeam?.nameTeam}</label>
                    </div>
                </form>
               
        </MatchStyled>
    )
}

export default Match;