import { ethers } from "ethers";
import fs from "node:fs";
import dotenv from "dotenv";
dotenv.config();

const RPC_URL = process.env.RPC_URL || "";
console.log("RPC_URL:", RPC_URL);
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

try {
  await main();
  process.exit(0);
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}

async function main() {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  const abi = fs.readFileSync("./build/SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const bin = fs.readFileSync("./build/SimpleStorage_sol_SimpleStorage.bin", "utf-8");

  const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
  const contract = await contractFactory.deploy();
  const transactionReceipt = await contract.deploymentTransaction()?.wait(1);
  console.log("transactionReceipt:", transactionReceipt);

  const responseFromRetrieve = await contract.getFunction("retrieve").call(null);
  console.log("responseFromRetrieve:", responseFromRetrieve.toString());

  const responseFromStore = await contract.getFunction("setFavoriteNumber").call(null, 69);
  const storeReceipt = await responseFromStore.wait(1);
  console.log("storeReceipt:", storeReceipt);
}
