import { Container, Image, ImgContainer, Text, TextContainer } from "./styles";
import img2 from '../../assets/ResumeImg.jpg'

export function Resume() {
    return(
        <Container>
            <TextContainer>
                <Text>
                I am a focused and passionate learner. I started with Python at the beginning of 2024 and, 
                upon transitioning to JavaScript, dove into web development. Through RocketSeat courses, I
                 developed skills in both back-end and front-end. I am knowledgeable in React, TypeScript, 
                 CSS, and HTML. I work with Next.js and Vite to create modern applications and use ESLint to 
                 maintain code quality. I am always looking to improve my skills and take on new challenges 
                 in web development.
                </Text>
            </TextContainer>
            <ImgContainer>
                <Image src={img2} />
            </ImgContainer>
        </Container>
    )
}