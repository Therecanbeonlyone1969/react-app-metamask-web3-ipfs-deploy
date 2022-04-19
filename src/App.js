import React from 'react';
import fleekLogo from './fleek-logo.png';
import reactLogo from './react-logo.svg';

import detectEthereumProvider from '@metamask/detect-provider';

// this returns the provider, or null if it wasn't detected
const provider = await detectEthereumProvider();

if (provider) {
  App(provider); // Initialize your app
} else {
  console.log('Please install MetaMask!');
}

import './App.css';

function App(provider) {

  if (provider !== window.ethereum) {
    console.error('Do you have multiple wallets installed?');
  }

  const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  };

  const ButtonGroup = styled.div`
  display: flex;

  const ethereumButton = document.querySelector('.enableEthereumButton');
  const sendEthButton = document.querySelector('.sendEthButton');

  let accounts = [];

  //Sending Ethereum to an address
  sendEthButton.addEventListener('click', () => {
    ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: accounts[0],
            to: '0x1E246E6DA742D0147533D94062dCF67Cfa2e9c37',
            value: web3.utils.toWei('1','gwei'),
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
  });

  ethereumButton.addEventListener('click', () => {
    getAccount();
  });

  async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={fleekLogo} className="Fleek-logo" alt="fleek-logo" />
        <span className="Big-plus">+</span>
        <img src={reactLogo} className="React-logo" alt="react-logo" />
        <p>
          React App deployed on IPFS with MM intergation and Web3.
        </p>
        <ButtonGroup>
        <Button class="enableEthereumButton btn">Connect Meta Mask</Button>
        <Button class="sendEthButton btn">Send Matic</Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
