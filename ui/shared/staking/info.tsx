import useStakingInfo from '@/hooks/useStakingInfo';
import useToken from '@/states/features/token/hooks';
import { formatUnits } from 'viem';

export default function StakingInfo() {
    const { decimals, symbol } = useToken();
    const { apy, totalStakingTokens, myStaked, pendingReward } = useStakingInfo();

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between'>
                <p className='font-bold'>APY Rewards</p>
                <p className='font-semibold'>{parseInt(apy) / 100}%</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold'>Total Staked</p>
                <p className='font-semibold'>
                    {formatUnits(BigInt(totalStakingTokens), decimals ?? 18) ??
                        '-'}{' '}
                    {symbol ?? ''}
                </p>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold'>My Staked</p>
                <p className='font-semibold'>
                    {formatUnits(BigInt(myStaked), decimals ?? 18) ??
                        '-'}{' '}
                    {symbol ?? ''}
                </p>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold'>Pending Reward</p>
                <p className='font-semibold'>
                {formatUnits(BigInt(pendingReward), decimals ?? 18) ??
                        '-'}{' '}
                    {symbol ?? ''}
                </p>
            </div>
        </div>
    );
}
