import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "tw-border-input file:tw-text-foreground placeholder:tw-text-muted-foreground selection:tw-bg-primary selection:tw-text-primary-foreground tw-flex tw-h-9 tw-w-full tw-min-w-0 tw-rounded-md tw-border tw-bg-transparent tw-px-3 tw-py-1 tw-text-base tw-shadow-xs tw-transition-[color,box-shadow] tw-outline-none file:tw-inline-flex file:tw-h-7 file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium disabled:tw-pointer-events-none disabled:tw-cursor-not-allowed disabled:tw-opacity-50 md:tw-text-sm",
        "focus-visible:tw-border-ring focus-visible:tw-ring-ring/50 focus-visible:tw-ring-[3px]",
        "aria-invalid:tw-ring-destructive/20 dark:aria-invalid:tw-ring-destructive/40 aria-invalid:tw-border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
