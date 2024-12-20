import useStakingInfo from "@/hooks/useStakingInfo";

export default function StakingInfo() {
    const { } = useStakingInfo()
    
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between'>
                <p className='font-bold'>APY Rewards</p>
                <p className='font-semibold'>5%</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold'>Total Staked</p>
                <p className='font-semibold'>0</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold'>My Staked</p>
                <p className='font-semibold'>0</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold'>Rewards Earned</p>
                <p className='font-semibold'>0</p>
            </div>
        </div>
    );
}
