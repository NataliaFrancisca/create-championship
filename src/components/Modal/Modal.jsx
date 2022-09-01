import { ModalStyled, Podium } from "./ModalStyle"
import { getWinner } from "../../assets/functions/getWinner";

import { useTeamsContext } from "../../hook/useTeamsContext";

const Modal = ({onCloseModal}) => {

    const {winners} = useTeamsContext();
    const result = getWinner(winners).sort((a,b) => a - b);

    const [firstPlace, secondPlace, thirdPlace] = result;

    return(
        <ModalStyled>
            
            <header>
                <button onClick={() => onCloseModal()}>
                    <span class="material-symbols-outlined">close</span>
                </button>
            </header>


            <Podium id="podium">
                <div id="second-place">
                    <span className="position">2º</span>
                    <h1 className="name-winner">{secondPlace.nameTeam}</h1>
                </div>

                <div id="first-place">
                    <span className="position">1º</span>
                    <h1 className="name-winner">{firstPlace.nameTeam}</h1>
                </div>

                <div id="third-place">
                    <span className="position">3º</span>
                    <h1 className="name-winner">{thirdPlace.nameTeam}</h1>
                </div>
            </Podium>

          
        </ModalStyled>
    )
}

export default Modal;