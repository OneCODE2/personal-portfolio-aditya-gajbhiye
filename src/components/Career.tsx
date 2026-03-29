import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>GrowthJockey</h5>
              </div>
              <h3>Jul 2025 - Present</h3>
            </div>
            <ul>
              <li>
                Led end-to-end delivery across multiple client systems at
                GrowthJockey, owning architecture, implementation, integration,
                and release quality.
              </li>
              <li>
                Built the Tuffex industrial e-commerce ecosystem including
                customer storefront, React 19 admin SPA with RBAC across 10+
                modules, and backend services with 50+ REST endpoints, OTP
                auth, and GST invoice workflows.
              </li>
              <li>
                Eliminated a major SEO engineering bottleneck by developing a
                self-serve CMS for Sleepyhug and migrating 800+ posts with zero
                broken routes, improving publishing output from 3 to 7
                posts/day.
              </li>
              <li>
                Improved performance and discoverability through SSR, hydration
                strategy, and image optimization, contributing to higher
                conversion and stronger organic traffic outcomes.
              </li>
              <li>
                Launched a RAG-powered chatbot that autonomously resolved
                40-50% of inbound support queries from day one.
              </li>
              <li>
                Delivered automation pipelines for campaign operations that
                significantly reduced manual overhead and increased team
                throughput.
              </li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>GrowthJockey</h5>
              </div>
              <h3>Jan 2025 - Jun 2025</h3>
            </div>
            <ul>
              <li>
                Built a strong execution foundation during internship by
                delivering production-ready frontend and integration work across
                parallel sprint tracks.
              </li>
              <li>
                Shipped SSR-first Next.js 14 experiences with lazy hydration
                and optimized media delivery to improve Core Web Vitals and
                user-perceived performance.
              </li>
              <li>
                Published 15+ WCAG 2.1-compliant reusable components to an
                internal shared library, reducing repeated implementation effort
                and accelerating feature delivery across squads.
              </li>
              <li>
                Integrated 10+ third-party APIs with robust error handling
                patterns and contributed to code review and release processes.
              </li>
              <li>
                Maintained consistent on-time delivery through structured Git
                workflows and CI/CD pipelines, leading to full-time conversion.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
