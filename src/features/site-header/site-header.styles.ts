import { cva } from "class-variance-authority";

export const siteHeader = "border-b border-border";
export const siteHeaderInner =
  "max-w-content mx-auto py-4 px-5 flex justify-between items-center";
export const siteHeaderLogoLink = "no-underline text-inherit font-semibold";
export const siteHeaderNav = "flex gap-3.5 text-sm";
export const siteHeaderNavLink = cva("", {
  variants: {
    isCurrent: {
      true: "font-semibold",
      false: "hover:underline",
    },
  },
  defaultVariants: {
    isCurrent: false,
  },
});
