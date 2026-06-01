import ServiceTemplate from './ServiceTemplate';

export default function Cybersecurity() {
    return (
        <ServiceTemplate
            title="Cybersecurity"
            badge="Cybersecurity"
            whatItIs={[
                'In today’s digital age, cyber threats are a constant concern for businesses of all sizes.',
                'Cybersecurity is essential to protect systems, data, reputation, and operations from evolving threats.',
            ]}
            whatWeOffer={[
                'We offer comprehensive security solutions that integrate domain knowledge and industry expertise.',
                'Our approach helps create a secure environment so organizations can innovate and grow confidently.',
            ]}
            services={[
                { title: 'Threat and Vulnerability Management', description: '- Test for and manage vulnerabilities across your network, systems and applications.\n\n- Identify existing and emerging threats and vulnerabilities.' },
                { title: 'Identity and Access Management', description: '- E2E access for legitimate users.\n\n- Enable streamlined user experience from any device.' },
                { title: 'Data Security', description: '- Protect your business data.\n\n- Manage critical data from cradle to grave.\n\n- Encryption and tokenization solutions.' },
                { title: 'Governance, Risk and Compliance', description: '- Protect your brand reputation.\n\n- Verify adherence to standards and regulatory requirements.' },
                { title: 'Cloud Security', description: '- Azure Information Protection Services.\n\n- Azure Security Center.\n\n- AWS Security Services.\n\n- GCP Security Services.' },
            ]}
        />
    );
}