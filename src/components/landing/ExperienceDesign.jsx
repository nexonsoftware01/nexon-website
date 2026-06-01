import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ICONS = {
    augment: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="7" r="4" />
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        </svg>
    ),
    capacity: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 20h20L12 2z" />
            <circle cx="12" cy="15" r="2" />
        </svg>
    ),
    global: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
        </svg>
    ),
};

const SERVICES = [
    {
        title: 'User Research and Insights',
        description:
            'Conducting in-depth research and analysis to understand user behaviors, needs, and pain points, informing the design process and driving informed decision-making.',
    },
    {
        title: 'UX/UI Design',
        description:
            'Crafting visually stunning and intuitive user interfaces (UI) and user experiences (UX) that prioritize usability, accessibility, and aesthetics, resulting in engaging and user-friendly digital products.',
    },
    {
        title: 'Prototyping and Wireframing',
        description:
            'Rapid prototyping and wireframing to visualize concepts, iterate on designs, and validate ideas early in the development process, accelerating time to market and minimizing risk.',
    },
    {
        title: 'Interaction Design (IxD)',
        description:
            'Designing meaningful and interactive experiences that guide users through digital journeys, anticipate their actions, and evoke emotional connections, enhancing engagement and satisfaction.',
    },
    {
        title: 'Responsive Design',
        description:
            'Creating responsive and adaptive designs that seamlessly adapt to different devices, screen sizes, and resolutions, ensuring consistent and optimal experiences across platforms.',
    },
    {
        title: 'Accessibility and Inclusive Design',
        description:
            'Prioritizing accessibility and inclusive design principles to ensure that digital experiences are usable and enjoyable for all users, regardless of their abilities or limitations.',
    },
];

function ServiceItem({ title, description, isOpen, toggle }) {
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={toggle}
                className="w-full py-4 px-4 flex items-center justify-between gap-3 text-left transition-colors hover:bg-gray-50"
            >
                <span
                    className="text-sm font-semibold transition-colors"
                    style={{ color: isOpen ? 'var(--color-steel)' : '#111827' }}
                >
                    {title}
                </span>

                <span
                    className="text-[#d63e4e] shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7-7m0 0L5 14m7-7v12" />
                    </svg>
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden bg-gray-50"
                    >
                        <div className="px-8 py-4">
                            <p style={{ color: '#4b5563' }} className="text-sm leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function ServiceCard({ icon, title, desc }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:translate-y-[-4px]"
            style={{ borderColor: 'rgba(64, 98, 123, 0.18)' }}
        >
            <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mb-3"
                style={{
                    backgroundColor: 'rgba(64, 98, 123, 0.08)',
                    color: 'var(--color-steel)',
                }}
            >
                {icon}
            </div>

            <h4 className="text-[15px] font-semibold mb-2" style={{ color: '#111827' }}>
                {title}
            </h4>

            <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                {desc}
            </p>
        </motion.div>
    );
}

export default function ExperienceDesign() {
    const [openIdx, setOpenIdx] = useState(0);

    return (
        <section className="py-20 lg:py-14 px-5 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2 font-display" style={{ color: '#111827' }}>
                        Experience Design
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.4 }}
                        className="lg:col-span-1"
                    >
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4" style={{ color: '#111827' }}>What It Is</h3>
                            <p style={{ color: '#4b5563' }} className="leading-relaxed text-sm">
                                Experience design (XD) is all about crafting meaningful connections between people and products,
                                services, or even events. It’s a broad field that goes beyond just the visual look and feel.
                            </p>
                            <p style={{ color: '#4b5563' }} className="leading-relaxed text-sm mt-4">
                                XD plays a vital role in shaping how users perceive and interact with products, services, and brands.
                                By focusing on user needs and crafting positive interactions at every touchpoint, experience designers
                                can help businesses build brand loyalty and achieve success.
                            </p>
                        </div>

                        <div className="border-t border-gray-200 pt-8">
                            <h3 className="text-lg font-semibold mb-4" style={{ color: '#111827' }}>What We Offer</h3>
                            <p style={{ color: '#4b5563' }} className="leading-relaxed text-sm">
                                Our XD offerings combine cutting-edge design principles, human-centered methodologies, and advanced
                                technologies to craft seamless and impactful experiences across digital touchpoints.
                            </p>
                            <p style={{ color: '#4b5563' }} className="leading-relaxed text-sm mt-4">
                                From web and mobile applications to e-commerce platforms, IoT devices, and beyond, we deliver
                                end-to-end XD solutions that captivate audiences and elevate brands.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.4, delay: 0.08 }}
                        className="lg:col-span-2"
                    >
                        <div className="mb-12">
                            <div
                                className="inline-block px-3 py-1.5 rounded-full mb-4"
                                style={{
                                    backgroundColor: 'rgba(214, 62, 78, 0.08)',
                                    border: '1px solid rgba(214, 62, 78, 0.2)',
                                }}
                            >
                                <span className="text-xs font-semibold tracking-wide" style={{ color: '#d63e4e' }}>
                                    EXPERIENCE DESIGN
                                </span>
                            </div>

                            <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                                {SERVICES.map((service, i) => (
                                    <ServiceItem
                                        key={service.title}
                                        title={service.title}
                                        description={service.description}
                                        isOpen={openIdx === i}
                                        toggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-6" style={{ color: '#111827' }}>How We Do It</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <ServiceCard
                                    icon={ICONS.augment}
                                    title="Staff Augmentation / Extended Team"
                                    desc="We allow you to supplement your in-house team with resources having critical skill sets needed by you while providing flexibility to scale up or down."
                                />

                                <ServiceCard
                                    icon={ICONS.capacity}
                                    title="Managed Capacity"
                                    desc="We provide a pool of skilled resources with diverse skillsets. You can pick the experts you need for your project and scale up or down."
                                />

                                <ServiceCard
                                    icon={ICONS.global}
                                    title="Global Talent Solutions"
                                    desc="We fulfill your needs for resources across global locations for diverse skillsets."
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}