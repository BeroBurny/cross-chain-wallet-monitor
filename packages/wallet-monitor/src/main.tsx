import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { WalletContextProvider } from './context/Wallet';

const engine = new Styletron();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <WalletContextProvider>
          <App />
        </WalletContextProvider>
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>,
);
