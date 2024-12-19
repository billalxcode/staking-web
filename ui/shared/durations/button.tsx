import { HiLockClosed } from 'react-icons/hi2';

export default function DurationButton(props: {
    isActive: boolean;
    text: string;
}) {
    return (
        <button
            className={`flex gap-2 p-2 px-5 rounded-md font-semibold items-center ${props.isActive ? 'bg-primary text-white' : 'bg-slate-200'}`}
        >
            <HiLockClosed />
            {props.text}
        </button>
    );
}
