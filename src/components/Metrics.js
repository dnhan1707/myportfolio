import '../App.css';

const METRICS = [
    { value: 'Millions', unit: 'DAU touched',     note: 'Meta · React Native accessibility' },
    { value: '7,100+',   unit: 'users served',    note: 'KelSelYay disaster response' },
    { value: '95%',      unit: 'test coverage',   note: 'Meta · JS bridge layer' },
    { value: '20%',      unit: 'CI runtime cut',  note: 'BIOVIA · GitLab pipeline' },
    { value: '50+',      unit: 'REST endpoints',  note: 'Arden Terminal · Go / Fiber' },
    { value: '85%',      unit: 'model accuracy',  note: 'Skin disease ResNet-50' },
];

function Metrics() {
    return (
        <section className="bg-[#0a0a0a] border-t border-[#1f1d18] py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
                    <div>
                        <span className="eyebrow section-label">{'// 03 — By the numbers'}</span>
                        <h2 className="editorial-display text-white text-4xl md:text-6xl mt-6 leading-tight">
                            Receipts, <span className="editorial-italic text-[#e9c46a]">not promises.</span>
                        </h2>
                    </div>
                    <p className="editorial-body text-[#8a857a] text-sm md:text-base max-w-sm">
                        Every number below ties to code someone else can read,
                        a system someone else can ping, or a user someone else can talk to.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1f1d18]">
                    {METRICS.map((m, idx) => (
                        <div
                            key={idx}
                            className="bg-[#0a0a0a] p-6 md:p-10 group hover:bg-[#111] transition-colors"
                        >
                            <div className="editorial-display text-white text-5xl md:text-7xl leading-none group-hover:text-[#e9c46a] transition-colors">
                                {m.value}
                            </div>
                            <div className="mt-4 mono text-xs uppercase tracking-[0.2em] text-[#c8c5bd]">
                                {m.unit}
                            </div>
                            <div className="mt-2 editorial-body text-sm text-[#7a766c]">
                                {m.note}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Metrics;
