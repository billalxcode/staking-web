'use client';
import { useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import { useAccount, useSwitchChain } from 'wagmi';

export default function NetworkSwitch() {
    const { chain, isConnected } = useAccount();
    const { switchChain } = useSwitchChain();

    useEffect(() => {
        if (chain?.id !== 31337) {
            switchChain({
                chainId: 31337,
            });
        }
    }, [chain?.id, switchChain]);

    return isConnected ? (
        <div className='flex gap-3 items-center border p-2 rounded-full px-4 transition duration-300 cursor-pointer'>
            {chain?.name}

            <HiChevronDown />
        </div>
    ) : null;
}
