/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

const ALCHEMY_RINKEBY = process.env.ALCHEMY_RINKEBY;
const TEST_ACCOUNT_PRIVATE_KEY = process.env.TEST_ACCOUNT_PRIVATE_KEY;
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_RINKEBY}`,
      accounts: [`0x${TEST_ACCOUNT_PRIVATE_KEY}`]
    }
  }
};
