import { ModalStyled } from "./ModalStyle"
import { getWinner } from "../../assets/functions/getWinner";

import { useTeamsContext } from "../../hook/useTeamsContext";

const Modal = ({onCloseModal}) => {

    const {winners} = useTeamsContext();
    const result = getWinner(winners).sort((a,b) => a.nameTeam - b.nameTeam);

    return(
        <ModalStyled>            
            <header>
                <button onClick={() => onCloseModal()}>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </header>

            <section>
                {result.map((team, index) => (
                    <div id="podium-team">
                        <span>{index + 1}º place:</span>
                        <p>{team.nameTeam}</p>
                    </div>
                ))}
            </section>
        </ModalStyled>
    )
}

export default Modal;