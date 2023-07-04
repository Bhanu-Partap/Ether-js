import "./App.css";
import abi from "./abi.json";
import { ethers } from "ethers";
import { useEffect} from "react"

function App() {
  const contractAddress = "0xDE1146AD18dDc00f45A578b7f6612Cbe8FD96De6";

  useEffect(() => {
    const abijson = abi;
    const writeContract = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abijson, signer);
      await contract.setValue(5);
    };
    writeContract();
  }, []);

  return (
    <>
      <div className="helo">hello</div>
    </>
  );
}

export default App;
