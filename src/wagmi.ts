import {
  getDefaultWallets,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
import {
  optimism,
  optimismGoerli,
  zora,
  zoraTestnet,
  base,
  baseGoerli,
} from "wagmi/chains";

import { publicProvider } from "wagmi/providers/public";

const walletConnectProjectId = "b0a6b7ab02a4090553750BE07a5728a6";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [zora, zoraTestnet, optimism, optimismGoerli, base, baseGoerli],
  [publicProvider()],
);

const { wallets } = getDefaultWallets({
  appName: "NFTV",
  chains,
  projectId: walletConnectProjectId,
});

const connectors = connectorsForWallets([...wallets]);

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { chains };
