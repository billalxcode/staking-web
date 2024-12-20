import useApproval from '@/hooks/actions/useApproval';
import useStake from '@/hooks/actions/useStake';
import useAlert from '@/states/features/alert/hooks';
import useStaking from '@/states/features/staking/hooks';
import Button from '@/ui/components/button/button';
import { useEffect } from 'react';

export default function StakingActions() {
    const { setAlertMessage } = useAlert()
    const { action, errorMessage } = useStaking()
    const { handleApprove } = useApproval()
    const { handleStake } = useStake()

    useEffect(() => {
        if (errorMessage) {
            setAlertMessage({
                message: errorMessage,
                variant: 'danger',
                duration: 3000
            })
        }
    }, [errorMessage, setAlertMessage])

    if (action == "approve") {
        return (
            <Button size='lg' onClick={() => handleApprove()}>
                Approve
            </Button>
        );
    } else if (action == "stake") {
        return (
            <Button size='lg' onClick={() => handleStake()}>
                Stake
            </Button>
        );
    }

    return (
        <Button variant='secondary' size='lg' disabled >
            Enter a amount
        </Button>
    )
}
