export default function SuccessModal({ onClose }) {
  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-title"
      onClick={onClose}
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="check-badge">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>

        <h3
          id="success-title"
          className="display-md text-[24px] sm:text-[30px] md:text-[34px] mb-3"
          style={{ color: 'var(--color-ink)' }}
        >
          Thank you for your submission!
        </h3>
        <p className="text-[16px] leading-[1.55]" style={{ color: 'var(--color-muted)' }}>
          Our recruitment expert will reach out to you within
          <strong style={{ color: 'var(--color-ink)' }}> 2 hours</strong>.
          Redirecting you now…
        </p>

        <div className="mt-7 pt-6 border-t flex items-center justify-between" style={{ borderColor: 'var(--color-line)' }}>
          <div className="flex items-center gap-2">
            <span className="pulse-dot" />
            <span className="text-[12.5px] font-semibold uppercase tracking-wider" style={{ color: 'var(--color-muted)' }}>
              Intake received
            </span>
          </div>
          <button onClick={onClose} className="text-[13.5px] font-semibold hover:text-[var(--color-steel-3)] transition-colors" style={{ color: 'var(--color-muted)' }}>
            Close ×
          </button>
        </div>
      </div>
    </div>
  );
}
