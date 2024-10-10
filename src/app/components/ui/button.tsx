import { cn } from "@/app/utils/utils";
import { cva, type VariantProps } from "class-variance-authority";

import { forwardRef } from "react";

const buttonVariants = cva(
  "transition-all ease-in-out duration-300 border-2 flex items-center justify-center font-bold font-open-sans disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white border-dark-blue hover:bg-dark-blue hover:text-white text-black",
        secondary: "bg-brand-green border-brand-green text-dark-blue",
      },
      size: {
        sm: "text-base px-10 py-2 rounded-3xl",
        lg: "~text-lg/xl px-14 ~py-2/4 rounded-[56px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

export { Button, buttonVariants };
