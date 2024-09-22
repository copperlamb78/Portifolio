import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 640px) {
        display: flex;
        flex-direction: column;
        gap: 15vh;
        width: 35vw;
        padding-top: 10%;
        margin: auto;
        
    }
    

`
export const Image = styled.img`
    border-radius: 10vw;
    height: 38.6vw;

    @media(max-width: 640px) {
        height: 110vw;
    }


`

export const InicialText = styled.h1`
    color: ${props => props.theme.colors.bw};
    width: 20vw;
    font-size: 4vw;
    margin-left: 100%;
    transition: color 0.3s;

    @media(max-width: 640px) {
        margin-left: 0;
        width: 40vw;
        font-size: 8vw;
    }
`