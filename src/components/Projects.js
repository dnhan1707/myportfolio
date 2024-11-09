import { Link } from 'react-router-dom';
import journeyAi from '../pictures/journeyAi.png';
import taskflowAi from '../pictures/taskflowAi.png';
import diagarrow from '../pictures/diag-arrow.svg';

function Projects() {
    return (
        <div className='project w-screen bg-black p-20 flex justify-between border-t border-t-slate-300 fade-in'>
            <div className='w-1/2 pr-10'>
                <div className='h-1/2'>
                    <div className='experience-item flex flex-col mb-5'>
                        <div className='image-wrapper'>
                            <div className='flex flex-row'>
                                <img src={diagarrow} alt="Arrow"></img>
                                <a 
                                    className='text-white hover:text-blue-500 hover:underline transition duration-300' 
                                    href='https://github.com/dnhan1707/journey-ai-product-version'
                                >
                                    View on Github
                                </a>
                            </div>

                            <Link to="/journeyai#journeyai-intro-section">
                                <img className='experience-image scale-up-on-hover pt-2' src={journeyAi} alt="Experience 1"></img>
                            </Link>
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
                    <   div className='flex flex-row'>
                            <img src={diagarrow} alt="Arrow"></img>
                            <a 
                                className='text-white hover:text-blue-500 hover:underline transition duration-300' 
                                href='https://github.com/dnhan1707/taskbreaker'
                            >
                                View on Github
                            </a>
                        </div>
                    <div className='image-wrapper pt-2'>
                        <img className='experience-image scale-up-on-hover' src={taskflowAi} alt="Experience 1"></img>
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
    )
}

export default Projects;    
