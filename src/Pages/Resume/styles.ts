import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5%;
`
export const ImgContainer = styled.div`

`
export const TextContainer = styled.div`
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    color: ${props => props.theme.colors.bw};
    transition: color 0.3s;
`
export const Image = styled.img`
    width: 35vw;
    border-radius: 16px;
`
export const Text = styled.h1`
    font-size: 1.7vw;
`