import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Download } from "lucide-react";
import { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";

const roles = [
  "Full Stack Developer",
  "React.js Engineer",
  "Java DSA Enthusiast",
  "Problem Solver",
];

export default function Home() {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];

    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: isMobile
          ? "5rem 1.5rem 3rem"
          : isTablet
            ? "5rem 2rem 3rem"
            : "5rem 3rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: isMobile ? "300px" : "600px",
            height: isMobile ? "300px" : "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              "linear-gradient(var(--border2) 1px, transparent 1px), linear-gradient(90deg, var(--border2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Decorative rings */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            right: "4%",
            top: "15%",
            zIndex: 0,
          }}
        >
          {[520, 380, 240].map((size, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: size,
                height: size,
                borderRadius: "50%",
                border: `1px solid rgba(59,130,246,${0.06 - i * 0.015})`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
      )}

      {/* Main Grid */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 400px",
          gap: isMobile ? "2.5rem" : "4rem",
          alignItems: "center",
          maxWidth: "1150px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ order: isMobile ? 2 : 1 }}>
          {/* Location Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "var(--surface)",
              border: "1px solid var(--border2)",
              borderRadius: "999px",
              padding: "0.38rem 1rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--accent)",
                animation: "livePulse 2s infinite",
              }}
            />

            <MapPin size={11} color="var(--text2)" />

            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text2)",
              }}
            >
              India
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: isMobile
                ? "2.4rem"
                : isTablet
                  ? "3.2rem"
                  : "clamp(2.8rem,5vw,4.8rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                color: "var(--accent-bright)",
                textShadow: "0 0 40px rgba(96,165,250,0.35)",
              }}
            >
              Yuvraj
            </span>
          </h1>

          {/* Typing Animation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.2rem",
              height: "28px",
            }}
          >
            <span
              style={{
                color: "var(--muted)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
              }}
            >
              $
            </span>

            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: isMobile ? "0.8rem" : "0.95rem",
                color: "var(--accent-bright)",
                borderRight: "2px solid var(--accent)",
                paddingRight: "3px",
                animation: "cursorBlink 1s infinite",
              }}
            >
              {displayed}
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              color: "var(--text2)",
              fontSize: isMobile ? "0.9rem" : "1rem",
              lineHeight: 1.85,
              maxWidth: "460px",
              marginBottom: "2rem",
            }}
          >
            Engineering student at{" "}
            <span style={{ color: "var(--text)" }}>AITAM</span>, crafting
            full-stack applications from pixel-perfect UIs to robust backends.
            Passionate about clean architecture and solving real problems with
            code.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            <Link
              to="/contact"
              className="btn-primary"
              style={
                isMobile ? { flex: "1 1 100%", justifyContent: "center" } : {}
              }
            >
              Get in Touch <ArrowRight size={15} />
            </Link>

            <Link
              to="/projects"
              className="btn-outline"
              style={
                isMobile
                  ? { flex: "1 1 calc(50% - 0.4rem)", justifyContent: "center" }
                  : {}
              }
            >
              View Projects
            </Link>

            <a
              href="/Yuvraj_Resume.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.78rem 1.6rem",
                borderRadius: "8px",
                border: "1px solid rgba(59,130,246,0.35)",
                background: "rgba(59,130,246,0.06)",
                color: "var(--accent-bright)",
                fontFamily: "var(--font-display)",
                fontSize: "0.9rem",
                fontWeight: 500,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <Download size={15} />
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            position: "relative",
            order: isMobile ? 1 : 2,
            maxWidth: isMobile ? "280px" : "400px",
            margin: isMobile ? "0 auto" : "0",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3/4",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid var(--border2)",
            }}
          >
            <img
              src="/yuvraj.jpg"
              alt="Yuvraj"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
      @keyframes cursorBlink{
        0%,100%{border-color:var(--accent)}
        50%{border-color:transparent}
      }

      @keyframes livePulse{
        0%,100%{box-shadow:0 0 0 0 rgba(59,130,246,0.5)}
        50%{box-shadow:0 0 0 5px rgba(59,130,246,0)}
      }
      `}</style>
    </main>
  );
}
