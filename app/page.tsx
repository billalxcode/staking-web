'use client';
import useTokenInfo from '@/hooks/useTokenInfo';
import useToken from '@/states/features/token/hooks';
import Alert from '@/ui/components/alert/alert';
import Card from '@/ui/components/card/card';
import Container from '@/ui/components/container/container';
import Divider from '@/ui/components/divider/divider';
import DurationSelector from '@/ui/shared/durations/duration';
import HeadersContainer from '@/ui/shared/headers/container';
import StakingActions from '@/ui/shared/staking/actions';
import StakingForm from '@/ui/shared/staking/form';
import StakingInfo from '@/ui/shared/staking/info';
import { useEffect } from 'react';

export default function Home() {
    const {
        updateName,
        updateBalance,
        updateSymbol,
        updateDecimals,
        updateAllowance,
    } = useToken();
    const { name, balance, symbol, decimals, allowance } = useTokenInfo();

    useEffect(() => {
        updateName(name);
        updateBalance(balance.toString());
        updateSymbol(symbol);
        updateDecimals(decimals);
        updateAllowance(allowance.toString());
    }, [
        name,
        balance,
        symbol,
        decimals,
        allowance,
        updateName,
        updateBalance,
        updateSymbol,
        updateDecimals,
        updateAllowance,
    ]);

    return (
        <div className='min-w-screen min-h-screen'>
            <HeadersContainer />

            <Container>
                <div className='flex flex-col gap-2 justify-center'>
                    <Alert />

                    <Card className='w-[500px] gap-3'>
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
                </div>
            </Container>
        </div>
    );
}
