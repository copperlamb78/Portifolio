import { Atom, FileCss, FileHtml, FileJs, FileTs } from "phosphor-react";
import { ConjuntIcons, Container, IconsContainer } from "./styles";
import PyLogo from './assets/PyLogo.svg'
import NodeJsLogo from './assets/NodeJs.svg'

export function Hability() {
    return(
        <Container>
            <ConjuntIcons>
                <IconsContainer>
                    <FileJs size={'3vw'}/>
                    <p>JavaScript</p>
                </IconsContainer>
                <IconsContainer>
                    <FileHtml size={'3vw'}/>
                    <p>HTML5</p>
                </IconsContainer>
                <IconsContainer>
                    <FileCss size={'3vw'}/>
                    <p>CSS</p>
                </IconsContainer>
            </ConjuntIcons>
            <ConjuntIcons>
                <IconsContainer>
                    <Atom size={'3vw'}/>
                    <p>React</p>
                </IconsContainer>
            </ConjuntIcons>
            <ConjuntIcons>
                <IconsContainer>
                    <img src={PyLogo} alt="Simbolo de arquivo Python"/>
                    <p>Python</p>
                </IconsContainer>
                <IconsContainer>
                    <img src={NodeJsLogo} alt="Simbolo NodeJs"/>
                    <p>NodeJS</p>
                </IconsContainer>
                <IconsContainer>
                    <FileTs size={'3vw'}/>
                    <p>Typescript</p>
                </IconsContainer>
            </ConjuntIcons>
        </Container>
    )
}