import styled from "styled-components";

export const MatchStyled = styled.div`
    width: 100%;
    margin: 10px 0;
    padding: 10px 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 600px){
        justify-content: space-between;
    }

    #container-dashboard{
        background-color: var(--orange);
        border-radius: 4px;
        padding: 20px 10px;
        width: 50%;
        margin-left: 20px;

        display: grid;
        grid-template-columns: 40% 20% 40%;
        align-items: center;
        justify-items: center;
        justify-content: center;

        & input[type="radio"]{
            display: none;
        }

        & input:checked ~ label{
            color: greenyellow;
        }

        @media screen and (max-width: 600px){
            width: 75%;
        }
    }

    .team{
        font-size: 1.8em;
        font-family: var(--title);
        cursor: pointer;

        @media screen and (max-width: 600px){
            font-size: 1.4em;
        }
    }

    .radioInput{
        padding: 4px;
    }

    #winner{
        margin: 0 10px;
        padding: 10px;
        background-color: var(--blue);
        font-weight: bold;
        border-radius: 4px;
    }
`