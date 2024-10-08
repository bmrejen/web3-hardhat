import { ethers } from "hardhat";

// run with npx run scripts
// scripts have more options than ignition modules, such as async support
const CONTRACT_ADDRESS = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

async function main() {
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleStorage.attach(CONTRACT_ADDRESS);

  const currentValue = await simpleStorage.getFunction("retrieve").call(null);
  console.log(`Current value: ${currentValue}`);
}

main().catch(console.error);
