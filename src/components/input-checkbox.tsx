import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import Icon from "./icon";

import CheckIcon from "../assets/icons/check.svg?react";

export const inputCheckboxWrapperVariants = cva(
  "inline-flex items-center cursor-pointer justify-center relative group",
);

export const inputCheckboxVariants = cva(
  "appearance-none peer flex items-center justify-center border-2 border-solid border-green-base cursor-pointer  overflow-hidden transition hover:border-green-dark hover:bg-green-dark/20 checked:border-green-base checked:bg-green-base group-hover:checked:border-green-dark group-hover:checked:bg-green-dark",
  {
    variants: {
      size: {
        md: "size-5 rounded-sm",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  },
);

export const inputCheckboxIconVariants = cva(
  "absolute top-1/2 left-1 -translate-y-1/2  hidden peer-checked:block fill-white",
  {
    variants: {
      size: {
        md: "size-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface InputCheckboxProps
  extends
    Omit<ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof inputCheckboxVariants> {}

export default function InputCheckbox({
  size,
  className,
  disabled = false,
  ...props
}: InputCheckboxProps) {
  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={inputCheckboxVariants({ size, disabled })}
        {...props}
      />
      <Icon svg={CheckIcon} className={inputCheckboxIconVariants({ size })} />
    </label>
  );
}
