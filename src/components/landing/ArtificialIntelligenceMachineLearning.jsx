import ServiceTemplate from './ServiceTemplate';

export default function ArtificialIntelligenceMachineLearning() {
    return (
        <ServiceTemplate
            title="Artificial Intelligence and Machine Learning"
            badge="Artificial Intelligence and Machine Learning"
            whatItIs={[
                'AI and Machine Learning help organizations unlock actionable insights, automate processes, and drive innovation.',
            ]}
            whatWeOffer={[
                'We offer AI/ML services designed to help organizations leverage transformative technologies.',
                'Our solutions use algorithms, analytics, and scalable infrastructure to extract value from data.',
            ]}
            services={[
                { title: 'AI Strategy and Consulting', description: 'Providing strategic guidance to define AI vision, assess readiness, and develop an adoption roadmap.' },
                { title: 'Machine Learning Model Development', description: 'Building custom ML models tailored to business needs using supervised, unsupervised, and reinforcement learning.' },
                { title: 'Data Preparation and Feature Engineering', description: 'Preparing data, identifying features, and engineering datasets to optimize model performance.' },
                { title: 'Predictive Analytics and Forecasting', description: 'Developing predictive models and forecasting algorithms to anticipate future trends and outcomes.' },
                { title: 'Natural Language Processing (NLP)', description: 'Building NLP solutions for text analysis, sentiment analysis, chatbots, and language translation.' },
                { title: 'Computer Vision', description: 'Developing computer vision solutions for image/video analysis, object detection, classification, and recognition.' },
            ]}
        />
    );
}