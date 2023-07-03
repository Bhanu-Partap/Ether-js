// const { ethers } = require("ethers");
import {ethers} from "ethers"
const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/9a8614ca9a11412aaab9734cdde0cd29'
);
const queryBlockchain = async()=>{
    // const block = await provider.getBlockNumber();
    // console.log("current block number s :", block);
}

// checking the balance of the address in BigNumber
const balance = await provider.getBalance("0xc0F053C1D763Fe2156E51E5b243be75cf3FE87AB");
console.log("balance of the address : ",balance );

// in Ether balance
const balanceEther = ethers.utils.formatEther(balance);
console.log("Balance in Ether",balanceEther);

const balanceWei = ethers.utils.parseEther(balanceEther);
console.log(balanceWei);
    
queryBlockchain();