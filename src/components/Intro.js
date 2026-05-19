import my_setup from '../pictures/my_setup.png';
import '../App.css';

function Intro() {
    return (
        <section id="top" className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden pt-24">
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(233,196,106,0.06),_transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(120,90,200,0.05),_transparent_50%)] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-24">

                {/* Top eyebrow row */}
                {/* <div className="flex items-center justify-between mb-12 md:mb-20 fade-in-up">
                    <span className="eyebrow">{'// Portfolio · 2026'}</span>
                    <span className="eyebrow hidden md:inline">San Diego, CA — Available 06.2027</span>
                </div> */}

                {/* Hero grid */}
                <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">

                    {/* Left: thesis & name */}
                    <div className="col-span-12 md:col-span-7">
                        <p className="eyebrow mb-6 fade-in-up">Software Engineer / Builder</p>

                        <h1 className="editorial-display text-white text-[16vw] md:text-[10.5vw] leading-[0.88] fade-in-up">
                            Anyone <br />
                            can code.
                        </h1>
                        <h1 className="editorial-italic text-[#e9c46a] text-[16vw] md:text-[10.5vw] leading-[0.88] mt-2 fade-in-up delay-100">
                            I code
                        </h1>
                        <h1 className="editorial-italic text-[#e9c46a] text-[16vw] md:text-[10.5vw] leading-[0.88] -mt-2 fade-in-up delay-200">
                            correctly.
                        </h1>

                        <div className="mt-10 md:mt-14 max-w-xl fade-in-up delay-300">
                            <p className="editorial-body text-[#c8c5bd] text-lg md:text-xl leading-relaxed">
                                I'm <span className="text-white">Nhan Tri Danh</span> — a software engineer
                                who treats code like infrastructure: tested, instrumented, and built to
                                survive contact with reality. I've shipped fixes to apps with millions of
                                daily users, hardened enterprise systems for Fortune 100 clients, and
                                launched products that real people depend on.
                            </p>
                        </div>

                        {/* CTA row */}
                        <div className="mt-10 flex flex-wrap items-center gap-4 fade-in-up delay-400">
                            <a
                                href="#work"
                                className="group inline-flex items-center gap-3 px-6 py-3 bg-[#e9c46a] text-[#0a0a0a] hover:bg-white transition-colors mono text-xs uppercase tracking-[0.2em]"
                            >
                                See the work
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 px-6 py-3 border border-[#3a3833] hover:border-white text-white mono text-xs uppercase tracking-[0.2em] transition-colors"
                            >
                                Hire me
                            </a>
                        </div>
                    </div>

                    {/* Right: photo card + meta */}
                    <div className="col-span-12 md:col-span-5 md:pl-8">
                        <div className="relative slide-in-left delay-200">
                            <img
                                src={my_setup}
                                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                alt="Nhan Tri Danh"
                            />
                            <div className="absolute -bottom-3 left-3 right-3 h-3 bg-[#e9c46a]/30 blur-md" />
                        </div>

                        {/* Caption-style block under image */}
                        <div className="mt-6 border-l border-[#e9c46a] pl-5 fade-in-up delay-500">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e9c46a] animate-pulse" />
                                <p className="eyebrow text-[#e9c46a]">Next</p>
                            </div>
                            <p className="editorial-italic text-white text-lg leading-snug">
                                SWE Intern @ F5 Networks · Summer 2026
                            </p>
                            <p className="editorial-body text-[#8a857a] text-sm mt-1">
                                SRE · log streaming on Kafka + Elasticsearch
                            </p>
                            <p className="editorial-body text-[#7a766c] text-xs mt-3">
                                B.S. Computer Science · UCSD · GPA 3.96
                            </p>
                        </div>

                        {/* Social row */}
                        <div className="mt-8 flex flex-wrap gap-6 fade-in-up delay-500">
                            <a href="https://github.com/dnhan1707" target="_blank" rel="noreferrer" className="mono text-xs uppercase tracking-[0.2em] text-[#c8c5bd] hover:text-[#e9c46a] transition-colors">
                                GitHub ↗
                            </a>
                            <a href="https://www.linkedin.com/in/nhan-tri-danh-29b922223/" target="_blank" rel="noreferrer" className="mono text-xs uppercase tracking-[0.2em] text-[#c8c5bd] hover:text-[#e9c46a] transition-colors">
                                LinkedIn ↗
                            </a>
                            <a href="mailto:dnhan1707@gmail.com" className="mono text-xs uppercase tracking-[0.2em] text-[#c8c5bd] hover:text-[#e9c46a] transition-colors">
                                Email ↗
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="mt-20 md:mt-28 flex items-center justify-between fade-in-up delay-500">
                    <span className="eyebrow">Scroll for evidence</span>
                    <span className="eyebrow">↓ 01 / 06</span>
                </div>
            </div>
        </section>
    );
}

export default Intro;
