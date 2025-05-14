import { Link } from 'react-router-dom';
import journeyAi from '../pictures/journeyAi.png';
import taskflowAi from '../pictures/taskflowAi.png';
import voiceAiAssistant from '../pictures/voiceAiAssistantPics/voiceAiCalendar.png';
import codingPlatform from '../pictures/codingPlatform.png'
import heartDiseaseProj from '../pictures/heartDiseaseProj.png';
import kelselyaypic from '../pictures/KelSelYayPics/KSY.png'
import { FaArrowRight } from 'react-icons/fa'; // Add this import
import '../project.css'
function Projects() {
    return (
        <div className='min-h-screen bg-black p-8 md:p-16'>
            <h1 className="name text-6xl md:text-9xl text-white font-bold pb-8 md:pb-14 fade-in-up">Projects</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <Link to="/kelselyay#kelselyay-intro-section">
                    <div className='group project-card p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-all cursor-pointer relative'>
                        <div className='aspect-w-16 aspect-h-9 mb-4'> {/* Add fixed aspect ratio container */}
                            <img className='w-full h-full rounded-lg object-cover' 
                                 src={kelselyaypic} 
                                 alt="Real-time Multiplayer Coding Platform" />
                        </div>
                        <div className='space-y-4'>
                            <div className='flex items-center justify-between'>
                                <h2 className="text-2xl text-white font-bold">KelSelYay</h2>
                                <FaArrowRight className='text-gray-600 group-hover:text-white transition-colors' />
                            </div>
                            <p className='text-gray-400 text-sm'>JavaScript, NextJs, Vercel, AWS S3, Render, MongoDB</p>
                            <p className='text-white text-lg'>* Created a crisis relief platform used by <span className='highlight'>7,000 users</span> users to report missing persons and access help.</p>
                            <div className='flex space-x-4'>
                                <a href='https://www.kelselyay.com/' 
                                    className='text-blue-400 hover:text-blue-300 flex items-center'
                                    onClick={(e) => e.stopPropagation()}>
                                        <span>Try it now</span>
                                </a>
                                <a href='https://github.com/Kel-Sel-Yay-Team/kelSelYay' 
                                   className='text-blue-400 hover:text-blue-300 flex items-center'
                                   onClick={(e) => e.stopPropagation()}>
                                    <span>View on Github</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/realtimecodingproject#realtimecoding-intro-section">
                    <div className='group project-card p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-all cursor-pointer relative'>
                        <div className='aspect-w-16 aspect-h-9 mb-4'> {/* Add fixed aspect ratio container */}
                            <img className='w-full h-full rounded-lg object-cover' 
                                 src={codingPlatform} 
                                 alt="Real-time Multiplayer Coding Platform" />
                        </div>
                        <div className='space-y-4'>
                            <div className='flex items-center justify-between'>
                                <h2 className="text-2xl text-white font-bold">Real-time Multiplayer Coding Platform</h2>
                                <FaArrowRight className='text-gray-600 group-hover:text-white transition-colors' />
                            </div>
                            <p className='text-gray-400 text-sm'>TypeScript, NextJs, Node.js, Express.js, PostgreSQL, WebSocket, Sequelize, Judge0</p>
                            <p className='text-white text-lg'>* Engage in thrilling coding challenges with multiple players in real-time.</p>
                            <div className='flex space-x-4'>
                                <a href='https://github.com/dnhan1707/multiplayer-leetcode-platform' 
                                   className='text-blue-400 hover:text-blue-300 flex items-center'
                                   onClick={(e) => e.stopPropagation()}>
                                    <span>View on Github</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Journey AI Project */}
                <Link to="/journeyai#journeyai-intro-section">
                    <div className='group project-card p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-all cursor-pointer relative'>
                    <div className='aspect-w-16 aspect-h-9 mb-4'> {/* Add fixed aspect ratio container */}
                            <img className='w-full h-full rounded-lg object-cover' 
                                 src={journeyAi} 
                                 alt="Journey AI" />
                        </div>
                        <div className='space-y-4'>
                            <div className='flex items-center justify-between object-cover'>
                                <h2 className="text-2xl text-white font-bold">Journey AI</h2>
                                <FaArrowRight className='text-gray-600 group-hover:text-white transition-colors' />
                            </div>
                            <p className='text-gray-400 text-sm'>JavaScript, React, Node.js, Express.js, Firebase, Gemini</p>
                            <p className='text-white text-lg'>* Plan personalized travel adventures quickly, conveniently, and intelligently.</p>
                            <p className='text-white text-lg'>* Join over <span className='highlight'>337 users</span> and counting.</p>

                            <div className='flex flex-row gap-4'>
                                <div className='flex space-x-4'>
                                    <a href='https://www.journey-ai.dev/' 
                                    className='text-blue-400 hover:text-blue-300 flex items-center'
                                    onClick={(e) => e.stopPropagation()}>
                                        <span>Try it now</span>
                                    </a>
                                </div>

                                <div className='flex space-x-4'>
                                    <a href='https://github.com/dnhan1707/journey-ai' 
                                    className='text-blue-400 hover:text-blue-300 flex items-center'
                                    onClick={(e) => e.stopPropagation()}>
                                        <span>View on Github</span>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </Link>

                {/* TaskFlow AI Project */}
                <Link to="/voiceaiassistant#voiceassistant-intro-section">
                    <div className='group project-card p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-all cursor-pointer relative'>
                        <div className='aspect-w-16 aspect-h-9 mb-4'> {/* Add fixed aspect ratio container */}
                            <img className='w-full h-full rounded-lg object-cover' 
                                 src={voiceAiAssistant} 
                                 alt="VoiceAiAssistant" />
                        </div>
                        <div className='space-y-4'>
                            <div className='flex items-center justify-between'>
                                <h2 className="text-2xl text-white font-bold">Voice AI Calendar Assistant</h2>
                                <FaArrowRight className='text-gray-600 group-hover:text-white transition-colors' />
                            </div>
                            <p className='text-gray-400 text-sm'>Python, TypeScript, FastAPI, GPT-4, NLP</p>
                            <p className='text-white text-lg'>* Help visual impared people managing schedule effortlessly with a voice-controlled AI assistant powered by GPT-4 and Google Calendar.</p>
                            <div className='flex space-x-4'>
                                <a href='https://github.com/dnhan1707/voice-calendar-assistant-backend' 
                                   className='text-blue-400 hover:text-blue-300 flex items-center'
                                   onClick={(e) => e.stopPropagation()}>
                                    <span>View on Github</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* TaskFlow AI Project */}
                <Link to="/taskflow#taskflow-intro-section">
                    <div className='group project-card p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-all cursor-pointer relative'>
                        <div className='aspect-w-16 aspect-h-9 mb-4'> {/* Add fixed aspect ratio container */}
                            <img className='w-full h-full rounded-lg object-cover' 
                                 src={taskflowAi} 
                                 alt="TaskflowAI" />
                        </div>
                        <div className='space-y-4'>
                            <div className='flex items-center justify-between'>
                                <h2 className="text-2xl text-white font-bold">TaskFlow AI</h2>
                                <FaArrowRight className='text-gray-600 group-hover:text-white transition-colors' />
                            </div>
                            <p className='text-gray-400 text-sm'>JavaScript, React, Node.js, Express.js, Firebase, GPT-4</p>
                            <p className='text-white text-lg'>* Revolutionize your project workflows with our intelligent task management app.</p>
                            <div className='flex space-x-4'>
                                <a href='https://github.com/dnhan1707/taskbreaker' 
                                   className='text-blue-400 hover:text-blue-300 flex items-center'
                                   onClick={(e) => e.stopPropagation()}>
                                    <span>View on Github</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Link>


                <Link to="/heartDiseaseProj">
                    <div className='group project-card p-6 border border-gray-800 rounded-lg hover:border-gray-600 transition-all cursor-pointer relative'>
                        <div className='aspect-w-16 aspect-h-9 mb-4'> {/* Add fixed aspect ratio container */}
                            <img className='w-full h-full rounded-lg object-cover' 
                                 src={heartDiseaseProj} 
                                 alt="Heart Disease Project" />
                        </div>
                        <div className='space-y-4'>
                            <div className='flex items-center justify-between'>
                                <h2 className="text-2xl text-white font-bold">Heart Disease Detection</h2>
                                <FaArrowRight className='text-gray-600 group-hover:text-white transition-colors' />
                            </div>
                            <p className='text-gray-400 text-sm'>Python, Scikit-learn, Numby, Pandas.</p>
                            <p className='text-white text-lg'>* Heart Disease Detection Model: Achieving 92% accuracy in identifying risk factors for early intervention and improved patient outcomes.
                            </p>
                            <div className='flex space-x-4'>
                                <a href='https://github.com/dnhan1707/heart_disease_prediction_proj' 
                                   className='text-blue-400 hover:text-blue-300 flex items-center'
                                   onClick={(e) => e.stopPropagation()}>
                                    <span>View on Github</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Projects;