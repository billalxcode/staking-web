import Button from '@/ui/components/button/button';
import { useConnectModal } from '@rainbow-me/rainbowkit';

export default function WalletButton() {
    const { openConnectModal } = useConnectModal();

    return <Button onClick={openConnectModal}>Connect Wallet</Button>;
}
