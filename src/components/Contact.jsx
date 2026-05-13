import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiEnvelope, HiPhone, HiMapPin, HiCheckCircle } from 'react-icons/hi2';
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';

const contactItems = [
  { icon: HiEnvelope, label: 'Email', value: 'sales@nexonsolution.com' },
  { icon: HiPhone, label: 'Phone', value: '+91 9729283572' },
  { icon: HiMapPin, label: 'Address', value: 'D-23, Sector 59, Noida, Uttar Pradesh, India' },
];

const socials = [
  { icon: FaLinkedinIn, label: 'LinkedIn' },
  { icon: FaXTwitter, label: 'X' },
  { icon: FaFacebookF, label: 'Facebook' },
  { icon: FaInstagram, label: 'Instagram' },
];

const serviceOptions = ['IT Staffing', 'Software Development', 'QA Testing', 'AI & ML Solutions', 'IT Consulting', 'Other'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }, 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-14">
          {/* Left  info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Get in touch
            </h2>
            <p className="text-dark-400 text-[15px] leading-relaxed mb-10">
              Drop us a line about your project or staffing needs. We typically respond within a few hours.
            </p>

            <div className="space-y-5 mb-10">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-dark-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-dark-500 hover:text-white transition-colors duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right  form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-dark-400 mb-1.5">Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="form-input" />
                </div>
                <div>
                  <label className="block text-sm text-dark-400 mb-1.5">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required className="form-input" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-dark-400 mb-1.5">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 ..." className="form-input" />
                </div>
                <div>
                  <label className="block text-sm text-dark-400 mb-1.5">What do you need?</label>
                  <select name="service" value={form.service} onChange={handleChange} required className="form-input" style={{ appearance: 'none' }}>
                    <option value="" disabled>Pick one</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o} style={{ background: '#0f172a' }}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-dark-400 mb-1.5">Tell us more</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Brief description of your project or requirements..." rows={5} required className="form-input" style={{ resize: 'none' }} />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="btn-primary flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-white font-semibold text-sm disabled:opacity-80"
              >
                {sent ? (
                  <><HiCheckCircle className="w-5 h-5" /> Sent  we'll be in touch</>
                ) : (
                  <>Send message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
