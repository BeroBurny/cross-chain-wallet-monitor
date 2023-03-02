import {ConnectWallet} from "./components/ConnectWallet";
import {getWallet} from "./context/Wallet";

export function Home() {
  const wallet = getWallet();

  if (!wallet.isConnected) return (
    <ConnectWallet />
  );

  return <div>Hello</div>
}
