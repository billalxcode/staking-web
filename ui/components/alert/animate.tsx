import useAlert from '@/states/features/alert/hooks';
import { motion, useTime, useTransform } from 'motion/react';

export default function AlertAnimate() {
    const { variant } = useAlert();

    const time = useTime();
    const rotate = useTransform(time, [0, 1000], [0, 360], {
        clamp: false,
    });
    if (variant !== 'loading') return null;

    return (
        <motion.span
            style={{ rotate }}
            transition={{
                ease: 'linear',
                duration: 0.05,
                repeat: Infinity,
            }}
            className='w-4 h-4 border-2 border-t-[#000000cc] border-b-[#000000cc] border-l-transparent border-r-transparent rounded-full'
        ></motion.span>
    );
}
