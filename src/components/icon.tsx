import type { ComponentProps, FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const iconVariant = cva("", {
  variants: {
    animate: {
      true: "animate-spin",
      false: "",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

interface IconProps
  extends ComponentProps<"svg">, VariantProps<typeof iconVariant> {
  svg: FC<ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent className={iconVariant({ animate, className })} {...props} />
  );
}
