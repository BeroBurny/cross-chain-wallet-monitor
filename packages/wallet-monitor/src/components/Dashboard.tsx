import { useSygma } from '../context/Sygma';
import { useWallet } from '../context/Wallet';
import { useEffect } from 'react';

export function Dashboard() {
  const sygma = useSygma();
  const wallet = useWallet();

  useEffect(() => {
    console.log(sygma.initializeConnectionRPC(wallet.accounts[0]));
    sygma.getSignerBalance('chain1').then((n) => console.log(n && n.toNumber()));
    sygma.getSignerGasPrice('chain1').then((n) => console.log(n && n.toNumber()));

    sygma
      .fetchBasicFeeData({
        amount: '1000000',
        recipientAddress: '0x025982b2D5D2E4d33FCE9d33F8A01044d6B70358',
      })
      .then(console.warn);
  }, []);

  return <div>DashBoard</div>;
}
