import ServiceTemplate from './ServiceTemplate';

const howItems = [
    { title: 'Staff Augmentation / Extended Team', desc: 'We allow you to supplement your in-house team with resources having critical skill sets needed by you while providing flexibility to scale up or down your teams.' },
    { title: 'Managed Capacity', desc: 'We will provide a pool of skilled resources with diverse skillsets. You can pick the experts you need for your project and scale up and down as per your project/program needs.' },
    { title: 'Global Talent Solutions', desc: 'We will fulfill your needs for resources across global locations for diverse skillsets.' },
];

export default function IntelligentProcessAutomation() {
    return (
        <ServiceTemplate
            title="Intelligent Process Automation"
            whatItIs={[
                'Intelligent process automation (IPA), also sometimes referred to as hyper-automation, is a powerful approach that streamlines and enhances business processes.',
                'It combines the strengths of various technologies to automate tasks in a more intelligent way than traditional Robotic Process Automation (RPA) can achieve on its own.',
            ]}
            whatWeOffer={[
                'We offer a comprehensive suite of IPA offerings designed to help organizations automate and optimize their business processes, leveraging cutting-edge technologies and best-in-class practices.',
                'Partner with us to harness the power of Intelligent Process Automation and drive digital innovation in your organization.',
            ]}
            services={[
                { title: 'Process Discovery and Assessment', description: 'Our experts conduct a thorough assessment of your organization’s existing processes to identify automation opportunities and determine the potential benefits of IPA implementation.' },
                { title: 'Robotic Process Automation (RPA)', description: 'We leverage RPA tools and technologies to automate repetitive, rules-based tasks across your organization, freeing up valuable time for your employees to focus on higher-value activities.' },
                { title: 'Artificial Intelligence (AI) Integration', description: 'Our AI-driven solutions incorporate machine learning, natural language processing, and computer vision to enable intelligent automation of complex and unstructured tasks, such as data extraction, analysis, and decision-making.' },
                { title: 'Process Orchestration and Optimization', description: 'We provide end-to-end process orchestration capabilities, allowing you to design, deploy, and manage automated workflows efficiently. Our experts continuously optimize processes to ensure maximum efficiency and ROI.' },
                { title: 'Cognitive Automation and Self-Learning', description: 'Our IPA solutions are equipped with cognitive capabilities that enable them to learn from experience, adapt to changing conditions, and make autonomous decisions, driving continuous improvement and innovation.' },
                { title: 'Integration with Enterprise Systems', description: 'We seamlessly integrate our IPA solutions with your existing enterprise systems, such as ERP, CRM, and SCM systems, to ensure interoperability and data consistency across your organization.' },
            ]}
            howItems={howItems}
        />
    );
}