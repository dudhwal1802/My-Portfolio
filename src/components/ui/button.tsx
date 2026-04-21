import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] overflow-hidden [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary/90 backdrop-blur-sm border border-primary/30 text-primary-foreground hover:bg-primary shadow-md hover:-translate-y-0.5 hover:shadow-elevated hover:border-primary/50",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg",
        outline: "border-2 border-primary/60 bg-white/50 backdrop-blur-md text-primary hover:bg-white/70 hover:-translate-y-0.5 hover:shadow-lifted hover:border-primary/80",
        secondary: "bg-white/40 backdrop-blur-md border border-primary/20 text-secondary-foreground hover:bg-white/60 shadow-sm hover:shadow-md hover:-translate-y-0.5",
        ghost: "hover:bg-primary/10 hover:text-primary text-foreground transition-colors",
        link: "text-primary underline-offset-4 hover:underline font-medium",
        hero: "bg-primary/95 backdrop-blur-sm border border-primary/40 text-primary-foreground shadow-lg hover:shadow-lifted hover:-translate-y-1 font-bold uppercase tracking-wide hover:bg-primary hover:border-primary/60 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]",
        social: "bg-white/60 backdrop-blur-md border border-primary/30 text-primary hover:bg-white/80 hover:border-primary/60 shadow-soft hover:-translate-y-0.5 hover:shadow-md transition-all",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg font-bold",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
