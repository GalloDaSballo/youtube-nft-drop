import { Wallet } from "@ethersproject/wallet";
import { JsonRpcProvider } from "@ethersproject/providers";

import { task } from "hardhat/config";
import { BOT_ADDRESS, NETWORK_CONFIG, TEST_CHANNEL_ID, TEST_IMAGE_URI } from "../config";
import { ProofOfSub } from "../typechain";

task("mint", "Mint an NFT", async (_taskArgs, hre) => {
    const { deployer } = await hre.getNamedAccounts();
    console.log("deployer", deployer);
    const wallet = new Wallet(String(process.env.BOT_PK)).connect(new JsonRpcProvider(NETWORK_CONFIG.url));
    console.log("wallet address", await wallet.getAddress());
    const proofOfSub = (await hre.ethers.getContractAt(
        "ProofOfSub",
        NETWORK_CONFIG.contracts?.proofOfSubContract as string,
    )) as ProofOfSub;

    console.log("getRemoteNetworkConfig(network).contracts?.proofOfSub", NETWORK_CONFIG.contracts?.proofOfSubContract);
    const receipt = await (await proofOfSub.awardItem(BOT_ADDRESS, TEST_IMAGE_URI, TEST_CHANNEL_ID)).wait();
    console.log("receipt", receipt);
});
