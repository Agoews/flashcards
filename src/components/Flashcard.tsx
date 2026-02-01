"use client";

import { ChemElement } from "@/src/data/elements";
import {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type FlashcardProps = {
  element: ChemElement;
  isFlipped: boolean;
  reverseMode: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggle: () => void;
};

export function Flashcard({
  element,
  isFlipped,
  reverseMode,
  onPrev,
  onNext,
  onToggle,
}: FlashcardProps) {
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrlRef = useRef<string | null>(null);
  const answerVisibleRef = useRef<boolean>(
    reverseMode ? !isFlipped : isFlipped,
  );

  const cleanupAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = null;
    }
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
  };

  const badgeClasses = isFlipped
    ? "badge badge-outline font-semibold text-primary-content border-primary-content/60"
    : "badge badge-outline font-semibold";

  const playElementAudio = useCallback(async () => {
    cleanupAudio();
    setIsLoadingAudio(true);
    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: element.nameEn }),
      });

      if (!response.ok) {
        const errorJson = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(errorJson?.error ?? "Failed to generate audio.");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      audioUrlRef.current = url;

      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = cleanupAudio;
      audio.onerror = cleanupAudio;
      await audio.play();
    } catch (error) {
      console.error("TTS playback failed:", error);
      cleanupAudio();
    } finally {
      setIsLoadingAudio(false);
    }
  }, [cleanupAudio, element.nameEn]);

  const renderSymbolFace = (context: "front" | "back") => {
    const numberColor =
      context === "front" ? "text-base-content/70" : "text-primary-content/80";
    const symbolColor =
      context === "front" ? "text-base-content" : "text-primary-content";
    const massColor =
      context === "front" ? "text-base-content/70" : "text-primary-content/80";

    return (
      <>
        <div className="relative flex flex-col items-center justify-center">
          <span
            className={`absolute -top-6 text-base font-semibold ${numberColor}`}
          >
            {element.atomicNumber}
          </span>
          <p
            className={`text-7xl font-semibold leading-none tracking-tight ${symbolColor}`}
          >
            {element.symbol}
          </p>
        </div>
        <p className={`text-lg font-medium ${massColor}`}>
          {element.atomicMass}
        </p>
      </>
    );
  };

  const renderNameFace = (context: "front" | "back") => {
    const labelColor =
      context === "front" ? "text-base-content/60" : "text-primary-content/80";
    const textColor =
      context === "front" ? "text-base-content" : "text-primary-content";

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-1">
          <p className={`text-xs uppercase tracking-[0.4em] ${labelColor}`}>
            English
          </p>
          <p className={`text-4xl font-semibold ${textColor}`}>
            {element.nameEn}
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className={`text-xs uppercase tracking-[0.4em] ${labelColor}`}>
            中文
          </p>
          <p className={`text-3xl font-semibold ${textColor}`}>
            {element.nameZh}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="btn btn-sm btn-outline"
            onClick={(event) => {
              event.stopPropagation();
              if (!isMuted) {
                playElementAudio();
              }
            }}
            disabled={isLoadingAudio || isMuted}
          >
            {isMuted ? "Muted" : isLoadingAudio ? "…" : "🔊 Play"}
          </button>
          <button
            type="button"
            className="btn btn-sm"
            onClick={(event) => {
              event.stopPropagation();
              setIsMuted((prev) => !prev);
              cleanupAudio();
            }}
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
      </div>
    );
  };

  const frontContent = reverseMode
    ? renderNameFace("front")
    : renderSymbolFace("front");
  const backContent = reverseMode
    ? renderSymbolFace("back")
    : renderNameFace("back");

  const handleArrowClick = (
    event: MouseEvent<HTMLButtonElement>,
    direction: "prev" | "next",
  ) => {
    event.stopPropagation();
    cleanupAudio();
    if (direction === "prev") {
      onPrev();
    } else {
      onNext();
    }
  };

  useEffect(() => {
    return () => {
      cleanupAudio();
    };
  }, [cleanupAudio]);

  useEffect(() => {
    cleanupAudio();
  }, [element.atomicNumber, cleanupAudio]);

  useEffect(() => {
    const answerVisible = reverseMode ? !isFlipped : isFlipped;
    if (
      answerVisible &&
      !answerVisibleRef.current &&
      !isMuted
    ) {
      playElementAudio();
    }
    answerVisibleRef.current = answerVisible;
  }, [isFlipped, reverseMode, isMuted, playElementAudio]);

  return (
    <div className="mx-auto w-full max-w-lg">
      <div
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="card relative h-[22rem] cursor-pointer overflow-hidden border border-base-300/60 bg-base-100 shadow-xl"
      >
        <div className="absolute right-4 top-4 z-20 pointer-events-none">
          <span className={badgeClasses}>{element.groupLabel}</span>
        </div>

        <button
          type="button"
          aria-label="Previous element"
          className="absolute left-0 top-0 z-30 flex h-full w-1/5 min-w-[4rem] items-center justify-center bg-gradient-to-r from-neutral-200/90 via-neutral-200/40 to-transparent text-4xl font-semibold text-base-content/80 transition hover:text-base-content"
          onClick={(event) => handleArrowClick(event, "prev")}
        >
          {"<"}
        </button>
        <button
          type="button"
          aria-label="Next element"
          className="absolute right-0 top-0 z-30 flex h-full w-1/5 min-w-[4rem] items-center justify-center bg-gradient-to-l from-neutral-200/90 via-neutral-200/40 to-transparent text-4xl font-semibold text-base-content/80 transition hover:text-base-content"
          onClick={(event) => handleArrowClick(event, "next")}
        >
          {">"}
        </button>

        <div className="relative z-0 h-full w-full [perspective:var(--flashcard-perspective)]">
          <div
            className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
              isFlipped ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-[inherit] bg-base-100 px-8 py-10 text-center [backface-visibility:hidden]">
              {frontContent}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-[inherit] bg-primary px-8 py-10 text-center text-primary-content [backface-visibility:hidden] [transform:rotateY(180deg)]">
              {backContent}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={onToggle}
          className="btn btn-outline btn-primary w-40"
        >
          Flip
        </button>
      </div>
    </div>
  );
}
