"use client";

import { useState, useEffect } from "react";
import { Nav, InfoModal, IntroModal } from "@/components/Navigation";
import { lightTheme, darkTheme } from "@/lib/theme";
import {
  HomePage, HeroSectionsPage, GridPage, InteractivePage,
  GalleriesPage, MotionPage, AboutPage, NavigationPage,
  PricingPage, ThemesPage, ContactPage, GlossaryPage, ExamplesPage,
} from "@/components/Pages";

export default function WebAnatomy() {
  const [page,     setPage]     = useState("home");
  const [lm,       setLm]       = useState(false);   // Learning mode — OFF by default
  const [tm,       setTm]       = useState("system"); // Theme — system by default
  const [infoOpen,  setInfoOpen]  = useState(false);
  const [introOpen, setIntroOpen] = useState(true);
  const [sd,       setSd]       = useState(false);   // System dark mode

  // Detect OS dark mode preference
  useEffect(() => {
    const m = window.matchMedia("(prefers-color-scheme:dark)");
    setSd(m.matches);
    const h = e => setSd(e.matches);
    m.addEventListener("change", h);
    return () => m.removeEventListener("change", h);
  }, []);

  const isDark = tm === "dark" || (tm === "system" && sd);
  const T = isDark ? darkTheme : lightTheme;

  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  return (
    <div style={{ minHeight: "100vh", background: T.bg, color: T.text, transition: "background 0.3s, color 0.3s" }}>
      <IntroModal open={introOpen} onEnter={() => setIntroOpen(false)} T={T} />
      <Nav
        activePage={page}
        setActivePage={setPage}
        lm={lm}
        setLm={setLm}
        T={T}
        setInfoOpen={setInfoOpen}
      />
      <InfoModal open={infoOpen} onClose={() => setInfoOpen(false)} T={T} />

      {page === "home"        && <HomePage        lm={lm} T={T} activePage={page} setActivePage={setPage} />}
      {page === "heroes"      && <HeroSectionsPage lm={lm} T={T} activePage={page} setActivePage={setPage} />}
      {page === "grid"        && <GridPage         lm={lm} T={T} activePage={page} setActivePage={setPage} />}
      {page === "interactive" && <InteractivePage  lm={lm} T={T} activePage={page} setActivePage={setPage} />}
      {page === "galleries"   && <GalleriesPage    lm={lm} T={T} activePage={page} setActivePage={setPage} />}
      {page === "animation"   && <MotionPage        lm={lm} T={T} activePage={page} setActivePage={setPage} />}
      {page === "about"       && <AboutPage         lm={lm} T={T} activePage={page} setActivePage={setPage} />}
      {page === "navigation"  && <NavigationPage    lm={lm} T={T} activePage={page} setActivePage={setPage} />}
      {page === "pricing"     && <PricingPage        lm={lm} T={T} activePage={page} setActivePage={setPage} />}
      {page === "themes"      && <ThemesPage         lm={lm} T={T} themeMode={tm} setThemeMode={setTm} activePage={page} setActivePage={setPage} />}
      {page === "contact"     && <ContactPage        lm={lm} T={T} activePage={page} setActivePage={setPage} />}
      {page === "glossary"    && <GlossaryPage       T={T} activePage={page} setActivePage={setPage} />}
      {page === "examples"   && <ExamplesPage        T={T} activePage={page} setActivePage={setPage} />}
    </div>
  );
}
