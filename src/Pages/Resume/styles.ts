import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5%;

    @media(max-width: 640px) {
        flex-direction: column;
        gap: 40vw;
        padding: 4%;
    }
`
export const ImgContainer = styled.div`

`
export const TextContainer = styled.div`
    width: 28vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    color: ${props => props.theme.colors.bw};
    transition: color 0.3s;

    @media(max-width: 640px) {
        width: 60vw;
    }
`
export const Image = styled.img`
    width: 33vw;
    border-radius: 16px;

    @media(max-width: 640px) {
        width: 60vw;
    }
`
export const Text = styled.h1`
    font-size: 1.7vw;

    @media(max-width: 640px) {
        font-size: 4vw;
    }
`