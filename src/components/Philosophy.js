import '../App.css';

const PILLARS = [
    {
        num: '01',
        title: 'Correctness over cleverness',
        body: 'A clever line that breaks at 2 AM is worse than a boring one that survives the quarter. I bias toward code reviewers, type systems, and tests that lie to me less than my own confidence does.',
    },
    {
        num: '02',
        title: 'Production is the spec',
        body: 'Working in dev is a hypothesis. Production is the experiment. I instrument what I ship, watch how it behaves under real load, and fix the gap between assumption and reality — fast.',
    },
    {
        num: '03',
        title: 'Tooling is leverage',
        body: 'I cut a release process from an hour to zero with a Python CLI. I sped up CI by 20% by understanding what Docker was actually doing. Tooling compounds: every hour I invest pays a team back for months.',
    },
    {
        num: '04',
        title: 'Own the whole stack',
        body: 'C++ bridge layers. Java microservices. Go WebSocket hubs. Next.js terminals. The interesting bugs live at the seams — I work where the seams are, not where the comfort is.',
    },
];

function Philosophy() {
    return (
        <section id="philosophy" className="bg-[#0a0a0a] py-24 md:py-40 border-t border-[#1f1d18]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section header */}
                <div className="grid grid-cols-12 gap-8 mb-16 md:mb-24">
                    <div className="col-span-12 md:col-span-4">
                        <span className="eyebrow section-label">{'// 02 — Approach'}</span>
                    </div>
                    <div className="col-span-12 md:col-span-8">
                        <h2 className="editorial-display text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
                            How I think <br />
                            about <span className="editorial-italic text-[#e9c46a]">writing software.</span>
                        </h2>
                    </div>
                </div>

                {/* Lede */}
                <div className="grid grid-cols-12 gap-8 mb-20">
                    <div className="hidden md:block col-span-4" />
                    <div className="col-span-12 md:col-span-7">
                        <p className="editorial-body text-[#c8c5bd] text-xl md:text-2xl leading-relaxed dropcap">
                            The bar for "can write code" is on the floor. Models do it. Bootcamp grads do it.
                            What's rare — what's actually worth hiring for — is engineers who write code
                            that doesn't lie about what it does. Code you can hand to the next person
                            without an apology. Code that keeps working when nobody's looking.
                        </p>
                        <p className="editorial-italic text-[#e9c46a] text-2xl md:text-3xl mt-10 leading-snug">
                            That's the bar I hold myself to.
                        </p>
                    </div>
                </div>

                <div className="rule mb-16" />

                {/* Pillars grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-12 md:gap-y-16">
                    {PILLARS.map((p) => (
                        <div key={p.num} className="group">
                            <div className="flex items-baseline gap-4 mb-4">
                                <span className="mono text-xs text-[#e9c46a]">{p.num}</span>
                                <div className="h-px flex-1 bg-[#2a2823] group-hover:bg-[#e9c46a] transition-colors" />
                            </div>
                            <h3 className="editorial-display text-white text-3xl md:text-4xl mb-4 leading-tight">
                                {p.title}
                            </h3>
                            <p className="editorial-body text-[#9a968c] text-base md:text-lg leading-relaxed">
                                {p.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Philosophy;
