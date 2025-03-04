import React, { useEffect } from 'react';
import pic_1 from '../pictures/realtimeCodingPics/realtimeCoding1.png';
import pic_2 from '../pictures/realtimeCodingPics/realtimeCoding2.png';
import pic_3 from '../pictures/realtimeCodingPics/realtimeCoding3.png';
import pic_4 from '../pictures/realtimeCodingPics/realtimeCoding4.jpg';

import { FaGithub, FaArrowRight } from 'react-icons/fa';

function RealTimeCodingDemo() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <div className="w-full bg-black text-white">
            {/* Hero Section */}
            <section id="journeyai-intro-section" className="max-w-6xl mx-auto px-4 py-20 md:px-8">
                <div className="name text-2xl md:text-9xl font-bold pb-7 md:pb-14 fade-in-up italic">
                    <h1><span className="text-purple-400">Real-time</span></h1>Multiplayer Coding Challenge
                </div>
                
                <div className="bg-gray-900 bg-opacity-30 border border-gray-800 rounded-lg p-5 mb-10">
                    <h1 className="mb-3 flex items-center">
                        <span className="text-purple-400 mr-2">-{'>'}</span> 
                        <span>View on </span>
                        <span className="highlight hover:text-blue-500 hover:underline transition duration-300 ml-1">
                            <a href="https://github.com/dnhan1707/multiplayer-leetcode-platform" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                github <FaGithub className="ml-1" />
                            </a>
                        </span>
                    </h1>
                </div>
                {/* Demo Container */}
                <div className="rounded-lg overflow-hidden border border-gray-800 hover:border-purple-800 transition-all duration-500 shadow-lg transform hover:translate-y-[-4px]">
                    <img src={pic_1}></img>
                </div>
            </section>

            
            {/* Overview Section */}
            <section id="overview-section" className="border-t border-gray-800 mt-20">
                <div className="max-w-6xl mx-auto px-4 py-20 md:px-8">
                    <div className="name text-5xl md:text-7xl font-bold pb-10 md:pb-14 fade-in-up italic">
                        <h1><span className="text-purple-400">Project</span> Overview</h1>
                    </div>
                    
                    {/* Summary */}
                    <div className="project-card mb-16 bg-gray-900 bg-opacity-20 rounded-lg overflow-hidden border border-gray-800">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-3/5">
                                <img 
                                    src={pic_2} 
                                    className="fade-in-image scale-up-on-hover w-full h-full object-cover" 
                                    alt="Project overview"
                                />
                            </div>
                            <div className="w-full md:w-2/5 p-6 flex flex-col justify-center slide-in-left">
                                <h3 className="text-purple-400 font-bold text-2xl mb-4">The Vision</h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                This platform enables users to participate in real-time multiplayer coding competitions, similar to LeetCode contests. 
                                Built with a focus on low-latency collaboration, it allows participants to compete, submit solutions, and receive instant feedback in a dynamic, competitive environment. 
                                The system supports real-time code execution, ranking updates, and a seamless coding experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Role */}
                    <div className="project-card mb-16 bg-gray-900 bg-opacity-20 rounded-lg overflow-hidden border border-gray-800">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-2/5 p-6 order-2 md:order-1 flex flex-col justify-center slide-in-left">
                                <h3 className="text-purple-400 font-bold text-2xl mb-4">My Contribution</h3>
                                <p className="text-gray-300 text-lg mb-4">
                                    As the Lead Developer, I was responsible for designing and implementing the real-time architecture to ensure smooth and competitive coding sessions.                                </p>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Built an interactive, responsive UI using Next.js, React, and TypeScript to provide a seamless coding experience.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Integrated WebSockets to enable real-time updates for submissions, rankings, and problem-solving progress.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Designed and developed the backend with Node.js and Express, ensuring fast and efficient request handling.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Used PostgreSQL to manage user data, submissions, and contest results.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Implemented a secure, isolated code execution environment for evaluating user solutions.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-3/5 order-1 md:order-2">
                                <img 
                                    src={pic_3} 
                                    className="fade-in-image scale-up-on-hover w-full h-full object-cover" 
                                    alt="Project development"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="project-card bg-gray-900 bg-opacity-20 rounded-lg overflow-hidden border border-gray-800">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-3/5">
                                <img 
                                    src={pic_4} 
                                    className="fade-in-image scale-up-on-hover w-full h-full object-cover" 
                                    alt="Project technologies"
                                />
                            </div>
                            <div className="w-full md:w-2/5 p-6 flex flex-col justify-center slide-in-left">
                                <h3 className="text-purple-400 font-bold text-2xl mb-4">Tech Stack</h3>
                                <div className="grid grid-cols-2 gap-4 text-gray-300">
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                        <span className="font-bold block text-purple-300">Language</span>
                                        <span>TypeScript</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                        <span className="font-bold block text-purple-300">Frontend</span>
                                        <span>NextJs</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                        <span className="font-bold block text-purple-300">Backend</span>
                                        <span>Node.js, Express, Sequelize, Socket.io</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                        <span className="font-bold block text-purple-300">Database</span>
                                        <span>PostgreSQL</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg col-span-2">
                                        <span className="font-bold block text-purple-300">APIs</span>
                                        <span>Judge0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RealTimeCodingDemo;