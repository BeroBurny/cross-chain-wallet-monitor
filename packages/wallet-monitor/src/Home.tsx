import {hasProvider} from "./context/Wallet";
import {NoWalletWarning} from "./components/NoWalletWarning";

export function Home() {
  const isProviderAvailable = hasProvider();

  if (!isProviderAvailable) return <NoWalletWarning />;

  return <div>Hello World</div>;
}
