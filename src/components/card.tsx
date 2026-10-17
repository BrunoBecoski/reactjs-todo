import { createElement, type ComponentProps, type JSX } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-lg border-solid border-gray-200 bg-white shadow-sm",
  {
    variants: {
      size: {
        none: "",
        md: "p-5",
      },
    },
    defaultVariants: {
      size: "none",
    },
  },
);

interface CardProps
  extends ComponentProps<"div">, VariantProps<typeof cardVariants> {
  as?: keyof JSX.IntrinsicElements;
}

export default function Card({
  size,
  className,
  children,
  as = "div",
  ...props
}: CardProps) {
  return createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props,
    },
    children,
  );
}
