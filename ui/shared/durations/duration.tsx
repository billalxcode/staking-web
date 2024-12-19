import useStaking from '@/states/features/staking/hooks';
import DurationButton from './button';
import { useEffect } from 'react';
import { getContractByName } from '@/config/constants';
import { useAccount } from 'wagmi';

const durations = [
    {
        name: '30 Days',
        value: "d30",
    },
    {
        name: '60 Days',
        value: "d60",
    },
    {
        name: '90 Days',
        value: "d90",
    },
];

export default function DurationSelector() {
    const { chainId } = useAccount()
    const { value, updateValue, updateContract } = useStaking()
    
    useEffect(() => {
        const staking_contract = getContractByName(chainId ?? 23452, value)
        updateContract(staking_contract.address)
    }, [
        chainId,
        value,
        updateContract
    ])
    
    return (
        <div className='bg-slate-200 w-full p-1 flex rounded-md gap-3 justify-center'>
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
