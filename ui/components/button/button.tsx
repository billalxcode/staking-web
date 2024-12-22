import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { variant = 'primary', size = 'md', className, children, ...props },
        ref,
    ) => {
        const variantClasses = {
            primary:
                'bg-primary-900 text-white hover:bg-primary disabled:bg-primary-600 dark:disabled:bg-primary-300',
            secondary:
                'bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-400 dark:disabled:bg-dark-duration-background',
            danger: 'bg-red-500 text-white hover:bg-red-600 disabled:bg-red-600',
        };

        const sizeClasses = {
            sm: 'px-3 py-1 text-sm',
            md: 'px-3 py-2 text-sm',
            lg: 'px-3 py-3 text-sm',
        };

        return (
            <button
                ref={ref}
                {...props}
                className={`rounded-xl font-semibold transition duration-300 focus:outline-none active:scale-95 disabled:scale-100 ${
                    variantClasses[variant]
                } ${sizeClasses[size]} ${className}`}
            >
                {children}
            </button>
        );
    },
);

Button.displayName = 'Button';

export default Button;
