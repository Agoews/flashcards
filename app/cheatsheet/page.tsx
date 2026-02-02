"use client";

import { SiteHeader } from "@/src/components/SiteHeader";
import { cheatSheetSections } from "@/src/data/cheatSheet";
import { useMemo, useState } from "react";

type SectionState = Record<string, boolean>;

const buildSectionState = (value: boolean): SectionState =>
  cheatSheetSections.reduce((acc, section) => {
    acc[section.id] = value;
    return acc;
  }, {} as SectionState);

const formatFormula = (formula: string) => {
  if (formula.length <= 40) {
    return formula;
  }
  const breakIndex = formula.lastIndexOf(" ", 40);
  const splitIndex = breakIndex > 0 ? breakIndex : 40;
  const firstLine = formula.slice(0, splitIndex).trim();
  const secondLine = formula.slice(splitIndex).trim();
  return `${firstLine}\n${secondLine}`;
};

export default function CheatSheetPage() {
  const [compactSections, setCompactSections] = useState<SectionState>(() =>
    buildSectionState(false),
  );
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const compactCount = useMemo(
    () => Object.values(compactSections).filter(Boolean).length,
    [compactSections],
  );

  const toggleCompact = (sectionId: string) => {
    setCompactSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const setAllCompactSections = (value: boolean) => {
    setCompactSections(buildSectionState(value));
  };

  const sidebarContainerClasses = `relative w-full transition-all duration-300 md:flex-shrink-0 ${
    sidebarCollapsed ? "md:w-10" : "md:w-64"
  }`;

  const sidebarPanelClasses = `rounded-3xl border border-base-300 bg-base-100/90 p-4 shadow-sm transition-all duration-300 ${
    sidebarCollapsed
      ? "md:-translate-x-[calc(100%-2.5rem)] md:opacity-0 md:pointer-events-none"
      : "md:translate-x-0"
  }`;

  const SectionJumpLinks = ({
    orientation = "horizontal",
  }: {
    orientation?: "horizontal" | "vertical";
  }) => {
    const containerClasses =
      orientation === "horizontal"
        ? "flex w-full flex-wrap gap-2 overflow-x-auto pb-1 pt-1 md:justify-end"
        : "flex w-full flex-col gap-2 pt-3 max-h-[70vh] overflow-y-auto pr-1";

    const buttonClasses =
      orientation === "horizontal"
        ? "btn btn-xs btn-ghost border border-transparent bg-base-100 text-base-content/80 hover:border-primary/40 hover:text-base-content"
        : "btn btn-xs btn-ghost border border-transparent bg-base-100 text-base-content/80 hover:border-primary/40 hover:text-base-content justify-start";

    return (
      <div className={containerClasses}>
        {cheatSheetSections.map((section) => {
          const match = section.chapter.match(/Chapter\s+\d+/i);
          const chapterLabel = match ? match[0] : section.chapter;
          const titleSnippet =
            section.title.length > 10
              ? `${section.title.slice(0, 10)}...`
              : section.title;
          const label = `${chapterLabel} - ${titleSnippet}`;
          return (
            <a
              key={section.id}
              href={`#section-${section.id}`}
              className={buttonClasses}
            >
              {label}
            </a>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-base-200">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:px-6">
        <div className={sidebarContainerClasses}>
          <aside className={sidebarPanelClasses}>
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                Sections
              </p>
            </div>
            <div className="mt-4 space-y-3">
              <SectionJumpLinks orientation="vertical" />
            </div>
          </aside>
          <button
            type="button"
            className="btn btn-circle btn-sm btn-primary absolute -right-5 top-4 hidden shadow-lg md:flex"
            onClick={() => setSidebarCollapsed((prev) => !prev)}
            aria-label={sidebarCollapsed ? "Expand sections sidebar" : "Collapse sections sidebar"}
            aria-expanded={!sidebarCollapsed}
          >
            {sidebarCollapsed ? ">>" : "<<"}
          </button>
        </div>

        <div className="flex-1 space-y-8">
          <section className="rounded-3xl border border-base-300 bg-base-100/80 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
              Rapid Reference
            </p>
            <h1 className="mt-2 text-4xl font-semibold text-base-content">
              Cheat Sheet & Chapter Notes
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-base-content/80">
              Capture the distilled takeaways for each unit so you can review
              trends side-by-side with the flashcards. Add new sections or notes
              as you move through the course - the layout keeps everything tidy even
              when the list grows.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-info"
                  onClick={() => setAllCompactSections(true)}
                >
                  Minimize cards
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline"
                  onClick={() => setAllCompactSections(false)}
                >
                  Restore cards
                </button>
              </div>
              <span className="text-xs uppercase tracking-widest text-base-content/60">
                {compactCount} minimized / {cheatSheetSections.length} sections
              </span>
            </div>
          </section>

          <div className="grid gap-6">
            {cheatSheetSections.map((section) => {
              const isCompact = compactSections[section.id];
              return (
                <section
                  key={section.id}
                  id={`section-${section.id}`}
                  className={`scroll-mt-32 rounded-3xl border border-base-300 p-6 shadow-sm transition hover:border-primary/40 ${
                    isCompact ? "bg-base-100/70" : "bg-base-100/90"
                  }`}
                >
                  <div className="flex flex-wrap items-start gap-4">
                    <div
                      className={`flex-1 space-y-2 text-left ${
                        isCompact ? "opacity-80" : ""
                      }`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
                        {section.chapter}
                      </p>
                      <h2 className="text-2xl font-semibold text-base-content">
                        {section.title}
                      </h2>
                      {!isCompact && (
                        <>
                          <p className="text-base text-base-content/80">
                            {section.summary}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {section.focus.map((focusPoint) => (
                              <span
                                key={focusPoint}
                                className="badge badge-outline border-dashed border-base-300 bg-base-200/60 text-xs font-semibold uppercase tracking-wide text-base-content/80"
                              >
                                {focusPoint}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex w-full flex-col gap-2 md:w-auto">
                      <button
                        type="button"
                        className={`btn btn-xs ${isCompact ? "btn-accent" : "btn-outline"}`}
                        onClick={() => toggleCompact(section.id)}
                        aria-pressed={isCompact}
                      >
                        {isCompact ? "Restore card" : "Minimize card"}
                      </button>
                    </div>
                  </div>

                  {isCompact ? (
                    <p className="mt-4 text-sm text-base-content/60">
                      Card minimized. Restore it to reveal the summary, focus tags, and notes.
                    </p>
                  ) : (
                    <div className="mt-6 grid gap-5 border-t border-base-300 pt-6 md:grid-cols-2">
                      {section.notes.map((note) => (
                        <article
                          key={note.title}
                          className="rounded-2xl bg-base-200/70 p-5 text-left shadow-inner"
                        >
                          <h3 className="text-lg font-semibold text-base-content">
                            {note.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-base-content/80">
                            {note.description}
                          </p>
                          {note.formula ? (
                            (() => {
                              const formattedFormula = formatFormula(note.formula);
                              const multiline = formattedFormula.includes("\n");
                              const className = `mt-3 rounded-xl border border-base-300 bg-base-100 p-3 font-mono text-sm text-primary ${
                                multiline ? "text-center" : ""
                              }`;
                              return (
                                <pre className={className}>{formattedFormula}</pre>
                              );
                            })()
                          ) : null}
                          {note.keyPoints?.length ? (
                            <ul className="mt-3 space-y-1 text-sm text-base-content/90">
                              {note.keyPoints.map((point) => (
                                <li
                                  key={point}
                                  className="flex items-start gap-2 text-left"
                                >
                                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </article>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
