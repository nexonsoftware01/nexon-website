export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10 panel-ink">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-16">

          {/* Left */}
          <div className="col-span-12 lg:col-span-5">
            <div className="inline-flex items-center bg-white rounded-lg sm:rounded-[14px] px-3 sm:px-4 py-2 sm:py-3 mb-3 sm:mb-5">
              <img
                src="/nexlogo.png"
                alt="Nexon Software"
                className="h-6 sm:h-8 w-auto select-none"
                draggable="false"
              />
            </div>

            <p
              className="text-xs sm:text-[15px] leading-[1.6] max-w-[420px]"
              style={{ color: "var(--color-muted-3)" }}
            >
              IT staffing and custom software studio based in Noida serving
              teams across India, the US, and the UK. Your data is 100% secure
              with us.
            </p>
          </div>

          {/* Reach us */}
          <div className="col-span-7 lg:col-span-3 lg:col-start-7">
            <div
              className="text-[11px] sm:text-[12.5px] font-bold uppercase tracking-wider mb-3 sm:mb-5"
              style={{ color: "var(--color-steel)" }}
            >
              Reach us
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {/* Email */}
              <li className="flex items-start gap-3 sm:items-center">
                <svg
                  className="w-4 h-4 mt-0.5 sm:mt-0 flex-shrink-0"
                  style={{ color: "var(--color-steel)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <a
                  href="mailto:sales@nexonsolution.com"
                  className="text-[13px] sm:text-[14.5px] leading-tight font-medium hover:text-[var(--color-steel)] transition-colors"
                  style={{ color: "var(--color-bg)" }}
                >
                  sales@nexonsolution.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3 sm:items-center">
                <svg
                  className="w-4 h-4 mt-0.5 sm:mt-0 flex-shrink-0"
                  style={{ color: "var(--color-steel)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <a
                  href="tel:+919953315229"
                  className="text-[13px] sm:text-[14.5px] leading-tight font-medium hover:text-[var(--color-steel)] transition-colors"
                  style={{ color: "var(--color-bg)" }}
                >
                  +91 99533 15229
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 mt-1 flex-shrink-0"
                  style={{ color: "var(--color-steel)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <div
                  className="text-[12px] sm:text-[13px] leading-relaxed"
                  style={{ color: "var(--color-muted-3)" }}
                >
                  D-23, Sector 59
                  <br />
                  Noida 201301, IN
                </div>
              </li>

              {/* LinkedIn */}
              <li className="flex items-start gap-3 sm:items-center">
                <svg
                  className="w-4 h-4 mt-0.5 sm:mt-0 flex-shrink-0"
                  style={{ color: "var(--color-steel)" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>

                <a
                  href="https://linkedin.com/company/nexon-software-solution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] sm:text-[14.5px] leading-tight font-medium hover:text-[var(--color-steel)] transition-colors"
                  style={{ color: "var(--color-bg)" }}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Index */}
          <div className="col-span-5 lg:col-span-3">
            <div
              className="text-[11px] sm:text-[12.5px] font-bold uppercase tracking-wider mb-3 sm:mb-5"
              style={{ color: "var(--color-steel)" }}
            >
              Index
            </div>

            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="/#services"
                  className="text-xs sm:text-[14.5px] font-medium hover:text-[var(--color-steel)] transition-colors"
                  style={{ color: "var(--color-bg)" }}
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/career"
                  className="text-xs sm:text-[14.5px] font-medium hover:text-[var(--color-steel)] transition-colors"
                  style={{ color: "var(--color-bg)" }}
                >
                  Career
                </a>
              </li>

              <li>
                <a
                  href="/#why"
                  className="text-xs sm:text-[14.5px] font-medium hover:text-[var(--color-steel)] transition-colors"
                  style={{ color: "var(--color-bg)" }}
                >
                  Why Nexon
                </a>
              </li>

              <li>
                <a
                  href="/#contact"
                  className="text-xs sm:text-[14.5px] font-medium hover:text-[var(--color-steel)] transition-colors"
                  style={{ color: "var(--color-bg)" }}
                >
                  Get started
                </a>
              </li>

              <li>
                <a
                  href="/privacy"
                  className="text-xs sm:text-[14.5px] font-medium hover:text-[var(--color-steel)] transition-colors"
                  style={{ color: "var(--color-bg)" }}
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
          <div
            className="text-[11px] sm:text-[12.5px]"
            style={{ color: "var(--color-muted-3)" }}
          >
            © {year} Nexon Software Solutions. All rights reserved.
          </div>

          <div
            className="flex items-center gap-2 text-[11px] sm:text-[12.5px]"
            style={{ color: "var(--color-muted-3)" }}
          >
            <span>Crafted in Noida shipped worldwide</span>
            <span className="pulse-dot" />
          </div>
        </div>
      </div>
    </footer>
  );
}