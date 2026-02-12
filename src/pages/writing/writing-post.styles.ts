import { cva } from "class-variance-authority";

export const writingPostDate = "text-text-muted text-sm mt-0 mb-4";

export const writingPostContent =
  "text-text leading-body [&_a]:underline [&_pre]:overflow-x-auto [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5";

export const writingPostBackWrapper = "mt-6 mb-0";

export const writingPostBackLink = cva(
  "no-underline hover:underline text-text",
  {
    variants: {
      emphasis: {
        default: "text-inherit",
        muted: "text-text-muted",
      },
    },
    defaultVariants: {
      emphasis: "default",
    },
  },
);
