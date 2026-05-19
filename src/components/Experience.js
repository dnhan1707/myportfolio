import mlh_pic from '../pictures/MLH_pic.jpg';
import bbt from '../pictures/bbt.png';
import f5Logo from '../pictures/F5-logo-F5-rgb.svg';
import dassaultLogo from '../pictures/3ds.png';

const ROLES = [
    {
        num: '01',
        status: 'incoming',
        period: 'Summer 2026',
        location: 'San Diego · Infrastructure Engineering',
        company: 'F5 Networks',
        sub: 'Site Reliability Engineering',
        role: 'Software Engineer Intern · Incoming',
        problem: 'An automated log-streaming pipeline at carrier scale: ingest from AWS S3, fan out through Kafka, process with Vector, and land everything in Elasticsearch — without losing a message or paging the on-call.',
        resultLabel: 'The brief',
        result: [
            { kpi: 'S3 → Kafka', text: 'Pull log files from S3 on a schedule (text, JSON, gzip) and push them onto Kafka topics with sane partitioning and fault tolerance.' },
            { kpi: 'Vector',     text: 'Read off Kafka with Vector stream processors; apply transformation, enrichment, and rule-based filtering before egress.' },
            { kpi: 'Egress',     text: 'Fan out filtered logs to customer endpoints over HTTPS and stream the rest into Elasticsearch for indexing + Kibana dashboards.' },
            { kpi: 'Scale',      text: 'Architect for high throughput, partition rebalancing, and minimal downtime during ingestion, processing, or delivery.' },
        ],
        stack: ['AWS S3', 'Apache Kafka', 'Vector', 'Elasticsearch', 'Kibana'],
        logo: f5Logo,
        logoAlt: 'F5 Networks',
        accent: '#e9c46a',
    },
    {
        num: '02',
        status: 'shipped',
        period: 'Dec 2025 — Mar 2026',
        location: 'San Diego · onsite',
        company: 'Dassault Systèmes',
        sub: 'BIOVIA',
        role: 'Software Engineer Intern',
        problem: 'Enterprise scientific software with Fortune 100 clients (P&G) where a single regression ships to thousands of seats — and a single XSS hole ships to a regulated industry.',
        resultLabel: 'What shipped',
        result: [
            { kpi: 'Prod',     text: 'Shipped XSS mitigation work to production for P&G — code that protects real users at real scale.' },
            { kpi: '20%',      text: 'Cut GitLab CI pipeline runtime by optimizing Docker layers and bulk-provisioning test data.' },
            { kpi: '1h',       text: 'Built a Python CLI that automates release branching — saved an hour every release, forever.' },
            { kpi: 'Refactor', text: 'Replaced legacy Spock test scaffolding with direct REST API integrations across the regression suite.' },
        ],
        stack: ['Java', 'Spring Boot', 'Grails', 'Python', 'Docker', 'GitLab CI'],
        logo: dassaultLogo,
        logoAlt: 'Dassault Systèmes',
        accent: '#e9c46a',
    },
    {
        num: '03',
        status: 'shipped',
        period: 'Sep 2024 — Dec 2024',
        location: 'Remote · MLH Fellowship',
        company: 'Meta',
        sub: 'React Native',
        role: 'Software Engineer Intern',
        problem: 'React Native\'s C++ bridge was misreporting accessibility events to Android\'s TalkBack — silently. Apps with millions of DAU were leaving blind users without the right cues.',
        resultLabel: 'What shipped',
        result: [
            { kpi: '150+',     text: 'Component interactions corrected at the C++/Java boundary — TalkBack now hears what React Native says.' },
            { kpi: 'M DAU',    text: 'Fix flows through any RN-on-Android app, touching millions of daily active users.' },
            { kpi: '95%',      text: 'Drove JS coverage from 90 to 95 on the bridge layer; new regressions get caught at PR-time via CI.' },
            { kpi: 'Refactor', text: 'Collapsed duplicated platform-specific keyboard logic into one cross-platform module.' },
        ],
        stack: ['C++', 'Java', 'Kotlin', 'JavaScript', 'Jest', 'GitHub Actions'],
        image: mlh_pic,
        accent: '#e9c46a',
    },
    {
        num: '04',
        status: 'shipped',
        period: 'May 2024 — Aug 2024',
        location: 'Los Angeles · Breakthrough Tech AI',
        company: 'Breakthrough Tech',
        sub: 'AI Fellowship',
        role: 'AI / ML Engineer Intern',
        problem: 'A skin-disease classifier with a 60% precision floor and known bias across skin tones — a model healthcare partners couldn\'t responsibly deploy.',
        resultLabel: 'What shipped',
        result: [
            { kpi: '85%', text: 'Lifted precision from 60 → 85% on a 20K+ image dataset via transfer learning on ResNet-50.' },
            { kpi: '30%', text: 'Reduced false-negative disparity across skin tones with stratified sampling + post-hoc threshold calibration.' },
            { kpi: '4×',  text: 'Throughput gain by converting to TensorRT with INT8 quantization — cheaper deploys, same accuracy.' },
            { kpi: 'OOP', text: 'Wrote a reusable object-oriented augmentation pipeline so the next cohort could iterate, not rebuild.' },
        ],
        stack: ['Python', 'TensorFlow', 'TensorRT', 'Scikit-learn', 'Pandas'],
        image: bbt,
        accent: '#e9c46a',
    },
];

function RoleVisual({ role }) {
    // Photo mode
    if (role.image) {
        return (
            <div className="relative overflow-hidden">
                <img
                    src={role.image}
                    alt={role.company}
                    className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#2a2823] pointer-events-none" />
            </div>
        );
    }

    // Logo mode
    const isIncoming = role.status === 'incoming';
    return (
        <div className="relative aspect-[4/5] bg-gradient-to-br from-[#161410] to-[#0a0a0a] border border-[#2a2823] flex flex-col p-5 md:p-6 overflow-hidden">
            {/* Status eyebrow */}
            <div className="flex items-center gap-2 mb-4">
                <span className={`mono text-xs uppercase tracking-[0.2em] ${isIncoming ? 'text-[#e9c46a]' : 'text-[#8a857a]'}`}>
                    {isIncoming ? '/ Incoming /' : '/ Shipped /'}
                </span>
                {isIncoming && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e9c46a] animate-pulse" />
                )}
            </div>

            {/* Logo plate — light tile so brand colors render correctly */}
            <div className="flex-1 flex items-center justify-center bg-[#f5f3ee] p-6 md:p-10 transition-all duration-500 group-hover:bg-white">
                <img
                    src={role.logo}
                    alt={role.logoAlt}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                />
            </div>

            {/* Bottom location only — logos already carry the name */}
            <div className="mt-4">
                <p className="mono text-xs text-[#8a857a] uppercase tracking-[0.15em]">
                    {role.location}
                </p>
            </div>
        </div>
    );
}

function RoleCard({ role, idx }) {
    const isReversed = idx % 2 === 1;
    const isIncoming = role.status === 'incoming';

    return (
        <article className="group">
            {/* Header row */}
            <div className="flex items-baseline gap-4 mb-8">
                <span className="mono text-xs text-[#e9c46a]">{role.num}</span>
                <div className="h-px flex-1 bg-[#2a2823]" />
                {isIncoming && (
                    <span className="mono text-[10px] uppercase tracking-[0.2em] text-[#e9c46a] border border-[#e9c46a]/40 px-2 py-1">
                        Incoming
                    </span>
                )}
                <span className="mono text-xs uppercase tracking-[0.2em] text-[#8a857a]">
                    {role.period}
                </span>
            </div>

            <div className={`grid grid-cols-12 gap-6 md:gap-10 ${isReversed ? 'md:[direction:rtl]' : ''}`}>
                {/* Visual */}
                <div className="col-span-12 md:col-span-5 [direction:ltr]">
                    <RoleVisual role={role} />
                </div>

                {/* Content */}
                <div className="col-span-12 md:col-span-7 [direction:ltr]">
                    <div className="mb-2">
                        <span className="eyebrow">{role.location}</span>
                    </div>
                    <h3 className="editorial-display text-white text-4xl md:text-5xl leading-tight">
                        {role.company}
                        <span className="editorial-italic text-[#e9c46a]"> · {role.sub}</span>
                    </h3>
                    <p className="mono text-sm text-[#c8c5bd] mt-2">{role.role}</p>

                    {/* The problem */}
                    <div className="mt-8">
                        <span className="eyebrow mb-3 inline-block">
                            {isIncoming ? 'The problem they handed me' : 'The problem'}
                        </span>
                        <p className="editorial-body text-[#c8c5bd] text-base md:text-lg leading-relaxed">
                            {role.problem}
                        </p>
                    </div>

                    {/* What shipped / The brief */}
                    <div className="mt-8">
                        <span className="eyebrow mb-4 inline-block">{role.resultLabel}</span>
                        <ul className="space-y-4 mt-3">
                            {role.result.map((r, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <span className="mono text-xs text-[#e9c46a] mt-1.5 w-20 shrink-0 uppercase tracking-wider">
                                        {r.kpi}
                                    </span>
                                    <span className="editorial-body text-[#c8c5bd] text-base leading-relaxed">
                                        {r.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stack */}
                    <div className="mt-8 pt-6 border-t border-[#1f1d18]">
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            {role.stack.map((s) => (
                                <span key={s} className="mono text-xs text-[#8a857a]">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

function Experience() {
    return (
        <section id="work" className="bg-[#0a0a0a] py-24 md:py-40 border-t border-[#1f1d18]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section header */}
                <div className="grid grid-cols-12 gap-8 mb-20 md:mb-32">
                    <div className="col-span-12 md:col-span-4">
                        <span className="eyebrow section-label">{'// 04 — Work'}</span>
                    </div>
                    <div className="col-span-12 md:col-span-8">
                        <h2 className="editorial-display text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
                            Where I've <br />
                            <span className="editorial-italic text-[#e9c46a]">shown up.</span>
                        </h2>
                        <p className="editorial-body text-[#9a968c] text-lg md:text-xl mt-8 max-w-2xl">
                            Four internships across four very different stacks. One pattern: I show
                            up, find the seams nobody else wants to touch, and leave the system
                            measurably better than I found it.
                        </p>
                    </div>
                </div>

                <div className="space-y-24 md:space-y-40">
                    {ROLES.map((r, idx) => (
                        <RoleCard key={r.num} role={r} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
