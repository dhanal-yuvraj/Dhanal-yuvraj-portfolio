import { Calendar } from "lucide-react";
import useWindowSize from "../hooks/useWindowSize";

const education = [
  {
    degree: "B.Tech — Information Technology",
    institution: "Aditya Institute of Technology and Management",
    short: "AITAM",
    period: "2022 — 2026",
    score: "7.56",
    scoreLabel: "CGPA",
    color: "#3b82f6",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    short: "Sri Chaitanya",
    period: "2021 — 2022",
    score: "51.3%",
    scoreLabel: "Percentage",
    color: "#60a5fa",
  },
  {
    degree: "Secondary School (SSC)",
    institution: "Sai Aditya School",
    short: "Sai Aditya",
    period: "2020",
    score: "97%",
    scoreLabel: "Percentage",
    color: "#93c5fd",
  },
];

export default function Education() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: isMobile ? "6rem 1.5rem 3rem" : "7rem 3rem 4rem",
        maxWidth: "860px",
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: "3rem" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--accent)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "0.6rem",
          }}
        >
          // academic journey
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: isMobile ? "2rem" : "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Education
        </h1>
      </div>

      {/* Timeline */}
      <div
        style={{
          position: "relative",
          paddingLeft: isMobile ? "1.5rem" : "2rem",
        }}
      >
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "1rem",
            bottom: "1rem",
            width: "1px",
            background:
              "linear-gradient(180deg, var(--accent), var(--accent-bright), var(--border))",
          }}
        />

        {education.map((edu, i) => (
          <div key={i} style={{ position: "relative", marginBottom: "2.5rem" }}>
            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: isMobile ? "-1.9rem" : "-2.4rem",
                top: "1.6rem",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: edu.color,
                boxShadow: "0 0 10px " + edu.color + "88",
              }}
            />

            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid " + edu.color,
                borderRadius: "10px",
                padding: isMobile ? "1.2rem" : "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "0.8rem",
                  marginBottom: "0.8rem",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: isMobile ? "1rem" : "1.2rem",
                      fontWeight: 700,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {edu.degree}
                  </h2>
                  <p
                    style={{
                      color: edu.color,
                      fontFamily: "var(--font-mono)",
                      fontSize: isMobile ? "0.72rem" : "0.82rem",
                    }}
                  >
                    {edu.institution}
                  </p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: isMobile ? "1.4rem" : "1.8rem",
                      fontWeight: 800,
                      color: edu.color,
                      lineHeight: 1,
                    }}
                  >
                    {edu.score}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.62rem",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {edu.scoreLabel}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--muted)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                }}
              >
                <Calendar size={11} /> {edu.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
