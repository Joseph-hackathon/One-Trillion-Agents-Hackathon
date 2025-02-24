import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage } from 'wagmi';
import { mainnet } from 'wagmi/chains';
 
export const projectId = "10dd96df3c1b27c7c028d125071be835";
 
if (!projectId) throw new Error('Project ID is not defined');
 
const metadata = {
  name: 'Nero Web3Modal',
  description: 'Nero Web3Modal',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};
 
export const config = defaultWagmiConfig({
  chains: [mainnet],
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});