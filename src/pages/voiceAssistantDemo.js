import React, { useEffect } from 'react';
import pic_1 from '../pictures/voiceAiAssistantPics/voiceAiAssistant1.png';
import pic_2 from '../pictures/voiceAiAssistantPics/voiceAiAssistant2.png';
import pic_4 from '../pictures/voiceAiAssistantPics/voiceAiCalendar.png';

import { FaGithub, FaArrowRight } from 'react-icons/fa';

function VoiceAiAssistant() {
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
            <section id="voiceassistant-intro-section" className="max-w-6xl mx-auto px-4 py-20 md:px-8">
                <div className="name text-2xl md:text-9xl font-bold pb-7 md:pb-14 fade-in-up italic">
                    <h1><span className="text-purple-400">Voice-controlled</span></h1>AI Assistant
                </div>
                
                <div className="bg-gray-900 bg-opacity-30 border border-gray-800 rounded-lg p-5 mb-10">
                    <h1 className="mb-3 flex items-center">
                        <span className="text-purple-400 mr-2">-{'>'}</span> 
                        <span>View on </span>
                        <span className="highlight hover:text-blue-500 hover:underline transition duration-300 ml-1">
                            <a href="https://github.com/dnhan1707/voice-calendar-assistant-backend" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                github <FaGithub className="ml-1" />
                            </a>
                        </span>
                    </h1>
                </div>
                
                {/* Demo Container - YouTube Video */}
                <div className="rounded-lg overflow-hidden border border-gray-800 hover:border-purple-800 transition-all duration-500 shadow-lg transform hover:translate-y-[-4px] mx-auto max-w-md">
                    <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                        <iframe 
                            src="https://www.youtube.com/embed/dpfzib9RNQU" 
                            title="Voice AI Assistant Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full"
                            style={{ border: 'none' }}
                        ></iframe>
                    </div>
                </div>
                
                <div className="mt-6 text-gray-400 text-sm italic text-center">
                    ↑ Demo of Voice AI Assistant in action
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
                                    src={pic_4} 
                                    className="fade-in-image scale-up-on-hover w-full h-full object-cover" 
                                    alt="Project overview"
                                />
                            </div>
                            <div className="w-full md:w-2/5 p-6 flex flex-col justify-center slide-in-left">
                                <h3 className="text-purple-400 font-bold text-2xl mb-4">The Vision</h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    This intelligent voice assistant helps users manage their schedules by interacting with Google Calendar through natural language commands. 
                                    By leveraging speech recognition and NLP (GPT-4), it understands time expressions (e.g., "next week," "tomorrow") 
                                    and automates event scheduling. The assistant ensures a hands-free experience for efficient calendar management.
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
                                    As the Fullstack Developer, I designed and implemented the speech-to-action workflow, ensuring smooth voice interaction and calendar automation. 
                                </p>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Integrated Python-based speech-to-text processing to accurately convert spoken words into commands.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Used GPT-4 to extract scheduling details and interpret natural language requests.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Developed the backend with FastAPI, handling NLP processing, scheduling logic, and Google Calendar API integration.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Connected the assistant with Google Calendar to check availability and schedule events automatically.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-3/5 order-1 md:order-2">
                                <img 
                                    src={pic_2} 
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
                                    src={pic_1} 
                                    className="fade-in-image scale-up-on-hover w-full h-full object-cover" 
                                    alt="Project technologies"
                                />
                            </div>
                            <div className="w-full md:w-2/5 p-6 flex flex-col justify-center slide-in-left">
                                <h3 className="text-purple-400 font-bold text-2xl mb-4">Tech Stack</h3>
                                <div className="grid grid-cols-2 gap-4 text-gray-300">
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                        <span className="font-bold block text-purple-300">Language</span>
                                        <span>Python, TypeScript</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                        <span className="font-bold block text-purple-300">Frontend</span>
                                        <span>NextJs</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                        <span className="font-bold block text-purple-300">Backend</span>
                                        <span>FastAPI</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                        <span className="font-bold block text-purple-300">NLP Engine</span>
                                        <span>GPT-4</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg col-span-2">
                                        <span className="font-bold block text-purple-300">APIs</span>
                                        <span>Google Calendar API</span>
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

export default VoiceAiAssistant;