import '../App.css';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function MainPage() {

  return (
    <div className="App w-full bg-black">
      <div className='container flex flex-col px-10'>
        <Header />
        <Intro />
        <div className='bg-black pt-40 w-screen'></div>
        <Experience />
        <Projects />  


        {/* Contact */}
        <Contact /> 

      </div>
    </div>
  );
}

export default MainPage;
