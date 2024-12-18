import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger'; // Tambahan prop untuk variasi tombol
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', className, children, ...props }, ref) => {
        // Kelas untuk setiap varian tombol
        const variantClasses = {
            primary:
                'bg-primary-900 text-white hover:bg-primary disabled:bg-primary-600',
            secondary:
                'bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-600',
            danger: 'bg-red-500 text-white hover:bg-red-600 disabled:bg-red-600',
        };

        return (
            <button
                ref={ref}
                {...props}
                className={`rounded-xl px-3 py-3 font-semibold transition duration-300 focus:outline-none active:scale-95 disabled:scale-100 ${
                    variantClasses[variant]
                } ${className}`}
            >
                {children}
            </button>
        );
    },
);

Button.displayName = 'Button';

export default Button;
