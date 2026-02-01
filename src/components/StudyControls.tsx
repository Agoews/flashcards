"use client";

import { GroupFilter } from "@/src/data/elements";

type ControlProps = {
  groupOptions: { value: GroupFilter; label: string }[];
  selectedGroup: GroupFilter;
  onGroupChange: (value: GroupFilter) => void;
  shuffleEnabled: boolean;
  onShuffleToggle: () => void;
  reverseMode: boolean;
  onReverseToggle: () => void;
  onReset: () => void;
  disableNavigation: boolean;
  currentIndex: number;
  total: number;
};

export function StudyControls({
  groupOptions,
  selectedGroup,
  onGroupChange,
  shuffleEnabled,
  onShuffleToggle,
  reverseMode,
  onReverseToggle,
  onReset,
  disableNavigation,
  currentIndex,
  total,
}: ControlProps) {
  const progressLabel =
    total > 0 ? `${currentIndex + 1} / ${total}` : "0 / 0";

  return (
    <section className="w-full max-w-2xl space-y-6 rounded-2xl border border-base-300/60 bg-base-100 p-6 shadow-md">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <label className="form-control w-full md:max-w-xs">
          <div className="label">
            <span className="label-text text-sm font-semibold text-base-content/70">
              Group filter
            </span>
          </div>
          <select
            className="select select-bordered"
            value={selectedGroup}
            aria-label="Filter by periodic table group"
            onChange={(event) =>
              onGroupChange(event.target.value as GroupFilter)
            }
          >
            {groupOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <div className="flex flex-col gap-3 md:w-64">
          <label className="flex items-center justify-between rounded-2xl border border-base-300/70 px-4 py-3 text-sm font-medium">
            <span>Shuffle cards</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={shuffleEnabled}
              onChange={onShuffleToggle}
              aria-label="Toggle shuffle order"
            />
          </label>
          <label className="flex items-center justify-between rounded-2xl border border-base-300/70 px-4 py-3 text-sm font-medium">
            <span>Show names first</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={reverseMode}
              onChange={onReverseToggle}
              aria-label="Show element names before symbols"
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <span className="badge badge-lg badge-outline px-4 py-3 text-base font-semibold">
          {progressLabel}
        </span>
        <button
          type="button"
          className="btn btn-outline md:w-auto"
          onClick={onReset}
          disabled={disableNavigation}
        >
          Start Over
        </button>
      </div>
    </section>
  );
}
