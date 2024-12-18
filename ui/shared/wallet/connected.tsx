import { useDisclosure } from '@/hooks/useDisclosure';
import Modal from '@/ui/components/modals/modals';
import { useAccountModal } from '@rainbow-me/rainbowkit';
import { useCallback } from 'react';
import { HiUser } from 'react-icons/hi2';
import { useAccount } from 'wagmi';

export default function WalletConnected() {
    const { address } = useAccount();
    const { openAccountModal } = useAccountModal();
    const { isOpen, onClose } = useDisclosure();

    const wrapName = useCallback(() => {
        return (
            address?.substring(0, 6) +
            '...' +
            address?.substring(address.length - 6, address.length)
        );
    }, [address]);

    return (
        <>
            <div
                onClick={openAccountModal}
                className='flex cursor-pointer items-center gap-2 rounded-full border p-2 transition duration-500 hover:border-slate-300 active:scale-95'
            >
                <div className='rounded-full bg-primary p-3 text-white'>
                    <HiUser />
                </div>
                <span className='font-semibold'>{wrapName()}</span>
            </div>

            <Modal title='Your Wallet' isOpen={isOpen} onClose={onClose}>
                <div className='flex flex-col'></div>
            </Modal>
        </>
    );
}
