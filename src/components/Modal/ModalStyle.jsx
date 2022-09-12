import styled from "styled-components";

export const ModalStyled = styled.div`
    width: 50%;
    height: max-content;

    background-color: var(--white);

    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -80%);
    z-index: 11;

    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 14px;
    border-radius: 4px;
    border: solid black 2px;

    & header{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin: 10px 0;

        & button{
            cursor: pointer;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6px;
            border-radius: 4px;

            &:hover{
                color: var(--pink);
            }
        }
    }

    & section{
        width: 100%;
        height: auto;

        display: flex;
        flex-direction: column;

        border: solid black 2px;
        border-radius: 4px;
        margin: 20px 0; 

        & #podium-team{
            display: flex;
            font-size: 1.4em;
            padding: 10px 0 10px 4px;
            border-bottom: 2px solid black;

            & span{
                margin-right: 10px;
                font-weight: bold;
            }
        }

        & #podium-team:nth-child(1){
            background-color: var(--yellow);
        }

        & #podium-team:nth-child(2){
            background-color: var(--blue);
        }

        & #podium-team:nth-child(3){
            background-color: var(--orange);
        }

        & #podium-team:last-child{
            border-bottom: 0;
        }
    }


    @media screen and (max-width: 700px) {
        width: 90%;
    }
`
