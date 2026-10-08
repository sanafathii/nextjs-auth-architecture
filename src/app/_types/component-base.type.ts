export type Color = "default" | "primary" | 'warning' | 'success' | 'secondary' | 'info' | 'error';
export type Size = "xs" | "sm" | "md" | 'lg' | 'xl' | '2xl' | '3xl';


export type ComponentBase = {
    color?: Color;
    size?: Size;
    className?: string;
};


export type RefinedMerge<T,U> = Omit<T, keyof U> & U;
