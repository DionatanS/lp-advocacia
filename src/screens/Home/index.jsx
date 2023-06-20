import About from "../../components/About";
import Areas from "../../components/Areas";
import Container from "../../components/Container";
import Experiences from "../../components/Experiences";
import Hero from "../../components/Hero";

export default function Home(){
    return(
        <Container>
            <Hero/>
            <Experiences/>
            <Areas/>
            <About/>
        </Container>
    )
}