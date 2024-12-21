import { forwardRef, ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                className={`rounded-xl bg-white dark:bg-dark-card60 dark:text-dark-text p-5 shadow-sm ${className}`}
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
