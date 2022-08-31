import styled from "styled-components";

export const MatchStyled = styled.div`
    width: 100%;
    margin: 10px 0;
    padding: 10px 20px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    #container-dashboard{
        background-color: var(--orange);
        border-radius: 4px;
        padding: 20px 10px;
        width: 60%;
        margin-left: 20px;

        display: grid;
        grid-template-columns: 40% 20% 40%;
        align-items: center;
        justify-items: center;
        justify-content: space-between;

        & input[type="radio"]{
            margin: 0 6px;
            /* display: none; */
        }

        @media screen and (max-width: 600px){
            width: 80%;
        }
    }

    .team{
        font-size: 1.8em;
        font-family: var(--title);
        cursor: pointer;
    }


    #winner{
        margin: 0 10px;
        padding: 10px;
        background-color: var(--blue);
        font-weight: bold;
        border-radius: 4px;
    }
`