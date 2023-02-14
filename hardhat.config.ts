import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",


  networks: {
    hardhat: {
    },
    goerli: {
      url: process.env.GOERLI_RPC,
      //@ts-ignore
      accounts: [process.env.PRIVATE_KEY1,process.env.PRIVATE_KEY2, process.env.PRIVATE_KEY3, process.env.PRIVATE_KEY4, process.env.PRIVATE_KEY5, process.env.PRIVATE_KEY6]
    }
  },
  etherscan: {
    apiKey: process.env.ETHER_SCAN_API
  }

};

export default config;
