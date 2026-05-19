import '../App.css';
import f5Logo from '../pictures/F5-logo-F5-rgb.svg';
import dassaultIcon from '../pictures/dassault.png';
import metaLogo from '../pictures/meta.png';
import procterLogo from '../pictures/procter.svg';

/* Two static rows on the site's dark background.
   Row 1: image logos for the companies with brand assets.
   Row 2: typographic wordmarks for institutions/programs. */

const ROW_ONE = [
    { src: f5Logo,       alt: 'F5 Networks',        label: 'F5 Networks',       height: 56 },
    { src: metaLogo,     alt: 'Meta',               label: 'Meta',              height: 56 },
    { src: dassaultIcon, alt: 'Dassault Systèmes',  label: 'Dassault Systèmes', height: 60, stripWhite: true },
    { src: procterLogo,  alt: 'Procter & Gamble',   label: 'Procter & Gamble',  height: 56 },
];

const ROW_TWO = [
    { label: 'UC San Diego',          style: 'serif-ucsd' },
    { label: 'Breakthrough Tech AI',  style: 'sans-bt' },
    { label: 'MLH Fellowship',        style: 'mono-mlh' },
    { label: 'CodePath',              style: 'sans-cp' },
];

const TONE = '#c8c5bd';

function ImageItem({ item }) {
    const stripStyle = item.stripWhite
        ? { filter: 'invert(1) hue-rotate(180deg)', mixBlendMode: 'screen' }
        : {};

    return (
        <div className="flex flex-col items-center gap-3 px-4">
            <img
                src={item.src}
                alt={item.alt}
                style={{ height: `${item.height}px`, ...stripStyle }}
                className="w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
            {item.label && (
                <span
                    style={{ color: '#8a857a' }}
                    className="mono text-[10px] uppercase tracking-[0.22em]"
                >
                    {item.label}
                </span>
            )}
        </div>
    );
}

function Wordmark({ label, style }) {
    switch (style) {
        case 'serif-ucsd':
            return (
                <span
                    style={{ color: TONE, fontFamily: "'Instrument Serif', serif" }}
                    className="text-2xl md:text-3xl tracking-wide border-b border-current pb-1"
                >
                    {label}
                </span>
            );
        case 'sans-bt':
            return (
                <span
                    style={{ color: TONE }}
                    className="text-xl md:text-2xl font-semibold uppercase tracking-[0.18em] text-center"
                >
                    {label}
                </span>
            );
        case 'mono-mlh':
            return (
                <span
                    style={{ color: TONE, fontFamily: "'JetBrains Mono', monospace" }}
                    className="text-lg md:text-xl uppercase tracking-[0.2em]"
                >
                    {label}
                </span>
            );
        case 'sans-cp':
            return (
                <span
                    style={{ color: TONE }}
                    className="text-2xl md:text-3xl font-bold tracking-tight"
                >
                    {label}
                </span>
            );
        default:
            return (
                <span style={{ color: TONE }} className="text-2xl">
                    {label}
                </span>
            );
    }
}

function LogoMarquee() {
    return (
        <section className="bg-[#0a0a0a] py-16 md:py-24 border-t border-[#1f1d18]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-12 md:mb-16">
                    <span className="eyebrow section-label">
                        {'// Trusted environments'}
                    </span>
                    <span className="mono text-xs uppercase tracking-[0.2em] text-[#7a766c]">
                        Teams &amp; institutions that handed me production keys
                    </span>
                </div>

                {/* Row 1 — image logos */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 items-center">
                    {ROW_ONE.map((item) => (
                        <div
                            key={item.alt}
                            className="flex items-center justify-center min-h-[6rem]"
                        >
                            <ImageItem item={item} />
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="rule-thin my-12 md:my-16" />

                {/* Row 2 — typographic */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 items-center">
                    {ROW_TWO.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center justify-center min-h-[5rem] px-2"
                        >
                            <Wordmark label={item.label} style={item.style} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LogoMarquee;
