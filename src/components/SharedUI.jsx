"use client";

import { useState, useEffect } from "react";

export function An({ label, title, children, pos = "top-right", vis, T }) {
  if (!vis) return null;
  const p = {
    "top-right":    { top: 12, right: 12 },
    "top-left":     { top: 12, left: 12 },
    "bottom-right": { bottom: 12, right: 12 },
    "bottom-left":  { bottom: 12, left: 12 },
  };
  return (
    <div style={{ position: "absolute", ...p[pos], zIndex: 50, maxWidth: 340, background: T.annotBg, border: `1.5px solid ${T.annotBorder}`, borderRadius: 8, padding: "14px 16px", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, lineHeight: 1.6, color: T.annotText, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", animation: "annotFadeIn 0.3s ease" }}>
      <div style={{ display: "inline-block", background: T.annotBorder, color: "#fff", fontSize: 9, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", padding: "2px 8px", borderRadius: 3, marginBottom: 8 }}>{label}</div>
      {title && <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: T.text, marginBottom: 6 }}>{title}</div>}
      <div>{children}</div>
    </div>
  );
}

export function Sec({ children, dark = false, style = {}, T }) {
  return (
    <section style={{ position: "relative", background: dark ? T.bgDark : "transparent", color: dark ? T.textLight : T.text, ...style }}>
      {children}
    </section>
  );
}

export function Img({ height = 300, seed = 1, rounded = 8, style = {} }) {
  const g = [
    "linear-gradient(135deg,#C9B99A,#8B9D83,#6B8F7E)",
    "linear-gradient(135deg,#9EAEBA,#7A8E99,#5C7080)",
    "linear-gradient(135deg,#D4A574,#B8866F,#8E6B5A)",
    "linear-gradient(135deg,#A5B5A0,#7E9B85,#5E7F68)",
    "linear-gradient(135deg,#BCA9C0,#9A849E,#7A6680)",
    "linear-gradient(135deg,#C4B9A0,#A69880,#887A65)",
  ];
  return <div style={{ width: "100%", height, borderRadius: rounded, background: g[seed % g.length], flexShrink: 0, ...style }} />;
}

export function PageHeader({ title, desc, T }) {
  return (
    <div style={{ background: T.accent, padding: "clamp(48px, 8vw, 80px) 20px clamp(40px, 7vw, 64px)", marginBottom: 0 }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(40px, 6vw, 68px)", fontWeight: 400, fontStyle: "normal", lineHeight: "1.06", letterSpacing: "-0.02em", color: "#fff", marginBottom: 16 }}>{title}</h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, lineHeight: "28px", color: "rgba(255,255,255,0.9)", maxWidth: 700 }}>{desc}</p>
      </div>
    </div>
  );
}

export function SL({ children, T }) {
  return (
    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: T.accent, marginBottom: 20 }}>
      {children}
    </p>
  );
}

export function Btn({ children, T, primary = true, onClick, style = {} }) {
  const [h, sH] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => sH(true)}
      onMouseLeave={() => sH(false)}
      style={{
        padding: "12px 28px",
        borderRadius: 8,
        border: primary ? "none" : `1.5px solid ${T.border}`,
        background: primary ? (h ? T.accentLight : T.accent) : (h ? T.bgAlt : "transparent"),
        color: primary ? "#fff" : T.text,
        fontFamily: "'Outfit', sans-serif",
        fontSize: 14,
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.2s",
        transform: h ? "translateY(-1px)" : "none",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export function SiteFooter({ activePage, setActivePage, T }) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const allPages = [
    { id: "home",        label: "Landing Page",         group: "Pages" },
    { id: "about",       label: "About Page",           group: "Pages" },
    { id: "heroes",      label: "Hero Sections",        group: "Content Elements" },
    { id: "grid",        label: "Grid Structures",      group: "Content Elements" },
    { id: "interactive", label: "Interactive Elements", group: "Content Elements" },
    { id: "galleries",   label: "Galleries",            group: "Content Elements" },
    { id: "animation",   label: "Scroll & Motion",      group: "Content Elements" },
    { id: "navigation",  label: "Navigation",           group: "Content Elements" },
    { id: "pricing",     label: "Pricing",              group: "Content Elements" },
    { id: "contact",     label: "Contact & Leads",      group: "Content Elements" },
    { id: "themes",      label: "Themes",               group: "Reference" },
    { id: "glossary",    label: "Glossary",             group: "Reference" },
    { id: "examples",   label: "Examples",             group: "Reference" },
  ];

  const goTo = id => { setActivePage(id); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const currIdx = allPages.findIndex(p => p.id === activePage);
  const next = allPages[(currIdx + 1) % allPages.length];

  const groups = [
    { label: "Pages",            pages: allPages.filter(p => p.group === "Pages") },
    { label: "Content Elements", pages: allPages.filter(p => p.group === "Content Elements") },
    { label: "Reference",        pages: allPages.filter(p => p.group === "Reference") },
  ];

  return (
    <footer style={{ background: T.bgDark }}>

      {/* Next section */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "0 20px" }}>
        <div
          onClick={() => goTo(next.id)}
          onMouseEnter={e => e.currentTarget.querySelector(".next-arrow").style.borderColor = "rgba(255,255,255,0.4)"}
          onMouseLeave={e => e.currentTarget.querySelector(".next-arrow").style.borderColor = "rgba(255,255,255,0.15)"}
          style={{ maxWidth: 1040, margin: "0 auto", padding: "36px 0", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}
        >
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.3)", marginBottom: 8 }}>Next section</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(20px,3vw,30px)", color: "#fff", fontWeight: 400 }}>{next.label} →</div>
          </div>
          <div className="next-arrow" style={{ width: 44, height: 44, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", fontSize: 18, flexShrink: 0, transition: "border-color 0.2s" }}>→</div>
        </div>
      </div>

      {/* Nav grid */}
      <div style={{ padding: "0 20px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: mobile ? "32px 0" : "48px 0", display: "grid", gridTemplateColumns: mobile ? "1fr 1fr" : "2fr 1fr 1.5fr 1fr", gap: mobile ? "28px 24px" : "32px 40px" }}>

          {/* Brand column */}
          <div style={{ gridColumn: mobile ? "1 / -1" : "auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: T.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700 }}>W</div>
              <span style={{ fontWeight: 600, fontSize: 15, color: "#fff", fontFamily: "'Outfit', sans-serif" }}>Web Anatomy</span>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.35)", maxWidth: 220, marginBottom: 20 }}>An interactive reference for understanding how great websites are structured.</p>
            <a href="https://calumma.design" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: T.accent, textDecoration: "none", fontWeight: 500 }}>Made by Calumma →</a>
          </div>

          {/* Nav columns */}
          {groups.map(g => (
            <div key={g.label}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", marginBottom: 16 }}>{g.label}</div>
              {g.pages.map(p => (
                <div
                  key={p.id}
                  onClick={() => goTo(p.id)}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => { e.currentTarget.style.color = p.id === activePage ? T.accent : "rgba(255,255,255,0.45)"; }}
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: p.id === activePage ? T.accent : "rgba(255,255,255,0.45)", marginBottom: 10, cursor: "pointer", transition: "color 0.15s" }}
                >{p.label}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "0 20px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "18px 0", display: "flex", flexDirection: mobile ? "column" : "row", justifyContent: "space-between", alignItems: mobile ? "flex-start" : "center", gap: mobile ? 6 : 0 }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.2)" }}>© 2026 Calumma. All rights reserved.</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.15)", letterSpacing: "0.1em" }}>WEB ANATOMY</span>
        </div>
      </div>

    </footer>
  );
}
