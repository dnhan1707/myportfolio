import me from '../pictures/me.jpg';


function Contact() {
    return (
        <div id="contact" className='contact w-screen bg-black text-white border-t border-t-slate-300'>
            <div className='contact-container flex flex-col md:flex-row items-center justify-center p-6 md:p-20'>
                <div className='get-in-touch flex flex-col items-center w-full md:w-1/2 mb-8 md:mb-0'>
                    <h1 className='text-4xl md:text-8xl font-bold pb-8 md:pb-14 fade-in-up'>Hire me !</h1>
                    <div className='contact-des text-base md:text-xl pb-6 md:pb-10'>
                      <a href="mailto:dnhan1707@gmail.com" title="Send me an email" className="hover:underline">dnhan1707@gmail.com</a>
                    </div>
                    <div className='social-link mt-4 md:mt-8'>
                        <ul className="social-media-list flex justify-center space-x-4 md:space-x-5">
                            <li>
                                <a href="https://www.linkedin.com/in/nhan-tri-danh-29b922223/" className="contact-icon text-gray-400 hover:text-white text-2xl md:fa-2x">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/dnhan1707" className="contact-icon text-gray-400 hover:text-white text-2xl md:fa-2x">
                                    <i className="fa-brands fa-github"></i>                    
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='my-image w-full md:w-1/2 px-4 md:px-0'>
                    <img src={me} className='fade-in-image scale-up-on-hover w-full max-w-md mx-auto' alt="Nhan Tri Danh"/>
                </div>
            </div>
        </div>
    )
}

export default Contact; 
