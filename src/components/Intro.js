import my_setup from '../pictures/my_setup.png';
import '../App.css';

function Intro(){
    return (
        <div className='min-h-screen bg-black overflow-hidden'>
            {/* Background gradient */}
            <div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-black'></div>
            
            <div className='relative z-10 container mx-auto px-6 py-12 md:py-20'>
                <div className='flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20'>
                    {/* Left Section - Name and Image */}
                    <div className='w-full md:w-7/12'>
                        <div className='space-y-2 mb-12'>
                            <h1 className='name text-4xl md:text-7xl lg:text-9xl font-bold text-white italic tracking-tighter fade-in-up'>
                                NHAN
                            </h1>
                            <h1 className='name text-4xl md:text-7xl lg:text-9xl font-bold text-white italic tracking-tighter fade-in-up delay-100'>
                                TRI DANH
                            </h1>
                        </div>
                        
                        <div className='relative'>
                            <div className='aspect-w-4 aspect-h-5 rounded-lg overflow-hidden'>
                                <img 
                                    src={my_setup} 
                                    className='w-full h-full object-cover transform transition-transform duration-700 hover:scale-105' 
                                    alt="Nhan Tri Danh"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className='absolute -bottom-4 -right-4 w-24 h-24 border-2 border-purple-500 rounded-lg opacity-50'></div>
                            <div className='absolute -top-4 -left-4 w-24 h-24 border-2 border-purple-500 rounded-lg opacity-50'></div>
                        </div>
                    </div>

                    {/* Right Section - Title and Description */}
                    <div className='w-full md:w-5/12 md:mt-32'>
                        <div className='space-y-8'>
                            <h2 className='text-2xl md:text-3xl font-bold text-white tracking-wide slide-in-left'>
                                Software Engineer
                            </h2>
                            <div className='text-lg md:text-xl text-gray-300 leading-relaxed slide-in-left delay-200'>
                                <p>
                                    Turning <span className="highlight">ideas</span> into reality,
                                    crafting code with <span className="highlight">precision</span>,
                                    and transforming complex problems into <span className="highlight">elegant solutions.</span>
                                </p>
                            </div>
                            
                            {/* Social Links */}
                            <div className='flex gap-6 text-gray-400 slide-in-left delay-300'>
                                <a href="https://github.com/dnhan1707" className="hover:text-white transition-colors">
                                    GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/nhan-tri-danh-29b922223/" className="hover:text-white transition-colors">
                                    LinkedIn
                                </a>
                                <a href="https://drive.google.com/file/d/1eI9KqIDR6hcOTIOJRrAQQ0t1QM-qmhXv/view?usp=sharing" className="hover:text-white transition-colors">
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Intro;
