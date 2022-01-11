import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { ethers } from "ethers";
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";
// import { EtherscanProvider } from '@ethersproject/providers';

const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {

  const [greetingMsg, setGreetingMsg] = useState('');

  const requestAccount = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts'});
  }

  const fetchGreeting = async () => {
    if ( typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider);
      
      try {
        const data = await contract.greet();
        console.log("data: ", data);
      } catch (err) {
        console.error("Error: ", err);
      }
    }
  }

  const setGreeting = async () => {
    if (!greetingMsg)  return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const txn = await contract.setGreeting(greetingMsg);
      await txn.wait();
      fetchGreeting();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchGreeting}>Fetch Greeting Message</button>
        <button onClick={setGreeting}>Set Greeting Msg</button>
        <input onChange={(e) => setGreetingMsg(e.target.value)} placeholder='Set Greeting here...'></input>
      </header>
    </div>
  );
}

export default App;
