import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HomeStyled, FormNumberOfTeams, FormNameTeams, FormButton } from "./HomeStyle";
import { useTeamsContext } from "../../hook/useTeamsContext";

import InputTeam from "../../components/InputTeam/InputTeam";

const Home = () => {

    const [totalOfTeams, setTotalOfTeams] = useState(0);

    const {teams, setTeams} = useTeamsContext();

    const navigate = useNavigate();

    const createTeams = () => {
        event.preventDefault();
        let prevState = [];

        for(let i = 1; i <= totalOfTeams; i++){
            prevState.push({
                id: i,
                numberTeam: i,
                nameTeam: null
            });
        }

        localStorage.setItem("teamNumber", JSON.stringify(prevState))
        setTeams(prevState);
    }

    const saveNameTeams = () => {
        event.preventDefault();
        setTeams(teams);
        navigate("/matches");
    }

    return(
        <HomeStyled>
            <section id="home-message">
                <h1>Generate Matches</h1>
                <p>create matches for your championship</p>
                <img src="./images/home-image-two.png" />
            </section>

            <section id="form-teams">
                <FormNumberOfTeams onSubmit={createTeams}>
                    <label htmlFor="number-teams">How many teams will play?</label>
                    <input type="number" id="number-teams" onChange={(event) => setTotalOfTeams(+event.target.value)} />
                    <FormButton type="submit">Enter</FormButton>
                </FormNumberOfTeams>
                  
                {teams && teams.length > 2 &&
                    <FormNameTeams onSubmit={saveNameTeams}>
                        <p>If you want, you can change the teams name:</p>

                            <div id="list-teams">
                                {teams &&
                                    teams.map(team => (
                                        <InputTeam numberTeam={team} />
                                    ))
                                }
                            </div>
                        <FormButton type="submit">Save</FormButton>
                    </FormNameTeams>
                }
            </section>
        </HomeStyled>
    )
}

export default Home;