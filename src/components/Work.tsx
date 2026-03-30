import "./styles/Work.css";
import WorkImage from "./WorkImage";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const projects = [
  {
    name: "Tuffex E-commerce",
    category: "Industrial Storefront",
    tools: "React 19, Next.js, API, RBAC",
    image: "/images/tuffex.png",
    link: "https://www.tuffex.store",
    description:
      "Built an industrial e-commerce platform with conversion-focused storefront UX, secure RBAC admin modules, and scalable API integration for production operations.",
  },
  {
    name: "Sleepyhug CMS & Chatbot",
    category: "Content Management & AI",
    tools: "React, RAG, Zero-broken routes",
    image: "/images/sleepyhug.png",
    link: "https://www.sleepyhug.in",
    description:
      "Shipped a self-serve CMS with 800+ SEO-safe migrations and a RAG chatbot that auto-resolves a large share of support and product queries.",
  },
  {
    name: "Authentication System",
    category: "Full-Stack Security Platform",
    tools: "Node.js, Express, MongoDB, React, JWT, OTP",
    image: "/images/auth.jpg",
    description:
      "Built a production-ready auth system with OTP email verification, JWT access/refresh token rotation, bcrypt password hashing, and multi-device session management with revoke controls.",
  },
  {
    name: "Custom SMTP Server",
    category: "DevOps Infrastructure",
    tools: "AWS EC2, SPF, DKIM, DMARC",
    image: "/images/smtp.jpg",
    description:
      "Deployed a self-hosted SMTP infrastructure on AWS with SPF, DKIM, and DMARC configured for reliable inbox delivery and lower infra cost.",
  },
  {
    name: "4site Analytics Platform",
    category: "Web Analytics Product",
    tools: "Heatmaps, Engagement Tracking, Reporting",
    image: "/images/4site.png",
    description:
      "Built an internal analytics product to track engagement, session behavior, and page performance, enabling data-backed product and content decisions.",
  },
  {
    name: "Medicare - Doctor Appointment Booking Site",
    category: "Healthcare Booking Platform",
    tools: "React, Routing, Forms, API Integration",
    image: "/images/medicare.png",
    link: "https://medicare-ten-umber.vercel.app",
    description:
      "Created a doctor-appointment platform with patient-first booking flows and modular frontend architecture for clean scaling and maintainability.",
  },
  {
    name: "Jobify",
    category: "Job Application Tracker",
    tools: "React, Dashboard UI, State Management",
    image: "/images/jobify.png",
    link: "https://jobify.live",
    description:
      "Built a dashboard-driven job tracker for managing application stages and activity, optimized for daily workflow speed and clarity.",
  },
  {
    name: "EcoFood",
    category: "Food Delivery Application",
    tools: "React, Component Architecture, UI Flows",
    image: "/images/ecofood.png",
    link: "https://ecofoodankit.vercel.app",
    description:
      "Developed a food-ordering interface with fast browsing, clear conversion paths, and reusable UI components for consistent feature delivery.",
  },
  {
    name: "DermStore Clone",
    category: "E-commerce for Skincare & Cosmetics",
    tools: "React, Product Listing, Cart UX",
    image: "/images/dermstore.png",
    link: "https://dermstore-clone-01.vercel.app",
    description:
      "Recreated a skincare commerce experience with catalog discovery, product detail journeys, and cart interactions with polished responsive behavior.",
  },
  {
    name: "2048 Game",
    category: "Interactive Web Game",
    tools: "JavaScript, Game Logic, UI Interactions",
    image: "/images/2048.png",
    link: "https://play2048.co",
    description:
      "Implemented a browser-based 2048 game with deterministic merge logic, responsive controls, and smooth interaction feedback.",
  },
];

const Work = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    loop: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef<number | null>(null);

  const updateScrollState = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateScrollState();
    const onPointerDown = () => setIsDragging(true);
    const onPointerUp = () => setIsDragging(false);
    const onSettle = () => setIsDragging(false);

    emblaApi.on("select", updateScrollState);
    emblaApi.on("reInit", updateScrollState);
    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);
    emblaApi.on("settle", onSettle);

    return () => {
      emblaApi.off("select", updateScrollState);
      emblaApi.off("reInit", updateScrollState);
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
      emblaApi.off("settle", onSettle);
    };
  }, [emblaApi, updateScrollState]);

  useEffect(() => {
    if (!emblaApi) return;
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
    }

    autoplayRef.current = window.setInterval(() => {
      if (!isDragging && !isHovered) {
        emblaApi.scrollNext();
      }
    }, 2500);

    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
      }
    };
  }, [emblaApi, isDragging, isHovered]);

  return (
    <div className="work-section" id="work">
      <div className="work-sticky">
        <div className="work-container section-container">
          <h2>
            My <span>Work</span>
          </h2>
          <div
            className={`work-marquee-viewport ${isDragging ? "is-dragging" : ""}`}
            ref={emblaRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="work-track">
              {projects.map((project, index) => (
                <div className="work-box" key={project.name}>
                  <div className="work-card-inner">
                    <div className="work-card-face work-card-front">
                      <div className="work-info">
                        <div className="work-title">
                          <h3>{String(index + 1).padStart(2, "0")}</h3>

                          <div>
                            <h4>{project.name}</h4>
                            <p>{project.category}</p>
                          </div>
                        </div>
                        <h4>Tools and features</h4>
                        <p>{project.tools}</p>
                      </div>
                      <WorkImage
                        image={project.image}
                        alt={project.name}
                        link={project.link}
                      />
                    </div>
                    <div className="work-card-face work-card-back">
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                      <div className="work-back-meta">
                        <span>{project.category}</span>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Open project
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="work-carousel-controls work-carousel-controls-bottom">
            <button
              type="button"
              className="work-nav-btn"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              aria-label="Previous project"
            >
              <IoIosArrowBack />
            </button>
            <button
              type="button"
              className="work-nav-btn"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              aria-label="Next project"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
