import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const jobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    location: 'Remote / Bangalore',
    type: 'Full-time',
    category: 'Developer',
    jd: 'We are looking for a Senior React Developer with 5+ years of experience in building scalable web applications. Proficiency in React, Redux, and modern JavaScript is required.',
    salary: '₹12-18 LPA'
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Designer',
    jd: 'Join our design team to create intuitive user experiences. Experience with Figma, Adobe XD, and user research is essential.',
    salary: '₹8-12 LPA'
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'DevOps',
    jd: 'Manage our cloud infrastructure and CI/CD pipelines. Knowledge of AWS, Docker, and Kubernetes is required.',
    salary: '₹15-20 LPA'
  },
  {
    id: 4,
    title: 'Product Manager',
    location: 'Remote',
    type: 'Full-time',
    category: 'Management',
    jd: 'Lead product development from ideation to launch. Experience in agile methodologies and stakeholder management is key.',
    salary: '₹18-25 LPA'
  },
  {
    id: 5,
    title: 'AI/ML Engineer',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'AI/ML Solutions',
    jd: 'Develop and deploy machine learning models for various applications. Experience with Python, TensorFlow, and scikit-learn is required.',
    salary: '₹20-30 LPA'
  },
  {
    id: 6,
    title: 'Data Analyst',
    location: 'Delhi',
    type: 'Full-time',
    category: 'Data Analyst',
    jd: 'Analyze large datasets to provide insights for business decisions. Proficiency in SQL, Python, and data visualization tools like Tableau.',
    salary: '₹8-14 LPA'
  },
  {
    id: 7,
    title: 'Generative AI Specialist',
    location: 'Remote',
    type: 'Full-time',
    category: 'Generative AI',
    jd: 'Work on cutting-edge generative AI projects using models like GPT and DALL-E. Experience in AI research and implementation.',
    salary: '₹25-35 LPA'
  },
  {
    id: 8,
    title: 'Data Engineer',
    location: 'Mumbai',
    type: 'Full-time',
    category: 'Data Engineer',
    jd: 'Build and maintain data pipelines and warehouses. Knowledge of ETL processes, Apache Spark, and cloud platforms like AWS or GCP.',
    salary: '₹15-22 LPA'
  },
  {
    id: 9,
    title: 'Cloud Architect',
    location: 'Pune',
    type: 'Full-time',
    category: 'Cloud Computing',
    jd: 'Design and implement cloud solutions on AWS/Azure/GCP. Experience in cloud security, scalability, and cost optimization.',
    salary: '₹20-28 LPA'
  },
  {
    id: 10,
    title: 'IT Recruiter',
    location: 'Remote',
    type: 'Full-time',
    category: 'IT Staffing & Recruitment',
    jd: 'Source and recruit top IT talent. Experience in technical recruitment, LinkedIn, and candidate assessment.',
    salary: '₹6-10 LPA'
  },
  {
    id: 11,
    title: 'Full Stack Developer',
    location: 'Chennai',
    type: 'Full-time',
    category: 'Software Development',
    jd: 'Develop end-to-end software solutions. Proficiency in both frontend (React/Angular) and backend (Node.js/Python) technologies.',
    salary: '₹10-16 LPA'
  },
  {
    id: 12,
    title: 'iOS/Android Developer',
    location: 'Hyderabad',
    type: 'Full-time',
    category: 'App Development (iOS / Android)',
    jd: 'Build native mobile applications for iOS and Android. Experience with Swift, Kotlin, and cross-platform frameworks.',
    salary: '₹12-18 LPA'
  },
  {
    id: 13,
    title: 'HR Business Partner',
    location: 'Delhi',
    type: 'Full-time',
    category: 'HR Solutions & RPO',
    jd: 'Manage HR operations and recruitment process outsourcing. Experience in HR strategy, employee relations, and RPO.',
    salary: '₹12-18 LPA'
  },
  {
    id: 14,
    title: 'Dedicated Team Lead',
    location: 'Remote',
    type: 'Full-time',
    category: 'Dedicated Developers',
    jd: 'Lead dedicated development teams for client projects. Experience in team management, project delivery, and client communication.',
    salary: '₹18-25 LPA'
  },
  {
    id: 15,
    title: 'Senior DevOps Engineer',
    location: 'Bangalore',
    type: 'Full-time',
    category: 'DevOps & Infrastructure',
    jd: 'Oversee DevOps practices and infrastructure management. Expertise in automation, monitoring, and cloud infrastructure.',
    salary: '₹18-26 LPA'
  }
];

const categories = ['All', 'Developer', 'Designer', 'DevOps', 'Management', 'AI/ML Solutions', 'Data Analyst', 'Generative AI', 'Data Engineer', 'Cloud Computing', 'IT Staffing & Recruitment', 'Software Development', 'App Development (iOS / Android)', 'HR Solutions & RPO', 'Dedicated Developers', 'DevOps & Infrastructure'];

export default function Career() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs.filter(job => job.category === category));
    }
  };

  const handleApply = (jobTitle) => {
    const subject = `Application for ${jobTitle}`;
    const mailtoLink = `mailto:sales@nexonsolution.com?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <Header onCtaClick={() => {}} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Shape the future of technology with us. We're always looking for talented individuals to join our growing team.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-bold text-center mb-8">Open Positions</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? 'var(--color-steel)' : ''
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Jobs List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map(job => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                <div className="text-sm text-gray-600 mb-4">
                  <p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Type:</strong> {job.type}</p>
                  <p><strong>Salary:</strong> {job.salary}</p>
                </div>
                <p className="text-gray-700 mb-6">{job.jd}</p>
                <button
                  onClick={() => handleApply(job.title)}
                  className="w-full text-white py-2 px-4 rounded-md transition-colors hover:opacity-90"
                  style={{
                    backgroundColor: 'var(--color-steel)'
                  }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}