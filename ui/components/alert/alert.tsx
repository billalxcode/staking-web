import useAlert from '@/states/features/alert/hooks';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import AlertAnimate from './animate';

export default function Alert() {
    const { message, variant, isHidden } = useAlert();
    const [className, setClassName] = useState<string>('');

    useEffect(() => {
        if (variant === 'success') {
            setClassName('text-green-600');
        } else if (variant == 'danger') {
            setClassName('text-red-600');
        } else if (variant == 'info') {
            setClassName('text-primary');
        } else if (variant == 'warning') {
            setClassName('text-yellow-600');
        } else if (variant == 'normal' || variant == 'loading') {
            setClassName('text-[#000000cc]');
        }
    }, [variant, setClassName]);

    return (
        <AnimatePresence>
            {!isHidden ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='search-bar'
                    tabIndex={-1}
                    className='w-full'
                >
                    <div
                        className={`rounded-xl bg-white p-4 font-font-semibold shadow-sm flex flex-row  items-center gap-4 w-full ${className}`}
                    >
                        <AlertAnimate /> {message}
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}
