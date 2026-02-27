"use client";

import { useState, useRef, useEffect } from "react";

export function Nav({ activePage, setActivePage, lm, setLm, T, setInfoOpen }) {
  const standalone = [
    { id: "home",  label: "Landing Page" },
    { id: "about", label: "About Page" },
  ];

  const contentElements = [
    { id: "heroes",      label: "Hero Sections" },
    { id: "grid",        label: "Grid Structures" },
    { id: "interactive", label: "Interactive Elements" },
    { id: "galleries",   label: "Galleries" },
    { id: "animation",   label: "Scroll & Motion" },
    { id: "navigation",  label: "Navigation" },
    { id: "pricing",     label: "Pricing" },
    { id: "contact",     label: "Contact & Leads" },
  ];

  const standalone2 = [
    { id: "themes",   label: "Themes" },
    { id: "glossary", label: "Glossary" },
    { id: "examples", label: "Examples" },
  ];

  const allPages = [...standalone, ...contentElements, ...standalone2];

  const [megaHover,     setMegaHover]     = useState(false);
  const [megaItemHover, setMegaItemHover] = useState(null); // fix: replaces useState inside map
  const [mobileOpen,    setMobileOpen]    = useState(false);

  const isContentPage = contentElements.some(p => p.id === activePage);
  const megaTimer = useRef(null);

  const openMega  = () => { clearTimeout(megaTimer.current); setMegaHover(true); };
  const closeMega = () => { megaTimer.current = setTimeout(() => setMegaHover(false), 150); };

  const NavBtn = ({ id, label, active, onClick }) => {
    const [h, sH] = useState(false);
    return (
      <button
        onClick={onClick || (() => setActivePage(id))}
        onMouseEnter={() => sH(true)}
        onMouseLeave={() => sH(false)}
        style={{ padding: "5px 12px", borderRadius: 6, border: "none", background: active ? T.accent : h ? "rgba(43,107,90,0.08)" : "transparent", color: active ? "#fff" : h ? T.text : T.textMuted, fontFamily: "'Outfit', sans-serif", fontSize: 12.5, fontWeight: 500, cursor: "pointer", transition: "all 0.15s", whiteSpace: "nowrap" }}
      >
        {label}
      </button>
    );
  };

  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 100, background: T.bg + "EA", backdropFilter: "blur(14px)", borderBottom: `1px solid ${T.border}`, fontFamily: "'Outfit', sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }} onClick={() => setActivePage("home")}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: T.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700 }}>W</div>
          <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em", color: T.text }}>Web Anatomy</span>
        </div>

        {/* Desktop nav */}
        <div className="wa-dn" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {standalone.map(p => <NavBtn key={p.id} {...p} active={activePage === p.id} />)}

          {/* Mega dropdown */}
          <div onMouseEnter={openMega} onMouseLeave={closeMega} style={{ position: "relative" }}>
            <NavBtn
              id="content"
              label={`Content Elements ${megaHover ? "▴" : "▾"}`}
              active={isContentPage && !megaHover}
              onClick={openMega}
            />
            {megaHover && (
              <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", paddingTop: 8 }}>
                <div
                  onMouseEnter={openMega}
                  onMouseLeave={closeMega}
                  style={{ background: T.cardBg, border: `1px solid ${T.border}`, borderRadius: 12, padding: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, minWidth: 320, boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}
                >
                  {contentElements.map(p => (
                    <button
                      key={p.id}
                      onClick={() => { setActivePage(p.id); setMegaHover(false); }}
                      onMouseEnter={() => setMegaItemHover(p.id)}
                      onMouseLeave={() => setMegaItemHover(null)}
                      style={{ padding: "9px 14px", borderRadius: 8, border: "none", background: activePage === p.id ? T.accent : megaItemHover === p.id ? T.bgAlt : "transparent", color: activePage === p.id ? "#fff" : T.text, fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500, cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {standalone2.map(p => <NavBtn key={p.id} {...p} active={activePage === p.id} />)}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {/* Info button */}
          <button
            onClick={() => setInfoOpen(true)}
            onMouseEnter={e => { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.color = T.accent; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.textMuted; }}
            style={{ width: 30, height: 30, borderRadius: "50%", border: `1.5px solid ${T.border}`, background: T.cardBg, color: T.textMuted, fontSize: 13, fontWeight: 600, fontFamily: "'Instrument Serif', serif", fontStyle: "italic", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
          >
            i
          </button>

          {/* Learning toggle */}
          <button
            onClick={() => setLm(!lm)}
            style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 20, border: `1.5px solid ${lm ? T.annotBorder : T.border}`, background: lm ? T.annotBg : T.cardBg, color: lm ? T.annotText : T.textMuted, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 500, cursor: "pointer", transition: "all 0.25s", letterSpacing: "0.02em" }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: lm ? T.annotBorder : T.border, transition: "all 0.25s" }} />
            {lm ? "Learning ON" : "Learning OFF"}
          </button>

          {/* Mobile hamburger */}
          <button
            className="wa-mm"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ display: "none", width: 36, height: 36, borderRadius: 8, border: `1px solid ${T.border}`, background: T.cardBg, cursor: "pointer", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 4 }}
          >
            <span style={{ width: 16, height: 1.5, background: T.text, borderRadius: 1, transition: "all 0.2s", transform: mobileOpen ? "rotate(45deg) translateY(2.75px)" : "none" }} />
            <span style={{ width: 16, height: 1.5, background: T.text, borderRadius: 1, transition: "all 0.2s", opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ width: 16, height: 1.5, background: T.text, borderRadius: 1, transition: "all 0.2s", transform: mobileOpen ? "rotate(-45deg) translateY(-2.75px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ padding: "8px 20px 16px", display: "flex", flexDirection: "column", gap: 2, borderTop: `1px solid ${T.border}`, background: T.bg, maxHeight: "70vh", overflowY: "auto" }}>
          {allPages.map(p => (
            <button
              key={p.id}
              onClick={() => { setActivePage(p.id); setMobileOpen(false); }}
              style={{ padding: "10px 12px", borderRadius: 8, border: "none", textAlign: "left", background: activePage === p.id ? T.accent : "transparent", color: activePage === p.id ? "#fff" : T.text, fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 500, cursor: "pointer" }}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export function IntroModal({ open, onEnter, T }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(8px)" }}>
      <div style={{ width: "min(90vw,520px)", background: T.cardBg, borderRadius: 20, padding: "clamp(32px,6vw,52px)", position: "relative", boxShadow: "0 24px 80px rgba(0,0,0,0.3)" }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: T.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 24 }}>W</div>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px,4vw,34px)", fontWeight: 400, color: T.text, marginBottom: 14, lineHeight: 1.15 }}>About Web Anatomy</h2>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, lineHeight: 1.75, color: T.textMuted }}>
          <p style={{ marginBottom: 12 }}>Web Anatomy is an interactive reference tool created by <strong style={{ color: T.text }}>Calumma</strong> — a design studio that helps mission-driven organisations unveil their unique value to the world.</p>
          <p style={{ marginBottom: 12 }}>We built this because organisations know they need a website, but struggle to articulate <em>what</em> should go on it and <em>why</em>. Web Anatomy solves this by showing — not just telling — how different sections, layouts, and patterns work.</p>
          <p style={{ marginBottom: 28 }}>Toggle <strong style={{ color: T.annotText }}>"Learning ON"</strong> in the nav to see educational annotations throughout, explaining the thinking behind every design decision.</p>
          <button
            onClick={onEnter}
            style={{ width: "100%", padding: "14px 24px", borderRadius: 10, border: "none", background: T.accent, color: "#fff", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600, cursor: "pointer", letterSpacing: "-0.01em" }}
          >
            Enter and explore →
          </button>
        </div>
      </div>
    </div>
  );
}

export function InfoModal({ open, onClose, T }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(4px)" }}>
      <div onClick={e => e.stopPropagation()} style={{ width: "min(90vw,500px)", background: T.cardBg, borderRadius: 16, padding: "clamp(28px,5vw,44px)", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 12, right: 12, width: 32, height: 32, borderRadius: "50%", border: "none", background: T.bgAlt, color: T.textMuted, fontSize: 16, cursor: "pointer" }}>✕</button>
        <div style={{ width: 40, height: 40, borderRadius: 8, background: T.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 20 }}>W</div>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, fontWeight: 400, color: T.text, marginBottom: 12 }}>About Web Anatomy</h2>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, lineHeight: 1.7, color: T.textMuted }}>
          <p style={{ marginBottom: 12 }}>Web Anatomy is an interactive reference tool created by <strong style={{ color: T.text }}>Calumma</strong> — a design studio that helps mission-driven organisations unveil their unique value to the world.</p>
          <p style={{ marginBottom: 12 }}>We built this because we noticed a recurring challenge: organisations know they need a website, but they struggle to articulate <em>what</em> should go on it and <em>why</em>. When they approach a developer, they don't have the vocabulary or mental models to brief effectively.</p>
          <p style={{ marginBottom: 12 }}>Web Anatomy solves this by showing — not just telling — how different website sections, layouts, and interactive elements work, what purpose they serve, and when to use them.</p>
          <p style={{ marginBottom: 16 }}>Toggle <strong style={{ color: T.annotText }}>"Learning ON"</strong> to see educational annotations on every section, explaining the strategic thinking behind each design pattern.</p>
          <a href="https://calumma.design" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "10px 20px", borderRadius: 8, background: T.accent, color: "#fff", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
            Visit calumma.design →
          </a>
        </div>
      </div>
    </div>
  );
}
