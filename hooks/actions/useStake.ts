import useAlert from '@/states/features/alert/hooks';
import useStaking from '@/states/features/staking/hooks';
import useToken from '@/states/features/token/hooks';
import { convert_wei } from '@/utils/token';
import { useCallback } from 'react';
import { Abi, UserRejectedRequestError } from 'viem';
import { usePublicClient, useWriteContract } from 'wagmi';
import useStakingContract from '../useStakingContract';

export default function useStake() {
    const { amount } = useStaking();
    const { setAlertMessage } = useAlert();
    const { decimals } = useToken();
    const { staking_contract } = useStakingContract();
    const { writeContractAsync } = useWriteContract();

    const publicClient = usePublicClient();

    const handleStake = useCallback(async () => {
        setAlertMessage(
            {
                message: 'Please confirm your wallet',
                variant: 'loading',
            },
            false,
        );

        try {
            const tx = await writeContractAsync({
                address: staking_contract?.address as `0x${string}`,
                abi: staking_contract?.abi as Abi,
                functionName: 'deposit',
                args: [convert_wei(amount, decimals)],
            });
            setAlertMessage(
                {
                    message: 'Wait until the transaction is confirmed',
                    variant: 'loading',
                    duration: 3000,
                },
                false,
            );
            await publicClient?.waitForTransactionReceipt({ hash: tx });
            setAlertMessage(
                {
                    message: 'Transaction has been confirmed',
                    variant: 'success',
                    duration: 3000,
                },
                true,
            );
        } catch (e) {
            if (e instanceof UserRejectedRequestError) {
                setAlertMessage(
                    {
                        message: 'Transaction rejected',
                        variant: 'danger',
                        duration: 3000,
                    },
                    true,
                );
            } else {
                setAlertMessage(
                        {
                            message: "Transaction failed",
                            variant: 'danger',
                            duration: 3000,
                        },
                        true,
                    );
                }
            }
        
    }, [
        staking_contract?.abi,
        staking_contract?.address,
        writeContractAsync,
        amount,
        decimals,
        setAlertMessage,
        publicClient,
    ]);

    return {
        handleStake,
    };
}
