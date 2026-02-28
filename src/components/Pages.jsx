"use client";

import { useState, useEffect, useRef } from "react";
import { An, Sec, Img, PageHeader, SL, Btn, SiteFooter } from "./SharedUI";

// ═══════════════════════════════════════════════════════════
// HOME / LANDING PAGE
// ═══════════════════════════════════════════════════════════
export function HomePage({ lm, T, activePage, setActivePage }) {
  const [playing, setPlaying] = useState(false);
  const [tqi, setTqi] = useState(0); // testimonial quote index
  const [tPaused, setTPaused] = useState(false);
  const testimonials = [
    { q: "They didn't just redesign our site — they redesigned how we think about our organisation's story. Enquiries doubled in three months.", name: "Sarah O.", role: "CEO, Global Health Initiative" },
    { q: "We finally have a website that explains what we do without us having to be in the room. It's like having a 24-hour salesperson.", name: "Marcus L.", role: "Director, Community Foundation" },
    { q: "The clarity of thinking that went into every section gave us a framework we still use internally, two years on.", name: "Priya K.", role: "Head of Communications, HundrED" },
  ];
  useEffect(() => {
    if (tPaused) return;
    const id = setInterval(() => setTqi(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [tPaused, testimonials.length]);
  return (
    <>
      <PageHeader T={T} title="The ideal landing page" desc="Every section below serves a purpose. Together they form a complete, conversion-focused page. Toggle Learning ON to understand the role of each." />

      {/* Hero */}
      <Sec T={T} style={{ padding: "clamp(60px,10vw,100px) 20px 60px" }}>
        <An T={T} label="Hero Section" title="The first impression" pos="top-right" vis={lm}>Must answer: What do you do? Who is it for? What should I do next?</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.15em", color: T.accent, marginBottom: 20 }}>Tagline that positions your brand</p>
          <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 400, lineHeight: 1.06, letterSpacing: "-0.02em", marginBottom: 24, color: T.text, maxWidth: 760 }}>A clear headline that says <em style={{ fontStyle: "italic", color: T.accent }}>exactly</em> what you do</h2>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 22, lineHeight: "28px", color: T.textMuted, maxWidth: 560, marginBottom: 40 }}>Supporting sentence that adds context. Two lines maximum.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn T={T}>Primary Action</Btn>
            <Btn T={T} primary={false}>Secondary Action</Btn>
          </div>
        </div>
      </Sec>

      {/* Trust Bar */}
      <Sec T={T} style={{ padding: "40px 20px", borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}` }}>
        <An T={T} label="Trust Bar" title="Social proof at a glance" pos="top-left" vis={lm}>Logos or a short "Trusted by X organisations." Validates credibility instantly.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: T.textMuted, textAlign: "center", marginBottom: 24 }}>Trusted by organisations worldwide</p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(20px,5vw,48px)", flexWrap: "wrap", opacity: 0.35 }}>
            {["Partner A", "Partner B", "Partner C", "Partner D", "Partner E"].map((n, i) => (
              <div key={i} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.05em", color: T.text, whiteSpace: "nowrap" }}>{n}</div>
            ))}
          </div>
        </div>
      </Sec>

      {/* 3-Column Grid */}
      <Sec T={T} style={{ padding: "64px 20px" }}>
        <An T={T} label="3-Column Grid" title="The classic value proposition" pos="top-right" vis={lm}>Three is memorable. Use for services, benefits, or differentiators. Each column scannable in under 5 seconds.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(26px,4vw,40px)", fontWeight: 400, lineHeight: 1.2, marginBottom: 14, color: T.text }}>What makes this different</h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, color: T.textMuted, maxWidth: 480, margin: "0 auto" }}>A brief introduction that sets up the three points below.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
            {[
              { icon: "◆", title: "First Value Point",  desc: "Concise explanation of a key benefit. Two or three sentences max." },
              { icon: "●", title: "Second Value Point", desc: "Each column carries equal weight. If one needs more text, rewrite." },
              { icon: "▲", title: "Third Value Point",  desc: "Odd numbers create visual harmony. Three is the sweet spot." },
            ].map((it, i) => (
              <div key={i} style={{ padding: "28px 24px", borderRadius: 12, border: `1px solid ${T.border}`, background: T.cardBg }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: T.bgAlt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: T.accent, marginBottom: 18 }}>{it.icon}</div>
                <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 17, fontWeight: 600, marginBottom: 8, color: T.text }}>{it.title}</h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, lineHeight: 1.65, color: T.textMuted }}>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* 4-Column Grid */}
      <Sec T={T} style={{ padding: "64px 20px", background: T.bgAlt }}>
        <An T={T} label="4-Column Grid" title="Process or feature breakdown" pos="top-right" vis={lm}>Four columns for processes or features. Keep descriptions short — four items with long text becomes a wall.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(26px,4vw,40px)", fontWeight: 400, textAlign: "center", marginBottom: 48, color: T.text }}>How it works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
            {[
              { n: "01", t: "Discovery", d: "Understand the challenge." },
              { n: "02", t: "Strategy",  d: "Define the approach." },
              { n: "03", t: "Creation",  d: "Design and build." },
              { n: "04", t: "Delivery",  d: "Launch and refine." },
            ].map((it, i) => (
              <div key={i} style={{ padding: "24px 20px" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, fontWeight: 500, color: T.accent, marginBottom: 14 }}>{it.n}</div>
                <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, fontWeight: 600, marginBottom: 6, color: T.text }}>{it.t}</h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, lineHeight: 1.6, color: T.textMuted }}>{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Full-Width Statement */}
      <Sec T={T} style={{ padding: "clamp(60px,10vw,100px) 20px" }}>
        <An T={T} label="Full-Width Statement" title="The manifesto moment" pos="top-right" vis={lm}>A single powerful sentence in large type. Creates breathing space between dense sections.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(28px,5vw,60px)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.02em", color: T.text }}>A bold statement that captures your core belief — <span style={{ color: T.accent }}>the thing that keeps you going</span> when everything gets complicated.</h2>
        </div>
      </Sec>

      {/* Zigzag Alternating Layout */}
      <Sec T={T} style={{ padding: "64px 20px" }}>
        <An T={T} label="Alternating Layout" title="The zigzag storyteller" pos="top-right" vis={lm}>Image-text pairs in alternating positions. Each row should stand alone.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
          {[
            { t: "A feature explained visually",    d: "The image shows, the text tells. Together they create understanding faster than either alone.", s: 2 },
            { t: "Another angle on what you offer", d: "Reversing the layout creates visual rhythm — the eye follows an S-curve down the page.", s: 3 },
          ].map((r, i) => (
            <div key={i} style={{ display: "flex", flexDirection: i % 2 === 0 ? "row" : "row-reverse", gap: 36, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 340px", minWidth: 260 }}><Img height={280} seed={r.s} rounded={12} /></div>
              <div style={{ flex: "1 1 340px", minWidth: 260 }}>
                <h3 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(22px,3vw,30px)", fontWeight: 400, lineHeight: 1.25, marginBottom: 14, color: T.text }}>{r.t}</h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, lineHeight: 1.7, color: T.textMuted }}>{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      {/* Video placeholder */}
      <Sec T={T} style={{ padding: "64px 20px", background: T.bgAlt }}>
        <An T={T} label="Video" title="Show, don't tell" pos="top-left" vis={lm}>Increases time on page by up to 88%. Keep under 90s for marketing.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(26px,4vw,40px)", fontWeight: 400, marginBottom: 10, color: T.text }}>See it in action</h2>
          </div>
          <div
            onClick={() => setPlaying(!playing)}
            style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 14, overflow: "hidden", cursor: "pointer", background: "linear-gradient(135deg,#2B3A42,#1C2830,#0F1A20)" }}
          >
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 14 }}>
              <div
                style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                {playing
                  ? <div style={{ display: "flex", gap: 6 }}><div style={{ width: 4, height: 18, background: "#fff", borderRadius: 1 }} /><div style={{ width: 4, height: 18, background: "#fff", borderRadius: 1 }} /></div>
                  : <div style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "10px 0 10px 18px", borderColor: "transparent transparent transparent #fff", marginLeft: 3 }} />
                }
              </div>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{playing ? "Playing" : "Click to play"}</span>
            </div>
          </div>
        </div>
      </Sec>

      {/* Stats Section */}
      <Sec T={T} dark style={{ padding: "60px 20px", background: T.bgDark }}>
        <An T={T} label="Stats Section" title="Numbers build credibility" pos="top-right" vis={lm}>Human brains trust numbers. Choose metrics that matter to your audience.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 28, textAlign: "center" }}>
          {[
            { n: "200+", l: "Organisations served" },
            { n: "15",   l: "Countries reached" },
            { n: "98%",  l: "Client satisfaction" },
            { n: "12yr", l: "Combined experience" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(32px,5vw,48px)", fontWeight: 400, letterSpacing: "-0.02em", color: "#fff", marginBottom: 6 }}>{s.n}</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </Sec>

      {/* Testimonial Carousel */}
      <Sec T={T} style={{ padding: "64px 20px" }}>
        <An T={T} label="Testimonial" title="Let others sell for you" pos="top-right" vis={lm}>One well-chosen testimonial beats ten mediocre ones. Include a specific outcome. A carousel lets you rotate multiple without clutter.</An>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }} onMouseEnter={() => setTPaused(true)} onMouseLeave={() => setTPaused(false)}>
          <div style={{ fontSize: 72, lineHeight: 1, color: T.accent, fontFamily: "'Instrument Serif',serif", marginBottom: 8 }}>"</div>
          <blockquote style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(22px,3vw,40px)", fontWeight: 400, lineHeight: 1.3, fontStyle: "italic", color: T.text, marginBottom: 32, transition: "opacity 0.3s" }}>
            {testimonials[tqi].q}
          </blockquote>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 32 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg,hsl(${tqi * 80 + 30},25%,55%),hsl(${tqi * 80 + 90},20%,42%))` }} />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 600, color: T.text }}>{testimonials[tqi].name}</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: T.textMuted }}>{testimonials[tqi].role}</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTqi(i)} style={{ width: i === tqi ? 20 : 8, height: 8, borderRadius: 4, border: "none", background: i === tqi ? T.accent : T.border, cursor: "pointer", transition: "all 0.25s" }} />
            ))}
          </div>
        </div>
      </Sec>

      {/* CTA */}
      <Sec T={T} style={{ padding: "64px 20px", background: T.accent, color: "#fff" }}>
        <An T={T} label="CTA" title="Conversion moment" pos="top-right" vis={lm}>One purpose: get the visitor to act. One headline, one button.</An>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(26px,4vw,42px)", fontWeight: 400, lineHeight: 1.2, marginBottom: 14 }}>Ready to get started?</h2>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, opacity: 0.8, marginBottom: 28 }}>A single sentence that removes the last hesitation.</p>
          <button
            style={{ padding: "14px 36px", borderRadius: 8, border: "2px solid rgba(255,255,255,0.3)", background: "#fff", color: T.accent, fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "transform 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "none"}
          >
            Primary Action
          </button>
        </div>
      </Sec>

      {/* Full Footer */}
      <Sec T={T} dark style={{ padding: "56px 20px 28px", background: T.bgDark }}>
        <An T={T} label="Full Footer" title="The information anchor" pos="top-left" vis={lm}>Contact info, legal, sitemap, social links, newsletter signup. Important for SEO too.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 36, marginBottom: 40 }}>
            <div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 17, fontWeight: 600, marginBottom: 14, color: "#fff" }}>Your Brand</div>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.45)", maxWidth: 220 }}>A brief description of what you do and why.</p>
            </div>
            {[
              { t: "Services", i: ["Branding", "Web Design", "Strategy", "Content"] },
              { t: "Company",  i: ["About", "Case Studies", "Blog", "Contact"] },
              { t: "Connect",  i: ["LinkedIn", "Twitter", "Newsletter", "hello@email.com"] },
            ].map((c, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", marginBottom: 14 }}>{c.t}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  {c.i.map((x, j) => <a key={j} href="#" style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{x}</a>)}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© 2026 Your Brand. All rights reserved.</span>
            <div style={{ display: "flex", gap: 16 }}>
              {["Privacy", "Terms", "Cookies"].map((l, i) => <a key={i} href="#" style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>{l}</a>)}
            </div>
          </div>
        </div>
      </Sec>

      {/* Minimal Footer */}
      <Sec T={T} dark style={{ padding: "24px 20px", borderTop: "1px solid rgba(255,255,255,0.06)", background: T.bgDark }}>
        <An T={T} label="Minimal Footer" title="When less is enough" pos="top-left" vis={lm}>For single-page sites. Logo, copyright, essentials only.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.4)" }}>Your Brand</span>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy", "Contact"].map((l, i) => <a key={i} href="#" style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>{l}</a>)}
          </div>
        </div>
      </Sec>
      <SiteFooter activePage={activePage} setActivePage={setActivePage} T={T} />
    </>
  );
}

// ═══════════════════════════════════════════════════════════
// HERO SECTIONS PAGE
// ═══════════════════════════════════════════════════════════
export function HeroSectionsPage({ lm, T, activePage, setActivePage }) {
  return (
    <div>
      <PageHeader T={T} title="Hero sections" desc="The hero is the first thing visitors see. Four patterns, each suited to a different type of message." />

      {/* Pattern 1 — Centred */}
      <Sec T={T} style={{ padding: "72px 20px" }}>
        <An T={T} label="Pattern 1" title="Centred headline" pos="top-right" vis={lm}>Safest hero. Works for almost any business. Clear hierarchy: eyebrow → headline → subtext → CTA.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto", textAlign: "center" }}>
          <SL T={T}>Centred Text Hero</SL>
          <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(30px,5vw,56px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 18, color: T.text }}>Your strongest message, front and centre</h2>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 17, color: T.textMuted, maxWidth: 480, margin: "0 auto 28px" }}>Supporting text without competing. One or two lines.</p>
          <Btn T={T}>Get Started</Btn>
        </div>
      </Sec>

      {/* Pattern 2 — Split */}
      <Sec T={T} style={{ padding: "72px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Pattern 2" title="Split layout" pos="top-right" vis={lm}>Text left, image right. Message to proof. Good when you have a strong product or team visual.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 360px", minWidth: 260 }}>
            <SL T={T}>Split Layout Hero</SL>
            <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(26px,4vw,44px)", fontWeight: 400, lineHeight: 1.15, marginBottom: 18, color: T.text }}>Text on one side, visuals on the other</h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, lineHeight: 1.7, color: T.textMuted, marginBottom: 24 }}>The image reinforces the claim. Use a real photo over an illustration where possible.</p>
            <Btn T={T}>Learn More</Btn>
          </div>
          <div style={{ flex: "1 1 360px", minWidth: 260 }}><Img height={320} seed={4} rounded={12} /></div>
        </div>
      </Sec>

      {/* Pattern 3 — Full-bleed image background */}
      <Sec T={T} style={{ padding: 0, borderTop: `1px solid ${T.border}`, overflow: "hidden" }}>
        <An T={T} label="Pattern 3" title="Image background hero" pos="top-right" vis={lm}>A cinematic gradient or photograph fills the entire hero. Text overlays with enough contrast to remain legible. Dark overlay or blurred areas ensure readability. Replace the gradient with a real photo for production.</An>
        <div style={{
          padding: "80px 20px",
          background: "linear-gradient(160deg,#0D1F2D 0%,#1A3040 35%,#2A4A3C 65%,#0F1E18 100%)",
          position: "relative",
          minHeight: 440,
          display: "flex",
          alignItems: "center",
        }}>
          {/* Simulated bokeh / texture overlay */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 70% 50%,rgba(74,186,158,0.12) 0%,transparent 70%),radial-gradient(ellipse 40% 60% at 20% 30%,rgba(255,255,255,0.04) 0%,transparent 60%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 1040, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <SL T={T}>Image Background Hero</SL>
            <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(34px,5vw,62px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 20, color: "#fff", maxWidth: 640 }}>Cinematic. Immersive. <em style={{ fontStyle: "italic", color: "#4ABA9E" }}>Memorable.</em></h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 18, color: "rgba(255,255,255,0.65)", maxWidth: 480, marginBottom: 36, lineHeight: 1.6 }}>A real photograph makes an immediate emotional connection. The gradient here simulates depth and atmosphere.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button style={{ padding: "13px 28px", borderRadius: 8, border: "none", background: "#4ABA9E", color: "#fff", fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>See the Work</button>
              <button style={{ padding: "13px 28px", borderRadius: 8, border: "1.5px solid rgba(255,255,255,0.3)", background: "transparent", color: "#fff", fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>Learn More</button>
            </div>
          </div>
        </div>
      </Sec>

      {/* Pattern 4 — Minimal Typographic */}
      <Sec T={T} style={{ padding: "100px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Pattern 4" title="Minimal / typographic" pos="top-right" vis={lm}>Nothing but words. Typography IS the design.</An>
        <div style={{ maxWidth: 940, margin: "0 auto" }}>
          <SL T={T}>Minimal Typographic Hero</SL>
          <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(36px,7vw,76px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.03em", color: T.text }}>When your message <em style={{ fontStyle: "italic" }}>is</em> the design.</h2>
        </div>
      </Sec>
      <SiteFooter activePage={activePage} setActivePage={setActivePage} T={T} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// GRID STRUCTURES PAGE
// ═══════════════════════════════════════════════════════════
export function GridPage({ lm, T, activePage, setActivePage }) {
  return (
    <div>
      <PageHeader T={T} title="Grid structures" desc="How you lay out information on a grid determines whether visitors absorb it or abandon the page. These are the most effective patterns." />

      {/* 3-col with images */}
      <Sec T={T} style={{ padding: "56px 20px" }}>
        <An T={T} label="3-Column + Image" title="Visual feature grid" pos="top-right" vis={lm}>Three image cards. Best for services, case studies, or blog previews. Images invite browsing.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>3-Column Grid with Images</SL>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
            {[1, 2, 3].map(i => (
              <div
                key={i}
                style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${T.border}`, background: T.cardBg, transition: "transform 0.2s", cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "none"}
              >
                <Img height={180} seed={i} rounded={0} />
                <div style={{ padding: 20 }}>
                  <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, fontWeight: 600, marginBottom: 6, color: T.text }}>Card Title {i}</h4>
                  <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, lineHeight: 1.6, color: T.textMuted }}>Brief description — visuals draw the eye first, text closes the case.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* 4-col with icons */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="4-Column + Icon" title="Feature or benefit grid" pos="top-right" vis={lm}>Four equal columns with an icon, title, and short description. Works for features, benefits, or team specialties.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>4-Column Grid with Icons</SL>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
            {[
              { i: "◆", t: "Feature One",   d: "Short explanation of this feature." },
              { i: "●", t: "Feature Two",   d: "What this capability delivers." },
              { i: "▲", t: "Feature Three", d: "Why this matters to you." },
              { i: "■", t: "Feature Four",  d: "The outcome this creates." },
            ].map((it, j) => (
              <div
                key={j}
                style={{ padding: "28px 24px", borderRadius: 12, background: T.cardBg, border: `1px solid ${T.border}`, transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = T.accent}
                onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
              >
                <div style={{ width: 44, height: 44, borderRadius: 10, background: T.bgAlt, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: T.accent, marginBottom: 16 }}>{it.i}</div>
                <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, fontWeight: 600, marginBottom: 6, color: T.text }}>{it.t}</h4>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, lineHeight: 1.6, color: T.textMuted }}>{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Process 4-col horizontal with connecting line */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Process Grid" title="Horizontal steps with connector" pos="top-right" vis={lm}>A four-column horizontal process with a connecting line. Shows progression and sequence at a glance. Numbers reinforce the order.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Process / Timeline — Horizontal</SL>
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
            {/* Connecting line — desktop only */}
            <div className="wa-dn" style={{ position: "absolute", top: 20, left: "12.5%", right: "12.5%", height: 2, background: T.border, zIndex: 0 }} />
            {[
              { n: "01", t: "Discovery", d: "Understand context, challenges, and goals." },
              { n: "02", t: "Strategy",  d: "Define direction, messaging, and approach." },
              { n: "03", t: "Creation",  d: "Design, write, build — bring strategy to life." },
              { n: "04", t: "Delivery",  d: "Launch, measure, refine, support." },
            ].map((it, i) => (
              <div key={i} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: T.accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: 12, fontWeight: 500, margin: "0 auto 16px", boxShadow: `0 0 0 4px ${T.bg}` }}>{it.n}</div>
                <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, fontWeight: 600, marginBottom: 6, color: T.text }}>{it.t}</h4>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, lineHeight: 1.6, color: T.textMuted }}>{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Masonry Grid */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Masonry Grid" title="Variable-height columns" pos="top-right" vis={lm}>Items fill columns top-to-bottom, packing tightly regardless of height. Great for photo galleries, blog feeds, and pin-board layouts. No wasted space.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Masonry Grid</SL>
          <div style={{ columns: "3 280px", columnGap: 16 }}>
            {[220, 160, 300, 180, 240, 200, 170, 260].map((h, i) => (
              <div key={i} style={{ breakInside: "avoid", marginBottom: 16, borderRadius: 10, overflow: "hidden", background: `linear-gradient(135deg,hsl(${i * 45 + 20},22%,${i % 2 === 0 ? 55 : 48}%),hsl(${i * 45 + 60},18%,${i % 2 === 0 ? 42 : 38}%))`, height: h, display: "flex", alignItems: "flex-end", padding: 14 }}>
                <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Item {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Bento Box Grid */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Bento Grid" title="Mixed-size content blocks" pos="top-right" vis={lm}>Named after the Japanese bento box. Combines image, text, and stat cells of varying sizes in a structured grid. Popularised by Apple product pages. Great for portfolios, dashboards, and feature showcases.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Bento Box Grid</SL>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "auto", gap: 12 }}>
            {/* Large feature cell */}
            <div style={{ gridColumn: "1 / 3", gridRow: "1 / 3", borderRadius: 14, background: "linear-gradient(135deg,hsl(160,28%,42%),hsl(200,25%,32%))", padding: 28, display: "flex", flexDirection: "column", justifyContent: "flex-end", minHeight: 220 }}>
              <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 24, fontWeight: 400, color: "#fff", marginBottom: 6 }}>Feature Headline</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>The large cell commands attention. Use for your primary message or hero image.</div>
            </div>
            {/* Stat cell */}
            <div style={{ borderRadius: 14, background: T.cardBg, border: `1px solid ${T.border}`, padding: 24, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 36, fontWeight: 400, color: T.accent }}>98%</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted, marginTop: 4 }}>Client satisfaction</div>
            </div>
            {/* Accent cell */}
            <div style={{ borderRadius: 14, background: T.accent, padding: 24, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 4 }}>CTA Cell</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>Accent colour draws the eye</div>
            </div>
            {/* Stat cell 2 */}
            <div style={{ borderRadius: 14, background: T.cardBg, border: `1px solid ${T.border}`, padding: 24, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 36, fontWeight: 400, color: T.text }}>147</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted, marginTop: 4 }}>Projects completed</div>
            </div>
            {/* Tag cell */}
            <div style={{ borderRadius: 14, background: T.bgAlt, border: `1px solid ${T.border}`, padding: 20, display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.text, lineHeight: 1.5 }}>Small cells for labels, icons, or quick facts.</div>
            </div>
            {/* Wide bottom cell */}
            <div style={{ gridColumn: "1 / 4", borderRadius: 14, background: T.bgAlt, border: `1px solid ${T.border}`, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: T.text, fontWeight: 500 }}>Wide bottom cell — ideal for CTAs, taglines, or navigation</div>
              <button style={{ padding: "9px 20px", borderRadius: 8, border: "none", background: T.accent, color: "#fff", fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Learn more</button>
            </div>
            <div style={{ borderRadius: 14, background: "linear-gradient(135deg,hsl(30,35%,52%),hsl(50,30%,42%))", padding: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 24 }}>✦</span>
            </div>
          </div>
        </div>
      </Sec>

      {/* Scattered / Editorial Grid */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Scattered Grid" title="Editorial rhythm" pos="top-right" vis={lm}>Alternates between full-width, 2-column, and unequal splits to create visual rhythm. Common in editorial and portfolio sites. No two rows look the same — keeps visitors engaged as they scroll.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Scattered / Editorial Grid</SL>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Row 1 — full width */}
            <div style={{ borderRadius: 12, height: 180, background: "linear-gradient(135deg,hsl(160,28%,48%),hsl(200,22%,36%))", display: "flex", alignItems: "center", padding: "0 32px" }}>
              <span style={{ fontFamily: "'Instrument Serif',serif", fontSize: 28, fontWeight: 400, color: "#fff" }}>Full-width feature row</span>
            </div>
            {/* Row 2 — 50/50 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {["Left column", "Right column"].map((t, i) => (
                <div key={i} style={{ borderRadius: 12, height: 160, background: T.cardBg, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", padding: 24 }}>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, color: T.text, fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
            {/* Row 3 — 2/3 + 1/3 */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12 }}>
              <div style={{ borderRadius: 12, height: 160, background: "linear-gradient(135deg,hsl(30,28%,52%),hsl(50,22%,42%))", display: "flex", alignItems: "center", padding: 24 }}>
                <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, color: "#fff", fontWeight: 500 }}>⅔ wide — dominant content</span>
              </div>
              <div style={{ borderRadius: 12, height: 160, background: T.cardBg, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
                <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted, textAlign: "center" }}>⅓ narrow</span>
              </div>
            </div>
          </div>
        </div>
      </Sec>

      {/* Comparison layout */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Comparison" title="Side-by-side contrast" pos="top-right" vis={lm}>Helps visitors quickly understand differences. Before/after, free vs. paid, us vs. the old way.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Comparison Layout</SL>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            <div style={{ padding: "28px 24px", borderRadius: 12, border: `1px solid ${T.border}`, background: T.cardBg }}>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: T.textMuted, marginBottom: 18 }}>The old way</div>
              {["Generic templates", "One-size-fits-all", "Surface messaging"].map((x, i) => (
                <div key={i} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, padding: "9px 0", borderBottom: i < 2 ? `1px solid ${T.border}` : "none", color: T.textMuted }}>✕ &nbsp;{x}</div>
              ))}
            </div>
            <div style={{ padding: "28px 24px", borderRadius: 12, border: `2px solid ${T.accent}`, background: T.cardBg }}>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: T.accent, marginBottom: 18 }}>The new way</div>
              {["Bespoke to your story", "Deep understanding", "Messaging that resonates"].map((x, i) => (
                <div key={i} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, padding: "9px 0", borderBottom: i < 2 ? `1px solid ${T.border}` : "none", color: T.text }}>✓ &nbsp;{x}</div>
              ))}
            </div>
          </div>
        </div>
      </Sec>
      {/* Responsiveness Demo */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Responsive Grids" title="How grids adapt to screen size" pos="top-right" vis={lm}>Grid systems don't break on mobile — they reflow. A 4-column desktop grid becomes 2-column on tablet and single-column on mobile. The same content, restructured for the space available.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Responsive Grid Behaviour</SL>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, lineHeight: 1.7, color: T.textMuted, maxWidth: 640, marginBottom: 36 }}>The same CSS grid automatically adapts using <code style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, background: T.border, padding: "1px 6px", borderRadius: 4, color: T.text }}>auto-fit</code> and <code style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, background: T.border, padding: "1px 6px", borderRadius: 4, color: T.text }}>minmax()</code>. Columns wrap into fewer rows as screen width shrinks — no JavaScript required.</p>

          {/* Visual demo: three viewport sizes */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              { label: "Desktop (1040px+)", cols: 4, w: "100%", desc: "4 columns — maximum information density" },
              { label: "Tablet (640–1040px)", cols: 2, w: "60%", desc: "2 columns — balanced readability" },
              { label: "Mobile (< 640px)", cols: 1, w: "34%", desc: "1 column — full-width stacking" },
            ].map(({ label, cols, w, desc }, vi) => (
              <div key={vi} style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                {/* Viewport mockup */}
                <div style={{ width: w, minWidth: 120, flexShrink: 0, border: `1.5px solid ${T.border}`, borderRadius: 10, padding: 12, background: T.cardBg }}>
                  <div style={{ display: "flex", gap: 6, marginBottom: 10, alignItems: "center" }}>
                    {[8, 6, 6].map((s, i) => <div key={i} style={{ width: s, height: s, borderRadius: "50%", background: T.border }} />)}
                    <div style={{ flex: 1, height: 8, borderRadius: 4, background: T.bgAlt, marginLeft: 4 }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 5 }}>
                    {Array.from({ length: cols * 2 }).map((_, i) => (
                      <div key={i} style={{ height: 28, borderRadius: 5, background: i === 0 && cols === 4 ? T.accent : `hsl(${160 + i * 20},20%,${T.bg === "#FAFAF8" ? 82 : 28}%)` }} />
                    ))}
                  </div>
                </div>
                {/* Label */}
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: T.accent, marginBottom: 4 }}>{label}</div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: T.text, fontWeight: 500, marginBottom: 3 }}>{cols === 1 ? "1 column" : `${cols} columns`}</div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Code note */}
          <div style={{ marginTop: 36, padding: "16px 20px", borderRadius: 10, background: T.cardBg, border: `1px solid ${T.border}` }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: T.accent, marginBottom: 10 }}>The CSS that makes it happen</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: T.textMuted, lineHeight: 1.8 }}>
              <span style={{ color: T.text }}>grid-template-columns</span>: repeat(<span style={{ color: T.accent }}>auto-fit</span>, minmax(<span style={{ color: T.accent }}>220px</span>, <span style={{ color: T.accent }}>1fr</span>));
            </div>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted, marginTop: 10, lineHeight: 1.6 }}>With <strong style={{ color: T.text }}>minmax(220px, 1fr)</strong>: each column is at least 220px wide. When the container can no longer fit multiple columns at that minimum, they automatically wrap — creating the responsive behaviour shown above.</div>
          </div>
        </div>
      </Sec>

      <SiteFooter activePage={activePage} setActivePage={setActivePage} T={T} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// INTERACTIVE ELEMENTS PAGE
// ═══════════════════════════════════════════════════════════
export function InteractivePage({ lm, T, activePage, setActivePage }) {
  const [oA, sOA] = useState(0);
  const [aT, sAT] = useState(0);
  const [tV, sTV] = useState(false);
  const [tS, sTS] = useState(false);
  const [hA, sHA] = useState(null);
  const [hT, sHT] = useState(null);
  const [winScroll, setWinScroll] = useState(0);
  useEffect(() => {
    const h = () => setWinScroll(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  const scrollProgress = winScroll / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

  const acc = [
    { q: "What is an accordion?",    a: "Collapsible sections. Ideal for FAQs. Reduces visual overwhelm by hiding secondary content until requested." },
    { q: "Do accordions hurt SEO?",  a: "No — search engines read content inside them. Use accordions when content is supplementary, not primary." },
    { q: "When should I use tabs?",  a: "When content is parallel and of roughly equal weight. Visitors pick what's relevant to them without scrolling." },
  ];

  const tabs = [
    { l: "Overview",    c: "Tabs organise related content into equal-weight sections. Visitors see everything available and choose what's relevant." },
    { l: "When to use", c: "3–6 sections of roughly equal weight that visitors won't need to see simultaneously. Avoid tabs for sequential steps — use a process layout instead." },
    { l: "Best practice", c: "Label tabs clearly with nouns, not verbs. Keep tab labels short — 1 to 3 words. The first tab should always be the most visited." },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div style={{ position: "fixed", top: 56, left: 0, right: 0, height: 2, zIndex: 99, background: "transparent" }}>
        <div style={{ height: "100%", background: T.accent, width: `${Math.min(100, scrollProgress * 100)}%`, transition: "width 0.1s" }} />
      </div>

      {/* Back to top */}
      {winScroll > 400 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ position: "fixed", bottom: 24, right: 24, width: 44, height: 44, borderRadius: "50%", border: `1.5px solid ${T.border}`, background: T.cardBg, color: T.accent, fontSize: 18, cursor: "pointer", zIndex: 99, boxShadow: "0 4px 16px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
        >↑</button>
      )}

    <div>
      <PageHeader T={T} title="Interactive elements" desc="Each element serves a specific purpose — reducing cognitive load and increasing engagement when used well." />

      {/* Accordion */}
      <Sec T={T} style={{ padding: "56px 20px" }}>
        <An T={T} label="Accordion" title="Collapsible sections" pos="top-right" vis={lm}>Go-to for FAQs. One open at a time keeps the page scannable.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Accordion</SL>
          {acc.map((it, i) => (
            <div key={i} style={{ borderBottom: `1px solid ${T.border}` }}>
              <button
                onClick={() => sOA(oA === i ? -1 : i)}
                onMouseEnter={() => sHA(i)}
                onMouseLeave={() => sHA(null)}
                style={{ width: "100%", padding: "18px 8px", margin: "0 -8px", width: "calc(100% + 16px)", border: "none", background: hA === i ? T.bgAlt : "none", borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left", color: T.text, transition: "background 0.15s" }}
              >
                <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 500 }}>{it.q}</span>
                <span style={{ fontSize: 18, color: T.textMuted, transform: oA === i ? "rotate(45deg)" : "none", transition: "transform 0.25s" }}>+</span>
              </button>
              <div style={{ overflow: "hidden", maxHeight: oA === i ? 300 : 0, transition: "max-height 0.35s ease" }}>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, lineHeight: 1.7, color: T.textMuted, paddingBottom: 18 }}>{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      {/* Tabs */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Tabs" title="Parallel navigation" pos="top-right" vis={lm}>Choose what's relevant without scrolling through everything. Keep to 3–6 tabs.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Tabs</SL>
          <div style={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {tabs.map((t, i) => (
              <button
                key={i}
                onClick={() => sAT(i)}
                onMouseEnter={() => sHT(i)}
                onMouseLeave={() => sHT(null)}
                style={{ padding: "9px 18px", borderRadius: "8px 8px 0 0", border: `1px solid ${aT === i ? T.border : "transparent"}`, borderBottom: aT === i ? `1px solid ${T.cardBg}` : `1px solid ${T.border}`, background: aT === i ? T.cardBg : hT === i ? T.bgAlt : "transparent", color: aT === i ? T.text : hT === i ? T.text : T.textMuted, fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: aT === i ? 600 : 400, cursor: "pointer", marginBottom: -1, transition: "all 0.15s" }}
              >
                {t.l}
              </button>
            ))}
          </div>
          <div style={{ padding: "24px 20px", background: T.cardBg, border: `1px solid ${T.border}`, borderRadius: "0 8px 8px 8px" }}>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, lineHeight: 1.7, color: T.textMuted }}>{tabs[aT].c}</p>
          </div>
        </div>
      </Sec>

      {/* Tooltips & Toggles */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Tooltips & Toggles" title="Small but mighty" pos="top-right" vis={lm}>Tooltips explain without cluttering. Toggles switch states instantly.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Tooltips & Toggles</SL>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: T.text }}>
              Hover or tap:{" "}
              <span
                onClick={() => sTV(!tV)}
                onMouseEnter={() => sTV(true)}
                onMouseLeave={() => sTV(false)}
                style={{ position: "relative", borderBottom: `1.5px dashed ${T.accent}`, cursor: "help", display: "inline-block" }}
              >
                tooltip
                {tV && (
                  <span style={{ position: "absolute", bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", background: "#1C1C1C", color: "#fff", padding: "7px 12px", borderRadius: 6, fontSize: 11, fontFamily: "'Outfit',sans-serif", whiteSpace: "nowrap", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", zIndex: 10 }}>
                    A small pop-up that explains a term
                  </span>
                )}
              </span>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: tS ? T.textMuted : T.text, fontWeight: tS ? 400 : 600 }}>Monthly</span>
              <div
                onClick={() => sTS(!tS)}
                style={{ width: 48, height: 26, borderRadius: 13, background: tS ? T.accent : T.border, cursor: "pointer", position: "relative", transition: "background 0.25s" }}
              >
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#fff", position: "absolute", top: 3, left: tS ? 25 : 3, transition: "left 0.25s", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }} />
              </div>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: tS ? T.text : T.textMuted, fontWeight: tS ? 600 : 400 }}>Annual</span>
              {tS && <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.accent }}>Save 20%</span>}
            </div>
          </div>
        </div>
      </Sec>

      {/* Scroll Helpers */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Scroll Helpers" title="Orientation aids" pos="top-left" vis={lm}>Progress bars and back-to-top buttons reduce disorientation on long pages. Both are live on this page — scroll down to activate them.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Scroll Helpers — scroll to activate</SL>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            <div style={{ padding: "28px 24px", borderRadius: 12, border: `1px solid ${T.border}`, background: T.cardBg }}>
              <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, color: T.text, marginBottom: 12 }}>Scroll Progress Bar</h4>
              <div style={{ height: 4, borderRadius: 2, background: T.border, marginBottom: 16, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${Math.min(100, scrollProgress * 100)}%`, background: T.accent, transition: "width 0.1s" }} />
              </div>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted, lineHeight: 1.6 }}>A thin bar at the top of the viewport shows reading progress. Common on long-form articles and documentation pages. The green line above the nav is live on this page.</p>
            </div>
            <div style={{ padding: "28px 24px", borderRadius: 12, border: `1px solid ${T.border}`, background: T.cardBg }}>
              <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, color: T.text, marginBottom: 12 }}>Back to Top</h4>
              <div style={{ marginBottom: 16 }}>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  style={{ width: 44, height: 44, borderRadius: "50%", border: `1.5px solid ${T.border}`, background: T.bgAlt, color: T.accent, fontSize: 18, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                >↑</button>
              </div>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted, lineHeight: 1.6 }}>Appears after scrolling 400px. Fixed position, bottom-right corner. Scroll down on this page and watch the bottom-right — the button appears automatically.</p>
            </div>
          </div>
        </div>
      </Sec>

      <SiteFooter activePage={activePage} setActivePage={setActivePage} T={T} />
    </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════════
// GALLERIES PAGE
// ═══════════════════════════════════════════════════════════
export function GalleriesPage({ lm, T, activePage, setActivePage }) {
  const sRef = useRef(null);
  useEffect(() => {
    const el = sRef.current;
    if (!el) return;
    let pos = 0;
    const id = setInterval(() => {
      pos += 1;
      if (pos >= el.scrollWidth - el.clientWidth) pos = 0;
      el.scrollLeft = pos;
    }, 20);
    return () => clearInterval(id);
  }, []);

  const [si, sSi] = useState(0);
  const sc = 5;
  useEffect(() => {
    const id = setInterval(() => sSi(p => (p + 1) % sc), 3000);
    return () => clearInterval(id);
  }, []);

  const [lbOpen, setLbOpen] = useState(false);
  const [lbIdx,  setLbIdx]  = useState(0);
  const [expandIdx, setExpandIdx] = useState(null);
  const imgCount = 4;
  useEffect(() => {
    document.body.style.overflow = lbOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lbOpen]);

  const ArrowBtn = ({ dir, onClick }) => {
    const [h, sH] = useState(false);
    return (
      <button
        onClick={onClick}
        onMouseEnter={() => sH(true)}
        onMouseLeave={() => sH(false)}
        style={{ position: "absolute", [dir === "l" ? "left" : "right"]: 12, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: "50%", border: "none", background: h ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.3)", color: "#fff", fontSize: 20, cursor: "pointer", transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {dir === "l" ? "‹" : "›"}
      </button>
    );
  };

  return (
    <div>
      <PageHeader T={T} title="Galleries" desc="Visual-heavy organisations need ways to showcase work without overwhelming visitors." />

      {/* Auto-scroll carousel */}
      <Sec T={T} style={{ padding: "56px 0" }}>
        <An T={T} label="Auto-Scroll" title="Continuous scroll" pos="top-left" vis={lm}>Great for logo bars or portfolio previews. Keep items uniform in size.</An>
        <div style={{ padding: "0 20px", maxWidth: 1040, margin: "0 auto 24px" }}><SL T={T}>Auto-Scrolling Carousel</SL></div>
        <div ref={sRef} style={{ display: "flex", gap: 16, overflow: "hidden", padding: "0 20px" }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} style={{ flexShrink: 0, width: 240, height: 160, borderRadius: 10, background: `linear-gradient(135deg,hsl(${i * 36},30%,60%),hsl(${i * 36 + 60},25%,45%))` }} />
          ))}
        </div>
      </Sec>

      {/* Slideshow */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Slideshow" title="One image at a time" pos="top-right" vis={lm}>Focuses attention. Include arrows and dots. Auto-advance every 3–5 seconds.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Slideshow</SL>
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 12, overflow: "hidden" }}>
            {Array.from({ length: sc }).map((_, i) => (
              <div
                key={i}
                style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg,hsl(${i * 70},30%,55%),hsl(${i * 70 + 80},25%,40%))`, opacity: si === i ? 1 : 0, transition: "opacity 0.6s", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit',sans-serif", fontSize: 20, fontWeight: 500, color: "rgba(255,255,255,0.7)" }}
              >
                Slide {i + 1}
              </div>
            ))}
            <button onClick={() => sSi(p => (p - 1 + sc) % sc)} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: "50%", border: "none", background: "rgba(0,0,0,0.3)", color: "#fff", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <button onClick={() => sSi(p => (p + 1) % sc)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: "50%", border: "none", background: "rgba(0,0,0,0.3)", color: "#fff", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
            {Array.from({ length: sc }).map((_, i) => (
              <button key={i} onClick={() => sSi(i)} style={{ width: si === i ? 24 : 8, height: 8, borderRadius: 4, border: "none", background: si === i ? T.accent : T.border, cursor: "pointer", transition: "all 0.3s" }} />
            ))}
          </div>
        </div>
      </Sec>

      {/* Lightbox grid */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Lightbox" title="Click to expand" pos="top-right" vis={lm}>Thumbnails opening full-screen. Perfect for portfolio work or event photography.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Lightbox Gallery — click any image</SL>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 12 }}>
            {Array.from({ length: imgCount }).map((_, i) => (
              <div
                key={i}
                onClick={() => { setLbIdx(i); setLbOpen(true); }}
                style={{ aspectRatio: "1", borderRadius: 10, cursor: "pointer", background: `linear-gradient(135deg,hsl(${i * 55 + 20},28%,58%),hsl(${i * 55 + 80},22%,42%))`, transition: "transform 0.2s", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                Image {i + 1}
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Hover Expand Gallery */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Hover Expand" title="Focus through expansion" pos="top-left" vis={lm}>Images expand on hover to give context. Others shrink proportionally — creating instant visual hierarchy without navigation.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Hover Expand Gallery</SL>
          <div style={{ display: "flex", gap: 12, height: 360 }}>
            {[{ hue: 20 }, { hue: 130 }, { hue: 220 }].map(({ hue }, i) => (
              <div
                key={i}
                onMouseEnter={() => setExpandIdx(i)}
                onMouseLeave={() => setExpandIdx(null)}
                style={{ flex: expandIdx === i ? "0 0 60%" : "1", borderRadius: 12, overflow: "hidden", background: `linear-gradient(160deg,hsl(${hue},30%,52%),hsl(${hue + 40},22%,38%))`, cursor: "pointer", transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1)", display: "flex", alignItems: "flex-end", padding: 16 }}
              >
                <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)", fontWeight: 500, opacity: expandIdx === i ? 1 : 0, transition: "opacity 0.3s 0.1s" }}>
                  Image {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Lightbox overlay */}
      {lbOpen && (
        <div onClick={() => setLbOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.9)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          <button onClick={() => setLbOpen(false)} style={{ position: "absolute", top: 16, right: 16, width: 40, height: 40, borderRadius: "50%", border: "none", background: "rgba(255,255,255,0.1)", color: "#fff", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
          <ArrowBtn dir="l" onClick={e => { e.stopPropagation(); setLbIdx(p => (p - 1 + imgCount) % imgCount); }} />
          <div
            onClick={e => e.stopPropagation()}
            style={{ width: "min(80vw,600px)", aspectRatio: "4/3", borderRadius: 12, background: `linear-gradient(135deg,hsl(${lbIdx * 55 + 20},28%,58%),hsl(${lbIdx * 55 + 80},22%,42%))`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit',sans-serif", fontSize: 24, color: "rgba(255,255,255,0.6)" }}
          >
            Image {lbIdx + 1}
          </div>
          <ArrowBtn dir="r" onClick={e => { e.stopPropagation(); setLbIdx(p => (p + 1) % imgCount); }} />
        </div>
      )}
      <SiteFooter activePage={activePage} setActivePage={setActivePage} T={T} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// COUNTER COMPONENT (module-level — used in MotionPage)
// ═══════════════════════════════════════════════════════════
function Counter({ target, suffix = "", label, animate, delay = 0 }) {
  const [c, sC] = useState(0);
  useEffect(() => {
    if (!animate) return;
    sC(0);
    const t = setTimeout(() => {
      const d = 2000, s = 60, inc = target / s;
      let cur = 0;
      const iv = setInterval(() => {
        cur += inc;
        if (cur >= target) { sC(target); clearInterval(iv); }
        else sC(Math.floor(cur));
      }, d / s);
    }, delay);
    return () => clearTimeout(t);
  }, [animate, target, delay]);
  return (
    <div>
      <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(32px,5vw,52px)", fontWeight: 400, letterSpacing: "-0.02em", color: "#fff" }}>{c}{suffix}</div>
      <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCROLL & MOTION PAGE
// ═══════════════════════════════════════════════════════════
export function MotionPage({ lm, T, activePage, setActivePage }) {
  // Fade-in — resets when scrolled out
  const [fI, setFI] = useState([false, false, false]);
  const fRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        [0, 1, 2].forEach(i => setTimeout(() => setFI(prev => { const n = [...prev]; n[i] = true; return n; }), i * 200));
      } else {
        setFI([false, false, false]);
      }
    }, { threshold: 0.3 });
    if (fRef.current) obs.observe(fRef.current);
    return () => obs.disconnect();
  }, []);

  // Counter — resets on scroll-out, replays on re-entry
  const [cV, sCV] = useState(false);
  const cRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) sCV(true);
      else sCV(false);
    }, { threshold: 0.3 });
    if (cRef.current) obs.observe(cRef.current);
    return () => obs.disconnect();
  }, []);

  // Unmask on scroll
  const [uProg, setUProg] = useState(0);
  const uRef = useRef(null);
  useEffect(() => {
    const h = () => {
      if (!uRef.current) return;
      const r = uRef.current.getBoundingClientRect();
      const p = (window.innerHeight - r.top) / (window.innerHeight * 0.6);
      setUProg(Math.max(0, Math.min(1, p)));
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Scroll-to-reveal text — resets on scroll-out
  const [revealIdx, setRevealIdx] = useState(-1);
  const revealRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        [0, 1, 2].forEach(i => setTimeout(() => setRevealIdx(i), i * 320));
      } else {
        setRevealIdx(-1);
      }
    }, { threshold: 0.25 });
    if (revealRef.current) obs.observe(revealRef.current);
    return () => obs.disconnect();
  }, []);

  // Mouse-reactive gradient
  const [gradPos, setGradPos] = useState({ x: 50, y: 50 });

  // Hover-to-reveal image
  const [hoverReveal, setHoverReveal] = useState(null);

  // Hover cards
  const [hC, sHC] = useState(null);

  return (
    <div>
      <PageHeader T={T} title="Scroll & motion" desc="Animation should guide attention, not steal it. The best motion is invisible — visitors feel the experience without noticing the mechanics." />

      {/* Staggered fade-in */}
      <Sec T={T} style={{ padding: "56px 20px" }}>
        <An T={T} label="Fade In" title="Reveal on scroll" pos="top-right" vis={lm}>Subtle upward movement with fade. Stagger items for rhythm — 150–200ms delay per item. Resets automatically when scrolled out.</An>
        <div ref={fRef} style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Staggered Fade-In</SL>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
            {["First item", "Second follows", "Third completes"].map((t, i) => (
              <div
                key={i}
                style={{ padding: "28px 20px", borderRadius: 12, border: `1px solid ${T.border}`, background: T.cardBg, opacity: fI[i] ? 1 : 0, transform: fI[i] ? "translateY(0)" : "translateY(16px)", transition: "all 0.6s" }}
              >
                <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, marginBottom: 6, color: T.text }}>{t}</h4>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted }}>Scroll away and back to replay.</p>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Counter animation */}
      <Sec T={T} dark style={{ padding: "56px 20px", background: T.bgDark, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Counter" title="Numbers counting up" pos="top-left" vis={lm}>Trigger on scroll entry. Resets when scrolled out and replays on re-entry — no replay button needed.</An>
        <div ref={cRef} style={{ maxWidth: 1040, margin: "0 auto", textAlign: "center" }}>
          <SL T={T}>Counter Animation</SL>
          <div style={{ display: "flex", justifyContent: "center", gap: "clamp(28px,6vw,72px)", flexWrap: "wrap" }}>
            {[{ target: 147, label: "Projects" }, { target: 98, suffix: "%", label: "Retention" }, { target: 12, label: "Years" }].map((s, i) => (
              <Counter key={i} {...s} animate={cV} delay={i * 200} />
            ))}
          </div>
        </div>
      </Sec>

      {/* Unmask on scroll */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Unmask" title="Progressive image reveal" pos="top-right" vis={lm}>The image is gradually revealed as the visitor scrolls into the section. Creates anticipation. Scroll back up to reset.</An>
        <div ref={uRef} style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Image Unmask on Scroll</SL>
          <div style={{ position: "relative", height: 300, borderRadius: 12, overflow: "hidden", background: T.border }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#2B6B5A,#1a4a3d,#3A8B74)", clipPath: `inset(0 ${(1 - uProg) * 100}% 0 0)`, transition: "clip-path 0.15s linear", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(24px,4vw,36px)", color: "rgba(255,255,255,0.8)", fontStyle: "italic" }}>Revealed on scroll</span>
            </div>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: T.textMuted, opacity: uProg > 0.9 ? 0 : 1, transition: "opacity 0.3s" }}>↓ Scroll to reveal</span>
            </div>
          </div>
        </div>
      </Sec>

      {/* Scroll-to-reveal text */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Reveal" title="Text animates in line by line" pos="top-left" vis={lm}>Each line triggers as the section enters the viewport. Used in editorial layouts and impact statements. Resets on scroll-out.</An>
        <div ref={revealRef} style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Scroll-to-Reveal Text</SL>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "Great design starts with listening.",
              "Then it takes form through craft.",
              "And it earns trust through clarity.",
            ].map((line, i) => (
              <p
                key={i}
                style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(22px,3.5vw,36px)", fontWeight: 400, color: T.text, lineHeight: 1.2, margin: 0, opacity: revealIdx >= i ? 1 : 0, transform: revealIdx >= i ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.7s ${i * 0.15}s, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 0.15}s` }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </Sec>

      {/* Mouse-reactive gradient */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Gradient" title="Mouse-reactive background" pos="top-right" vis={lm}>A CSS radial-gradient that follows the cursor. Used as ambient backgrounds for hero sections or full-page overlays — no canvas needed.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Mouse-Reactive Gradient — move your cursor inside</SL>
          <div
            onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); setGradPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 }); }}
            onMouseLeave={() => setGradPos({ x: 50, y: 50 })}
            style={{ borderRadius: 12, height: 320, overflow: "hidden", cursor: "crosshair", position: "relative", background: `radial-gradient(ellipse at ${gradPos.x}% ${gradPos.y}%, hsl(160,55%,28%) 0%, hsl(200,45%,18%) 40%, hsl(230,35%,12%) 100%)`, transition: "background 0.08s" }}
          >
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 20%, rgba(74,186,158,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, textAlign: "center", padding: 20, pointerEvents: "none" }}>
              <p style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(22px,3.5vw,38px)", color: "rgba(255,255,255,0.9)", fontWeight: 400, lineHeight: 1.2, margin: 0 }}>Move your cursor</p>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)", margin: 0 }}>The gradient follows you — pure CSS, no canvas</p>
            </div>
          </div>
        </div>
      </Sec>

      {/* Hover-to-reveal image */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Hover Reveal" title="Image appears on hover" pos="top-left" vis={lm}>Content-first: the text leads, the image rewards curiosity. Effective for portfolio cards and case studies.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Hover-to-Reveal Image</SL>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
            {[
              { title: "Brand Identity", desc: "Visual language that communicates your values at a glance.", hue: 155 },
              { title: "Web Design",     desc: "Structure and aesthetics aligned with your audience's needs.", hue: 210 },
              { title: "Strategy",       desc: "Clarity on who you serve and how to reach them.", hue: 260 },
            ].map((card, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoverReveal(i)}
                onMouseLeave={() => setHoverReveal(null)}
                style={{ position: "relative", borderRadius: 12, overflow: "hidden", border: `1px solid ${T.border}`, cursor: "pointer", minHeight: 200 }}
              >
                <div style={{ padding: "28px 24px", background: T.cardBg, opacity: hoverReveal === i ? 0 : 1, transition: "opacity 0.4s" }}>
                  <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, fontWeight: 600, color: T.text, marginBottom: 8 }}>{card.title}</h4>
                  <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted, lineHeight: 1.6 }}>{card.desc}</p>
                  <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.accent, marginTop: 16 }}>hover to reveal →</p>
                </div>
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(160deg,hsl(${card.hue},40%,40%),hsl(${card.hue + 40},30%,28%))`, opacity: hoverReveal === i ? 1 : 0, transition: "opacity 0.4s", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Instrument Serif',serif", fontSize: 28, color: "rgba(255,255,255,0.85)", fontWeight: 400 }}>{card.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Hover effects */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Hover Effects" title="Microinteractions" pos="top-right" vis={lm}>Signals interactivity. Should be subtle — big movements feel unstable.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Hover Effects — try these cards</SL>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
            {[
              { t: "Lift & Shadow",     ef: "translateY(-4px)", sh: "0 12px 32px rgba(0,0,0,0.1)", bc: T.border,  bg: T.cardBg },
              { t: "Border Highlight", ef: "none",             sh: "none",                         bc: T.accent, bg: T.cardBg },
              { t: "Background Shift", ef: "none",             sh: "none",                         bc: T.border,  bg: T.bgAlt  },
            ].map((c, i) => (
              <div
                key={i}
                onMouseEnter={() => sHC(i)}
                onMouseLeave={() => sHC(null)}
                style={{ padding: "24px 20px", borderRadius: 12, border: `1.5px solid ${hC === i ? c.bc : T.border}`, background: hC === i ? c.bg : T.cardBg, transform: hC === i ? c.ef : "none", boxShadow: hC === i ? c.sh : "none", transition: "all 0.25s", cursor: "pointer" }}
              >
                <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, marginBottom: 6, color: T.text }}>{c.t}</h4>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted }}>Hover to see the effect.</p>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Motion Guidelines */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Principles" title="When to animate" pos="top-right" vis={lm}>If removing the animation wouldn't reduce understanding, it's decoration.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Motion Guidelines</SL>
          {[
            { r: "Guide, don't distract",  d: "Direct attention to what matters." },
            { r: "Fast in, slow out",      d: "Appear 200–300ms, leave 400–500ms." },
            { r: "Stagger related items",  d: "Offset 80–150ms each." },
            { r: "Respect preferences",    d: "Honour 'prefers-reduced-motion'." },
          ].map((it, i) => (
            <div key={i} style={{ padding: "16px 0", borderBottom: i < 3 ? `1px solid ${T.border}` : "none" }}>
              <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, marginBottom: 4, color: T.text }}>{it.r}</h4>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, lineHeight: 1.6, color: T.textMuted }}>{it.d}</p>
            </div>
          ))}
        </div>
      </Sec>
      <SiteFooter activePage={activePage} setActivePage={setActivePage} T={T} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// ABOUT PAGE
// ═══════════════════════════════════════════════════════════
export function AboutPage({ lm, T, activePage, setActivePage }) {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [bioModal, setBioModal] = useState(null);

  useEffect(() => {
    document.body.style.overflow = bioModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [bioModal]);

  const team = [
    { name: "Alex Rivera",   role: "Founder & CEO",     bio: "15 years leading creative teams across education and healthcare. Previously at IDEO and frog design. Believes design should serve those who need it most.", hue: 160 },
    { name: "Sam Chen",      role: "Lead Designer",     bio: "Specialises in brand systems and visual identity. Former art director at Pentagram. Obsessed with typography and colour theory.", hue: 210 },
    { name: "Jordan Wells",  role: "Strategist",        bio: "Combines research and storytelling to find positioning that resonates. Background in behavioural psychology and nonprofit consulting.", hue: 260 },
    { name: "Maya Okonkwo",  role: "Developer",         bio: "Full-stack engineer who believes beautiful code creates beautiful experiences. Open-source contributor and accessibility advocate.", hue: 30 },
    { name: "Lena Virtanen", role: "Project Lead",      bio: "Keeps complex projects on track without losing the human element. Previously managed €5M+ programmes in the public sector.", hue: 80 },
    { name: "Tomás Garcia",  role: "Content Writer",    bio: "Turns complicated ideas into clear, compelling language. Former journalist covering science and technology.", hue: 340 },
  ];

  return (
    <div>
      <PageHeader T={T} title="About page" desc="Where trust is built. It answers: who are you, why do you exist, and why should I care?" />

      {/* Mission + Values */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Mission Statement" title="Why you exist" pos="top-right" vis={lm}>Lead with your purpose, not your history. Keep it to 2–3 sentences that a stranger could repeat back.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Mission / Values Section</SL>
          <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(36px,5vw,68px)", fontWeight: 400, lineHeight: 1.06, marginBottom: 20, color: T.text, maxWidth: 700 }}>We exist to make meaningful work <em style={{ fontStyle: "italic", color: T.accent }}>unmistakable</em></h2>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 18, lineHeight: 1.7, color: T.textMuted, maxWidth: 580, marginBottom: 40 }}>We believe the organisations doing the most important work often struggle the most to communicate it. That's what we're here to change.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20, maxWidth: 700 }}>
            {[
              { v: "Clarity", d: "Say what you mean" },
              { v: "Craft",   d: "Every detail matters" },
              { v: "Courage", d: "Challenge the obvious" },
            ].map((v, i) => (
              <div key={i} style={{ padding: "24px 20px", borderRadius: 10, border: `1px solid ${T.border}`, background: T.cardBg }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, fontWeight: 600, marginBottom: 6, color: T.text }}>{v.v}</div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: T.textMuted }}>{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Team Layout 1 — Photo + Name & Title (no bio) */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Team Grid" title="Photo, name & role — no bio" pos="top-right" vis={lm}>Clean, professional. Works when the team is large. Visitors can put a face to the name without reading paragraphs.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Team Layout 1 — Photo, Name & Title</SL>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 20 }}>
            {team.map((m, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${T.border}`, background: T.cardBg }}>
                <div style={{ width: "100%", height: 140, background: `linear-gradient(135deg,hsl(${m.hue},28%,52%),hsl(${m.hue + 40},22%,38%))` }} />
                <div style={{ padding: "14px 16px" }}>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, color: T.text }}>{m.name}</div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted, marginTop: 3 }}>{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Team Layout 2 — Hover Bio */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Team + Hover" title="Bio on hover/tap" pos="top-right" vis={lm}>Adds depth without cluttering the page. The visitor chooses who to learn more about. Keep bios to 2 sentences.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Team Layout 2 — Hover to Reveal Bio</SL>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
            {team.map((m, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredMember(i)}
                onMouseLeave={() => setHoveredMember(null)}
                onTouchStart={() => setHoveredMember(hoveredMember === i ? null : i)}
                style={{ position: "relative", borderRadius: 12, overflow: "hidden", cursor: "pointer", border: `1px solid ${T.border}`, background: T.cardBg, transition: "all 0.25s" }}
              >
                <div style={{ width: "100%", height: 200, background: `linear-gradient(135deg,hsl(${m.hue},28%,52%),hsl(${m.hue + 40},22%,38%))`, display: "flex", alignItems: "flex-end", padding: 16 }}>
                  <div>
                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, color: "#fff" }}>{m.name}</div>
                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>{m.role}</div>
                  </div>
                </div>
                {hoveredMember === i && (
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, animation: "annotFadeIn 0.2s ease" }}>
                    <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.85)", textAlign: "center" }}>{m.bio}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Team Layout 3 — Click for Modal */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Team + Modal" title="Click for full profile" pos="top-right" vis={lm}>Best when each person has a substantial story or qualifications. The modal gives room without cluttering the main page.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Team Layout 3 — Click to Open Full Profile</SL>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
            {team.map((m, i) => (
              <div
                key={i}
                onClick={() => setBioModal(m)}
                onMouseEnter={e => e.currentTarget.style.borderColor = T.accent}
                onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
                style={{ padding: "24px 20px", borderRadius: 12, background: T.cardBg, border: `1px solid ${T.border}`, cursor: "pointer", transition: "all 0.2s" }}
              >
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg,hsl(${m.hue},28%,52%),hsl(${m.hue + 40},22%,38%))`, marginBottom: 14 }} />
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, color: T.text }}>{m.name}</div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted, marginTop: 2 }}>{m.role}</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.accent, marginTop: 10 }}>View profile →</div>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Bio Modal */}
      {bioModal && (
        <div onClick={() => setBioModal(null)} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(4px)" }}>
          <div onClick={e => e.stopPropagation()} style={{ width: "min(90vw,440px)", background: T.cardBg, borderRadius: 16, padding: "clamp(28px,5vw,40px)", position: "relative" }}>
            <button onClick={() => setBioModal(null)} style={{ position: "absolute", top: 12, right: 12, width: 32, height: 32, borderRadius: "50%", border: "none", background: T.bgAlt, color: T.textMuted, fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: `linear-gradient(135deg,hsl(${bioModal.hue},28%,52%),hsl(${bioModal.hue + 40},22%,38%))`, marginBottom: 20 }} />
            <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 20, fontWeight: 600, color: T.text, marginBottom: 4 }}>{bioModal.name}</h3>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: T.accent, marginBottom: 16 }}>{bioModal.role}</div>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, lineHeight: 1.7, color: T.textMuted, marginBottom: 20 }}>{bioModal.bio}</p>
            <div style={{ display: "flex", gap: 12 }}>
              {["LinkedIn", "Email", "Portfolio"].map((l, i) => (
                <a key={i} href="#" onClick={e => e.preventDefault()} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: T.accent, textDecoration: "none", padding: "6px 12px", borderRadius: 6, border: `1px solid ${T.border}` }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full-Width Image */}
      <Sec T={T} style={{ borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Full-Width Image" title="Visual storytelling" pos="top-left" vis={lm}>A single large image creates an emotional moment. Use for team photos, workspace, events, or your product in context.</An>
        <div style={{ width: "100%", height: "clamp(200px,40vw,400px)", background: "linear-gradient(135deg,#2B3A42,#1C2830,#3A4F42)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, color: "rgba(255,255,255,0.4)" }}>Full-Width Image — Team / Workspace / Product</span>
        </div>
      </Sec>

      {/* Timeline / Milestones */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Timeline" title="Your story in milestones" pos="top-right" vis={lm}>Milestones give credibility without requiring visitors to read paragraphs. Focus on outcomes and turning points.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Company Timeline</SL>
          <div style={{ maxWidth: 640 }}>
            {[
              { y: "2019", t: "Founded",                  d: "Started with a belief that meaningful work deserves meaningful design." },
              { y: "2021", t: "First major client",        d: "Partnered with a global health coalition, proving our model." },
              { y: "2023", t: "Recognised by HundrED",    d: "Our education work named among the top 100 innovations." },
              { y: "2025", t: "International expansion",  d: "Now serving organisations across 15 countries." },
            ].map((m, i) => (
              <div key={i} style={{ display: "flex", gap: 20, marginBottom: i < 3 ? 28 : 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 500, color: T.accent, width: 48, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 6, background: T.bgAlt, flexShrink: 0 }}>{m.y}</div>
                  {i < 3 && <div style={{ width: 1, flex: 1, background: T.border, marginTop: 6 }} />}
                </div>
                <div style={{ paddingBottom: i < 3 ? 8 : 0 }}>
                  <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, fontWeight: 600, marginBottom: 4, color: T.text }}>{m.t}</h4>
                  <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, lineHeight: 1.6, color: T.textMuted }}>{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Location / Map */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Location / Map" title="Where you operate" pos="top-right" vis={lm}>Embed an interactive OpenStreetMap iframe — free, no API key needed. Shows the exact address and lets visitors interact with the map.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Office Locations</SL>
          <div style={{ width: "100%", height: 280, borderRadius: 12, overflow: "hidden", marginBottom: 24, border: `1px solid ${T.border}` }}>
            <iframe
              title="Office location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1250%2C51.5050%2C-0.1050%2C51.5150&layer=mapnik&marker=51.5100%2C-0.1150"
              style={{ width: "100%", height: "100%", border: "none", display: "block" }}
              loading="lazy"
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
            {[
              { city: "London", addr: "123 Design Street, EC1A 1BB" },
              { city: "Lisbon", addr: "Rua da Criatividade 45, 1100" },
              { city: "Remote", addr: "Team members across 8 countries" },
            ].map((loc, i) => (
              <div key={i} style={{ padding: "20px", borderRadius: 10, background: T.cardBg, border: `1px solid ${T.border}` }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, color: T.text, marginBottom: 4 }}>{loc.city}</div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted }}>{loc.addr}</div>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Downloadable Resources */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Resources" title="Downloadable assets" pos="top-right" vis={lm}>Annual reports, press kits, white papers. Always show file type and size so visitors know what they're getting.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Downloadable Resources</SL>
          <div style={{ maxWidth: 640 }}>
            {[
              { title: "Annual Impact Report 2025", type: "PDF", size: "2.4 MB" },
              { title: "Brand Guidelines",          type: "PDF", size: "8.1 MB" },
              { title: "Press Kit & Logos",         type: "ZIP", size: "15 MB" },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", borderBottom: i < 2 ? `1px solid ${T.border}` : "none", gap: 12, flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 500, color: T.text }}>{r.title}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: T.textMuted, marginTop: 2 }}>{r.type} · {r.size}</div>
                </div>
                <button style={{ padding: "8px 18px", borderRadius: 6, border: `1px solid ${T.border}`, background: T.cardBg, color: T.text, fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap" }}>Download ↓</button>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Press Mentions */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Press Mentions" title="Third-party credibility" pos="top-right" vis={lm}>Similar to a trust bar but for media coverage. If you don't have press coverage yet, skip this section.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto", textAlign: "center" }}>
          <SL T={T}>As Featured In</SL>
          <div style={{ display: "flex", justifyContent: "center", gap: "clamp(24px,5vw,48px)", flexWrap: "wrap", opacity: 0.35, marginTop: 8 }}>
            {["Publication A", "Publication B", "Publication C", "Publication D"].map((n, i) => (
              <div key={i} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, color: T.text, whiteSpace: "nowrap" }}>{n}</div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Footer — repeated from Landing Page */}
      <Sec T={T} dark style={{ padding: "56px 20px 28px", background: T.bgDark }}>
        <An T={T} label="Full Footer" title="Close with navigation" pos="top-left" vis={lm}>Repeating the footer on interior pages ensures visitors always have a way forward, even after reaching the bottom.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 36, marginBottom: 40 }}>
            <div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 17, fontWeight: 600, marginBottom: 14, color: "#fff" }}>Your Brand</div>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.45)", maxWidth: 220 }}>A brief description of what you do and why.</p>
            </div>
            {[
              { t: "Services", i: ["Branding", "Web Design", "Strategy", "Content"] },
              { t: "Company",  i: ["About", "Case Studies", "Blog", "Contact"] },
              { t: "Connect",  i: ["LinkedIn", "Twitter", "Newsletter", "hello@email.com"] },
            ].map((c, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", marginBottom: 14 }}>{c.t}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  {c.i.map((item, j) => (
                    <a key={j} href="#" onClick={e => e.preventDefault()} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>{item}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>© 2025 Your Brand. All rights reserved.</span>
            <div style={{ display: "flex", gap: 20 }}>
              {["Privacy Policy", "Terms", "Cookie Policy"].map((l, i) => (
                <a key={i} href="#" onClick={e => e.preventDefault()} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </Sec>
      <SiteFooter activePage={activePage} setActivePage={setActivePage} T={T} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// NAVIGATION PATTERNS PAGE
// ═══════════════════════════════════════════════════════════
export function NavigationPage({ lm, T, activePage, setActivePage }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [bottomActive, setBottomActive] = useState(0);
  return (
    <div>
      <PageHeader T={T} title="Navigation patterns" desc="Navigation is the skeleton of your website. If visitors can't find what they need in 3 seconds, they leave. These are the most common patterns." />

      {/* Standard horizontal */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Horizontal Nav" title="The standard" pos="top-right" vis={lm}>Works for 4–7 top-level items. Simple, familiar, expected. Keep labels short (1–2 words). Highlight the active page. This is what 90% of websites need.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Standard Horizontal Navigation</SL>
          <div style={{ background: T.cardBg, border: `1px solid ${T.border}`, borderRadius: 12, padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56, flexWrap: "wrap", gap: 8 }}>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, color: T.text }}>Brand</div>
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
              {["Home", "About", "Services", "Work", "Contact"].map((l, i) => (
                <button
                  key={i}
                  style={{ padding: "6px 14px", borderRadius: 6, border: "none", background: i === 0 ? T.accent : "transparent", color: i === 0 ? "#fff" : T.textMuted, fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 500, cursor: "pointer", transition: "background 0.2s" }}
                  onMouseEnter={e => { if (i !== 0) e.currentTarget.style.background = T.bgAlt; }}
                  onMouseLeave={e => { if (i !== 0) e.currentTarget.style.background = "transparent"; }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Sec>

      {/* Mega Menu */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Mega Menu" title="For content-rich sites" pos="top-right" vis={lm}>When you have too many pages for a simple nav. Groups items into categories. Common on enterprise, e-commerce, and university sites. Keep it scannable.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Mega Menu — click "Services" to expand</SL>
          <div style={{ background: T.cardBg, border: `1px solid ${T.border}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, color: T.text }}>Brand</div>
              <div style={{ display: "flex", gap: 4 }}>
                {["Home", "About"].map((l, i) => (
                  <button key={i} style={{ padding: "6px 14px", borderRadius: 6, border: "none", background: "transparent", color: T.textMuted, fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>{l}</button>
                ))}
                <button
                  onClick={() => setMegaOpen(!megaOpen)}
                  onMouseEnter={e => { if (!megaOpen) e.currentTarget.style.background = T.bgAlt; e.currentTarget.style.color = T.text; }}
                  onMouseLeave={e => { if (!megaOpen) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = T.textMuted; } }}
                  style={{ padding: "6px 14px", borderRadius: 6, border: "none", background: megaOpen ? T.accent : "transparent", color: megaOpen ? "#fff" : T.textMuted, fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 500, cursor: "pointer", transition: "all 0.15s" }}
                >Services {megaOpen ? "▴" : "▾"}</button>
                <button style={{ padding: "6px 14px", borderRadius: 6, border: "none", background: "transparent", color: T.textMuted, fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>Contact</button>
              </div>
            </div>
            {megaOpen && (
              <div style={{ borderTop: `1px solid ${T.border}`, padding: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 20 }}>
                {[
                  { cat: "Design",   items: ["Branding", "Web Design", "UI/UX", "Print"] },
                  { cat: "Strategy", items: ["Brand Strategy", "Research", "Positioning", "Workshops"] },
                  { cat: "Content",  items: ["Copywriting", "Video", "Photography", "Social"] },
                ].map((c, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: T.accent, marginBottom: 10 }}>{c.cat}</div>
                    {c.items.map((it, j) => (
                      <div key={j}
                        style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: T.text, padding: "7px 10px", marginLeft: -10, borderRadius: 6, cursor: "pointer", transition: "background 0.15s" }}
                        onMouseEnter={e => e.currentTarget.style.background = T.bgAlt}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                      >{it}</div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Sec>

      {/* Breadcrumbs */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Breadcrumbs" title="Where am I?" pos="top-right" vis={lm}>Shows the visitor's position in the site hierarchy. Essential for deep sites. Unnecessary for flat sites with only 4–5 pages.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Breadcrumbs</SL>
          <div style={{ padding: "16px 20px", background: T.cardBg, borderRadius: 10, border: `1px solid ${T.border}` }}>
            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ color: T.accent, cursor: "pointer" }}>Home</span><span>›</span>
              <span style={{ color: T.accent, cursor: "pointer" }}>Services</span><span>›</span>
              <span style={{ color: T.accent, cursor: "pointer" }}>Branding</span><span>›</span>
              <span style={{ color: T.text, fontWeight: 500 }}>Visual Identity</span>
            </div>
          </div>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted, marginTop: 12, lineHeight: 1.6 }}>Each level is clickable except the current page. Use "›" or "/" as separators. Place below the main nav, above the page content.</p>
        </div>
      </Sec>

      {/* Sidebar nav */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Sidebar Nav" title="For documentation & dashboards" pos="top-right" vis={lm}>Persistent sidebar works for content-heavy sites: documentation, apps, admin panels. Not suitable for marketing websites.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Sidebar Navigation</SL>
          <div style={{ display: "flex", gap: 1, borderRadius: 12, overflow: "hidden", border: `1px solid ${T.border}`, minHeight: 300 }}>
            <div style={{ width: 200, background: T.cardBg, padding: 16, borderRight: `1px solid ${T.border}`, flexShrink: 0 }}>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 600, color: T.text, marginBottom: 16 }}>Documentation</div>
              {["Getting Started", "Installation", "Configuration", "Components", "API Reference", "Examples", "FAQ"].map((l, i) => (
                <div key={i} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: i === 2 ? T.accent : T.textMuted, fontWeight: i === 2 ? 600 : 400, padding: "8px 10px", borderRadius: 6, background: i === 2 ? T.bgAlt : "transparent", cursor: "pointer", marginBottom: 2 }}>{l}</div>
              ))}
            </div>
            <div style={{ flex: 1, padding: 24, background: T.bg }}>
              <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 18, fontWeight: 600, marginBottom: 8, color: T.text }}>Configuration</h3>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, lineHeight: 1.7, color: T.textMuted }}>The main content area shows the selected page. The sidebar stays visible for navigation.</p>
            </div>
          </div>
        </div>
      </Sec>

      {/* Mobile Bottom Tab Bar */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Bottom Tab Bar" title="Mobile-first navigation" pos="top-right" vis={lm}>The standard for mobile apps. Thumb-friendly, always visible, 3–5 items max. Use icons with labels — icons alone are ambiguous.</An>
        <div style={{ maxWidth: 400, margin: "0 auto" }}>
          <SL T={T}>Mobile Bottom Tab Bar</SL>
          <div style={{ background: T.bgDark, borderRadius: 16, overflow: "hidden", height: 500, position: "relative", display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.3)", fontFamily: "'Outfit',sans-serif", fontSize: 14 }}>
              {["Home", "Search", "Projects", "Messages", "Profile"][bottomActive]} Page
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", padding: "10px 8px 16px", borderTop: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.3)" }}>
              {[{ icon: "⌂", label: "Home" }, { icon: "⌕", label: "Search" }, { icon: "◫", label: "Projects" }, { icon: "✉", label: "Messages" }, { icon: "○", label: "Profile" }].map((t, i) => (
                <button key={i} onClick={() => setBottomActive(i)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, border: "none", background: "none", cursor: "pointer", padding: "4px 8px" }}>
                  <span style={{ fontSize: 18, color: bottomActive === i ? "#4ABA9E" : "rgba(255,255,255,0.35)" }}>{t.icon}</span>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, fontWeight: bottomActive === i ? 600 : 400, color: bottomActive === i ? "#4ABA9E" : "rgba(255,255,255,0.35)" }}>{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Sec>
      <SiteFooter activePage={activePage} setActivePage={setActivePage} T={T} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PRICING PAGE
// ═══════════════════════════════════════════════════════════
export function PricingPage({ lm, T, activePage, setActivePage }) {
  const [annual, setAnnual] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const tiers = [
    { n: "Starter",     p: annual ? 190 : 19,  f: ["5 projects", "10GB storage", "Email support"],            highlight: false },
    { n: "Pro",         p: annual ? 490 : 49,  f: ["Unlimited projects", "100GB storage", "Priority support", "Custom domain"], highlight: true },
    { n: "Enterprise",  p: annual ? 990 : 99,  f: ["Everything in Pro", "Dedicated support", "SSO", "SLA"],   highlight: false },
  ];
  return (
    <div>
      <PageHeader T={T} title="Pricing patterns" desc="How you present pricing shapes perception of value. These patterns help visitors choose with confidence." />

      <Sec T={T} style={{ padding: "56px 20px" }}>
        <An T={T} label="Pricing Tiers" title="The classic 3-column" pos="top-right" vis={lm}>Highlight one tier as "recommended" to guide decisions. Annual toggle increases perceived value.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Pricing Tiers</SL>

          {/* Toggle */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 36 }}>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: annual ? T.textMuted : T.text, fontWeight: annual ? 400 : 600 }}>Monthly</span>
            <div onClick={() => setAnnual(!annual)} style={{ width: 48, height: 26, borderRadius: 13, background: annual ? T.accent : T.border, cursor: "pointer", position: "relative", transition: "background 0.25s" }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#fff", position: "absolute", top: 3, left: annual ? 25 : 3, transition: "left 0.25s", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }} />
            </div>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: annual ? T.text : T.textMuted, fontWeight: annual ? 600 : 400 }}>Annual <span style={{ color: T.accent, fontSize: 12 }}>–20%</span></span>
          </div>

          {/* Tier cards — equal height via flex stretch */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, alignItems: "stretch" }}>
            {tiers.map((tier, i) => (
              <div
                key={i}
                style={{ padding: "28px 24px", borderRadius: 14, border: `2px solid ${tier.highlight ? T.accent : T.border}`, background: tier.highlight ? T.accent : T.cardBg, position: "relative", transition: "transform 0.2s", display: "flex", flexDirection: "column" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "none"}
              >
                {tier.highlight && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: T.annotBorder, color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 12px", borderRadius: 10, fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.05em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Recommended</div>}
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 600, marginBottom: 8, color: tier.highlight ? "rgba(255,255,255,0.8)" : T.textMuted }}>{tier.n}</div>
                <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 36, fontWeight: 400, marginBottom: 20, color: tier.highlight ? "#fff" : T.text }}>${tier.p}<span style={{ fontSize: 14, fontFamily: "'Outfit',sans-serif", opacity: 0.6 }}>/mo</span></div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28, flex: 1 }}>
                  {tier.f.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Outfit',sans-serif", fontSize: 13, color: tier.highlight ? "rgba(255,255,255,0.85)" : T.text }}>
                      <span style={{ color: tier.highlight ? "#fff" : T.accent, fontSize: 14 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <button style={{ width: "100%", padding: "11px 0", borderRadius: 8, border: tier.highlight ? "2px solid rgba(255,255,255,0.4)" : `2px solid ${T.accent}`, background: tier.highlight ? "rgba(255,255,255,0.15)" : "transparent", color: tier.highlight ? "#fff" : T.accent, fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "background 0.2s", marginTop: "auto" }}>
                  Get started
                </button>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Comparison Table */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Comparison Table" title="Feature-by-feature detail" pos="top-right" vis={lm}>For visitors who need to compare tiers in detail. Keep the table scannable — use checkmarks and dashes, not paragraphs. Highlight the recommended column.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto", overflowX: "auto" }}>
          <SL T={T}>Feature Comparison Table</SL>
          <div style={{ minWidth: 500 }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 1, background: T.border, borderRadius: 12, overflow: "hidden" }}>
              {["Feature", "Starter", "Growth", "Enterprise"].map((h, i) => (
                <div key={i} style={{ padding: "14px 16px", background: T.cardBg, fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 600, color: i === 2 ? T.accent : T.text, textAlign: i > 0 ? "center" : "left" }}>{h}</div>
              ))}
              {[
                ["Projects",  "5",        "Unlimited", "Unlimited"],
                ["Users",     "1",        "5",         "Unlimited"],
                ["Support",   "Email",    "Priority",  "Dedicated"],
                ["Analytics", "Basic",    "Advanced",  "Custom"],
                ["Branding",  "—",        "✓",         "✓"],
                ["SSO",       "—",        "—",         "✓"],
              ].map((row, i) => (
                row.map((cell, j) => (
                  <div key={`${i}-${j}`} style={{ padding: "12px 16px", background: T.cardBg, fontFamily: "'Outfit',sans-serif", fontSize: 13, color: j === 0 ? T.text : T.textMuted, textAlign: j > 0 ? "center" : "left" }}>{cell}</div>
                ))
              ))}
            </div>
          </div>
        </div>
      </Sec>

      {/* Pricing FAQ */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Pricing FAQ" title="Remove last objections" pos="top-right" vis={lm}>Always pair pricing with FAQ. Address: Can I cancel? Is there a free trial? These remove the final hesitation before clicking "Buy."</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Pricing FAQ</SL>
          {[
            { q: "Can I try it for free?",                 a: "Yes — all plans come with a 14-day free trial. No credit card required." },
            { q: "Can I switch plans later?",              a: "Absolutely. Upgrade or downgrade at any time. Changes take effect on your next billing cycle." },
            { q: "What happens if I cancel?",              a: "You keep access until the end of your billing period. After that, your data is retained for 90 days in case you want to come back." },
            { q: "Do you offer discounts for nonprofits?", a: "Yes — registered nonprofits get 30% off any plan. Contact us with proof of status." },
          ].map((it, i) => (
            <div key={i} style={{ borderBottom: `1px solid ${T.border}` }}>
              <button
                onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
                onMouseEnter={e => e.currentTarget.style.background = T.bgAlt}
                onMouseLeave={e => e.currentTarget.style.background = "none"}
                style={{ width: "100%", padding: "18px 12px", border: "none", background: "none", borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left", color: T.text, transition: "background 0.15s" }}
              >
                <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: faqOpen === i ? 600 : 500, paddingRight: 16 }}>{it.q}</span>
                <span style={{ fontSize: 18, color: T.accent, transform: faqOpen === i ? "rotate(45deg)" : "none", transition: "transform 0.25s", flexShrink: 0 }}>+</span>
              </button>
              <div style={{ overflow: "hidden", maxHeight: faqOpen === i ? 200 : 0, transition: "max-height 0.35s ease" }}>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, lineHeight: 1.7, color: T.textMuted, padding: "0 12px 18px" }}>{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </Sec>
      <SiteFooter activePage={activePage} setActivePage={setActivePage} T={T} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// THEMES PAGE
// ═══════════════════════════════════════════════════════════
export function ThemesPage({ lm, T, themeMode, setThemeMode, activePage, setActivePage }) {
  return (
    <div>
      <PageHeader T={T} title="Light & Dark Themes" desc="Theme support isn't just aesthetics — it's accessibility. Many users rely on dark mode due to light sensitivity." />

      {/* Theme Toggle */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Theme Toggle" title="Light, dark, and system" pos="top-right" vis={lm}>Three options: Light, Dark, System. "System" respects the user's OS preference. Place in header or footer.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Switch this site's theme</SL>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { id: "light",  l: "☀ Light",    d: "Clean, professional" },
              { id: "dark",   l: "● Dark",     d: "Reduced glare, modern" },
              { id: "system", l: "◐ System",   d: "Matches OS setting" },
            ].map(o => (
              <button key={o.id} onClick={() => setThemeMode(o.id)} style={{ flex: "1 1 160px", padding: "16px 18px", borderRadius: 10, textAlign: "left", cursor: "pointer", border: `2px solid ${themeMode === o.id ? T.accent : T.border}`, background: T.cardBg, color: T.text, transition: "all 0.2s" }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{o.l}</div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: T.textMuted }}>{o.d}</div>
              </button>
            ))}
          </div>
        </div>
      </Sec>

      {/* Accessibility Info */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Accessibility" title="More than preference" pos="top-right" vis={lm}>~85% of smartphone users have tried dark mode. For people with photosensitivity, it's a necessity.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Why themes matter</SL>
          {[
            { t: "Accessibility",    d: "Light sensitivity and visual impairments affect millions. Dark mode is inclusion." },
            { t: "Retention",        d: "Visitors who can't comfortably read leave. Their preferred mode removes a barrier." },
            { t: "Perception",       d: "Theme support signals technical maturity and user-centeredness." },
            { t: "Implementation",   d: "CSS custom properties for all colours. Switch variable sets per theme. Store in localStorage." },
          ].map((it, i) => (
            <div key={i} style={{ padding: "16px 0", borderBottom: i < 3 ? `1px solid ${T.border}` : "none" }}>
              <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, marginBottom: 4, color: T.text }}>{it.t}</h4>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, lineHeight: 1.6, color: T.textMuted }}>{it.d}</p>
            </div>
          ))}
        </div>
      </Sec>

      {/* Contrast Examples */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Contrast" title="Test both modes" pos="top-left" vis={lm}>A colour beautiful in light mode may be invisible in dark mode. Always design and test both.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Current theme across elements</SL>
          <div style={{ padding: "20px", borderRadius: 10, background: T.cardBg, border: `1px solid ${T.border}`, marginBottom: 16 }}>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: T.text, marginBottom: 8 }}><strong>Primary text</strong> — must maintain 4.5:1 contrast ratio.</p>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.textMuted }}>Muted text — minimum 3:1 contrast.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button style={{ padding: "10px 20px", borderRadius: 8, border: "none", background: T.accent, color: "#fff", fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Primary</button>
            <button style={{ padding: "10px 20px", borderRadius: 8, border: `1.5px solid ${T.border}`, background: "transparent", color: T.text, fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>Secondary</button>
          </div>
        </div>
      </Sec>
      <SiteFooter activePage={activePage} setActivePage={setActivePage} T={T} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// CONTACT & LEADS PAGE
// ═══════════════════════════════════════════════════════════
export function ContactPage({ lm, T, activePage, setActivePage }) {
  const [nlPopup, setNlPopup] = useState(false);
  const [formTopic, setFormTopic] = useState("");
  const inp = { width: "100%", padding: "11px 14px", borderRadius: 8, border: `1px solid ${T.border}`, background: T.cardBg, color: T.text, fontFamily: "'Outfit',sans-serif", fontSize: 14, outline: "none", boxSizing: "border-box" };
  return (
    <div>
      <PageHeader T={T} title="Contact & Lead Capture" desc="How visitors reach you — and how you reach them back — shapes conversion." />

      {/* Contact Form — Adaptive */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Contact Form" title="Adaptive structured enquiries" pos="top-right" vis={lm}>The form adapts to the selected topic — revealing relevant follow-up fields. This reduces friction by only asking what's needed for each enquiry type.</An>
        <div style={{ maxWidth: 540, margin: "0 auto" }}>
          <SL T={T}>Contact Form — Adaptive</SL>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 500, color: T.text, display: "block", marginBottom: 6 }}>Name</label>
              <input type="text" placeholder="Your full name" style={inp} />
            </div>
            <div>
              <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 500, color: T.text, display: "block", marginBottom: 6 }}>Email</label>
              <input type="email" placeholder="your@email.com" style={inp} />
            </div>
            <div>
              <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 500, color: T.text, display: "block", marginBottom: 6 }}>Topic</label>
              <select value={formTopic} onChange={e => setFormTopic(e.target.value)} style={{ ...inp, color: formTopic ? T.text : T.textMuted }}>
                <option value="">Select a topic...</option>
                <option value="Branding">Branding</option>
                <option value="Web Design">Web Design</option>
                <option value="General">General</option>
              </select>
            </div>
            {/* Adaptive: Branding extras */}
            {formTopic === "Branding" && (
              <div style={{ padding: "16px 18px", borderRadius: 10, background: T.bgAlt, border: `1px solid ${T.border}`, animation: "annotFadeIn 0.2s ease" }}>
                <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 500, color: T.text, display: "block", marginBottom: 10 }}>Where are you in your brand journey?</label>
                {["Starting from scratch", "Refreshing an existing brand", "Expanding into new markets"].map((opt, i) => (
                  <label key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, cursor: "pointer" }}>
                    <input type="radio" name="brandStage" style={{ accentColor: T.accent }} />
                    <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.text }}>{opt}</span>
                  </label>
                ))}
              </div>
            )}
            {/* Adaptive: Web Design extras */}
            {formTopic === "Web Design" && (
              <div style={{ padding: "16px 18px", borderRadius: 10, background: T.bgAlt, border: `1px solid ${T.border}`, animation: "annotFadeIn 0.2s ease" }}>
                <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 500, color: T.text, display: "block", marginBottom: 10 }}>Platform preference</label>
                {["No preference", "Next.js / React", "Webflow", "WordPress"].map((opt, i) => (
                  <label key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, cursor: "pointer" }}>
                    <input type="checkbox" style={{ accentColor: T.accent }} />
                    <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: T.text }}>{opt}</span>
                  </label>
                ))}
              </div>
            )}
            <div>
              <label style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, fontWeight: 500, color: T.text, display: "block", marginBottom: 6 }}>Message</label>
              <textarea rows={4} placeholder="Tell us about your project..." style={{ ...inp, resize: "vertical" }} />
            </div>
            <button style={{ padding: "12px 28px", borderRadius: 8, border: "none", background: T.accent, color: "#fff", fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer", alignSelf: "flex-start" }}>Send Message</button>
          </div>
        </div>
      </Sec>

      {/* Email Only */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Email Only" title="Direct and personal" pos="top-right" vis={lm}>More human — visitor writes in their own words. No backend needed. But higher friction (app switch) and harder at scale. Best for studios and consultancies.</An>
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <SL T={T}>Email-Only Contact</SL>
          <div style={{ padding: "40px 28px", borderRadius: 14, background: T.cardBg, border: `1px solid ${T.border}` }}>
            <h3 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(22px,3vw,30px)", fontWeight: 400, marginBottom: 12, color: T.text }}>Let's talk about your project</h3>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, color: T.textMuted, marginBottom: 24, lineHeight: 1.6 }}>We'll get back to you within 24 hours.</p>
            <button onClick={() => {}} style={{ display: "inline-block", padding: "12px 28px", borderRadius: 8, background: T.accent, color: "#fff", fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, textDecoration: "none", border: "none", cursor: "pointer" }}>hello@example.com</button>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.textMuted, marginTop: 10 }}>mailto: disabled in demo</p>
          </div>
        </div>
      </Sec>

      {/* Comparison */}
      <Sec T={T} style={{ padding: "56px 20px", borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Comparison" title="Form vs email" pos="top-right" vis={lm}>Neither is universally better. The right choice depends on your volume, audience, and backend capabilities.</An>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <SL T={T}>Quick comparison</SL>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {[
              { t: "Contact Form",  items: [
                "✓ Lower friction — no app switch needed",
                "✓ Structured data you can route and analyse",
                "✓ Easy to direct enquiries to the right team",
                "✕ Feels less personal than a direct conversation",
                "✕ More likely to attract automated spam bots",
                "✕ Requires a backend or third-party service",
              ]},
              { t: "Email Only",    items: [
                "✓ Personal and human — feels like a real conversation",
                "✓ Freeform — visitors write in their own words",
                "✓ Zero infrastructure or backend required",
                "✕ Higher friction — requires switching to an email app",
                "✕ No consistent structure to filter or sort replies",
                "✕ Harder to manage at scale without a CRM",
              ]},
            ].map((c, i) => (
              <div key={i} style={{ padding: "24px 20px", borderRadius: 12, border: `1px solid ${T.border}`, background: T.cardBg }}>
                <h4 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 600, marginBottom: 12, color: T.text }}>{c.t}</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {c.items.map((x, j) => (
                    <div key={j} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 13, color: x.startsWith("✓") ? T.text : T.textMuted, lineHeight: 1.5 }}>{x}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* Newsletter Signup */}
      <Sec T={T} style={{ padding: "56px 20px", background: T.bgAlt, borderTop: `1px solid ${T.border}` }}>
        <An T={T} label="Newsletter" title="Building ongoing relationships" pos="top-right" vis={lm}>Captures interest from visitors not ready to buy. Lowest-commitment action. Place in footer, after valuable content, or as a popup. Be honest about frequency.</An>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <SL T={T}>Newsletter Signup</SL>
          <div style={{ padding: "32px 24px", borderRadius: 14, background: T.cardBg, border: `1px solid ${T.border}`, marginBottom: 24 }}>
            <h3 style={{ fontFamily: "'Instrument Serif',serif", fontSize: 24, fontWeight: 400, marginBottom: 8, color: T.text }}>Stay in the loop</h3>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 14, color: T.textMuted, marginBottom: 20, lineHeight: 1.6 }}>Practical insights. No spam. Unsubscribe anytime.</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <input type="email" placeholder="your@email.com" style={{ ...inp, flex: "1 1 200px", background: T.bg, minWidth: 0 }} />
              <button style={{ padding: "11px 24px", borderRadius: 8, border: "none", background: T.accent, color: "#fff", fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>Subscribe</button>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button onClick={() => setNlPopup(true)} style={{ padding: "12px 28px", borderRadius: 8, border: `1.5px solid ${T.accent}`, background: "transparent", color: T.accent, fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Show Newsletter Popup</button>
          </div>
        </div>
      </Sec>

      {/* Newsletter Popup */}
      {nlPopup && (
        <div style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(4px)" }}>
          <div style={{ width: "min(90vw,480px)", background: T.cardBg, borderRadius: 16, padding: "clamp(28px,5vw,48px)", position: "relative", textAlign: "center" }}>
            <button onClick={() => setNlPopup(false)} style={{ position: "absolute", top: 12, right: 12, width: 32, height: 32, borderRadius: "50%", border: "none", background: T.bgAlt, color: T.textMuted, fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
            <div style={{ fontSize: 40, marginBottom: 16 }}>✉</div>
            <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(22px,4vw,30px)", fontWeight: 400, marginBottom: 10, color: T.text }}>Don't miss what's next</h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, color: T.textMuted, marginBottom: 24, lineHeight: 1.6 }}>Join 2,000+ people getting practical insights. One email per week.</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
              <input type="email" placeholder="your@email.com" style={{ ...inp, flex: "1 1 200px", background: T.bg, minWidth: 0 }} />
              <button onClick={() => setNlPopup(false)} style={{ padding: "12px 24px", borderRadius: 8, border: "none", background: T.accent, color: "#fff", fontFamily: "'Outfit',sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>Subscribe</button>
            </div>
          </div>
        </div>
      )}
      <SiteFooter activePage={activePage} setActivePage={setActivePage} T={T} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// GLOSSARY PAGE
// ═══════════════════════════════════════════════════════════
const glossaryData = [
  { term: "Above the Fold",        def: "The portion of a webpage visible without scrolling. Critical for first impressions — your most important message and CTA should be here." },
  { term: "Accordion",             def: "A vertically stacked list of expandable/collapsible content sections. Ideal for FAQs, product details, or any list where visitors self-select." },
  { term: "Alt Text",              def: "Descriptive text for images, used by screen readers and displayed when images fail to load. Essential for accessibility and SEO." },
  { term: "Breadcrumbs",           def: "A secondary navigation showing the visitor's position in the site hierarchy (e.g., Home > Services > Branding). Helps orientation on deep sites." },
  { term: "Call to Action (CTA)",  def: "A button or link that prompts the visitor to take a specific action — 'Get Started', 'Contact Us', 'Download'. The most important conversion element on any page." },
  { term: "Carousel",              def: "A slideshow component that cycles through multiple items (images, cards, testimonials). Auto-advancing or manual. Use sparingly — most visitors only see the first slide." },
  { term: "Cookie Consent",        def: "A banner or popup informing visitors about cookie usage and requesting consent. Required by GDPR in Europe. Usually appears on first visit." },
  { term: "Dark Mode",             def: "An alternate colour scheme using dark backgrounds with light text. Reduces eye strain in low-light conditions and is preferred by many users." },
  { term: "Dropdown Menu",         def: "A navigation element that reveals sub-items when clicked or hovered. Keep to one level deep when possible — nested dropdowns are frustrating on mobile." },
  { term: "Favicon",               def: "The small icon displayed in browser tabs, bookmarks, and search results. Usually 16×16 or 32×32 pixels. A missing favicon looks unprofessional." },
  { term: "Footer",                def: "The bottom section of every page. Contains contact info, navigation links, legal pages, social links, and sometimes newsletter signup. Important for SEO and trust." },
  { term: "Grid System",           def: "An invisible structure of columns and gutters that organises content alignment. Common grids: 12-column for flexibility, 3 or 4 columns for content sections." },
  { term: "Hamburger Menu",        def: "The three-line icon (☰) that toggles a navigation menu, primarily on mobile. Universally recognised but hides navigation behind a tap — use when screen space is limited." },
  { term: "Hero Section",          def: "The large, prominent section at the top of a page. Contains the primary headline, supporting text, and call to action. Your most important 5 seconds." },
  { term: "Hover State",           def: "The visual change when a cursor is positioned over an interactive element. Signals clickability and adds polish. Must have a tap equivalent on mobile." },
  { term: "Infinite Scroll",       def: "Content that loads automatically as the visitor scrolls down. Common in social feeds and some blogs. Can frustrate users who want to reach the footer." },
  { term: "Landing Page",          def: "A standalone page designed for a specific campaign or conversion goal. Focused on a single action with minimal navigation distractions." },
  { term: "Lazy Loading",          def: "A technique where images and content load only as they enter the viewport. Improves initial page speed and saves bandwidth." },
  { term: "Lightbox",              def: "A full-screen overlay that displays an enlarged image or video while dimming the background. Used in galleries and portfolios for detail views." },
  { term: "Mega Menu",             def: "An expanded dropdown showing multiple columns of links, categories, and sometimes images. Used on content-heavy sites like e-commerce and universities." },
  { term: "Modal",                 def: "A popup window that overlays the page, requiring interaction before returning to the content. Used for signups, confirmations, detailed views. Use sparingly — they interrupt flow." },
  { term: "Navigation Bar (Navbar)", def: "The primary navigation element, usually at the top of every page. Contains the logo, main page links, and sometimes a CTA button. Sticky navbars remain visible while scrolling." },
  { term: "Parallax Scrolling",    def: "A visual effect where background elements move at a different speed than foreground content during scrolling. Creates depth. Use subtly — overdone parallax causes motion sickness." },
  { term: "Progress Bar",          def: "A visual indicator showing completion status — page scroll position, form steps, or loading progress. Reduces uncertainty and encourages completion." },
  { term: "Responsive Design",     def: "A design approach where layouts adapt to different screen sizes (desktop, tablet, mobile). Not optional — over 50% of web traffic is mobile." },
  { term: "Scroll Animation",      def: "Visual effects triggered by scrolling — fade-ins, slide-ins, counter animations. Adds dynamism but should be subtle. Always respect 'prefers-reduced-motion'." },
  { term: "Sidebar",               def: "A vertical column alongside main content, used for navigation, filters, or supplementary information. Common in documentation, blogs, and dashboards." },
  { term: "Slider",                def: "An interactive element that lets users adjust a value by dragging a handle along a track. Used for price ranges, image comparisons, or settings." },
  { term: "Social Proof",          def: "Elements that demonstrate credibility through others: testimonials, client logos, star ratings, user counts, press mentions. Builds trust through evidence." },
  { term: "Sticky Element",        def: "An element that remains fixed in position while the rest of the page scrolls. Common for navigation bars, CTAs, and sidebars. Keeps important elements accessible." },
  { term: "Tabs",                  def: "A set of clickable labels that switch between different content panels in the same space. Good for 3–6 parallel sections of equal weight." },
  { term: "Toast Notification",    def: "A small, temporary message that appears briefly (usually 3–5 seconds) to confirm an action — 'Message sent', 'Item added'. Non-blocking and auto-dismissing." },
  { term: "Toggle",                def: "A switch-style control that alternates between two states (on/off, monthly/annual). Provides instant visual feedback of the current state." },
  { term: "Tooltip",               def: "A small popup that appears on hover/tap, providing additional context about an element. Used for icon labels, term definitions, and UI guidance." },
  { term: "Trust Bar",             def: "A row of partner logos, client logos, or certifications displayed prominently (often below the hero). Provides instant credibility through association." },
  { term: "Typography Hierarchy",  def: "The system of font sizes, weights, and styles that establishes visual importance — H1 for page titles, H2 for sections, body text for content. Clear hierarchy improves scannability." },
  { term: "Viewport",              def: "The visible area of a webpage in the browser window. Responsive design adjusts layouts based on viewport dimensions." },
  { term: "White Space",           def: "Empty space between and around elements. Not wasted space — it improves readability, focuses attention, and creates visual breathing room. Also called negative space." },
  { term: "Wireframe",             def: "A low-fidelity layout showing page structure without design details. Used in planning to establish content hierarchy and user flow before visual design begins." },
  { term: "Z-Index",               def: "A CSS property controlling the stacking order of overlapping elements. Higher values appear on top. Critical for modals, dropdowns, and sticky navigation." },
];

export function GlossaryPage({ T, activePage, setActivePage }) {
  const [filterLetter, setFilterLetter] = useState(null);
  const allLetters = [...new Set(glossaryData.map(g => g.term[0].toUpperCase()))].sort();
  const letters = filterLetter ? [filterLetter] : allLetters;
  const perplexityUrl = term =>
    `https://www.perplexity.ai/search?q=Explain+the+term+%22${encodeURIComponent(term)}%22+in+web+anatomy+context`;
  return (
    <div>
      <PageHeader T={T} title="Glossary" desc="Every term you need to understand when discussing, planning, or reviewing a website — alphabetically organised." />
      <div style={{ padding: "0 20px 64px", maxWidth: 1040, margin: "0 auto" }}>

        {/* Letter filter chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 32, marginBottom: 8 }}>
          {[null, ...allLetters].map(l => (
            <button
              key={l ?? "all"}
              onClick={() => setFilterLetter(l)}
              style={{ padding: "5px 11px", borderRadius: 6, border: `1px solid ${(filterLetter === l) ? T.accent : T.border}`, background: (filterLetter === l) ? T.accent : "transparent", color: (filterLetter === l) ? "#fff" : T.textMuted, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 500, cursor: "pointer", transition: "all 0.15s" }}
            >
              {l ?? "All"}
            </button>
          ))}
        </div>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: T.textMuted, marginBottom: 32 }}>
          {filterLetter ? `Showing terms starting with "${filterLetter}" — ${glossaryData.filter(g => g.term[0].toUpperCase() === filterLetter).length} terms` : `${glossaryData.length} terms total`}
        </div>

        {letters.map(l => (
          <div key={l}>
            <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 40, fontWeight: 400, color: T.accent, marginTop: 48, marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid ${T.border}` }}>{l}</div>
            {glossaryData.filter(g => g.term[0].toUpperCase() === l).map((g, i) => (
              <div key={i} style={{ marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 6 }}>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 18, fontWeight: 600, color: T.text }}>{g.term}</div>
                  <a
                    href={perplexityUrl(g.term)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: T.accent, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4, opacity: 0.75 }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "1"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "0.75"}
                  >
                    Learn more
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </a>
                </div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, lineHeight: 1.7, color: T.textMuted }}>{g.def}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <SiteFooter activePage={activePage} setActivePage={setActivePage} T={T} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// EXAMPLES PAGE
// ═══════════════════════════════════════════════════════════
const EXAMPLES = [
  {
    id: "amazonia",
    name: "Amazonia Guardian",
    desc: "Forest preservation NGO — shows how editorial typography, a strong hero, and immersive imagery come together for a mission-driven organisation.",
    url: "/examples/amazon.html",
    tags: ["NGO", "Editorial", "Full-width hero", "Map embed"],
  },
];

export function ExamplesPage({ T, activePage, setActivePage }) {
  const [idx, setIdx] = useState(0);
  const ex = EXAMPLES[idx];
  const total = EXAMPLES.length;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

      {/* Header bar */}
      <div style={{ padding: "24px 20px", borderBottom: `1px solid ${T.border}`, background: T.bg }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <div>
              <SL T={T}>Example {idx + 1} of {total}</SL>
              <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(24px,4vw,36px)", fontWeight: 400, color: T.text, lineHeight: 1.1, marginBottom: 8 }}>{ex.name}</h1>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: T.textMuted, lineHeight: 1.6, maxWidth: 560 }}>{ex.desc}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                {ex.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: "3px 8px", borderRadius: 4, background: T.bgAlt, color: T.textMuted, letterSpacing: "0.06em" }}>{tag}</span>
                ))}
              </div>
            </div>
            {/* Example navigation */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <button
                onClick={() => setIdx(p => (p - 1 + total) % total)}
                disabled={total === 1}
                style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${T.border}`, background: T.cardBg, color: total === 1 ? T.border : T.text, fontSize: 16, cursor: total === 1 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >‹</button>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: T.textMuted, minWidth: 32, textAlign: "center" }}>{idx + 1}/{total}</span>
              <button
                onClick={() => setIdx(p => (p + 1) % total)}
                disabled={total === 1}
                style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${T.border}`, background: T.cardBg, color: total === 1 ? T.border : T.text, fontSize: 16, cursor: total === 1 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >›</button>
            </div>
          </div>
        </div>
      </div>

      {/* iframe */}
      <div style={{ flex: 1, position: "relative" }}>
        <iframe
          key={ex.url}
          src={ex.url}
          title={ex.name}
          style={{ width: "100%", height: "82vh", border: "none", display: "block" }}
          loading="lazy"
        />
      </div>

      <SiteFooter activePage={activePage} setActivePage={setActivePage} T={T} />
    </div>
  );
}
