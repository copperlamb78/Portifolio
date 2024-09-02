import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const Image = styled.img`

    height: 38.6vw;
`

export const InicialText = styled.h1`
    color: ${props => props.theme.colors.bw};
    width: 400px;
    font-size: 5rem;
    margin-left: 100%;
`