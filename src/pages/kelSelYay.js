import React, { useEffect } from 'react';
import pic_1 from '../pictures/KelSelYayPics/report.jpg';
import pic_2 from '../pictures/KelSelYayPics/map.jpg';
// import pic_3 from '../pictures/KelSelYayPics/KSY.png';
import pic_4 from '../pictures/KelSelYayPics/searchfilter.jpg';

import { FaGithub, FaArrowRight } from 'react-icons/fa';
import GoBackButton from '../components/GoBackButton';

function KelSelYay() {
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
            <GoBackButton/>
            {/* Hero Section */}
            <section id="kelselyay-intro-section" className="max-w-6xl mx-auto px-4 py-20 md:px-8">
                <div className="name text-2xl md:text-9xl font-bold pb-7 md:pb-14 fade-in-up italic">
                    <h1><span className="text-purple-400">KelSelYay</span></h1>
                </div>
                
                <div className="bg-gray-900 bg-opacity-30 border border-gray-800 rounded-lg  mb-10">
                    <h1 className="mb-3 flex items-center">
                        <span className="text-purple-400 mr-2">-{'>'}</span> 
                        <span>View on </span>
                        <span className="highlight hover:text-blue-500 hover:underline transition duration-300 ml-1">
                            <a href="https://github.com/Kel-Sel-Yay-Team/kelSelYay" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                github <FaGithub className="ml-1" />
                            </a>
                        </span>
                    </h1>
                </div>
                {/* Demo Container */}
                {/* <div className="rounded-lg overflow-hidden border border-gray-800 hover:border-purple-800 transition-all duration-500 shadow-lg transform hover:translate-y-[-4px] mx-auto">
                    <img 
                        src={pic_3} 
                        className="w-full max-h-[400px] object-contain mx-auto" 
                        alt="KelSelYay demo"
                    />
                </div> */}
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
                                    In the aftermath of Myanmar’s devastating earthquake, we envisioned KelSelYay as a real-time crisis aid platform designed to bridge the gap between victims, rescuers, and volunteers. 
                                    Our goal was to create an accessible, fast, and simple tool where individuals could report urgent needs like food, water, and medical supplies, and where rescuers could instantly visualize danger zones and supply demands through a dynamic live map. 
                                    By prioritizing clarity, speed, and ease of use even in low-connectivity environments, KelSelYay empowers communities to organize aid efforts more efficiently and ensures that critical help reaches those who need it most.
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
                                    As the Lead Developer, I was responsible for building the real-time infrastructure, designing the live crisis map, and ensuring a fast, accessible experience for users reporting urgent needs during disaster response.                                </p>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Led backend development to build a real-time data pipeline that collects and updates user reports on urgent needs and locations.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Designed and implemented the live crisis map, integrating dynamic updates to visualize supply demands and danger zones.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Built a lightweight, accessible frontend optimized for fast load times and usability even in low-bandwidth environments.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Developed reporting features allowing users to easily post requests for help with minimal friction.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FaArrowRight className="text-purple-400 mt-1 mr-2 flex-shrink-0" />
                                        <span>Deployed and maintained the platform on cloud infrastructure to ensure reliability and scalability during high-traffic periods.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-3/5 order-1 md:order-2">
                                <img 
                                    src={pic_4} 
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
                                        <span>JavaScript</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                        <span className="font-bold block text-purple-300">Frontend</span>
                                        <span>NextJs</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                        <span className="font-bold block text-purple-300">Backend</span>
                                        <span>Node.js, Express, AWS EC2 & S3, Render</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
                                        <span className="font-bold block text-purple-300">Database</span>
                                        <span>MongoDB</span>
                                    </div>
                                    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg col-span-2">
                                        <span className="font-bold block text-purple-300">APIs</span>
                                        <span>MapBox, Google Analysis</span>
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

export default KelSelYay;