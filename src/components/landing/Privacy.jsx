import React from "react";
import Header from "./Header";
import Footer from "../Footer";

const Privacy = () => {
    return (
        <>
            {/* Header same as original */}
            <Header onCtaClick={() => { }} />

            {/* ONLY middle content */}
            <main className="pt-24 sm:pt-28 pb-10 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">

                    {/* Top Header */}
                    <div
                        className="px-6 sm:px-8 py-8 text-white text-center"
                        style={{ backgroundColor: "#1a365d" }}
                    >
                        <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">
                            Privacy Policy
                        </h1>
                        <p className="mt-2 text-sm opacity-80">
                            Effective Date: May 2026 | Nexon Software Solutions
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="p-6 sm:p-8 text-gray-700 leading-relaxed space-y-8">

                        <section>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 border-b pb-2 mb-3">
                                1. Introduction
                            </h2>
                            <p>
                                Nexon Software Solutions ("Company", "we", "us", or "our") is
                                committed to protecting your privacy. This Privacy Policy
                                explains how we collect, use, and safeguard your information
                                when you visit our website or use our services, in compliance
                                with the <strong>Information Technology Act, 2000</strong> and{" "}
                                <strong>SPDI Rules, 2011</strong>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 border-b pb-2 mb-3">
                                2. Information We Collect
                            </h2>

                            <p className="mb-3">
                                We may collect the following types of information:
                            </p>

                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Personal Data:</strong> Name, email address, phone
                                    number, and professional details voluntarily provided by you.
                                </li>

                                <li>
                                    <strong>Usage Data:</strong> IP addresses, browser types,
                                    device information, and cookies to improve website
                                    functionality.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 border-b pb-2 mb-3">
                                3. Purpose of Collection
                            </h2>

                            <p>
                                The information collected is used to provide and maintain our
                                services, notify you about updates, provide customer support,
                                and monitor website usage to prevent technical issues.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 border-b pb-2 mb-3">
                                4. Data Security
                            </h2>

                            <p>
                                We implement industry-standard security measures to protect your
                                Sensitive Personal Data or Information (SPDI). We do not sell
                                or rent your personal data to third parties for marketing
                                purposes without your explicit consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 border-b pb-2 mb-3">
                                5. Disclosure of Data
                            </h2>

                            <p>
                                We may disclose your personal information only if required by
                                law or in response to valid requests by public authorities such
                                as courts or government agencies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 border-b pb-2 mb-3">
                                6. Grievance Officer
                            </h2>

                            <p>
                                In accordance with the Information Technology Act 2000, if you
                                have any questions or grievances regarding your data, you may
                                contact our Grievance Officer:
                            </p>

                            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="font-medium text-gray-900">
                                    Email: sales@nexonsolution.com
                                </p>

                                <p className="text-sm text-gray-600 mt-1">
                                    Address: D-23, Sector 59, Noida 201301, IN
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Privacy page internal footer */}
                    <div className="px-6 sm:px-8 py-6 text-center text-xs text-gray-500 border-t bg-gray-50">
                        <p>© 2026 Nexon Software Solutions. All rights reserved.</p>
                        <p className="mt-1 font-medium">
                            Built for Excellence in Noida, India.
                        </p>
                    </div>
                </div>
            </main>

        </>
    );
};

export default Privacy;