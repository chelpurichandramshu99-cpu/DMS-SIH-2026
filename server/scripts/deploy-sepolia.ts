import { network } from "hardhat";

async function main() {
  const { ethers } = await network.connect();

  const contract = await ethers.deployContract("EvidenceIntegrity");

  await contract.waitForDeployment();

  console.log("EvidenceIntegrity deployed to:");
  console.log(await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});