import { Link } from 'react-router-dom';
import journeyAi from '../pictures/journeyAi.png';
import voiceAiAssistant from '../pictures/voiceAiAssistantPics/voiceAiCalendar.png';
import codingPlatform from '../pictures/codingPlatform.png';
import heartDiseaseProj from '../pictures/heartDiseaseProj.png';
import kelselyaypic from '../pictures/KelSelYayPics/KSY.png';
import ardenLanding from '../pictures/ardenterminal/landingpage.png';
import { FaArrowRight } from 'react-icons/fa';
import '../project.css';

const FEATURED = {
    num: '01',
    title: 'Arden Terminal',
    tagline: 'The data Wall Street pays $27,000 a year for — built for everyone else.',
    body: 'A Bloomberg-style market terminal, written in team of 2. A Go backend aggregates 50+ REST endpoints across 6 asset classes, with a custom WebSocket hub fanning out real-time data to concurrent clients. The Next.js frontend renders live options chains with Black-Scholes implied volatility computed in the browser.',
    metrics: [
        // { v: '50+', l: 'REST endpoints' },
        // { v: '6',   l: 'asset classes' },
        // { v: 'WS',  l: 'real-time fan-out' },
    ],
    stack: ['Go', 'Fiber', 'Redis', 'Next.js', 'WebSocket'],
    live: 'https://www.ardenterminal.com/',
    github: 'https://github.com/dnhan1707',
    image: ardenLanding,
};

const PROJECTS = [
    {
        title: 'Better Transfer',
        tagline: 'RAG over course catalogs — so transfer credits stop being guesswork.',
        stack: 'Python · FastAPI · Redis · Docker · Vector Search',
        body: 'A RAG system that automates course mapping from unstructured catalog data. Containerized for consistent deploys, tuned for low-latency inference.',
        live: null,
        github: 'https://github.com/dnhan1707',
        image: null,
        external: true,
    },
    {
        title: 'KelSelYay',
        tagline: '7,100 users. 200 rescues. Disaster response that scales.',
        stack: 'React · Next.js · Node.js · AWS S3 · MongoDB',
        body: 'A crisis-relief platform with a 90% lower hosting bill than its predecessor, because the media layer is on S3 instead of a database.',
        live: 'https://www.kelselyay.com/',
        github: 'https://github.com/Kel-Sel-Yay-Team/kelSelYay',
        image: kelselyaypic,
        internalLink: '/kelselyay#kelselyay-intro-section',
    },
    {
        title: 'Real-time Multiplayer Coding',
        tagline: 'LeetCode, but make it competitive.',
        stack: 'TypeScript · Next.js · Node · WebSocket · Judge0 · PostgreSQL',
        body: 'Multiple players race through coding challenges in real time, with code execution sandboxed via Judge0.',
        live: null,
        github: 'https://github.com/dnhan1707/multiplayer-leetcode-platform',
        image: codingPlatform,
        internalLink: '/realtimecodingproject#realtimecoding-intro-section',
    },
    {
        title: 'Journey AI',
        tagline: '337 users planning trips with an LLM as their travel agent.',
        stack: 'JavaScript · React · Node · Firebase · Gemini',
        body: 'A personalized travel-planning product that turns vague intent into a concrete itinerary.',
        live: 'https://www.journey-ai.dev/',
        github: 'https://github.com/dnhan1707/journey-ai',
        image: journeyAi,
        internalLink: '/journeyai#journeyai-intro-section',
    },
    {
        title: 'Voice AI Calendar Assistant',
        tagline: 'Eyes-free scheduling for low-vision users.',
        stack: 'Python · TypeScript · FastAPI · GPT-4 · NLP',
        body: 'A voice-first interface to Google Calendar — built so visually impaired users can manage their schedule without a screen.',
        live: null,
        github: 'https://github.com/dnhan1707/voice-calendar-assistant-backend',
        image: voiceAiAssistant,
        internalLink: '/voiceaiassistant#voiceassistant-intro-section',
    },
    {
        title: 'Heart Disease Detection',
        tagline: '92% accuracy on risk-factor classification.',
        stack: 'Python · Scikit-learn · NumPy · Pandas',
        body: 'Early-intervention model trained on patient risk-factor data — built to be interpretable for clinical use.',
        live: null,
        github: 'https://github.com/dnhan1707/heart_disease_prediction_proj',
        image: heartDiseaseProj,
        internalLink: '/heartDiseaseProj',
    },
];

function FeaturedProject({ p }) {
    return (
        <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="block group relative bg-gradient-to-br from-[#161410] via-[#0e0c08] to-[#0a0a0a] border border-[#2a2823] hover:border-[#e9c46a] transition-colors overflow-hidden"
        >
            {/* Hero screenshot — full bleed top */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-black border-b border-[#2a2823]">
                <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {/* Subtle vignette so text underneath has anchor */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent pointer-events-none" />

                {/* Live indicator pill */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#2a2823]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e9c46a] animate-pulse" />
                    <span className="mono text-[10px] uppercase tracking-[0.2em] text-[#e9c46a]">
                        Live · ardenterminal.com
                    </span>
                </div>

                {/* Featured badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#2a2823]">
                    <span className="mono text-[10px] uppercase tracking-[0.2em] text-[#c8c5bd]">
                        {'// 01 — Featured'}
                    </span>
                </div>
            </div>

            {/* Body */}
            <div className="grid grid-cols-12 gap-0">
                {/* Left: title + metrics */}
                <div className="col-span-12 md:col-span-5 relative p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#2a2823] flex flex-col justify-between">
                    <div>
                        <h3 className="editorial-display text-white text-5xl md:text-7xl leading-[0.9]">
                            Arden<br />
                            <span className="editorial-italic text-[#e9c46a]">Terminal</span>
                        </h3>
                    </div>
                    <div className="mt-10">
                        <div className="grid grid-cols-3 gap-4">
                            {p.metrics.map((m) => (
                                <div key={m.l} className="border-l border-[#2a2823] pl-3">
                                    <div className="editorial-display text-white text-2xl md:text-3xl">{m.v}</div>
                                    <div className="mono text-[10px] uppercase tracking-[0.15em] text-[#8a857a] mt-1">{m.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: narrative */}
                <div className="col-span-12 md:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                        <p className="editorial-italic text-[#e9c46a] text-2xl md:text-3xl leading-snug">
                            {p.tagline}
                        </p>
                        <p className="editorial-body text-[#c8c5bd] text-base md:text-lg leading-relaxed mt-6">
                            {p.body}
                        </p>
                    </div>

                    <div className="mt-10 pt-6 border-t border-[#1f1d18] flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                            {p.stack.map((s) => (
                                <span key={s} className="mono text-xs text-[#8a857a]">{s}</span>
                            ))}
                        </div>
                        <div className="flex gap-5 shrink-0">
                            <span
                                className="mono text-xs uppercase tracking-[0.2em] text-white group-hover:text-[#e9c46a] transition-colors flex items-center gap-2"
                            >
                                Try it live <span className="group-hover:translate-x-1 transition-transform">↗</span>
                            </span>
                            <a
                                href={p.github}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="mono text-xs uppercase tracking-[0.2em] text-[#8a857a] hover:text-[#e9c46a] transition-colors flex items-center gap-2"
                            >
                                GitHub ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

function ProjectCard({ p, num }) {
    const inner = (
        <div className="group relative border border-[#1f1d18] hover:border-[#3a3833] bg-[#0c0c0c] hover:bg-[#100f0c] transition-all p-6 md:p-8 h-full flex flex-col">
            {/* Number + title row */}
            <div className="flex items-baseline gap-3 mb-5">
                <span className="mono text-xs text-[#e9c46a]">{num}</span>
                <div className="h-px flex-1 bg-[#1f1d18]" />
            </div>

            {/* Image */}
            {p.image && (
                <div className="relative overflow-hidden mb-6 aspect-[16/10]">
                    <img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Title + tagline */}
            <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="editorial-display text-white text-2xl md:text-3xl leading-tight">
                    {p.title}
                </h3>
                <FaArrowRight className="text-[#3a3833] group-hover:text-[#e9c46a] group-hover:translate-x-1 transition-all shrink-0" />
            </div>

            <p className="editorial-italic text-[#e9c46a] text-base md:text-lg leading-snug mb-4">
                {p.tagline}
            </p>

            <p className="editorial-body text-[#9a968c] text-sm md:text-base leading-relaxed mb-6 flex-1">
                {p.body}
            </p>

            <div className="pt-4 border-t border-[#1f1d18]">
                <p className="mono text-[11px] uppercase tracking-[0.15em] text-[#7a766c]">
                    {p.stack}
                </p>
                <div className="mt-3 flex gap-5">
                    {p.live && (
                        <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            className="mono text-xs uppercase tracking-[0.18em] text-white hover:text-[#e9c46a] transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Live ↗
                        </a>
                    )}
                    {p.github && (
                        <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="mono text-xs uppercase tracking-[0.18em] text-[#c8c5bd] hover:text-[#e9c46a] transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            GitHub ↗
                        </a>
                    )}
                </div>
            </div>
        </div>
    );

    if (p.external) {
        return inner;
    }
    if (p.internalLink) {
        return <Link to={p.internalLink} className="block h-full">{inner}</Link>;
    }
    return inner;
}

function Projects() {
    return (
        <section id="projects" className="bg-[#0a0a0a] py-24 md:py-40 border-t border-[#1f1d18]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section header */}
                <div className="grid grid-cols-12 gap-8 mb-20 md:mb-28">
                    <div className="col-span-12 md:col-span-4">
                        <span className="eyebrow section-label">{'// 05 — Projects'}</span>
                    </div>
                    <div className="col-span-12 md:col-span-8">
                        <h2 className="editorial-display text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
                            Things I build <br />
                            <span className="editorial-italic text-[#e9c46a]">when nobody's grading.</span>
                        </h2>
                        {/* <p className="editorial-body text-[#9a968c] text-lg md:text-xl mt-8 max-w-2xl">
                            The most honest signal in a portfolio isn't the polished resume bullet —
                            it's what someone chooses to build on a Saturday.
                        </p> */}
                    </div>
                </div>

                {/* Featured project */}
                <FeaturedProject p={FEATURED} />

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1f1d18] mt-px">
                    {PROJECTS.map((p, idx) => (
                        <div key={p.title} className="bg-[#0a0a0a]">
                            <ProjectCard p={p} num={String(idx + 2).padStart(2, '0')} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
