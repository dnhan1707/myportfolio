function Header(){
    return (
        <div className='header w-full bg-black text-white px-32 md:px-32 pt-10'>
            <div className='header-container flex flex-row gap-4 md:gap-10 items-end justify-end'>
            <div className='resume'>
                <a href="https://docs.google.com/document/d/1mFIFTfVFerzVRF0_SC2MblSrJ5gBSl57/edit?usp=sharing&ouid=112158056507408381785&rtpof=true&sd=true">Resume</a>
            </div>

            <div className='contact'>
                <a href="#contact" className="text-white hover:underline">Contact</a>
            </div>
            </div>
        </div>
    )
}

export default Header;
