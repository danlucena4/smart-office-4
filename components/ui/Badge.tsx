import * as React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "secondary" };
export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const base = "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium";
  const styles = variant === "secondary"
    ? "bg-neutral-100 text-neutral-700 border border-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700"
    : "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900";
  return <span className={`${base} ${styles} ${className}`} {...props} />;
}
