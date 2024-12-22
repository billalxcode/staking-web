import { AnimatePresence, motion } from 'motion/react';
import { ReactNode, useEffect, useRef } from 'react';
import { HiXMark } from 'react-icons/hi2';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg';
}

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    size = 'md',
}: ModalProps) {
    const sizeClass = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
    }[size];
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key == 'Escape') onClose();
        };

        const handleMouse = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            )
                onClose();
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleMouse);
            document.addEventListener('keydown', handleKeydown);
        }

        return () => {
            document.removeEventListener('mousedown', handleMouse);
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [onClose, isOpen]);

    return (
        <AnimatePresence>
            {isOpen ? (
                <div
                    tabIndex={-1}
                    aria-hidden
                    className='fixed inset-0  z-50 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm'
                >
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`w-full ${sizeClass} shadow-lg mx-4 relative rounded-lg bg-white p-6 dark:bg-dark-background`}
                    >
                        {title && (
                            <div className='mb-4 flex items-center justify-between'>
                                <h2 className='text-xl font-semibold'>
                                    {title}
                                </h2>

                                <button
                                    onClick={() => onClose()}
                                    aria-label='Close'
                                    className='rounded-full p-2 text-gray-500 transition duration-300 hover:bg-gray-200 hover:text-gray-700'
                                >
                                    <HiXMark />
                                </button>
                            </div>
                        )}
                        {children}
                    </motion.div>
                </div>
            ) : null}
        </AnimatePresence>
    );
}
