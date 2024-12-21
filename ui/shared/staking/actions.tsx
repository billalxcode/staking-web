import useApproval from '@/hooks/actions/useApproval';
import useStake from '@/hooks/actions/useStake';
import useStaking from '@/states/features/staking/hooks';
import Button from '@/ui/components/button/button';

export default function StakingActions() {
    const { action } = useStaking();
    const { handleApprove } = useApproval();
    const { handleStake } = useStake();

    if (action == 'approve') {
        return (
            <Button size='lg' onClick={() => handleApprove()}>
                Approve
            </Button>
        );
    } else if (action == 'stake') {
        return (
            <Button size='lg' onClick={() => handleStake()}>
                Stake
            </Button>
        );
    }

    return (
        <Button variant='secondary' size='lg' disabled>
            Enter a amount
        </Button>
    );
}
