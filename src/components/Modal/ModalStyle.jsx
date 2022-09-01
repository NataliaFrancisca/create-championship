import styled from "styled-components";

export const ModalStyled = styled.div`
    width: 50%;
    height: 40%;

    background-color: var(--white);

    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -60%);
    z-index: 11;

    display: flex;
    align-items: center;
    justify-content: space-between;
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
            background-color: var(--pink);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6px;
            border-radius: 4px;
        }
    }

    @media screen and (max-width: 700px) {
        width: 90%;
    }
`

export const Podium = styled.section`
    width: 100%;
    height: 90%;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    & div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5px;
        box-shadow: 0px 0px 2px 1px;

        & .position{
            font-size: 2.4em;
            text-align: center;
            font-weight: bold;
            font-family: var(--title);
        }

        & .name-winner{
            font-size: 1.4em;
        }
    }

    & #first-place{
        height: 80%;
        width: 30%;
        background-color: #F0A500;
        margin: 0 6px;
    }

    & #second-place{
        height: 60%;
        width: 30%;
        background-color: #EEEEEE;
    }

    & #third-place{
        height: 50%;
        width: 30%;
        background-color: #FF5F00;
    }
`