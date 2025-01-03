import { useCallback, useEffect, useState } from 'react';
import { Abi, Client } from 'viem';
import { multicall } from 'viem/actions';
import { useAccount, usePublicClient } from 'wagmi';
import useContractByName from './useContractByName';
import useStakingContract from './useStakingContract';

export default function useTokenInfo() {
    const [balance, setBalance] = useState<bigint>(BigInt(0));
    const [symbol, setSymbol] = useState<string>('DRX');
    const [decimals, setDecimals] = useState<number>(18);
    const [name, setName] = useState<string>('');
    const [allowance, setAllowance] = useState<bigint>(BigInt(0));

    const { address, isConnected } = useAccount();
    const { staking_contract } = useStakingContract();
    const { contract: Token } = useContractByName('token');
    const publicClient = usePublicClient();

    const fetchMulticall = useCallback(async () => {
        const token_contract = {
            address: Token?.address as `0x${string}`,
            abi: Token?.abi as Abi,
        };

        try {
            const results = await multicall(publicClient as Client, {
                contracts: [
                    {
                        ...token_contract,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        ...token_contract,
                        functionName: 'symbol',
                    },
                    {
                        ...token_contract,
                        functionName: 'decimals',
                    },
                    {
                        ...token_contract,
                        functionName: 'name',
                    },
                    {
                        ...token_contract,
                        functionName: 'allowance',
                        args: [address, staking_contract?.address],
                    },
                ],
            });
            setBalance((results[0].result as bigint) ?? BigInt(0));
            setSymbol((results[1].result as string) ?? 'DRX');
            setDecimals((results[2].result as number) ?? 18);
            setName((results[3].result as string) ?? 'DreyerX');
            setAllowance((results[4].result as bigint) ?? '0');
        } catch (e) {
            if (e instanceof TypeError) return;
        }
    }, [
        publicClient,
        Token?.abi,
        Token?.address,
        address,
        staking_contract?.address,
    ]);

    useEffect(() => {
        if (isConnected) {
            fetchMulticall();
        }
    }, [address, fetchMulticall, isConnected]);

    return {
        balance,
        symbol,
        decimals,
        name,
        allowance,
    };
}
