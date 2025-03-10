import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled,
  ...props
}) => {
  const baseStyles = `
    py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2
    transition-colors duration-200
  `;

  const variantStyles = {
    primary: `
      bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800
      focus:ring-blue-500 dark:focus:ring-blue-600
    `,
    secondary: `
      bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600
      focus:ring-gray-500 dark:focus:ring-gray-600
    `,
  };

  const disabledStyles = `
    opacity-50 cursor-not-allowed pointer-events-none
  `;

  const buttonClasses = `${baseStyles} ${disabled ? disabledStyles : variantStyles[variant]
    }`;

  return (
    <button {...props} className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

/*
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
};
 */