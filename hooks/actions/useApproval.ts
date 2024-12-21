import useAlert from '@/states/features/alert/hooks';
import useStaking from '@/states/features/staking/hooks';
import useToken from '@/states/features/token/hooks';
import { convert_wei } from '@/utils/token';
import { useCallback } from 'react';
import {
    Abi,
    ContractFunctionExecutionError,
    ContractFunctionRevertedError,
    maxInt256,
} from 'viem';
import { usePublicClient, useWriteContract } from 'wagmi';
import useContractByName from '../useContractByName';
import useStakingContract from '../useStakingContract';

export default function useApproval() {
    const { amount } = useStaking();
    const { decimals } = useToken();
    const { setAlertMessage } = useAlert();
    const { contract: TokenContract } = useContractByName('token');
    const { staking_contract } = useStakingContract();
    const { writeContractAsync } = useWriteContract();
    const publicClient = usePublicClient();

    const handleApprove = useCallback(async () => {
        let amountToSpent = amount;

        if (amount === '0' || amount.trim() === '') {
            amountToSpent = maxInt256.toString();
        } else {
            amountToSpent = convert_wei(amount, decimals).toString();
        }

        try {
            setAlertMessage(
                {
                    message: 'Please confirm your wallet for approval',
                    variant: 'loading',
                },
                false,
            );
            const tx = await writeContractAsync({
                address: TokenContract?.address as `0x${string}`,
                abi: TokenContract?.abi as Abi,
                functionName: 'approve',
                args: [staking_contract?.address, amountToSpent],
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
        } catch (e) {
            if (e instanceof ContractFunctionExecutionError) {
                setAlertMessage(
                    {
                        message: e.shortMessage,
                        variant: 'danger',
                        duration: 3000,
                    },
                    true,
                );
            } else if (e instanceof ContractFunctionRevertedError) {
                setAlertMessage(
                    {
                        message: e.shortMessage,
                        variant: 'danger',
                        duration: 3000,
                    },
                    true,
                );
            }
        }
    }, [
        amount,
        writeContractAsync,
        TokenContract?.abi,
        TokenContract?.address,
        staking_contract?.address,
        decimals,
        setAlertMessage,
        publicClient,
    ]);

    return {
        handleApprove,
    };
}
