import '../App.css';
import Header from '../components/Header';
import Intro from '../components/Intro';
import LogoMarquee from '../components/LogoMarquee';
import Philosophy from '../components/Philosophy';
import Metrics from '../components/Metrics';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function MainPage() {
    return (
        <div className="App w-full bg-[#0a0a0a] min-h-screen">
            <Header />
            <main>
                <Intro />
                <LogoMarquee />
                <Philosophy />
                <Metrics />
                <Experience />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default MainPage;
