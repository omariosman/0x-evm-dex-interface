import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';

function MyComponent() {
  const [tokens, setTokens] = useState([]);
  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchTokens = async () => { 
      const response = await axios.get("https://tokens.coingecko.com/uniswap/all.json");
      setTokens(response.data.tokens);
    };
    fetchTokens();
  }, []);

  const handleFromTokenChange = (event) => {
    setFromToken(event.target.value);
  };

  const handleToTokenChange = (event) => {
    setToToken(event.target.value);
  };

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>Swap Tokens</button>
      <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose} contentLabel="Token Selection Modal" ariaHideApp={false}>
        <h2>Select Tokens</h2>
        <div>
          <label htmlFor="fromToken">From:</label>
          <select id="fromToken" value={fromToken} onChange={handleFromTokenChange}>
            <option value="">Select a token</option>
            {tokens.map((token, index) => (
              <option key={index} value={token.id}>
                {token.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="toToken">To:</label>
          <select id="toToken" value={toToken} onChange={handleToTokenChange}>
            <option value="">Select a token</option>
            {tokens.map((token, index) => (
              <option key={index} value={token.id}>
                {token.name}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleModalClose}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default MyComponent;
