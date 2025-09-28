import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  error = false,
  className,
  ...props
}) => {
  return (
    <input
      className={cn(
        'w-full border rounded-md px-3 py-2 text-sm',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        error && 'border-red-500 focus:ring-red-500',
        className
      )}
      {...props}
    />
  );
};
