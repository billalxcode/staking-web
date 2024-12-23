import StakingArtifact from '@/config/contracts/staking.json';
import TokenArtifact from '@/config/contracts/token.json';
import { Abi, defineChain } from 'viem';
import { hardhat, mainnet } from 'viem/chains';

export const dreyerxTestnet = defineChain({
    id: 23452,
    name: 'DreyerX Testnet',
    nativeCurrency: {
        name: 'DreyerX',
        symbol: 'DRX',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://testnet-rpc.dreyerx.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'DreyerX Testnet Scan',
            url: 'https://testnet-scan.dreyerx.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0x04636FDef5dbA48fcb570A760fc6E98AB2Aecc8E',
        },
    },
    testnet: true,
});

export const hardhatDevnet = defineChain({
    ...hardhat,
    contracts: {
        multicall3: {
            address: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
        },
    },
});

export const ganacheDevnet = defineChain({
    id: 1337,
    name: 'Ganache',
    nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['http://localhost:7545'],
        },
    },
    contracts: {
        multicall3: {
            address: '0xf5059a5D33d5853360D16C683c16e67980206f36',
        },
    },
    testnet: true,
});

export const reown_project_id =
    process.env.NEXT_PUBLIC_REOWN_APPKIT_PROJECT_ID ?? '';
export const networks = [mainnet];
export const app_settings = {
    network_logo: process.env.NEXT_PUBLIC_NETWORK_LOGO ?? '',
};

export interface SupportedContractsItem {
    address: `0x${string}`;
    abi: Abi;
}

export type SupportedChains = [1, 23452, 31337, 1337];
export type SupportedContracts = {
    token: SupportedContractsItem;
    m30: SupportedContractsItem;
    d30: SupportedContractsItem;
    d60: SupportedContractsItem;
    d90: SupportedContractsItem;
};

export const contracts_list: Record<
    SupportedChains[number],
    SupportedContracts
> = {
    1: {
        token: {
            address: "0x2232F65655C7c41D8b6c8592Da3A0E32586273ea",
            abi: TokenArtifact.abi as Abi
        },
        d30: {
            address: "0x35a7E2891aB36d2a5E8F09708E01d50e89745BFd",
            abi: StakingArtifact.abi as Abi
        },
        m30: {
            address: "0x35a7E2891aB36d2a5E8F09708E01d50e89745BFd",
            abi: StakingArtifact.abi as Abi
        },
        d60: {
            address: "0x35a7E2891aB36d2a5E8F09708E01d50e89745BFd",
            abi: StakingArtifact.abi as Abi
        },
        d90: {
            address: "0x35a7E2891aB36d2a5E8F09708E01d50e89745BFd",
            abi: StakingArtifact.abi as Abi
        }
    },
    23452: {
        token: {
            address: '0x8E89a66d08cdaE9602c6309f6a2bB4cd00FddCBC',
            abi: TokenArtifact.abi as Abi,
        },
        m30: {
            address: '0xA6E3fA65860BF040b18c7BA4Ad93aa7EbB68c113',
            abi: StakingArtifact.abi as Abi,
        },
        d30: {
            address: '0x77be12B68Fe75624e8a36bcA3388Ae02a55B5dbc',
            abi: StakingArtifact.abi as Abi,
        },
        d60: {
            address: '0xD6b4fE1483D9147a4de40a667A188b284bA6cd02',
            abi: StakingArtifact.abi as Abi,
        },
        d90: {
            address: '0x6480f93BA9Bf17A31c36068a65e5800e6af963f4',
            abi: StakingArtifact.abi as Abi,
        },
    },
    31337: {
        token: {
            address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
            abi: TokenArtifact.abi as Abi,
        },
        d30: {
            address: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
            abi: StakingArtifact.abi as Abi,
        },
        m30: {
            address: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
            abi: StakingArtifact.abi as Abi,
        },
        d60: {
            address: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
            abi: StakingArtifact.abi as Abi,
        },
        d90: {
            address: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
            abi: StakingArtifact.abi as Abi,
        },
    },
    1337: {
        token: {
            address: '0xc3e53F4d16Ae77Db1c982e75a937B9f60FE63690',
            abi: TokenArtifact.abi as Abi,
        },
        d30: {
            address: '0xa82fF9aFd8f496c3d6ac40E2a0F282E47488CFc9',
            abi: StakingArtifact.abi as Abi,
        },
        m30: {
            address: '0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB',
            abi: StakingArtifact.abi as Abi,
        },
        d60: {
            address: '0x1613beB3B2C4f22Ee086B2b38C1476A3cE7f78E8',
            abi: StakingArtifact.abi as Abi,
        },
        d90: {
            address: '0x851356ae760d987E095750cCeb3bC6014560891C',
            abi: StakingArtifact.abi as Abi,
        },
    },
};

export function isSupportedChainId(
    chainId: number,
): chainId is SupportedChains[number] {
    return chainId === 23452 || chainId === 31337 || chainId === 1337;
}

export function getContractByName(
    chainId: SupportedChains[number],
    contractName: keyof SupportedContracts,
) {
    const list = contracts_list[chainId as keyof typeof contracts_list];

    if (!list) {
        throw new Error(`Chain ID ${chainId} is not supported.`);
    }

    const contract = list[contractName];

    if (!contract) {
        throw new Error(
            `Contract ${contractName} is not found on chain ${chainId}.`,
        );
    }

    return contract;
}
