/**
 * File to combine tailwind classnames
 */

// clsx: utility for conditionally joining class names
import { clsx } from "clsx";
// resolves conflicting tailwind classes
import { twMerge } from "tailwind-merge";

// function to conditionally apply class names and resolve tailwind conflicts
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
