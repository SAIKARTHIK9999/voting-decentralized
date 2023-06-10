import {useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractAbi, contractAddress } from './constants/constant';
import Login from './components/Login';
import './App.css';

function App(){

  const [provider, setProvider] = useState(null);
  const [account, setAccount ] = useState(null);
  const [ isConnected, setIsConnected ] = useState(false);

  async function connectToMetamask(){
    if (window.ethereum) {
      try{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        console.log("Metamask connected: "+address);
        setIsConnected(true);
      }
      catch(e){
        console.log(e);
      }
    }
    else{
      console.error("MetaMask not detected in the browser");
    }
  }
    return (
      <div className="App">
        <Login connectWallet = {connectToMetamask}/>
      </div>
    )
}


export default App