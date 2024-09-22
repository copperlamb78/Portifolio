import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    

`
export const Image = styled.img`
    border-radius: 10vw;
    height: 38.6vw;
`

export const InicialText = styled.h1`
    color: ${props => props.theme.colors.bw};
    width: 20vw;
    font-size: 4vw;
    margin-left: 100%;
    transition: color 0.3s;
`