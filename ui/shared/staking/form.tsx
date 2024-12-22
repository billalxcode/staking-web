'use client';
import useStaking from '@/states/features/staking/hooks';
import useToken from '@/states/features/token/hooks';
import Button from '@/ui/components/button/button';
import { useCallback } from 'react';
import { formatUnits } from 'viem';

export default function StakingForm() {
    const { balance, symbol, decimals } = useToken();
    const { amount, updateAmount } = useStaking();

    const handleFocus = useCallback(() => {
        if (amount === '0') {
            updateAmount('');
        }
    }, [amount, updateAmount]);

    const handleBlur = useCallback(() => {
        if (amount.trim() === '') {
            updateAmount('0');
        }
    }, [amount, updateAmount]);

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
            <div className='flex justify-between border w-full p-2 dark:border-dark-border'>
                <input
                    type='text'
                    name='amount'
                    id='amount'
                    value={amount}
                    onChange={(e) => updateAmount(e.target.value)}
                    onFocus={() => handleFocus()}
                    onBlur={() => handleBlur()}
                    className='w-full focus:outline-none px-3 dark:bg-dark-card60'
                    placeholder='Enter amount'
                />
                <Button
                    onClick={() =>
                        updateAmount(
                            formatUnits(BigInt(balance), decimals ?? 18),
                        )
                    }
                >
                    Max
                </Button>
            </div>
        </div>
    );
}
