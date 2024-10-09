// this is the script to deploy the contract in Hardhat V6
// this is a standalone script
// it does not run with "npx hardhat ignition deploy"
// because Ignition Modules do not support async
// it needs to be called with "npx hardhat run scripts/deploy.ts"

import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types/runtime";
import hre from "hardhat";

async function main(hre: HardhatRuntimeEnvironment) {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleStorageFactory.deploy();

  await simpleStorage.waitForDeployment();
  const contractAddress = await simpleStorage.getAddress();
  console.log("SimpleStorage deployed to:", contractAddress);
}

main(hre).catch(console.error);
