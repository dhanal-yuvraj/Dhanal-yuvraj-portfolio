import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Send,
  Mail,
  MapPin,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import useWindowSize from "../hooks/useWindowSize";

const EMAILJS_SERVICE_ID = "service_2amcp9q";
const EMAILJS_TEMPLATE_ID = "template_i7ijukk";
const EMAILJS_PUBLIC_KEY = "RR8TKwI4BfD76k3FH";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/dhanal-yuvraj",
    hoverColor: "#e2e8f0",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dhanal-yuvraj/",
    hoverColor: "#0a66c2",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/dhanal_yuvraj/",
    hoverColor: "#f89f1b",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z" />
      </svg>
    ),
  },
];

const inputStyle = {
  width: "100%",
  padding: "0.85rem 1rem",
  background: "var(--surface2)",
  border: "1px solid var(--border2)",
  borderRadius: "10px",
  color: "var(--text)",
  fontFamily: "var(--font-display)",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

function Field({ label, as, ...props }) {
  const [focused, setFocused] = useState(false);
  const merged = {
    ...props,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...inputStyle,
      borderColor: focused ? "var(--accent)" : "var(--border2)",
      boxShadow: focused ? "0 0 0 3px var(--accent-dim)" : "none",
      ...(as === "textarea"
        ? { resize: "vertical", minHeight: "130px", lineHeight: 1.6 }
        : {}),
    },
  };
  return (
    <div style={{ marginBottom: "1.2rem" }}>
      <label
        style={{
          display: "block",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--text2)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}
      >
        {label}
      </label>
      {as === "textarea" ? <textarea {...merged} /> : <input {...merged} />}
    </div>
  );
}

export default function Contact() {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_name: "Yuvraj",
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: isMobile ? "6rem 1.5rem 3rem" : "7rem 3rem 5rem",
        maxWidth: "1050px",
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
          // let's connect
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: isMobile ? "2rem" : "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Get In Touch
        </h1>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1.6fr",
          gap: "2.5rem",
          alignItems: "start",
        }}
      >
        {/* Info panel */}
        <div>
          <p
            style={{
              color: "var(--text2)",
              fontSize: "0.95rem",
              lineHeight: 1.85,
              marginBottom: "2rem",
            }}
          >
            Whether you have a project idea, want to collaborate, or just want
            to say hi — my inbox is always open.
          </p>

          {[
            {
              icon: <Mail size={16} />,
              label: "Email",
              value: "dhanal.yuvraj06@gmail.com",
            },
            {
              icon: <MapPin size={16} />,
              label: "Location",
              value: "India 🇮🇳",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1rem",
                padding: "1rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  flexShrink: 0,
                  background: "var(--accent-dim)",
                  color: "var(--accent-bright)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text)",
                    fontWeight: 500,
                  }}
                >
                  {item.value}
                </div>
              </div>
            </div>
          ))}

          <div
            style={{
              display: "flex",
              gap: "0.7rem",
              marginTop: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  border: "1px solid var(--border2)",
                  color: "var(--text2)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = s.hoverColor;
                  e.currentTarget.style.color = s.hoverColor;
                  e.currentTarget.style.background = s.hoverColor + "18";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border2)";
                  e.currentTarget.style.color = "var(--text2)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div
            style={{
              marginTop: "2rem",
              padding: "1rem",
              background: "rgba(59,130,246,0.06)",
              border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.3rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#22d3ee",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                }}
              >
                Available for Work
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text2)",
                lineHeight: 1.6,
              }}
            >
              Open to internships, freelance, and full-time roles. Graduating
              2026.
            </p>
          </div>
        </div>

        {/* Form */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: isMobile ? "1.5rem" : "2rem",
          }}
        >
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
              <CheckCircle
                size={48}
                color="#22d3ee"
                style={{ marginBottom: "1rem" }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  marginBottom: "0.5rem",
                }}
              >
                Message Sent!
              </h3>
              <p
                style={{
                  color: "var(--text2)",
                  fontSize: "0.9rem",
                  marginBottom: "1.5rem",
                }}
              >
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button
                className="btn-outline"
                onClick={() => setStatus("idle")}
                style={{ cursor: "pointer" }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: "0 1rem",
                }}
              >
                <Field
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handle}
                  placeholder="John Doe"
                  required
                />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handle}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handle}
                placeholder="Project collaboration..."
                required
              />
              <Field
                label="Message"
                name="message"
                as="textarea"
                value={form.message}
                onChange={handle}
                placeholder="Tell me about your project or just say hi..."
                required
              />

              {status === "error" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.8rem 1rem",
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.25)",
                    borderRadius: "8px",
                    marginBottom: "1rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: "#f87171",
                  }}
                >
                  <AlertCircle size={14} /> Failed to send. Check your EmailJS
                  credentials or email me directly.
                </div>
              )}

              <button
                type="submit"
                className="btn-primary"
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "0.9rem",
                  fontSize: "0.9rem",
                  opacity: status === "loading" ? 0.7 : 1,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                }}
              >
                {status === "loading" ? (
                  <>
                    <Loader
                      size={15}
                      style={{ animation: "spin 1s linear infinite" }}
                    />{" "}
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </main>
  );
}
