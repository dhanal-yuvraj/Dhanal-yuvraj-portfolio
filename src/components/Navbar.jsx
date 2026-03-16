import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import useWindowSize from "../hooks/useWindowSize";

const links = [
  { path: "/", label: "Home" },
  { path: "/education", label: "Education" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { width } = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = width < 768;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "1rem 1.5rem" : "1rem 3rem",
          background: "rgba(6,8,15,0.92)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.9rem",
            color: "var(--accent-bright)",
            letterSpacing: "0.04em",
            fontWeight: 500,
          }}
        >
          &lt;<span style={{ color: "var(--text)" }}>yuvraj</span> /&gt;
        </Link>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            {links.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  color:
                    pathname === l.path
                      ? "var(--accent-bright)"
                      : "var(--text2)",
                  transition: "color 0.2s",
                  position: "relative",
                  paddingBottom: "2px",
                }}
              >
                {pathname === l.path && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      right: 0,
                      height: "1px",
                      background: "var(--accent)",
                      borderRadius: "1px",
                    }}
                  />
                )}
                {l.label}
              </Link>
            ))}
          </div>
        )}

        {/* Desktop hire me */}
        {!isMobile && (
          <Link
            to="/contact"
            className="btn-primary"
            style={{ padding: "0.55rem 1.2rem", fontSize: "0.82rem" }}
          >
            Hire Me
          </Link>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text)",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}
      </nav>

      {/* Mobile menu dropdown */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "57px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(6,8,15,0.98)",
            backdropFilter: "blur(24px)",
            borderBottom: "1px solid var(--border)",
            padding: "1rem 1.5rem 1.5rem",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 500,
                color:
                  pathname === l.path ? "var(--accent-bright)" : "var(--text2)",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border)",
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary"
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "1rem",
              padding: "0.75rem",
            }}
          >
            Hire Me
          </Link>
        </div>
      )}
    </>
  );
}
