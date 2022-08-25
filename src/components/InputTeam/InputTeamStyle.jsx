import styled from "styled-components";

export const InputStyled = styled.div`
    display: flex;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;

    & input{
        width: 94%;
        padding: 6px;
        border-radius: 4px;
        margin-left: 6px;
        background-color: var(--white);
        border: solid black 2px;

        @media screen and (max-width: 700px) {
            width: 80%;
        }
    }
`