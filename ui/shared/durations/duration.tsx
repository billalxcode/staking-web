import { getContractByName, SupportedContracts } from '@/config/constants';
import useStaking from '@/states/features/staking/hooks';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import DurationButton from './button';

const durations = [
    {
        name: '30 Days',
        value: 'd30',
    },
    {
        name: '60 Days',
        value: 'd60',
    },
    {
        name: '90 Days',
        value: 'd90',
    },
];

export default function DurationSelector() {
    const { chainId } = useAccount();
    const { value, updateValue, updateContract } = useStaking();

    useEffect(() => {
        const staking_contract = getContractByName((chainId ?? 23452) as 23452 | 31337 | 1337, value as keyof SupportedContracts);        updateContract(staking_contract.address);
    }, [chainId, value, updateContract]);

    return (
        <div className='bg-slate-200 w-full p-1 flex rounded-md gap-3 justify-center dark:bg-dark-duration-background'>
            {durations.map((v) => {
                return (
                    <DurationButton
                        isActive={v.value == value}
                        onClick={() => updateValue(v.value)}
                        text={v.name}
                        key={v.name}
                    />
                );
            })}
        </div>
    );
}
