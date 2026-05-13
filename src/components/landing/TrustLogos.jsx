const LOGOS = [
  'Neosoft','Vlink', 'Xebia', 'Martine', 'Orange Bits', 'Nice Software','Altysys', 'Bestpeers', 'Panorama', 'QbrainX'
];

function Row() {
  return (
    <div className="marquee">
      {[...LOGOS, ...LOGOS].map((name, i) => (
        <span key={i} className="logo-name">
          {name}
        </span>
      ))}
    </div>
  );
}

export default function TrustLogos() {
  return (
    <section className="py-16 sm:py-20 border-b" style={{ borderColor: 'var(--color-line)', background: 'var(--color-bg)' }}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 mb-10">
        <div className="text-center">
          <div className="eyebrow eyebrow-muted mb-2"> Trusted by teams worldwide</div>
          <p className="text-[15.5px] font-medium" style={{ color: 'var(--color-muted)' }}>
            Partnering with ambitious operators across India, the US, and the UK.
          </p>
        </div>
      </div>

      <div className="marquee-pause overflow-hidden">
        <Row />
      </div>
    </section>
  );
}
