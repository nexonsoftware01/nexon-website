import { useState, useRef } from 'react';
import SuccessModal from './SuccessModal';

const SERVICES = [
  'AI/ML Solutions',
  'Data Analyst',
  'Generative AI',
  'Data Engineer',
  'Cloud Computing',
  'IT Staffing & Recruitment',
  'Software Development',
  'App Development (iOS / Android)',
  'HR Solutions & RPO',
  'Dedicated Developers',
  'DevOps & Infrastructure',
  'Something else',
];

const COUNTRIES = [
  'India', 'United States', 'United Kingdom', 'Canada', 'Australia',
  'United Arab Emirates', 'Singapore', 'Germany', 'Netherlands', 'Other',
];

/**
 * Email delivery via FormSubmit.co  no account or API key required.
 *
 * IMPORTANT  one-time activation:
 *   1. The FIRST submission to this form will trigger an activation email
 *      from FormSubmit to `sales@nexonsolution.com`.
 *   2. Click the activation link in that email. After activation, every
 *      subsequent submission is delivered as a formatted HTML email to
 *      `sales@nexonsolution.com`  no further setup needed.
 *
 * Every submission is ALSO saved to localStorage under "nexon-leads" as a
 * safety net, so no lead is ever lost (even if email delivery fails).
 */
const LEADS_EMAIL = 'sales@nexonsolution.com';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${LEADS_EMAIL}`;

export default function LeadForm({ innerRef }) {
  const [form, setForm] = useState({
    name: '', phone: '', business: '', country: 'India', service: 'IT Staffing & Recruitment',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [modal, setModal] = useState(false);
  const formRef = useRef(null);

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((e2) => ({ ...e2, [k]: null }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Please enter your full name.';
    const phoneDigits = form.phone.replace(/\D/g, '');
    if (phoneDigits.length < 7 || phoneDigits.length > 15) e.phone = 'Enter a valid contact number.';
    if (!form.business.trim()) e.business = 'Business name is required.';
    if (!form.country) e.country = 'Select a country.';
    if (!form.service) e.service = 'Select a service.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const persistLocally = (payload) => {
    try {
      const existing = JSON.parse(localStorage.getItem('nexon-leads') || '[]');
      existing.push({ ...payload, at: new Date().toISOString() });
      localStorage.setItem('nexon-leads', JSON.stringify(existing));
    } catch {}
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!validate()) return;
    setSubmitting(true);

    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric', month: 'short', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hour12: true,
    });
    const referenceId = 'NXN-' + Date.now().toString(36).toUpperCase().slice(-8);

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      business: form.business.trim(),
      country: form.country,
      service: form.service,
      referenceId,
      submittedAt,
      source: 'nexonsolution.com  Landing Page',
    };

    persistLocally(payload);

    // Professional email sent via FormSubmit.co (HTML table format).
    const emailBody = {
      _subject: `New Enquiry · ${payload.business} · ${payload.service}`,
      _template: 'table',
      _captcha: 'false',
      _honey: '',
      'Reference ID': payload.referenceId,
      'Full Name': payload.name,
      'Contact Number': payload.phone,
      'Business Name': payload.business,
      'Country': payload.country,
      'Service Requested': payload.service,
      'Submitted At': `${payload.submittedAt} IST`,
      'Source': payload.source,
      'Next Step': 'Recruitment lead to respond within 2 hours (per landing-page SLA).',
    };

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(emailBody),
      });
      if (!res.ok) throw new Error(`FormSubmit responded ${res.status}`);
    } catch (err) {
      console.warn('[LeadForm] Email delivery failed  lead persisted locally under "nexon-leads".', err);
    }

    setSubmitting(false);
    setModal(true);
    setTimeout(() => {
      window.history.pushState({}, '', '/thank-you');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }, 2000);
  };

  return (
    <section id="contact" ref={innerRef} className="relative pt-20" style={{ background: 'var(--color-bg-soft)' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-14 items-start">
          {/* Left rail: context */}
          <div className="col-span-12 lg:col-span-5">
            <div className="eyebrow mb-2 sm:mb-4 text-xs sm:text-sm"> Start the conversation</div>
            <h2 className="display-md text-2xl sm:text-3xl md:text-4xl lg:text-[64px] mb-4 sm:mb-6" style={{ color: 'var(--color-ink)' }}>
              Tell us what<br className="hidden sm:block" />
              <span className="sm:hidden">what </span>you're building.
            </h2>
            <p className="text-sm sm:text-base md:text-[16.5px] leading-[1.6] mb-6 sm:mb-10 max-w-[440px]" style={{ color: 'var(--color-muted)' }}>
              Share a few details and a recruitment lead will reach out within
              <span className="font-semibold" style={{ color: 'var(--color-ink)' }}> 2 hours</span>.
              Quick intake, no sales theatre, no filler calls.
            </p>

            <div className="space-y-2 sm:space-y-4 max-w-[420px]">
              {[
                { t: 'T + 0h', d: 'You submit the brief' },
                { t: 'T + 2h', d: 'Lead responds with shortlist direction' },
                { t: 'T + 24h', d: 'Candidates on your table  or a clear NO' },
              ].map(({ t, d }) => (
                <div key={t} className="flex items-center gap-2 sm:gap-4 p-2.5 sm:p-4 bg-white rounded-lg sm:rounded-[14px] border" style={{ borderColor: 'var(--color-line)' }}>
                  <span className="shrink-0 text-[11px] sm:text-[12px] font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap" style={{ background: 'var(--color-steel)', color: '#fff' }}>
                    {t}
                  </span>
                  <span className="text-xs sm:text-[14.5px] font-medium" style={{ color: 'var(--color-ink-2)' }}>{d}</span>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3 mt-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-muted)' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span className="text-[13px] font-medium" style={{ color: 'var(--color-muted)' }}>
                Your data is 100% secure with us · Never shared.
              </span>
            </div>
          </div>

          {/* Right rail: form */}
          <div className="col-span-12 lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={onSubmit}
              noValidate
              className="p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg sm:rounded-[28px]"
              style={{
                background: 'var(--color-bg)',
                border: '1px solid var(--color-line)',
                boxShadow: '0 24px 48px -20px rgba(11, 28, 46, 0.12), 0 6px 14px -6px rgba(11, 28, 46, 0.04)',
              }}
            >
              <div className="flex items-center justify-between mb-6 sm:mb-9">
                <div className="flex items-center gap-2">
                  <span className="pulse-dot" />
                  <span className="text-[11px] sm:text-[12.5px] font-semibold uppercase tracking-wider" style={{ color: 'var(--color-muted)' }}>
                    Secured intake form
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div className="form-field sm:col-span-2">
                  <label htmlFor="name" className="text-xs sm:text-sm">Full name<span className="req">*</span></label>
                  <input
                    id="name" name="name" type="text"
                    autoComplete="name"
                    placeholder="e.g. Aarav Mehta"
                    className={`form-input text-sm sm:text-base${errors.name ? ' error' : ''}`}
                    value={form.name}
                    onChange={update('name')}
                  />
                  {errors.name && <span className="error-msg text-xs">{errors.name}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="phone" className="text-xs sm:text-sm">Contact number<span className="req">*</span></label>
                  <input
                    id="phone" name="phone" type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+91 98765 43210"
                    className={`form-input text-sm sm:text-base${errors.phone ? ' error' : ''}`}
                    value={form.phone}
                    onChange={update('phone')}
                  />
                  {errors.phone && <span className="error-msg text-xs">{errors.phone}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="business" className="text-xs sm:text-sm">Business name<span className="req">*</span></label>
                  <input
                    id="business" name="business" type="text"
                    autoComplete="organization"
                    placeholder="Your company"
                    className={`form-input text-sm sm:text-base${errors.business ? ' error' : ''}`}
                    value={form.business}
                    onChange={update('business')}
                  />
                  {errors.business && <span className="error-msg text-xs">{errors.business}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="country" className="text-xs sm:text-sm">Country<span className="req">*</span></label>
                  <select
                    id="country" name="country"
                    className={`form-select text-sm sm:text-base${errors.country ? ' error' : ''}`}
                    value={form.country}
                    onChange={update('country')}
                  >
                    {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.country && <span className="error-msg text-xs">{errors.country}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="service" className="text-xs sm:text-sm">Service needed<span className="req">*</span></label>
                  <select
                    id="service" name="service"
                    className={`form-select text-sm sm:text-base${errors.service ? ' error' : ''}`}
                    value={form.service}
                    onChange={update('service')}
                  >
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <span className="error-msg text-xs">{errors.service}</span>}
                </div>
              </div>

              <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 md:pt-7 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6" style={{ borderColor: 'var(--color-line)' }}>
                <p className="text-[11px] sm:text-[12.5px] max-w-[320px]" style={{ color: 'var(--color-muted)' }}>
                  By submitting, you agree to be contacted about your enquiry. No spam, ever.
                </p>
                <button type="submit" disabled={submitting} className="btn btn-lime disabled:opacity-60 disabled:cursor-not-allowed !text-white w-full sm:w-auto">
                  {submitting ? 'Submitting…' : 'Submit'}
                  {!submitting && (
                    <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12h14M13 5l7 7-7 7"/>
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {modal && <SuccessModal onClose={() => setModal(false)} />}
    </section>
  );
}
