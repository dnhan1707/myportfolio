import my_setup from './my_setup.png';
import mlh_pic from './MLH_pic.jpg';
import cohere_pic from './cohere-6.png'; // Assuming you have another image
import headstarter from './headstarterAI.png';
import journeyAi from './journeyAi.png'
import taskflowAi from './taskflowAi.png'
import './App.css';
import ContactForm from './ContactForm';

function App() {

  return (
    <div className="App">
      <div className='container flex flex-col'>
        <div className='header w-screen bg-black text-white px-32 pt-10'>
          <div className='header-container flex flex-row gap-10 items-end justify-end'>
            <div className='resume'>
                <a href="https://drive.google.com/file/d/14E1RlgIrPawF8Q7BqL6s0dJi2eu3cTwV/view?usp=sharing">Resume</a>
            </div>

            <div className='contact'>
              <a href="#contact" className="text-white hover:underline">Contact</a>
            </div>
          </div>
        </div>
    


        {/* First Section */}
        <div className='intro-page bg-black w-screen h-screen text-white px-20 pt-10 pb-0 flex fade-in'>
          
          {/* Name and Image */}
          <div className='name-and-pic w-2/3'>
            <div className='name text-9xl font-bold pb-14 fade-in-up italic'>
                <h1>NHAN</h1>
                <h1>TRI DANH</h1>
            </div>
            <div className='pic'>
                <img src={my_setup} className='fade-in-image scale-up-on-hover' alt="My Setup"/>
            </div>
          </div>

          {/* Title and Description */}
          <div className='small-des text-xl w-1/3 flex flex-col justify-center p-10 slide-in-left'>
              <div className='title pb-13'>
                <h1 className='font-bold'>Software Engineer</h1>
              </div>
              <div className='des pt-20'>
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
        <div className='experience text-white w-screen bg-black p-20 border-t border-t-slate-300'>
          
          <h1 className="name text-9xl font-bold pb-14 fade-in-up">Experience</h1>
          
          {/* First Row - MLH and Cohere Pics side by side */}
          <div className='flex flex-row justify-between'>
            {/* Left Experience - MLH */}
            <div className='experience-item flex flex-col mb-5 w-1/2 pr-5'>
              <div className='image-wrapper'>
                <img className='experience-image scale-up-on-hover' src={mlh_pic} alt="Experience 1" />
              </div>
              <div className='experience-1-des flex flex-row pt-5'>
                <div>
                  <h1 className="text-5xl font-bold">01</h1>
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
                    <h1 className="text-5xl font-bold">03</h1>
                  </div>
                  <div className='pl-5'>
                    <h1 className="font-semibold">Headstarter AI</h1>
                    <h1>2024, Software Engineer Fellow</h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Experience - Cohere */}
            <div className='experience-item flex flex-col mb-5 w-1/2 pl-40'>
              <div className='image-wrapper'>
                <img className='experience-image scale-up-on-hover' src={cohere_pic} alt="Experience 2" />
              </div>
              <div className='experience-2-des flex flex-row pt-5'>
                <div>
                  <h1 className="text-5xl font-bold">02</h1>
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
        <div className='experience text-white w-screen bg-black p-20 flex justify-between border-t border-t-slate-300 fade-in'>
          <div className='w-1/2 pr-10'>
            <div className='h-1/2'>
              <div className='experience-item flex flex-col mb-5'>
                  <div className='image-wrapper'>
                    <img className='experience-image scale-up-on-hover' src={journeyAi} alt="Experience 1" />
                  </div>
                  <div className='experience-3-des flex flex-row pt-5'>
                    <div className='pl-5'>
                      <h1 className="text-3xl font-bold pt-1">Journey AI</h1>
                      <div className=' pt-5'>
                        <h1>- Achieved more than 160 users after 24-hrs of released.</h1>
                        <h1>- Create the most personalized travelling trip in a fast, convinient and smart way.</h1>
                        <h1>- Our AI understand users' interest, style and reference to make your plan fun and amazing.</h1>
                      </div>
                      
                    </div>
                  </div>
              </div>
            </div>
            
          </div>

          <div className='w-1/2 pl-10'>
            <div className='h-1/2'>
              <h1 className="name text-9xl font-bold pb-14 fade-in-up">Project</h1>
              <div className='project-item flex flex-col mb-5'>
                <div className='image-wrapper'>
                  <img className='experience-image scale-up-on-hover' src={taskflowAi} alt="Experience 1" />
                </div>
                <div className='project-1-des flex flex-row pt-5'>
                  <div className='pl-5'>
                    <h1 className="text-3xl font-bold pt-1">TaskFlow AI</h1>
                    <h1 className='pt-5'> - TaskFlow AI is an innovative task management application designed to streamline project workflows and enhance team collaboration. By leveraging the power of KindoAI, TaskFlow AI automatically breaks down larger tasks into manageable subtasks and intelligently assigns them to team members based on their strengths and availability. This ensures that projects are completed efficiently and effectively, reducing the stress of task management.</h1>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* Contact */}
        <div id="contact" className='contact w-screen bg-black text-white border-t border-t-slate-300'>
          <div className="contact-container flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center pb-8 pt-10">Contact</h1>
            <div className='contact-section flex flex-row w-3/4'>
              <ContactForm></ContactForm>


              {/* Direct Contact Information */}
              <div className="direct-contact-container text-center mt-10 w-1/2">
                
                {/* Contact List */}
                <ul className="contact-list space-y-4">
                  <li className="list-item text-lg">
                    <i className="fa fa-envelope fa-2x pr-2"></i>
                    <a href="mailto:dnhan1707@gmail.com" title="Send me an email" className="hover:underline">dnhan1707@gmail.com</a>
                  </li>
                </ul>

                <hr className="my-5 border-gray-600" />

                {/* Social Media Links */}
                <ul className="social-media-list flex justify-center space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/nhan-tri-danh-29b922223/" target="_blank" className="contact-icon text-gray-400 hover:text-white fa-2x">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/dnhan1707" target="_blank" className="contact-icon text-gray-400 hover:text-white fa-2x">
                      <i class="fa-brands fa-github"></i>                    
                    </a>
                  </li>
                </ul>

                <hr className="my-5 border-gray-600" />

              </div>
            </div>

          </div>

        </div>


      </div>
    </div>
  );
}

export default App;
