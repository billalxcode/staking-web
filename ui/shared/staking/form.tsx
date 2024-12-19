import Button from '@/ui/components/button/button';

export default function StakingForm() {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between'>
                <label htmlFor='amount' className='font-bold'>
                    Enter amount you want stake
                </label>
                <p className='font-semibold'>Balance: 0</p>
            </div>
            <div className='flex justify-between border w-full p-2'>
                <input
                    type='text'
                    name='amount'
                    id='amount'
                    className='w-full focus:outline-none px-3'
                    placeholder='Enter amount'
                />
                <Button>Max</Button>
            </div>
        </div>
    );
}
