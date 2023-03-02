import { MetaMaskInpageProvider } from "@metamask/providers";
import { HexString } from "../types";

export async function getChainCode(provider: MetaMaskInpageProvider): Promise<null | HexString> {
  // TODO: validate chainID to be hex string
  if (provider.chainId) return provider.chainId as HexString;

  const chainId = await provider.request<string | number>({ method: 'net_version' });
  if (!chainId) return null;

  // TODO: simplify logic if is possible
  if (typeof chainId === "string") {
    if (chainId.startsWith("0x")) return chainId as HexString;
    const idNumber = Number(chainId);
    if (isNaN(idNumber)) return null;
    return toHexNumber(idNumber);
  }
  return toHexNumber(chainId);
}

const toHexNumber = (value: number): HexString => `0x${value.toString(16)}`;
