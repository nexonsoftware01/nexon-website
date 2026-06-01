import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

const ICONS = {
    augment: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="3" />
            <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
        </svg>
    ),
    capacity: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3L2 21h20L12 3z" />
            <circle cx="12" cy="16" r="2" />
        </svg>
    ),
    global: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </svg>
    ),
    fixed: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </svg>
    ),
};

const DEFAULT_HOW_ITEMS = [
    {
        icon: 'augment',
        title: 'Staff Augmentation / Extended Team',
        desc: 'We allow you to supplement your in-house team with resources having critical skill sets needed by you.',
    },
    {
        icon: 'capacity',
        title: 'Managed Capacity',
        desc: 'We provide a pool of skilled resources with diverse skillsets. You can pick the experts you need for your project.',
    },
    {
        icon: 'global',
        title: 'Global Talent Solutions',
        desc: 'We fulfill your needs for resources across global locations for diverse skillsets.',
    },
    {
        icon: 'fixed',
        title: 'Fixed Price',
        desc: 'Just tell us what needs to be achieved, and we will deliver on a pre-agreed price and schedule.',
    },
];

function ServiceItem({ id, title, description, isOpen, toggle, dataServiceSlug }) {
    return (
        <div id={id} data-service-slug={dataServiceSlug} className="border-b border-gray-200 last:border-b-0" style={{ scrollMarginTop: '110px' }}>
            <button
                onClick={toggle}
                className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-gray-50"
            >
                <span className="text-sm font-semibold" style={{ color: '#06152b' }}>
                    {title}
                </span>
                <span style={{ color: 'var(--color-steel-3)' }}>{isOpen ? '⌃' : '⌄'}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50"
                    >
                        <p className="px-6 py-4 text-sm leading-7 whitespace-pre-line" style={{ color: '#41516a' }}>
                            {description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function HowCard({ icon, title, desc }) {
    return (
        <div className="border border-gray-200 rounded-md bg-white p-5 min-h-[250px]">
            <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(61, 116, 155, 0.08)', color: 'var(--color-steel-3)' }}
            >
                {ICONS[icon]}
            </div>

            <h4 className="text-sm font-bold leading-6 mb-3" style={{ color: '#06152b' }}>
                {title}
            </h4>

            <p className="text-sm leading-7" style={{ color: '#41516a' }}>
                {desc}
            </p>
        </div>
    );
}

export default function ServiceTemplate({ title, badge, whatItIs, whatWeOffer, services }) {
    const [openIdx, setOpenIdx] = useState(0);
    const [activeService, setActiveService] = useState(services.length ? slugify(services[0].title) : '');

    useEffect(() => {
        setActiveService(services.length ? slugify(services[0].title) : '');
    }, [services]);

    const scrollToService = (targetId, serviceSlug, index) => {
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveService(serviceSlug);
            setOpenIdx(index);
        }
    };

    return (
        <section className="bg-white px-5 sm:px-8 py-14">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    {/* <p className="eyebrow mb-3 uppercase tracking-[0.24em] text-[12px] font-semibold" style={{ color: '#3d4c67' }}>
                        IT Solutions
                    </p> */}
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-display" style={{ color: '#06152b' }}>
                        {title}
                    </h1>
                    {/* <p className="max-w-3xl text-base leading-7 mb-6" style={{ color: '#4b5563' }}>
                        Quickly move to the IT Solutions capability you need from the services below.
                    </p> */}
                    {/* <div className="flex flex-wrap gap-3">
                        {services.map((service, index) => {
                            const serviceSlug = slugify(service.title);
                            const targetId = `service-${serviceSlug}`;
                            const isActive = serviceSlug === activeService;
                            return (
                                <button
                                    key={service.title}
                                    type="button"
                                    onClick={() => scrollToService(targetId, serviceSlug, index)}
                                    className={`text-sm font-semibold px-4 py-3 rounded-full transition-all cursor-pointer ${isActive ? 'bg-[var(--color-steel)] text-white shadow-[0_14px_40px_-22px_rgba(64,98,123,0.25)] border-b-4 border-[var(--color-steel)]' : 'bg-[var(--color-bg-soft)] text-[var(--color-ink)] hover:bg-[var(--color-steel-2)] border border-transparent'}`}
                                >
                                    {service.title}
                                </button>
                            );
                        })}
                    </div> */}
                </div>

                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                    <div>
                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-5">What It Is</h3>
                            {whatItIs.map((text, i) => (
                                <p key={i} className="text-sm leading-7 mb-4" style={{ color: '#41516a' }}>
                                    {text}
                                </p>
                            ))}
                        </div>

                        <div className="border-t border-gray-200 pt-8">
                            <h3 className="text-lg font-bold mb-5">What We Offer</h3>
                            {whatWeOffer.map((text, i) => (
                                <p key={i} className="text-sm leading-7 mb-4" style={{ color: '#41516a' }}>
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="mb-12">
                            <div
                                className="inline-block px-4 py-2 rounded-full mb-4"
                                style={{
                                    backgroundColor: 'rgba(61, 116, 155, 0.08)',
                                    border: '1px solid var(--color-steel-2)',
                                }}
                            >
                                <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--color-steel-3)' }}>
                                    {badge || title}
                                </span>
                            </div>

                            <div className="border border-gray-200 rounded-md overflow-hidden bg-gray-50">
                                {services.map((service, i) => {
                                    const serviceSlug = slugify(service.title);
                                    const id = `service-${serviceSlug}`;
                                    return (
                                        <ServiceItem
                                            id={id}
                                            key={service.title}
                                            dataServiceSlug={serviceSlug}
                                            {...service}
                                            isOpen={openIdx === i}
                                            toggle={() => {
                                                setOpenIdx(openIdx === i ? -1 : i);
                                                setActiveService(serviceSlug);
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <h3 className="text-lg font-bold mb-6">How We Do It</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                            {DEFAULT_HOW_ITEMS.map((item) => (
                                <HowCard key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}