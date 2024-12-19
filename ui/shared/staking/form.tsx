'use client';
import useToken from '@/states/features/token/hooks';
import Button from '@/ui/components/button/button';
import { formatUnits } from 'viem';

export default function StakingForm() {
    const { balance, symbol, decimals } = useToken();

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between'>
                <label htmlFor='amount' className='font-bold'>
                    Enter amount you want stake
                </label>
                <p className='font-semibold'>
                    Balance: {formatUnits(BigInt(balance), decimals ?? 18) ?? '-'}{' '}
                    {symbol ?? ''}
                </p>
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
