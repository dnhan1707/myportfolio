import { Link } from 'react-router-dom';
import journeyAi from '../pictures/journeyAi.png';
import taskflowAi from '../pictures/taskflowAi.png';
import diagarrow from '../pictures/diag-arrow.svg';

function Projects() {
    return (
        <div className='project w-screen bg-black p-4 md:p-20 flex flex-col md:flex-row justify-between border-t border-t-slate-300 fade-in'>
            <div className='w-full md:w-1/2 md:pr-10 mb-10 md:mb-0'>
                <div className='h-full'>
                    <div className='experience-item flex flex-col mb-5'>
                        <div className='image-wrapper'>
                            <div className='flex flex-row'>
                                <img src={diagarrow} alt="Arrow" className="w-4 md:w-auto"></img>
                                <a 
                                    className='text-white text-sm md:text-base hover:text-blue-500 hover:underline transition duration-300' 
                                    href='https://github.com/dnhan1707/journey-ai-product-version'
                                >
                                    View on Github
                                </a>
                            </div>

                            <Link to="/journeyai#journeyai-intro-section">
                                <img className='experience-image scale-up-on-hover pt-2 w-full' src={journeyAi} alt="Experience 1"></img>
                            </Link>
                        </div>
                        <div className='experience-3-des flex flex-row pt-5'>
                            <div className='pl-2 md:pl-5'>
                                <h1 className="text-2xl md:text-3xl text-white font-bold pt-1">Journey AI</h1>
                                <p className='text-xs md:text-sm text-gray-500'>JavaScript, React, Firebase, Gemini</p>
                                <div className='text-white pt-3 md:pt-5 text-sm md:text-base'>
                                    <h1>-{'>'}Create the most personalized travelling trip in a fast, convenient and smart way.</h1>
                                    <h1>-{'>'}JourneyAI received <span className="highlight">219 users after released</span>, and it still growing.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full md:w-1/2 md:pl-10'>
                <div className='h-full'>
                    <h1 className="name text-6xl md:text-9xl text-white font-bold pb-8 md:pb-14 fade-in-up">Projects</h1>
                    <div className='project-item flex flex-col mb-5'>
                        <div className='flex flex-row'>
                            <img src={diagarrow} alt="Arrow" className="w-4 md:w-auto"></img>
                            <a 
                                className='text-white text-sm md:text-base hover:text-blue-500 hover:underline transition duration-300' 
                                href='https://github.com/dnhan1707/taskbreaker'
                            >
                                View on Github
                            </a>
                        </div>
                        <div className='image-wrapper pt-2'>
                            <img className='experience-image scale-up-on-hover w-full' src={taskflowAi} alt="Experience 1"></img>
                        </div>
                        <div className='project-1-des flex flex-row pt-5'>
                            <div className='pl-2 md:pl-5'>
                                <h1 className="text-2xl md:text-3xl text-white font-bold pt-1">TaskFlow AI <span className='text-xs md:text-sm text-gray-500'>{'(Cerebrals Beach Hackathon)'}</span></h1>
                                <p className='text-xs md:text-sm text-gray-500'>JavaScript, React, Firebase, GPT-4</p>
                                <h1 className='pt-3 md:pt-5 text-sm md:text-base text-white'>-{'>'}TaskFlow AI is an innovative <span className='highlight'>task management application</span> designed to streamline project workflows and enhance team collaboration.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;    
