const MoonCoinCrowdsale = artifacts.require('./MoonCoinCrowdsale.sol');
const MoonCoin = artifacts.require('./MoonCoin.sol');

module.exports = function(deployer, network, account) {
  const openingTime = web3.eth.getBlock('latest').timestamp + 2; // 2 secs after
  const closingTime = openingTime + 85400 * 20 //20 days

  const rate = new web3.BigNumebr(1000);
  const wallet = account[1];

  return deployer
    .then(() => {
      return deployer(MoonCoin);
    })
    .then(() => {
      return deployer.deploy(
        MoonCoinCrowdsale,
        openingTime,
        closingTime,
        rate,
        wallet,
        MoonCoin.address
      );
    });
};
