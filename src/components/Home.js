import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Projects from "./Projects";

export default function Home() {
    return (
        <div className="home-box bg-dark text-light">
            <Introduction/>
            <AboutMe/>
            <Projects/>
            <Experience/>
            <Contact/>
        </div>
    )
}