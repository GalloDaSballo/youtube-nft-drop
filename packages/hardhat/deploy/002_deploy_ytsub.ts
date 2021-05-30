import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { BigNumber } from "ethers";
import { BOT_ADDRESS, NETWORK_CONFIG } from "../config";

const abi = ["function balanceOf(address account) external view returns (uint256)"];

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts, ethers } = hre;

    const { deployer } = await getNamedAccounts();
    const MATIC = await ethers.getContractAt(abi, NETWORK_CONFIG.contracts?.maticContract as string);
    const deployerBal = await MATIC.balanceOf(deployer);
    console.log("deployer", deployer);
    console.log("deployerBal", BigNumber.from(deployerBal).toString());
    const name = "YouTube Proof of Sub";
    const symbol = "YTSUB";
    const baseURI = "youtube-proof-of-sub";

    await deployments.deploy("ProofOfSub", {
        from: deployer,
        args: [BOT_ADDRESS, name, symbol, baseURI],
        log: true,
    });
};

export default func;
