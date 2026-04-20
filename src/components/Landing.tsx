import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              MUHAMMAD
              <br />
              <span>HASAN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Designer</div>
              <div className="landing-h2-2">Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">Designer</div>
            </h2>
            <p
              style={{
                marginTop: "1.2rem",
                fontSize: "0.85rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                fontFamily: "monospace",
              }}
            >
              14 y/o &nbsp;·&nbsp; Full Stack Creative Dev
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
