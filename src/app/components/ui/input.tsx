import { cn } from "@/app/utils/utils";
import { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full ~text-lg/xl ~leading-7/8 border-2 font-normal font-open-sans h-max border-white bg-white px-8 ~py-2/3 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black rounded-[240px] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
export { Input };
