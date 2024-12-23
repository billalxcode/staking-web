import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet } from 'viem/chains';
import { cookieStorage, createStorage, http } from 'wagmi';
import { reown_project_id } from './constants';

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
    networks: [mainnet],
    transports: {
        [mainnet.id]: http("https://mainnet.infura.io/v3/0d20a611337f4c819f24dde24b0c4769")
    }
});

export const config = wagmiAdapter.wagmiConfig;
