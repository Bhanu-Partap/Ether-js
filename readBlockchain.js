const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/9a8614ca9a11412aaab9734cdde0cd29'
);
const queryBlockchain = async()=>{
    const block = await provider.getBlockNumber();
    console.log("current block number s :", block);

}

queryBlockchain();