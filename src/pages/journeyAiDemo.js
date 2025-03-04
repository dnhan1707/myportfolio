import React, { useEffect } from 'react';
import user_count from '../pictures/user_count.png';
import pic_1 from '../pictures/journeyAi1.png';
import pic_2 from '../pictures/journeyAi2.png';
import pic_3 from '../pictures/journeyAi3.png';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

function JourneyAIDemo() {
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
                <div className="name text-5xl md:text-9xl font-bold pb-7 md:pb-14 fade-in-up italic">
                    <h1>Journey<span className="text-purple-400">AI</span></h1>
                </div>
                
                <div className="bg-gray-900 bg-opacity-30 border border-gray-800 rounded-lg p-5 mb-10">
                    <h1 className="mb-3 flex items-center">
                        <span className="text-purple-400 mr-2">-{'>'}</span> 
                        <span>View on </span>
                        <span className="highlight hover:text-blue-500 hover:underline transition duration-300 ml-1">
                            <a href="https://github.com/dnhan1707/journey-ai-product-version" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                github <FaGithub className="ml-1" />
                            </a>
                        </span>
                    </h1>
                    
                    <h1 className="mb-3 flex items-center">
                        <span className="text-purple-400 mr-2">-{'>'}</span> 
                        <span>Is it live? Yes, it is. Visit </span>
                        <span className="highlight hover:text-blue-500 hover:underline transition duration-300 ml-1">
                            <a href="https://journey-ai.dev" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                journey-ai.dev <FaExternalLinkAlt className="ml-1 text-sm" />
                            </a>
                        </span>
                    </h1>
                    
                    <h1 className="flex items-center">
                        <span className="text-purple-400 mr-2">-{'>'}</span> 
                        <span>Try the </span>
                        <span className="highlight ml-1 mr-1">demo</span>
                        <span>below by following the blue circles</span>
                    </h1>
                </div>
                
                {/* Demo Container */}
                <div className="rounded-lg overflow-hidden border border-gray-800 hover:border-purple-800 transition-all duration-500 shadow-lg transform hover:translate-y-[-4px]">
                    <div style={{ position: 'relative', paddingBottom: 'calc(50.52% + 41px)', height: 0, width: '100%' }}>
                        <iframe 
                            src="https://demo.arcade.software/DO2sZhwhZyAYVOR20v0Q?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" 
                            title="JourneyAI"
                            frameBorder="0" 
                            loading="lazy" 
                            webkitAllowFullScreen 
                            mozAllowFullScreen 
                            allowFullScreen 
                            allow="clipboard-write" 
                            className="rounded-lg"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }} 
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section id="achievements-section" className="border-t border-gray-800 mt-20 bg-gray-900 bg-opacity-20">
                <div className="max-w-6xl mx-auto px-4 py-20 md:px-8">
                    <div className="name text-5xl md:text-7xl font-bold pb-10 md:pb-14 fade-in-up italic">
                        <h1><span className="text-purple-400">User</span> Growth</h1>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                        <div className="w-full md:w-3/5">
                            <div className="rounded-lg overflow-hidden border border-gray-800 shadow-xl">
                                <img 
                                    src={user_count} 
                                    className="fade-in-image scale-up-on-hover w-full" 
                                    alt="User statistics"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-2/5 slide-in-left">
                            <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg border border-gray-800">
                                <div className="text-6xl font-bold text-purple-400 mb-4">337</div>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    A small number that represents a <span className="highlight">big milestone</span> in my journey. 
                                    This growing community fuels my passion to build tools that make a real impact.
                                </p>
                            </div>
                        </div>
                    </div>
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
                                    src={pic_1} 
                                    className="fade-in-image scale-up-on-hover w-full h-full object-cover" 
                                    alt="Project overview"
                                />
                            </div>
                            <div className="w-full md:w-2/5 p-6 flex flex-col justify-center slide-in-left">
                                <h3 className="text-purple-400 font-bold text-2xl mb-4">The Vision</h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    JourneyAI reimagines travel planning through AI-powered personalization. By analyzing preferences and travel patterns, 
                                    it creates custom itineraries that feel both spontaneous and carefully crafted.
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
                                    As Lead Developer, I crafted every aspect of JourneyAI from concept to deployment.
                                </p>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Built a responsive React frontend with intuitive UI/UX</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Engineered a Node.js/Express backend for efficient itinerary generation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Integrated Google's Gemini for intelligent route optimization</span>
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
                                    src={pic_3} 
                                    className="fade-in-image scale-up-on-hover w-full h-full object-cover" 
                                    alt="Project technologies"
                                />
                            </div>
                            <div className="w-full md:w-2/5 p-6 flex flex-col justify-center slide-in-left">
                                <h3 className="text-purple-400 font-bold text-2xl mb-4">Tech Stack</h3>
                                <div className="grid grid-cols-2 gap-4 text-gray-300">
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                        <span className="font-bold block text-purple-300">Frontend</span>
                                        <span>React</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                        <span className="font-bold block text-purple-300">Backend</span>
                                        <span>Node.js / Express</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                        <span className="font-bold block text-purple-300">Database</span>
                                        <span>Firebase Firestore</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                        <span className="font-bold block text-purple-300">Deployment</span>
                                        <span>Vercel</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg col-span-2">
                                        <span className="font-bold block text-purple-300">APIs</span>
                                        <span>Google Place, MapBox, Unsplash, Gemini</span>
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

export default JourneyAIDemo;