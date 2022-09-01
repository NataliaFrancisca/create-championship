import styled from "styled-components";

export const MatchesStyled = styled.main`
    position: relative;

    & h1{
        font-family: var(--title);
        font-size: 2em;
        padding: 10px;
    }
`

export const FloatButton = styled.button`
    border-radius: 50%;
    width: 60px;
    height: 60px;

    position: fixed;
    top: 20px;
    right: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: all .5s ease;

    & span{
        text-align: center;
        font-size: 2em;
    }

    &:hover{
        background-color: var(--yellow);
        transition: all .5s ease;
    }
   
    background-color: var(--pink);
`

export const BackgroundMask = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    -webkit-tap-highlight-color: transparent;
    z-index: 1;
    inset: ${props => props.filter ? "0px" : 'none'};
`
