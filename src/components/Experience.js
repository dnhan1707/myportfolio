import mlh_pic from '../pictures/MLH_pic.jpg';
import cohere_pic from '../pictures/cohere-6.png';
import headstarter from '../pictures/headstarterAI.png';


function Experience() {
    return (
        <div className='experience text-white w-screen bg-black p-10 md:p-20 border-t border-t-slate-300'>
          
            <h1 className="name text-5xl md:text-9xl font-bold pb-7 md:pb-14 fade-in-up">Experience</h1>
            
            {/* First Row - MLH and Cohere Pics side by side */}
            <div className='flex flex-col md:flex-row justify-between'>
                {/* Left Experience - MLH */}
                <div className='experience-item flex flex-col mb-5 w-full md:w-1/2 md:pr-5'>
                    <div className='image-wrapper'>
                        <img className='experience-image scale-up-on-hover' src={mlh_pic} alt="Experience 1" />
                    </div>
                    <div className='experience-1-des flex flex-row pt-5'>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold">01</h1>
                        </div>
                        <div className='pl-5'>
                            <h1 className="font-semibold">Meta x Major League Hack</h1>
                            <h1>2024, Software Engineer Intern</h1>
                        </div>
                    </div>

                    <div className='experience-item flex flex-col mt-10'>
                        <div className='image-wrapper'>
                            <img className='experience-image scale-up-on-hover' src={headstarter} alt="Experience 3" />
                        </div>
                        <div className='experience-3-des flex flex-row pt-5'>
                            <div>
                                <h1 className="text-3xl md:text-5xl font-bold">03</h1>
                            </div>
                            <div className='pl-5'>
                                <h1 className="font-semibold">Headstarter AI</h1>
                                <h1>2024, Software Engineer Fellow</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Experience - Cohere */}
                <div className='experience-item flex flex-col mb-5 w-full md:w-1/2 md:pl-5'>
                    <div className='image-wrapper flex'>
                    <img className='experience-image scale-up-on-hover pl-20' src={cohere_pic} alt="Experience 2" />
                    </div>
                    <div className='experience-2-des flex flex-row pt-5 pl-20'>
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold">02</h1>
                    </div>
                    <div className='pl-5'>
                        <h1 className="font-semibold">Cohere Commerce</h1>
                        <h1>2024, AI/ Machine Learning Fellow</h1>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience;  
