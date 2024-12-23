import useAlert from '@/states/features/alert/hooks';
import { useCallback, useEffect, useState } from 'react';
import { Abi } from 'viem';
import { usePublicClient, useWriteContract } from 'wagmi';
import useStakingContract from '../useStakingContract';
import useStakingInfo from '../useStakingInfo';

export default function useClaimReward() {
    const { staking_contract } = useStakingContract();
    const { setAlertMessage } = useAlert();
    const { writeContractAsync } = useWriteContract();
    const { pendingReward } = useStakingInfo();
    const [canClaimReward, setCanClaimReward] = useState<boolean>(false);
    const publicClient = usePublicClient();

    const handleClaimReward = useCallback(async () => {
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
            functionName: 'deposit',
            args: ['0'],
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
        setCanClaimReward(false);
    }, [
        setAlertMessage,
        setCanClaimReward,
        writeContractAsync,
        staking_contract?.abi,
        staking_contract?.address,
        publicClient,
    ]);

    useEffect(() => {
        if (pendingReward > 0) {
            setCanClaimReward(true);
        }
    }, [pendingReward]);
    return {
        handleClaimReward,
        canClaimReward,
    };
}
