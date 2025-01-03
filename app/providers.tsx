'use client';
import { wagmiAdapter } from '@/config/adapter';
import { ganacheDevnet, reown_project_id } from '@/config/constants';
import { AppStore, makeStore } from '@/states/store';
import { createAppKit } from '@reown/appkit/react';
import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { mainnet } from 'viem/chains';
import WalletProvider from './wallet';

const metadata = {
    name: 'dreyerx',
    description: 'DreyerX Staking',
    url: 'https://stake.dreyerx.com', // origin must match your domain & subdomain
    icons: ['https://storage.dreyerx.com/logo/logo-without-bg.png'],
};

createAppKit({
    adapters: [wagmiAdapter],
    projectId: reown_project_id,
    networks: [mainnet],
    defaultNetwork: ganacheDevnet,
    metadata: metadata,
    features: {
        analytics: true,
        connectMethodsOrder: ['wallet'],
    },
});

export default function AppProviders(props: {
    children: ReactNode;
    cookies: string | null;
}) {
    const storeRef = useRef<AppStore>(null);
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return (
        <Provider store={storeRef.current}>
            <WalletProvider cookies={props.cookies}>
                {props.children}
            </WalletProvider>
        </Provider>
    );
}
