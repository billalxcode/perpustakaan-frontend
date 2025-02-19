"use client"
import * as React from "react"

import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

    const onReveralToggle = React.useCallback(() => {
      setIsPasswordVisible((prev) => !prev)
    }, [])

    if (type === "password") {
      return (
        <div
          className={cn(
            "flex w-full rounded-md border border-input font-semibold bg-transparent px-3 py-4 outline-none text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus:border-input-focus",
            className
            )}
            ref={ref}
            {...props}>
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="w-full bg-transparent outline-none font-semibold text-foreground"
            {...props}
          />
          <button type="button" onClick={onReveralToggle} className="flex items-center justify-center">
            {
              isPasswordVisible ? (
                <EyeOff size={16} />
              ) : (
                <Eye size={16} />
              )
            }
          </button>
        </div>
      )
    } else {
      return (
        <input
          type={type}
          className={cn(
            "flex w-full rounded-md border border-input font-semibold bg-transparent px-3 py-4 outline-none text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus:border-input-focus",
            className
          )}
          ref={ref}
          {...props}
        />
      )
    }
  }
)
Input.displayName = "Input"

export { Input }
