
import './App.css';
import Web3 from 'web3';

const web3 = new Web3(
  window.ethereum
);

function App() {

  let accounts = [];

  //Sending Ethereum to an address
  async function sendEthButton() { 
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
  }

  async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  }

  return (
    <div className="App">
      <header className="App-header">
        <span className="Big-plus">+</span>
        <p>
          React App deployed on IPFS with MM intergation and Web3.
        </p>
        <button onClick={getAccount}>Connect Meta Mask</button>
        <button onClick={sendEthButton}>Send Matic</button>
      </header>
    </div>
  );
}

export default App;
