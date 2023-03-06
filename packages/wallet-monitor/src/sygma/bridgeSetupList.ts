import { SygmaBridgeSetupList, TokenConfig } from '@buildwithsygma/sygma-sdk-core';

const createNetworkTokens = (
  addressForERC20LRTest: string,
  addressForERC20TST: string,
): TokenConfig[] => [
  {
    type: 'erc20',
    address: addressForERC20LRTest,
    name: 'ERC20LRTest',
    resourceId: '0x0000000000000000000000000000000000000000000000000000000000000300',
    feeSettings: {
      type: 'basic',
      address: '',
    },
  },
  {
    type: 'erc20',
    address: addressForERC20TST,
    name: 'ERC20TST',
    resourceId: '0x0000000000000000000000000000000000000000000000000000000000000000',
    feeSettings: {
      type: 'feeOracle',
      address: '',
    },
  },
];

const goerliTokens = createNetworkTokens(
  '0x3F9A68fF29B3d86a6928C44dF171A984F6180009',
  '0x3D151A97A446C9ea6893038e7C0db73466f3f3af',
);
const moonbaseTokens = createNetworkTokens(
  '0x3690601896C289be2d894c3d1213405310D0a25C',
  '0xAc693E44E1EDe5f66A4e1406F65b904450932fB3',
);
const mumbaiTokens = createNetworkTokens(
  '0xFC072Aa8ABB5646aFD0c22994bdE30dB57B1BF1C',
  '0x2465c8F84bDB7130ACDf31d694bc9c820F70ac06',
);

export const bridgeSetupList: SygmaBridgeSetupList = [
  {
    domainId: '1',
    networkId: 5,
    name: 'Ethereum Goerli',
    decimals: 18,
    bridgeAddress: '0x95ECF5ae000e0fe0e0dE63aDE9b7D82a372038b4',
    erc20HandlerAddress: '0xea24Bb5500fE670d1ce1B9EaEbA942a5ca85e5Ea',
    erc721HandlerAddress: '0xC2aae1ac76eD2Bb37bF4AdD72A82165bD2bf99F3',
    rpcUrl: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    tokens: goerliTokens,
  },
  {
    domainId: '2',
    networkId: 1287,
    name: 'Moonbase Alpha',
    decimals: 18,
    bridgeAddress: '0xd8681e9c2bA2fdfE6690F59bc726C657ed8B494D',
    erc20HandlerAddress: '0xC3ea0Fbaa708D225BD2575dC4A57e0eaE8aFc77F',
    erc721HandlerAddress: '0x530Ca8291856c727cc6a33c2ACD50f79184AFA3d',
    rpcUrl: 'https://rpc.testnet.moonbeam.network',
    tokens: moonbaseTokens,
  },
  {
    domainId: '3',
    networkId: 80001,
    name: 'Polygon Mumbai',
    decimals: 18,
    bridgeAddress: '0x9a8F70222FB768e16FE343c9EbA8634e4bd6524A',
    erc20HandlerAddress: '0xb76A581fc20020675651EABC465ECaA311474186',
    erc721HandlerAddress: '0x5D7fc7407F00C415a13C43076e7Db82b357DE658',
    rpcUrl: 'https://rpc-mumbai.maticvigil.com',
    tokens: mumbaiTokens,
  },
];
