import ServiceTemplate from './ServiceTemplate';

export default function CloudEngineering() {
    return (
        <ServiceTemplate
            title="Cloud Engineering"
            badge="Cloud Engineering"
            whatItIs={[
                'In today’s digital landscape, harnessing the power of the cloud is essential for organizations seeking agility, scalability, and innovation.',
                'Cloud engineering is the practice of designing, building, and maintaining systems that run on the cloud.',
            ]}
            whatWeOffer={[
                'Our Cloud Services portfolio encompasses a wide range of solutions tailored to meet the diverse needs and objectives of each client.',
                'From cloud migration and infrastructure management to application development, data analytics, and beyond, we provide end-to-end cloud solutions.',
            ]}
            services={[
                { title: 'Cloud Strategy and Consulting', description: 'Providing strategic guidance and advisory services to help organizations define their cloud vision, assess readiness, and develop a roadmap for successful cloud adoption and migration.' },
                { title: 'Cloud Migration and Modernization', description: 'Assisting organizations in migrating their existing workloads, applications, and infrastructure to the cloud.' },
                { title: 'Cloud Infrastructure Management', description: 'Designing, deploying, and managing cloud infrastructure environments, including compute, storage, networking, and security services.' },
                { title: 'Cloud Application Development', description: 'Building cloud-native applications and solutions that leverage AWS, Azure, and Google Cloud.' },
                { title: 'Data Analytics and AI/ML on the Cloud', description: 'Harnessing cloud-based data analytics and AI/ML services to derive actionable insights.' },
                { title: 'Cloud Security and Compliance', description: 'Implementing robust security controls, encryption, and compliance measures to protect data and applications in the cloud.' },
            ]}
        />
    );
}