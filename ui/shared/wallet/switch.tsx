import { networks } from '@/config/constants';
import useAlert from '@/states/features/alert/hooks';
import Modal from '@/ui/components/modals/modals';
import { useCallback, useEffect } from 'react';
import { UserRejectedRequestError } from 'viem';
import { useAccount, useSwitchChain } from 'wagmi';

export default function NetworkSwitchModal(props: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const { setAlertMessage } = useAlert();
    const { switchChainAsync } = useSwitchChain();
    const { chain } = useAccount();

    const handleSwitchChain = useCallback(
        async (name: string, chainId: number) => {
            try {
                await switchChainAsync({ chainId });
                setAlertMessage(
                    {
                        message: `Switched to ${name}`,
                        variant: 'success',
                        duration: 3000,
                    },
                    true,
                );
                props.onClose();
            } catch (e) {
                if (e instanceof UserRejectedRequestError) {
                    setAlertMessage(
                        {
                            message: "User rejected the request",
                            variant: 'danger',
                            duration: 3000,
                        },
                        true,
                    );
                }
            }
        },
        [setAlertMessage, switchChainAsync, props],
    );

    useEffect(() => {
        if (typeof chain == 'undefined') {
            handleSwitchChain(networks[0].name, networks[0].id);
        }
    }, [chain, handleSwitchChain]);

    return (
        <Modal
            title='Switch Chain'
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <div className='flex flex-col'>
                {networks.map((network) => {
                    return (
                        <div
                            onClick={() =>
                                handleSwitchChain(network.name, network.id)
                            }
                            key={network.id}
                            className='cursor-pointer rounded transition duration-300 hover:bg-primary group'
                        >
                            <p className='p-4 font-semibold text-black dark:text-white group-hover:text-white'>
                                {network.name}
                            </p>
                        </div>
                    );
                })}
            </div>
        </Modal>
    );
}
