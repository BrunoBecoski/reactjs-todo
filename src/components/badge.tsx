import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import Text from "./text";

export const badgeVariant = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-green-light",
        secondary: "bg-pink-light",
      },
      size: {
        sm: "py-0.5 px-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);

export const badgeTextVariant = cva("", {
  variants: {
    variant: {
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface BadgeProps
  extends ComponentProps<"div">, VariantProps<typeof badgeVariant> {}

export default function Badge({
  variant,
  size,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={badgeVariant({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={badgeTextVariant({ variant })}>
        {children}
      </Text>
    </div>
  );
}
