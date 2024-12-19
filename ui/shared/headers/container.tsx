import NetworkSwitch from '../wallet/network';
import Wallet from '../wallet/wallet';

export default function HeadersContainer() {
    return (
        <div className='bg-white flex justify-between items-center w-full p-5 border border-[bg-white/20]'>
            <p className='font-bold'>DreyerX Staking</p>

            <div className='flex gap-2'>
                <NetworkSwitch />
                <Wallet />
            </div>
        </div>
    );
}
