import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { KEEP_WALLET_CONNECTED_KEY } from '../constants';
import { getChainCode } from '../utils/getChainCode';
import { HexString } from '../types';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

// Covering a case when there is no wallet
interface WalletWithoutProvider {
  hasProvider: false;
}

interface WalletWithProvider {
  isConnected: boolean;
  hasProvider: true;
  accounts: string[];
  chainId: HexString;
  provider: MetaMaskInpageProvider;
}

interface WalletWithProviderAndCallbacks extends WalletWithProvider {
  connect: (keep: boolean) => Promise<boolean>;
}

type ContextState = WalletWithProvider | WalletWithoutProvider;

type ContextType = WalletWithProviderAndCallbacks | WalletWithoutProvider;

const defaultState = !window.ethereum
  ? ({
      hasProvider: false,
    } as WalletWithoutProvider)
  : ({
      isConnected: false,
      hasProvider: true,
      accounts: [],
      chainId: '0x1',
      provider: window.ethereum,
    } as WalletWithProvider);

const WalletContext = createContext<ContextType>({ hasProvider: false });

export function WalletContextProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<ContextState>(defaultState);

  const connect: WalletWithProviderAndCallbacks['connect'] = async (keep: boolean) => {
    if (!state.hasProvider) return false;
    try {
      const accounts = await state.provider.request<string[]>({
        method: 'eth_requestAccounts',
      });
      const chainId = await getChainCode(state.provider);
      if (!accounts || !chainId) return false;

      sessionStorage.setItem(KEEP_WALLET_CONNECTED_KEY, String(keep));
      setState((prevState) => {
        if (!prevState.hasProvider) return prevState;

        prevState.accounts = accounts.filter(Boolean) as string[];
        prevState.isConnected = true;
        prevState.chainId = chainId;
        return { ...prevState };
      });
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (
      defaultState.hasProvider &&
      sessionStorage.getItem(KEEP_WALLET_CONNECTED_KEY) === 'true'
    ) {
      connect(true);
    }
  }, []);

  // guard in case there is not provider
  if (!state.hasProvider)
    return <WalletContext.Provider value={state}>{children}</WalletContext.Provider>;

  return (
    <WalletContext.Provider value={{ ...state, connect }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useHasProvider = () => useContext(WalletContext).hasProvider;
export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context.hasProvider)
    throw new Error('Provider required, please install EIP-1193 compatible extension.');
  return context;
};
