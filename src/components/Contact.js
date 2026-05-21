import me from '../pictures/me.jpg';

function Contact() {
    return (
        <section id="contact" className="bg-[#0a0a0a] border-t border-[#1f1d18] py-24 md:py-40">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section header */}
                <div className="mb-16 md:mb-24">
                    <span className="eyebrow section-label">{"// 06 — Let's talk"}</span>
                </div>

                <div className="grid grid-cols-12 gap-8 md:gap-16 items-end">

                    {/* Big CTA */}
                    <div className="col-span-12 md:col-span-8">
                        <h2 className="editorial-display text-white text-6xl md:text-8xl lg:text-9xl leading-[0.9]">
                            Build <br />
                            <span className="editorial-italic text-[#e9c46a]">something</span><br />
                            that lasts.
                        </h2>
                        <p className="editorial-body text-[#9a968c] text-lg md:text-xl mt-10 max-w-xl leading-relaxed">
                            I'm finishing my B.S. in Computer Science at UC San Diego (June 2027),
                            and I'm looking for teams that take craft seriously. If that's you,
                            let's talk.
                        </p>

                        {/* Direct contact */}
                        <div className="mt-12 space-y-4">
                            <a
                                href="mailto:dnhan1707@gmail.com"
                                className="inline-flex items-baseline gap-4 group"
                            >
                                <span className="eyebrow">Email</span>
                                <span className="editorial-italic text-white text-2xl md:text-4xl group-hover:text-[#e9c46a] transition-colors link-underline">
                                    dnhan1707@gmail.com
                                </span>
                            </a>
                            <br />
                            <a
                                href="https://www.linkedin.com/in/nhan-tri-danh-29b922223/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-baseline gap-4 group"
                            >
                                <span className="eyebrow">LinkedIn</span>
                                <span className="editorial-italic text-white text-2xl md:text-4xl group-hover:text-[#e9c46a] transition-colors link-underline">
                                    nhan-tri-danh
                                </span>
                            </a>
                            <br />
                            <a
                                href="https://github.com/dnhan1707"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-baseline gap-4 group"
                            >
                                <span className="eyebrow">GitHub</span>
                                <span className="editorial-italic text-white text-2xl md:text-4xl group-hover:text-[#e9c46a] transition-colors link-underline">
                                    dnhan1707
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right column: portrait + sign-off */}
                    <div className="col-span-12 md:col-span-4">
                        <div className="relative">
                            <img
                                src={me}
                                alt="Nhan Tri Danh"
                                className="w-full object-cover"
                            />
                            <div className="absolute -bottom-3 left-3 right-3 h-3 bg-[#e9c46a]/30 blur-md" />
                        </div>
                        <div className="mt-6 border-l border-[#2a2823] pl-5">
                            <p className="eyebrow mb-2">Signed</p>
                            <p className="editorial-italic text-white text-2xl leading-tight">
                                Nhan Tri Danh
                            </p>
                            <p className="editorial-body text-[#8a857a] text-sm mt-1">
                                San Diego · 2026
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer rule */}
                <div className="mt-24 md:mt-32 pt-8 border-t border-[#1f1d18] flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="mono text-xs uppercase tracking-[0.2em] text-[#7a766c]">
                        © 2026 Nhan Tri Danh — danhswe.com
                    </span>
                    {/* <span className="mono text-xs uppercase tracking-[0.2em] text-[#7a766c]">
                        Designed & built in React + Tailwind
                    </span> */}
                </div>
            </div>
        </section>
    );
}

export default Contact;
