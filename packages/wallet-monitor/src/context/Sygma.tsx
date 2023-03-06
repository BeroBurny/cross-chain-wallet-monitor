import { Sygma } from '@buildwithsygma/sygma-sdk-core';
import { bridgeSetupList } from '../sygma/bridgeSetupList';
import { createContext, PropsWithChildren, useContext } from 'react';

const bridgeSetup = {
  chain1: bridgeSetupList[0],
  chain2: bridgeSetupList[1],
};

const sygma = new Sygma({ bridgeSetupList, bridgeSetup });

const SygmaContext = createContext<Sygma>(sygma);

export function SygmaContextProvider({ children }: PropsWithChildren) {
  return <SygmaContext.Provider value={sygma}>{children}</SygmaContext.Provider>;
}

export const useSygma = () => useContext(SygmaContext);
