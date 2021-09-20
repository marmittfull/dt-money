import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction{
    id: number;
    title: string;
    price: number;
    category: string;
    type: string;
    createdAt: string;
}

type TransactionCreate = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionCreate) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export const TransactionsProvider = ({children}: TransactionProviderProps) => {

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
      api.get('/transactions')
        .then(response => {
          setTransactions(response.data.transactions);
        })
    }, []);

    async function createTransaction(transaction : TransactionCreate){
        const response = await api.post('/transactions', {
            ...transaction, 
            'createdAt': new Date()
        });

        setTransactions([
            ...transactions,
            response.data.transaction            
        ])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export const useTransactions = () => {
    const context = useContext(TransactionsContext);

    return context;
}