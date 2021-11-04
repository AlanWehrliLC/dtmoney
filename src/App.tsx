import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global"
import { TransactionProvider } from './TransactionsContext';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionMotal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionMotal(){
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionProvider>
      <Header handleOpenNewTransactionMotal={handleOpenNewTransactionMotal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionMotal} 
      />
      <GlobalStyle />
    </ TransactionProvider>
  );
}