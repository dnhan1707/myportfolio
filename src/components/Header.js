function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/70 border-b border-[#1f1d18]">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
                <a href="#top" className="editorial-italic text-white text-2xl md:text-3xl tracking-tight">
                    ntd<span className="text-[#e9c46a]">.</span>
                </a>

                <nav className="flex items-center gap-6 md:gap-10 text-sm">
                    <a href="#work" className="hidden md:inline editorial-body text-[#c8c5bd] hover:text-white transition-colors">Work</a>
                    <a href="#projects" className="hidden md:inline editorial-body text-[#c8c5bd] hover:text-white transition-colors">Projects</a>
                    <a href="#philosophy" className="hidden md:inline editorial-body text-[#c8c5bd] hover:text-white transition-colors">Approach</a>
                    <a
                        href="https://drive.google.com/file/d/1vnsP1pNfWTAUfdOsLnzsUUteQSmlO-Ln/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="mono text-xs uppercase tracking-[0.2em] text-[#8a857a] hover:text-[#e9c46a] transition-colors"
                    >
                        Resume ↗
                    </a>
                    <a
                        href="#contact"
                        className="mono text-xs uppercase tracking-[0.2em] px-4 py-2 border border-[#3a3833] hover:border-[#e9c46a] hover:text-[#e9c46a] text-white transition-colors"
                    >
                        Get in touch
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
