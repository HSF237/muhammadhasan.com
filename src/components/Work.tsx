import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    num: "01",
    name: "TISK EMS",
    category: "Education · ERP",
    tools: "HTML, CSS, JavaScript",
    link: "https://www.tiskems.edu.in/",
    image: "/images/screenshot-7.png",
  },
  {
    num: "02",
    name: "EliteStore",
    category: "E-commerce · Retail",
    tools: "React, CSS, JavaScript",
    link: "https://elite-engine.vercel.app/",
    image: "/images/screenshot-9.png",
  },
  {
    num: "03",
    name: "Meridian Arch Studio",
    category: "Architecture · Portfolio",
    tools: "React, Tailwind CSS, GSAP",
    link: "https://hsf237.github.io/meridianarchstudio.in/",
    image: "/images/screenshot-8.png",
  },
  {
    num: "04",
    name: "Elite WebStudio",
    category: "Agency · Portfolio",
    tools: "HTML, CSS, JavaScript",
    link: "https://hsf237.github.io/elitewebstudio.in/",
    image: "/images/offcompsite.png",
  },
];

const Work = () => {
  useGSAP(() => {
    const container = document.querySelector(".work-flex") as HTMLElement;
    const wrapper = document.querySelector(".work-section") as HTMLElement;
    
    if (!container || !wrapper) return;

    const getScrollAmount = () => {
      const scrollWidth = container.scrollWidth;
      const clientWidth = window.innerWidth;
      return scrollWidth - clientWidth;
    };

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: () => `+=${getScrollAmount() * 0.85}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        id: "work",
        invalidateOnRefresh: true,
        refreshPriority: 1,
      },
    });

    timeline.to(container, {
      x: () => -getScrollAmount(),
      ease: "none",
    });

    // Refresh everything once images are fully loaded
    window.addEventListener("load", () => ScrollTrigger.refresh());
    const refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 1000);

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
      window.removeEventListener("load", () => ScrollTrigger.refresh());
      clearTimeout(refreshTimeout);
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.num}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "0.75rem",
                    fontSize: "0.8rem",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",
                    padding: "6px 14px",
                    textDecoration: "none",
                    letterSpacing: "1px",
                    transition: "all 0.3s",
                  }}
                >
                  VIEW PROJECT →
                </a>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
