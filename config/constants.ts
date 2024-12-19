import StakingArtifact from '@/config/contracts/staking.json';
import TokenArtifact from '@/config/contracts/token.json';
import { Abi, defineChain } from 'viem';
import { hardhat } from 'viem/chains';

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
            address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
        },
    },
});

export const reown_project_id =
    process.env.NEXT_PUBLIC_REOWN_APPKIT_PROJECT_ID ?? '';
export const networks = [dreyerxTestnet, hardhatDevnet];
export const app_settings = {
    network_logo: process.env.NEXT_PUBLIC_NETWORK_LOGO ?? '',
};

export interface SupportedContractsItem {
    address: `0x${string}`;
    abi: Abi;
}

export type SupportedChains = [23452, 31337];
export type SupportedContracts = {
    token: SupportedContractsItem;
    m30: SupportedContractsItem;
    d30: SupportedContractsItem;
    d60: SupportedContractsItem;
    d90: SupportedContractsItem
};

export const contracts_list: Record<
    SupportedChains[number],
    SupportedContracts
> = {
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
            address: "0x6480f93BA9Bf17A31c36068a65e5800e6af963f4",
            abi: StakingArtifact.abi as Abi
        }
    },
    31337: {
        token: {
            address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
            abi: TokenArtifact.abi as Abi,
        },
        d30: {
            address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
            abi: StakingArtifact.abi as Abi,
        },
        m30: {
            address: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
            abi: StakingArtifact.abi as Abi,
        },
        d60: {
            address: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
            abi: StakingArtifact.abi as Abi,
        },
        d90: {
            address: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
            abi: StakingArtifact.abi as Abi
        }
    },
};

export function isSupportedChainId(
    chainId: number,
): chainId is SupportedChains[number] {
    return chainId === 23452 || chainId === 31337;
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
