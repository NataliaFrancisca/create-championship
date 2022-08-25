import styled from "styled-components";

export const HomeStyled = styled.main`
    display: grid;
    grid-template-columns: 40% 60%;
    min-height: 100vh;

    @media screen and (max-width: 700px) {
        grid-template-columns: 95%;
        grid-template-rows: 90vh auto;
        justify-content: center;
    }

    & #home-message{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & h1{
            font-size: 3em;
            font-family: var(--title);
            text-align: center;
        }

        & p{
            font-size: 1.2em;
            text-align: center;
        }

        & img{
            width: 100%;
            object-fit: cover;
        }
    }

    & #form-teams{
        background-color: var(--orange);
        padding: 20px;
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 700px) {
            height: fit-content;
        }
    }
`
export const FormNameTeams = styled.form`
    max-height: 70%;
    width: 90%;

    margin: 10px;
    padding: 20px;
    border-radius: 4px;

    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: center;
    background-color: var(--white);

    @media screen and (max-width: 700px) {
        width: 100%;
    }

    & #list-teams{
        height: auto;
        width: 100%;
        max-height: 250px;
        display: block;
        overflow-y: auto;

        &::-webkit-scrollbar{
            width: 12px;
        }

        &::-webkit-scrollbar-track{
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb{
            background-color: var(--pink);
            border-radius: 4px;
        }   
    } 
`

export const FormNumberOfTeams = styled.form`
    width: 90%;
    height: max-content;

    padding: 16px 20px;
    border-radius: 4px;
    background-color: var(--white);

    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: space-between;

    @media screen and (max-width: 700px) {
        width: 100%;
    }

    & label{
        font-size: 1em;
    }

    & input{
        background-color: var(--white);
        border: solid black 2px;
        outline: none;
        font-size: 1.2em;
        font-weight: bold;
        padding: 5px 10px;
        margin: 6px 0;
        border-radius: 4px;

        @media screen and (max-width: 700px) {
            padding: 10px;
        }
    }

    & input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }

    & input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
    }
`

export const FormButton = styled.button`
    padding: 5px 16px;
    border-radius: 4px;
    cursor: pointer;
    background-color: var(--blue);
    box-shadow: 2px 1px 2px 0px black;
    font-family: var(--title);
    transition: all .2s ease-in-out;
    margin-top: 6px;

    &:hover{
        background-color: var(--pink);
    }

    @media screen and (max-width: 700px) {
        padding: 10px 16px;
    }
`