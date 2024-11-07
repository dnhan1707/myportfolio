import my_setup from '../pictures/my_setup.png';
import mlh_pic from '../pictures/MLH_pic.jpg';
import cohere_pic from '../pictures/cohere-6.png';
import headstarter from '../pictures/headstarterAI.png';
import journeyAi from '../pictures/journeyAi.png';
import taskflowAi from '../pictures/taskflowAi.png';
import '../App.css';
import me from '../pictures/me.jpg';


function MainPage() {

  return (
    <div className="App w-full bg-black">
      <div className='container flex flex-col px-10'>
        <div className='header w-full bg-black text-white px-32 md:px-32 pt-10'>
          <div className='header-container flex flex-row gap-4 md:gap-10 items-end justify-end'>
            <div className='resume'>
                <a href="https://drive.google.com/file/d/14HEcTBbT1R2hPD4WusaWk6SjFi4j41tz/view?usp=sharing">Resume</a>
            </div>

            <div className='contact'>
              <a href="#contact" className="text-white hover:underline">Contact</a>
            </div>
          </div>
        </div>
    


        {/* First Section */}
        <div className='intro-page bg-black w-full h-screen text-white px-6 md:px-20 pt-10 pb-0 flex flex-col md:flex-row fade-in'>
          
          {/* Name and Image */}
          <div className='name-and-pic w-full md:w-2/3'>
            <div className='name text-5xl md:text-9xl font-bold pb-7 md:pb-14 fade-in-up italic'>
              <h1>NHAN</h1>
              <h1>TRI DANH</h1>
            </div>
            <div className='pic'>
              <img src={my_setup} className='fade-in-image scale-up-on-hover' alt="My Setup"/>
            </div>
          </div>

          {/* Title and Description */}
          <div className='small-des text-lg md:text-xl w-full md:w-1/3 flex flex-col justify-center p-5 md:p-10 slide-in-left'>
            <div className='title pb-5 md:pb-13'>
              <h1 className='font-bold'>Software Engineer</h1>
            </div>
            <div className='des pt-10 md:pt-20'>
              <h1>
                Turning <span className="highlight">ideas</span> into reality, 
                crafting code with <span className="highlight">precision</span>, 
                and transforming complex problems into 
                <span className="highlight"> elegant solutions</span> for years.
              </h1>
            </div>
          </div>
        </div>


        <div className='bg-black pt-40 w-screen'></div>
        {/* Second Section */}
        <div className='experience text-white w-screen bg-black p-10 md:p-20 border-t border-t-slate-300'>
          
          <h1 className="name text-5xl md:text-9xl font-bold pb-7 md:pb-14 fade-in-up">Experience</h1>
          
          {/* First Row - MLH and Cohere Pics side by side */}
          <div className='flex flex-col md:flex-row justify-between'>
            {/* Left Experience - MLH */}
            <div className='experience-item flex flex-col mb-5 w-full md:w-1/2 md:pr-5'>
              <div className='image-wrapper'>
                <img className='experience-image scale-up-on-hover' src={mlh_pic} alt="Experience 1" />
              </div>
              <div className='experience-1-des flex flex-row pt-5'>
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold">01</h1>
                </div>
                <div className='pl-5'>
                  <h1 className="font-semibold">Meta x Major League Hack</h1>
                  <h1>2024, Software Engineer Intern</h1>
                </div>
              </div>

              <div className='experience-item flex flex-col mt-10'>
                <div className='image-wrapper'>
                  <img className='experience-image scale-up-on-hover' src={headstarter} alt="Experience 3" />
                </div>
                <div className='experience-3-des flex flex-row pt-5'>
                  <div>
                    <h1 className="text-3xl md:text-5xl font-bold">03</h1>
                  </div>
                  <div className='pl-5'>
                    <h1 className="font-semibold">Headstarter AI</h1>
                    <h1>2024, Software Engineer Fellow</h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Experience - Cohere */}
            <div className='experience-item flex flex-col mb-5 w-full md:w-1/2 md:pl-5'>
              <div className='image-wrapper flex'>
                <img className='experience-image scale-up-on-hover pl-20' src={cohere_pic} alt="Experience 2" />
              </div>
              <div className='experience-2-des flex flex-row pt-5 pl-20'>
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold">02</h1>
                </div>
                <div className='pl-5'>
                  <h1 className="font-semibold">Cohere Commerce</h1>
                  <h1>2024, AI/ Machine Learning Fellow</h1>
                </div>
              </div>
            </div>
          </div>

        </div>



        {/* Section 3 */}
        <div className='experience w-screen bg-black p-20 flex justify-between border-t border-t-slate-300 fade-in'>
          <div className='w-1/2 pr-10'>
            <div className='h-1/2'>
              <div className='experience-item flex flex-col mb-5'>
                  <div className='image-wrapper'>
                    <img className='experience-image scale-up-on-hover' src={journeyAi} alt="Experience 1" />
                  </div>
                  <div className='experience-3-des flex flex-row pt-5'>
                    <div className='pl-5'>
                      <h1 className="text-3xl text-white font-bold pt-1">Journey AI</h1>
                      <p className='text-sm text-gray-500'>JavaScript, React, Firebase, Gemini</p>
                      <div className='text-white pt-5'>
                        <h1>-{'>'}Create the most personalized travelling trip in a fast, convinient and smart way.</h1>
                        <h1>-{'>'}JourneyAI received <span className="highlight">219 users after released</span>, and it still growing.</h1>
                      </div>
                      
                    </div>
                  </div>
              </div>
            </div>
            
          </div>

          <div className='w-1/2 pl-10'>
            <div className='h-1/2'>
              <h1 className="name text-9xl text-white font-bold pb-14 fade-in-up">Projects</h1>
              <div className='project-item flex flex-col mb-5'>
                <div className='image-wrapper'>
                  <img className='experience-image scale-up-on-hover' src={taskflowAi} alt="Experience 1" />
                </div>
                <div className='project-1-des flex flex-row pt-5'>
                  <div className='pl-5'>
                    <h1 className="text-3xl text-white font-bold pt-1">TaskFlow AI <span className='text-sm text-gray-500'>{'(Cerebrals Beach Hackathon)'}</span></h1>
                    <p className='text-sm text-gray-500'>JavaScript, React, Firebase, GPT-4o</p>
                    <h1 className='pt-5 text-white'>-{'>'}TaskFlow AI is an innovative <span className='highlight'>task management application</span> designed to streamline project workflows and enhance team collaboration.</h1>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* Contact */}
        <div id="contact" className='contact w-screen bg-black text-white border-t border-t-slate-300'>
            <div className='contact-container flex flex-row items-center justify-center p-20'>
                <div className='get-in-touch flex flex-col items-center w-1/2'>
                    <h1 className='text-8xl font-bold pb-14 fade-in-up'>Hire me !</h1>
                    <div className='contact-des text-xl pb-10'>
                      <a href="mailto:dnhan1707@gmail.com" title="Send me an email" className="hover:underline">dnhan1707@gmail.com</a>
                    </div>
                    <div className='social-link mt-8'>
                        <ul className="social-media-list flex justify-center space-x-5">
                            <li>
                                <a href="https://www.linkedin.com/in/nhan-tri-danh-29b922223/" className="contact-icon text-gray-400 hover:text-white fa-2x">
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/dnhan1707" className="contact-icon text-gray-400 hover:text-white fa-2x">
                                    <i class="fa-brands fa-github"></i>                    
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='my-image w-1/2'>
                    <img src={me} className='fade-in-image scale-up-on-hover' alt="Nhan Tri Danh"/>
                </div>
            </div>
        </div>


      </div>
    </div>
  );
}

export default MainPage;