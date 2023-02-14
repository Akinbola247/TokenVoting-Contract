import { ethers } from "hardhat";

async function main() {
    const [owner, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();
    // const Voting = await ethers.getContractFactory("voting");
    // const vote = await Voting.connect(owner).deploy(); 
    // await vote.deployed();
  
    // console.log(`Deployment successful, deployed to ${vote.address}`);
  
    // const votingg = await ethers.getContractAt("Ivote", vote.address);
    // const buyamount = ethers.utils.parseEther("0.02");
    // const buyToken = await vote.connect(addr2).buyToken({ value: buyamount });
    // const buyToken1 = await vote.connect(addr5).buyToken({ value: buyamount });

    // const getBalance = await vote._balanceOf(addr2.address);
    // const getBalance1 = await vote._balanceOf(addr5.address);
    // console.log(getBalance);
    // console.log(getBalance1);

    // const startVote = await vote.connect(owner).startVoting();
    // console.log(startVote);
    // const register = await vote.connect(addr1).registerContender(addr1.address);
    // const register1 = await vote.connect(addr3).registerContender(addr3.address);
    // const register2 = await vote.connect(addr4).registerContender(addr4.address);

    // const votingPool = await vote.connect(addr2).votingPool(addr1.address, addr3.address, addr4.address);
    // const votingPool1 = await vote.connect(addr5).votingPool(addr1.address, addr3.address, addr4.address);

    const vote = await ethers.getContractAt("Ivote", "0xf9cABeE9D323A1Ad2aA70D560E610be80c8B1414");
    // const collateVote = await vote.connect(owner).collateVote(addr1.address, addr3.address, addr4.address);
    const getWinner = await vote.getWinner();
    console.log(getWinner);

    const endVote = await vote.connect(owner).endVoting(owner.address, addr3.address, addr4.address);
    console.log("Voting ended");

}

  
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  