import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import useWindowSize from "../hooks/useWindowSize";

export default function Projects() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: isMobile ? "6rem 1.5rem 3rem" : "7rem 3rem 4rem",
        maxWidth: "960px",
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
          // what I've built
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: isMobile ? "2rem" : "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Projects
        </h1>
        <p
          style={{
            color: "var(--text2)",
            marginTop: "0.8rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.82rem",
          }}
        >
          Selected work — full stack applications built from scratch.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </main>
  );
}
