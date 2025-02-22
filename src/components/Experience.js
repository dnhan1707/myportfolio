import mlh_pic from '../pictures/MLH_pic.jpg';
import bbt from '../pictures/bbt.png';
import { FaArrowRight } from 'react-icons/fa';

function Experience() {
    return (
        <div className='experience text-white w-screen bg-black p-10 md:p-20'>
            <h1 className="name text-5xl md:text-9xl font-bold pb-12 md:pb-20 fade-in-up">Experience</h1>
            
            <div className='flex flex-col space-y-12 max-w-6xl mx-auto'>

                {/* Breakthrough Tech Experience */}
                <div className='group relative overflow-hidden rounded-xl border border-gray-800 p-8 md:p-12 hover:border-gray-600 transition-all cursor-pointer'>
                    <div className='relative z-10 flex flex-col space-y-8'>
                        <div className='flex justify-between items-center'>
                            <span className='text-gray-400 text-lg md:text-xl font-light'>05 / 2024 - Current</span>
                            <FaArrowRight className='text-gray-600 group-hover:text-white transition-all transform group-hover:translate-x-2' />
                        </div>
                        <div className='flex flex-col md:flex-row md:items-center md:space-x-12'>
                            <img 
                                className='w-full md:w-2/5 rounded-xl object-cover mb-8 md:mb-0 transition-transform duration-500 group-hover:scale-105' 
                                src={bbt} 
                                alt="Breakthrough Tech Experience" 
                            />
                            <div className='md:w-3/5 space-y-6'>
                                <h2 className="font-bold text-3xl md:text-4xl">Breakthrough Tech AI</h2>
                                <p className="text-purple-400 text-xl">AI/Machine Learning Fellow</p>
                                <div className="space-y-4">
                                    <div className="experience-item">
                                        <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                        <span className="text-gray-300 text-base">
                                            Developed and deployed a computer vision model using Python, TensorFlow and OpenCV to identify various skin diseases with 85% accuracy, enhancing diagnostic tools in healthcare applications.                                        
                                        </span>
                                    </div>
                                    <div className="experience-item">
                                        <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                        <span className="text-gray-300 text-base">
                                            Engineered a RESTful API integration with the company's Node.js backend systems, resulting in a 30% reduction in data processing time and supporting real-time analytics for over 10,000 daily transactions.                                        
                                        </span>
                                    </div>
                                    <div className="experience-item">
                                        <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                        <span className="text-gray-300 text-base">
                                            Collaborated with cross-functional teams using Git, Jira, and Agile methodologies to refine algorithms based on user feedback, leading to a 25% increase in user engagement and contributing to a $250K revenue boost within the first six months.                                        
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MLH Experience */}
                <div className='group relative overflow-hidden rounded-xl border border-gray-800 p-8 md:p-12 hover:border-gray-600 transition-all cursor-pointer'>
                    <div className='relative z-10 flex flex-col space-y-8'>
                        <div className='flex justify-between items-center'>
                            <span className='text-gray-400 text-lg md:text-xl font-light'>09 / 2024 - 12 / 2024</span>
                            <FaArrowRight className='text-gray-600 group-hover:text-white transition-all transform group-hover:translate-x-2' />
                        </div>
                        <div className='flex flex-col md:flex-row md:items-center md:space-x-12'>
                            <img 
                                className='w-full md:w-2/5 rounded-xl object-cover mb-8 md:mb-0 transition-transform duration-500 group-hover:scale-105' 
                                src={mlh_pic} 
                                alt="MLH Experience" 
                            />
                            <div className='md:w-3/5 space-y-6'>
                                <h2 className="font-bold text-3xl md:text-4xl">Meta x Major League Hack</h2>
                                <p className="text-purple-400 text-xl">Software Engineer Intern</p>
                                <div className="space-y-4">
                                    <div className="experience-item">
                                        <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                        <span className="text-gray-300 text-base">
                                            Enhanced React Native project with team of 10, reducing bugs by 40% through code reviews and CI/CD optimization
                                        </span>
                                    </div>
                                    <div className="experience-item">
                                        <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                        <span className="text-gray-300 text-base">
                                            Implemented 3 new features using Redux and React Hooks, increasing GitHub engagement by 25%
                                        </span>
                                    </div>
                                    <div className="experience-item">
                                        <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                        <span className="text-gray-300 text-base">
                                            Optimized performance by 30% through Flipper profiling and memory management
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;