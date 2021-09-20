import Modal from 'react-modal';
import { Container, RadioButton, TransactionTypeButton } from './style';
import closeImg from '../../assets/close_icon.svg';
import incomeImg from '../../assets/incomes_icon.svg';
import outcomeImg from '../../assets/outcomes_icon.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/TransactionsContext';

Modal.setAppElement('#root');

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose }:NewTransactionModalProps) => {
  const [type, setType] = useState('I');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

  const { createTransaction } = useTransactions();

  async function handleNewTransactionModalForm(event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      price,
      category,
      type
    });
    
    setType('I');
    setTitle('');
    setPrice(0);
    setCategory('');

    onRequestClose();

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
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input 
          type="number" 
          placeholder="Price"
          value={price}
          onChange={(event) => setPrice(Number(event.target.value))}  
        />
        <TransactionTypeButton>
          <RadioButton
            onClick={() => { setType('I') }}
            isActive={type === 'I'}
            type="button"
            activeColor="green"
          >
            <img src={incomeImg} alt="Income icon" />
            <span>Income</span>
          </RadioButton>
          <RadioButton
            onClick={() => { setType('O') }}
            isActive={type === 'O'}
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
          value={category}
          onChange={(event) => setCategory(event.target.value)}
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