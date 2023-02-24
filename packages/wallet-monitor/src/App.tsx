import './App.css'
import {Home} from "./Home";
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { WalletContextProvider } from "./context/Wallet";

const engine = new Styletron();

function App() {

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <WalletContextProvider>
          <Home />
        </WalletContextProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App
