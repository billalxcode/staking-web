import useApproval from '@/hooks/actions/useApproval';
import useClaimReward from '@/hooks/actions/useClaimReward';
import useStake from '@/hooks/actions/useStake';
import useWithdraw from '@/hooks/actions/useWithdraw';
import useStakingInfo from '@/hooks/useStakingInfo';
import useWithdrawInfo from '@/hooks/useWithdrawInfo';
import useStaking from '@/states/features/staking/hooks';
import Button from '@/ui/components/button/button';
import { useAccount } from 'wagmi';
import WalletButton from '../wallet/button';

export default function StakingActions() {
    const { action } = useStaking();
    const { isConnected} = useAccount()
    const { pendingReward, myStaked, rewardRemaining } = useStakingInfo();
    const { handleNormalWithdraw, handleEmergencyWithdraw } = useWithdraw();
    const { handleClaimReward } = useClaimReward();
    const { isEmergency } = useWithdrawInfo();
    const { handleApprove } = useApproval();
    const { handleStake } = useStake();

    if (!isConnected) {
        return (
            <WalletButton />
        )
    }
    if (action == 'insufficient') {
        return (
            <Button variant='danger' size='lg' disabled>
                Insufficient Balance
            </Button>
        );
    }

    return (
        <div className='flex flex-col gap-2'>
            {action == 'amount' ? (
                <Button variant='secondary' size='lg' disabled>
                    Enter a amount
                </Button>
            ) : action == 'stake' ? (
                <Button size='lg' onClick={() => handleStake()}>
                    Stake
                </Button>
            ) : action == 'approve' ? (
                <Button size='lg' onClick={() => handleApprove()}>
                    Approve
                </Button>
            ) : null}
            <Button
                variant='primary'
                onClick={() => handleClaimReward()}
                size='lg'
                disabled={pendingReward <= 1 || pendingReward > rewardRemaining}
            >
                Claim Reward
            </Button>
            {isEmergency ? (
                <Button
                    variant='primary'
                    onClick={() => handleEmergencyWithdraw()}
                    size='lg'
                    disabled={myStaked <= 0 || rewardRemaining <= myStaked}
                >
                    Emergency Withdraw
                </Button>
            ) : (
                <Button
                    variant='primary'
                    onClick={() => handleNormalWithdraw()}
                    size='lg'
                    disabled={myStaked <= 0 || rewardRemaining <= myStaked}
                >
                    Withdraw
                </Button>
            )}
        </div>
    );
}
