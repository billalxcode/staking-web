'use client';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import WalletButton from './button';
import WalletConnected from './connected';

export default function Wallet() {
    const { isConnected } = useAccount();

    useEffect(() => {
        console.log(isConnected);
    }, [isConnected]);
    if (!isConnected) {
        return <WalletButton />;
    }
    return <WalletConnected />;
}
