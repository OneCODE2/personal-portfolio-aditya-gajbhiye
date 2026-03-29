import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let smoother: Lenis | null = null;

const Navbar = () => {
  useEffect(() => {
    let links = document.querySelectorAll(".header ul a");
    const clickHandlers = new Map<HTMLAnchorElement, EventListener>();

    if (window.innerWidth > 1024) {
      smoother = new Lenis({
        duration: 1.5,
        smoothWheel: true,
      });

      smoother.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        smoother?.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      window.scrollTo(0, 0);
      smoother.stop();
    }

    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      const handler: EventListener = (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) {
             smoother?.scrollTo(section, { offset: 0 });
          }
        }
      };
      clickHandlers.set(element, handler);
      element.addEventListener("click", handler);
    });

    const resizeHandler = () => {
      ScrollTrigger.refresh();
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
      smoother?.destroy();
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
