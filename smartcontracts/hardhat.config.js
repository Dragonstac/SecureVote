require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork : "hardhat",
  networks :{
    goerli :{
      url : "https://stylish-burned-aura.ethereum-goerli.discover.quiknode.pro/3b6a6e64b1b2426592ca68bc5c5da97dbfaf1a9a/",
      accounts :["6fb6b08acf3a52027d7cde06c9c9c54085f738384a3a7e9d46d8ac1a81803dc4"],
    }
  },
  solidity: "0.8.17",
};
