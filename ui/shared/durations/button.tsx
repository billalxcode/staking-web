import { HiLockClosed } from 'react-icons/hi2';

export default function DurationButton(props: {
    isActive: boolean;
    text: string;
    onClick: () => void;
}) {
    return (
        <button
            onClick={props.onClick}
            className={`flex gap-2 p-2 px-5 justify-center w-full rounded-md font-semibold items-center ${props.isActive ? 'bg-primary text-white dark:text-dark-text' : 'bg-dark-duration-background dark:text-background'}`}
        >
            <HiLockClosed className='hidden lg:block md:block' />
            {props.text}
        </button>
    );
}
