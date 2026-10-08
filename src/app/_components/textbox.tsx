'use client';
import { tv, VariantProps } from 'tailwind-variants';
import { InputHTMLAttributes, ReactNode } from 'react';
import { DeepMap, FieldError, FieldValues, get, Path, UseFormRegister } from 'react-hook-form';
import React from 'react';
import { ComponentBase, RefinedMerge } from '../_types/component-base.type';

export type TextboxType = 'text' | 'number' | 'email' | 'password';
type TextboxVariants = VariantProps<typeof styles>;
type TextboxProps<TFormValues extends FieldValues> = InputHTMLAttributes<HTMLInputElement> & RefinedMerge<TextboxVariants, ComponentBase> & {
  type?: TextboxType;
  label?: string;
  icon?: ReactNode;
  extraNode?: ReactNode,
  description?: string;
  name: Path<TFormValues>;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
  onDarkBg?: boolean;
  multiline?: boolean;

};

export const styles = tv({
  slots: {
    base: "px-3 h-12 xl:h-14 rounded-lg flex items-center justify-between gap-2  focus-within:outline focus-within:outline-2 focus-within:outline-offset-2",
    input: 'flex-1 text-sm xl:text-base outline-none leading-[0px] h-full',
    descriptionStyle: 'text-sm',
    wrapper: 'flex flex-col gap-2',
    labelStyle: 'text-white text-sm xl:text-base'
  },
  variants: {
    color: {
      primary: {
        base: 'bg-secondary-850 text-secondary-300 focus-within:border-primary outline-primary',
        input: 'placeholder:text-secondary-300'

      },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
    variant: {
      filled: '',
      outlined: "border-1 bg-transparent",
    },
    hasError: {
      true: {
        base: 'outline-error bg-error/10',
        labelStyle: "text-error",
      },
    },
    disabled: {
      true: {
        base: 'bg-secondary-850 opacity-40',
        labelStyle: 'opacity-40',
        input: 'pointer-events-none tab'
      }
    },
    onDarkBg: {
      true: {
        base: 'bg-secondary-800'
      }
    }

  },
  compoundVariants: [
    {
      variant: 'outlined',
      color: 'primary',
      className: {
        base: '!bg-transparent border-secondary-700'
      }
    }
  ],
  defaultVariants: {
    color: 'primary',
    variant: 'filled'
  }

});


export const TextBox = <TFormValues extends FieldValues>({ extraNode, disabled, variant, icon, onDarkBg, description, className, type = 'text', color, name, register, errors, label, ...rest }: TextboxProps<TFormValues>) => {
  const error = get(errors, name);
  const hasError = !!error;
  const { base, input, wrapper, labelStyle, descriptionStyle } = styles({
    color,
    hasError,
    onDarkBg,
    disabled,
    variant,
  });
  return (
    <div className={wrapper({ className })}>
      {
        label && <label className={labelStyle()}>{hasError ? error.message : label}</label>
      }
      <div className={base()}>
        {icon && React.cloneElement(icon as React.ReactSVGElement, { width: '20', height: '20' })}
        {
          <input
            type={type}
            {...(register && register(name))}
            {...rest}
            className={input()}
          />
        }

        {
          extraNode && extraNode
        }
      </div>
      {
        description && <p className={descriptionStyle()}>{description}</p>
      }
    </div>
  );
}
