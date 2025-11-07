"use client"

import Link from "next/link"
import React from "react"
import { MdArrowForward } from "react-icons/md"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "default" | "outline"
  size?: "sm" | "md" | "lg"
  showArrow?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", showArrow = false, ...props }, ref) => {
    const sizeClasses = {
      sm: "px-3 py-1 text-xs",
      md: "px-4 py-1.5 text-sm sm:px-5 sm:py-2",
      lg: "px-5 py-2 text-base sm:px-6 sm:py-3",
    }

    const variantClasses = {
      default: "bg-secondary border border-gray-300 hover:bg-gray-100",
      outline: "bg-gray-50 border border-gray-300 hover:bg-secondary/50",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide shadow-sm transition-all duration-300 ease-in-out sm:gap-3",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
        {showArrow && (
          <MdArrowForward className="h-3 w-3 transform transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
        )}
      </button>
    )
  }
)

Button.displayName = "Button"

// Composant Link avec style de bouton
interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  variant?: "default" | "outline"
  size?: "sm" | "md" | "lg"
  showArrow?: boolean
}

export const ButtonLink = ({
  href,
  children,
  variant = "default",
  size = "md",
  showArrow = false,
  className,
  ...props
}: ButtonLinkProps) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-1.5 text-sm sm:px-5 sm:py-2",
    lg: "px-5 py-2 text-base sm:px-6 sm:py-3",
  }

  const variantClasses = {
    default: "bg-secondary border border-gray-300 hover:bg-gray-100",
    outline: "bg-transparent border border-gray-300 hover:bg-secondary/50",
  }

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide shadow-sm transition-all duration-300 ease-in-out sm:gap-3",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
      {showArrow && (
        <MdArrowForward className="h-3 w-3 transform transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
      )}
    </Link>
  )
}
