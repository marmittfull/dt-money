import Modal from 'react-modal';
import { Container, RadioButton, TransactionTypeButton } from './style';
import closeImg from '../../assets/close_icon.svg';
import incomeImg from '../../assets/incomes_icon.svg';
import outcomeImg from '../../assets/outcomes_icon.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose }:NewTransactionModalProps) => {
  const [transactionType, setTransactionType] = useState('I');
  const [transactionTitle, setTransactionTitle] = useState('');
  const [transactionPrice, setTransactionPrice] = useState(0);
  const [transactionCategory, setTransactionCategory] = useState('');

  function handleNewTransactionModalForm(event: FormEvent){
    event.preventDefault();

    const data = {
      title: transactionTitle,
      price: transactionPrice,
      category: transactionCategory,
      type: transactionType,
    }

    api.post('/transactions', data)
  }

  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react_modal_ov_style"
      className="react_modal_style"
    >
      <button 
        onClick={onRequestClose}
        type="button"
      >
        <img 
          src={closeImg} 
          alt="Close Icon" 
          className="react_modal_close_button"
        />
      </button>
      <Container>
        <h2>New Transaction</h2>

        <input 
          type="text" 
          placeholder="Title"
          value={transactionTitle}
          onChange={(event) => setTransactionTitle(event.target.value)}
        />
        <input 
          type="number" 
          placeholder="Price"
          value={transactionPrice}
          onChange={(event) => setTransactionPrice(Number(event.target.value))}  
        />
        <TransactionTypeButton>
          <RadioButton
            onClick={() => { setTransactionType('I') }}
            isActive={transactionType === 'I'}
            type="button"
            activeColor="green"
          >
            <img src={incomeImg} alt="Income icon" />
            <span>Income</span>
          </RadioButton>
          <RadioButton
            onClick={() => { setTransactionType('O') }}
            isActive={transactionType === 'O'}
            type="button"
            activeColor="red"
          >
            <img src={outcomeImg} alt="Outcome icon" />
            <span>Outcome</span>
          </RadioButton>
        </TransactionTypeButton>
        <input 
          type="text" 
          placeholder="Category"
          value={transactionCategory}
          onChange={(event) => setTransactionCategory(event.target.value)}
        />
        <button 
          type="submit"
          onClick={handleNewTransactionModalForm}>
          Add
        </button>
      </Container>
    </Modal>
  )
}