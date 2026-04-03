import { ReactNode } from "react";
import SEO from "@/components/SEO";

const COMPANY = {
  name: "CoreWaveConnect",
  legalName: "CoreWaveConnect",
  phone: "(888) 253-7498",
  address: "405 Lomen Ave, Nome, Alaska 99762",
  email: "info@CoreWaveConnect.com",
  owner: "Steve Alexander Lopez",
  website: "www.CoreWaveConnect.com",
};

interface LegalPageProps {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
}

const LegalWrapper = ({ title, description, path, children }: LegalPageProps) => (
  <section className="py-16 md:py-24">
    <SEO title={title} description={description} path={path} />
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-black text-foreground mb-8">{title}</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 [&_h2]:text-foreground [&_h2]:font-bold [&_h2]:text-xl [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:text-base [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:leading-relaxed [&_ul]:space-y-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5">
        {children}
      </div>
    </div>
  </section>
);

export const DisclaimerPage = () => (
  <LegalWrapper title="Disclaimer" description="Read the CoreWaveConnect disclaimer regarding service availability, pricing, and website information accuracy." path="/disclaimer">
    <p>Last updated: January 1, 2026</p>

    <h2>General Disclaimer</h2>
    <p>The information provided by {COMPANY.name} ("Company," "we," "us," or "our") on this website ({COMPANY.website}) is for general informational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
    <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>

    <h2>Service Availability</h2>
    <p>Internet and television services offered by {COMPANY.name} are subject to availability in your area. Service speeds, channel lineups, and pricing may vary by location. Actual speeds may vary and are not guaranteed. Speeds advertised represent maximum download speeds under optimal network conditions, and real-world performance may differ based on factors including but not limited to network congestion, device capabilities, wiring conditions, and distance from network infrastructure.</p>
    <p>Please contact us at {COMPANY.phone} for specific availability at your address.</p>

    <h2>No Professional Advice</h2>
    <p>The site cannot and does not contain professional advice of any kind. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.</p>

    <h2>Assumption of Risk</h2>
    <p>You acknowledge and agree that any use of our services, including internet and television services, is at your sole risk. {COMPANY.name} does not guarantee uninterrupted or error-free service. Service interruptions may occur due to scheduled maintenance, equipment failure, natural disasters, force majeure events, or other circumstances beyond our reasonable control.</p>

    <h2>Indemnification</h2>
    <p>By using this website and our services, you agree to indemnify, defend, and hold harmless {COMPANY.name}, its owner ({COMPANY.owner}), officers, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the site or services, your violation of these terms, or your violation of any rights of a third party.</p>

    <h2>External Links</h2>
    <p>This website may contain links to third-party websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through this site.</p>

    <h2>Errors and Omissions</h2>
    <p>While we have made every attempt to ensure the information contained on this site has been obtained from reliable sources, {COMPANY.name} is not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>

    <h2>Contact</h2>
    <p>If you have questions about this disclaimer, contact us at {COMPANY.phone}, email us at {COMPANY.email}, or write to us at {COMPANY.address}.</p>
  </LegalWrapper>
);

export const PrivacyPolicyPage = () => (
  <LegalWrapper title="Privacy Policy" description="CoreWaveConnect privacy policy. Learn how we collect, use, and protect your personal information." path="/privacy-policy">
    <p>Last updated: January 1, 2026</p>

    <h2>Introduction</h2>
    <p>This Privacy Policy describes how {COMPANY.name} ("we," "us," or "our") collects, uses, discloses, and protects your personal information when you visit our website ({COMPANY.website}) or use our internet and television services. By using our services, you consent to the data practices described in this policy.</p>

    <h2>Information We Collect</h2>
    <h3>Personal Information</h3>
    <p>We collect information you provide directly, including:</p>
    <ul>
      <li>Full name, email address, phone number, and mailing address</li>
      <li>Service address and billing address</li>
      <li>Payment and billing information (credit card numbers, bank account details)</li>
      <li>Government-issued identification (when required for identity verification)</li>
      <li>Account credentials and security questions</li>
      <li>Communications you send to us (emails, chat messages, phone call records)</li>
    </ul>
    <h3>Automatically Collected Information</h3>
    <ul>
      <li>IP address, browser type, operating system, and device identifiers</li>
      <li>Pages visited, time spent on pages, and referring URLs</li>
      <li>Internet usage data including bandwidth consumption and connection logs</li>
      <li>Location data derived from your IP address or service address</li>
    </ul>

    <h2>How We Use Your Information</h2>
    <ul>
      <li>To provide, maintain, and improve our internet and TV services</li>
      <li>To process transactions, billing, and send related payment information</li>
      <li>To send service updates, outage notifications, and promotional communications</li>
      <li>To respond to your comments, questions, and customer support requests</li>
      <li>To monitor and analyze usage patterns, trends, and network performance</li>
      <li>To detect, prevent, and address technical issues, fraud, and security concerns</li>
      <li>To comply with legal obligations and enforce our terms of service</li>
      <li>To personalize your experience and deliver relevant content and offers</li>
    </ul>

    <h2>Legal Basis for Processing</h2>
    <p>We process your personal data based on one or more of the following legal grounds: (a) your consent; (b) performance of a contract with you; (c) compliance with a legal obligation; (d) our legitimate business interests that do not override your rights.</p>

    <h2>Information Sharing and Disclosure</h2>
    <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except in the following circumstances:</p>
    <ul>
      <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our website, conducting our business, or servicing you (e.g., payment processors, network infrastructure partners)</li>
      <li><strong>Legal Requirements:</strong> When required by law, subpoena, court order, or governmental regulation</li>
      <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion of our assets</li>
      <li><strong>Protection of Rights:</strong> To protect the rights, property, or safety of {COMPANY.name}, our customers, or others</li>
    </ul>

    <h2>Data Security</h2>
    <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, firewalls, secure socket layer (SSL) technology, access controls, and regular security assessments. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

    <h2>Data Retention</h2>
    <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including satisfying legal, accounting, or reporting requirements. When your data is no longer needed, we will securely delete or anonymize it.</p>

    <h2>Your Rights</h2>
    <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
    <ul>
      <li>Right to access and obtain a copy of your personal data</li>
      <li>Right to rectify inaccurate or incomplete data</li>
      <li>Right to erasure ("right to be forgotten")</li>
      <li>Right to restrict or object to processing</li>
      <li>Right to data portability</li>
      <li>Right to withdraw consent at any time</li>
      <li>Right to lodge a complaint with a supervisory authority</li>
    </ul>

    <h2>Children's Privacy</h2>
    <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.</p>

    <h2>Changes to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes your acceptance of the revised policy.</p>

    <h2>Contact Us</h2>
    <p>For privacy-related inquiries, contact us at {COMPANY.phone}, email {COMPANY.email}, or write to {COMPANY.name}, {COMPANY.address}.</p>
  </LegalWrapper>
);

export const TermsPage = () => (
  <LegalWrapper title="Terms & Conditions" description="CoreWaveConnect terms and conditions governing the use of our internet and TV services." path="/terms">
    <p>Last updated: January 1, 2026</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using {COMPANY.name} services, website, or any associated applications (collectively, "Services"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Services.</p>

    <h2>2. Service Description</h2>
    <p>{COMPANY.name} provides high-speed internet access (up to 1+ Gbps) and television services (300+ channels) to residential and commercial customers across the United States. Service availability, speeds, and channel lineups are subject to your geographic location, infrastructure availability, and the plan selected.</p>

    <h2>3. Eligibility</h2>
    <p>You must be at least 18 years of age and capable of forming a binding contract to use our Services. By agreeing to these Terms, you represent and warrant that you meet these eligibility requirements.</p>

    <h2>4. Account Responsibilities</h2>
    <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify {COMPANY.name} immediately of any unauthorized use of your account or any other breach of security.</p>

    <h2>5. Billing and Payment</h2>
    <ul>
      <li>You agree to pay all fees associated with your selected service plan on time and in full</li>
      <li>Billing occurs monthly in advance on your billing cycle date</li>
      <li>Late payments may result in late fees, service interruption, and/or account suspension</li>
      <li>All fees are non-refundable except as expressly stated in our Refund Policy</li>
      <li>We reserve the right to adjust pricing with 30 days' written notice to you</li>
      <li>Taxes and government-imposed fees are the responsibility of the subscriber</li>
    </ul>

    <h2>6. Acceptable Use</h2>
    <p>You agree not to use our Services for any unlawful purpose, including but not limited to:</p>
    <ul>
      <li>Unauthorized access to computer systems or networks</li>
      <li>Distribution of malware, viruses, or other harmful software</li>
      <li>Sending unsolicited bulk email (spam)</li>
      <li>Copyright infringement or intellectual property theft</li>
      <li>Any activity that violates applicable local, state, or federal laws</li>
    </ul>
    <p>Violation of our Acceptable Use Policy may result in immediate service termination without notice or refund.</p>

    <h2>7. Service Modifications</h2>
    <p>We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time with reasonable notice to affected customers. We will endeavor to provide at least 30 days' notice for material changes, except in cases of emergency maintenance or security concerns.</p>

    <h2>8. Equipment</h2>
    <p>Certain equipment provided by {COMPANY.name} (modems, routers, set-top boxes) remains our property and must be returned in good working condition upon service termination. Failure to return equipment may result in equipment charges being applied to your account.</p>

    <h2>9. Limitation of Liability</h2>
    <p>{COMPANY.name}, its owner ({COMPANY.owner}), officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
    <ul>
      <li>Your access to or use of (or inability to access or use) our Services</li>
      <li>Any conduct or content of any third party on our Services</li>
      <li>Service interruptions, outages, or degraded performance</li>
      <li>Unauthorized access, use, or alteration of your transmissions or content</li>
      <li>Any damages arising from force majeure events including but not limited to natural disasters, acts of war, terrorism, pandemics, or government actions</li>
    </ul>
    <p>In no event shall our total liability exceed the amount you paid to {COMPANY.name} in the twelve (12) months preceding the event giving rise to the claim.</p>

    <h2>10. Disclaimer of Warranties</h2>
    <p>Our Services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that our Services will be uninterrupted, timely, secure, or error-free.</p>

    <h2>11. Dispute Resolution and Arbitration</h2>
    <p>Any dispute arising out of or relating to these Terms or our Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You agree to waive your right to a jury trial and to participate in a class action lawsuit or class-wide arbitration.</p>

    <h2>12. Governing Law</h2>
    <p>These Terms shall be governed by and construed in accordance with the laws of the State of Alaska, without regard to its conflict of law provisions.</p>

    <h2>13. Severability</h2>
    <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.</p>

    <h2>14. Entire Agreement</h2>
    <p>These Terms, together with our Privacy Policy, Refund Policy, and any other legal notices published on our website, constitute the entire agreement between you and {COMPANY.name} concerning our Services.</p>

    <h2>15. Contact</h2>
    <p>Questions about these Terms may be directed to {COMPANY.phone}, {COMPANY.email}, or {COMPANY.name}, {COMPANY.address}.</p>
  </LegalWrapper>
);

export const RefundPolicyPage = () => (
  <LegalWrapper title="Refund Policy" description="CoreWaveConnect refund policy. Learn about eligibility, processing times, and how to request a refund." path="/refund-policy">
    <p>Last updated: January 1, 2026</p>

    <h2>Our Commitment</h2>
    <p>{COMPANY.name} is committed to customer satisfaction. We stand behind the quality of our internet and television services. This Refund Policy outlines the circumstances under which you may be eligible for a refund or service credit.</p>

    <h2>Refund Eligibility</h2>
    <p>You may be eligible for a refund under the following conditions:</p>
    <ul>
      <li><strong>30-Day Satisfaction Guarantee:</strong> New customers may cancel within 30 days of initial service activation for a full refund of monthly service charges</li>
      <li><strong>Extended Service Outages:</strong> Service outages exceeding 72 continuous hours qualify for pro-rated billing credits</li>
      <li><strong>Billing Errors:</strong> Duplicate charges or incorrect billing amounts will be refunded in full upon verification</li>
      <li><strong>Service Not Delivered:</strong> If we are unable to provision service at your address after payment has been collected</li>
    </ul>

    <h2>How to Request a Refund</h2>
    <ol>
      <li>Contact our support team at {COMPANY.phone} or email {COMPANY.email}</li>
      <li>Provide your account number, service address, and reason for the refund request</li>
      <li>Our team will review your request within 3-5 business days</li>
      <li>You will receive written confirmation of the refund decision via email</li>
    </ol>

    <h2>Processing Time</h2>
    <p>Approved refunds are typically processed within 10-15 business days and will be returned to your original payment method. Credit card refunds may take an additional 1-2 billing cycles to appear on your statement, depending on your financial institution.</p>

    <h2>Non-Refundable Items</h2>
    <ul>
      <li>One-time installation and activation fees</li>
      <li>Equipment purchase costs (as opposed to rental fees)</li>
      <li>Pay-per-view and on-demand content purchases</li>
      <li>Early termination fees (where applicable under contract)</li>
      <li>Third-party service charges processed through your account</li>
    </ul>

    <h2>Service Credits</h2>
    <p>In cases where a full refund is not applicable, we may offer service credits to your account. Service credits are applied to your next billing cycle and cannot be redeemed for cash.</p>

    <h2>Limitation of Liability</h2>
    <p>Refunds and credits under this policy represent your sole and exclusive remedy for the issues described herein. {COMPANY.name} shall not be liable for any additional damages, losses, or expenses beyond the refund or credit amount.</p>

    <h2>Contact</h2>
    <p>For refund inquiries, contact us at {COMPANY.phone}, email {COMPANY.email}, or write to {COMPANY.name}, {COMPANY.address}.</p>
  </LegalWrapper>
);

export const AdvertisingDisclosurePage = () => (
  <LegalWrapper title="Advertising Disclosure" description="CoreWaveConnect advertising disclosure regarding pricing, speed claims, channel availability, and Google Ads compliance." path="/advertising-disclosure">
    <p>Last updated: January 1, 2026</p>

    <h2>Commitment to Transparent Advertising</h2>
    <p>{COMPANY.name} is committed to honest, transparent, and responsible advertising practices across all marketing channels, including our website, social media platforms, email campaigns, and paid advertising networks. We adhere to all applicable federal and state advertising laws, including the Federal Trade Commission (FTC) guidelines on truth in advertising.</p>

    <h2>Google Ads Compliance</h2>
    <p>{COMPANY.name} utilizes Google Ads (formerly Google AdWords) as part of our digital marketing strategy to reach potential customers across the United States. We are fully compliant with all Google Ads policies, including but not limited to:</p>
    <ul>
      <li><strong>Google Ads Advertising Policies:</strong> All our ad campaigns adhere to Google's advertising policies, including content policies, behavioral policies, and editorial standards</li>
      <li><strong>Misrepresentation Policy:</strong> We do not make misleading claims about our products, services, or business identity in any Google Ads campaign. All claims are substantiated and verifiable</li>
      <li><strong>Destination Requirements:</strong> Our landing pages provide clear, accurate, and relevant information that matches the promises made in our ads</li>
      <li><strong>Personalized Advertising:</strong> Any personalized advertising we conduct through Google Ads complies with Google's personalized advertising policies and applicable data privacy regulations</li>
      <li><strong>Remarketing &amp; Retargeting:</strong> When using Google remarketing features, we comply with Google's remarketing policies and provide clear disclosures to users about data collection</li>
      <li><strong>Click-Through Transparency:</strong> All Google Ads click-throughs lead to relevant, accurate landing pages that clearly identify {COMPANY.name} as the advertiser</li>
    </ul>
    <p>Our Google Ads account is maintained in good standing, and we regularly audit our campaigns to ensure continued compliance with all Google Ads platform policies and guidelines. We do not engage in any prohibited practices including click fraud, cloaking, or deceptive ad placements.</p>

    <h2>FTC Compliance</h2>
    <p>{COMPANY.name} complies with the Federal Trade Commission Act (15 U.S.C. § 41 et seq.) and FTC guidelines regarding:</p>
    <ul>
      <li>Truthful advertising and substantiation of all claims</li>
      <li>Clear and conspicuous disclosure of material terms and conditions</li>
      <li>Avoidance of deceptive or unfair business practices</li>
      <li>Proper disclosure of any endorsements, testimonials, or material connections</li>
    </ul>

    <h2>Pricing Disclosures</h2>
    <p>All prices shown on our website and in advertising materials are monthly rates and may not include the following additional charges:</p>
    <ul>
      <li>Federal, state, and local taxes</li>
      <li>Regulatory recovery fees and surcharges</li>
      <li>Equipment rental or purchase fees (modems, routers, set-top boxes)</li>
      <li>Installation or activation fees</li>
      <li>Early termination fees (if applicable under contract)</li>
    </ul>
    <p>Promotional pricing is available for a limited time, applies to new customers only (unless otherwise stated), and is subject to change. Following the promotional period, standard pricing will apply. Please call {COMPANY.phone} for current pricing, promotions, and availability in your area.</p>

    <h2>Speed Claims</h2>
    <p>Internet speeds advertised (up to 1+ Gbps) represent maximum download speeds under optimal, ideal conditions. Actual speeds experienced by customers may vary based on numerous factors, including but not limited to:</p>
    <ul>
      <li>Network congestion and peak usage times</li>
      <li>Customer's device capabilities, age, and configuration</li>
      <li>Wi-Fi signal strength and interference</li>
      <li>Number of devices connected simultaneously</li>
      <li>Type and condition of in-home wiring</li>
      <li>Distance from network infrastructure</li>
      <li>Third-party website or application server performance</li>
    </ul>
    <p>{COMPANY.name} does not guarantee minimum speeds. Speed test results may vary depending on the testing methodology and server used.</p>

    <h2>Channel Counts and TV Service</h2>
    <p>Channel counts (300+) are approximate and subject to change without notice. Channel availability may vary by geographic location, service package, and content provider agreements. {COMPANY.name} does not guarantee specific channel availability and reserves the right to add, remove, or modify channel lineups at any time.</p>

    <h2>Testimonials and Reviews</h2>
    <p>Any customer testimonials or reviews displayed on our website or in advertising materials represent the individual experiences of those customers. Results may vary, and testimonials do not constitute a guarantee that all customers will achieve similar results.</p>

    <h2>Affiliate and Partner Disclosures</h2>
    <p>Where applicable, {COMPANY.name} may receive compensation from third-party partners for referrals or affiliate relationships. Any such material connections will be clearly disclosed in accordance with FTC endorsement guidelines.</p>

    <h2>Intellectual Property</h2>
    <p>All content, trademarks, logos, and advertising materials on this website are the property of {COMPANY.name} or its licensors. Unauthorized use, reproduction, or distribution of our advertising content is strictly prohibited.</p>

    <h2>Limitation of Liability</h2>
    <p>{COMPANY.name} shall not be liable for any damages or losses arising from reliance on advertising content, promotional offers, or service descriptions that may contain inadvertent errors or omissions. We make every effort to ensure accuracy but cannot guarantee that all information is error-free at all times.</p>

    <h2>Contact</h2>
    <p>For questions about our advertising practices, Google Ads campaigns, or to report a concern, contact us at {COMPANY.phone}, email {COMPANY.email}, or write to {COMPANY.name}, {COMPANY.address}.</p>
  </LegalWrapper>
);

export const CookiesPolicyPage = () => (
  <LegalWrapper title="Cookies Policy" description="Astrowave TV Net cookies policy. Learn how we use cookies and tracking technologies to improve your experience." path="/cookies-policy">
    <p>Last updated: January 1, 2026</p>

    <h2>What Are Cookies</h2>
    <p>Cookies are small text files that are placed on your computer, smartphone, or other device when you visit our website ({COMPANY.website}). Cookies are widely used to make websites work more efficiently and to provide information to website owners. {COMPANY.name} uses cookies and similar tracking technologies to improve your browsing experience and understand how our website is used.</p>

    <h2>Types of Cookies We Use</h2>
    <ul>
      <li><strong>Strictly Necessary Cookies:</strong> Essential for the website to function properly. These include session cookies for authentication, security tokens, and load balancing. Without these cookies, the website cannot function as intended. These cookies do not require your consent.</li>
      <li><strong>Performance &amp; Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously. We use tools such as Google Analytics to measure page views, traffic sources, bounce rates, and user behavior patterns.</li>
      <li><strong>Functionality Cookies:</strong> Remember your settings, preferences, language choices, and login details to provide a more personalized experience.</li>
      <li><strong>Advertising &amp; Targeting Cookies:</strong> Used to deliver advertisements relevant to you and your interests. These cookies track your browsing habits across websites and may be set by our advertising partners, including Google Ads.</li>
    </ul>

    <h2>Third-Party Cookies</h2>
    <p>Some cookies are placed by third-party services that appear on our pages. We use the following third-party services that may set cookies:</p>
    <ul>
      <li><strong>Google Analytics:</strong> For website traffic analysis and reporting</li>
      <li><strong>Google Ads:</strong> For advertising campaign measurement and remarketing</li>
      <li><strong>Social Media Platforms:</strong> For social sharing functionality and embedded content</li>
    </ul>
    <p>We do not control these third-party cookies. Please refer to the respective third-party privacy policies for more information about their cookie practices.</p>

    <h2>Cookie Duration</h2>
    <ul>
      <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
      <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them manually. Duration varies by cookie, ranging from 30 days to 2 years</li>
    </ul>

    <h2>Managing Cookies</h2>
    <p>You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
    <ul>
      <li>View what cookies are stored and delete them individually or in bulk</li>
      <li>Block third-party cookies</li>
      <li>Block all cookies from specific or all websites</li>
      <li>Delete all cookies when you close your browser</li>
    </ul>
    <p>Please note that disabling or blocking certain cookies may affect the functionality of our website and your ability to access some features or services.</p>

    <h2>Do Not Track Signals</h2>
    <p>Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want your online activity tracked. Currently, there is no uniform standard for interpreting DNT signals. Our website does not currently respond to DNT signals but we respect your privacy preferences as described in this policy.</p>

    <h2>Updates to This Policy</h2>
    <p>We may update this Cookies Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date.</p>

    <h2>Contact</h2>
    <p>For questions about our cookie practices, contact us at {COMPANY.phone}, email {COMPANY.email}, or write to {COMPANY.name}, {COMPANY.address}.</p>
  </LegalWrapper>
);
