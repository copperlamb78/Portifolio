import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const ImgContainer = styled.div`

`
export const TextContainer = styled.div`
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.bw};
`
export const Image = styled.img`
    width: 700px;
    margin-top: 2.5%;
    margin-left: 20%;
    border-radius: 16px;
`
export const Text = styled.h1`
    font-size: 2rem;
`