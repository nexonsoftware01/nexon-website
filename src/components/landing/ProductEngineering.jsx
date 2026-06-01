import ServiceTemplate from './ServiceTemplate';

export default function ProductEngineering() {
    return (
        <ServiceTemplate
            title="Product Engineering"
            badge="Product Engineering"
            whatItIs={[
                'Product engineering is the process of bringing a product idea to life, overseeing its entire lifecycle from conception to end-of-life.',
            ]}
            whatWeOffer={[
                'In the fast-paced world of technology, bringing innovative products to market quickly and efficiently is essential.',
                'We offer Product Engineering services to help organizations conceptualize, design, develop, and launch products.',
            ]}
            services={[
                { title: 'Product Strategy and Consulting', description: 'Our experts collaborate with your team to define product vision, identify opportunities, and develop a roadmap for success.' },
                { title: 'Product Design and UX/UI Development', description: 'We create intuitive, user-centric designs and engaging user experiences.' },
                { title: 'Product Development and Engineering', description: 'Our engineers use modern technologies, agile methods, and DevOps practices to build scalable products.' },
                { title: 'Prototype and MVP Development', description: 'We rapidly prototype and develop MVPs to validate product concepts and gather feedback.' },
                { title: 'Product Testing and Quality Assurance', description: 'We use testing and QA processes to ensure reliability, performance, and security.' },
                { title: 'Product Launch and Go-to-Market Support', description: 'We support product launch, go-to-market strategies, and adoption campaigns.' },
            ]}
        />
    );
}