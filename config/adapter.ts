import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  metaMaskWallet,
  safepalWallet,
  safeWallet,
  trustWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { hardhat } from "viem/chains";
import { dreyerxTestnet, reown_project_id } from "./constants";

if (!reown_project_id) {
  throw new Error("Project ID is not defined");
}

export const config = getDefaultConfig({
  appName: "DreyerX Staking",
  projectId: reown_project_id,
  chains: [
    {
      ...dreyerxTestnet,
    },
    {
      ...hardhat,
    },
  ],
  ssr: true,
  wallets: [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet, injectedWallet, safeWallet],
    },
    {
      groupName: "For Mobile",
      wallets: [metaMaskWallet, trustWallet, safepalWallet],
    },
  ],
});
