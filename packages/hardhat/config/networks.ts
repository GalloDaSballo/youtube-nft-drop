import { infuraApiKey, maticVigilApiKey } from "./env";
import { MATIC_MAINNET, MATIC_MUMBAI, PROOF_OF_SUB_MATIC, PROOF_OF_SUB_MUMBAI } from "./constants";

export enum ChainId {
    ganache = 1337,
    goerli = 5,
    hardhat = 31337,
    kovan = 42,
    mainnet = 1,
    matic = 137,
    mumbai = 80001,
    rinkeby = 4,
    ropsten = 3,
    xdai = 100,
}

interface INetwork {
    url: string;
    chainId: number;
    contracts?: {
        [key: string]: string;
    };
}

// Delegate requests for a network config to a provider specific function based on which networks they serve

// Ethereum
const infuraChains = ["goerli", "kovan", "mainnet", "rinkeby", "ropsten"] as const;
type InfuraChain = typeof infuraChains[number];
const getInfuraConfig = (network: InfuraChain): INetwork => {
    if (!process.env.INFURA_API_KEY) {
        throw new Error("Please set your INFURA_API_KEY in a .env file");
    }
    return {
        url: `https://${network}.infura.io/v3/${infuraApiKey}`,
        chainId: ChainId[network],
    };
};

// Matic
const maticVigilChains = ["matic", "mumbai"] as const;
type MaticVigilChain = typeof maticVigilChains[number];
const getMaticVigilConfig = (
    network: MaticVigilChain,
): { url: string; chainId: number; contracts: { [key: string]: string } } => {
    if (!maticVigilApiKey) {
        throw new Error("Please set your MATICVIGIL_API_KEY in a .env file");
    }
    return {
        url: `https://rpc-${network === "matic" ? "mainnet" : network}.maticvigil.com/v1/${maticVigilApiKey}`,
        chainId: ChainId[network],
        contracts: {
            proofOfSubContract: network === "matic" ? PROOF_OF_SUB_MATIC : PROOF_OF_SUB_MUMBAI,
            maticContract: network === "matic" ? MATIC_MAINNET : MATIC_MUMBAI,
        },
    };
};

// xDai
const xDaiChains = ["xdai"] as const;
type XDaiChain = typeof xDaiChains[number];
const getXDaiConfig = (network: XDaiChain): INetwork => {
    return {
        url: `https://rpc.xdaichain.com/`,
        chainId: ChainId[network],
    };
};

export type RemoteChain = InfuraChain | MaticVigilChain | XDaiChain;
export const getRemoteNetworkConfig = (network: RemoteChain): INetwork => {
    if (infuraChains.includes(network as InfuraChain)) return getInfuraConfig(network as InfuraChain);
    if (maticVigilChains.includes(network as MaticVigilChain)) return getMaticVigilConfig(network as MaticVigilChain);
    if (xDaiChains.includes(network as XDaiChain)) return getXDaiConfig(network as XDaiChain);
    throw Error("Unknown network");
};
