function Header(){
    return (
        <div className='header w-full bg-black text-white px-32 md:px-32 pt-10'>
            <div className='header-container flex flex-row gap-4 md:gap-10 items-end justify-end'>
            <div className='resume'>
                <a href="https://drive.google.com/file/d/14HEcTBbT1R2hPD4WusaWk6SjFi4j41tz/view?usp=sharing">Resume</a>
            </div>

            <div className='contact'>
                <a href="#contact" className="text-white hover:underline">Contact</a>
            </div>
            </div>
        </div>
    )
}

export default Header;
