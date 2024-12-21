'use client';
import { useDisclosure } from '@/hooks/useDisclosure';
import { HiChevronDown } from 'react-icons/hi2';
import { useAccount } from 'wagmi';
import NetworkSwitchModal from './switch';

export default function NetworkSwitch() {
    const { chain, isConnected } = useAccount();
    const { isOpen, onClose, onOpen } = useDisclosure();

    return isConnected ? (
        <>
            <div
                onClick={onOpen}
                className='flex gap-3 items-center border p-2 rounded-full px-4 transition duration-300 cursor-pointer'
            >
                {chain?.name}
                <HiChevronDown />
            </div>
            <NetworkSwitchModal isOpen={isOpen} onClose={() => onClose()} />
        </>
    ) : null;
}
