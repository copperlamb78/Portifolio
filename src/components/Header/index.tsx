import { GithubLogo, InstagramLogo, LinkedinLogo, List, MoonStars, Sun, TextOutdent, WhatsappLogo } from "phosphor-react";
import { Container, Icons, Menu, MenuClicked, Switch } from "./styles";
import { useState } from "react";

interface Props {
    toggleTheme: () => void;
    themeMode: {
        title: string;
        colors: {
          primary: string;
          background: string;
          text: string;
          secondary: string;
        };
    }
}

export function Header({ toggleTheme, themeMode }:Props) {

    const [menuClicked, setMenuClicked] = useState(() => {
        const savedMenu = localStorage.getItem('menu')
        return savedMenu ? JSON.parse(savedMenu) : false
    })

    function toggleMenu() {
        setMenuClicked((prevState: any) => {
            const newState = !prevState
            localStorage.setItem('menu', JSON.stringify(newState))
            return newState
        })
    }

    return(
        <Container>
            <Icons>
                <a href="https://github.com/copperlamb78" target="blank">
                    <GithubLogo size={50}/>
                </a>
                <a href="https://www.instagram.com/antoniobil.2014/" target="blank">
                    <InstagramLogo size={50}/>
                </a>
                <a href="https://www.linkedin.com/in/antonio-gabriel-gomes-falc%C3%A3o-do-nascimento-a53a95306/" target="blank">
                    <LinkedinLogo size={50}/>
                </a>
                <a href="https://wa.me/5575992197406?text=Ola%20Dev!" target="blank">
                    <WhatsappLogo size={50}/>
                </a>
            </Icons>
            
            {menuClicked && (
                <MenuClicked>
                    <Switch onClick={toggleTheme}>
                        {themeMode.title === 'DarkMode' ? (
                            <MoonStars size={40} />
                        ) : (
                            <Sun size={40} />
                        )}
                    </Switch>
                    <a href={window.location.origin + '/project'}>Project</a>
                    <a href={window.location.origin + '/hability'}>Hability</a>
                    <a href={window.location.origin + '/resume'}>Resume</a>
                    <a href={window.location.origin}>Home</a>
                </MenuClicked>
                
            )}
            <Menu onClick={toggleMenu}>
                {menuClicked ? (
                    <TextOutdent size={60}/>
                    
                ) : (
                    <List size={60}/>
                )}
            </Menu>
            
        </Container>
    )
}