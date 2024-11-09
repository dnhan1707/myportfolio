import me from '../pictures/me.jpg';


function Contact() {
    return (
        <div id="contact" className='contact w-screen bg-black text-white border-t border-t-slate-300'>
            <div className='contact-container flex flex-row items-center justify-center p-20'>
                <div className='get-in-touch flex flex-col items-center w-1/2'>
                    <h1 className='text-8xl font-bold pb-14 fade-in-up'>Hire me !</h1>
                    <div className='contact-des text-xl pb-10'>
                      <a href="mailto:dnhan1707@gmail.com" title="Send me an email" className="hover:underline">dnhan1707@gmail.com</a>
                    </div>
                    <div className='social-link mt-8'>
                        <ul className="social-media-list flex justify-center space-x-5">
                            <li>
                                <a href="https://www.linkedin.com/in/nhan-tri-danh-29b922223/" className="contact-icon text-gray-400 hover:text-white fa-2x">
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/dnhan1707" className="contact-icon text-gray-400 hover:text-white fa-2x">
                                    <i class="fa-brands fa-github"></i>                    
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='my-image w-1/2'>
                    <img src={me} className='fade-in-image scale-up-on-hover' alt="Nhan Tri Danh"/>
                </div>
            </div>
        </div>
    )
}
export default Contact; 
