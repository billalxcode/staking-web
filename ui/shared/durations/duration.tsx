import DurationButton from './button';

const durations = [
    {
        name: '30 Days',
        isActive: true,
    },
    {
        name: '60 Days',
        isActive: false,
    },
    {
        name: '90 Days',
        isActive: false,
    },
];

export default function DurationSelector() {
    return (
        <div className='bg-slate-200 w-full p-1 flex rounded-md gap-3 justify-center'>
            {durations.map((v) => {
                return (
                    <DurationButton
                        isActive={v.isActive}
                        text={v.name}
                        key={v.name}
                    />
                );
            })}
        </div>
    );
}
