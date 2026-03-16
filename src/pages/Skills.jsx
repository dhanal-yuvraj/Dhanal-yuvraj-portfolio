import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useWindowSize from "../hooks/useWindowSize";

var skillGroups = [
  {
    category: "Languages",
    icon: "{}",
    accent: "#3b82f6",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "C", level: 70 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    category: "Frontend",
    icon: "FE",
    accent: "#60a5fa",
    skills: [
      { name: "React.js", level: 88 },
      { name: "HTML / CSS", level: 90 },
      { name: "Tailwind CSS", level: 70 },
    ],
  },
  {
    category: "Backend",
    icon: "BE",
    accent: "#93c5fd",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "REST APIs", level: 85 },
      { name: "Java DSA", level: 82 },
    ],
  },
  {
    category: "Database",
    icon: "DB",
    accent: "#bfdbfe",
    skills: [
      { name: "MongoDB", level: 76 },
      { name: "MySQL", level: 70 },
      { name: "Git / GitHub", level: 88 },
    ],
  },
];

var tools = [
  "VS Code",
  "Postman",
  "Vercel",
  "Netlify",
  "npm",
];

function SkillBar(props) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.4rem",
        }}
      >
        <span
          style={{ fontSize: "0.88rem", color: "var(--text)", fontWeight: 500 }}
        >
          {props.name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--text2)",
          }}
        >
          {props.level}%
        </span>
      </div>
      <div
        style={{
          height: "5px",
          background: "var(--border2)",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: props.level + "%",
            background:
              "linear-gradient(90deg," +
              props.accent +
              "99," +
              props.accent +
              ")",
            borderRadius: "999px",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: isMobile ? "6rem 1.5rem 3rem" : "7rem 3rem 5rem",
        maxWidth: "1100px",
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
          // what I work with
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: isMobile ? "2rem" : "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Skills & Technologies
        </h1>
      </div>

      {/* Skill cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1.5rem",
          marginBottom: "3rem",
        }}
      >
        {skillGroups.map(function (group, i) {
          return (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "1.6rem",
                transition: "border-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={function (e) {
                e.currentTarget.style.borderColor = group.accent + "55";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={function (e) {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1.4rem",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: group.accent + "18",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: group.accent,
                  }}
                >
                  {group.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                  }}
                >
                  {group.category}
                </h3>
              </div>
              {group.skills.map(function (s) {
                return (
                  <SkillBar
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    accent={group.accent}
                  />
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Tools */}
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "14px",
          padding: "1.6rem",
          marginBottom: "3rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--text2)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Tools & Environment
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
          {tools.map(function (t) {
            return (
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  padding: "0.4rem 0.9rem",
                  background: "var(--accent-dim)",
                  color: "var(--accent-bright)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  borderRadius: "6px",
                }}
              >
                {t}
              </span>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          background:
            "linear-gradient(135deg, var(--surface) 0%, #0d1932 100%)",
          border: "1px solid rgba(59,130,246,0.2)",
          borderRadius: "16px",
          padding: isMobile ? "1.8rem" : "2.5rem",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-40px",
            top: "-40px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1.4rem",
              marginBottom: "0.4rem",
            }}
          >
            Have a project in mind?
          </h2>
          <p style={{ color: "var(--text2)", fontSize: "0.9rem" }}>
            Let's build something great together.
          </p>
        </div>
        <Link
          to="/contact"
          className="btn-primary"
          style={isMobile ? { width: "100%", justifyContent: "center" } : {}}
        >
          Contact Me <ArrowRight size={15} />
        </Link>
      </div>
    </main>
  );
}
