import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>&</span>
          <br />
          Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hello, World.</h4>
                <h5>First Line of Python</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Wrote my first line of Python at age 10. The logic clicked
              instantly — I realized code wasn't just text; it was a tool to
              build worlds.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>First Client</h4>
                <h5>Freelance Web Developer</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Landed my first freelance commission at age 11. Delivered a full
              responsive website. Proved that skill outweighs age.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Entering 3D & AI</h4>
                <h5>Three.js / WebGL / Robotics</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Moved beyond flat design. Mastered Three.js and WebGL. Built
              Nova — a voice-first AI robotics assistant. Started creating
              &ldquo;spaces&rdquo; instead of just &ldquo;pages.&rdquo;
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack. Global Stage.</h4>
                <h5>Enterprise Systems & Competitions</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building production-grade systems. Top 5 at National & Global
              Digital Fests. Focused on performance, motion, and story.
              The vision is clearer than ever — and I'm only 14.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
