"use client";

import { Flashcard } from "@/src/components/Flashcard";
import { StudyControls } from "@/src/components/StudyControls";
import { ChemElement, GroupFilter, elements } from "@/src/data/elements";
import { useLocalStorageState } from "@/src/hooks/useLocalStorageState";
import { useEffect, useMemo, useRef, useState } from "react"; // ✅ add useRef

const GROUP_FILTERS: { value: GroupFilter; label: string }[] = [
  { value: "ALL", label: "All groups (1A-8A)" },
  { value: "1A", label: "1A - Alkali metals" },
  { value: "2A", label: "2A - Alkaline earths" },
  { value: "3A", label: "3A - Boron family" },
  { value: "4A", label: "4A - Carbon family" },
  { value: "5A", label: "5A - Pnictogens" },
  { value: "6A", label: "6A - Chalcogens" },
  { value: "7A", label: "7A - Halogens" },
  { value: "8A", label: "8A - Noble gases" },
];

const DEFAULT_SETTINGS = {
  selectedGroup: "ALL" as GroupFilter,
  shuffleEnabled: false,
  reverseMode: false,
  lastIndex: 0,
};

const shuffleArray = <T,>(items: T[]) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const FLIP_MS = 500; // ✅ must match your CSS duration-500

export default function Home() {
  const [settings, setSettings] = useLocalStorageState(
    "chem-flashcards-settings",
    DEFAULT_SETTINGS,
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // ✅ holds the pending navigation timer (if we’re waiting for flip-back)
  const navTimeoutRef = useRef<number | null>(null);

  const clearNavTimeout = () => {
    if (navTimeoutRef.current !== null) {
      window.clearTimeout(navTimeoutRef.current);
      navTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    // ✅ cleanup on unmount
    return () => clearNavTimeout();
  }, []);

  const orderedElements = useMemo(
    () => [...elements].sort((a, b) => a.atomicNumber - b.atomicNumber),
    [elements],
  );

  const filteredElements = useMemo(() => {
    if (settings.selectedGroup === "ALL") return orderedElements;
    return orderedElements.filter(
      (element) => element.groupLabel === settings.selectedGroup,
    );
  }, [orderedElements, settings.selectedGroup]);

  const [shuffledElements, setShuffledElements] =
    useState<ChemElement[]>(filteredElements);

  useEffect(() => {
    if (settings.shuffleEnabled) {
      setShuffledElements(shuffleArray(filteredElements));
    } else {
      setShuffledElements(filteredElements);
    }
  }, [filteredElements, settings.shuffleEnabled]);

  const activeElements = settings.shuffleEnabled
    ? shuffledElements
    : filteredElements;

  useEffect(() => {
    if (!activeElements.length) {
      setCurrentIndex(0);
      return;
    }
    const safeIndex = Math.min(
      settings.lastIndex ?? 0,
      activeElements.length - 1,
    );
    setCurrentIndex(safeIndex);
  }, [activeElements.length, settings.lastIndex]);

  useEffect(() => {
    setSettings((prev) => {
      if (prev.lastIndex === currentIndex) {
        return prev;
      }
      return { ...prev, lastIndex: currentIndex };
    });
  }, [currentIndex, setSettings]);

  const goToIndex = (nextIndex: number) => {
    if (!activeElements.length) return;

    const total = activeElements.length;
    const wrappedIndex = (nextIndex + total) % total;

    // ? cancel any pending navigation (rapid clicks)
    clearNavTimeout();

    // ? if flipped, flip back first, then change card after the animation
    if (isFlipped) {
      setIsFlipped(false);

      navTimeoutRef.current = window.setTimeout(() => {
        setCurrentIndex(wrappedIndex);
        navTimeoutRef.current = null;
      }, FLIP_MS);

      return;
    }

    // ? already on front: change immediately
    setCurrentIndex(wrappedIndex);
  };

  const handlePrev = () => goToIndex(currentIndex - 1);
  const handleNext = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      return;
    }
    goToIndex(currentIndex + 1);
  };
  const handleGroupChange = (group: GroupFilter) => {
    clearNavTimeout(); // ✅ prevent delayed index change after filter change
    setSettings((prev) => ({
      ...prev,
      selectedGroup: group,
      lastIndex: 0,
    }));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleShuffleToggle = () => {
    clearNavTimeout(); // ✅ prevent delayed index change after shuffle toggle
    setSettings((prev) => ({
      ...prev,
      shuffleEnabled: !prev.shuffleEnabled,
    }));
    setIsFlipped(false);
  };

  const handleReverseToggle = () => {
    clearNavTimeout();
    setSettings((prev) => ({
      ...prev,
      reverseMode: !prev.reverseMode,
    }));
    setIsFlipped(false);
  };

  const currentElement = activeElements[currentIndex];
  const disableNavigation = activeElements.length === 0;

  return (
    <div className="flex min-h-screen flex-col bg-base-200">
      <header className="navbar sticky top-0 z-10 border-b border-base-300 bg-base-100/95 px-6 backdrop-blur">
        <div className="navbar-start" />
        <div className="navbar-center">
          <span className="text-xl font-semibold tracking-wide">
            Chem Flashcards
          </span>
        </div>
        <div className="navbar-end">
          <span className="badge badge-primary badge-outline">
            Main-group 1A-8A
          </span>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center gap-10 px-4 py-10 text-center md:px-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.5em] text-base-content/60">
            Study mode
          </p>
          <h1 className="text-4xl font-semibold text-base-content">
            Main-group Elements
          </h1>
          <p className="text-base text-base-content/70">
            Flip through the s- and p-block (groups 1A-8A), track progress, and
            keep your favorite study settings saved locally.
          </p>
        </div>

        {currentElement ? (
          <div className="flex w-full justify-center">
            <Flashcard
              element={currentElement}
              isFlipped={isFlipped}
              reverseMode={settings.reverseMode}
              onPrev={handlePrev}
              onNext={handleNext}
              onToggle={() => setIsFlipped((prev) => !prev)}
            />
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-base-300 bg-base-100/80 p-10 text-base-content/70">
            No elements match this filter.
          </div>
        )}

        <StudyControls
          groupOptions={GROUP_FILTERS}
          selectedGroup={settings.selectedGroup}
          onGroupChange={handleGroupChange}
          shuffleEnabled={settings.shuffleEnabled}
          onShuffleToggle={handleShuffleToggle}
          reverseMode={settings.reverseMode}
          onReverseToggle={handleReverseToggle}
          onReset={() => goToIndex(0)}
          disableNavigation={disableNavigation}
          currentIndex={currentIndex}
          total={activeElements.length}
        />
      </main>
    </div>
  );
}

