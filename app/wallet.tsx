'use client';
import { config } from '@/config/adapter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { cookieToInitialState, WagmiProvider } from 'wagmi';

const queryclient = new QueryClient();

export default function WalletProvider(props: {
    children: ReactNode;
    cookies: string | null;
}) {
    const initialState = cookieToInitialState(config, props.cookies);

    return (
        <WagmiProvider config={config} initialState={initialState}>
            <QueryClientProvider client={queryclient}>
                {props.children}
            </QueryClientProvider>
        </WagmiProvider>
    );
}
