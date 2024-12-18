"use client";
import { config } from "@/config/adapter";
import { dreyerxTestnet } from "@/config/constants";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { WagmiProvider } from "wagmi";

const queryclient = new QueryClient();

export default function WalletProvider(props: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryclient}>
        <RainbowKitProvider
          locale="en"
          initialChain={dreyerxTestnet}
          modalSize={"compact"}
        >
          {props.children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
