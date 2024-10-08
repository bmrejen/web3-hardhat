import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import process from "process";
import "./tasks/block-number";

if (!process.env.GANACHE_URL || !process.env.PRIVATE_KEY || !process.env.GANACHE_PRIVATE_KEY) {
  throw new Error("Missing environment variables");
}

const config: HardhatUserConfig = {
  solidity: "0.8.8",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    gasPrice: 42, // do not forget this line or it does not work
    coinmarketcap: process.env.COINMARKETCAP_API_KEY // to get prices in USD
  },
  networks: {
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337
    },
    ganache: {
      url: process.env.GANACHE_URL,
      accounts: [process.env.GANACHE_PRIVATE_KEY],
      chainId: 1337
    },
    sepolia: {
      url: process.env.RPC_URL_SEPOLIA,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};

export default config;

