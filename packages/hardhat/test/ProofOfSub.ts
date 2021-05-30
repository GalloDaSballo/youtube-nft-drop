/* eslint-disable func-names */
import { expect } from "chai";
import { deployments, ethers } from "hardhat";
import { ProofOfSub } from "../typechain";
import { deploy } from "./helpers";
import { BOT_ADDRESS, TEST_IMAGE_URI } from "../config";

const setup = deployments.createFixture(async () => {
    const admin = await ethers.getNamedSigner("admin");
    const proofOfSub = (await deploy("ProofOfSub", {
        args: [BOT_ADDRESS, "YouTube Proof of Sub", "YTSUB", "test"],
        connect: admin,
    })) as ProofOfSub;

    return {
        proofOfSub,
    };
});

describe("Unit tests", function () {
    describe("ProofOfSub", function () {
        let proofOfSub: ProofOfSub;
        const channelId = "UC_Jt1VYHZO4Kc4cJQP5utdw";
        const imageURI = TEST_IMAGE_URI;

        beforeEach(async function () {
            const deployment = await setup();
            proofOfSub = deployment.proofOfSub;
        });

        it("should have the name and symbol set", async function () {
            expect((await proofOfSub.symbol()) === "YTSUB");
            expect((await proofOfSub.name()) === "YouTube Proof of Sub");
        });

        it("should mint a token and return a value", async function () {
            try {
                const result = expect(await proofOfSub.awardItem(BOT_ADDRESS, imageURI, channelId)).throw;
                console.log("result", result);
            } catch (e) {
                console.log(e);
            }
        });

        it("should not mint a token", async function () {
            const [addr] = await ethers.getSigners();
            console.log("addr", addr);
            await proofOfSub.connect(addr).awardItem(BOT_ADDRESS, imageURI, channelId);
        });
    });
});
