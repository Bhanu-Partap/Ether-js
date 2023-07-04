import {ethers} from "ethers";
const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/9a8614ca9a11412aaab9734cdde0cd29')

const contractAddress = "0xDE1146AD18dDc00f45A578b7f6612Cbe8FD96De6";
const contractAbi =[
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getcontractaddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contractInteraction= async()=>{
    const walletContract = new ethers.Contract(contractAddress, contractAbi, provider)

    // const contractName = await walletContract.name();
    // console.log("Contract Name :", contractName);

    const num = await walletContract.getValue()
    console.log(" Number value :" , String(num));

    // const contractBalance = await walletContract.contractBalance();
    // const balancetoether = ethers.utils.formatEther(contractBalance);
    // console.log("Contract balance :",balancetoether);

    // const userBalance = await walletContract.accountBalance("0xc0F053C1D763Fe2156E51E5b243be75cf3FE87AB");
    // const userbalncetoether = ethers.utils.formatEther(userBalance)
    // console.log("User Balance : ",userbalncetoether);
}

contractInteraction();