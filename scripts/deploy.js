const { ethers } = require("hardhat");

async function main() {
  const [deployer, hodler] = await ethers.getSigners();

  //get deployer account

  console.log("===get deployer account===\n");
  console.log("deploying contract with the account:", deployer.address);
  console.log("account eth balance:", (await deployer.getBalance()).toString());

  //deploying the coin: PracticeCoin

  console.log("\n===deploy the coin ===\n");
  const PracticeCoin = await ethers.getContractFactory("PracticeCoin");
  const practiceCoin = await PracticeCoin.deploy();
  const receipt = await practiceCoin.deployTransaction.wait();
  console.log("gas used to deploy coin:", receipt.gasUsed.toNumber());
  console.log("PracticeCoin address:", practiceCoin.address);

  //verify all the coin info

  console.log("\n=== verify coin info ===\n");
  const symbol = await practiceCoin.symbol();
  console.log("PracticeCoin symbol:", symbol);
  const ownerBalance = await practiceCoin.balanceOf(deployer.address);
  console.log("account balance:", (await deployer.getBalance().toString()));
  console.log("deployer account balance of practice coin:", ownerBalance.toString());
}

main()
  .then(()=> process.exit(0))
  .then(()=>{
    console.error(error)
    process.exit(1);
  })
