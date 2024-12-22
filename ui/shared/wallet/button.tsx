'use client';
import Button from '@/ui/components/button/button';
import { useAppKit } from '@reown/appkit/react';

export default function WalletButton() {
    const { open } = useAppKit();

    return (
        <Button onClick={() => open({ view: 'Connect' })}>
            Connect Wallet
        </Button>
    );
}
