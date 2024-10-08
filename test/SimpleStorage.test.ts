import { expect } from "chai";
import { ethers } from "hardhat";
import { SimpleStorage } from "./../typechain-types/";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers.js";

const CONTRACT_NAME = "SimpleStorage";

describe(CONTRACT_NAME, function () {
  let simpleStorage: SimpleStorage;
  let deployer: HardhatEthersSigner;

  beforeEach(async function () {
    [deployer] = await ethers.getSigners();
    simpleStorage = await ethers.deployContract(CONTRACT_NAME);
  });

  it("retrieve should return zero", async function () {
    const currentValue = await simpleStorage.retrieve();
    expect(currentValue).to.equal(0);
  });

  it("setFavoriteNumber should update the value", async function () {
    const setTx = await simpleStorage.setFavoriteNumber(42);
    await setTx.wait();

    const newCurrentValue = await simpleStorage.retrieve();
    expect(newCurrentValue).to.equal(42);
  });
});

