import { useState } from "react";
import { DashBoard } from "./components/DashBoard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";
import { NewTransactionModal } from './components/NewTransactionModal'

export function App() {

  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleNewTransactionModalOpen(){
    setNewTransactionModalOpen(true);
  }
  function handleNewTransactionModalClose(){
    setNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header handleNewTransactionModalOpen={handleNewTransactionModalOpen}/>
      <DashBoard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalClose}
      />
      <GlobalStyles />
    </>
  );
}