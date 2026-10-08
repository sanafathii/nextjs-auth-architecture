import { tv, VariantProps } from "tailwind-variants";
import React from "react";
import { Color, ComponentBase, RefinedMerge, Size } from "../_types/component-base.type";


type LoadingVariants = VariantProps<typeof styles>;
type LoadingProps = RefinedMerge<LoadingVariants, ComponentBase> & {
    text?: string;
};


export const styles = tv({
  slots: {
    base: "loading  inline-block ",
    textStyle: 'text-[9px] xl:text-base uppercase'
  },
  variants: {
    color: {
        default: 'text-white',
        primary: 'text-primary',
        secondary: 'text-secondary-700',
        error: 'text-error'
    } as Record<Color, string>,
    size: {
      xs: 'w-3.5 h-3.5 xl:w-5 xl:h-5',
      sm: 'w-5 h-5 xl:w-7 xl:h-7',
      md: 'w-6'
    }  as Record<Size, string>,

  },
  compoundVariants: [
    // {
    //   variant: 'filled',
    //   color: 'info',
    //   className: 'bg-info text-white'
    // },
  ],
  defaultVariants: {
    color: 'default',
    size: 'sm'
  }
});


export const Loading: React.FC<LoadingProps> = ({
  color,
  size,
  className,
  text= 'در حال دریافت اطلاعات ...',
  ...rest
}) => {
  const { base, textStyle } = styles({color, size});

  return (
    <div className="flex flex-col items-center text-white gap-2 !h-auto">
    <span
      className={base({className})}
      {...rest}
    >
    </span>
   {text && <span className={textStyle()}>{text}</span>} 
    </div>
  )
};
