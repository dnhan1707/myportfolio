import React, { useEffect } from 'react';
import user_count from '../pictures/user_count.png';

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
            <div className="demo-container pb-20">
                <div id="journeyai-intro-section" className="journeyai-intro-section px-4 md:px-40">
                    <div className="bg-black w-full text-white flex flex-col md:flex-row fade-in">
                        <div className='name text-5xl md:text-9xl font-bold pb-7 md:pb-14 fade-in-up italic'>
                            <h1>JourneyAI</h1>
                        </div>
                    </div>
                    <h1>-{'> '}Is it live? Yes, it is. Click <span className="highlight hover:text-blue-500 hover:underline transition duration-300"><a href="https://journey-ai.dev" target="_blank" rel="noopener noreferrer">here</a></span></h1>
                    <h1 className="pb-5">-{'> '}Try the <span className="highlight">demo</span> below here, start with the Login</h1>
                    <div className="px-4 md:px-20 py-20 rounded-lg" style={{ position: 'relative', paddingBottom: 'calc(50.520833333333336% + 41px)', height: 0, width: '100%' }}>
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
                
                <div className='pt-40 w-screen'></div>

                <div id="live-section" className="live-section text-white w-screen bg-black p-10 md:p-20 border-t border-t-slate-300 flex flex-col md:flex-row">
                    <div className="journeyai-intro bg-black w-full text-white pt-20 pb-0 flex flex-col fade-in">
                        <div className='name text-5xl md:text-9xl font-bold pb-7 md:pb-14 fade-in-up italic'>
                            <h1>Achievements</h1>
                        </div>
                        <div className='pic'>
                            <img src={user_count} className='fade-in-image scale-up-on-hover' alt="My Setup"/>
                        </div>
                    </div>

                    <div className='small-des text-lg md:text-xl w-full md:w-1/3 flex flex-col justify-center p-5 md:p-10 slide-in-left'>
                        <div className='des pt-10 md:pt-20'>
                            <div className='user-overview font-bold'>
                                Users
                            </div>
                            <p className='pt-5'>
                                219 is a <span className='highlight'>small</span> number but it is a <span className='highlight'>big</span> milestone for me. 
                                It is the number of users who have used the JourneyAI platform.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JourneyAIDemo;