import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
// eslint-disable-next-line import/no-cycle
import { RemoteChain } from "./networks";

dotenvConfig({ path: resolve(__dirname, "../.env") });

// Ensure that we have all the environment variables we need.
if (!process.env.MNEMONIC) {
    throw new Error("Please set your MNEMONIC in a .env file");
}

export const mnemonic: string = process.env.MNEMONIC;
export const infuraApiKey = process.env.INFURA_API_KEY;
export const maticVigilApiKey = process.env.MATICVIGIL_API_KEY;
export const NETWORK: RemoteChain = (process.env.NETWORK as string) === "matic" ? "matic" : "mumbai";
export const BOT_ADDRESS = process.env.BOT_ADDRESS as string;
console.log("network", NETWORK);
