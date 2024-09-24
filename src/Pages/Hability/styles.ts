import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 2.5%;
    width: 60vw;
    height: 30vw;

    @media(max-width: 640px) {
        width: 80vw;
        height: 80vh;
    }
`

export const ConjuntIcons = styled.div`
    
    @media(max-width: 640px) {
        display: flex;
        flex-direction: column;
        gap: 18vh;
    }
`

export const IconsContainer = styled.div`
    background-color: ${props => props.theme.colors.primary};
    border-radius: 1.5vw;
    margin-top: 10vw;
    width: 13vw;
    height: 5vw;
    display: flex;
    flex-direction: row;
    gap: 1vw;
    align-items: center;
    justify-content: left;
    color: ${props => props.theme.colors.black};
    padding: 1vw;

    p {
        font-size: 2vw;
    }

    img {
        width: 3vw;
    }

    @media(max-width: 640px) {
        width: 20vw;
        height: 4vh;
    }
`