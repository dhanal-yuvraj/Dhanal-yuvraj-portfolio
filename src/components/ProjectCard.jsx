import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--surface)" : "transparent",
        border: `1px solid ${hovered ? project.color : "var(--border)"}`,
        borderRadius: "12px",
        padding: "2rem",
        transition: "all 0.3s ease",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: hovered
            ? `linear-gradient(90deg, transparent, ${project.color}, transparent)`
            : "transparent",
          transition: "all 0.3s",
        }}
      />

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.3rem",
          fontWeight: 700,
          color: hovered ? project.color : "var(--text)",
          marginBottom: "0.8rem",
          transition: "color 0.3s",
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          color: "var(--muted)",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          marginBottom: "1.5rem",
        }}
      >
        {project.description}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "1.5rem",
        }}
      >
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              padding: "0.3rem 0.7rem",
              border: `1px solid var(--border)`,
              borderRadius: "4px",
              color: "var(--muted)",
              background: "var(--bg)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "var(--muted)",
            fontSize: "0.82rem",
            fontFamily: "var(--font-mono)",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = project.color)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          <Github size={14} /> GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "var(--muted)",
            fontSize: "0.82rem",
            fontFamily: "var(--font-mono)",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = project.color)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          <ExternalLink size={14} /> Live Demo
        </a>
      </div>
    </div>
  );
}
