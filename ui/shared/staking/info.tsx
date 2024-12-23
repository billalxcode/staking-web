import useStakingInfo from '@/hooks/useStakingInfo';
import useToken from '@/states/features/token/hooks';
import { formatUnits } from 'viem';

export default function StakingInfo() {
    const { decimals, symbol } = useToken();
    const {
        apy,
        totalStakingTokens,
        myStaked,
        pendingReward,
        rewardRemaining,
    } = useStakingInfo();

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between'>
                <p className='font-bold'>APY Rewards</p>
                <p className='font-semibold'>
                    {isNaN(parseInt(apy)) ? '0' : parseInt(apy)}%
                </p>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold'>Total Staked</p>
                <p className='font-semibold'>
                    {Number(
                        formatUnits(BigInt(totalStakingTokens), decimals ?? 18),
                    ).toFixed(4) ?? '-'}{' '}
                    {symbol ?? ''}
                </p>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold'>My Staked</p>
                <p className='font-semibold'>
                    {Number(
                        formatUnits(BigInt(myStaked), decimals ?? 18),
                    ).toFixed(4) ?? '-'}{' '}
                    {symbol ?? ''}
                </p>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold'>Pending Reward</p>
                <p className='font-semibold'>
                    {Number(
                        formatUnits(BigInt(pendingReward), decimals ?? 18),
                    ).toFixed(4) ?? '-'}{' '}
                    {symbol ?? ''}
                </p>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold'>Rewards Remaining</p>
                <p className='font-semibold'>
                    {Number(
                        formatUnits(BigInt(rewardRemaining), decimals ?? 18),
                    ).toFixed(4) ?? '-'}{' '}
                    {symbol ?? ''}
                </p>
            </div>
        </div>
    );
}
