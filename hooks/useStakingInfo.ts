import { useCallback, useEffect, useState } from 'react';
import { Abi, Client } from 'viem';
import { multicall } from 'viem/actions';
import { usePublicClient } from 'wagmi';
import useStakingContract from './useStakingContract';
import { calculateAPY } from '@/utils/apy';

export default function useStakingInfo() {
    const [apy, setApy] = useState<string>('');
    const { staking_contract: StakingContract } = useStakingContract()
    const publicClient = usePublicClient()
    
    const fetchStakingInfo = useCallback(async () => {
        if (StakingContract?.address) {
            const staking_contract = {
                address: StakingContract?.address as `0x${string}`,
                abi: StakingContract?.abi as Abi
            }
            const results = await multicall(publicClient as Client, {
                contracts: [
                    {
                        ...staking_contract,
                        functionName: "rewardPerSecond"
                    },
                    {
                        ...staking_contract,
                        functionName: 'totalStakingTokens'
                    },
                    {
                        ...staking_contract,
                        functionName: 'lockDuration'
                    }
                ]
            })
            const [rewardPerSecond, totalStakingTokens, lockDuration] = results
            const calculatedApy = calculateAPY(
                parseInt((rewardPerSecond.result as bigint ?? BigInt(0)).toString()), parseInt((totalStakingTokens.result as bigint ?? BigInt(0)).toString()),
            )
            console.log(calculatedApy)
        }
    }, [
        StakingContract?.abi, StakingContract?.address, publicClient
    ])

    useEffect(() => {
        fetchStakingInfo()
    }, [fetchStakingInfo, StakingContract?.address])

    return {
        apy
    }
}
