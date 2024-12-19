import {
    getContractByName,
    isSupportedChainId,
    SupportedContracts,
    SupportedContractsItem,
} from '@/config/constants';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

export default function useContractByName(name: keyof SupportedContracts) {
    const { chainId } = useAccount();
    const [contract, setContract] = useState<SupportedContractsItem | null>(
        null,
    );

    useEffect(() => {
        if (chainId && isSupportedChainId(chainId)) {
            setContract(getContractByName(chainId, name));
        } else {
            setContract(getContractByName(31337, name));
        }
    }, [chainId, name]);

    return { contract };
}
