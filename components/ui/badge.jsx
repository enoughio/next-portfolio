import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/utils/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md   px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary border text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary border text-secondary-foreground hover:bg-secondary/80",
        secondary:
          "border-transparent bg-secondary border text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive border text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        custom: "py-2 px-3 text-sm font-xl bg-card ", // Add the new variant 
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Badge, badgeVariants }
