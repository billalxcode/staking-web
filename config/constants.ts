import { Abi, defineChain } from "viem";
import { hardhat } from "viem/chains";
import StakingArtifact from "@/config/contracts/staking.json";

export const dreyerxTestnet = defineChain({
  id: 23452,
  name: "DreyerX Testnet",
  nativeCurrency: {
    name: "DreyerX",
    symbol: "DRX",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.dreyerx.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "DreyerX Testnet Scan",
      url: "https://testnet-scan.dreyerx.com",
    },
  },
  testnet: true,
});

export const reown_project_id =
  process.env.NEXT_PUBLIC_REOWN_APPKIT_PROJECT_ID ?? "";
export const networks = [dreyerxTestnet, hardhat];
export const app_settings = {
  network_logo: process.env.NEXT_PUBLIC_NETWORK_LOGO ?? "",
};

export interface SupportedContractsItem {
  address: `0x${string}`;
  abi: Abi;
}

export type SupportedChains = [31337];
export type SupportedContracts = {
  token: SupportedContractsItem;
  m30: SupportedContractsItem;
  d30: SupportedContractsItem;
  d60: SupportedContractsItem;
};

export const contracts_list: Record<
  SupportedChains[number],
  SupportedContracts
> = {
  31337: {
    token: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: StakingArtifact.abi as Abi,
    },
    d30: {
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      abi: StakingArtifact.abi as Abi,
    },
    m30: {
      address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      abi: StakingArtifact.abi as Abi,
    },
    d60: {
      address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      abi: StakingArtifact.abi as Abi,
    },
  },
};
