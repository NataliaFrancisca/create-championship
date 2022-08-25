import { useTeamsContext } from "../../hook/useTeamsContext";

const Matches = () => {

    const {teams} = useTeamsContext();

    console.log(teams)

    return(
        <>
            <h1>matches</h1>
        </>
    )
}

export default Matches;