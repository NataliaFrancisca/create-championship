import { useEffect, useState } from "react";
import { MatchStyled } from "./MatchStyle";
import { useTeamsContext } from "../../hook/useTeamsContext";

const Match = ({matchData, numberMatch}) => {

    const [firstTeam, setFirstTeam] = useState();
    const [secondTeam, setSecondTeam] = useState();
    const {winners, setWinners} = useTeamsContext();

    const matchNumber = numberMatch + 1;

    const getDataFromTeam = () => {
        const data = JSON.parse(localStorage.getItem("teamNumber"));
        const firstTeam = data.find(team => team.id == matchData[0]);
        const secondTeam = data.find(team => team.id == matchData[1]);

        console.log(firstTeam)
        console.log(secondTeam)

        setFirstTeam(firstTeam)
        setSecondTeam(secondTeam);
    }

    const setWinnerFromMatch = (value) => {
        const winnerMatch = {numberMatch: matchNumber, winner: value.nameTeam};
        const filteredArr = winners.filter(match => match.numberMatch !== winnerMatch.numberMatch);
        setWinners([...filteredArr, winnerMatch]);
        console.log(winners)
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
            <h1>#{matchNumber}</h1>
                <form id="container-dashboard">
                    <div>
                        <input 
                            type="radio" 
                            id={`first_team_${matchNumber}`} 
                            name={`match_${matchNumber}`} 
                            value={firstTeam?.nameTeam} 
                            onChange={() => setWinnerFromMatch(firstTeam)}
                        />
                        <label className="team" for={`first_team_${matchNumber}`}>{firstTeam?.nameTeam}</label>
                    </div>

                    <span id="winner">X</span>

                    <div>
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