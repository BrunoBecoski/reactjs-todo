import { createElement, type ComponentProps, type JSX } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const containerVariants = cva("mx-auto", {
  variants: {
    size: {
      md: "max-w-126 px-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface ContainerProps
  extends ComponentProps<"div">, VariantProps<typeof containerVariants> {
  as?: keyof JSX.IntrinsicElements;
}

export default function Container({
  size,
  className,
  children,
  as = "div",
  ...props
}: ContainerProps) {
  return createElement(
    as,
    {
      className: containerVariants({ size, className }),
      ...props,
    },
    children,
  );
}
