import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
    injectedWallet,
    metaMaskWallet,
    safepalWallet,
    safeWallet,
    trustWallet,
} from '@rainbow-me/rainbowkit/wallets';
import {
    dreyerxTestnet,
    ganacheDevnet,
    hardhatDevnet,
    reown_project_id,
} from './constants';

if (!reown_project_id) {
    throw new Error('Project ID is not defined');
}

export const config = getDefaultConfig({
    appName: 'DreyerX Staking',
    projectId: reown_project_id,
    chains: [
        {
            ...dreyerxTestnet,
        },
        {
            ...hardhatDevnet,
        },
        {
            ...ganacheDevnet,
        },
    ],
    ssr: true,
    wallets: [
        {
            groupName: 'Recommended',
            wallets: [metaMaskWallet, injectedWallet, safeWallet],
        },
        {
            groupName: 'For Mobile',
            wallets: [metaMaskWallet, trustWallet, safepalWallet],
        },
    ],
});
