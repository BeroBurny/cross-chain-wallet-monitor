import { ConnectWallet } from './components/ConnectWallet';
import { useWallet } from './context/Wallet';
import { SygmaContextProvider } from './context/Sygma';
import { Dashboard } from './components/Dashboard';

export function Home() {
  const wallet = useWallet();

  if (!wallet.isConnected) return <ConnectWallet />;

  return (
    <SygmaContextProvider>
      <Dashboard />
    </SygmaContextProvider>
  );
}
