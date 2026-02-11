import { cva } from "class-variance-authority";

export const workExperienceEntry = cva("text-text leading-body", {
  variants: {
    isLast: { true: "mb-0", false: "mb-6" },
  },
  defaultVariants: { isLast: false },
});

export const workExperienceEntryHeader =
  "flex justify-between items-baseline gap-4 flex-wrap";
export const workExperienceEntryTitle = "font-semibold text-title";
export const workExperienceEntryTagline = "text-sm text-text-muted mt-0 mb-1";
export const workExperienceEntryList = "leading-list mt-2 mb-0 list-disc pl-5";
