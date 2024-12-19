import Card from '@/ui/components/card/card';
import Container from '@/ui/components/container/container';
import Divider from '@/ui/components/divider/divider';
import DurationSelector from '@/ui/shared/durations/duration';
import HeadersContainer from '@/ui/shared/headers/container';
import StakingActions from '@/ui/shared/staking/actions';
import StakingForm from '@/ui/shared/staking/form';
import StakingInfo from '@/ui/shared/staking/info';

export default function Home() {
    return (
        <div className='min-w-screen min-h-screen'>
            <HeadersContainer />

            <Container>
                <Card className='w-auto gap-3'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-bold text-xl'>
                            DreyerX Staking Pool
                        </h1>

                        <DurationSelector />
                        <p className='text-center'>
                            Stake $DRX token to earn $DRX tokens
                        </p>
                        <Divider />

                        <StakingInfo />

                        <Divider />

                        <StakingForm />

                        <StakingActions />
                    </div>
                </Card>
            </Container>
        </div>
    );
}
