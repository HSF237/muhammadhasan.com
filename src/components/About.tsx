import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Muhammad Hasan — a 14-year-old Full Stack Creative Developer
          from India. I don't just write code; I compose digital symphonies.
          Starting young gave me a native fluency in technology. While others
          learn the syntax, I'm rewriting the language. My work bridges the gap
          between <strong>functional engineering</strong> and{" "}
          <strong>cinematic art</strong>.
        </p>
        <p className="para" style={{ marginTop: "1rem" }}>
          Self-taught in Full Stack Development, WebGL, and UI/UX Design.
          Balancing rigorous academics while building production-grade web
          experiences. Precision over age. Depth over surface.
        </p>
      </div>
    </div>
  );
};

export default About;
