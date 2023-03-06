import './App.css';
import { Home } from './Home';
import { useHasProvider } from './context/Wallet';
import { NoWalletWarning } from './components/NoWalletWarning';
function App() {
  const isProviderAvailable = useHasProvider();

  if (!isProviderAvailable) return <NoWalletWarning />;

  return <Home />;
}

export default App;
