import { Button } from 'baseui/button';
import { useWallet } from '../context/Wallet';
import { useState } from 'react';
import { Checkbox } from 'baseui/checkbox';

export function ConnectWallet() {
  const wallet = useWallet();

  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleConnectClick = async () => {
    setIsLoading(true);
    try {
      await wallet.connect(checked);
    } catch (error) {
      console.log('error', error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Button onClick={handleConnectClick} isLoading={isLoading}>
        Connect
      </Button>
      <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
        Keep Connected
      </Checkbox>
    </div>
  );
}
