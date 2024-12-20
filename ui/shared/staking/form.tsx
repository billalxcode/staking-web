'use client';
import useStaking from '@/states/features/staking/hooks';
import useToken from '@/states/features/token/hooks';
import Button from '@/ui/components/button/button';
import { formatUnits } from 'viem';

export default function StakingForm() {
    const { balance, symbol, decimals } = useToken();
    const { amount, updateAmount } = useStaking();

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between'>
                <label htmlFor='amount' className='font-bold'>
                    Enter amount you want stake
                </label>
                <p className='font-semibold'>
                    Balance:{' '}
                    {formatUnits(BigInt(balance), decimals ?? 18) ?? '-'}{' '}
                    {symbol ?? ''}
                </p>
            </div>
            <div className='flex justify-between border w-full p-2'>
                <input
                    type='text'
                    name='amount'
                    id='amount'
                    value={amount}
                    onChange={(e) => updateAmount(e.target.value)}
                    className='w-full focus:outline-none px-3'
                    placeholder='Enter amount'
                />
                <Button onClick={() => updateAmount(formatUnits(BigInt(balance), decimals ?? 18))}>Max</Button>
            </div>
        </div>
    );
}
