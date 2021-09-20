import EntradasIcon from '../../assets/incomes_icon.svg';
import SaidasIcon from '../../assets/outcomes_icon.svg';
import TotalIcon from '../../assets/money_icon.svg';
import { Container } from "./style";
import { useTransactions } from '../../hooks/TransactionsContext';

export const Summary = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'I'){
      acc.deposits += transaction.price;
      acc.total += transaction.price
    } else {
      acc.withdraws += transaction.price;
      acc.total -= transaction.price;
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return(
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={EntradasIcon} alt="Entradas" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.deposits)
          }
        </strong>
      </div>
      <div>
        <header>
          <span>Saídas</span> 
          <img src={SaidasIcon} alt="Saídas" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.withdraws)
          }
        </strong>
      </div>
      <div className="green_highlight">
        <header>
          <span>Total</span>
          <img src={TotalIcon} alt="Total" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.total)
          }
        </strong>
      </div>            
    </Container>
  );
}