import './App.css'
import {Home} from "./Home";
import {hasProvider} from "./context/Wallet";
import {NoWalletWarning} from "./components/NoWalletWarning";
function App() {
  const isProviderAvailable = hasProvider();

  if (!isProviderAvailable) return <NoWalletWarning />;

  return <Home />;
}

export default App
