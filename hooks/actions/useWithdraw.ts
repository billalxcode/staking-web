import useAlert from '@/states/features/alert/hooks';
import { useCallback } from 'react';
import { Abi } from 'viem';
import { usePublicClient, useWriteContract } from 'wagmi';
import useStakingContract from '../useStakingContract';

export default function useWithdraw() {
    const { staking_contract } = useStakingContract();
    const { setAlertMessage } = useAlert();
    const { writeContractAsync } = useWriteContract();
    const publicClient = usePublicClient();

    const handleWithdraw = useCallback(
        async (method: string) => {
            setAlertMessage(
                {
                    message: 'Please confirm your wallet',
                    variant: 'loading',
                },
                false,
            );
            const tx = await writeContractAsync({
                address: staking_contract?.address as `0x${string}`,
                abi: staking_contract?.abi as Abi,
                functionName: method,
            });
            setAlertMessage(
                {
                    message: 'Wait until the transaction is confirmed',
                    variant: 'loading',
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
        },
        [
            setAlertMessage,
            writeContractAsync,
            staking_contract?.abi,
            staking_contract?.address,
            publicClient,
        ],
    );

    const handleNormalWithdraw = useCallback(async () => {
        await handleWithdraw('withdraw');
    }, [handleWithdraw]);

    const handleEmergencyWithdraw = useCallback(async () => {
        await handleWithdraw('emergencyWithdraw');
    }, [handleWithdraw]);

    return {
        handleNormalWithdraw,
        handleEmergencyWithdraw,
    };
}
