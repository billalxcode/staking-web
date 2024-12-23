import { useCallback, useEffect, useState } from 'react';
import { Abi, Client } from 'viem';
import { multicall } from 'viem/actions';
import { useAccount, usePublicClient } from 'wagmi';
import useStakingContract from './useStakingContract';

export default function useStakingInfo() {
    const [apy, setApy] = useState<string>('');
    const [myStaked, setMyStaked] = useState(BigInt(0));
    const [pendingReward, setPendingReward] = useState(BigInt(0));
    const [totalStakingTokens, setTotalStakingTokens] = useState<bigint>(
        BigInt(0),
    );
    const [rewardRemaining, setRewardRemaining] = useState<bigint>(BigInt(0));
    const [holderUnlocktime, setHolderUnlocktime] = useState<Date | null>(null);
    const { staking_contract: StakingContract } = useStakingContract();
    const { address } = useAccount();
    const publicClient = usePublicClient();

    const fetchStakingInfo = useCallback(async () => {
        const staking_contract = {
            address: StakingContract?.address as `0x${string}`,
            abi: StakingContract?.abi as Abi,
        };
        try {
            const results = await multicall(publicClient as Client, {
                contracts: [
                    {
                        ...staking_contract,
                        functionName: 'apy',
                    },
                    {
                        ...staking_contract,
                        functionName: 'totalStaked',
                    },
                    {
                        ...staking_contract,
                        functionName: 'userInfo',
                        args: [address],
                    },
                    {
                        ...staking_contract,
                        functionName: 'pendingReward',
                        args: [address],
                    },
                    {
                        ...staking_contract,
                        functionName: 'holderUnlockTime',
                        args: [address],
                    },
                    {
                        ...staking_contract,
                        functionName: 'rewardsRemaining',
                    },
                ],
            });
            const [
                stakingApy,
                stakingTotalStaked,
                userInfo,
                stakingPendingReward,
                stakingHolderUnlocktime,
                stakingRewardRemaining,
            ] = results;

            if (stakingApy.result !== undefined) {
                setApy((stakingApy.result as bigint).toString());
            } else {
                setApy('0');
            }

            if (stakingTotalStaked.result !== undefined) {
                setTotalStakingTokens(stakingTotalStaked.result as bigint);
            } else {
                setTotalStakingTokens(BigInt(0));
            }
            if (userInfo.result !== undefined) {
                const user = userInfo.result as [bigint, bigint];
                setMyStaked(user[0]);
            } else {
                setMyStaked(BigInt(0));
            }
            if (stakingPendingReward.result !== undefined) {
                setPendingReward(stakingPendingReward.result as bigint);
            } else {
                setPendingReward(BigInt(0));
            }
            if (stakingRewardRemaining.result !== undefined) {
                setRewardRemaining(stakingRewardRemaining.result as bigint);
            } else {
                setRewardRemaining(BigInt(0));
            }
            if (stakingHolderUnlocktime.result !== undefined) {
                const parsedStakingHolderTime = (
                    stakingHolderUnlocktime.result as bigint
                ).toString();
                const holderUnlockDate = new Date(
                    ((parseInt(parsedStakingHolderTime) as number) ?? 0) * 1000,
                );
                setHolderUnlocktime(holderUnlockDate);
            }
        } catch (e) {
            if (e instanceof TypeError) return;
        }
    }, [
        StakingContract?.abi,
        StakingContract?.address,
        publicClient,
        address,
        setMyStaked,
    ]);

    useEffect(() => {
        if (StakingContract?.address) {
            fetchStakingInfo();
        }
    }, [fetchStakingInfo, StakingContract?.address]);

    return {
        apy,
        myStaked,
        pendingReward,
        holderUnlocktime,
        totalStakingTokens,
        rewardRemaining,
    };
}
