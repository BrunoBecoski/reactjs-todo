import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import Icon from "./icon";
import Text from "./text";

export const buttonVariants = cva(
  "flex items-center justify-center cursor-pointer transition rounded-lg group gap-2",
  {
    variants: {
      variant: {
        primary: "bg-gray-200 hover:bg-pink-light",
      },
      size: {
        md: "h-14 py-4 px-5",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: true,
    },
  },
);

export const buttonIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-pink-base",
    },
    size: {
      md: "size-5",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-400",
    },
    size: {
      md: "text-base",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps
  extends
    Omit<ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: ComponentProps<typeof Icon>["svg"];
}

export default function Button({
  variant,
  size,
  className,
  disabled = false,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, disabled, className })}
      {...props}
    >
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text
        variant="body-md-bold"
        className={buttonTextVariants({ variant, size })}
      >
        {children}
      </Text>
    </button>
  );
}
