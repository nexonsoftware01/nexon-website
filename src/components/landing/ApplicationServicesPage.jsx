import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ServiceTemplate from './ServiceTemplate';

const SERVICE_PAGES = {
    'application-services': {
        title: 'Application Services',
        badge: 'Application Services',
        whatItIs: [
            'In today’s digital world, applications are the engines that drive customer engagement, operational efficiency, and growth.',
            'Our Application Services practice supports the full lifecycle of software delivery, from ideation and architecture to launch, maintenance, and optimization.',
        ],
        whatWeOffer: [
            'We deliver end-to-end application development, modernization, integration, and support services tailored to your business objectives.',
            'Our teams build resilient, scalable solutions using modern frameworks, cloud-native design, and best-in-class automation.',
        ],
        services: [
            { title: 'Custom Application Development', description: 'Design and develop tailor-made applications that solve complex business problems and help teams move faster.' },
            { title: 'Application Modernization', description: 'Transform legacy systems into modern, cloud-ready applications with improved performance and maintainability.' },
            { title: 'Application Integration', description: 'Connect systems, services, and data sources to deliver seamless workflows and better operational visibility.' },
            { title: 'Mobile Application Development', description: 'Build native and cross-platform mobile apps that deliver great experiences for customers and employees.' },
            { title: 'Application Support & Optimization', description: 'Provide ongoing support, monitoring, and continuous improvements to keep applications secure and performing well.' },
        ],
    },
    'ai-ml-solutions': {
        title: 'AI / ML Solutions',
        badge: 'AI / ML',
        whatItIs: [
            'AI and machine learning turn data into predictive intelligence, automations, and smarter decision-making.',
            'We build intelligent systems that learn from behavior, identify patterns, and deliver actionable recommendations.',
        ],
        whatWeOffer: [
            'Custom ML model development, production-ready deployment, and managed analytics services.',
            'Solutions for predictive analytics, computer vision, natural language processing, and recommendation engines.',
        ],
        services: [
            { title: 'AI Strategy & Roadmap', description: 'Define the right AI and ML opportunities for your business with a practical roadmap and measurable outcomes.' },
            { title: 'Machine Learning Model Development', description: 'Build and validate models for classification, regression, forecasting, and anomaly detection.' },
            { title: 'Computer Vision Solutions', description: 'Deliver image and video analysis, object detection, and automation for visual workflows.' },
            { title: 'Natural Language Processing', description: 'Build chatbots, text analytics, content generation, and NLP-powered automation.' },
            { title: 'AI Operations', description: 'Deploy and monitor models in production with versioning, retraining, and observability.' },
            { title: 'Predictive Analytics', description: 'Use data science and ML to forecast demand, reduce churn, and improve planning.' },
        ],
    },
    'data-analyst': {
        title: 'Data Analytics & Insights',
        badge: 'Data Analytics',
        whatItIs: [
            'Data analytics transforms raw information into business insights, dashboards, and decisions you can act on.',
            'Our analytics work helps turn complex data into clarity, alignment, and measurable impact.',
        ],
        whatWeOffer: [
            'Advanced analytics, BI, reporting, and visualization for every team in your organization.',
            'Actionable dashboards, analytics automation, and data storytelling that supports fast decisions.',
        ],
        services: [
            { title: 'Business Intelligence & Reporting', description: 'Design and deliver interactive dashboards and reports that surface the most important metrics for your business.' },
            { title: 'Self-Service Analytics', description: 'Empower teams with easy-to-use analytics tools and curated data models for fast insights.' },
            { title: 'Data Visualization', description: 'Transform complex trends into clear, visual narratives that improve alignment and action.' },
            { title: 'Analytics Automation', description: 'Automate reporting pipelines, alerts, and data refreshes so stakeholders always have current insights.' },
            { title: 'Performance Measurement', description: 'Define KPIs, scorecards, and measurement frameworks that help your organization stay on target.' },
            { title: 'Data Quality & Governance', description: 'Ensure analytics outputs are built on trusted data with governance, monitoring, and validation.' },
        ],
    },
    'generative-ai': {
        title: 'Generative AI',
        badge: 'Generative AI',
        whatItIs: [
            'Generative AI creates content, code, and workflows from prompts to accelerate productivity and creativity.',
            'We help organizations apply generative models safely to marketing, automation, knowledge work, and internal operations.',
        ],
        whatWeOffer: [
            'Prompt engineering, custom generative solutions, and integration with your existing systems.',
            'Use cases for content creation, intelligent automation, knowledge assistants, and process acceleration.',
        ],
        services: [
            { title: 'Prompt Design & Refinement', description: 'Craft high-value prompts and templates that deliver reliable, business-appropriate output.' },
            { title: 'Content Automation', description: 'Generate marketing copy, product descriptions, reports, and document summaries at scale.' },
            { title: 'Knowledge Assistants', description: 'Build internal AI assistants that surface knowledge, support employees, and reduce friction.' },
            { title: 'Workflow Automation', description: 'Combine generative AI with RPA and integrations to automate repetitive business processes.' },
            { title: 'Custom LLM Solutions', description: 'Deploy tailored language models for search, support, analytics, and conversational experiences.' },
            { title: 'Quality Assurance & Safety', description: 'Implement guardrails, validation, and review processes to ensure trusted generative outputs.' },
        ],
    },
    'data-engineer': {
        title: 'Data Engineering',
        badge: 'Data Engineering',
        whatItIs: [
            'Data engineering builds the pipelines and platforms that make data reliable, accessible, and usable.',
            'We create resilient architectures that move data from sources into analytics, reporting, and machine learning.',
        ],
        whatWeOffer: [
            'ETL/ELT, modern data warehouses, streaming pipelines, and governance frameworks for enterprise data.',
            'Scalable data architectures that support analytics, AI, and business operations across the organization.',
        ],
        services: [
            { title: 'Data Pipeline Design', description: 'Build robust ingestion and transformation pipelines for structured and unstructured data.' },
            { title: 'Modern Data Warehousing', description: 'Design cloud-native data warehouses and lakehouses for analytics and reporting.' },
            { title: 'Data Architecture', description: 'Define data models, storage patterns, and integration strategies for long-term success.' },
            { title: 'Streaming & Real-Time Integration', description: 'Implement real-time data workflows for faster insights and automation.' },
            { title: 'Data Governance & Quality', description: 'Establish data standards, cataloging, monitoring, and validation across pipelines.' },
            { title: 'BI & Analytics Enablement', description: 'Support analytics teams with curated datasets, semantic layers, and data products.' },
        ],
    },
    'cloud-computing': {
        title: 'Cloud Computing',
        badge: 'Cloud Computing',
        whatItIs: [
            'Cloud computing delivers scalable infrastructure, managed services, and resilient applications in the cloud.',
            'We help organizations move faster by designing, building, and operating cloud-native technology stacks.',
        ],
        whatWeOffer: [
            'Cloud strategy, migration, infrastructure automation, and managed operations across AWS, Azure, and Google Cloud.',
            'Secure, cost-effective cloud platforms that support modern apps, data workloads, and hybrid deployments.',
        ],
        services: [
            { title: 'Cloud Strategy & Migration', description: 'Plan and execute cloud migrations with minimal disruption and measurable ROI.' },
            { title: 'Infrastructure as Code', description: 'Build repeatable cloud platforms with IaC, automation, and policy-driven infrastructure.' },
            { title: 'Cloud Native Applications', description: 'Develop scalable apps using microservices, containers, and serverless technologies.' },
            { title: 'Cloud Security & Compliance', description: 'Implement secure cloud designs with identity, governance, encryption, and monitoring.' },
            { title: 'Cost Optimization', description: 'Optimize cloud spend through architecture changes, automation, and ongoing governance.' },
            { title: 'Managed Cloud Operations', description: 'Provide ongoing platform support, incident response, and continuous improvement.' },
        ],
    },
    'it-staffing-recruitment': {
        title: 'IT Staffing & Recruitment',
        badge: 'IT Staffing',
        whatItIs: [
            'IT staffing helps organizations fill critical technical roles quickly with vetted, experienced talent.',
            'We support contract, contract-to-hire, and permanent placements across engineering, data, product, and cloud teams.',
        ],
        whatWeOffer: [
            'Rapid candidate sourcing, specialized recruiting, and workforce planning that keeps projects on time.',
            'Flexible hiring models that adapt to budget, timeline, and program requirements.',
        ],
        services: [
            { title: 'Rapid Talent Sourcing', description: 'Identify and present qualified candidates for urgent technical and product roles.' },
            { title: 'Contract-to-Hire Programs', description: 'Support evaluation and transition of contractors into permanent employees.' },
            { title: 'Permanent Placement', description: 'Recruit senior technical talent and leadership to scale product and engineering teams.' },
            { title: 'Talent Partnerships', description: 'Align recruiting with your business roadmap for predictable capacity and quality.' },
            { title: 'Niche Skill Hiring', description: 'Fill roles in AI, cloud, data, cybersecurity, mobile, and modern engineering stacks.' },
            { title: 'Dedicated Account Support', description: 'Deliver ongoing recruiting, candidate management, and process coordination.' },
        ],
    },
    'software-development': {
        title: 'Software Development',
        badge: 'Software Development',
        whatItIs: [
            'Software development builds the products, platforms, and internal tools that power modern businesses.',
            'We deliver full-stack solutions that are designed for speed, quality, and long-term maintainability.',
        ],
        whatWeOffer: [
            'Product-oriented delivery, agile teams, and end-to-end engineering for web and SaaS software.',
            'From MVPs to enterprise systems, our engineers build the right features with the right architecture.',
        ],
        services: [
            { title: 'Custom Web Applications', description: 'Design and develop web products that solve specific customer and business problems.' },
            { title: 'SaaS Product Delivery', description: 'Build and scale subscription-based platforms with repeatable release cycles.' },
            { title: 'API Design & Integration', description: 'Create robust APIs and integrate third-party services for seamless workflows.' },
            { title: 'Platform Modernization', description: 'Update aging systems with modern architectures, tools, and engineering practices.' },
            { title: 'Quality Engineering', description: 'Implement automated testing, code review, and continuous delivery for reliable releases.' },
            { title: 'Technical Leadership', description: 'Provide senior engineering guidance, architecture reviews, and delivery coaching.' },
        ],
    },
    'app-development': {
        title: 'App Development',
        badge: 'App Development',
        whatItIs: [
            'App development creates mobile experiences that engage customers, employees, and partners.',
            'We deliver native and cross-platform apps built for performance, usability, and strong business value.',
        ],
        whatWeOffer: [
            'Mobile strategy, UX design, native iOS/Android, and cross-platform development for modern apps.',
            'We build apps that connect to cloud services, data platforms, and enterprise systems securely.',
        ],
        services: [
            { title: 'Native iOS & Android', description: 'Deliver high-performance mobile apps built specifically for each platform.' },
            { title: 'Cross-Platform Development', description: 'Build Flutter and React Native apps that work across devices with consistent UX.' },
            { title: 'Mobile UX & Product Design', description: 'Create app experiences that feel intuitive and drive engagement.' },
            { title: 'Backend & API Integration', description: 'Connect apps to scalable backends, authentication, and real-time data services.' },
            { title: 'App Testing & Launch Support', description: 'Ensure quality through testing, submission support, and post-launch monitoring.' },
            { title: 'Mobile Performance Optimization', description: 'Improve app speed, reliability, and battery usage for better user retention.' },
        ],
    },
    'hr-solutions-rpo': {
        title: 'HR Solutions & RPO',
        badge: 'HR Solutions',
        whatItIs: [
            'HR solutions and RPO streamline recruiting operations and ensure the right people are in the right roles.',
            'We help organizations scale hiring without adding undue headcount or overhead.',
        ],
        whatWeOffer: [
            'Recruitment process outsourcing, ATS integration, workforce planning, and hiring operations support.',
            'Flexible HR programs that reduce cycle time, improve candidate quality, and increase recruiter impact.',
        ],
        services: [
            { title: 'Recruitment Process Outsourcing', description: 'Manage all or part of your hiring process to accelerate candidate flow and improve quality.' },
            { title: 'ATS Integration & Optimization', description: 'Connect your hiring systems, automate workflows, and improve candidate tracking.' },
            { title: 'Candidate Intake & Screening', description: 'Execute intake calls, screening, and interview coordination for high-volume roles.' },
            { title: 'Employer Branding Support', description: 'Strengthen candidate engagement with better messaging, positioning, and outreach.' },
            { title: 'HR Operations Enablement', description: 'Build the processes and tools that make recruiting consistent and efficient.' },
            { title: 'Talent Pipeline Development', description: 'Create and nurture pipelines for recurring and mission-critical skill sets.' },
        ],
    },
    'dedicated-developers': {
        title: 'Dedicated Developers',
        badge: 'Dedicated Developers',
        whatItIs: [
            'Dedicated developers provide focused capacity and long-term collaboration without the hiring overhead.',
            'Our team members work as an extension of your organization on contracts, full-time, or hybrid models.',
        ],
        whatWeOffer: [
            'Vetted engineering talent available quickly for ongoing delivery, product teams, or critical programs.',
            'Flexible engagement models that adapt to your planning horizon and team needs.',
        ],
        services: [
            { title: 'Contract Development Teams', description: 'Supply skilled developers and engineers to augment your existing product and delivery teams.' },
            { title: 'Dedicated Product Engineers', description: 'Assign experienced engineers who work exclusively on your roadmap and priorities.' },
            { title: 'Remote & Distributed Talent', description: 'Leverage remote talent with strong communication, collaboration, and accountability.' },
            { title: 'Build-Operate-Transfer Support', description: 'Partner with us for delivery now while preparing to transfer ownership later.' },
            { title: 'Project Ramp-Up & Stabilization', description: 'Deploy teams quickly to meet tight deadlines and stabilize new initiatives.' },
        ],
    },
    'devops-infrastructure': {
        title: 'DevOps & Infrastructure',
        badge: 'DevOps & Infrastructure',
        whatItIs: [
            'DevOps and infrastructure engineering enable fast, reliable delivery and resilient operations.',
            'We help organizations automate pipelines, secure platforms, and keep systems running smoothly.',
        ],
        whatWeOffer: [
            'CI/CD, container orchestration, infrastructure automation, monitoring, and platform reliability services.',
            'Engineering practices that connect development, operations, and security across the delivery lifecycle.',
        ],
        services: [
            { title: 'CI/CD Pipeline Design', description: 'Implement repeatable build, test, and deployment workflows that accelerate releases.' },
            { title: 'Infrastructure Automation', description: 'Automate cloud and on-premise infrastructure using IaC tools and best practices.' },
            { title: 'Container & Kubernetes Engineering', description: 'Design and operate containerized application platforms and orchestration systems.' },
            { title: 'Platform Reliability', description: 'Build monitoring, incident response, and resilience into your infrastructure.' },
            { title: 'Security & Compliance', description: 'Embed security controls, policy, and auditing into infrastructure and release pipelines.' },
            { title: 'Cloud Operations Support', description: 'Provide ongoing support for deployments, performance tuning, and operational excellence.' },
        ],
    },
};

export default function ApplicationServicesPage() {
    const query = new URLSearchParams(window.location.search);
    const initialCategory = query.get('category') || 'application-services';
    const [category, setCategory] = useState(initialCategory);
    const pageData = SERVICE_PAGES[category] || SERVICE_PAGES['application-services'];

    useEffect(() => {
        const onPopstate = () => {
            const nextCategory = new URLSearchParams(window.location.search).get('category') || 'application-services';
            setCategory(nextCategory);
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        };

        window.addEventListener('popstate', onPopstate);
        return () => window.removeEventListener('popstate', onPopstate);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [category]);

    const handleCategoryClick = (slug) => {
        if (slug === category) return;

        const url = `/application-services?category=${slug}`;
        window.history.pushState({}, '', url);
        setCategory(slug);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    return (
        <>
            <Header onCtaClick={() => { }} />
            <div className="mt-20"></div>
            <section className="relative py-0">
                <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="grid grid-cols-12 gap-8 items-center">
                        <div className="col-span-12 lg:col-span-7">
                            <p className="eyebrow mb-3">IT Solutions</p>
                            <h1 className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold tracking-[-0.03em]" style={{ color: 'var(--color-ink)' }}>
                                IT Solutions
                            </h1>
                            <p className="mt-5 max-w-xl text-[16px] leading-[1.75]" style={{ color: 'var(--color-muted)' }}>
                                Choose the IT Solutions service that fits your business, then explore its capabilities and offerings below.
                            </p>
                        </div>

                        <div className="col-span-12 lg:col-span-5">
                            <div className="relative w-full max-w-[320px] mx-auto rounded-[30px] border border-[rgba(15,23,42,0.08)] bg-[rgba(255,255,255,0.95)] p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.25)]">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="h-20 rounded-[24px] bg-[rgba(15,23,42,0.05)]" />
                                    <div className="h-20 rounded-[24px] bg-[rgba(15,23,42,0.12)] flex items-center justify-center">
                                        <div className="w-10 h-10 rounded-full bg-[rgba(15,23,42,0.16)]" />
                                    </div>
                                    <div className="h-20 rounded-[24px] bg-[rgba(15,23,42,0.12)] flex items-center justify-center">
                                        <div className="w-14 h-3 rounded-full bg-[rgba(15,23,42,0.16)]" />
                                    </div>
                                    <div className="h-20 rounded-[24px] bg-[rgba(15,23,42,0.05)] flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full border border-[rgba(15,23,42,0.12)]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className="mt-6 overflow-x-auto">
                        <div className="flex flex-wrap gap-3">
                            {Object.entries(SERVICE_PAGES).map(([slug, item]) => {
                                const isActive = slug === category;
                                return (
                                    <button
                                        key={slug}
                                        type="button"
                                        onClick={() => handleCategoryClick(slug)}
                                        className={`text-sm font-semibold px-4 py-3 rounded-full transition-all cursor-pointer ${isActive ? 'bg-[var(--color-steel)] text-white shadow-[0_14px_40px_-22px_rgba(64,98,123,0.25)] border-b-4 border-[var(--color-steel)]' : 'bg-[var(--color-bg-soft)] text-[var(--color-ink)] hover:bg-[var(--color-steel-2)] border border-transparent'}`}
                                    >
                                        {item.title}
                                    </button>
                                );
                            })}
                        </div>
                    </nav>
                </div>
            </section>
            <ServiceTemplate {...pageData} />
            <Footer />
        </>
    );
}