import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("tw-bg-primary/10 tw-animate-pulse tw-rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
