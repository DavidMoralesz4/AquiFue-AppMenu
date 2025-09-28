import React from 'react';
import { Label } from '../atoms/Label';
import { Input } from '../atoms/Inputs';
import { cn } from '@/lib/utils';

interface InputFieldProps {
  label?: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = 'text',
  placeholder,
  required = false,
  error = false,
  errorMessage,
  className,
  inputProps = {},
}) => {
  return (
    <div className={cn('space-y-1', className)}>
      <Label htmlFor={id} required={required} error={error}>
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        error={error}
        {...inputProps}
      />
      {error && errorMessage && (
        <p className="text-xs text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
