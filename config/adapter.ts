import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { cookieStorage, createStorage } from 'wagmi';
import { dreyerxTestnet, ganacheDevnet, reown_project_id } from './constants';

if (!reown_project_id) {
    throw new Error('Project ID is not defined');
}

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage,
    }),
    ssr: true,
    projectId: reown_project_id,
    networks: [dreyerxTestnet, ganacheDevnet],
});

export const config = wagmiAdapter.wagmiConfig;
