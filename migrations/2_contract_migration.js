const ERC20Token = artifacts.require("erc20Token");
const supplyChain = artifacts.require("supplyChain");

module.exports = function (ERC20Token) {
  deployer.deploy(Migrations);
  deployer.deploy(supplyChain);
};
