import { forwardRef, ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                className={`rounded-xl bg-white p-4 shadow-sm ${className}`}
                {...props}
                ref={ref}
            >
                {children}
            </div>
        );
    },
);

Card.displayName = 'Card';
export default Card;
