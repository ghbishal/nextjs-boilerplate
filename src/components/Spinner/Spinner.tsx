import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const spinnerStyles = cva('animate-spin', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-8',
      lg: 'size-16',
      xl: 'size-24',
    },
    emphasis: {
      light: 'text-white',
      primary: 'text-blue-600',
    },
  },
  defaultVariants: {
    emphasis: 'primary',
    size: 'md',
  },
});

export type SpinnerProps = VariantProps<typeof spinnerStyles> & {
  className?: string;
};

export const Spinner = ({ size, emphasis, className }: SpinnerProps) => {
  return (
    <>
      <svg
        className={cn(spinnerStyles({ size, emphasis, className }))}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        data-testid="loading"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        >
        </circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        >
        </path>
      </svg>
      <span className="sr-only">Loading</span>
    </>
  );
};
