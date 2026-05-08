import { motion } from 'framer-motion';

const categories = [
  {
    label: 'Frontend',
    techs: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    techs: ['Node.js', 'Python', 'Java', '.NET', 'Go', 'PHP'],
  },
  {
    label: 'Mobile',
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    label: 'Cloud & DevOps',
    techs: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    label: 'AI / ML',
    techs: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'NLP', 'Computer Vision'],
  },
  {
    label: 'Databases',
    techs: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'],
  },
];

export default function Technologies() {
  return (
    <section className="py-20 lg:py-24 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
        >
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight">
              Technologies we work with
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-dark-400 text-[15px] leading-relaxed">
              Our team stays current with the tools that matter — so your stack is never a bottleneck.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-xl p-6"
              style={{ background: 'rgba(30,41,59,0.25)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <p className="text-primary-400 text-xs font-semibold uppercase tracking-wider mb-4">{cat.label}</p>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((t) => (
                  <span
                    key={t}
                    className="text-sm text-dark-300 px-3 py-1.5 rounded-md"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
