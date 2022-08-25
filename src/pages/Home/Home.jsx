import { useEffect, useState, useRef } from "react";
import { HomeStyled, FormNumberOfTeams, FormNameTeams, FloatLabel } from "./HomeStyle";

import InputTeam from "../../components/InputTeam/InputTeam";

const Home = () => {

    const [totalOfTeams, setTotalOfTeams] = useState(0);
    const [teams, setTeams] = useState([]);

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
        setTeams(prevState);
    }

    const saveNameTeams = () => {
        event.preventDefault();
        console.log("é mesmo")
        console.log(teams);
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
                    <FloatLabel>
                        <label htmlFor="number-teams">How many teams will play?</label>
                        <input type="number" id="number-teams" onChange={(event) => setTotalOfTeams(+event.target.value)} />
                    </FloatLabel>

                    <button type="submit">Enter</button>
                </FormNumberOfTeams>

                <FormNameTeams onSubmit={saveNameTeams}>
                    <span>If you want, you can change the teams name:</span>
                    {teams &&
                        teams.map(team => (
                            <InputTeam numberTeam={team} />
                        ))
                    }

                    <button type="submit">Save</button>
                </FormNameTeams>
               
            </section>
        </HomeStyled>
    )
}

export default Home;