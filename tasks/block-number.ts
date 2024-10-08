import { task } from "hardhat/config.js";
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types/runtime";

export default task("block-number", "Prints the current block number").setAction(
  async (taskArgs: TaskArguments, hre: HardhatRuntimeEnvironment) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Current block number: ${blockNumber}`);
  }
);
