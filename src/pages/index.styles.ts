import { cva } from "class-variance-authority";

export const indexHeroLead = "text-text leading-body m-0";

export const indexActionGroup = "mt-content-gap flex gap-2.5";

export const indexButton = cva(
  "py-2.5 px-3.5 rounded-button no-underline font-medium",
  {
    variants: {
      tone: {
        primary: "text-white bg-primary border border-transparent",
        secondary: "text-inherit border border-border-strong bg-transparent",
      },
    },
    defaultVariants: {
      tone: "secondary",
    },
  },
);

export const indexSectionLink = "mt-section";
export const indexSectionLinkAnchor =
  "text-text leading-body no-underline text-inherit hover:underline";
