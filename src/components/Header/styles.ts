
import styled from "styled-components";

export const Container = styled.div`
    height: 150px;
    background-color: ${props => props.theme.colors.primary};
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center

`

export const Switch = styled.button`
    font-family: "Bebas Neue", sans-serif;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 9999px;
    border: 0;
    width: 3rem;
    height: 3rem;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    display: flex;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }
`

export const Icons = styled.div`
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.colors.text};
        outline: none;
        text-decoration: none;
        border: none;
        border-radius: 9999px;
        width: 3.5rem;
        height: 3.5rem;
        transition: background-color 0.3s;

        &:hover {
            background-color: ${props => props.theme.colors.secondary};
        }
    }
`
export const Menu = styled.button`
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors.text};
    margin-right: 40px;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.colors.secondary}
    }
`
export const MenuClicked = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.75rem;
    font-size: 3rem;
    margin-left: 48%;

`

