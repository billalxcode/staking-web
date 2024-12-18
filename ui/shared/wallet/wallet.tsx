'use client';
import { useAccount } from 'wagmi';
import WalletButton from './button';
import WalletConnected from './connected';

export default function Wallet() {
    const { isConnected } = useAccount();

    if (!isConnected) {
        return <WalletButton />;
    }
    return <WalletConnected />;
}
