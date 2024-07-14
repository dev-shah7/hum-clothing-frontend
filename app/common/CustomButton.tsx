import { Button } from '@nextui-org/react';
import React from 'react';

interface CustomButtonProps {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?:
    | 'solid'
    | 'faded'
    | 'bordered'
    | 'light'
    | 'flat'
    | 'ghost'
    | 'shadow';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  size,
  variant,
}) => {
  return (
    <Button size={size} variant={variant}>
      {label}
    </Button>
  );
};

export default CustomButton;
