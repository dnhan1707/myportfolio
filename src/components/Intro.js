import my_setup from '../pictures/my_setup.png';
import '../App.css';


function Intro(){
    return (
        <div className='intro-page bg-black w-full h-screen text-white px-6 md:px-20 pt-10 pb-0 flex flex-col md:flex-row fade-in'>
          
            {/* Name and Image */}
            <div className='name-and-pic w-full md:w-2/3'>
                <div className='name text-5xl md:text-9xl font-bold pb-7 md:pb-14 fade-in-up italic'>
                    <h1>NHAN</h1>
                    <h1>TRI DANH</h1>
                </div>
                <div className='pic'>
                    <img src={my_setup} className='fade-in-image scale-up-on-hover' alt="My Setup"/>
                </div>
            </div>

            {/* Title and Description */}
            <div className='small-des text-lg md:text-xl w-full md:w-1/3 flex flex-col justify-center p-5 md:p-10 slide-in-left'>
                <div className='title pb-5 md:pb-13'>
                <h1 className='font-bold'>Software Engineer</h1>
                </div>
                <div className='des pt-10 md:pt-20'>
                <h1>
                    Turning <span className="highlight">ideas</span> into reality, 
                    crafting code with <span className="highlight">precision</span>, 
                    and transforming complex problems into 
                    <span className="highlight"> elegant solutions</span> for years.
                </h1>
                </div>
            </div>
        </div>
    )
}

export default Intro;
