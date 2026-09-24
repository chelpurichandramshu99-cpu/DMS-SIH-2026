import { defineConfig } from "hardhat/config";
import hardhatEthers from "@nomicfoundation/hardhat-ethers";
import "dotenv/config";

export default defineConfig({
  plugins: [hardhatEthers],

  solidity: {
    version: "0.8.34",
  },

  networks: {
    sepolia: {
      type: "http",
      url: process.env.BLOCKCHAIN_RPC_URL!,
      accounts: [process.env.BLOCKCHAIN_PRIVATE_KEY!],
    },
  },
});