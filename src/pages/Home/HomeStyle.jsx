import styled from "styled-components";

export const HomeStyled = styled.main`
    display: grid;
    grid-template-columns: 40% 60%;
    min-height: 100vh;

    & #home-message{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & h1{
            font-size: 3em;
            font-family: var(--title);
        }

        & p{
            font-size: 1.2em;
        }

        & img{
            width: 100%;
            height: 60%;
            object-fit: cover;
        }
    }

    & #form-teams{
        background-color: var(--orange);
        padding: 20px;
        display: flex;
        flex-direction: column;
    }
`
export const FormNameTeams = styled.form`
     display: flex;
    flex-direction: column;
    padding: 20px 0;

    & span{
        font-size: 1.2em;
    }
`

export const FormNumberOfTeams = styled.form`
    width: max-content;
    height: max-content;

    padding: 16px 20px;
    border-radius: 4px;
    background-color: var(--white);

    display: flex;
    align-items: inherit;
    align-self: center;
    justify-content: space-between;

    & button{
        padding: 5px 16px;
        border-radius: 4px;
        cursor: pointer;
        background-color: var(--blue);
        box-shadow: 2px 1px 2px 0px black;
        font-family: var(--title);
    }

    & button:hover{
        background-color: var(--orange);
        color: var(--white);
    }
`

export const FloatLabel = styled.div`
    width: max-content;
   
    display: flex;
    border-radius: 4px;
    align-content: center;

    & label{
        font-size: 1em;
        padding: 10px;
    }

    & input{
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 1.2em;
        font-weight: bold;
    }

    & input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }

    & input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
    }
`