import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother | null = null;

const Navbar = () => {
  useEffect(() => {
    let links = document.querySelectorAll(".header ul a");
    const clickHandlers = new Map<HTMLAnchorElement, EventListener>();

    if (window.innerWidth > 1024) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.7,
        speed: 1.7,
        effects: true,
        autoResize: true,
        ignoreMobileResize: true,
      });

      smoother.scrollTop(0);
      smoother.paused(true);
    }

    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      const handler: EventListener = (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother?.scrollTo(section, true, "top top");
        }
      };
      clickHandlers.set(element, handler);
      element.addEventListener("click", handler);
    });

    const resizeHandler = () => {
      ScrollSmoother.refresh(true);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      links.forEach((elem) => {
        const element = elem as HTMLAnchorElement;
        const handler = clickHandlers.get(element);
        if (handler) {
          element.removeEventListener("click", handler);
        }
      });

      window.removeEventListener("resize", resizeHandler);
      smoother?.kill();
      smoother = null;
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Aditya
        </a>
        <a
          href="mailto:adityagajbhiye125@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          adityagajbhiye125@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
