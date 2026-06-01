import { useEffect, useState } from 'react';
import Header from './Header';
import TechStaffing from './TechStaffing';
import DigitalCreativePress from './DigitalCreativePress';
import ScientificClinical from './ScientificClinical';
import ProfessionalStaffing from './ProfessionalStaffing';
import IndustrySpecializedStaffing from './IndustrySpecializedStaffing';
import PartnershipMSP from './PartnershipMSP';
import Footer from './Footer';

const STAFFING_CATEGORIES = {
    'technology-staffing': {
        title: 'Technology Staffing',
        description: 'Expert IT staffing solutions across all technology domains',
    },
    'digital-creative': {
        title: 'Digital & Creative',
        description: 'Creative professionals for digital transformation',
    },
    'scientific-clinical': {
        title: 'Scientific & Clinical',
        description: 'Scientific and clinical staffing expertise',
    },
    'professional-staffing': {
        title: 'Professional Staffing',
        description: 'Professional and business staffing solutions',
    },
    'industry-specialized': {
        title: 'Industry Specialized Staffing',
        description: 'Industry-specific staffing for specialized needs',
    },
    'partnership-msp': {
        title: 'Partnership with MSP/VMS',
        description: 'Strategic partnerships with MSP and VMS providers',
    },
};

export default function StaffingServices() {
    const [category, setCategory] = useState(() => new URLSearchParams(window.location.search).get('category') || 'technology-staffing');
    const categoryData = STAFFING_CATEGORIES[category] || STAFFING_CATEGORIES['technology-staffing'];

    useEffect(() => {
        const onPopstate = () => {
            const nextCategory = new URLSearchParams(window.location.search).get('category') || 'technology-staffing';
            setCategory(nextCategory);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        window.addEventListener('popstate', onPopstate);
        return () => window.removeEventListener('popstate', onPopstate);
    }, []);

    const handleCategoryClick = (slug) => {
        if (slug === category) return;
        const url = `/staffing?category=${slug}`;
        window.history.pushState({}, '', url);
        setCategory(slug);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Header onCtaClick={() => { }} />
            <div className='mt-20'></div>

            <section className='relative py-0'>
                <div className='max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10'>
                    <div className='grid grid-cols-12 gap-8 items-center'>
                        <div className='col-span-12 lg:col-span-7'>
                            <p className='eyebrow mb-3'>Staffing Services</p>
                            <h1 className='text-[40px] sm:text-[48px] md:text-[56px] font-semibold tracking-[-0.03em]' style={{ color: 'var(--color-ink)' }}>
                                Staffing Services
                            </h1>
                            <p className='mt-5 max-w-xl text-[16px] leading-[1.75]' style={{ color: 'var(--color-muted)' }}>
                                {categoryData.description}
                            </p>
                        </div>
                        <div className='col-span-12 lg:col-span-5'>
                            <div className='relative w-full max-w-[320px] mx-auto rounded-[30px] border border-[rgba(15,23,42,0.08)] bg-[rgba(255,255,255,0.95)] p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.25)]'>
                                <div className='grid grid-cols-2 gap-3'>
                                    <div className='h-20 rounded-[24px] bg-[rgba(15,23,42,0.05)]' />
                                    <div className='h-20 rounded-[24px] bg-[rgba(15,23,42,0.12)] flex items-center justify-center'>
                                        <div className='w-10 h-10 rounded-full bg-[rgba(15,23,42,0.16)]' />
                                    </div>
                                    <div className='h-20 rounded-[24px] bg-[rgba(15,23,42,0.12)] flex items-center justify-center'>
                                        <div className='w-14 h-3 rounded-full bg-[rgba(15,23,42,0.16)]' />
                                    </div>
                                    <div className='h-20 rounded-[24px] bg-[rgba(15,23,42,0.05)] flex items-center justify-center'>
                                        <div className='w-12 h-12 rounded-full border border-[rgba(15,23,42,0.12)]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className='mt-6 overflow-x-auto'>
                        <div className='flex flex-wrap gap-3'>
                            {Object.entries(STAFFING_CATEGORIES).map(([slug, item]) => (
                                <button
                                    key={slug}
                                    type='button'
                                    onClick={() => handleCategoryClick(slug)}
                                    className={`text-sm font-semibold px-4 py-3 rounded-full transition-all cursor-pointer ${slug === category ? 'bg-[var(--color-steel)] text-white shadow-[0_14px_40px_-22px_rgba(64,98,123,0.25)]' : 'bg-[var(--color-bg-soft)] text-[var(--color-ink)] hover:bg-[var(--color-steel-2)]'} ${slug === category ? 'border-b-4 border-[var(--color-steel)]' : 'border border-transparent'}`}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>
            </section>

            {category === 'technology-staffing' && <TechStaffing />}
            {category === 'digital-creative' && <DigitalCreativePress />}
            {category === 'scientific-clinical' && <ScientificClinical />}
            {category === 'professional-staffing' && <ProfessionalStaffing />}
            {category === 'industry-specialized' && <IndustrySpecializedStaffing />}
            {category === 'partnership-msp' && <PartnershipMSP />}
            <Footer />
        </>
    );
}
